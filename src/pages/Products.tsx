import { useLanguage } from '@/i18n/LanguageContext';
import { Apple, Carrot, Package } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const Products = () => {
  const { t } = useLanguage();

  const fruits = ['orange', 'strawberry', 'grape', 'pomegranate', 'mango', 'guava'];
  const vegetables = ['tomato', 'pepper', 'onion', 'potato', 'beans'];
  const canned = ['foul', 'lentils', 'chickpeas', 'whiteBeans'];

  const fruitEmojis: Record<string, string> = { orange: '🍊', strawberry: '🍓', grape: '🍇', pomegranate: '🔴', mango: '🥭', guava: '🍐' };
  const vegEmojis: Record<string, string> = { tomato: '🍅', pepper: '🌶️', onion: '🧅', potato: '🥔', beans: '🫘' };
  const cannedEmojis: Record<string, string> = { foul: '🫘', lentils: '🟤', chickpeas: '🟡', whiteBeans: '⚪' };

  const ProductCard = ({ name, emoji }: { name: string; emoji: string }) => (
    <div className="bg-background rounded-xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all">
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className="text-lg font-bold text-foreground mb-1">{t(`product.${name}`)}</h3>
      <p className="text-sm text-muted-foreground">{t(`product.${name}.desc`)}</p>
    </div>
  );

  const sections = [
    { icon: Apple, title: t('products.fruits.title'), items: fruits, emojis: fruitEmojis },
    { icon: Carrot, title: t('products.vegetables.title'), items: vegetables, emojis: vegEmojis },
    { icon: Package, title: t('products.canned.title'), items: canned, emojis: cannedEmojis },
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
                  <ProductCard name={item} emoji={section.emojis[item] || '📦'} />
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
