import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import ProductCard from '@/components/ProductCard';
import categoryHero from '@/assets/category-frozen.jpg';
import frozenStrawberryImg from '@/assets/products/frozen-strawberry.jpg';
import frozenMangoImg from '@/assets/products/frozen-mango.jpg';
import frozenPomegranateImg from '@/assets/products/frozen-pomegranate.jpg';
import frozenMixedberriesImg from '@/assets/products/frozen-mixedberries.jpg';
import frozenGreenbeansImg from '@/assets/products/frozen-greenbeans.jpg';
import frozenPeasImg from '@/assets/products/frozen-peas.jpg';
import frozenOkraImg from '@/assets/products/frozen-okra.jpg';
import frozenMolokhiaImg from '@/assets/products/frozen-molokhia.jpg';
import frozenMixedvegetablesImg from '@/assets/products/frozen-mixedvegetables.jpg';
import frozenArtichokeImg from '@/assets/products/frozen-artichoke.jpg';

const Frozen = () => {
  const { t, isRtl } = useLanguage();

  const products = [
    { name: 'frozenStrawberry', img: frozenStrawberryImg },
    { name: 'frozenMango', img: frozenMangoImg },
    { name: 'frozenPomegranate', img: frozenPomegranateImg },
    { name: 'frozenMixedBerries', img: frozenMixedberriesImg },
    { name: 'frozenGreenBeans', img: frozenGreenbeansImg },
    { name: 'frozenPeas', img: frozenPeasImg },
    { name: 'frozenOkra', img: frozenOkraImg },
    { name: 'frozenMolokhia', img: frozenMolokhiaImg },
    { name: 'frozenMixedVegetables', img: frozenMixedvegetablesImg },
    { name: 'frozenArtichoke', img: frozenArtichokeImg },
  ];

  return (
    <div>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={categoryHero} alt="Premium frozen products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">{t('products.frozen.title')}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t('products.frozen.desc')}</p>
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
          <span className="text-foreground font-medium">{t('products.frozen.title')}</span>
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

export default Frozen;
