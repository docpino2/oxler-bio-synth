import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

const FooterSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2 tracking-wider">OxLER</h3>
            <p className="text-[11px] font-mono text-primary/50 mb-4 tracking-wider uppercase">
              Ecosistema Inteligente de Optimización en Salud
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Arquitectura de Decisiones en Salud soportada por IA, modelos de optimización y desarrollo tecnológico.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-mono text-foreground mb-4 uppercase tracking-[0.2em]">Secciones</h4>
            <div className="grid grid-cols-2 gap-1">
              {[
                { label: "Manifiesto", href: "#manifiesto" },
                { label: "Ciclo", href: "#ciclo" },
                { label: "Penta", href: "#penta" },
                { label: "Agentes", href: "#agentes" },
                { label: "Servicios", href: "#servicios" },
                { label: "OxLearning", href: "#oxlearning" },
                { label: "Equipo", href: "#equipo" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors text-left py-1 font-mono"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono text-foreground mb-4 uppercase tracking-[0.2em]">Contacto</h4>
            <div className="space-y-3 text-xs font-mono">
              <a href="mailto:gerencia@oxler.me" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={12} /> gerencia@oxler.me
              </a>
              <a href="mailto:media@oxler.me" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={12} /> media@oxler.me
              </a>
              <a href="tel:+573108616076" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone size={12} /> +57 310 861 6076
              </a>
              <p className="text-muted-foreground/40 mt-4">NIT 901.600.934-7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono text-muted-foreground/40 tracking-wider">
            © {new Date().getFullYear()} OxLER S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/50 animate-pulse" />
            <span className="text-[10px] font-mono text-muted-foreground/30">SISTEMA ACTIVO</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
