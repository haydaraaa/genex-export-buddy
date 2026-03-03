import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight, MessageCircle, Globe, Calendar, ShoppingBag, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import WhyUsSection from '@/components/WhyUsSection';
import PartnersStrip from '@/components/PartnersStrip';
import heroBg from '@/assets/hero-bg.jpg';
import genexLogo from '@/assets/logo.png';
import categoryFruits from '@/assets/category-fruits.jpg';
import categoryVegetables from '@/assets/category-vegetables.jpg';
import categoryCanned from '@/assets/category-canned.jpg';
import categoryDates from '@/assets/category-dates.jpg';
import categoryJuices from '@/assets/category-juices.jpg';
import categoryFrozen from '@/assets/category-frozen.jpg';
import categorySeafood from '@/assets/category-seafood.jpg';

const Index = () => {
  const { t, isRtl } = useLanguage();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    { title: t('products.fruits'), desc: t('products.fruits.desc'), img: categoryFruits, link: '/products/fruits' },
    { title: t('products.vegetables'), desc: t('products.vegetables.desc'), img: categoryVegetables, link: '/products/vegetables' },
    { title: t('products.canned'), desc: t('products.canned.desc'), img: categoryCanned, link: '/products/canned' },
    { title: t('products.dates'), desc: t('products.dates.desc'), img: categoryDates, link: '/products/dates' },
    { title: t('products.juices'), desc: t('products.juices.desc'), img: categoryJuices, link: '/products/juices' },
    { title: t('products.frozen'), desc: t('products.frozen.desc'), img: categoryFrozen, link: '/products/frozen' },
    { title: t('products.seafood'), desc: t('products.seafood.desc'), img: categorySeafood, link: '/products/seafood' },
  ];

  const stats = [
    { icon: Globe, value: '25+', label: t('stats.countries') },
    { icon: Calendar, value: '15+', label: t('stats.years') },
    { icon: ShoppingBag, value: '50+', label: t('stats.products') },
    { icon: Users, value: '200+', label: t('stats.clients') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Fresh agricultural products" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <img src={genexLogo} alt="GENEX" className="h-32 md:h-44 w-auto mx-auto drop-shadow-2xl" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl font-black text-primary-foreground mb-6 drop-shadow-2xl"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
              {t('hero.cta')}
              <Arrow className="h-5 w-5" />
            </Link>
            <Link to="/products" className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-all">
              {t('hero.products')}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t('about.snippet.title')}</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.snippet.text')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Us */}
      <WhyUsSection />

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">{t('products.title')}</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <StaggerItem key={i}>
                <Link to={cat.link} className="block rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all hover:-translate-y-1 group bg-card">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={cat.img} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{cat.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">{cat.desc}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                      {isRtl ? 'عرض الكل' : 'View All'}
                      <Arrow className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.15}>
            {stats.map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <stat.icon className="h-10 w-10 text-primary-glow mx-auto mb-3" />
                  <div className="text-4xl md:text-5xl font-black text-primary-foreground mb-2">{stat.value}</div>
                  <div className="text-primary-foreground/70 text-sm font-medium">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Partners Strip */}
      <PartnersStrip />

      {/* CTA */}
      <section className="py-20 bg-card">
        <ScrollReveal className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t('cta.text')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl">
              {t('cta.button')}
              <Arrow className="h-5 w-5" />
            </Link>
            <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary-light hover:bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all">
              <MessageCircle className="h-5 w-5" />
              {t('cta.whatsapp')}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Index;
