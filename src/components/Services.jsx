import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import { ArrowRight } from 'lucide-react';
import Sparkles from './Sparkles';

// Custom gold SVG icons matching requirements
const ServiceIcon = ({ type }) => {
  switch (type) {
    case 'balloons':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5c0 3.2 2.5 4.5 4.5 7.5 2-3 4.5-4.3 4.5-7.5A4.5 4.5 0 0 0 12 2Z" />
          <path d="M9 13.5c.3.5.7 1 1 1.5M15 13.5c-.3.5-.7 1-1 1.5" />
          <path d="M12 14v4M12 22s-2-1.5-2-3M12 22s2-1.5 2-3" />
        </svg>
      );
    case 'stroller':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <circle cx="8" cy="20" r="2" />
          <circle cx="16" cy="20" r="2" />
          <path d="M12 3a7 7 0 0 0-7 7v4h14v-4a7 7 0 0 0-7-7Z" />
          <path d="M5 14H3v-4" />
          <path d="M19 14h2M12 3v11" />
          <path d="M6 20h12" />
        </svg>
      );
    case 'floral-arch':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <path d="M4 22V10a8 8 0 0 1 16 0v12" />
          <path d="M7 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          <path d="M9.5 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM14.5 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
        </svg>
      );
    case 'stage-lights':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <path d="M12 2v3M6 4l2 2M18 4l-2 2M5 12h3M19 12h-3" />
          <path d="M9 16a3 3 0 0 1 6 0" />
          <path d="M12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
          <path d="M7 21h10" />
        </svg>
      );
    case 'rings':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
          <path d="M12 7a2 2 0 0 1 2-2M12 17a2 2 0 0 1-2 2" />
        </svg>
      );
    case 'heart':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'gift':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <rect x="3" y="8" width="18" height="14" rx="2" />
          <path d="M12 5V3M12 5c-1-1.5-3-1.5-4 0M12 5c1-1.5 3-1.5 4 0M3 8h18" />
          <path d="M12 8v14" />
        </svg>
      );
    case 'briefcase':
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      );
    default:
      return (
        <svg className="w-10 h-10 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.75))' }}>
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" />
        </svg>
      );
  }
};

export default function Services() {
  
  // Animation configurations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="relative bg-black py-24 sm:py-32 border-t border-gold/15 overflow-hidden">
      {/* Cinematic background glow filters */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Floating Sparkles System */}
      <Sparkles count={25} />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading with scroll trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold uppercase block mb-3 font-medium">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider font-cinzel text-white mb-6">
            Bespoke Luxury <span className="text-gold gold-text-glow">Event Decor</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed">
            Every celebration deserves a magical touch. Explore our curated range of high-end event execution services, styled to suit your premium taste.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const queryText = encodeURIComponent(`Hi JK Orchid Events, I would like to inquire about your "${service.title}" service.`);
            const whatsappLink = `https://wa.me/916381491400?text=${queryText}`;

            return (
              <motion.div
                variants={cardVariants}
                key={service.id}
                className="group relative bg-black/90 border border-gold/15 overflow-hidden flex flex-col justify-between transition-all duration-500 shadow-[0_5px_15px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.3)] hover:-translate-y-2 hover:border-gold/50"
              >
                {/* Image background with zoom and shine overlay */}
                <div className="relative h-64 overflow-hidden border-b border-gold/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Floating Icon accent */}
                  <div className="absolute top-4 right-4 z-20 bg-black/85 border border-gold/25 p-2.5 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <ServiceIcon type={service.accent} />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div className="mb-6">
                    <span className="text-[9px] tracking-[0.3em] uppercase text-gold block mb-2 font-semibold">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold tracking-wider text-white font-cinzel mb-3 group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[11px] italic text-gold-light/90 mb-4 font-light leading-relaxed">
                      "{service.tagline}"
                    </p>
                    <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 border border-gold/30 text-[10px] uppercase tracking-widest text-white flex items-center justify-center space-x-2 group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300 font-bold shine-sweep"
                  >
                    <span>Inquire via WhatsApp</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
