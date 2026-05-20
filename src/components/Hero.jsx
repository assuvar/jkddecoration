import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ChevronDown } from 'lucide-react';
import Sparkles from './Sparkles';

const collageCards = [
  {
    src: '/assets/gallery_wedding.png',
    alt: 'Wedding Decoration',
    className: 'left-[4%] top-[14%] w-[160px] md:w-[190px] h-[220px] md:h-[260px]',
    yOffset: [-12, 12],
    duration: 6,
    delay: 0
  },
  {
    src: '/assets/gallery_reception.png',
    alt: 'Reception Decor',
    className: 'left-[6%] bottom-[12%] w-[170px] md:w-[200px] h-[230px] md:h-[270px]',
    yOffset: [10, -10],
    duration: 7,
    delay: 0.5
  },
  {
    src: '/assets/hero_1.png',
    alt: 'Floral Detailing',
    className: 'left-[26%] bottom-[6%] w-[130px] md:w-[150px] h-[170px] md:h-[200px]',
    yOffset: [-8, 8],
    duration: 5,
    delay: 1,
    isUnderlay: true
  },
  {
    src: '/assets/gallery_birthday.png',
    alt: 'Theme Decoration',
    className: 'right-[5%] top-[14%] w-[160px] md:w-[195px] h-[210px] md:h-[265px]',
    yOffset: [12, -12],
    duration: 6.5,
    delay: 0.2
  },
  {
    src: '/assets/gallery_babyshower.png',
    alt: 'Baby Shower Decor',
    className: 'right-[6%] bottom-[14%] w-[200px] md:w-[240px] h-[135px] md:h-[165px]',
    yOffset: [-10, 10],
    duration: 7.5,
    delay: 0.8
  }
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-black py-24">
      {/* Background radial gradient glow */}
      <div className="absolute inset-0 z-0 bg-radial-[circle_at_center,rgba(212,175,55,0.07)_0%,rgba(0,0,0,1)_70%]" />
      
      {/* Soft color highlights around screen edges */}
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gold/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-gold-dark/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Floating Sparkles System */}
      <Sparkles count={45} />

      {/* Asymmetric Collage Layer (Background behind text) */}
      <div className="absolute inset-0 z-10 pointer-events-none select-none">
        {collageCards.map((card, index) => {
          const baseOpacity = card.isUnderlay ? 0.25 : 0.45;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: card.delay }}
              className={`absolute ${card.className} hidden lg:block pointer-events-auto`}
            >
              <motion.div
                animate={{ y: card.yOffset }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: card.duration,
                  ease: "easeInOut",
                  delay: card.delay
                }}
                whileHover={{
                  scale: 1.05,
                  opacity: 1,
                  boxShadow: '0 15px 40px rgba(212, 175, 55, 0.35)',
                }}
                style={{ opacity: baseOpacity }}
                className="w-full h-full rounded-3xl overflow-hidden border border-gold/15 hover:border-gold/60 transition-all duration-500 cursor-pointer shadow-[0_5px_20px_rgba(0,0,0,0.6)]"
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Hero Content (Foreground) */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center select-none flex flex-col items-center pointer-events-auto mt-6">
        
        {/* Brand Tagline with Gold Glow Accents */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-bold tracking-tight text-white font-cinzel leading-[1.1] md:leading-[1.05] mb-6 flex flex-col items-center"
        >
          <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-light tracking-[0.2em] text-white/95 uppercase mb-3 sm:mb-4">
            Turning Celebrations
          </span>
          <span className="block text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-normal bg-gradient-to-r from-gold via-gold-light to-gold-dark bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(212,175,55,0.18)]">
            Into Timeless Moments
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="text-xs sm:text-sm md:text-base text-white/70 max-w-2xl font-light tracking-widest leading-relaxed mb-10 uppercase font-sans"
        >
          Luxury decorations for weddings, receptions, birthdays, baby showers, and custom themed celebrations. Crafted with passion, styled to perfection.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <a
            href="https://wa.me/916381491400?text=Hi%20JK%20Orchid%20Events,%20I%20would%20like%20to%20book%20a%20decoration%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center space-x-3 bg-gold text-black px-10 py-4.5 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:scale-105 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:bg-gold-light"
          >
            <MessageSquare className="w-4.5 h-4.5 fill-current text-black group-hover:scale-110 transition-transform duration-300" />
            <span>Book via WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pointer-events-auto">
        <a href="#services" className="text-white/40 hover:text-gold transition-colors duration-300 flex flex-col items-center gap-1 group">
          <span className="text-[9px] uppercase tracking-[0.35em] font-light">Explore</span>
          <ChevronDown className="w-4.5 h-4.5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
}
