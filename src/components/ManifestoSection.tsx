import { motion } from "framer-motion";

const ManifestoSection = () => {
  return (
    <section id="manifiesto" className="section-padding border-t border-border relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/[0.02] to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-secondary" />
            <p className="text-xs uppercase tracking-[0.4em] text-secondary font-mono">
              Manifiesto
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-[1.1]">
            Qué resolvemos
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-l-2 border-primary/40 pl-6 md:pl-12 mb-16 py-4"
        >
          <blockquote className="text-2xl md:text-4xl lg:text-5xl font-light text-foreground/70 leading-[1.2]">
            El problema no es
            <br />
            la inteligencia;
            <br />
            <span className="gradient-text font-bold not-italic">es la arquitectura.</span>
          </blockquote>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-border/30">
          {[
            {
              num: "01",
              title: "No somos una fábrica de software",
              desc: "Diseñamos sistemas de decisión, no productos genéricos. Cada solución responde a un contexto clínico y financiero específico.",
            },
            {
              num: "02",
              title: "No somos consultoría tradicional",
              desc: "Operamos con modelos computacionales, IA resolutiva y validación clínica real. Sin PowerPoints decorativos.",
            },
            {
              num: "03",
              title: "Ingeniería de contexto",
              desc: "Orquestamos sistemas multiagente que entienden el contexto antes de actuar. La IA decide bajo supervisión humana.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="p-8 bg-card hover:bg-muted/30 transition-all duration-500 group"
            >
              <span className="text-xs font-mono text-primary/50 mb-4 block">{item.num}</span>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
