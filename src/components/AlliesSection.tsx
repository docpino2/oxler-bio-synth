const AlliesSection = () => {
  return (
    <section id="aliados" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-primary font-mono mb-4">
          Red
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">Aliados</h2>
        <p className="text-muted-foreground mb-12 max-w-lg mx-auto">
          Colaboramos con instituciones, universidades y empresas que comparten nuestra visión de salud inteligente.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-24 border border-border rounded-lg bg-card flex items-center justify-center text-muted-foreground text-sm font-mono hover:border-primary/30 transition-colors"
            >
              Logo {i + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlliesSection;
