import { motion } from "framer-motion";

const ManifestoSection = () => {
  return (
    <section id="manifiesto" className="relative py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="container relative z-10 px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">
            Manifiesto
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Qué <span className="text-gradient-bio">resolvemos</span>
          </h2>
          <div className="glow-line max-w-xs mb-8" />
        </motion.div>

        {/* Main statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <blockquote className="border-l-2 border-neon-magenta pl-6 md:pl-10 max-w-4xl">
            <p className="text-2xl md:text-4xl font-bold leading-tight text-foreground">
              El problema no es la inteligencia;{" "}
              <span className="text-neon-cyan">es la arquitectura.</span>
            </p>
          </blockquote>
        </motion.div>

        {/* Body paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            El sector salud ha caído en la trampa de la eficiencia algorítmica.
            Hemos llenado las instituciones de software que automatiza el caos en
            lugar de resolverlo. La IA promete precisión, pero sin una estructura
            de pensamiento sistémico, solo está acelerando decisiones
            equivocadas.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            En OxLER, no vemos el sistema de salud como una suma de prestadores y
            pagadores, sino como un{" "}
            <span className="text-foreground font-semibold">
              tejido de decisiones críticas bajo presión.
            </span>
          </motion.p>
        </div>

        {/* Qué NO somos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Qué <span className="text-neon-magenta">NO</span> somos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            {[
              {
                negation: "No somos una fábrica de software.",
                clarification:
                  "En OxLER no vendemos software. Construimos la infraestructura de pensamiento que permite que la tecnología sea útil.",
              },
              {
                negation: "No somos consultores de diapositivas y teorías.",
                clarification:
                  "Pasamos de la IA como herramienta (un gadget más) a la IA como sistema operativo (PENTA + CaaS).",
              },
              {
                negation: 'No somos defensores de la "automatización total".',
                clarification: "",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-border bg-card/30 backdrop-blur-sm p-8 hover:border-neon-magenta/40 transition-colors duration-500"
              >
                <p className="text-foreground font-bold text-lg mb-3">
                  {item.negation}
                </p>
                {item.clarification && (
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.clarification}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Nuestra obsesión */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Nuestra <span className="text-gradient-bio">obsesión</span>
          </h3>

          <div className="max-w-4xl space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Es la{" "}
              <span className="text-foreground font-semibold">
                Ingeniería de Contexto
              </span>
              : asegurar que el dato correcto llegue al humano correcto, con la
              interpretación correcta, en el milisegundo exacto en que la
              decisión debe ser tomada.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Creemos en nuestro{" "}
              <span className="text-foreground font-semibold">
                ecosistema agéntico
              </span>
              : donde la IA asume la carga cognitiva administrativa para
              devolverle al médico su activo más preciado:{" "}
              <span className="text-neon-cyan font-semibold">
                el tiempo para pensar más rápido y mejor.
              </span>
            </p>
          </div>

          {/* Final quote */}
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 border-l-2 border-neon-cyan pl-6 md:pl-10 max-w-4xl"
          >
            <p className="text-xl md:text-2xl font-bold text-foreground italic leading-snug">
              "No automatizamos procesos para ahorrar dinero; orquestamos
              sistemas para salvar el criterio médico y ser eficientes."
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
