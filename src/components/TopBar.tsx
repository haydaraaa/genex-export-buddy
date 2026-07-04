import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const TopBar = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground/80 text-xs border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-9 gap-4">
        <div className="flex items-center gap-3 sm:gap-5 min-w-0">
          <a href="tel:+4915735334622" className="flex items-center gap-1.5 hover:text-primary-glow transition-colors">
            <Phone className="h-3 w-3 shrink-0" />
            <span dir="ltr" className="hidden xs:inline sm:inline">+49 157 3533 4622</span>
          </a>
          <a href="mailto:info@genex-corp.com" className="flex items-center gap-1.5 hover:text-primary-glow transition-colors min-w-0">
            <Mail className="h-3 w-3 shrink-0" />
            <span className="truncate">info@genex-corp.com</span>
          </a>
        </div>
        <div className="flex items-center gap-2 md:gap-3 text-[10px] md:text-xs">
          <div className="flex items-center gap-1 shrink-0">
            <MapPin className="h-2.5 w-2.5 md:h-3 md:w-3" />
            <span>{t('topbar.location')}</span>
          </div>
          <span className="text-primary-foreground/30">|</span>
          <div className="flex items-center gap-1 shrink-0">
            <MapPin className="h-2.5 w-2.5 md:h-3 md:w-3" />
            <span>{t('topbar.location.hannover')}</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TopBar;
