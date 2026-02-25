import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ArrowRight, MessageCircle, Apple, Carrot, Package, Globe, Calendar, ShoppingBag, Users } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Index = () => {
  const { t, isRtl } = useLanguage();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    { icon: Apple, title: t('products.fruits'), desc: t('products.fruits.desc'), color: 'from-red-500/20 to-orange-500/20' },
    { icon: Carrot, title: t('products.vegetables'), desc: t('products.vegetables.desc'), color: 'from-green-500/20 to-emerald-500/20' },
    { icon: Package, title: t('products.canned'), desc: t('products.canned.desc'), color: 'from-amber-500/20 to-yellow-500/20' },
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
          <h1 className="text-5xl md:text-7xl font-black text-primary-foreground mb-6 drop-shadow-2xl">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t('hero.cta')}
              <Arrow className="h-5 w-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-all"
            >
              {t('hero.products')}
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{t('about.snippet.title')}</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-8 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">{t('about.snippet.text')}</p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">{t('products.title')}</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className={`bg-gradient-to-br ${cat.color} rounded-2xl p-8 border border-border hover:shadow-xl transition-all hover:-translate-y-1`}>
                <cat.icon className="h-14 w-14 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{cat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <stat.icon className="h-10 w-10 text-primary-glow mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-black text-primary-foreground mb-2">{stat.value}</div>
                <div className="text-primary-foreground/70 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('cta.title')}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{t('cta.text')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              {t('cta.button')}
              <Arrow className="h-5 w-5" />
            </Link>
            <a
              href="https://wa.me/201234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-light hover:bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              {t('cta.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
