import { motion } from "framer-motion";
import oxlerLogo from "@/assets/oxler-logo.png";

const FooterSection = () => {
  return (
    <footer id="contacto" className="relative border-t border-border py-20 bg-card">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={oxlerLogo} alt="OxLER" className="h-12 w-auto mb-2" />
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
              Ecosistema Inteligente de Optimización en Salud
            </p>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Arquitectura de Decisiones en Salud soportada por IA, modelos de optimización y desarrollo tecnológico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Manifiesto", href: "#manifiesto" },
                { label: "Ciclo OxLER", href: "#ciclo" },
                { label: "Ecosistema PENTA", href: "#ecosistema" },
                { label: "Agentes IA", href: "#agentes-ia" },
                { label: "OxLearning", href: "#oxlearning" },
                { label: "Equipo", href: "#equipo" },
                { label: "Aliados", href: "#aliados" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
              Contacto
            </h4>
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
          <span className="font-mono text-xs text-muted-foreground">
            © 2026 OxLER. Todos los derechos reservados.
          </span>
          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
            Fusión Biodigital
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
