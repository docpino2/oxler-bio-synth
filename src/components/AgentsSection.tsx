import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, TrendingUp, Play, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import oncoagentLogo from "@/assets/oncoagent-logo.png";
import pegaxusLogo from "@/assets/pegaxus-logo.png";

const AgentsSection = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const { t } = useTranslation();

  const agents = [
    {
      icon: ShieldCheck,
      image: oncoagentLogo,
      name: "OncoAgent",
      tag: t("agents.oncoagent.tag"),
      purpose: t("agents.oncoagent.purpose"),
      capabilities: [
        { title: t("agents.oncoagent.cap1Title"), desc: t("agents.oncoagent.cap1Desc") },
        { title: t("agents.oncoagent.cap2Title"), desc: t("agents.oncoagent.cap2Desc") },
        { title: t("agents.oncoagent.cap3Title"), desc: t("agents.oncoagent.cap3Desc") },
      ],
      status: t("agents.status"),
      demoUrl: "https://www.youtube.com/embed/A8SiGn--lsA",
    },
    {
      icon: TrendingUp,
      image: pegaxusLogo,
      name: "Pegaxus",
      tag: t("agents.pegaxus.tag"),
      purpose: t("agents.pegaxus.purpose"),
      capabilities: [
        { title: t("agents.pegaxus.cap1Title"), desc: t("agents.pegaxus.cap1Desc") },
        { title: t("agents.pegaxus.cap2Title"), desc: t("agents.pegaxus.cap2Desc") },
        { title: t("agents.pegaxus.cap3Title"), desc: t("agents.pegaxus.cap3Desc") },
      ],
      status: t("agents.status"),
      demoUrl: "https://www.youtube.com/embed/2xFvBjOZF_4",
    },
  ];

  return (
    <section id="agentes-ia" className="relative py-32 bg-card">
      <div className="absolute inset-0 grid-pattern opacity-5" />

      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">{t("agents.tag")}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t("agents.title")} <span className="text-gradient-bio">{t("agents.titleHighlight")}</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">{t("agents.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {agents.map((agent, index) => (
            <motion.div key={agent.name} initial={{ opacity: 0, x: index === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.2 }} className="relative border-2 border-border bg-background p-8 md:p-10">
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse-glow" />
                <span className="font-mono text-[10px] tracking-widest text-neon-cyan">{agent.status}</span>
              </div>

              <div className="mb-6 overflow-hidden rounded-lg border border-border bg-background/50">
                <img src={agent.image} alt={agent.name} className="w-full h-48 md:h-56 object-contain p-2" />
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{agent.name}</h3>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{agent.tag}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-6 border-l-2 border-primary/30 pl-4 italic">{agent.purpose}</p>

              <div className="space-y-5">
                {agent.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                    <div>
                      <span className="text-sm font-semibold text-foreground">{cap.title}:</span>{" "}
                      <span className="text-sm text-muted-foreground">{cap.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {activeDemo === agent.name && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="mt-6 overflow-hidden">
                    <div className="relative w-full aspect-video border border-border">
                      <iframe src={agent.demoUrl} title={`Demo ${agent.name}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8 pt-6 border-t border-border">
                <button onClick={() => setActiveDemo(activeDemo === agent.name ? null : agent.name)} className="font-mono text-xs uppercase tracking-widest text-primary hover:text-neon-cyan transition-colors flex items-center gap-2">
                  {activeDemo === agent.name ? (
                    <><X className="w-3 h-3" /> {t("agents.closeDemo")}</>
                  ) : (
                    <><Play className="w-3 h-3" /> {t("agents.watchDemo")}</>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
