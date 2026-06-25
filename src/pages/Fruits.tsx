import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import ProductCard from '@/components/ProductCard';
import categoryHero from '@/assets/category-fruits.jpg';
import strawberryImg from '@/assets/products/strawberry.jpg';
import grapeAsset from '@/assets/products/grape-gallery/g1.jpg.asset.json';
import guavaImg from '@/assets/products/guava.jpg';
import figImg from '@/assets/products/fig.jpg';
import peachImg from '@/assets/products/peach.jpg';
import cantaloupeImg from '@/assets/products/cantaloupe.jpg';
import watermelonAsset from '@/assets/products/watermelon-real.jpg.asset.json';
import pomegranateAsset from '@/assets/products/pomegranate-real.jpg.asset.json';
import lemonAsset from '@/assets/products/lemon-real2.jpg.asset.json';
import mangoAsset from '@/assets/products/mango-real.jpg.asset.json';
import orangeAsset from '@/assets/products/orange-real.jpg.asset.json';
import physalisAsset from '@/assets/products/physalis-real.jpg.asset.json';

const Fruits = () => {
  const { t, isRtl } = useLanguage();

  const products = [
    { name: 'orange', img: orangeAsset.url },
    { name: 'strawberry', img: strawberryImg },
    { name: 'grape', img: grapeAsset.url },
    { name: 'pomegranate', img: pomegranateAsset.url },
    { name: 'mango', img: mangoAsset.url },
    { name: 'guava', img: guavaImg },
    { name: 'fig', img: figImg },
    { name: 'peach', img: peachImg },
    { name: 'watermelon', img: watermelonAsset.url },
    { name: 'lemon', img: lemonAsset.url },
    { name: 'cantaloupe', img: cantaloupeImg },
    { name: 'physalis', img: physalisAsset.url },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={categoryHero} alt="Fresh fruits" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">{t('products.fruits.title')}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t('products.fruits.desc')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center gap-2 text-sm">
          <Link to="/products" className="text-primary hover:underline flex items-center gap-1">
            <ArrowLeft className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
            {t('products.page.title')}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{t('products.fruits.title')}</span>
        </div>
      </div>

      {/* Products Grid */}
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

      {/* CTA */}
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

export default Fruits;
