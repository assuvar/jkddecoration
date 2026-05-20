import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background color shift threshold
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const sections = ['home', 'services', 'gallery', 'why-choose-us', 'testimonials', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the header
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger scroll check on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Why Us', href: '#why-choose-us', id: 'why-choose-us' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 border-b border-gold/15 py-4 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <a href="#home" className="flex items-center space-x-3 group select-none">
          <img 
            src="/assets/logo.png" 
            alt="JK Orchid Logo" 
            className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-widest text-white group-hover:text-gold hover:gold-text-glow transition-all duration-300">
              JK ORCHID
            </span>
            <span className="font-cinzel text-[8px] sm:text-[9px] tracking-[0.3em] text-gold uppercase mt-0.5 group-hover:gold-text-glow transition-all">
              Events
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-xs uppercase tracking-widest transition-all duration-300 font-medium pb-1.5 ${
                  isActive ? 'text-gold gold-text-glow' : 'text-white/70 hover:text-gold'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="navUnderline"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold shadow-[0_0_8px_rgba(212,175,55,0.7)]"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </a>
            );
          })}
          <a
            href="https://wa.me/916381491400?text=Hi%20JK%20Orchid%20Events,%20I%20would%20like%20to%20book%20a%20decoration%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 border border-gold px-4 py-2 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300 shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:shadow-[0_0_18px_rgba(212,175,55,0.4)] font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Inquire</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[64px] w-full bg-black/98 border-t border-gold/10 z-40 md:hidden shadow-2xl"
          >
            <div className="flex flex-col items-center justify-center space-y-8 py-16">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg uppercase tracking-widest transition-all duration-300 font-cinzel ${
                    activeSection === link.id ? 'text-gold gold-text-glow' : 'text-white hover:text-gold'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/916381491400?text=Hi%20JK%20Orchid%20Events,%20I%20would%20like%20to%20book%20a%20decoration%20service."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 border border-gold px-8 py-3 text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300 font-semibold"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
