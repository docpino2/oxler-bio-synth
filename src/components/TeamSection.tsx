import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import fotoLuisPino from "@/assets/foto-luis-pino.png";
import fotoAndreaFranco from "@/assets/foto-andrea-franco.jpg";
import fotoLilianaClavijo from "@/assets/foto-liliana-clavijo.jpg";
import fotoGerardoOspina from "@/assets/foto-gerardo-ospina.png";
import fotoJulianMartinez from "@/assets/foto-julian-martinez.jpg";
import fotoTatianaSierra from "@/assets/foto-tatiana-sierra.jpg";
import fotoManuelGomez from "@/assets/foto-manuel-gomez.png";
import fotoAlejandroGonzalez from "@/assets/foto-alejandro-gonzalez.png";
import fotoJuanPabloPino from "@/assets/foto-juan-pablo-pino.png";
import fotoIvanTriana from "@/assets/foto-ivan-triana.jpeg";

const teamMembers = [
  { name: "Luis Eduardo Pino V.", role: "Socio Fundador y CEO", description: "Médico Hematólogo y Oncólogo\nEspecialista en IA/ML", initials: "LP", photo: fotoLuisPino },
  { name: "Andrea Franco Corredor", role: "Socio Fundador y Gerente General", description: "Médica Oftalmóloga", initials: "AF", photo: fotoAndreaFranco },
  { name: "Liliana Clavijo Alvarez", role: "Gerente de Proyectos", description: "Médica Auditora,\nEspecialista en Derecho Médico", initials: "LC", photo: fotoLilianaClavijo },
  { name: "Gerardo Ospina H.", role: "Líder de Ingeniería", description: "Ingeniero de Sistemas\nMSc Educación", initials: "GO", photo: fotoGerardoOspina },
  { name: "Julián Martínez L.", role: "Desarrollador", description: "Ingeniero Biomédico\nIngeniero Electrónico", initials: "JM", photo: fotoJulianMartinez },
  { name: "Iván Camilo Triana A.", role: "Líder de Investigación", description: "Médico Internista, Epidemiólogo\nFellowship Hemato-Oncología", initials: "IT", photo: fotoIvanTriana },
  { name: "Tatiana Sierra", role: "Consultora", description: "Enfermera Oncóloga\nMSc en Gerencia de Salud", initials: "TS", photo: fotoTatianaSierra },
  { name: "Manuel Gómez Chávez", role: "Director Financiero y Contable", description: "", initials: "MG", photo: fotoManuelGomez },
  { name: "Alejandro González", role: "Líder de Calidad y Métricas", description: "", initials: "AG", photo: fotoAlejandroGonzalez },
  { name: "Juan Pablo Pino Franco", role: "Community Manager", description: "", initials: "JP", photo: fotoJuanPabloPino },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1 } }),
};

const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="equipo" className="relative py-32">
      <div className="container relative z-10 px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">{t("team.tag")}</span>
          <div className="flex items-baseline gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              {t("team.title")} <span className="text-gradient-bio">{t("team.titleHighlight")}</span>
            </h2>
            <span className="font-mono text-2xl md:text-3xl text-muted-foreground">2026</span>
          </div>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">{t("team.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div key={member.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants} className="group relative border border-border bg-card/30 backdrop-blur-sm p-8 text-center hover:border-neon-cyan/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative mx-auto mb-6 w-28 h-28 rounded-full border-2 border-border group-hover:border-neon-cyan/50 transition-colors duration-500 flex items-center justify-center bg-muted/30 overflow-hidden">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover object-top" />
                ) : (
                  <span className="text-2xl font-bold text-neon-cyan/70 group-hover:text-neon-cyan transition-colors duration-500 font-mono">{member.initials}</span>
                )}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
              <p className="font-mono text-xs uppercase tracking-widest text-neon-magenta mb-3">{member.role}</p>
              <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-12 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {t("team.footer")}
        </motion.p>
      </div>
    </section>
  );
};

export default TeamSection;
