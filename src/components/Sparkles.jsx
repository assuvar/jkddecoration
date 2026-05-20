import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Sparkles({ count = 15 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate particles with randomized coordinates and timings
    const newParticles = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 3.5 + 2; // size between 2px and 5.5px
      return {
        id: i,
        x: Math.random() * 100, // percentage left
        y: Math.random() * 100, // percentage top
        size,
        duration: Math.random() * 5 + 5, // loop speed (5s - 10s)
        delay: Math.random() * 4, // delay start to prevent grouping
        driftX: Math.random() * 40 - 20, // fixed drift sideways per particle
        driftY: -(Math.random() * 80 + 40), // fixed drift upwards per particle
      };
    });
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-gold via-gold-light to-gold-dark"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            filter: `drop-shadow(0 0 ${p.size * 1.5}px rgba(212, 175, 55, 0.95))`,
          }}
          animate={{
            y: [0, p.driftY, 0],
            x: [0, p.driftX, 0],
            opacity: [0.1, 0.85, 0.1],
            scale: [0.7, 1.4, 0.7],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
