import { motion } from "framer-motion";
import oxlerLogo from "@/assets/oxler-logo.png";

const Navbar = () => {
  const navItems = [
    { label: "Manifiesto", href: "#manifiesto" },
    { label: "Ciclo OxLER", href: "#ciclo" },
    { label: "Ecosistema", href: "#ecosistema" },
    { label: "Agentes IA", href: "#agentes-ia" },
    { label: "OxLearning", href: "#oxlearning" },
    { label: "Equipo", href: "#equipo" },
    { label: "Aliados", href: "#aliados" },
    { label: "Contacto", href: "#contacto" },
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
              key={item.label}
              href={item.href}
              className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
