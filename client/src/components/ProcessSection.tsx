import { motion } from "framer-motion";
import { CheckCircle, Phone, Truck, Trash2 } from "lucide-react";

/**
 * Process Section Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - 4 clear steps for renting a dumpster
 * - Dark background with white text
 * - Animated cards and connecting lines
 */

const steps = [
  {
    number: 1,
    icon: CheckCircle,
    title: "Escolha a Caçamba Certa",
    description: "Selecione o tamanho ideal para sua necessidade (Lixo ou Entulho)",
  },
  {
    number: 2,
    icon: Phone,
    title: "Entre em Contato",
    description: "Fale conosco por telefone, WhatsApp ou preencha o formulário online",
  },
  {
    number: 3,
    icon: Truck,
    title: "Receba e Utilize",
    description: "Caçamba entregue no local e data combinados",
  },
  {
    number: 4,
    icon: Trash2,
    title: "Remoção e Descarte",
    description: "Avise-nos para retirar e descartarmos os resíduos de forma adequada",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 px-4 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            COMO ALUGAR UMA CAÇAMBA
          </h2>
          <p className="text-xl text-gray-300">
            Alugar uma caçamba com a Mundo Caçambas é fácil e rápido. Siga essas 4 etapas simples:
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Step Number */}
                <motion.div
                  className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4 font-bold text-lg"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <Icon className="w-10 h-10 text-green-500 mb-4" />

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
