import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';
import Sparkles from './Sparkles';
import { galleryData } from '../data/gallery';

const serviceEvents = [
  { text: "Book your Birthday", category: "Birthdays" },
  { text: "Book your Baby Shower", category: "Baby Shower" },
  { text: "Book your Wedding", category: "Mugurtham" },
  { text: "Book your Reception", category: "Reception" },
  { text: "Book your Haldi", category: "Haldi" },
  { text: "Book your Naming Ceremony", category: "Naming Ceremony" },
  { text: "Book your Engagement", category: "Engagement" },
  { text: "Book your Surprise Party", category: "Surprise Parties" }
];

export default function Services() {
  // Pre-calculate an image for each event type from galleryData
  const marqueeItems = serviceEvents.map(event => {
    const matchingImage = galleryData.find(img => img.category === event.category);
    return {
      ...event,
      image: matchingImage ? matchingImage.image : '/assets/hero_1.png'
    };
  });

  return (
    <section id="services" className="relative bg-black py-20 sm:py-24 border-t border-gold/15 overflow-hidden flex flex-col justify-center">
      <Sparkles count={25} />
      
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="font-cinzel text-xs tracking-[0.4em] text-gold uppercase block mb-3 font-medium">Interactive Experience</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider font-cinzel text-white mb-6">
          Bespoke Luxury <span className="text-gold gold-text-glow">Event Decor</span>
        </h2>
        <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />
        <p className="text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed">
          Hover over our interactive catalog to view snippets of our masterpieces and inquire instantly.
        </p>
      </div>

      {/* Infinite Scrolling Interactive Marquee */}
      <div className="relative flex overflow-x-hidden w-full group py-12 bg-black/50 border-y border-gold/10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 group-hover:[animation-play-state:paused]">
          {/* Duplicate items to create a seamless infinite loop */}
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => {
            const whatsappLink = `https://wa.me/916381491400?text=${encodeURIComponent(`Hi JK Orchid Events, I would like to ${item.text.toLowerCase()} decoration service.`)}`;
            return (
              <div key={index} className="flex items-center gap-16 relative">
                
                {/* Visual Image Bubble */}
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-gold/30 hover:border-gold hover:scale-110 transition-all duration-500 flex-shrink-0 shadow-[0_0_20px_rgba(212,175,55,0.15)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">
                  <img src={item.image} alt={item.text} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-300" />
                </div>

                {/* Event Text & Button */}
                <div className="flex flex-col items-start gap-4">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-cinzel font-bold text-transparent text-stroke-gold hover:text-gold hover:text-stroke-0 transition-all duration-500 cursor-default select-none uppercase tracking-wider">
                    {item.text}
                  </h3>
                  
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-2 bg-gold text-black px-6 py-2.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:bg-gold-light hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Inquire Now</span>
                  </a>
                </div>
                
                {/* Separator Accent */}
                <span className="text-gold/40 text-3xl font-light pl-8 select-none">✧</span>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Global CTA */}
      <div className="flex justify-center mt-20 relative z-10">
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('gallery');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative flex items-center justify-center space-x-3 bg-transparent border border-gold/40 text-gold px-10 py-4.5 rounded-full text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-gold/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <span>Explore Our Designs</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
          width: max-content;
        }
        .text-stroke-gold {
          -webkit-text-stroke: 1.5px rgba(212, 175, 55, 0.65);
          color: transparent;
        }
        .text-stroke-0 {
          -webkit-text-stroke: 0px transparent;
        }
      `}} />
    </section>
  );
}
