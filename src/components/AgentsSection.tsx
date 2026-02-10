import { motion } from "framer-motion";
import { Bot, TrendingUp, ExternalLink } from "lucide-react";

const agents = [
  {
    icon: Bot,
    name: "OncoAgent",
    role: "Pertinencia Clínica & Auditoría",
    description:
      "Agente de IA especializado en oncología que evalúa pertinencia de tratamientos, audita protocolos clínicos y genera reportes de valor bajo supervisión médica.",
    color: "primary" as const,
  },
  {
    icon: TrendingUp,
    name: "PegaXus",
    role: "HEOR & Economía de la Salud",
    description:
      "Agente enfocado en Health Economics and Outcomes Research. Modela escenarios de costo-efectividad, impacto presupuestal y valor terapéutico en contextos reales.",
    color: "secondary" as const,
  },
];

const AgentsSection = () => {
  return (
    <section id="agentes" className="section-padding border-t border-border relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-mono">
              Ecosistema Agéntico
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">
            Orquestación CAS
          </h2>
          <p className="text-xs font-mono text-muted-foreground/50 mb-3 tracking-wider">
            CONTEXT AWARE SYSTEM
          </p>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            IA resolutiva que decide bajo supervisión humana. Agentes especializados para decisiones clínicas y económicas en salud.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent, i) => {
            const isPrimary = agent.color === "primary";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative p-8 md:p-10 border rounded-none bg-card transition-all duration-500 group ${
                  isPrimary
                    ? "border-primary/20 hover:glow-border"
                    : "border-secondary/20 hover:glow-border-magenta"
                }`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px ${
                    isPrimary
                      ? "bg-gradient-to-r from-primary/50 via-primary/20 to-transparent"
                      : "bg-gradient-to-r from-secondary/50 via-secondary/20 to-transparent"
                  }`}
                />

                <div className={`w-12 h-12 flex items-center justify-center border rounded-none mb-6 ${
                  isPrimary ? "border-primary/30" : "border-secondary/30"
                }`}>
                  <agent.icon className={isPrimary ? "text-primary" : "text-secondary"} size={24} />
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">{agent.name}</h3>
                <p className={`text-xs font-mono mb-6 tracking-wider ${
                  isPrimary ? "text-primary/60" : "text-secondary/60"
                }`}>
                  {agent.role.toUpperCase()}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{agent.description}</p>

                <button className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider transition-all ${
                  isPrimary
                    ? "text-primary/60 hover:text-primary"
                    : "text-secondary/60 hover:text-secondary"
                }`}>
                  <ExternalLink size={12} />
                  Ver Demo
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
