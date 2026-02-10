import { useState } from "react";
import { Shield, HeartPulse, ClipboardCheck, Cpu, FileText } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Gestión Inteligente del Riesgo",
    description:
      "Modelos predictivos para la identificación y mitigación proactiva de riesgos clínicos y financieros en poblaciones de salud.",
  },
  {
    icon: HeartPulse,
    title: "Gestión Clínica Avanzada",
    description:
      "Protocolos basados en evidencia potenciados por IA para optimizar rutas de atención y desenlaces clínicos.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditoría de Valor",
    description:
      "Evaluación sistemática de la pertinencia y el valor generado por las intervenciones en salud, más allá del costo.",
  },
  {
    icon: Cpu,
    title: "Gestión de Tecnologías",
    description:
      "Evaluación, incorporación y monitoreo de tecnologías sanitarias con modelos de valor contextual.",
  },
  {
    icon: FileText,
    title: "Contratación Inteligente",
    description:
      "Diseño de modelos contractuales basados en resultados, riesgo compartido y eficiencia operativa demostrable.",
  },
];

const PentaSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="penta" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary font-mono">
            Ecosistema
          </p>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Penta</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Modelo de optimización operado por sistemas multiagente, organizado en cinco pilares estratégicos.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isExpanded = expanded === i;
            return (
              <div
                key={i}
                className={`p-6 border border-border rounded-lg bg-card cursor-pointer transition-all duration-300 hover:glow-border-magenta ${isExpanded ? "glow-border-magenta" : ""}`}
                onClick={() => setExpanded(isExpanded ? null : i)}
              >
                <Icon className="text-secondary mb-4" size={24} />
                <h3 className="text-base font-semibold text-foreground mb-2">{pillar.title}</h3>
                {isExpanded && (
                  <p className="text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-300">
                    {pillar.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PentaSection;
