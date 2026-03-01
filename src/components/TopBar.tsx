import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const TopBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground/80 text-xs border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-9 gap-4 flex-wrap">
        <div className="flex items-center gap-5">
          <a href="tel:+201234567890" className="flex items-center gap-1.5 hover:text-primary-glow transition-colors">
            <Phone className="h-3 w-3" />
            <span dir="ltr">+20 123 456 7890</span>
          </a>
          <a href="mailto:info@genex-eg.com" className="flex items-center gap-1.5 hover:text-primary-glow transition-colors">
            <Mail className="h-3 w-3" />
            <span>info@genex-eg.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3 w-3" />
          <span>{t('topbar.location')}</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
