import { motion } from "framer-motion";
import { Layers, Cpu, Database, Workflow, Zap, Globe, Building2, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Arquitectura de Decisiones",
    description: "Diseño e implementación de frameworks para la toma de decisiones basada en datos y evidencia.",
  },
  {
    icon: Cpu,
    title: "Modelos de Optimización",
    description: "Algoritmos matemáticos para optimizar recursos, procesos y resultados en instituciones de salud.",
  },
  {
    icon: Database,
    title: "Ingeniería de Datos en Salud",
    description: "Pipelines, lagos de datos y arquitecturas para interoperabilidad en sistemas de información médica.",
  },
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description: "RPA e IA aplicada a flujos operativos: facturación, auditoría, gestión de calidad y más.",
  },
  {
    icon: Zap,
    title: "Desarrollo de IA Especializada",
    description: "Modelos de machine learning y agentes inteligentes diseñados para el dominio clínico y administrativo.",
  },
  {
    icon: Globe,
    title: "HEOR & Acceso a Mercado",
    description: "Evaluación de tecnologías sanitarias, modelos farmacoeconómicos y estrategias de acceso.",
  },
  {
    icon: GraduationCap,
    title: "Educación & E-Learning",
    description: "Diseño de eventos educativos disruptivos y plataformas de e-learning usando tecnologías/IA, metodologías activas y epistemología conductual.",
  },
  {
    icon: Building2,
    title: "Unidades de IA Clínica",
    description: "Transformar servicios médicos convencionales en centros de alta eficiencia donde la IA actúa como sistema operativo institucional. Gobernanza clínica, modelo de rentabilidad, ejes jurídico, tecnológico, bioético, ciclo de MLOps clínico y Sandbox médicos.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-32">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">
            Capacidades
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Lo que <span className="text-gradient-bio">construimos</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.filter(s => s.title !== "Unidades de IA Clínica").map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group bg-background p-8 hover:bg-muted/50 transition-colors duration-300"
            >
              <service.icon className="w-5 h-5 text-primary mb-6" />
              <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-gradient-bio transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Unidades de IA Clínica - tarjeta destacada */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-px border-2 border-primary/30 bg-background p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl md:text-2xl font-bold text-gradient-bio">
              Unidades de IA Clínica
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-3xl italic border-l-2 border-primary/30 pl-4">
            La evolución del servicio tradicional hacia el Nodo de Decisión Inteligente.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Propósito", text: "Transformar servicios médicos convencionales en centros de alta eficiencia donde la IA actúa como sistema operativo institucional." },
              { label: "Enfoque", text: "Implementación de modelo operativo, gobernanza clínica y ética para asegurar que la IA médica aterrice adecuadamente en las instituciones de salud." },
              { label: "Componentes", text: "Sistema de gobernanza, manual operativo, modelo de rentabilidad, ejes jurídico, tecnológico, bioético. Ciclo de MLOps clínico y Sandbox médicos." },
              { label: "Resultado", text: "Una institución que usa la IA como elemento central y no como esnobismo digital." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground">{item.label}:</span>{" "}
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
