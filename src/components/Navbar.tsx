import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import oxlerLogo from "@/assets/oxler-logo.png";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t("nav.ciclo"), href: "#ciclo" },
    { label: t("nav.ecosistema"), href: "#ecosistema" },
    { label: t("nav.agentes"), href: "#agentes-ia" },
    { label: t("nav.oxlearning"), href: "#servicios" },
    { label: t("nav.equipo"), href: "#equipo" },
    { label: t("nav.aliados"), href: "#aliados" },
    { label: t("nav.soluciones"), href: "#soluciones" },
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

        {/* Desktop nav */}
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

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="py-3 px-4 rounded-md text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
