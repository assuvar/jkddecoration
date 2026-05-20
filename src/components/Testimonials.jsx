import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonialsData } from '../data/testimonials';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Sparkles from './Sparkles';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const current = testimonialsData[activeIndex];

  return (
    <section id="testimonials" className="relative bg-black py-24 sm:py-32 border-t border-gold/15 overflow-hidden">
      {/* Decorative gold ambient glow filters */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gold/5 rounded-full filter blur-[160px] pointer-events-none" />

      {/* Floating Sparkles System */}
      <Sparkles count={20} />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading with scroll trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold uppercase block mb-3 font-medium">Kind Words</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider font-cinzel text-white mb-6">
            Client <span className="text-gold gold-text-glow">Testimonials</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto" />
        </motion.div>

        {/* Carousel glassmorphic card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.15 }}
          className="relative min-h-[380px] sm:min-h-[320px] bg-black/85 border border-gold/15 backdrop-blur-md px-6 sm:px-16 py-12 flex flex-col items-center justify-center shadow-[0_10px_35px_rgba(0,0,0,0.9)] hover:border-gold/30 hover:shadow-[0_12px_40px_rgba(212,175,55,0.15)] transition-all duration-500"
        >
          {/* Subtle gold gradient line on top */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:-left-6 top-1/2 -translate-y-1/2 bg-black/80 border border-gold/25 hover:border-gold hover:text-gold text-white p-3 z-20 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.15)]"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Card Body */}
          <div className="w-full max-w-2xl text-center flex flex-col items-center select-none">
            
            {/* Quote Icon with glow */}
            <Quote className="w-10 h-10 text-gold/25 mb-6" style={{ filter: 'drop-shadow(0 0 4px rgba(212,175,55,0.3))' }} />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center w-full"
              >
                {/* Rating stars with glow filter */}
                <div className="flex items-center space-x-1.5 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-gold text-gold" 
                      style={{ filter: 'drop-shadow(0 0 6px rgba(212,175,55,0.95))' }}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 font-light italic leading-relaxed tracking-wide mb-8">
                  "{current.text}"
                </p>

                {/* Client Name & Event */}
                <h4 className="text-base font-cinzel tracking-widest text-white font-bold">
                  {current.name}
                </h4>
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase mt-1">
                  {current.event}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:-right-6 top-1/2 -translate-y-1/2 bg-black/80 border border-gold/25 hover:border-gold hover:text-gold text-white p-3 z-20 transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.15)]"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Dot Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-gold w-6' : 'bg-white/20 hover:bg-gold/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
