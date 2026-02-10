import { Database, LineChart, Stethoscope, Landmark, Microscope, Lightbulb } from "lucide-react";

const services = [
  { icon: Database, title: "Arquitectura de Datos Clínicos", desc: "Diseño e implementación de lagos de datos para ecosistemas de salud." },
  { icon: LineChart, title: "Modelos de Optimización", desc: "Algoritmos de optimización para gestión de recursos sanitarios." },
  { icon: Stethoscope, title: "Auditoría Clínica Inteligente", desc: "Sistemas automatizados de revisión de pertinencia y calidad." },
  { icon: Landmark, title: "Evaluación de Tecnologías", desc: "ETES contextualizadas para Latinoamérica con modelos de valor." },
  { icon: Microscope, title: "Investigación Aplicada", desc: "Estudios de mundo real, validación clínica y producción de evidencia." },
  { icon: Lightbulb, title: "Consultoría Estratégica", desc: "Acompañamiento en transformación digital y diseño institucional." },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary font-mono mb-4">
          Capacidades
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Servicios</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="p-6 border border-border rounded-lg bg-card hover:border-primary/30 transition-all duration-300 group">
                <Icon className="text-muted-foreground group-hover:text-primary transition-colors mb-4" size={22} />
                <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
