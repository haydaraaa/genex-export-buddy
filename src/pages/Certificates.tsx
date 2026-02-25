import { useLanguage } from '@/i18n/LanguageContext';
import { ShieldCheck, Award, Leaf, CheckCircle, Star, FileCheck } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';

const Certificates = () => {
  const { t } = useLanguage();

  const certs = [
    { icon: ShieldCheck, name: t('cert.iso'), desc: t('cert.iso.desc') },
    { icon: Award, name: t('cert.haccp'), desc: t('cert.haccp.desc') },
    { icon: Leaf, name: t('cert.global'), desc: t('cert.global.desc') },
    { icon: CheckCircle, name: t('cert.organic'), desc: t('cert.organic.desc') },
    { icon: Star, name: t('cert.halal'), desc: t('cert.halal.desc') },
    { icon: FileCheck, name: t('cert.export'), desc: t('cert.export.desc') },
  ];

  return (
    <div>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('certificates.title')}</h1>
            <p className="text-primary-foreground/70 text-lg">{t('certificates.subtitle')}</p>
            <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certs.map((cert, i) => (
              <StaggerItem key={i}>
                <div className="bg-card rounded-2xl border border-border p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4">
                    <cert.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{cert.name}</h3>
                  <p className="text-muted-foreground">{cert.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
};

export default Certificates;
