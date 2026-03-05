import { useLanguage } from '@/i18n/LanguageContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Package, Truck, CreditCard, Globe, ShieldCheck, Clock, HelpCircle } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const faqCategories = [
  {
    icon: Truck,
    titleKey: 'faq.category.shipping',
    questions: [
      { q: 'faq.q1', a: 'faq.a1' },
      { q: 'faq.q2', a: 'faq.a2' },
      { q: 'faq.q3', a: 'faq.a3' },
    ],
  },
  {
    icon: Package,
    titleKey: 'faq.category.orders',
    questions: [
      { q: 'faq.q4', a: 'faq.a4' },
      { q: 'faq.q5', a: 'faq.a5' },
      { q: 'faq.q6', a: 'faq.a6' },
    ],
  },
  {
    icon: CreditCard,
    titleKey: 'faq.category.payment',
    questions: [
      { q: 'faq.q7', a: 'faq.a7' },
      { q: 'faq.q8', a: 'faq.a8' },
      { q: 'faq.q9', a: 'faq.a9' },
    ],
  },
  {
    icon: ShieldCheck,
    titleKey: 'faq.category.quality',
    questions: [
      { q: 'faq.q10', a: 'faq.a10' },
      { q: 'faq.q11', a: 'faq.a11' },
    ],
  },
];

const FAQ = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <HelpCircle className="w-16 h-16 text-primary-foreground mx-auto mb-4 opacity-80" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t('faq.title')}
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              {t('faq.subtitle')}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, catIdx) => (
            <ScrollReveal key={catIdx}>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {t(category.titleKey)}
                  </h2>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {category.questions.map((faq, idx) => (
                    <AccordionItem
                      key={idx}
                      value={`${catIdx}-${idx}`}
                      className="border border-border rounded-xl px-6 bg-card shadow-sm"
                    >
                      <AccordionTrigger className="text-base font-semibold text-card-foreground hover:no-underline">
                        {t(faq.q)}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {t(faq.a)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </ScrollReveal>
          ))}

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-16 text-center bg-accent/30 rounded-2xl p-10">
              <Globe className="w-10 h-10 text-accent-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{t('faq.cta.title')}</h3>
              <p className="text-muted-foreground mb-6">{t('faq.cta.text')}</p>
              <a
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                {t('nav.contact')}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
