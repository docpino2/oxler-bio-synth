import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import oxlerLogo from "@/assets/oxler-logo.png";

const FooterSection = () => {
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.manifiesto"), href: "#manifiesto" },
    { label: t("nav.ciclo"), href: "#ciclo" },
    { label: t("nav.ecosistema"), href: "#ecosistema" },
    { label: t("nav.agentes"), href: "#agentes-ia" },
    { label: t("nav.oxlearning"), href: "#oxlearning" },
    { label: t("nav.equipo"), href: "#equipo" },
    { label: t("nav.aliados"), href: "#aliados" },
  ];

  return (
    <footer id="contacto" className="relative border-t border-border py-20 bg-card">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <img src={oxlerLogo} alt="OxLER" className="h-12 w-auto mb-2" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">{t("footer.tagline")}</p>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">{t("footer.description")}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">{t("footer.navigation")}</h4>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{item.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">{t("footer.contact")}</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>NIT 901.600.934-7</p>
              <p><a href="mailto:gerencia@oxler.me" className="hover:text-primary transition-colors">gerencia@oxler.me</a></p>
              <p><a href="mailto:media@oxler.me" className="hover:text-primary transition-colors">media@oxler.me</a></p>
              <p><a href="tel:+573108616076" className="hover:text-primary transition-colors">+57 310 861 6076</a></p>
              <p><a href="https://oxler.ai/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">oxler.ai</a></p>
              <p>Colombia</p>
            </div>
          </motion.div>
        </div>

        <div className="glow-line mt-16 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-muted-foreground">{t("footer.rights")}</span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{t("footer.fusion")}</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
