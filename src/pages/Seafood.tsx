import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import ProductCard from '@/components/ProductCard';
import categoryHero from '@/assets/category-seafood.jpg';
import frozenShrimpImg from '@/assets/products/frozen-shrimp.jpg';
import frozenCalamariImg from '@/assets/products/frozen-calamari.jpg';
import frozenFishfilletImg from '@/assets/products/frozen-fishfillet.jpg';
import frozenTilapiaImg from '@/assets/products/frozen-tilapia.jpg';
import frozenSeafoodmixImg from '@/assets/products/frozen-seafoodmix.jpg';
import frozenCrabsticksImg from '@/assets/products/frozen-crabsticks.jpg';

const Seafood = () => {
  const { t, isRtl } = useLanguage();

  const products = [
    { name: 'frozenShrimp', img: frozenShrimpImg },
    { name: 'frozenCalamari', img: frozenCalamariImg },
    { name: 'frozenFishFillet', img: frozenFishfilletImg },
    { name: 'frozenTilapia', img: frozenTilapiaImg },
    { name: 'frozenSeafoodMix', img: frozenSeafoodmixImg },
    { name: 'frozenCrabSticks', img: frozenCrabsticksImg },
  ];

  return (
    <div>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={categoryHero} alt="Premium frozen seafood" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">{t('products.seafood.title')}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t('products.seafood.desc')}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm">
          <Link to="/products" className="text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
            {t('products.page.title')}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{t('products.seafood.title')}</span>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map(p => (
              <StaggerItem key={p.name}>
                <ProductCard name={p.name} img={p.img} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">{t('cta.title')}</h2>
            <p className="text-primary-foreground/70 mb-8">{t('cta.text')}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
              {t('cta.button')}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Seafood;
