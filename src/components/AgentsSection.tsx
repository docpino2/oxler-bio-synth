import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp } from "lucide-react";
import oncoagentLogo from "@/assets/oncoagent-logo.png";
import pegaxusLogo from "@/assets/pegaxus-logo.png";

const agents = [
  {
    icon: ShieldCheck,
    image: oncoagentLogo,
    name: "OncoAgent",
    tag: "EL GUARDIÁN DE LA PERTINENCIA CLÍNICA",
    purpose:
      "Disminuir la variabilidad clínica y reducir la carga administrativa del auditor humano.",
    capabilities: [
      {
        title: "Auditoría Concurrente",
        desc: "Validación inmediata de pertinencia técnica bajo estándares internacionales y nacionales (NCCN, ASCO).",
      },
      {
        title: "Estructuración Biodigital",
        desc: "Transforma historias clínicas densas en nodos de decisión accionables.",
      },
      {
        title: "Reducción de Fricción",
        desc: "Actúa como un puente técnico entre el prestador y el pagador para agilizar el acceso al tratamiento.",
      },
    ],
    status: "OPERATIVO",
    demoUrl: "https://youtu.be/A8SiGn--lsA",
  },
  {
    icon: TrendingUp,
    image: pegaxusLogo,
    name: "Pegaxus",
    tag: "EL ARQUITECTO DE LA ECONOMÍA DE LA SALUD",
    purpose:
      "Transformar la incertidumbre financiera en predictibilidad mediante el análisis de valor terapéutico.",
    capabilities: [
      {
        title: "Inteligencia de Negociación",
        desc: "Modelado de acuerdos de acceso gestionado y riesgos compartidos. Notas técnicas de precisión.",
      },
      {
        title: "Análisis Multicriterio (MCDA)",
        desc: "Evaluación objetiva del valor de nuevas tecnologías y medicamentos de alto costo.",
      },
      {
        title: "Predictibilidad de Siniestralidad",
        desc: "Proyección de impactos presupuestales basada en datos de vida real (RWD).",
      },
    ],
    status: "OPERATIVO",
    demoUrl: "https://youtu.be/2xFvBjOZF_4",
  },
];

const AgentsSection = () => {
  return (
    <section id="agentes-ia" className="relative py-32 bg-card">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">
            Ecosistema Agéntico & Orquestación CAS
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Agentes <span className="text-gradient-bio">autónomos</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            De la IA generativa a la IA resolutiva: agentes que no solo responden, sino que deciden bajo supervisión humana y CAS (Context Aware Systems).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative border-2 border-border bg-background p-8 md:p-10"
            >
              {/* Status indicator */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow" />
                <span className="font-mono text-[10px] tracking-widest text-neon-cyan">
                  {agent.status}
                </span>
              </div>

              <div className="mb-6 overflow-hidden rounded-lg border border-border bg-background/50">
                <img src={agent.image} alt={agent.name} className="w-full h-48 md:h-56 object-contain p-2" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{agent.name}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
                    {agent.tag}
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 border-l-2 border-primary/30 pl-4 italic">
                {agent.purpose}
              </p>

              <div className="space-y-5">
                {agent.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{cap.title}:</span>{" "}
                      <span className="text-sm text-muted-foreground">{cap.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <a
                  href={agent.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest text-primary hover:text-neon-cyan transition-colors"
                >
                  Ver Demo →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
