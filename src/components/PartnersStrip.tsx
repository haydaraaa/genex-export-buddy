import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

const partners = [
  'Carrefour', 'METRO', 'Spar', 'Aldi', 'Lidl', 'Lulu Hypermarket',
  'Al Meera', 'Panda', 'Danube', 'Farm Superstores', 'Sultan Center', 'Tamimi Markets',
];

const PartnersStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">{t('partnersStrip.title')}</h2>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </ScrollReveal>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 w-24 bg-gradient-to-e from-background to-transparent z-10" />
        <div className="absolute inset-y-0 end-0 w-24 bg-gradient-to-s from-background to-transparent z-10" />
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        >
          {[...partners, ...partners].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-card border border-border rounded-xl px-8 py-4 min-w-[180px] text-center hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <span className="text-lg font-bold text-foreground/80 whitespace-nowrap">{name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersStrip;
