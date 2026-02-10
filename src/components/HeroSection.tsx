import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// DNA Helix + Neural Network background canvas
const DNANeuralBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const W = () => canvas.offsetWidth;
    const H = () => canvas.offsetHeight;

    // Neural network nodes
    const nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    for (let i = 0; i < 60; i++) {
      nodes.push({
        x: Math.random() * 1200,
        y: Math.random() * 900,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      const w = W();
      const h = H();
      ctx.clearRect(0, 0, w, h);
      time += 0.008;

      // --- Neural network connections ---
      ctx.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.12;
            ctx.strokeStyle = `hsla(185, 80%, 55%, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // --- Neural nodes ---
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "hsla(185, 80%, 55%, 0.15)";
        ctx.fill();
      }

      // --- DNA Double Helix ---
      const helixCount = 2;
      const centerXPositions = [w * 0.18, w * 0.82];
      
      for (let hx = 0; hx < helixCount; hx++) {
        const cx = centerXPositions[hx];
        const amplitude = 40;
        const frequency = 0.012;
        const verticalStep = 4;
        const phaseOffset = hx * Math.PI * 0.5;

        // Draw two strands
        for (let strand = 0; strand < 2; strand++) {
          const strandPhase = strand * Math.PI;
          ctx.beginPath();
          ctx.strokeStyle = strand === 0
            ? "hsla(185, 80%, 55%, 0.12)"
            : "hsla(320, 72%, 55%, 0.12)";
          ctx.lineWidth = 1.5;

          for (let y = -20; y < h + 20; y += verticalStep) {
            const x = cx + Math.sin(y * frequency + time * 2 + strandPhase + phaseOffset) * amplitude;
            if (y === -20) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        // Base pairs (rungs connecting the two strands)
        for (let y = 0; y < h; y += 28) {
          const x1 = cx + Math.sin(y * frequency + time * 2 + phaseOffset) * amplitude;
          const x2 = cx + Math.sin(y * frequency + time * 2 + Math.PI + phaseOffset) * amplitude;
          const progress = (Math.sin(y * 0.02 + time) + 1) * 0.5;
          const alpha = 0.04 + progress * 0.08;

          ctx.beginPath();
          ctx.strokeStyle = `hsla(185, 80%, 55%, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          ctx.stroke();

          // Small dots at connection points
          ctx.beginPath();
          ctx.arc(x1, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(185, 80%, 55%, ${alpha * 1.5})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x2, y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(320, 72%, 55%, ${alpha * 1.5})`;
          ctx.fill();
        }
      }

      // --- Floating data particles ---
      for (let i = 0; i < 8; i++) {
        const px = (w * 0.1) + (i * w * 0.1) + Math.sin(time * 1.5 + i * 2) * 30;
        const py = (h * 0.3) + Math.cos(time * 1.2 + i * 1.7) * (h * 0.3);
        const size = 1 + Math.sin(time + i) * 0.5;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0
          ? "hsla(185, 80%, 55%, 0.2)"
          : "hsla(320, 72%, 55%, 0.15)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.7 }}
    />
  );
};

// Decision System SVG overlay
const DecisionSystemVisual = () => {
  const [activeNode, setActiveNode] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setActiveNode((p) => (p + 1) % 5), 2500);
    return () => clearInterval(interval);
  }, []);

  const nodes = [
    { x: 200, y: 80, label: "CONTEXTO", color: "cyan" },
    { x: 80, y: 180, label: "DATOS", color: "cyan" },
    { x: 320, y: 180, label: "MODELO", color: "magenta" },
    { x: 140, y: 290, label: "DECISIÓN", color: "magenta" },
    { x: 260, y: 290, label: "VALIDACIÓN", color: "cyan" },
  ];

  const connections = [
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], [1, 2],
  ];

  return (
    <svg viewBox="0 0 400 360" className="w-full max-w-sm mx-auto">
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(185 80% 55% / 0.03)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="400" height="360" fill="url(#grid)" />

      {connections.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y}
          x2={nodes[b].x} y2={nodes[b].y}
          stroke="hsl(185 80% 55% / 0.12)"
          strokeWidth={1}
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: 1,
            opacity: activeNode === a || activeNode === b ? [0.12, 0.35, 0.12] : 0.12,
          }}
          transition={{
            pathLength: { delay: 0.3 + i * 0.1, duration: 0.8 },
            opacity: { duration: 2, repeat: Infinity },
          }}
        />
      ))}

      {nodes.map((n, i) => {
        const isActive = activeNode === i;
        const fill = n.color === "cyan" ? "hsl(185 80% 55%)" : "hsl(320 72% 55%)";
        const glow = n.color === "cyan" ? "hsl(185 80% 55% / 0.3)" : "hsl(320 72% 55% / 0.3)";
        return (
          <motion.g key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 + i * 0.15 }}>
            <motion.circle cx={n.x} cy={n.y} r={isActive ? 26 : 18} fill="none" stroke={glow} strokeWidth={isActive ? 1.5 : 0.8}
              animate={{ r: isActive ? [26, 32, 26] : [18, 22, 18], opacity: isActive ? [0.5, 0.15, 0.5] : [0.2, 0.08, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <circle cx={n.x} cy={n.y} r={isActive ? 5 : 3} fill={fill} />
            <text x={n.x} y={n.y + (isActive ? 42 : 32)} textAnchor="middle" fill="hsl(0 0% 50%)" fontSize={isActive ? 10 : 8}
              fontFamily="'JetBrains Mono', monospace" letterSpacing="0.05em">{n.label}</text>
          </motion.g>
        );
      })}

      <motion.text x={200} y={350} textAnchor="middle" fill="hsl(185 80% 55% / 0.25)" fontSize={7}
        fontFamily="'JetBrains Mono', monospace" letterSpacing="0.2em"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
        SISTEMA DE DECISIÓN ACTIVO
      </motion.text>
    </svg>
  );
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* DNA + Neural Network animated background */}
      <DNANeuralBackground />

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

      {/* Glow orbs */}
      <motion.div
        className="absolute top-1/3 left-1/6 w-[500px] h-[500px] rounded-full blur-[140px]"
        style={{ background: "hsl(185 80% 55% / 0.05)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] rounded-full blur-[140px]"
        style={{ background: "hsl(320 72% 55% / 0.05)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
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

          {/* Right: Decision System */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <DecisionSystemVisual />
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
