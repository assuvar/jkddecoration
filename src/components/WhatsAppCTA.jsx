import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Sparkles from './Sparkles';

export default function WhatsAppCTA() {
  const whatsappUrl = "https://wa.me/916381491400?text=Hi%20JK%20Orchid%20Events,%20I%20would%20like%20to%20book%20a%20decoration%20service.";

  return (
    <section className="relative bg-black py-20 px-6 border-t border-gold/15 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative border border-gold p-8 sm:p-12 md:p-16 text-center overflow-hidden bg-black/90 gold-border-glow-strong shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
        >
          {/* Faint sparkles layer */}
          <Sparkles count={25} />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center select-none">
            {/* Flourish */}
            <div className="w-14 h-[1px] bg-gold mb-6" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider font-cinzel text-white mb-4">
              Let's Plan Your <span className="text-gold gold-text-glow">Perfect Celebration</span>
            </h2>
            
            <p className="text-xs sm:text-sm text-white/80 max-w-xl font-light tracking-wide mb-10 leading-relaxed uppercase">
              Have a custom vision in mind? Connect with us directly on WhatsApp to discuss theme curation, receive custom pricing, and reserve dates.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gold text-black border border-gold hover:border-gold-light px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-[1.03] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] shine-sweep"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
