import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(185 80% 55% / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(185 80% 55% / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-6 font-mono">
          Bio-Health Tech
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Ecosistema de Optimización</span>
          <br />
          <span className="text-foreground">en Salud</span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Habilitamos capacidades inteligentes en salud mediante una arquitectura biodigital
          que garantiza eficiencia y predictibilidad financiera en el contexto latinoamericano.
        </p>

        <button
          onClick={() => document.querySelector("#manifiesto")?.scrollIntoView({ behavior: "smooth" })}
          className="inline-flex items-center gap-2 px-6 py-3 border border-primary/30 rounded-full text-primary hover:bg-primary/10 transition-all group"
        >
          Explorar
          <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
