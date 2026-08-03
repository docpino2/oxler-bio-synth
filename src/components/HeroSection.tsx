import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import heroBg from "@/assets/hero-bg.jpg";
import neuralNetwork from "@/assets/neural-network.png";

const HeroSection = () => {
  const { t } = useTranslation();

  const impacts = [
    { title: t("hero.impact1Title"), desc: t("hero.impact1Desc") },
    { title: t("hero.impact2Title"), desc: t("hero.impact2Desc") },
    { title: t("hero.impact3Title"), desc: t("hero.impact3Desc") },
  ];

  const capabilities = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`hero.cap${n}`));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-28">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <img src={neuralNetwork} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen" />
        <div className="absolute inset-0 bg-background/50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="w-full h-px bg-primary/20 animate-scan-line" />
      </div>

      <div className="relative z-10 container px-6">
        <div className="max-w-5xl">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-6">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan">{t("hero.tag")}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-8">
            <span className="text-foreground">{t("hero.title1")}</span>
            {" "}
            <span className="text-gradient-bio">{t("hero.title2")}</span>
            {" "}
            <span className="text-foreground">{t("hero.title3")}</span>
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="max-w-3xl mb-10 space-y-4">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{t("hero.description")}</p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">{t("hero.descHighlight")}</span>{" "}
              {t("hero.descEnd")}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4">
            <a href="#ecosistema" className="bg-gradient-bio px-8 py-4 text-sm font-mono uppercase tracking-widest text-primary-foreground hover:opacity-90 transition-opacity text-center">
              {t("hero.cta1")}
            </a>
            <a href="#agentes-ia" className="brutalist-border px-8 py-4 text-sm font-mono uppercase tracking-widest text-foreground hover:bg-muted transition-colors text-center">
              {t("hero.cta2")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-border brutalist-border"
        >
          {impacts.map((item, i) => (
            <div key={item.title} className="bg-background/80 backdrop-blur-sm p-6 md:p-8">
              <span className="font-mono text-xs text-neon-cyan">0{i + 1}</span>
              <h2 className="mt-3 text-lg font-bold text-foreground">{item.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
            {t("hero.capTitle")}
          </p>
          <div className="flex flex-wrap gap-3">
            {capabilities.map((cap) => (
              <span
                key={cap}
                className="brutalist-border px-4 py-2 text-xs font-mono uppercase tracking-wider text-foreground/90 bg-background/60 backdrop-blur-sm"
              >
                {cap}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm md:text-base text-foreground/80 border-l-2 border-primary pl-4 leading-relaxed">
            {t("hero.capClosing")}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 glow-line" />
    </section>
  );
};

export default HeroSection;
