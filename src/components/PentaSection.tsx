import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HeartPulse, ClipboardCheck, Microscope, FileSignature, ChevronDown } from "lucide-react";
import logoPenta from "@/assets/logo-penta.png";

const pillars = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Gestión Inteligente del Riesgo",
    subtitle: "Caracterización y Enrutamiento Estratégico",
    description:
      "Transformamos datos en inteligencia poblacional para optimizar la puerta de entrada al sistema de salud.",
    points: [
      "Caracterización profunda de cohortes de cáncer (CAPO).",
      "Rediseño de rutas integrales y optimización de programas de tamizaje.",
      "Arquitectura biodigital para la estructuración de datos clínicos.",
    ],
    color: "primary" as const,
  },
  {
    icon: HeartPulse,
    number: "02",
    title: "Gestión Clínica Avanzada",
    subtitle: "Armonización y Gobierno Clínico",
    description:
      "Eliminamos la variabilidad clínica injustificada mediante prácticas médicas guiadas estrictamente por datos.",
    points: [
      "Armonización clínica basada en evidencia y el contexto local de la red.",
      "Evaluación de ineficiencias mediante relacionamiento técnico de pares.",
      "Estratificación de riesgo clínico utilizando Machine Learning (ML).",
    ],
    color: "secondary" as const,
  },
  {
    icon: ClipboardCheck,
    number: "03",
    title: "Auditoría de Valor",
    subtitle: "De la Glosa Administrativa a la Evidencia",
    description:
      "Evolucionamos la auditoría tradicional hacia un modelo concurrente que garantiza la pertinencia técnica y la seguridad.",
    points: [
      "Evaluación bajo la matriz adaptada ASCO QOPI (con publicación internacional).",
      "Gestión de desperdicios centrada en la calidad y la seguridad del paciente.",
      "Detección automatizada de variaciones no justificadas en la atención.",
    ],
    color: "primary" as const,
  },
  {
    icon: Microscope,
    number: "04",
    title: "Gestión de Tecnologías",
    subtitle: "Oncología de Precisión y Valor Terapéutico",
    description:
      "Maximizamos el impacto de las tecnologías de alto costo mediante criterios científicos de priorización.",
    points: [
      "Evaluaciones de Tecnologías en Salud (ETES) y matrices multicriterio (MCDA).",
      "Módulo especializado en Terapias Dirigidas y Oncología de Precisión.",
      "Diseño e implementación de acuerdos de acceso gestionado (MEAs).",
    ],
    color: "secondary" as const,
  },
  {
    icon: FileSignature,
    number: "05",
    title: "Contratación Inteligente",
    subtitle: "Modelos Contractuales Basados en Valor",
    description:
      "Rediseñamos la relación pagador-prestador mediante arquitecturas que premian el desempeño y los resultados.",
    points: [
      "Desarrollo de Notas Técnicas de Precisión (NTP).",
      "Ajustadores de riesgo por severidad y complejidad (Case-mix oncológico).",
      "Implementación de modelos de riesgo compartido y pago por desempeño (P4P).",
    ],
    color: "primary" as const,
  },
];

const PentaCard = ({ pillar }: { pillar: typeof pillars[number]; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group relative border-2 border-border bg-card p-5 hover:border-${pillar.color} transition-all duration-300 ${expanded ? "z-50" : "z-10"}`}
    >
      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-${pillar.color}`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-${pillar.color}`} />

      <div className="flex items-center gap-3 mb-3">
        <div className={`inline-flex p-2 bg-${pillar.color}/10`}>
          <pillar.icon className={`w-4 h-4 text-${pillar.color}`} />
        </div>
        <span className={`font-mono text-xs font-bold text-${pillar.color}`}>{pillar.number}</span>
      </div>

      <h3 className="text-sm font-bold mb-1 text-foreground leading-tight">{pillar.title}</h3>
      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground block mb-2">
        {pillar.subtitle}
      </span>
      <p className="text-[11px] text-muted-foreground leading-relaxed mb-2">{pillar.description}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className={`flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-${pillar.color} hover:opacity-80 transition-opacity`}
      >
        Puntos clave
        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden mt-2 space-y-1.5"
          >
            {pillar.points.map((point, i) => (
              <li key={i} className="text-[10px] text-muted-foreground leading-relaxed pl-3 border-l border-border">
                {point}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-${pillar.color}/5`} />
    </div>
  );
};

const PentaSection = () => {
  return (
    <section id="ecosistema" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-neon-cyan block mb-4">
            Modelo de Optimización
          </span>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl md:text-6xl font-bold">
              Ecosistema <span className="text-gradient-bio">PENTA</span>
            </h2>
            <img src={logoPenta} alt="Logo Penta" className="h-16 md:h-20 w-auto" />
          </div>
          <div className="glow-line max-w-xs mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl">
            Cinco pilares integrados que conforman la infraestructura completa
            para la transformación digital del sector salud.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === 3 ? "lg:col-start-1 lg:col-end-2 lg:justify-self-center lg:w-full lg:max-w-sm" : index === 4 ? "md:col-span-2 lg:col-span-1 lg:col-start-2 lg:col-end-3 lg:justify-self-center lg:w-full lg:max-w-sm" : ""}
            >
              <PentaCard pillar={pillar} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PentaSection;
