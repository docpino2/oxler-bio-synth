import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Brain, Cpu, GraduationCap, Search, ArrowRight } from "lucide-react";
import cicloOxlerDiagram from "@/assets/ciclo-oxler-diagram.png";

const CicloOxlerSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const stages = [
    {
      icon: Brain,
      title: t("ciclo.stage1Title"),
      subtitle: t("ciclo.stage1Subtitle"),
      label: t("ciclo.stage1Label"),
      description: t("ciclo.stage1Desc"),
      technical: t("ciclo.stage1Tech"),
      color: "primary",
    },
    {
      icon: Cpu,
      title: t("ciclo.stage2Title"),
      subtitle: t("ciclo.stage2Subtitle"),
      label: t("ciclo.stage2Label"),
      description: t("ciclo.stage2Desc"),
      technical: t("ciclo.stage2Tech"),
      color: "secondary",
    },
    {
      icon: GraduationCap,
      title: t("ciclo.stage3Title"),
      subtitle: t("ciclo.stage3Subtitle"),
      label: t("ciclo.stage3Label"),
      description: t("ciclo.stage3Desc"),
      technical: t("ciclo.stage3Tech"),
      color: "primary",
    },
    {
      icon: Search,
      title: t("ciclo.stage4Title"),
      subtitle: t("ciclo.stage4Subtitle"),
      label: t("ciclo.stage4Label"),
      description: t("ciclo.stage4Desc"),
      technical: t("ciclo.stage4Tech"),
      color: "secondary",
    },
  ];

  return (
    <section id="ciclo" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">{t("ciclo.tag")}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t("ciclo.title")} <span className="text-gradient-bio">{t("ciclo.titleHighlight")}</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">{t("ciclo.description")}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-16 relative">
          <div className="relative overflow-hidden border border-border bg-card/50 p-3 md:p-4 max-w-2xl mx-auto">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-secondary" />
            <img src={cicloOxlerDiagram} alt={t("ciclo.diagramAlt")} className="w-full h-auto rounded-sm" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center mt-3">{t("ciclo.diagramCaption")}</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
            <div className="flex items-center justify-between px-[15%]">
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-secondary/40" />
              <ArrowRight className="w-5 h-5 text-neon-cyan mx-2 shrink-0" />
              <div className="flex-1 h-px bg-gradient-to-r from-secondary/40 to-primary/40" />
              <ArrowRight className="w-5 h-5 text-neon-cyan mx-2 shrink-0" />
              <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-secondary/40" />
            </div>
          </div>

          <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 items-center gap-2 text-muted-foreground">
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neon-magenta whitespace-nowrap">{t("ciclo.continuousCycle")}</span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative cursor-pointer"
              >
                <div className={`relative border-2 border-border bg-card p-8 transition-all duration-500 min-h-[280px] ${hoveredIndex === index ? stage.color === "primary" ? "border-primary shadow-neon-magenta" : "border-secondary shadow-neon-cyan" : ""}`}>
                  <div className="absolute -top-4 -left-1 font-mono text-6xl font-bold text-muted/30 select-none">{String(index + 1).padStart(2, "0")}</div>
                  <div className={`absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-${stage.color} transition-all duration-300 ${hoveredIndex === index ? "w-8 h-8" : ""}`} />
                  <div className={`absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-${stage.color} transition-all duration-300 ${hoveredIndex === index ? "w-8 h-8" : ""}`} />

                  <div className="relative z-10">
                    <div className={`inline-flex p-3 mb-4 bg-${stage.color}/10`}>
                      <stage.icon className={`w-6 h-6 text-${stage.color}`} />
                    </div>
                    <span className={`font-mono text-[10px] uppercase tracking-[0.2em] block mb-1 ${stage.color === "primary" ? "text-neon-magenta" : "text-neon-cyan"}`}>{stage.label}</span>
                    <h3 className="text-xl font-bold mb-1 text-foreground">{stage.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground block mb-4">{stage.subtitle}</span>

                    <AnimatePresence mode="wait">
                      {hoveredIndex === index ? (
                        <motion.div key="technical" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                          <div className="glow-line w-12 mb-3" />
                          <p className="text-sm text-muted-foreground leading-relaxed">{stage.technical}</p>
                        </motion.div>
                      ) : (
                        <motion.p key="description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="text-sm text-muted-foreground leading-relaxed">
                          {stage.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-${stage.color}/5`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Co-Ingeniería Clínica Sub-line */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 border-2 border-secondary/30 bg-card/80 p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-secondary" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-secondary" />
            <div className="absolute top-3 right-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-neon-cyan bg-secondary/10 px-3 py-1">{t("ciclo.coeng.tag")}</span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <div className="inline-flex p-2.5 bg-secondary/10">
                <Dna className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gradient-bio">{t("ciclo.coeng.title")}</h3>
            </div>
            <p className="text-muted-foreground mb-8 max-w-3xl italic border-l-2 border-secondary/30 pl-4">
              {t("ciclo.coeng.subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left: Bring your */}
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon-cyan block mb-4">{t("ciclo.coeng.bring")}</span>
                <div className="space-y-3">
                  {[
                    { icon: FlaskConical, text: t("ciclo.coeng.bring1") },
                    { icon: Lightbulb, text: t("ciclo.coeng.bring2") },
                    { icon: ArrowRightCircle, text: t("ciclo.coeng.bring3") },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className="p-1.5 bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                        <item.icon className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="text-foreground font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right: We contribute */}
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-neon-magenta block mb-4">{t("ciclo.coeng.weContribute")}</span>
                <div className="space-y-2.5">
                  {[
                    t("ciclo.coeng.c1"),
                    t("ciclo.coeng.c2"),
                    t("ciclo.coeng.c3"),
                    t("ciclo.coeng.c4"),
                    t("ciclo.coeng.c5"),
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm md:text-base text-foreground font-medium italic">
                {t("ciclo.coeng.closing")}
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-20 text-center">
            <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl mx-auto">
              {t("ciclo.statement")}{" "}
              <span className="text-gradient-bio">{t("ciclo.statementHighlight")}</span>
              {t("ciclo.statementEnd")}{" "}
              <span className="text-neon-cyan">{t("ciclo.statementHighlight2")}</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CicloOxlerSection;
