import { motion } from "framer-motion";
import { BookOpen, Zap, Award, ExternalLink } from "lucide-react";

const pillars = [
  {
    icon: BookOpen,
    title: "Plataforma Virtual de Aprendizaje",
    desc: "Formación en IA aplicada a salud, HEOR, auditoría de valor y gestión de tecnologías sanitarias. Contenido diseñado por médicos e ingenieros.",
  },
  {
    icon: Zap,
    title: "Eventos de Alto Desempeño",
    desc: "Bootcamps especializados y talleres corporativos in-house para equipos clínicos, administrativos y de tecnología en instituciones de salud.",
  },
  {
    icon: Award,
    title: "Portafolio de Upskilling",
    desc: "Programas certificados en competencias biodigitales. Estrategia Corporativa de IA Médica: de herramienta aislada a Sistema Operativo Institucional.",
  },
];

const OxLearningSection = () => {
  return (
    <section id="oxlearning" className="section-padding border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent" />

      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-mono">Formación</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">OxLEARNING</h2>
          <p className="text-sm text-muted-foreground mb-4 max-w-xl">
            Cerramos la brecha entre innovación tecnológica y práctica real en salud.
          </p>
          <a
            href="https://www.oxlearning.com.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-primary/60 hover:text-primary transition-colors mb-12"
          >
            <ExternalLink size={12} />
            oxlearning.com.co
          </a>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 border border-primary/15 rounded-none bg-card hover:glow-border transition-all duration-500 group"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-primary/20 rounded-none mb-5">
                  <Icon className="text-primary/70 group-hover:text-primary transition-colors" size={20} />
                </div>
                <h3 className="text-base font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* IA Médica highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 p-6 border border-border/50 bg-muted/10 rounded-none"
        >
          <p className="text-xs font-mono text-primary/50 mb-2 tracking-wider uppercase">Destacado</p>
          <h4 className="text-lg font-bold text-foreground mb-2">Estrategia Corporativa de IA Médica</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            La transición de la IA como herramienta aislada hacia un Sistema Operativo Institucional basado en gobernanza algorítmica y rigor clínico.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OxLearningSection;
