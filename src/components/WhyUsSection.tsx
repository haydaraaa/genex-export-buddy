import { useLanguage } from '@/i18n/LanguageContext';
import { ShieldCheck, Truck, Headphones, DollarSign, Award, Leaf } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const reasons = [
    { icon: ShieldCheck, title: t('whyUs.quality.title'), desc: t('whyUs.quality.desc') },
    { icon: Truck, title: t('whyUs.shipping.title'), desc: t('whyUs.shipping.desc') },
    { icon: Headphones, title: t('whyUs.support.title'), desc: t('whyUs.support.desc') },
    { icon: DollarSign, title: t('whyUs.pricing.title'), desc: t('whyUs.pricing.desc') },
    { icon: Award, title: t('whyUs.certified.title'), desc: t('whyUs.certified.desc') },
    { icon: Leaf, title: t('whyUs.fresh.title'), desc: t('whyUs.fresh.desc') },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">{t('whyUs.title')}</h2>
          <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">{t('whyUs.subtitle')}</p>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </ScrollReveal>
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, i) => (
            <StaggerItem key={i}>
              <div className="bg-background rounded-2xl border border-border p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhyUsSection;
