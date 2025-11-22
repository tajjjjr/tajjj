import React, { useEffect, useState, useMemo } from "react";

interface Particle {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export const BackgroundEffects: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const particleCount = 80;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1, // 1px to 4px
        duration: Math.random() * 3 + 3, // 3s to 6s
        delay: Math.random() * 5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    setParticles(newParticles);
  }, []);

  const particlesRender = useMemo(() => {
    return particles.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full animate-twinkle"
        style={{
          top: `${p.top}%`,
          left: `${p.left}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          backgroundColor: Math.random() > 0.7 ? "#CFFF24" : "#FFD700", // Mix of accent green and gold
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          opacity: p.opacity,
          boxShadow: `0 0 ${p.size * 2}px ${
            Math.random() > 0.7 ? "#CFFF24" : "#FFD700"
          }`,
        }}
      />
    ));
  }, [particles]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main Top Light Source (The "Source") */}
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(207, 255, 36, 0.4) 0%, rgba(207, 255, 36, 0.05) 50%, transparent 70%)",
        }}
      />

      {/* The Beams (Conical Gradients) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 animate-beam">
        {/* Outer wide beam */}
        <div
          className="w-full h-[150%] absolute top-[-30%]"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 160deg, rgba(207, 255, 36, 0.2) 180deg, transparent 200deg)",
            filter: "blur(60px)",
          }}
        />
        {/* Inner core beam (brighter/white) */}
        <div
          className="w-full h-[120%] absolute top-[-20%]"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 172deg, rgba(255, 255, 255, 0.15) 180deg, transparent 188deg)",
            filter: "blur(30px)",
          }}
        />
      </div>

      {/* Ambient Glow for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />

      {/* Particles Container */}
      <div className="absolute inset-0 z-10">{particlesRender}</div>
    </div>
  );
};
