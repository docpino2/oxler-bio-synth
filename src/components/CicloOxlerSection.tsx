import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Brain, Cpu, GraduationCap, Search, ArrowRight } from "lucide-react";
import cicloOxlerDiagram from "@/assets/ciclo-oxler-diagram.png";

const stages = [
  {
    icon: Brain,
    title: "Diseño de la Solución",
    subtitle: "Consultoría PENTA",
    label: "CEREBRO DEL SISTEMA",
    description:
      "Nuestra metodología de 5 ejes de optimización: análisis poblacional, gestión clínica, auditoría de valor, gestión de tecnologías y contratación.",
    technical:
      "Habilitamos en el cliente un framework de decisiones estructuradas que reduce la variabilidad operativa. Los 5 ejes PENTA actúan como un sistema de diagnóstico organizacional que identifica brechas de eficiencia y genera roadmaps de optimización con KPIs medibles.",
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Analítica y Desarrollo Biodigital",
    subtitle: "Soluciones Integradas",
    label: "MOTOR TECNOLÓGICO",
    description:
      "Diseño de soluciones personalizadas e integradas a PENTA, uso de Agentes y Sistemas Multiagente.",
    technical:
      "Desplegamos arquitecturas de agentes de IA especializados que se integran nativamente con el marco PENTA. Cada solución biodigital es calibrada con datos reales del cliente, permitiendo automatización inteligente de auditorías, predicción de costos y optimización de rutas clínicas en tiempo real.",
    color: "secondary",
  },
  {
    icon: GraduationCap,
    title: "OxLEARNING",
    subtitle: "Educación Exponencial",
    label: "FACTOR HUMANO",
    description:
      "Entrenamiento de equipos humanos para la adopción tecnológica real y el upskilling en medicina exponencial.",
    technical:
      "Cerramos el ciclo garantizando que las capacidades tecnológicas se transfieran al talento humano del cliente. Programas de formación en IA aplicada a salud, interpretación de dashboards predictivos y operación de sistemas multiagente aseguran la sostenibilidad de la transformación.",
    color: "primary",
  },
  {
    icon: Search,
    title: "Investigación",
    subtitle: "Evidencia y Validación",
    label: "RIGOR CIENTÍFICO",
    description:
      "Investigación de fallas reales, validación clínica de modelos IA/ML, análisis de valor terapéutico y producción de conocimiento abierto.",
    technical:
      "Identificamos ineficiencias mediante datos de vida real (RWD/TWE). Validamos cada herramienta IA/ML con matrices rigurosas y desenlaces clínicos reales. Aplicamos modelos propios de MCDA y Economía de la Salud (HEOR) para evaluar valor terapéutico. Transformamos los datos en publicaciones científicas abiertas, garantizando transparencia y rigor.",
    color: "secondary",
  },
];

const CicloOxlerSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="ciclo" className="relative py-32 overflow-hidden">
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
            Flujo de Producción
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ciclo de <span className="text-gradient-bio">OxLER</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            Un sistema de producción continuo donde cada línea habilita y potencia
            la siguiente, generando capacidades acumulativas en el cliente.
          </p>
        </motion.div>

        {/* Diagram visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 relative"
        >
          <div className="relative overflow-hidden border border-border bg-card/50 p-3 md:p-4 max-w-2xl mx-auto">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />
            <img
              src={cicloOxlerDiagram}
              alt="Diagrama del Ciclo de OxLER – Eficiencia Sostenible y Control del Riesgo"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center mt-3">
            Eficiencia Sostenible y Control del Riesgo — Arquitectura de Decisión OxLER
          </p>
        </motion.div>

        {/* Infinity-inspired flow */}
        <div className="relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
            <div className="flex items-center justify-between px-[15%]">
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-secondary/40" />
              <ArrowRight className="w-5 h-5 text-neon-cyan mx-2 shrink-0" />
              <div className="flex-1 h-px bg-gradient-to-r from-secondary/40 to-primary/40" />
              <ArrowRight className="w-5 h-5 text-neon-cyan mx-2 shrink-0" />
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-secondary/40" />
            </div>
          </div>

          {/* Loop-back indicator */}
          <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 items-center gap-2 text-muted-foreground">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-magenta whitespace-nowrap">
              ciclo continuo ∞
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative cursor-pointer"
              >
                <div
                  className={`relative border-2 border-border bg-card p-8 transition-all duration-500 min-h-[280px] ${
                    hoveredIndex === index
                      ? stage.color === "primary"
                        ? "border-primary shadow-neon-magenta"
                        : "border-secondary shadow-neon-cyan"
                      : ""
                  }`}
                >
                  {/* Stage number */}
                  <div className="absolute -top-4 -left-1 font-mono text-6xl font-bold text-muted/30 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Corner accents */}
                  <div className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-${stage.color} transition-all duration-300 ${hoveredIndex === index ? "w-8 h-8" : ""}`} />
                  <div className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-${stage.color} transition-all duration-300 ${hoveredIndex === index ? "w-8 h-8" : ""}`} />

                  <div className="relative z-10">
                    <div className={`inline-flex p-3 mb-4 bg-${stage.color}/10`}>
                      <stage.icon className={`w-6 h-6 text-${stage.color}`} />
                    </div>

                    <span className={`font-mono text-[10px] uppercase tracking-[0.2em] block mb-1 ${
                      stage.color === "primary" ? "text-neon-magenta" : "text-neon-cyan"
                    }`}>
                      {stage.label}
                    </span>

                    <h3 className="text-xl font-bold mb-1 text-foreground">
                      {stage.title}
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground block mb-4">
                      {stage.subtitle}
                    </span>

                    <AnimatePresence mode="wait">
                      {hoveredIndex === index ? (
                        <motion.div
                          key="technical"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="glow-line w-12 mb-3" />
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {stage.technical}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.p
                          key="description"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-muted-foreground leading-relaxed"
                        >
                          {stage.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover background glow */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-${stage.color}/5`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-20 text-center"
          >
            <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
              Somos el siguiente nivel en la{" "}
              <span className="text-gradient-bio">gestión integral de las enfermedades</span>
              , la evolución de la{" "}
              <span className="text-neon-cyan">IA médica</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CicloOxlerSection;
