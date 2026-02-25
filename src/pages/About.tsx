import { useLanguage } from '@/i18n/LanguageContext';
import { Award, Handshake, Truck, Eye, Target, BookOpen } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Award, title: t('about.value.quality'), desc: t('about.value.quality.desc') },
    { icon: Handshake, title: t('about.value.trust'), desc: t('about.value.trust.desc') },
    { icon: Truck, title: t('about.value.delivery'), desc: t('about.value.delivery.desc') },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('about.title')}</h1>
          <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">{t('about.story.title')}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">{t('about.story.text')}</p>
            </div>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Eye className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">{t('about.vision.title')}</h3>
                </div>
                <p className="text-muted-foreground">{t('about.vision.text')}</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-bold text-foreground">{t('about.mission.title')}</h3>
                </div>
                <p className="text-muted-foreground">{t('about.mission.text')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">{t('about.values.title')}</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((val, i) => (
              <div key={i} className="text-center p-8 bg-background rounded-2xl border border-border hover:shadow-lg transition-all">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                  <val.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{val.title}</h3>
                <p className="text-muted-foreground">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
