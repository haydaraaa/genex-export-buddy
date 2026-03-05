import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

import freshmartLogo from '@/assets/partners/freshmart.png';
import greenbasketLogo from '@/assets/partners/greenbasket.png';
import alwahaLogo from '@/assets/partners/alwaha.png';
import megastoreLogo from '@/assets/partners/megastore.png';
import primefoodsLogo from '@/assets/partners/primefoods.png';
import goldenmarketLogo from '@/assets/partners/goldenmarket.png';
import eurofreshLogo from '@/assets/partners/eurofresh.png';
import safamarketLogo from '@/assets/partners/safamarket.png';
import natureplusLogo from '@/assets/partners/natureplus.png';
import atlastradingLogo from '@/assets/partners/atlastrading.png';
import foodlandLogo from '@/assets/partners/foodland.png';
import harvesthubLogo from '@/assets/partners/harvesthub.png';

const partners = [
  { name: 'FreshMart', logo: freshmartLogo },
  { name: 'GreenBasket', logo: greenbasketLogo },
  { name: 'Al Waha Foods', logo: alwahaLogo },
  { name: 'MegaStore', logo: megastoreLogo },
  { name: 'PrimeFoods', logo: primefoodsLogo },
  { name: 'Golden Market', logo: goldenmarketLogo },
  { name: 'EuroFresh', logo: eurofreshLogo },
  { name: 'SafaMarket', logo: safamarketLogo },
  { name: 'NaturePlus', logo: natureplusLogo },
  { name: 'Atlas Trading', logo: atlastradingLogo },
  { name: 'FoodLand', logo: foodlandLogo },
  { name: 'Harvest Hub', logo: harvesthubLogo },
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
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-card border border-border rounded-xl px-6 py-3 min-w-[180px] flex flex-col items-center gap-2 hover:shadow-lg hover:border-accent/50 transition-all"
            >
              <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain" />
              <span className="text-sm font-semibold text-foreground/70 whitespace-nowrap">{partner.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersStrip;
