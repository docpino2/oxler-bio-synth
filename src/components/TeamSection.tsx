const team = [
  { name: "Luis Eduardo Pino V.", role: "CEO & Fundador", desc: "Médico. Arquitecto de decisiones en salud." },
  { name: "Andrea Franco Corredor", role: "Directora Clínica", desc: "Gestión clínica avanzada y auditoría de valor." },
  { name: "Liliana Clavijo Alvarez", role: "Directora de Investigación", desc: "Investigación aplicada y validación clínica." },
  { name: "Gerardo Ospina", role: "Director de Tecnología", desc: "Arquitectura de sistemas y desarrollo biodigital." },
  { name: "Julián Martínez", role: "Lead Data Scientist", desc: "Modelos predictivos y analítica avanzada en salud." },
  { name: "Tatiana Sierra", role: "Gestión de Proyectos", desc: "Coordinación estratégica y gestión operativa." },
  { name: "Iván Camilo Triana", role: "Desarrollador Senior", desc: "Desarrollo de plataformas y soluciones de IA." },
  { name: "Alejandro González", role: "Analista HEOR", desc: "Economía de la salud y evaluación de tecnologías." },
  { name: "Manuel Gómez Chacón", role: "Diseñador UX/UI", desc: "Experiencia de usuario en productos de salud digital." },
  { name: "Juan Pablo Pino Franco", role: "Community Manager", desc: "Estrategia digital y comunicación." },
];

const TeamSection = () => {
  return (
    <section id="equipo" className="section-padding border-t border-border">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-secondary font-mono mb-4">
          Personas
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Nuestro Equipo 2026</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Perfiles transdisciplinares: médicos, ingenieros, científicos de datos y diseñadores construyendo medicina exponencial.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="p-5 border border-border rounded-lg bg-card hover:glow-border transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 text-muted-foreground font-mono text-sm group-hover:text-primary transition-colors">
                {member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
              </div>
              <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm text-primary font-mono mb-2">{member.role}</p>
              <p className="text-xs text-muted-foreground">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
