const ManifestoSection = () => {
  return (
    <section id="manifiesto" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono mb-4">
          Manifiesto
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground leading-tight">
          Qué resolvemos
        </h2>

        <div className="border-l-2 border-primary/50 pl-6 md:pl-10 mb-12">
          <blockquote className="text-xl md:text-3xl font-light text-foreground/80 italic leading-relaxed">
            "El problema no es la inteligencia;
            <br />
            <span className="gradient-text font-semibold not-italic">es la arquitectura."</span>
          </blockquote>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "No somos una fábrica de software",
              desc: "Diseñamos sistemas de decisión, no productos genéricos. Cada solución responde a un contexto clínico y financiero específico.",
            },
            {
              title: "No somos consultoría tradicional",
              desc: "Operamos con modelos computacionales, IA resolutiva y validación clínica real. Sin PowerPoints decorativos.",
            },
            {
              title: "Ingeniería de contexto",
              desc: "Orquestamos sistemas multiagente que entienden el contexto antes de actuar. La IA decide bajo supervisión humana.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-border rounded-lg bg-card hover:glow-border transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
