import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Esconde o loading após a página estar completamente carregada
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Se a página já está carregada
    if (document.readyState === "complete") {
      setIsLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-b from-green-50 to-white flex items-center justify-center z-50"
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Imagem do Caminhão */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-xl shadow-2xl"
        >
          <img
            src="/images/caminhao_carlos.jfif"
            alt="Carregando..."
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Loader Circular */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-16 h-16">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 border-4 border-transparent border-t-green-500 border-r-green-500 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-2 border-4 border-transparent border-b-green-300 rounded-full"
            />
          </div>

          {/* Texto */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="text-gray-600 font-semibold text-lg"
          >
            Carregando...
          </motion.p>
        </div>

        {/* Progresso */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            animate={{ width: ["0%", "100%"] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="h-full bg-gradient-to-r from-green-400 to-green-600"
          />
        </div>
      </div>
    </motion.div>
  );
}
