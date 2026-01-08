import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

/**
 * WhatsApp Button Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Positioned fixed at bottom-right for easy access
 * - Uses primary color (emerald green) for brand consistency
 * - Animated pulse effect to draw attention
 * - Smooth hover animations for interactivity
 */

export default function WhatsAppButton() {
  const whatsappNumber = "5511997412118";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os serviços de reciclagem do Mundo Caçambas.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Pulse animation background */}
      <motion.div
        className="absolute inset-0 bg-green-500 rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{ opacity: 0.3 }}
      />

      {/* Icon */}
      <MessageCircle className="w-6 h-6 relative z-10" />
    </motion.a>
  );
}
