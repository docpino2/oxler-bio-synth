import { useState } from "react";
import { Brain, BarChart3, GraduationCap, Search } from "lucide-react";

const lines = [
  {
    icon: Brain,
    title: "Diseño de la Solución",
    subtitle: "Cerebro del Sistema",
    color: "text-primary",
    borderColor: "border-primary/30",
    description:
      "Arquitectura de decisiones clínicas y financieras. Modelamos el problema antes de construir la solución, asegurando pertinencia contextual.",
  },
  {
    icon: BarChart3,
    title: "Analítica y Desarrollo Biodigital",
    subtitle: "Motor Tecnológico",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    description:
      "Plataformas de datos, modelos predictivos y sistemas de optimización que transforman información clínica en capacidad operativa.",
  },
  {
    icon: GraduationCap,
    title: "OxLEARNING",
    subtitle: "Factor Humano",
    color: "text-primary",
    borderColor: "border-primary/30",
    description:
      "Formación transdisciplinar para equipos de salud. Programas diseñados para cerrar la brecha entre tecnología y práctica clínica.",
  },
  {
    icon: Search,
    title: "Investigación",
    subtitle: "Producción de Conocimiento",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    description:
      "Investigación de fallas, validación clínica, modelos de valor contextual y producción de conocimiento aplicado al ecosistema de salud.",
  },
];

const CicloOxlerSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="ciclo" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono mb-4">
          Portafolio
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Ciclo de OxLER</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Cuatro líneas de producción integradas hacia la eficiencia sostenible y el control del riesgo.
        </p>

        <div className="space-y-4">
          {lines.map((line, i) => {
            const Icon = line.icon;
            const isActive = active === i;
            return (
              <div
                key={i}
                className={`border ${line.borderColor} rounded-lg p-6 cursor-pointer transition-all duration-300 bg-card hover:glow-border ${isActive ? "glow-border" : ""}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="flex items-center gap-4">
                  <Icon className={`${line.color} shrink-0`} size={28} />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{line.title}</h3>
                    <p className={`text-sm ${line.color} font-mono`}>{line.subtitle}</p>
                  </div>
                </div>
                {isActive && (
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed animate-in fade-in duration-300">
                    {line.description}
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

export default CicloOxlerSection;
