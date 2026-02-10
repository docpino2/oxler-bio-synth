import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, HeartPulse, ClipboardCheck, Cpu, FileText } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Gestión Inteligente del Riesgo",
    description: "Modelos predictivos para la identificación y mitigación proactiva de riesgos clínicos y financieros en poblaciones de salud.",
  },
  {
    icon: HeartPulse,
    title: "Gestión Clínica Avanzada",
    description: "Protocolos basados en evidencia potenciados por IA para optimizar rutas de atención y desenlaces clínicos.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría de Valor",
    description: "Evaluación sistemática de la pertinencia y el valor generado por las intervenciones en salud, más allá del costo.",
  },
  {
    icon: Cpu,
    title: "Gestión de Tecnologías",
    description: "Evaluación, incorporación y monitoreo de tecnologías sanitarias con modelos de valor contextual para Latinoamérica.",
  },
  {
    icon: FileText,
    title: "Contratación Inteligente",
    description: "Diseño de modelos contractuales basados en resultados, riesgo compartido y eficiencia operativa demostrable.",
  },
];

const PentaSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="penta" className="section-padding border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-secondary/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-secondary" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-mono">Ecosistema</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">Penta</h2>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            Modelo de optimización operado por sistemas multiagente, organizado en cinco pilares estratégicos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isExpanded = expanded === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`p-8 bg-card cursor-pointer transition-all duration-500 group relative ${
                  isExpanded ? "glow-border-magenta" : "hover:bg-muted/20"
                }`}
                onClick={() => setExpanded(isExpanded ? null : i)}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon className="text-secondary/70 group-hover:text-secondary transition-colors" size={22} />
                  <span className="text-[10px] font-mono text-muted-foreground/30">0{i + 1}</span>
                </div>
                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                  {pillar.title}
                </h3>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-xs text-muted-foreground leading-relaxed"
                    >
                      {pillar.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PentaSection;
