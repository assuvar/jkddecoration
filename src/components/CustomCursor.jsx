import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [rawPos, setRawPos] = useState({ x: -100, y: -100 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring configuration for the outer ring lag
  const springConfig = { stiffness: 180, damping: 22 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on devices that support hover (fine pointer)
    const isDesktop = window.matchMedia("(pointer: fine)").matches;
    if (!isDesktop) return;

    setEnabled(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px outer ring
      cursorY.set(e.clientY - 16);
      setRawPos({ x: e.clientX - 3, y: e.clientY - 3 }); // Center the 6px inner dot
    };

    window.addEventListener('mousemove', moveCursor);

    // Add pointer hover states to clickable tags
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('cursor-pointer');

      setHovered(!!isClickable);
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold pointer-events-none z-[9998] hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          borderColor: hovered ? '#FFFFFF' : '#D4AF37',
          boxShadow: hovered 
            ? '0 0 20px rgba(212, 175, 55, 0.7)' 
            : '0 0 10px rgba(212, 175, 55, 0.3)',
        }}
        animate={{
          scale: hovered ? 1.6 : 1,
          backgroundColor: hovered ? 'rgba(212, 175, 55, 0.15)' : 'rgba(0, 0, 0, 0)',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 26 }}
      />
      {/* Inner Immediate Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-gold rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
        style={{
          transform: `translate3d(${rawPos.x}px, ${rawPos.y}px, 0)`,
        }}
      />
    </>
  );
}
