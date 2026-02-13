import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowRight, Brain, TrendingDown, Cpu, BarChart3, Search } from "lucide-react";

const icons = [Brain, TrendingDown, Cpu, BarChart3, Search];

const CTASection = () => {
  const { t } = useTranslation();

  const cards = [
    { key: "c1", icon: icons[0] },
    { key: "c2", icon: icons[1] },
    { key: "c3", icon: icons[2] },
    { key: "c4", icon: icons[3] },
    { key: "c5", icon: icons[4] },
  ];

  const handleClick = () => {
    const el = document.getElementById("contacto");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-4 block">
            {t("cta.tag")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t("cta.title")}{" "}
            <span className="text-gradient-bio">{t("cta.titleHighlight")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.button
                key={card.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleClick}
                className={`group relative text-left p-6 rounded-lg border border-border bg-card/80 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 cursor-pointer ${
                  i === 4 ? "md:col-start-1 lg:col-start-2" : ""
                }`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-bio-subtle" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-md bg-gradient-bio-subtle flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      {t(`cta.${card.key}Tag`)}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-foreground leading-relaxed mb-4">
                    {t(`cta.${card.key}`)}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                    {t("cta.action")}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
