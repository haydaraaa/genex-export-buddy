import { useLanguage } from '@/i18n/LanguageContext';
import { Globe2, MapPin, Fish, CakeSlice, Apple, Snowflake } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import WorldMap from '@/components/WorldMap';
import { motion } from 'framer-motion';

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

      <WorldMap />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Arab Markets Card */}
            <ScrollReveal direction="right">
              <div className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Globe2 className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('markets.arab.title')}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t('markets.arab.desc')}</p>
                
                {/* Arab key products */}
                <motion.div 
                  className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Apple className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground text-sm">{t('markets.arab.products')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('markets.arab.products.desc')}</p>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {arabCountries.map((flag, i) => (
                    <motion.span 
                      key={i} 
                      className="text-4xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {flag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* European Markets Card */}
            <ScrollReveal direction="left" delay={0.15}>
              <div className="bg-card rounded-2xl border border-border p-8 hover:shadow-xl transition-all h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <MapPin className="h-8 w-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{t('markets.europe.title')}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{t('markets.europe.desc')}</p>
                
                {/* Frozen Seafood sub-section */}
                <motion.div 
                  className="bg-accent/5 rounded-xl p-4 mb-4 border border-accent/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Fish className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-foreground text-sm">{t('markets.europe.seafood')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('markets.europe.seafood.desc')}</p>
                </motion.div>

                {/* Frozen Bakery sub-section */}
                <motion.div 
                  className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/10"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Snowflake className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-foreground text-sm">{t('markets.europe.frozen')}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{t('markets.europe.frozen.desc')}</p>
                </motion.div>

                <div className="flex flex-wrap gap-3">
                  {euroCountries.map((flag, i) => (
                    <motion.span 
                      key={i} 
                      className="text-4xl"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {flag}
                    </motion.span>
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
