import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import categoryHero from '@/assets/category-dates.jpg';
import medjoolImg from '@/assets/products/medjool.jpg';
import ajwaImg from '@/assets/products/ajwa.jpg';
import sukkariImg from '@/assets/products/sukkari.jpg';
import barhiImg from '@/assets/products/barhi.jpg';
import degletnoorImg from '@/assets/products/degletnoor.jpg';
import saidiImg from '@/assets/products/saidi.jpg';

const Dates = () => {
  const { t, isRtl } = useLanguage();

  const products = [
    { name: 'medjool', img: medjoolImg },
    { name: 'ajwa', img: ajwaImg },
    { name: 'sukkari', img: sukkariImg },
    { name: 'barhi', img: barhiImg },
    { name: 'degletnoor', img: degletnoorImg },
    { name: 'saidi', img: saidiImg },
  ];

  return (
    <div>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={categoryHero} alt="Premium dates" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/60" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-6xl font-black text-primary-foreground mb-4">{t('products.dates.title')}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t('products.dates.desc')}</p>
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
          <span className="text-foreground font-medium">{t('products.dates.title')}</span>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {products.map(p => (
              <StaggerItem key={p.name}>
                <div className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.img} alt={t(`product.${p.name}`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{t(`product.${p.name}`)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(`product.${p.name}.desc`)}</p>
                  </div>
                </div>
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

export default Dates;
