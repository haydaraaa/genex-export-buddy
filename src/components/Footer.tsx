import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import genexLogo from '@/assets/logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={genexLogo} alt="GENEX" className="h-14 w-auto" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-glow">{t('footer.links')}</h3>
            <div className="space-y-2">
              {[
                { key: 'nav.home', path: '/' },
                { key: 'nav.about', path: '/about' },
                { key: 'nav.products', path: '/products' },
                { key: 'nav.markets', path: '/markets' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/70 hover:text-primary-glow transition-colors">
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-glow">&nbsp;</h3>
            <div className="space-y-2">
              {[
                { key: 'nav.certificates', path: '/certificates' },
                { key: 'nav.gallery', path: '/gallery' },
                { key: 'nav.partners', path: '/partners' },
                { key: 'nav.contact', path: '/contact' },
              ].map(link => (
                <Link key={link.path} to={link.path} className="block text-sm text-primary-foreground/70 hover:text-primary-glow transition-colors">
                  {t(link.key)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary-glow">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{t('contact.info.address')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Phone className="h-4 w-4 shrink-0" />
                <span dir="ltr">{t('contact.info.phone')}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="h-4 w-4 shrink-0" />
                <span>{t('contact.info.email')}</span>
              </div>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-glow/20 text-primary-foreground/70 hover:text-primary-glow transition-colors">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-sm text-primary-foreground/50">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
