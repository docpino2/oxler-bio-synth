import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, BarChart3, GraduationCap, Search, ChevronRight } from "lucide-react";

const lines = [
  {
    icon: Brain,
    title: "Diseño de la Solución",
    subtitle: "Cerebro del Sistema",
    color: "primary" as const,
    description:
      "Arquitectura de decisiones clínicas y financieras. Modelamos el problema antes de construir la solución, asegurando pertinencia contextual y eficiencia operativa en cada implementación.",
  },
  {
    icon: BarChart3,
    title: "Analítica y Desarrollo Biodigital",
    subtitle: "Motor Tecnológico",
    color: "secondary" as const,
    description:
      "Plataformas de datos, modelos predictivos y sistemas de optimización que transforman información clínica en capacidad operativa medible.",
  },
  {
    icon: GraduationCap,
    title: "OxLEARNING",
    subtitle: "Factor Humano",
    color: "primary" as const,
    description:
      "Formación transdisciplinar para equipos de salud. Programas diseñados para cerrar la brecha entre tecnología exponencial y práctica clínica.",
  },
  {
    icon: Search,
    title: "Investigación",
    subtitle: "Producción de Conocimiento",
    color: "secondary" as const,
    description:
      "Investigación de fallas, validación clínica, modelos de valor contextual y producción de conocimiento aplicado al ecosistema de salud latinoamericano.",
  },
];

const CicloOxlerSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="ciclo" className="section-padding border-t border-border relative">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-mono">Portafolio</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">Ciclo de OxLER</h2>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            Cuatro líneas de producción integradas hacia la eficiencia sostenible y el control del riesgo.
          </p>
        </motion.div>

        {/* Efficiency diagram placeholder */}
        <div className="mb-12 p-6 border border-border/50 rounded-none bg-card/50">
          <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground/50 uppercase tracking-[0.2em] mb-4">
            <span>Diseño</span>
            <span>→</span>
            <span>Analítica</span>
            <span>→</span>
            <span>Formación</span>
            <span>→</span>
            <span>Investigación</span>
            <span>→</span>
            <span className="text-primary/60">Eficiencia Sostenible</span>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(185 80% 55%), hsl(320 72% 55%))" }}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="space-y-2">
          {lines.map((line, i) => {
            const Icon = line.icon;
            const isActive = active === i;
            const isPrimary = line.color === "primary";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`border rounded-none p-6 cursor-pointer transition-all duration-500 group ${
                  isPrimary ? "border-primary/20" : "border-secondary/20"
                } ${isActive ? (isPrimary ? "glow-border bg-primary/[0.03]" : "glow-border-magenta bg-secondary/[0.03]") : "bg-card hover:bg-muted/20"}`}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 flex items-center justify-center border ${isPrimary ? "border-primary/30" : "border-secondary/30"} rounded-none`}>
                    <Icon className={isPrimary ? "text-primary" : "text-secondary"} size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-foreground">{line.title}</h3>
                    <p className={`text-xs font-mono ${isPrimary ? "text-primary/60" : "text-secondary/60"}`}>
                      {line.subtitle}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`text-muted-foreground transition-transform duration-300 ${isActive ? "rotate-90" : ""}`}
                  />
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm text-muted-foreground leading-relaxed pl-14"
                    >
                      {line.description}
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

export default CicloOxlerSection;
