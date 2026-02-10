import { motion } from "framer-motion";
import { Database, LineChart, Stethoscope, Landmark, Microscope, Lightbulb } from "lucide-react";

const services = [
  { icon: Database, title: "Arquitectura de Datos Clínicos", desc: "Diseño e implementación de lagos de datos para ecosistemas de salud." },
  { icon: LineChart, title: "Modelos de Optimización", desc: "Algoritmos de optimización para gestión de recursos sanitarios y eficiencia operativa." },
  { icon: Stethoscope, title: "Auditoría Clínica Inteligente", desc: "Sistemas automatizados de revisión de pertinencia y calidad asistencial." },
  { icon: Landmark, title: "Evaluación de Tecnologías", desc: "ETES contextualizadas para Latinoamérica con modelos de valor terapéutico." },
  { icon: Microscope, title: "Investigación Aplicada", desc: "Estudios de mundo real, validación clínica y producción de evidencia." },
  { icon: Lightbulb, title: "Consultoría Estratégica", desc: "Acompañamiento en transformación digital y diseño institucional en salud." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-secondary" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-mono">Capacidades</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Servicios</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-8 bg-card group hover:bg-muted/20 transition-all duration-500 cursor-default"
              >
                <Icon className="text-muted-foreground/50 group-hover:text-primary transition-colors mb-5" size={20} />
                <h3 className="text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
