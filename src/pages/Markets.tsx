import { useLanguage } from '@/i18n/LanguageContext';
import { Globe2, MapPin } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import WorldMap from '@/components/WorldMap';

const Markets = () => {
  const { t } = useLanguage();

  const arabCountries = ['🇸🇦', '🇦🇪', '🇰🇼', '🇶🇦', '🇴🇲', '🇧🇭', '🇯🇴', '🇮🇶', '🇱🇧'];
  const euroCountries = ['🇩🇪', '🇳🇱', '🇬🇧', '🇫🇷', '🇮🇹', '🇪🇸'];

  return (
    <div>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('markets.title')}</h1>
            <p className="text-primary-foreground/70 text-lg">{t('markets.subtitle')}</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive World Map */}
      <WorldMap />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal direction="right">
              <div className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Globe2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('markets.arab.title')}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t('markets.arab.desc')}</p>
                <div className="flex flex-wrap gap-3">
                  {arabCountries.map((flag, i) => (
                    <span key={i} className="text-4xl">{flag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('markets.europe.title')}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t('markets.europe.desc')}</p>
                <div className="flex flex-wrap gap-3">
                  {euroCountries.map((flag, i) => (
                    <span key={i} className="text-4xl">{flag}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Markets;
