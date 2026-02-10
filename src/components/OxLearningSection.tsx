import { BookOpen, Users, Award } from "lucide-react";

const OxLearningSection = () => {
  return (
    <section id="oxlearning" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono mb-4">
          Formación
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">OxLEARNING</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Programas de formación transdisciplinar que cierran la brecha entre tecnología exponencial y práctica clínica.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: BookOpen,
              title: "Cursos Especializados",
              desc: "Formación en IA aplicada a salud, HEOR, auditoría de valor y gestión de tecnologías sanitarias.",
            },
            {
              icon: Users,
              title: "Talleres Corporativos",
              desc: "Programas in-house para equipos clínicos, administrativos y de tecnología en instituciones de salud.",
            },
            {
              icon: Award,
              title: "Certificaciones",
              desc: "Programas certificados en competencias biodigitales para profesionales de salud en Latinoamérica.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-6 border border-border rounded-lg bg-card hover:glow-border transition-all duration-300">
                <Icon className="text-primary mb-4" size={24} />
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OxLearningSection;
