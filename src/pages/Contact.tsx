import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [quoteForm, setQuoteForm] = useState({ product: '', quantity: '', country: '', company: '', email: '', phone: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: '✅', description: 'Message sent successfully!' });
    setContactForm({ name: '', email: '', message: '' });
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: '✅', description: 'Quote request submitted!' });
    setQuoteForm({ product: '', quantity: '', country: '', company: '', email: '', phone: '' });
  };

  return (
    <div>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('contact.title')}</h1>
          <p className="text-primary-foreground/70 text-lg">{t('contact.subtitle')}</p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">{t('contact.form.title')}</h2>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.form.name')}</label>
                  <input
                    type="text" required maxLength={100}
                    value={contactForm.name} onChange={e => setContactForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.form.email')}</label>
                  <input
                    type="email" required maxLength={255}
                    value={contactForm.email} onChange={e => setContactForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.form.message')}</label>
                  <textarea
                    required maxLength={1000} rows={4}
                    value={contactForm.message} onChange={e => setContactForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                  />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all">
                  <Send className="h-4 w-4" />
                  {t('contact.form.send')}
                </button>
              </form>
            </div>

            {/* Quote Form */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">{t('contact.quote.title')}</h2>
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.quote.product')}</label>
                  <input type="text" required maxLength={100} value={quoteForm.product} onChange={e => setQuoteForm(p => ({ ...p, product: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.quote.quantity')}</label>
                  <input type="text" required maxLength={20} value={quoteForm.quantity} onChange={e => setQuoteForm(p => ({ ...p, quantity: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.quote.country')}</label>
                  <input type="text" required maxLength={100} value={quoteForm.country} onChange={e => setQuoteForm(p => ({ ...p, country: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.quote.name')}</label>
                  <input type="text" required maxLength={100} value={quoteForm.company} onChange={e => setQuoteForm(p => ({ ...p, company: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.quote.email')}</label>
                  <input type="email" required maxLength={255} value={quoteForm.email} onChange={e => setQuoteForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">{t('contact.quote.phone')}</label>
                  <input type="tel" required maxLength={20} value={quoteForm.phone} onChange={e => setQuoteForm(p => ({ ...p, phone: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary focus:outline-none" dir="ltr" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all">
                  <Send className="h-4 w-4" />
                  {t('contact.quote.send')}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{t('contact.info.address')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground" dir="ltr">{t('contact.info.phone')}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{t('contact.info.email')}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl w-full"
              >
                <MessageCircle className="h-6 w-6" />
                {t('contact.whatsapp')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
