import { motion } from "framer-motion";

const categories = [
  {
    title: "Clientes",
    subcategories: ["Pharma", "Aseguradores", "Prestadores"],
  },
  {
    title: "Alianzas Académicas & Centros de Pensamiento",
    subcategories: [],
  },
];

const AlliesSection = () => {
  return (
    <section id="aliados" className="section-padding border-t border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-primary" />
            <p className="text-xs uppercase tracking-[0.4em] text-primary font-mono">Red</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">Aliados y Alianzas</h2>
        </motion.div>

        {categories.map((cat, ci) => (
          <motion.div
            key={ci}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.15 }}
            className="mb-12 last:mb-0"
          >
            <h3 className="text-sm font-bold text-foreground mb-2">{cat.title}</h3>
            {cat.subcategories.length > 0 && (
              <div className="flex gap-4 mb-4">
                {cat.subcategories.map((sub) => (
                  <span
                    key={sub}
                    className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider border border-border/50 px-3 py-1"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            )}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/20">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-20 bg-card flex items-center justify-center text-muted-foreground/30 text-xs font-mono hover:bg-muted/20 hover:text-muted-foreground/50 transition-all duration-300 cursor-default"
                >
                  Logo
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AlliesSection;
