import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Language, translations, languages } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const SUPPORTED: Language[] = ['ar', 'en', 'fr', 'de'];

// Arabic-speaking country codes (ISO 3166-1 alpha-2)
const AR_COUNTRIES = new Set(['EG','SA','AE','DZ','MA','TN','LY','SD','IQ','JO','LB','SY','PS','YE','OM','QA','KW','BH','MR','SO','DJ','KM']);
const FR_COUNTRIES = new Set(['FR','BE','LU','MC','CH','CI','SN','CM','ML','BF','NE','TG','BJ','GA','CG','CD','MG','RW','HT']);
const DE_COUNTRIES = new Set(['DE','AT','LI']);

const detectFromBrowser = (): Language => {
  if (typeof navigator === 'undefined') return 'en';
  const langs = [navigator.language, ...(navigator.languages || [])].filter(Boolean);
  for (const raw of langs) {
    const lower = raw.toLowerCase();
    const base = lower.split('-')[0];
    const region = lower.split('-')[1]?.toUpperCase();
    if (base === 'ar' || (region && AR_COUNTRIES.has(region))) return 'ar';
    if (base === 'fr' || (region && FR_COUNTRIES.has(region))) return 'fr';
    if (base === 'de' || (region && DE_COUNTRIES.has(region))) return 'de';
    if (base === 'en') return 'en';
  }
  return 'en';
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'ar';
    const saved = localStorage.getItem('genex-lang') as Language | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
    return detectFromBrowser();
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('genex-lang', lang);
  }, []);

  // Optional: refine via IP-based country lookup (only if user hasn't picked one)
  useEffect(() => {
    const saved = localStorage.getItem('genex-lang');
    if (saved) return;
    let cancelled = false;
    fetch('https://ipapi.co/country/')
      .then(r => r.ok ? r.text() : '')
      .then(country => {
        if (cancelled || !country) return;
        const c = country.trim().toUpperCase();
        let lang: Language | null = null;
        if (AR_COUNTRIES.has(c)) lang = 'ar';
        else if (DE_COUNTRIES.has(c)) lang = 'de';
        else if (FR_COUNTRIES.has(c)) lang = 'fr';
        else if (c) lang = 'en';
        if (lang) setLanguageState(lang);
      })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);


  const dir = languages.find(l => l.code === language)?.dir || 'ltr';
  const isRtl = dir === 'rtl';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  const t = useCallback((key: string) => {
    return translations[language]?.[key] || translations['en']?.[key] || key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
};
