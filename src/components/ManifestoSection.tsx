import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ManifestoSection = () => {
  const { t } = useTranslation();

  const notItems = [
    { negation: t("manifesto.not1Title"), clarification: t("manifesto.not1Desc") },
    { negation: t("manifesto.not2Title"), clarification: t("manifesto.not2Desc") },
    { negation: t("manifesto.not3Title"), clarification: t("manifesto.not3Desc") },
  ];

  return (
    <section id="manifiesto" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">{t("manifesto.tag")}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {t("manifesto.title")} <span className="text-gradient-bio">{t("manifesto.titleHighlight")}</span>
          </h2>
          <div className="glow-line max-w-xs mb-8" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-16">
          <blockquote className="border-l-2 border-neon-magenta pl-6 md:pl-10 max-w-4xl">
            <p className="text-2xl md:text-4xl font-bold leading-tight text-foreground">
              {t("manifesto.quote")} <span className="text-neon-cyan">{t("manifesto.quoteHighlight")}</span>
            </p>
          </blockquote>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mb-24">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="text-muted-foreground text-lg leading-relaxed">
            {t("manifesto.p1")}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="text-muted-foreground text-lg leading-relaxed">
            {t("manifesto.p2")}{" "}
            <span className="text-foreground font-semibold">{t("manifesto.p2Highlight")}</span>
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            {t("manifesto.notTitle")} <span className="text-neon-magenta">{t("manifesto.notHighlight")}</span> {t("manifesto.notTitleEnd")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            {notItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="border border-border bg-card/30 backdrop-blur-sm p-8 hover:border-neon-magenta/40 transition-colors duration-500">
                <p className="text-foreground font-bold text-lg mb-3">{item.negation}</p>
                {item.clarification && <p className="text-muted-foreground text-sm leading-relaxed">{item.clarification}</p>}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-24">
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            {t("manifesto.obsTitle")} <span className="text-gradient-bio">{t("manifesto.obsTitleHighlight")}</span>
          </h3>

          <div className="max-w-4xl space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("manifesto.obsP1")}{" "}
              <span className="text-foreground font-semibold">{t("manifesto.obsP1Highlight")}</span>
              {t("manifesto.obsP1End")}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("manifesto.obsP2")}{" "}
              <span className="text-foreground font-semibold">{t("manifesto.obsP2Highlight")}</span>
              {t("manifesto.obsP2End")}
            </p>
          </div>

          <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-12 border-l-2 border-neon-cyan pl-6 md:pl-10 max-w-4xl">
            <p className="text-xl md:text-2xl font-bold text-foreground italic leading-snug">
              {t("manifesto.finalQuote")}
            </p>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default ManifestoSection;
