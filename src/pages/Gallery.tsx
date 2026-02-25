import { useState } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { X } from 'lucide-react';

const galleryItems = [
  { src: 'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?w=600', category: 'products', alt: 'Fresh vegetables' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600', category: 'farms', alt: 'Agricultural farm' },
  { src: 'https://images.unsplash.com/photo-1595855759920-86582396756a?w=600', category: 'products', alt: 'Citrus fruits' },
  { src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600', category: 'farms', alt: 'Green field' },
  { src: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=600', category: 'packing', alt: 'Fruit packing' },
  { src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600', category: 'shipping', alt: 'Container shipping' },
  { src: 'https://images.unsplash.com/photo-1518977676601-b53f82ber5?w=600', category: 'products', alt: 'Fresh fruits' },
  { src: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=600', category: 'products', alt: 'Pomegranates' },
  { src: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600', category: 'farms', alt: 'Harvest field' },
];

const Gallery = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const categories = ['all', 'products', 'farms', 'packing', 'shipping'];
  const categoryKeys: Record<string, string> = {
    all: 'gallery.all', products: 'gallery.products', farms: 'gallery.farms',
    packing: 'gallery.packing', shipping: 'gallery.shipping',
  };

  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(g => g.category === filter);

  return (
    <div>
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t('gallery.title')}</h1>
          <p className="text-primary-foreground/70 text-lg">{t('gallery.subtitle')}</p>
          <div className="w-20 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-muted-foreground border border-border hover:bg-muted'
                }`}
              >
                {t(categoryKeys[cat])}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {filtered.map((item, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:scale-[1.02]"
                onClick={() => setLightbox(item.src)}
              >
                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-4 end-4 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
            <X className="h-8 w-8" />
          </button>
          <img src={lightbox.replace('w=600', 'w=1200')} alt="" className="max-w-full max-h-[90vh] rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
