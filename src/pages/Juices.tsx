import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import ProductCard from '@/components/ProductCard';
import categoryHero from '@/assets/category-juices.jpg';
import juiceOrangeImg from '@/assets/products/juice-orange.jpg';
import juiceMangoImg from '@/assets/products/juice-mango.jpg';
import juiceGuavaImg from '@/assets/products/juice-guava.jpg';
import juiceStrawberryImg from '@/assets/products/juice-strawberry.jpg';
import juicePomegranateImg from '@/assets/products/juice-pomegranate.jpg';
import juiceMixedImg from '@/assets/products/juice-mixed.jpg';
import juiceAppleImg from '@/assets/products/juice-apple.jpg';
import juicePeachImg from '@/assets/products/juice-peach.jpg';
import juiceGrapeImg from '@/assets/products/juice-grape.jpg';
import juiceLemonImg from '@/assets/products/juice-lemon.jpg';

const Juices = () => {
  const { t, isRtl } = useLanguage();

  const products = [
    { name: 'juiceOrange', img: juiceOrangeImg },
    { name: 'juiceMango', img: juiceMangoImg },
    { name: 'juiceGuava', img: juiceGuavaImg },
    { name: 'juiceStrawberry', img: juiceStrawberryImg },
    { name: 'juicePomegranate', img: juicePomegranateImg },
    { name: 'juiceMixed', img: juiceMixedImg },
    { name: 'juiceApple', img: juiceAppleImg },
    { name: 'juicePeach', img: juicePeachImg },
    { name: 'juiceGrape', img: juiceGrapeImg },
    { name: 'juiceLemon', img: juiceLemonImg },
  ];

  return (
    <div>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={categoryHero} alt="Fresh juices" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">{t('products.juices.title')}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t('products.juices.desc')}</p>
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
          <span className="text-foreground font-medium">{t('products.juices.title')}</span>
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

export default Juices;
