import { Bot, TrendingUp } from "lucide-react";

const agents = [
  {
    icon: Bot,
    name: "OncoAgent",
    role: "Pertinencia Clínica & Auditoría",
    description:
      "Agente de IA especializado en oncología que evalúa pertinencia de tratamientos, audita protocolos clínicos y genera reportes de valor bajo supervisión médica.",
    color: "primary",
  },
  {
    icon: TrendingUp,
    name: "PegaXus",
    role: "HEOR & Economía de la Salud",
    description:
      "Agente enfocado en Health Economics and Outcomes Research. Modela escenarios de costo-efectividad, impacto presupuestal y valor terapéutico en contextos reales.",
    color: "secondary",
  },
];

const AgentsSection = () => {
  return (
    <section id="agentes" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono mb-4">
          Ecosistema Agéntico
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
          Orquestación CAS
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          IA resolutiva que decide bajo supervisión humana. Context Aware System para decisiones clínicas y económicas.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {agents.map((agent, i) => (
            <div
              key={i}
              className={`p-8 border rounded-lg bg-card transition-all duration-300 ${
                agent.color === "primary"
                  ? "border-primary/30 hover:glow-border"
                  : "border-secondary/30 hover:glow-border-magenta"
              }`}
            >
              <agent.icon
                className={agent.color === "primary" ? "text-primary mb-4" : "text-secondary mb-4"}
                size={32}
              />
              <h3 className="text-2xl font-bold text-foreground mb-1">{agent.name}</h3>
              <p className={`text-sm font-mono mb-4 ${agent.color === "primary" ? "text-primary" : "text-secondary"}`}>
                {agent.role}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">{agent.description}</p>
              <button className={`mt-6 text-sm font-medium ${agent.color === "primary" ? "text-primary" : "text-secondary"} hover:underline`}>
                Ver Demo →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
