import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import neuralNetwork from "@/assets/neural-network.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <img
          src={neuralNetwork}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-px bg-primary/20 animate-scan-line" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">
              Arquitectura de Decisiones en Salud
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8"
          >
            <span className="text-foreground">Ecosistema de</span>
            <br />
            <span className="text-gradient-bio">Optimización</span>
            <br />
            <span className="text-foreground">en Salud</span>
            
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Habilitamos capacidades inteligentes en salud mediante una{" "}
            <span className="text-foreground font-medium">arquitectura biodigital</span>{" "}
            que garantiza eficiencia y predictibilidad financiera en el contexto latinoamericano.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#ecosistema"
              className="bg-gradient-bio px-8 py-4 text-sm font-mono uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity text-center"
            >
              Explorar Ecosistema
            </a>
            <a
              href="#agentes-ia"
              className="brutalist-border px-8 py-4 text-sm font-mono uppercase tracking-widest text-foreground hover:bg-muted transition-colors text-center"
            >
              Conocer Agentes IA
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default HeroSection;
