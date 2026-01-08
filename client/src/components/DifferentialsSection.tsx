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
    title: "Experiência Comprovada",
    description: "20 anos de história de sucesso, confiabilidade e satisfação de clientes em toda a região.",
  },
  {
    icon: Users,
    title: "Soluções Customizadas",
    description: "Cada projeto é único. Adaptamos nossos serviços para atender perfeitamente suas necessidades.",
  },
  {
    icon: Clock,
    title: "Agilidade na Entrega",
    description: "Agendamos e entregamos nos prazos combinados. Sua obra não espera.",
  },
  {
    icon: DollarSign,    title: "Melhor Custo-Benefífcio",
    description: "Preços justos e transparentes. Sem surpresas, sem taxas ocultas.",
  },
  {
    icon: Truck,
    title: "Disponibilidade Total",
    description: "Atendemos 24 horas por dia, 7 dias por semana. Sempre pronto para ajudar.",
  },
  {
    icon: Zap,
    title: "Para Todos os Tipos",
    description: "Atendemos residências, empresas, construtoras e qualquer outro tipo de cliente.",
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
            NOSSOS DIFERENCIAIS
          </h2>
          <p className="text-xl text-gray-600">
            Veja o que nos torna a melhor opção para seus serviços de coleta de resíduos
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
