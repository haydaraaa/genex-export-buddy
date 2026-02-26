import { useLanguage } from '@/i18n/LanguageContext';
import { Apple, Carrot, Package } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

// Product images
import orangeImg from '@/assets/products/orange.jpg';
import strawberryImg from '@/assets/products/strawberry.jpg';
import grapeImg from '@/assets/products/grape.jpg';
import pomegranateImg from '@/assets/products/pomegranate.jpg';
import mangoImg from '@/assets/products/mango.jpg';
import guavaImg from '@/assets/products/guava.jpg';
import tomatoImg from '@/assets/products/tomato.jpg';
import pepperImg from '@/assets/products/pepper.jpg';
import onionImg from '@/assets/products/onion.jpg';
import potatoImg from '@/assets/products/potato.jpg';
import beansImg from '@/assets/products/beans.jpg';
import foulImg from '@/assets/products/foul.jpg';
import lentilsImg from '@/assets/products/lentils.jpg';
import chickpeasImg from '@/assets/products/chickpeas.jpg';
import whiteBeansImg from '@/assets/products/whiteBeans.jpg';

const Products = () => {
  const { t } = useLanguage();

  const fruits = ['orange', 'strawberry', 'grape', 'pomegranate', 'mango', 'guava'];
  const vegetables = ['tomato', 'pepper', 'onion', 'potato', 'beans'];
  const canned = ['foul', 'lentils', 'chickpeas', 'whiteBeans'];

  const productImages: Record<string, string> = {
    orange: orangeImg, strawberry: strawberryImg, grape: grapeImg,
    pomegranate: pomegranateImg, mango: mangoImg, guava: guavaImg,
    tomato: tomatoImg, pepper: pepperImg, onion: onionImg,
    potato: potatoImg, beans: beansImg,
    foul: foulImg, lentils: lentilsImg, chickpeas: chickpeasImg, whiteBeans: whiteBeansImg,
  };

  const ProductCard = ({ name }: { name: string }) => (
    <div className="bg-background rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all group">
      <div className="aspect-square overflow-hidden">
        <img
          src={productImages[name]}
          alt={t(`product.${name}`)}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-foreground mb-1">{t(`product.${name}`)}</h3>
        <p className="text-sm text-muted-foreground">{t(`product.${name}.desc`)}</p>
      </div>
    </div>
  );

  const sections = [
    { icon: Apple, title: t('products.fruits.title'), items: fruits },
    { icon: Carrot, title: t('products.vegetables.title'), items: vegetables },
    { icon: Package, title: t('products.canned.title'), items: canned },
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

      {sections.map((section, si) => (
        <section key={si} className={`py-16 ${si % 2 === 0 ? 'bg-background' : 'bg-card'}`}>
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-8 justify-center">
                <section.icon className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">{section.title}</h2>
              </div>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {section.items.map(item => (
                <StaggerItem key={item}>
                  <ProductCard name={item} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Products;
