import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import oxlerLogo from "@/assets/oxler-logo.png";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();

  const navItems = [
    { label: t("nav.manifiesto"), href: "#manifiesto" },
    { label: t("nav.ciclo"), href: "#ciclo" },
    { label: t("nav.ecosistema"), href: "#ecosistema" },
    { label: t("nav.agentes"), href: "#agentes-ia" },
    { label: t("nav.oxlearning"), href: "#oxlearning" },
    { label: t("nav.equipo"), href: "#equipo" },
    { label: t("nav.aliados"), href: "#aliados" },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={oxlerLogo} alt="OxLER" className="h-12 w-auto" />
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <LanguageSelector />
        </div>

        <div className="md:hidden">
          <LanguageSelector />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
