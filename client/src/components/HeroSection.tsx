import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

/**
 * Hero Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Full-width hero with background image
 * - Animated text entrance with staggered children
 * - Parallax-like effect on scroll
 * - CTA button with hover animations
 * - Dark text overlay for readability on light background
 */

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const whatsappNumber = "5511997412118";
  const whatsappMessage = "Olá! Gostaria de solicitar uma caçamba para lixo ou entulho.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/images/truck-background.jpg"
          alt="Caminhão de coleta de resíduos"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-3xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Sua solução para remoção de resíduos
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-2xl md:text-3xl text-white/95 mb-8 font-semibold"
        >
          Rápido, seguro e sustentável!
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Há 20 anos, a Mundo Caçambas facilita o transporte e descarte de resíduos para obras, reformas e limpezas gerais, garantindo qualidade e agilidade para pessoas físicas e jurídicas.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg border-2 border-green-400"
            >
              ALUGAR UMA CAÇAMBA AGORA
            </Button>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white opacity-70" />
      </motion.div>
    </section>
  );
}
