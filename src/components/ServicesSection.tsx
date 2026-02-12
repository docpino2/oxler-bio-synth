import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Layers, Cpu, Database, Workflow, Zap, Globe, Building2, GraduationCap } from "lucide-react";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Layers, title: t("services.s1Title"), description: t("services.s1Desc") },
    { icon: Cpu, title: t("services.s2Title"), description: t("services.s2Desc") },
    { icon: Database, title: t("services.s3Title"), description: t("services.s3Desc") },
    { icon: Workflow, title: t("services.s4Title"), description: t("services.s4Desc") },
    { icon: Zap, title: t("services.s5Title"), description: t("services.s5Desc") },
    { icon: Globe, title: t("services.s6Title"), description: t("services.s6Desc") },
    { icon: GraduationCap, title: t("services.s7Title"), description: t("services.s7Desc") },
  ];

  const uciaItems = [
    { label: t("services.uciaL1"), text: t("services.uciaT1") },
    { label: t("services.uciaL2"), text: t("services.uciaT2") },
    { label: t("services.uciaL3"), text: t("services.uciaT3") },
    { label: t("services.uciaL4"), text: t("services.uciaT4") },
  ];

  return (
    <section id="servicios" className="relative py-32">
      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">{t("services.tag")}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            {t("services.title")} <span className="text-gradient-bio">{t("services.titleHighlight")}</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index, arr) => (
            <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className={`group bg-background p-8 hover:bg-muted/50 transition-colors duration-300 ${index === arr.length - 1 && arr.length % 3 === 1 ? 'lg:col-span-3' : index >= arr.length - 2 && arr.length % 3 === 2 ? 'lg:col-span-1' : ''}`}>
              <service.icon className="w-5 h-5 text-primary mb-6" />
              <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-gradient-bio transition-colors">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-px border-2 border-primary/30 bg-background p-8 md:p-10">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-6 h-6 text-primary" />
            <h3 className="text-xl md:text-2xl font-bold text-gradient-bio">{t("services.uciaTitle")}</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-3xl italic border-l-2 border-primary/30 pl-4">{t("services.uciaSubtitle")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uciaItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 bg-primary shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-foreground">{item.label}:</span>{" "}
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
