import { motion } from "framer-motion";
import { GraduationCap, Monitor, Sparkles, BookOpen, Rocket, Brain, DollarSign, ShieldCheck, Users } from "lucide-react";

const OxLearningSection = () => {
  return (
    <section className="relative py-32 bg-card">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="container relative z-10 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">
            OxLEARNING
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Educación para la{" "}
            <span className="text-gradient-bio">Autonomía</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            La tecnología más avanzada fracasa en manos de una cultura analógica.
            OxLEARNING es nuestra línea de educación diseñada para cerrar la brecha
            de capacidad entre la innovación tecnológica y la práctica real,
            transformando equipos humanos en operadores de medicina exponencial.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* 1. Plataforma Virtual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-2 border-border bg-background p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                1. Plataforma Virtual de Aprendizaje
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Habilitamos un ecosistema digital de formación continua donde el
              conocimiento técnico se encuentra con la aplicación clínica.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground">Acceso Soberano:</span>{" "}
                  <span className="text-sm text-muted-foreground">
                    Nuestra plataforma exclusiva ofrece formación única diseñada por
                    expertos para líderes de salud en Colombia y LATAM.
                  </span>
                </div>
              </div>
            </div>
            <a
              href="https://www.oxlearning.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-neon-cyan transition-colors"
            >
              <GraduationCap className="w-4 h-4" />
              Explorar nuestra academia: Visitar OxLEARNING →
            </a>
          </motion.div>

          {/* 2. Eventos de Alto Desempeño */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border-2 border-border bg-background p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                2. Eventos de Alto Desempeño y Metodologías Activas
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              No dictamos clases; diseñamos experiencias de transferencia de
              conocimiento soportadas por infraestructura digital.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "Diseño de Experiencias",
                  desc: "Integramos metodologías activas para maximizar el aprendizaje práctico en entornos de alta presión.",
                },
                {
                  title: "Formatos de Impacto",
                  desc: "Ejecutamos Bootcamps especializados (ej. Breast Cancer Bootcamp), grupos focales y Advisory Boards de alto desempeño con soporte tecnológico avanzado.",
                },
                {
                  title: "Soporte Tecnológico",
                  desc: "Cada evento utiliza herramientas de IA y analítica para trazabilidad y toma de decisiones en tiempo real.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">{item.title}:</span>{" "}
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Portafolio de Upskilling */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border-2 border-border bg-background p-8 md:p-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                3. Portafolio de Upskilling Exponencial
              </h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">
              Desarrollamos programas de fundamentos y profundización técnica para
              los nuevos roles de la salud biodigital.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: Brain,
                  title: "IA Médica",
                  desc: "Cursos desde \"Inteligencia Artificial Ridículamente Sencilla\" hasta profundización en Prompting para Auditoría Oncológica.",
                },
                {
                  icon: DollarSign,
                  title: "Administración y Economía",
                  desc: "Formación en modalidades de Contratación en Oncología para equilibrar finanzas y generar valor.",
                },
                {
                  icon: ShieldCheck,
                  title: "Auditoría Oncológica",
                  desc: "Especialización basada en evidencia y rigor científico para la gestión de ineficiencias.",
                },
                {
                  icon: Users,
                  title: "Estrategia Corporativa de IA Médica",
                  desc: "El Salto Estructural hacia la Gobernanza Algorítmica. Transformar la IA de un \"gadget\" aislado a un Sistema Operativo Institucional que orqueste la toma de decisiones. Diseñar la arquitectura de pensamiento y los Límites de Seguridad para escalar la inteligencia sin comprometer el rigor clínico. Creación de Unidades de IA Clínica (UCIA) bajo estándares de gobernanza, ética y predictibilidad financiera.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border border-border p-6 hover:bg-muted/50 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-primary mb-4" />
                  <h4 className="text-sm font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OxLearningSection;
