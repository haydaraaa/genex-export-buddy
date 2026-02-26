import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import categoryFruits from '@/assets/category-fruits.jpg';
import categoryVegetables from '@/assets/category-vegetables.jpg';
import categoryCanned from '@/assets/category-canned.jpg';

const Products = () => {
  const { t, isRtl } = useLanguage();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    { key: 'fruits', title: t('products.fruits.title'), desc: t('products.fruits.desc'), img: categoryFruits, link: '/products/fruits' },
    { key: 'vegetables', title: t('products.vegetables.title'), desc: t('products.vegetables.desc'), img: categoryVegetables, link: '/products/vegetables' },
    { key: 'canned', title: t('products.canned.title'), desc: t('products.canned.desc'), img: categoryCanned, link: '/products/canned' },
  ];

  return (
    <div>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('products.page.title')}</h1>
            <p className="text-primary-foreground/70 text-lg">{t('products.page.subtitle')}</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map(cat => (
              <StaggerItem key={cat.key}>
                <Link to={cat.link} className="block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-foreground mb-2">{cat.title}</h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{cat.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      {t('products.viewAll') || (isRtl ? 'عرض الكل' : 'View All')}
                      <Arrow className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default Products;
