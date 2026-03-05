import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { productDetails } from '@/data/productDetails';
import { Send, Plus, Trash2, Package, Building2, Globe, Phone, Mail, User, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from '@/components/ScrollReveal';
import { motion, AnimatePresence } from 'framer-motion';

interface RFQItem {
  product: string;
  quantity: string;
  packaging: string;
  notes: string;
}

const emptyItem: RFQItem = { product: '', quantity: '', packaging: '', notes: '' };

const categories = [
  { key: 'fruits', products: ['orange', 'strawberry', 'grape', 'pomegranate', 'mango', 'guava', 'fig', 'peach', 'watermelon', 'lemon', 'cantaloupe'] },
  { key: 'vegetables', products: ['tomato', 'pepper', 'onion', 'potato', 'beans', 'cucumber', 'zucchini', 'eggplant', 'carrot', 'cabbage', 'lettuce'] },
  { key: 'canned', products: ['foul', 'lentils', 'chickpeas', 'whiteBeans', 'greenPeas', 'cannedVegetables', 'bakedBeans', 'cannedCorn', 'tahini'] },
  { key: 'dates', products: ['medjool', 'ajwa', 'sukkari', 'barhi', 'degletnoor', 'saidi'] },
  { key: 'juices', products: ['juiceOrange', 'juiceMango', 'juiceGuava', 'juiceStrawberry', 'juicePomegranate', 'juiceMixed', 'juiceApple', 'juicePeach', 'juiceGrape', 'juiceLemon'] },
  { key: 'frozen', products: ['frozenStrawberry', 'frozenMango', 'frozenPomegranate', 'frozenMixedBerries', 'frozenGreenBeans', 'frozenPeas', 'frozenOkra', 'frozenMolokhia', 'frozenMixedVegetables', 'frozenArtichoke', 'frozenPotato', 'frozenSpinach', 'frozenBroccoli', 'frozenSambousa', 'frozenBorek', 'frozenCroissant', 'frozenSpringRolls', 'frozenKonafa', 'frozenPuffPastry'] },
  { key: 'seafood', products: ['frozenShrimp', 'frozenCalamari', 'frozenFishFillet', 'frozenTilapia', 'frozenSeafoodMix', 'frozenCrabSticks'] },
];

const RequestQuote = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  const [items, setItems] = useState<RFQItem[]>([{ ...emptyItem }]);
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '', contactName: '', email: '', phone: '', country: '', port: '', message: '',
  });

  const addItem = () => setItems([...items, { ...emptyItem }]);
  const removeItem = (idx: number) => {
    if (items.length > 1) setItems(items.filter((_, i) => i !== idx));
  };
  const updateItem = (idx: number, field: keyof RFQItem, value: string) => {
    const updated = [...items];
    updated[idx] = { ...updated[idx], [field]: value };
    setItems(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Build WhatsApp message
    const productLines = items
      .filter(i => i.product && i.quantity)
      .map((i, idx) => {
        const name = t(`product.${i.product}`) || i.product;
        return `${idx + 1}. ${name} — ${i.quantity} ${t('rfq.tons')}${i.packaging ? ` (${i.packaging})` : ''}${i.notes ? ` [${i.notes}]` : ''}`;
      })
      .join('\n');

    const msg = `*${t('rfq.title')}*\n\n` +
      `🏢 ${companyInfo.companyName}\n` +
      `👤 ${companyInfo.contactName}\n` +
      `📧 ${companyInfo.email}\n` +
      `📞 ${companyInfo.phone}\n` +
      `🌍 ${companyInfo.country}${companyInfo.port ? ` — ${companyInfo.port}` : ''}\n\n` +
      `📦 *${t('rfq.products')}:*\n${productLines}\n\n` +
      (companyInfo.message ? `💬 ${companyInfo.message}` : '');

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/201234567890?text=${encoded}`, '_blank');

    toast({ title: '✅', description: t('rfq.success') });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal direction="down">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('rfq.title')}</h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">{t('rfq.subtitle')}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-10">

            {/* Product Items */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">{t('rfq.products')}</h2>
                </div>

                <AnimatePresence>
                  {items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4 p-4 bg-muted/50 rounded-xl border border-border/50"
                    >
                      {/* Product Select */}
                      <div className="md:col-span-4">
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">{t('rfq.selectProduct')}</label>
                        <select
                          value={item.product}
                          onChange={e => updateItem(idx, 'product', e.target.value)}
                          required
                          className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        >
                          <option value="">{t('rfq.choosePlaceholder')}</option>
                          {categories.map(cat => (
                            <optgroup key={cat.key} label={t(`products.${cat.key}`)}>
                              {cat.products.map(p => (
                                <option key={p} value={p}>{t(`product.${p}`)}</option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>

                      {/* Quantity */}
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">{t('rfq.quantity')}</label>
                        <input
                          type="number"
                          min="0.1"
                          step="0.1"
                          value={item.quantity}
                          onChange={e => updateItem(idx, 'quantity', e.target.value)}
                          required
                          placeholder={t('rfq.tons')}
                          className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        />
                      </div>

                      {/* Packaging */}
                      <div className="md:col-span-3">
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">{t('rfq.packaging')}</label>
                        <input
                          type="text"
                          value={item.packaging}
                          onChange={e => updateItem(idx, 'packaging', e.target.value)}
                          placeholder={t('rfq.packagingPlaceholder')}
                          className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        />
                      </div>

                      {/* Notes */}
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-muted-foreground mb-1 block">{t('rfq.notes')}</label>
                        <input
                          type="text"
                          value={item.notes}
                          onChange={e => updateItem(idx, 'notes', e.target.value)}
                          placeholder={t('rfq.notesPlaceholder')}
                          className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                        />
                      </div>

                      {/* Remove */}
                      <div className="md:col-span-1 flex items-end">
                        {items.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeItem(idx)}
                            className="h-10 w-10 flex items-center justify-center rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                <button
                  type="button"
                  onClick={addItem}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dashed border-accent/40 text-accent hover:bg-accent/5 transition-colors text-sm font-medium"
                >
                  <Plus className="h-4 w-4" />
                  {t('rfq.addProduct')}
                </button>
              </div>
            </ScrollReveal>

            {/* Company Info */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-6 w-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">{t('rfq.companyInfo')}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" /> {t('rfq.companyName')}
                    </label>
                    <input
                      type="text"
                      value={companyInfo.companyName}
                      onChange={e => setCompanyInfo({ ...companyInfo, companyName: e.target.value })}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1.5">
                      <User className="h-3.5 w-3.5" /> {t('rfq.contactName')}
                    </label>
                    <input
                      type="text"
                      value={companyInfo.contactName}
                      onChange={e => setCompanyInfo({ ...companyInfo, contactName: e.target.value })}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" /> {t('rfq.email')}
                    </label>
                    <input
                      type="email"
                      value={companyInfo.email}
                      onChange={e => setCompanyInfo({ ...companyInfo, email: e.target.value })}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5" /> {t('rfq.phone')}
                    </label>
                    <input
                      type="tel"
                      value={companyInfo.phone}
                      onChange={e => setCompanyInfo({ ...companyInfo, phone: e.target.value })}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5" /> {t('rfq.country')}
                    </label>
                    <input
                      type="text"
                      value={companyInfo.country}
                      onChange={e => setCompanyInfo({ ...companyInfo, country: e.target.value })}
                      required
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-1 flex items-center gap-1.5">
                      <FileText className="h-3.5 w-3.5" /> {t('rfq.port')}
                    </label>
                    <input
                      type="text"
                      value={companyInfo.port}
                      onChange={e => setCompanyInfo({ ...companyInfo, port: e.target.value })}
                      placeholder={t('rfq.portPlaceholder')}
                      className="w-full h-10 px-3 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-muted-foreground mb-1 block">{t('rfq.message')}</label>
                    <textarea
                      value={companyInfo.message}
                      onChange={e => setCompanyInfo({ ...companyInfo, message: e.target.value })}
                      rows={3}
                      placeholder={t('rfq.messagePlaceholder')}
                      className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground text-sm focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Submit */}
            <ScrollReveal>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Send className="h-5 w-5" />
                  {t('rfq.submit')}
                </button>
                <p className="text-muted-foreground text-sm mt-3">{t('rfq.whatsappNote')}</p>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </section>
    </div>
  );
};

export default RequestQuote;
