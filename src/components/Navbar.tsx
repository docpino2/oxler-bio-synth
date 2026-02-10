import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Metodología PENTA", href: "#penta" },
  { label: "Ecosistema Agéntico", href: "#agentes" },
  { label: "OxLEARNING", href: "#oxlearning" },
  { label: "Investigación", href: "#ciclo" },
  { label: "Equipo", href: "#equipo" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="relative group"
        >
          <span className="text-xl font-bold tracking-[0.15em] gradient-text">
            OxLER
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-300" />
        </button>

        {/* Desktop nav - command center style */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center border border-border/40 rounded-none overflow-hidden">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.1em] font-mono text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all ${
                  i < navItems.length - 1 ? "border-r border-border/40" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left py-3 text-xs uppercase tracking-[0.15em] font-mono text-muted-foreground hover:text-primary transition-colors border-b border-border/30 last:border-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
