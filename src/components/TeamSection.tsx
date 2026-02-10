import { motion } from "framer-motion";

const team = [
  { name: "Luis Eduardo Pino V.", role: "CEO & Fundador", desc: "Médico. Arquitecto de decisiones en salud. Lidera la visión de medicina exponencial." },
  { name: "Andrea Franco Corredor", role: "Directora Clínica", desc: "Gestión clínica avanzada y auditoría de valor en sistemas de salud." },
  { name: "Liliana Clavijo Alvarez", role: "Directora de Investigación", desc: "Investigación aplicada, validación clínica y producción de evidencia." },
  { name: "Gerardo Ospina", role: "Director de Tecnología", desc: "Arquitectura de sistemas, desarrollo biodigital y plataformas de datos." },
  { name: "Julián Martínez", role: "Lead Data Scientist", desc: "Modelos predictivos, analítica avanzada y machine learning en salud." },
  { name: "Tatiana Sierra", role: "Gestión de Proyectos", desc: "Coordinación estratégica, gestión operativa y diseño de procesos." },
  { name: "Iván Camilo Triana", role: "Desarrollador Senior", desc: "Desarrollo de plataformas, soluciones de IA y sistemas multiagente." },
  { name: "Alejandro González", role: "Analista HEOR", desc: "Economía de la salud, evaluación de tecnologías y modelos de valor." },
  { name: "Manuel Gómez Chacón", role: "Diseñador UX/UI", desc: "Experiencia de usuario en productos de salud digital y biotech." },
  { name: "Juan Pablo Pino Franco", role: "Community Manager", desc: "Estrategia digital, comunicación y gestión de comunidad." },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-secondary" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-mono">Personas</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-foreground">Nuestro Equipo 2026</h2>
          <p className="text-sm text-muted-foreground mb-12 max-w-xl">
            Perfiles transdisciplinares: médicos, ingenieros, científicos de datos y diseñadores construyendo medicina exponencial.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-border/20">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="p-6 bg-card group hover:bg-muted/20 transition-all duration-500"
            >
              {/* Avatar placeholder - will be replaced with real photos */}
              <div className="w-14 h-14 rounded-full bg-muted/50 border border-border flex items-center justify-center mb-4 text-muted-foreground font-mono text-xs group-hover:border-primary/40 group-hover:shadow-[0_0_15px_hsl(185_80%_55%/0.15)] transition-all duration-500">
                {member.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              <p className="text-[11px] font-mono text-primary/50 mb-2 tracking-wider">{member.role}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
