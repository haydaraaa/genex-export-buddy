import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ArrowLeft, ShieldCheck, Award, Thermometer, Clock, Package, MapPin, Calendar, Star, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ScrollReveal';
import { productDetails } from '@/data/productDetails';
import genexLogo from '@/assets/logo.png';
import { motion } from 'framer-motion';

const categoryPaths: Record<string, string> = {
  fruits: '/products/fruits',
  vegetables: '/products/vegetables',
  canned: '/products/canned',
  dates: '/products/dates',
  juices: '/products/juices',
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { t, isRtl } = useLanguage();

  const product = productId ? productDetails[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <Link to="/products" className="text-primary hover:underline">{t('products.page.title')}</Link>
        </div>
      </div>
    );
  }

  const categoryPath = categoryPaths[product.category];
  const categoryTitleKey = `products.${product.category}.title`;

  return (
    <div>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/40" />
        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img src={product.img} alt={t(`product.${product.id}`)} className="w-full aspect-square object-cover" />
              </div>
              {/* Logo watermark */}
              <div className="absolute bottom-6 end-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                <img src={genexLogo} alt="GENEX" className="h-12 w-auto" />
              </div>
              {/* Premium badge */}
              <div className="absolute top-6 start-6">
                <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 shadow-lg">
                  <Star className="h-4 w-4 me-1 fill-current" />
                  {t('productDetail.premium')}
                </Badge>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl font-black text-primary-foreground mb-4">
                {t(`product.${product.id}`)}
              </h1>
              <p className="text-primary-foreground/80 text-lg mb-6 leading-relaxed">
                {t(`product.${product.id}.desc`)}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {product.certificates.map(cert => (
                  <Badge key={cert} variant="secondary" className="bg-white/20 text-primary-foreground border-white/30 text-sm">
                    <ShieldCheck className="h-3.5 w-3.5 me-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <div className="flex items-center gap-2 text-primary-foreground font-semibold mb-2">
                  <Award className="h-5 w-5" />
                  {t('productDetail.grade')}
                </div>
                <p className="text-primary-foreground/90 text-lg font-bold">{product.grade}</p>
              </div>
            </motion.div>
          </div>
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
          <Link to={categoryPath} className="text-primary hover:underline">
            {t(categoryTitleKey)}
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{t(`product.${product.id}`)}</span>
        </div>
      </div>

      {/* Specifications */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('productDetail.specifications')}
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* EU Standard */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{t('productDetail.euStandard')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.euStandard}</p>
              </div>
            </ScrollReveal>

            {/* Shelf Life */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{t('productDetail.shelfLife')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.shelfLife}</p>
              </div>
            </ScrollReveal>

            {/* Storage */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Thermometer className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{t('productDetail.storage')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.storage}</p>
              </div>
            </ScrollReveal>

            {/* Packaging */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{t('productDetail.packaging')}</h3>
                </div>
                <ul className="space-y-2">
                  {product.packaging.map((p, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Origin */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{t('productDetail.origin')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.origin}</p>
              </div>
            </ScrollReveal>

            {/* Season */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 rounded-xl p-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{t('productDetail.season')}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{product.season}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {product.gallery && product.gallery.length > 0 && (
        <section className="py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <ScrollReveal>
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                {t('productDetail.gallery')}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {product.gallery.map((src, i) => (
                <ScrollReveal key={i}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden rounded-2xl border border-border shadow-md hover:shadow-xl aspect-square"
                  >
                    <img
                      src={src}
                      alt={`${t(`product.${product.id}`)} ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certificates Section */}
      <section className="py-16 bg-muted/30">

        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('productDetail.certifications')}
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.certificates.map(cert => (
              <ScrollReveal key={cert}>
                <div className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">{cert}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{t('productDetail.certified')}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              {t('productDetail.whyPremium')}
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <ScrollReveal key={i}>
                <div className="flex items-start gap-4 bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                  <div className="bg-accent/20 rounded-full p-2 mt-1 shrink-0">
                    <CheckCircle className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{t(`productDetail.quality${i}.title`)}</h3>
                    <p className="text-muted-foreground leading-relaxed">{t(`productDetail.quality${i}.desc`)}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
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

export default ProductDetail;
