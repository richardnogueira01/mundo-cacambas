import { motion } from "framer-motion";
import { Smile, Leaf, Shield } from "lucide-react";

/**
 * About Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Asymmetric layout with image on left, content on right
 * - 3 benefit cards with icons
 * - Animated on scroll
 */

const benefits = [
  {
    icon: Smile,
    title: "Conveniência",
    description: "Você não precisa se preocupar com o descarte. Nós fornecemos os recipientes, coletamos e transportamos de forma segura.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Leaf,
    title: "Sustentabilidade",
    description: "Descarte realizado em conformidade com normas legais e ambientais, preservando o meio ambiente.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Eficiência e Segurança",
    description: "Recursos adequados para diferentes tipos de resíduos, evitando danos e garantindo remoção correta.",
    color: "from-orange-500 to-orange-600",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src="/images/team-sustainability.jpg"
              alt="Equipe Mundo Caçambas"
              className="w-full h-auto"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              QUEM NÓS SOMOS
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Na Mundo Caçambas, estamos há <span className="font-bold text-green-500">20 anos</span> oferecendo serviços de locação de caçambas com profissionalismo e qualidade. Atendemos tanto pessoas físicas quanto jurídicas, garantindo um serviço ágil, seguro e com total respeito ao meio ambiente.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Nossa equipe é altamente qualificada para atender às necessidades de cada cliente, proporcionando soluções personalizadas para remoção e descarte de resíduos em obras, reformas e limpezas gerais.
            </p>
          </motion.div>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${benefit.color} text-white p-8 rounded-lg shadow-lg`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Icon className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/90">{benefit.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
