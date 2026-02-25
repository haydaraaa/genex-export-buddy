import { useLanguage } from '@/i18n/LanguageContext';
import { Building2, Quote } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const partnerLogos = [
  'Carrefour', 'Metro AG', 'Lulu Hypermarket', 'Al Othaim',
  'Panda Retail', 'Sultan Center', 'Farm Fresh', 'Euro Foods',
];

const testimonials = [
  { name: 'Ahmed Al-Rashid', company: 'Gulf Fresh Imports', text: 'GENEX delivers consistently high-quality produce. Their oranges and strawberries are the best we\'ve sourced from Egypt.' },
  { name: 'Hans Mueller', company: 'Euro Canned GmbH', text: 'Excellent canned products with reliable delivery schedules. Our partnership with GENEX has been outstanding for 5 years.' },
  { name: 'Pierre Dubois', company: 'Fresh & Bio France', text: 'La qualité des produits GENEX est exceptionnelle. Leur engagement envers les normes internationales est remarquable.' },
];

const Partners = () => {
  const { t } = useLanguage();

  return (
    <div>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('partners.title')}</h1>
            <p className="text-primary-foreground/70 text-lg">{t('partners.subtitle')}</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {partnerLogos.map((name, i) => (
              <StaggerItem key={i}>
                <div className="bg-card rounded-xl border border-border p-6 flex items-center justify-center hover:shadow-lg transition-all">
                  <div className="text-center">
                    <Building2 className="h-10 w-10 text-primary mx-auto mb-2" />
                    <span className="text-sm font-semibold text-foreground">{name}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">{t('partners.testimonials')}</h2>
          </ScrollReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((test, i) => (
              <StaggerItem key={i}>
                <div className="bg-background rounded-2xl border border-border p-8 relative">
                  <Quote className="h-8 w-8 text-accent/30 absolute top-4 end-4" />
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">"{test.text}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{test.name}</div>
                    <div className="text-sm text-primary">{test.company}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default Partners;
