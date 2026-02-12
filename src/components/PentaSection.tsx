import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ShieldCheck, HeartPulse, ClipboardCheck, Microscope, FileSignature, ChevronDown } from "lucide-react";
import logoPenta from "@/assets/logo-penta.png";

const PentaCard = ({ pillar, t }: { pillar: { icon: any; number: string; title: string; subtitle: string; description: string; points: string[]; color: "primary" | "secondary" }; index: number; t: any }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`group relative border-2 border-border bg-card p-5 hover:border-${pillar.color} transition-all duration-300 ${expanded ? "z-50" : "z-10"}`}>
      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-${pillar.color}`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-${pillar.color}`} />

      <div className="flex items-center gap-3 mb-3">
        <div className={`inline-flex p-2 bg-${pillar.color}/10`}>
          <pillar.icon className={`w-4 h-4 text-${pillar.color}`} />
        </div>
        <span className={`font-mono text-xs font-bold text-${pillar.color}`}>{pillar.number}</span>
      </div>

      <h3 className="text-sm font-bold mb-1 text-foreground leading-tight">{pillar.title}</h3>
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground block mb-2">{pillar.subtitle}</span>
      <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">{pillar.description}</p>

      <button onClick={() => setExpanded(!expanded)} className={`flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-${pillar.color} hover:opacity-80 transition-opacity`}>
        {t("penta.keyPoints")}
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden mt-2 space-y-1.5">
            {pillar.points.map((point, i) => (
              <li key={i} className="text-[10px] text-muted-foreground leading-relaxed pl-3 border-l border-border">{point}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-${pillar.color}/5`} />
    </div>
  );
};

const PentaSection = () => {
  const { t } = useTranslation();

  const pillars = [
    { icon: ShieldCheck, number: "01", title: t("penta.p1Title"), subtitle: t("penta.p1Subtitle"), description: t("penta.p1Desc"), points: [t("penta.p1Point1"), t("penta.p1Point2"), t("penta.p1Point3")], color: "primary" as const },
    { icon: HeartPulse, number: "02", title: t("penta.p2Title"), subtitle: t("penta.p2Subtitle"), description: t("penta.p2Desc"), points: [t("penta.p2Point1"), t("penta.p2Point2"), t("penta.p2Point3")], color: "secondary" as const },
    { icon: ClipboardCheck, number: "03", title: t("penta.p3Title"), subtitle: t("penta.p3Subtitle"), description: t("penta.p3Desc"), points: [t("penta.p3Point1"), t("penta.p3Point2"), t("penta.p3Point3")], color: "primary" as const },
    { icon: Microscope, number: "04", title: t("penta.p4Title"), subtitle: t("penta.p4Subtitle"), description: t("penta.p4Desc"), points: [t("penta.p4Point1"), t("penta.p4Point2"), t("penta.p4Point3")], color: "secondary" as const },
    { icon: FileSignature, number: "05", title: t("penta.p5Title"), subtitle: t("penta.p5Subtitle"), description: t("penta.p5Desc"), points: [t("penta.p5Point1"), t("penta.p5Point2"), t("penta.p5Point3")], color: "primary" as const },
  ];

  return (
    <section id="ecosistema" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">{t("penta.tag")}</span>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              {t("penta.title")} <span className="text-gradient-bio">{t("penta.titleHighlight")}</span>
            </h2>
            <img src={logoPenta} alt="Logo Penta" className="h-16 md:h-20 w-auto" />
          </div>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">{t("penta.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 3 ? "lg:col-start-1 lg:col-end-2 lg:justify-self-center lg:w-full lg:max-w-sm" : index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2 lg:col-end-3 lg:justify-self-center lg:w-full lg:max-w-sm" : ""}
            >
              <PentaCard pillar={pillar} index={index} t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PentaSection;
