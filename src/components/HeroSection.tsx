import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Animated network node for the decision system visual
const DecisionNode = ({
  x,
  y,
  label,
  delay,
  active,
  color = "cyan",
}: {
  x: number;
  y: number;
  label: string;
  delay: number;
  active: boolean;
  color?: "cyan" | "magenta";
}) => {
  const fill = color === "cyan" ? "hsl(185 80% 55%)" : "hsl(320 72% 55%)";
  const glow = color === "cyan" ? "hsl(185 80% 55% / 0.4)" : "hsl(320 72% 55% / 0.4)";

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
    >
      {/* Glow ring */}
      <motion.circle
        cx={x}
        cy={y}
        r={active ? 28 : 20}
        fill="none"
        stroke={glow}
        strokeWidth={active ? 2 : 1}
        animate={{
          r: active ? [28, 34, 28] : [20, 24, 20],
          opacity: active ? [0.6, 0.2, 0.6] : [0.3, 0.1, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Core */}
      <circle cx={x} cy={y} r={active ? 6 : 4} fill={fill} />
      {/* Label */}
      <text
        x={x}
        y={y + (active ? 46 : 36)}
        textAnchor="middle"
        fill="hsl(0 0% 55%)"
        fontSize={active ? 11 : 9}
        fontFamily="'JetBrains Mono', monospace"
        letterSpacing="0.05em"
      >
        {label}
      </text>
    </motion.g>
  );
};

// Animated connection line
const ConnectionLine = ({
  x1,
  y1,
  x2,
  y2,
  delay,
  pulse,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  pulse?: boolean;
}) => (
  <motion.line
    x1={x1}
    y1={y1}
    x2={x2}
    y2={y2}
    stroke="hsl(185 80% 55% / 0.15)"
    strokeWidth={1}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{
      pathLength: 1,
      opacity: pulse ? [0.15, 0.4, 0.15] : 0.15,
    }}
    transition={{
      pathLength: { delay, duration: 0.8 },
      opacity: pulse
        ? { delay: delay + 0.8, duration: 2, repeat: Infinity }
        : { delay, duration: 0.4 },
    }}
  />
);

const DecisionSystemVisual = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { x: 200, y: 80, label: "CONTEXTO", color: "cyan" as const },
    { x: 80, y: 180, label: "DATOS", color: "cyan" as const },
    { x: 320, y: 180, label: "MODELO", color: "magenta" as const },
    { x: 140, y: 300, label: "DECISIÓN", color: "magenta" as const },
    { x: 260, y: 300, label: "VALIDACIÓN", color: "cyan" as const },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 3, to: 4 },
    { from: 1, to: 2 },
  ];

  return (
    <svg viewBox="0 0 400 380" className="w-full max-w-md mx-auto opacity-80">
      {/* Grid background */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(185 80% 55% / 0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="380" fill="url(#grid)" />

      {/* Connections */}
      {connections.map((c, i) => (
        <ConnectionLine
          key={i}
          x1={nodes[c.from].x}
          y1={nodes[c.from].y}
          x2={nodes[c.to].x}
          y2={nodes[c.to].y}
          delay={0.3 + i * 0.15}
          pulse={activeNode === c.from || activeNode === c.to}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <DecisionNode
          key={i}
          {...node}
          delay={0.5 + i * 0.2}
          active={activeNode === i}
        />
      ))}

      {/* Center label */}
      <motion.text
        x={200}
        y={370}
        textAnchor="middle"
        fill="hsl(185 80% 55% / 0.3)"
        fontSize={8}
        fontFamily="'JetBrains Mono', monospace"
        letterSpacing="0.2em"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        SISTEMA DE DECISIÓN ACTIVO
      </motion.text>
    </svg>
  );
};

// Contrasting static diagnosis visual
const StaticDiagnostic = () => (
  <div className="relative opacity-30 max-w-[200px] mx-auto">
    <div className="space-y-2">
      {["Diagnóstico", "Informe", "Recomendación", "Factura"].map((item, i) => (
        <div
          key={i}
          className="h-6 border border-border/30 rounded px-3 flex items-center text-[10px] font-mono text-muted-foreground/50"
        >
          {item}
        </div>
      ))}
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-xs font-mono text-muted-foreground/30 bg-background px-2 rotate-[-8deg]">
        CONSULTORÍA ESTÁTICA
      </span>
    </div>
  </div>
);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(185 80% 55% / 0.03) 1px, transparent 1px),
              linear-gradient(90deg, hsl(185 80% 55% / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/3 left-1/6 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{ background: "hsl(185 80% 55% / 0.04)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full blur-[120px]"
        style={{ background: "hsl(320 72% 55% / 0.04)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary font-mono mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-primary" />
                Bio-Health Tech
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
                <span className="text-foreground">De la inteligencia</span>
                <br />
                <span className="text-foreground">artesanal a la</span>
                <br />
                <span className="gradient-text">inteligencia</span>
                <br />
                <span className="gradient-text">sistematizada</span>
              </h1>

              <p className="text-sm md:text-base text-muted-foreground max-w-md leading-relaxed mb-8 font-light">
                Arquitectura de Decisiones en Salud soportada por IA,
                modelos de optimización y desarrollo biodigital
                para el contexto latinoamericano.
              </p>

              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector("#manifiesto")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-none hover:shadow-[0_0_30px_hsl(185_80%_55%/0.3)] transition-shadow"
                >
                  EXPLORAR ARQUITECTURA
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-6 py-3 border border-border text-muted-foreground text-sm rounded-none hover:border-primary/50 hover:text-primary transition-all"
                >
                  CONTACTO
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right: Interactive Decision System vs Static Diagnosis */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <DecisionSystemVisual />

              {/* VS indicator */}
              <div className="mt-6 flex items-center gap-4 justify-center">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.3em]">VS</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>

              <div className="mt-4">
                <StaticDiagnostic />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
