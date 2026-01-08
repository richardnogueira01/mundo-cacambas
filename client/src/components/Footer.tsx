import { motion } from "framer-motion";
import { MessageCircle, Phone, MapPin, Facebook, Instagram } from "lucide-react";

/**
 * Footer Component
 * 
 * Design Philosophy: Sustentabilidade Dinâmica
 * - Contact information and social links
 * - Animated on scroll
 * - Clean, professional layout
 */

export default function Footer() {
  const whatsappNumber = "5511997412118";
  const whatsappMessage = "Olá! Gostaria de solicitar uma caçamba para lixo ou entulho.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-green-500 mb-4">
              Mundo Caçambas
            </h3>
            <p className="text-gray-400">
              Serviço profissional de locação de caçambas para lixo e entulho com 20 anos de experiência.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#home" className="hover:text-green-500 transition">
                  Início
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-500 transition">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-500 transition">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#differentials" className="hover:text-green-500 transition">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-500 transition">
                  Contato
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition"
              >
                <MessageCircle className="w-5 h-5" />
                <span>(11) 99741-2118</span>
              </a>

              {/* Phone */}
              <a
                href="tel:+5511997412118"
                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 99741-2118</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8" />

        {/* Bottom Footer */}
        <motion.div
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Mundo Caçambas. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
