import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap, Monitor, Sparkles, BookOpen, Rocket, Brain, DollarSign, ShieldCheck, Users } from "lucide-react";

const OxLearningSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-32 bg-card">
      <div className="absolute inset-0 grid-pattern opacity-5" />
      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">{t("oxlearning.tag")}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t("oxlearning.title")} <span className="text-gradient-bio">{t("oxlearning.titleHighlight")}</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">{t("oxlearning.description")}</p>
        </motion.div>

        <div className="space-y-12">
          {/* 1. Plataforma Virtual */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="border-2 border-border bg-background p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Monitor className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("oxlearning.platform")}</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">{t("oxlearning.platformDesc")}</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground">{t("oxlearning.platformAccess")}</span>{" "}
                  <span className="text-sm text-muted-foreground">{t("oxlearning.platformAccessDesc")}</span>
                </div>
              </div>
            </div>
            <a href="https://www.oxlearning.com.co/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:text-neon-cyan transition-colors">
              <GraduationCap className="w-4 h-4" />
              {t("oxlearning.platformCta")}
            </a>
          </motion.div>

          {/* 2. Eventos */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="border-2 border-border bg-background p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("oxlearning.events")}</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">{t("oxlearning.eventsDesc")}</p>
            <div className="space-y-4">
              {[
                { title: t("oxlearning.eventsItem1"), desc: t("oxlearning.eventsItem1Desc") },
                { title: t("oxlearning.eventsItem2"), desc: t("oxlearning.eventsItem2Desc") },
                { title: t("oxlearning.eventsItem3"), desc: t("oxlearning.eventsItem3Desc") },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">{item.title}:</span>{" "}
                    <span className="text-sm text-muted-foreground">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Upskilling */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="border-2 border-border bg-background p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Rocket className="w-6 h-6 text-primary" />
              <h3 className="text-xl md:text-2xl font-bold text-foreground">{t("oxlearning.upskilling")}</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-3xl">{t("oxlearning.upskillingDesc")}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: Brain, title: t("oxlearning.upskill1"), desc: t("oxlearning.upskill1Desc") },
                { icon: DollarSign, title: t("oxlearning.upskill2"), desc: t("oxlearning.upskill2Desc") },
                { icon: ShieldCheck, title: t("oxlearning.upskill3"), desc: t("oxlearning.upskill3Desc") },
                { icon: Users, title: t("oxlearning.upskill4"), desc: t("oxlearning.upskill4Desc") },
              ].map((item, i) => (
                <div key={i} className="group border border-border p-6 hover:bg-muted/50 transition-colors">
                  <item.icon className="w-5 h-5 text-primary mb-4" />
                  <h4 className="text-sm font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OxLearningSection;
