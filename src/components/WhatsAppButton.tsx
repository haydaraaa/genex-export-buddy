import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/201234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 end-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -start-1 h-4 w-4 bg-accent rounded-full animate-ping" />
      <span className="absolute -top-1 -start-1 h-4 w-4 bg-accent rounded-full" />
    </motion.a>
  );
};

export default WhatsAppButton;
