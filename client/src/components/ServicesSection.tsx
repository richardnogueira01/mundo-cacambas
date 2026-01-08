import { motion } from "framer-motion";
import { Trash2, Hammer, Truck } from "lucide-react";

/**
 * Services Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Focus on two main services: Lixo and Entulho
 * - Large cards with icons and descriptions
 * - Animated on scroll
 */

const services = [
  {
    icon: Trash2,
    title: "Lixo",
    description: "Coleta e transporte de resíduos gerais, domésticos e comerciais. Ideal para limpezas, reformas e descartes diversos.",
    features: [
      "Caçambas de diversos tamanhos",
      "Coleta rápida e segura",
      "Descarte responsável",
      "Atendimento 24 horas",
    ],
    color: "from-green-500 to-green-600",
  },
  {
    icon: Hammer,
    title: "Entulho",
    description: "Remoção profissional de entulho de obras, reformas e demolições. Garantimos limpeza completa do local.",
    features: [
      "Caçambas especializadas",
      "Remoção de grandes volumes",
      "Limpeza do local",
      "Reciclagem de materiais",
    ],
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Truck,
    title: "Transporte de Resíduos",
    description: "Transporte seguro e legal de resíduos para locais de descarte autorizados e licenciados.",
    features: [
      "Transporte seguro",
      "Documentação completa",
      "Descarte legal",
      "Rastreamento",
    ],
    color: "from-orange-500 to-orange-600",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
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
            NOSSOS SERVIÇOS
          </h2>
          <p className="text-xl text-gray-600">
            Confira as categorias de serviços que oferecemos
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${service.color} text-white rounded-lg p-8 shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <Icon className="w-16 h-16" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-white/90 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
