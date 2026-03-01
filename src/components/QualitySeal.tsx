import { useLanguage } from '@/i18n/LanguageContext';
import { ShieldCheck } from 'lucide-react';

const QualitySeal = () => {
  const { t } = useLanguage();

  return (
    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2">
      <div className="relative">
        <ShieldCheck className="h-6 w-6 text-accent" />
        <span className="absolute -top-0.5 -end-0.5 h-2.5 w-2.5 bg-accent rounded-full border-2 border-background" />
      </div>
      <span className="text-sm font-bold text-accent">{t('qualitySeal.text')}</span>
    </div>
  );
};

export default QualitySeal;
