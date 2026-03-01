import { useLanguage } from '@/i18n/LanguageContext';
import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';

interface MarketRegion {
  name: string;
  countries: string[];
  x: number;
  y: number;
  color: string;
}

const WorldMap = () => {
  const { t } = useLanguage();

  const regions: MarketRegion[] = [
    { name: t('markets.arab.title'), countries: ['🇸🇦', '🇦🇪', '🇰🇼', '🇶🇦', '🇴🇲', '🇧🇭', '🇯🇴', '🇮🇶', '🇱🇧'], x: 58, y: 42, color: 'bg-accent' },
    { name: t('markets.europe.title'), countries: ['🇩🇪', '🇳🇱', '🇬🇧', '🇫🇷', '🇮🇹', '🇪🇸'], x: 48, y: 28, color: 'bg-primary' },
  ];

  // Egypt marker
  const egyptX = 54;
  const egyptY = 40;

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-2">{t('worldMap.title')}</h2>
          <p className="text-center text-muted-foreground mb-4">{t('worldMap.subtitle')}</p>
          <div className="w-20 h-1 bg-accent mx-auto mb-12 rounded-full" />
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto bg-background rounded-3xl border border-border p-8 overflow-hidden">
          {/* Simplified SVG world map outline */}
          <svg viewBox="0 0 100 60" className="w-full h-auto opacity-10" fill="none" stroke="currentColor" strokeWidth="0.3">
            {/* Simplified continent outlines */}
            {/* Europe */}
            <path d="M44,18 L48,16 L52,17 L54,20 L52,24 L48,26 L44,25 L42,22 Z" className="text-foreground" />
            {/* Africa */}
            <path d="M44,28 L50,26 L56,28 L58,35 L56,45 L50,50 L46,48 L44,40 Z" className="text-foreground" />
            {/* Middle East */}
            <path d="M54,24 L60,22 L64,26 L62,32 L58,34 L54,30 Z" className="text-foreground" />
            {/* Asia */}
            <path d="M60,14 L75,12 L82,18 L80,28 L72,32 L64,28 L60,20 Z" className="text-foreground" />
            {/* Americas */}
            <path d="M15,12 L22,10 L28,14 L30,22 L28,30 L24,28 L20,18 Z" className="text-foreground" />
            <path d="M24,32 L28,30 L30,36 L28,45 L24,50 L22,44 L22,36 Z" className="text-foreground" />
          </svg>

          {/* Egypt HQ - pulsing dot */}
          <motion.div
            className="absolute"
            style={{ left: `${egyptX}%`, top: `${egyptY}%` }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="relative">
              <span className="absolute -inset-3 bg-accent/30 rounded-full animate-ping" />
              <span className="absolute -inset-2 bg-accent/50 rounded-full animate-pulse" />
              <div className="relative h-4 w-4 bg-accent rounded-full border-2 border-background shadow-lg" />
              <span className="absolute -bottom-6 start-1/2 -translate-x-1/2 text-xs font-bold text-accent whitespace-nowrap">
                🇪🇬 GENEX HQ
              </span>
            </div>
          </motion.div>

          {/* Connection lines + region markers */}
          {regions.map((region, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.3 }}
            >
              <div className={`${region.color} rounded-xl px-3 py-2 shadow-lg text-xs`}>
                <div className="font-bold text-primary-foreground mb-1">{region.name}</div>
                <div className="flex gap-1 flex-wrap">
                  {region.countries.map((flag, j) => (
                    <span key={j} className="text-sm">{flag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {/* SVG lines from Egypt to regions */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 60">
            {regions.map((region, i) => (
              <motion.line
                key={i}
                x1={egyptX}
                y1={egyptY}
                x2={region.x}
                y2={region.y}
                stroke="hsl(var(--accent))"
                strokeWidth="0.2"
                strokeDasharray="1 1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.6 + i * 0.3, duration: 0.8 }}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

export default WorldMap;
