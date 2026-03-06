import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/translations';
import { Menu, X, Globe } from 'lucide-react';
import genexLogo from '@/assets/logo.png';

const navLinks = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.products', path: '/products' },
  { key: 'nav.markets', path: '/markets' },
  { key: 'nav.certificates', path: '/certificates' },
  { key: 'nav.gallery', path: '/gallery' },
  { key: 'nav.partners', path: '/partners' },
  { key: 'nav.contact', path: '/contact' },
  { key: 'nav.faq', path: '/faq' },
];

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-9 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        {/* Desktop Nav (xl+) */}
        <div className="hidden xl:grid xl:grid-cols-[1fr_auto_1fr] items-center gap-6 py-2">
          {/* Desktop Nav - Left */}
          <div className="flex items-center gap-1 justify-end min-w-0">
            {navLinks.slice(0, 4).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'bg-primary-glow/20 text-primary-glow'
                    : 'text-primary-foreground/80 hover:text-primary-glow hover:bg-primary-foreground/5'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>

          {/* Logo - In flow (no floating/overlap) */}
          <Link to="/" className="flex items-center justify-center px-4 shrink-0">
            <img src={genexLogo} alt="GENEX" className="h-44 w-auto drop-shadow-lg" />
          </Link>

          {/* Desktop Nav - Right + Language */}
          <div className="flex items-center gap-1 justify-start min-w-0">
            {navLinks.slice(4).map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === link.path
                    ? 'bg-primary-glow/20 text-primary-glow'
                    : 'text-primary-foreground/80 hover:text-primary-glow hover:bg-primary-foreground/5'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}

            {/* Language Selector - Desktop */}
            <div className="relative ms-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-primary-foreground/80 hover:text-primary-glow transition-colors text-sm"
              >
                <Globe className="h-4 w-4" />
                <span>{languages.find(l => l.code === language)?.name}</span>
              </button>
              {langOpen && (
                <div className="absolute top-full end-0 mt-1 bg-card rounded-lg shadow-xl border border-border py-1 min-w-[140px]">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-start px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        language === lang.code ? 'text-primary font-semibold' : 'text-foreground'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile + Tablet */}
        <div className="xl:hidden flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={genexLogo} alt="GENEX" className="h-14 w-auto" />
          </Link>
          <div className="flex items-center gap-2">
            {/* Language Selector - Mobile */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 px-2 py-2 rounded-md text-primary-foreground/80 hover:text-primary-glow transition-colors text-sm"
              >
                <Globe className="h-4 w-4" />
              </button>
              {langOpen && (
                <div className="absolute top-full end-0 mt-1 bg-card rounded-lg shadow-xl border border-border py-1 min-w-[140px]">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-start px-4 py-2 text-sm hover:bg-muted transition-colors ${
                        language === lang.code ? 'text-primary font-semibold' : 'text-foreground'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-primary-foreground/80 hover:text-primary-glow"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="xl:hidden pb-4 border-t border-primary-foreground/10 mt-2 pt-2">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary-glow/20 text-primary-glow'
                    : 'text-primary-foreground/80 hover:text-primary-glow'
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
