import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Impact Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Showcases environmental impact metrics
 * - Animated counters that increment on scroll
 * - Background image for visual impact
 * - Dark text overlay for readability
 */

interface Stat {
  label: string;
  value: number;
  unit: string;
  icon: string;
}

const stats: Stat[] = [
  {
    label: "CO₂ Reduzido",
    value: 2500,
    unit: "toneladas/ano",
    icon: "📉",
  },
  {
    label: "Resíduos Desviados",
    value: 15000,
    unit: "toneladas/ano",
    icon: "♻️",
  },
  {
    label: "Árvores Plantadas",
    value: 5000,
    unit: "árvores",
    icon: "🌱",
  },
];

export default function ImpactSection() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      const increment = stat.value / 50;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          current = stat.value;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, 30);

      return interval;
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/environmental-impact.jpg"
          alt="Impacto ambiental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nosso Impacto Ambiental
          </h2>
          <p className="text-xl text-white/90">
            Juntos, estamos fazendo a diferença para o planeta
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="text-6xl mb-4">{stat.icon}</div>

              {/* Counter */}
              <motion.div
                className="text-5xl md:text-6xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {counts[index]?.toLocaleString()}
              </motion.div>

              {/* Unit */}
              <p className="text-white/80 text-lg mb-2">{stat.unit}</p>

              {/* Label */}
              <p className="text-white font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
