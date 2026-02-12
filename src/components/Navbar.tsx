import { motion } from "framer-motion";
import oxlerLogo from "@/assets/oxler-logo.png";

const Navbar = () => {
  const navItems = ["Ecosistema", "Agentes IA", "Servicios", "Contacto"];

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
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="brutalist-border-accent px-4 py-2 text-xs font-mono uppercase tracking-widest text-primary hover:bg-primary hover:text-primary-foreground transition-all">
          Acceso
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
