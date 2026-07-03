import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

// Import product images
import orangeAsset from '@/assets/products/orange-real.jpg.asset.json';
import strawberryAsset from '@/assets/products/strawberry-gallery/st1.jpg.asset.json';
import grapeAsset from '@/assets/products/grape-gallery/g1.jpg.asset.json';
import mangoAsset from '@/assets/products/mango-real.jpg.asset.json';
import pomegranateAsset from '@/assets/products/pomegranate-real.jpg.asset.json';
import guavaAsset from '@/assets/products/guava-gallery/gv1.jpg.asset.json';
import tomatoAsset from '@/assets/products/tomato-real.webp.asset.json';
import pepperAsset from '@/assets/products/pepper-real.jpg.asset.json';
import cucumberImg from '@/assets/products/cucumber.jpg';
import watermelonAsset from '@/assets/products/watermelon-real.jpg.asset.json';
import lemonAsset from '@/assets/products/lemon-real2.jpg.asset.json';
import peachImg from '@/assets/products/peach.jpg';

const featuredProducts = [
  { name: 'orange', img: orangeAsset.url, category: 'fruits' },
  { name: 'strawberry', img: strawberryAsset.url, category: 'fruits' },
  { name: 'grape', img: grapeAsset.url, category: 'fruits' },
  { name: 'mango', img: mangoAsset.url, category: 'fruits' },
  { name: 'pomegranate', img: pomegranateAsset.url, category: 'fruits' },
  { name: 'guava', img: guavaAsset.url, category: 'fruits' },
  { name: 'tomato', img: tomatoAsset.url, category: 'vegetables' },
  { name: 'pepper', img: pepperAsset.url, category: 'vegetables' },
  { name: 'cucumber', img: cucumberImg, category: 'vegetables' },
  { name: 'watermelon', img: watermelonAsset.url, category: 'fruits' },
  { name: 'lemon', img: lemonAsset.url, category: 'fruits' },
  { name: 'peach', img: peachImg, category: 'fruits' },
];

const ProductSlider = () => {
  const { t, isRtl } = useLanguage();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    direction: isRtl ? 'rtl' : 'ltr',
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 },
    },
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  // Auto-scroll
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    return () => { emblaApi.off('select', onSelect); };
  }, [emblaApi]);

  const PrevIcon = isRtl ? ChevronRight : ChevronLeft;
  const NextIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">
            {isRtl ? 'منتجاتنا المميزة' : 'Featured Products'}
          </h2>
          <p className="text-center text-muted-foreground mb-2 text-lg">
            {isRtl ? 'أجود الحاصلات الزراعية المصرية الطازجة للتصدير' : 'Premium Egyptian fresh produce for export'}
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 -translate-y-1/2 start-0 z-10 -ms-4 md:-ms-6 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <PrevIcon className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 -translate-y-1/2 end-0 z-10 -me-4 md:-me-6 w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <NextIcon className="h-6 w-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden mx-4 md:mx-8" ref={emblaRef}>
            <div className="flex gap-6">
              {featuredProducts.map((product, i) => (
                <div key={i} className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%] min-w-0">
                  <Link to={`/product/${product.name}`}>
                    <motion.div
                      whileHover={{ y: -8 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="rounded-2xl overflow-hidden border border-border bg-card group shadow-sm hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="aspect-square overflow-hidden relative">
                        <img
                          src={product.img}
                          alt={t(`product.${product.name}`)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Category badge */}
                        <div className="absolute top-3 start-3">
                          <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                            {t(`products.${product.category}`)}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {t(`product.${product.name}`)}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                          {t(`product.${product.name}.desc`)}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(featuredProducts.length / 3) }).map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi?.scrollTo(i * 3)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                Math.floor(selectedIndex / 3) === i
                  ? 'bg-primary w-8'
                  : 'bg-border hover:bg-muted-foreground'
              }`}
              aria-label={`Go to slide group ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
