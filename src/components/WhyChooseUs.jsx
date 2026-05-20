import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Shield, Clock, Tag, Award, Heart } from 'lucide-react';
import Sparkles from './Sparkles';

const reasons = [
  {
    icon: Palette,
    title: "Customized Themes",
    description: "Every setup is tailored to reflect your unique style. We design bespoke event layouts, customized mockups, and tailored themes."
  },
  {
    icon: Shield,
    title: "Premium Materials",
    description: "We use only the finest fabrics, pristine metallic structures, real crystal ornaments, and freshly selected premium flowers."
  },
  {
    icon: Clock,
    title: "On-Time Setup",
    description: "Punctuality is our core promise. Our professional team executes setups swiftly, finishing hours before the guests arrive."
  },
  {
    icon: Tag,
    title: "Affordable Packages",
    description: "Get unmatched luxury without compromise. We tailor packages to your budget, delivering grand visuals at fair rates."
  },
  {
    icon: Award,
    title: "Professional Team",
    description: "From design artists to expert carpenters and florists, our skilled in-house squad manages the entire logistics seamlessly."
  },
  {
    icon: Heart,
    title: "100% Satisfaction",
    description: "We focus on the tiniest details. Your smiles and your guests' awe are our ultimate reward and source of pride."
  }
];

export default function WhyChooseUs() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="why-choose-us" className="relative bg-black py-24 sm:py-32 border-t border-gold/15 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

      {/* Floating Sparkles System */}
      <Sparkles count={20} />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading with Scroll Trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold uppercase block mb-3 font-medium">Why JK Orchid Events</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider font-cinzel text-white mb-6">
            Crafting Perfection in <span className="text-gold gold-text-glow">Every Detail</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed">
            We merge creative vision with immaculate execution to create breathtaking, memorable atmospheres for your celebration.
          </p>
        </motion.div>

        {/* Reasons Grid with Stagger Reveal */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                variants={cardVariants}
                key={index}
                className="group relative p-8 bg-black/85 border border-gold/15 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-gold hover:shadow-[0_10px_30px_rgba(212,175,55,0.25)] flex flex-col items-center text-center shadow-[0_5px_15px_rgba(0,0,0,0.8)]"
              >
                {/* Gold glow top accent line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon wrapper with glow drop-shadow */}
                <div 
                  className="border border-gold/25 p-4 mb-6 transition-all duration-500 group-hover:bg-gold group-hover:border-gold group-hover:text-black text-gold shadow-[0_0_10px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                >
                  <Icon className="w-6 h-6 transition-transform duration-500 group-hover:rotate-6" />
                </div>

                <h3 className="text-lg font-bold tracking-wider font-cinzel text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
