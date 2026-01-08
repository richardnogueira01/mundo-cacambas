import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

/**
 * CTA Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Full-width background with dynamic image
 * - Prominent call-to-action buttons
 * - Animated text and buttons
 * - WhatsApp and phone contact options
 */

export default function CTASection() {
  const whatsappNumber = "5511997412118";
  const whatsappMessage = "Olá! Gostaria de solicitar uma caçamba para lixo ou entulho.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/contact-cta-background.jpg"
          alt="Fundo CTA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PRONTO PARA RESOLVER SEU PROBLEMA?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Não deixe resíduos se acumularem. Fale conosco agora e receba um orçamento rápido e sem compromisso. Estamos prontos para ajudar!
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* WhatsApp Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </Button>
          </motion.a>

          {/* Phone Button */}
          <motion.a
            href="tel:+5511997412118"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Ligar Agora
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
