import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import ProductCard from '@/components/ProductCard';
import categoryHero from '@/assets/category-vegetables.jpg';
import tomatoImg from '@/assets/products/tomato.jpg';
import potatoAsset from '@/assets/products/potato-gallery/p1.jpg.asset.json';
import cucumberImg from '@/assets/products/cucumber.jpg';
import zucchiniImg from '@/assets/products/zucchini.jpg';
import eggplantImg from '@/assets/products/eggplant.jpg';
import carrotImg from '@/assets/products/carrot.jpg';
import cabbageImg from '@/assets/products/cabbage.jpg';
import lettuceImg from '@/assets/products/lettuce.jpg';
import pepperAsset from '@/assets/products/pepper-real.jpg.asset.json';
import onionAsset from '@/assets/products/onion-real2.jpg.asset.json';
import sweetPotatoAsset from '@/assets/products/sweet-potato-real.jpg.asset.json';
import garlicAsset from '@/assets/products/garlic-real2.jpg.asset.json';
import leekAsset from '@/assets/products/leek-real.jpg.asset.json';
import springOnionAsset from '@/assets/products/spring-onion-real.jpg.asset.json';
import snowPeasAsset from '@/assets/products/snow-peas-real.jpg.asset.json';

const Vegetables = () => {
  const { t, isRtl } = useLanguage();

  const products = [
    { name: 'tomato', img: tomatoImg },
    { name: 'pepper', img: pepperAsset.url },
    { name: 'onion', img: onionAsset.url },
    { name: 'springOnion', img: springOnionAsset.url },
    { name: 'garlic', img: garlicAsset.url },
    { name: 'potato', img: potatoAsset.url },
    { name: 'sweetPotato', img: sweetPotatoAsset.url },
    { name: 'leek', img: leekAsset.url },
    { name: 'snowPeas', img: snowPeasAsset.url },
    { name: 'cucumber', img: cucumberImg },
    { name: 'zucchini', img: zucchiniImg },
    { name: 'eggplant', img: eggplantImg },
    { name: 'carrot', img: carrotImg },
    { name: 'cabbage', img: cabbageImg },
    { name: 'lettuce', img: lettuceImg },
  ];

  return (
    <div>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={categoryHero} alt="Fresh vegetables" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">{t('products.vegetables.title')}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t('products.vegetables.desc')}</p>
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
          <span className="text-foreground font-medium">{t('products.vegetables.title')}</span>
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

export default Vegetables;
