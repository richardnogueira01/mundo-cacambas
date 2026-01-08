import { motion } from "framer-motion";
import { Truck, Leaf, Zap, Shield } from "lucide-react";

/**
 * Services Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Grid layout with animated cards
 * - Each card has hover elevation effect
 * - Icons animate on hover
 * - Staggered entrance animation
 */

const services = [
  {
    icon: Truck,
    title: "Coleta Especializada",
    description: "Caminhão equipado para coleta segura e eficiente de resíduos",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Comprometidos com práticas ambientais responsáveis",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "Agilidade",
    description: "Atendimento rápido e profissional em toda a região",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Shield,
    title: "Segurança",
    description: "Equipe treinada e equipamentos de proteção certificados",
    color: "from-green-600 to-green-700",
  },
];

export default function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600">
            Soluções completas em reciclagem e coleta de resíduos
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Icon Container */}
                <motion.div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
