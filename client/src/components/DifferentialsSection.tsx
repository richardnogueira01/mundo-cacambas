import { motion } from "framer-motion";
import { Award, Clock, Zap, Users, DollarSign, Truck } from "lucide-react";

/**
 * Differentials Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - 5 key advantages of the company
 * - Icons and descriptions
 * - Animated on scroll
 */

const differentials = [
  {
    icon: Award,
    title: "Experiência de 20 Anos",
    description: "Duas décadas de expertise no setor, garantindo serviços de alta qualidade.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description: "Soluções sob medida para atender às necessidades específicas de cada cliente.",
  },
  {
    icon: Clock,
    title: "Entrega e Retirada Rápida",
    description: "Logística eficiente, com prazos de entrega e retirada pontuais.",
  },
  {
    icon: DollarSign,
    title: "Preços Competitivos",
    description: "Valores acessíveis e transparência nos custos, com excelente relação custo-benefício.",
  },
  {
    icon: Truck,
    title: "Atendimento 24 Horas",
    description: "Disponibilidade total para emergências e necessidades urgentes.",
  },
  {
    icon: Zap,
    title: "Pessoas Físicas e Jurídicas",
    description: "Flexibilidade para atender tanto clientes residenciais quanto empresariais.",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="differentials" className="py-20 px-4 bg-white">
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
            POR QUE ESCOLHER MUNDO CAÇAMBAS?
          </h2>
          <p className="text-xl text-gray-600">
            Descubra as vantagens que fazem de nós a melhor escolha para locação de caçambas
          </p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => {
            const Icon = differential.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {differential.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600">{differential.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
