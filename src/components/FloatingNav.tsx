import { useState, useEffect } from "react";
import { ArrowUp, Home, FileText, RefreshCcw, Hexagon, Bot, Wrench, BookOpen, Users, Phone } from "lucide-react";

const sections = [
  { icon: Home, href: "#hero", label: "Inicio" },
  { icon: FileText, href: "#manifiesto", label: "Manifiesto" },
  { icon: RefreshCcw, href: "#ciclo", label: "Ciclo" },
  { icon: Hexagon, href: "#penta", label: "Penta" },
  { icon: Bot, href: "#agentes", label: "Agentes" },
  { icon: Wrench, href: "#servicios", label: "Servicios" },
  { icon: BookOpen, href: "#oxlearning", label: "OxLearning" },
  { icon: Users, href: "#equipo", label: "Equipo" },
  { icon: Phone, href: "#contacto", label: "Contacto" },
];

const FloatingNav = () => {
  const [active, setActive] = useState("#hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);

      const sectionEls = sections.map((s) => ({
        id: s.href,
        el: document.querySelector(s.href),
      }));

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const el = sectionEls[i].el;
        if (el && el.getBoundingClientRect().top <= 200) {
          setActive(sectionEls[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2">
      {sections.map((s) => {
        const Icon = s.icon;
        const isActive = active === s.href;
        return (
          <button
            key={s.href}
            onClick={() => document.querySelector(s.href)?.scrollIntoView({ behavior: "smooth" })}
            title={s.label}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 ${
              isActive
                ? "bg-primary text-primary-foreground scale-110"
                : "bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30"
            }`}
          >
            <Icon size={14} />
          </button>
        );
      })}

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-9 h-9 mt-2 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary/30 flex items-center justify-center transition-all"
      >
        <ArrowUp size={14} />
      </button>
    </div>
  );
};

export default FloatingNav;
