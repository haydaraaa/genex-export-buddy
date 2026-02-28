import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n/LanguageContext';
import genexLogo from '@/assets/logo.png';

interface ProductCardProps {
  name: string;
  img: string;
}

const ProductCard = ({ name, img }: ProductCardProps) => {
  const { t } = useLanguage();

  return (
    <Link to={`/product/${name}`} className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group block">
      <div className="aspect-square overflow-hidden relative">
        <img src={img} alt={t(`product.${name}`)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
        {/* Logo watermark */}
        <div className="absolute bottom-3 end-3 bg-white/80 backdrop-blur-sm rounded-lg p-1.5 shadow-md">
          <img src={genexLogo} alt="GENEX" className="h-8 w-auto" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{t(`product.${name}`)}</h3>
        <p className="text-muted-foreground leading-relaxed">{t(`product.${name}.desc`)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
