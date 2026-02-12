import { motion } from "framer-motion";
import logoJnj from "@/assets/logo-jnj.png";
import logoSanofi from "@/assets/logo-sanofi.png";
import logoRoche from "@/assets/logo-roche.png";
import logoAstrazeneca from "@/assets/logo-astrazeneca.png";
import logoAbbott from "@/assets/logo-abbott.png";
import logoLilly from "@/assets/logo-lilly.png";
import logoLaCardio from "@/assets/logo-lacardio.webp";
import logoHic from "@/assets/logo-hic.png";
import logoHomil from "@/assets/logo-homil.jpg";
import logoCtic from "@/assets/logo-ctic.png";
import logoKaizen from "@/assets/logo-kaizen.png";
import logoUso from "@/assets/logo-uso.png";
import logoRimac from "@/assets/logo-rimac.png";
import logoSegurosBolivar from "@/assets/logo-seguros-bolivar.png";
import logoUniandes from "@/assets/logo-uniandes.png";
import logoAipocrates from "@/assets/logo-aipocrates.png";
import logoMitCriticalData from "@/assets/logo-mit-critical-data.png";
import logoZadorex from "@/assets/logo-zadorex.png";

const pharmaLogos = [
  { name: "Johnson & Johnson", logo: logoJnj },
  { name: "Sanofi", logo: logoSanofi },
  { name: "Roche", logo: logoRoche },
  { name: "AstraZeneca", logo: logoAstrazeneca },
  { name: "Abbott", logo: logoAbbott },
  { name: "Lilly", logo: logoLilly },
];

const stakeholderLogos = [
  { name: "La Cardio", logo: logoLaCardio },
  { name: "Hospital Internacional de Colombia", logo: logoHic },
  { name: "Hospital Militar Central", logo: logoHomil },
  { name: "CTIC", logo: logoCtic },
  { name: "Kaizen", logo: logoKaizen },
  { name: "Unidad Oncológica Surcolombiana", logo: logoUso },
  { name: "RIMAC Seguros", logo: logoRimac },
  { name: "Seguros Bolívar", logo: logoSegurosBolivar },
];

const academicLogos = [
  { name: "Universidad de los Andes", logo: logoUniandes },
  { name: "AIpocratΣs", logo: logoAipocrates },
  { name: "MIT Critical Data", logo: logoMitCriticalData },
  { name: "Zadorex", logo: logoZadorex },
];

type AllyCategory = {
  title: string;
  logos: { name: string; logo: string }[];
};

const categories: AllyCategory[] = [
  { title: "Pharma", logos: pharmaLogos },
  { title: "Stakeholders", logos: stakeholderLogos },
  { title: "Alianzas Académicas", logos: academicLogos },
];

const AlliesSection = () => {
  return (
    <section id="aliados" className="relative py-32">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">
            Red de confianza
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Nuestros <span className="text-gradient-bio">aliados</span>
          </h2>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Colaboramos con líderes de la industria farmacéutica, stakeholders clave del sector salud
            y centros académicos de excelencia en Colombia, Perú y Ecuador para crear medicina exponencial.
          </p>
        </motion.div>

        {categories.map((category, catIndex) => {
          if (category.logos.length === 0) return null;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
              className="mb-16 last:mb-0"
            >
              <h3 className="font-mono text-sm uppercase tracking-widest text-neon-magenta mb-8 border-b border-border pb-3">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                {category.logos.map((ally, i) => (
                  <motion.div
                    key={ally.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative flex items-center justify-center border border-border bg-card/30 backdrop-blur-sm p-6 h-28 hover:border-neon-cyan/40 transition-all duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <img
                      src={ally.logo}
                      alt={ally.name}
                      className={`max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-500 ${ally.name === "La Cardio" || ally.name === "AIpocratΣs" ? "max-h-20" : "max-h-14"}`}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default AlliesSection;
