import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { languages } from '@/i18n/translations';
import { Menu, X, Globe } from 'lucide-react';
import genexLogo from '@/assets/logo.png';

const navLinksLeft = [
  { key: 'nav.home', path: '/' },
  { key: 'nav.about', path: '/about' },
  { key: 'nav.products', path: '/products' },
  { key: 'nav.markets', path: '/markets' },
  { key: 'nav.faq', path: '/faq' },
];

const navLinksRight = [
  { key: 'nav.certificates', path: '/certificates' },
  { key: 'nav.gallery', path: '/gallery' },
  { key: 'nav.partners', path: '/partners' },
  { key: 'nav.contact', path: '/contact' },
];

const allNavLinks = [...navLinksLeft, ...navLinksRight];

const Navbar = () => {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-9 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        {/* Desktop Nav (xl+) */}
        <div className="hidden xl:flex items-center py-2 relative">
          {/* Desktop Nav - Left */}
          <div className="flex flex-1 items-center gap-1 justify-end pe-40 min-w-0">
            {navLinksLeft.map(link => (
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

          {/* Logo - Perfectly Centered */}
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center px-4 z-10">
            <img src={genexLogo} alt="GENEX" className="h-80 w-auto drop-shadow-lg" />
          </Link>

          {/* Desktop Nav - Right + Language */}
          <div className="flex flex-1 items-center gap-1 justify-start ps-40 min-w-0">
            {navLinksRight.map(link => (
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
        <div className="xl:hidden relative flex items-center justify-end h-20">
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center z-10">
            <img src={genexLogo} alt="GENEX" className="h-32 w-auto" />
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
            {allNavLinks.map(link => (
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
