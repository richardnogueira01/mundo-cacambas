import { motion } from "framer-motion";
import { Phone, MapPin, Truck, CheckCircle } from "lucide-react";

/**
 * Process Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Shows the recycling process step-by-step
 * - Animated flow with connecting lines
 * - Icons animate on scroll
 * - Clean, asymmetric layout
 */

const steps = [
  {
    icon: Phone,
    title: "Solicite",
    description: "Entre em contato conosco via WhatsApp ou telefone",
    color: "bg-green-500",
  },
  {
    icon: MapPin,
    title: "Localize",
    description: "Informamos a data e horário da coleta",
    color: "bg-blue-500",
  },
  {
    icon: Truck,
    title: "Coletamos",
    description: "Nosso caminhão especializado faz a coleta",
    color: "bg-orange-500",
  },
  {
    icon: CheckCircle,
    title: "Reciclamos",
    description: "Resíduos são processados de forma sustentável",
    color: "bg-green-600",
  },
];

export default function ProcessSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 px-4 bg-white">
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
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600">
            Processo simples e eficiente em 4 passos
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={stepVariants}
                className="flex gap-6 items-start"
              >
                {/* Left: Icon */}
                <motion.div
                  className={`flex-shrink-0 w-20 h-20 rounded-full ${step.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Right: Content */}
                <div className="flex-grow pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <span className="text-sm font-semibold text-gray-400">
                      Passo {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-[3.75rem] w-1 bg-gradient-to-b from-green-500 to-blue-500 opacity-30"
                    style={{ height: "120px", marginTop: "80px" }}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
