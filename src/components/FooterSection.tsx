import { Mail, Phone } from "lucide-react";

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
            <h3 className="text-2xl font-bold gradient-text mb-2">OxLER</h3>
            <p className="text-sm text-primary font-mono mb-4">
              Ecosistema Inteligente de Optimización en Salud
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Arquitectura de Decisiones en Salud soportada por IA, modelos de optimización y desarrollo tecnológico.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Secciones</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Manifiesto", href: "#manifiesto" },
                { label: "Ciclo", href: "#ciclo" },
                { label: "Penta", href: "#penta" },
                { label: "Agentes", href: "#agentes" },
                { label: "Servicios", href: "#servicios" },
                { label: "Equipo", href: "#equipo" },
              ].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contacto</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <a href="mailto:gerencia@oxler.me" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> gerencia@oxler.me
              </a>
              <a href="mailto:media@oxler.me" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> media@oxler.me
              </a>
              <a href="tel:+573108616076" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +57 310 861 6076
              </a>
              <p className="text-xs text-muted-foreground/60 mt-4">NIT 901.600.934-7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} OxLER S.A.S. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
