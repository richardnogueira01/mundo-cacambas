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

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <img
          src="/images/hero-recycling-truck.jpg"
          alt="Caminhão de reciclagem"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          Mundo Caçambas
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-white/90 mb-8 font-light"
        >
          Transformando resíduos em oportunidades
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-white/80 mb-12 max-w-xl mx-auto"
        >
          Serviço profissional de reciclagem e coleta de resíduos com caminhão especializado
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg"
          >
            Solicitar Coleta
          </Button>
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
