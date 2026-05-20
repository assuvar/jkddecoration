import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Sparkles from './Sparkles';

const InstagramIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: InstagramIcon, href: "https://www.instagram.com/jk.orchid/", label: "Instagram" },
    { icon: Phone, href: "tel:+916381491400", label: "Phone" },
    { icon: Mail, href: "mailto:Jkorchidevents@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 border-t border-gold/15 relative overflow-hidden">
      {/* Background Sparkles */}
      <Sparkles count={20} />

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 select-none">
        
        {/* Brand Name with Gold Glow */}
        <a href="#home" className="flex flex-col items-center group mb-10">
          <span className="font-cinzel text-2xl font-bold tracking-[0.2em] text-white group-hover:text-gold group-hover:gold-text-glow transition-all duration-300">
            JK ORCHID
          </span>
          <span className="font-cinzel text-[10px] tracking-[0.4em] text-gold uppercase mt-1">
            Events
          </span>
        </a>

        {/* Quick Links with Hover Glow */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
          {quickLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-widest text-white/60 hover:text-gold hover:gold-text-glow transition-all duration-300 font-semibold"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Icons with Active Ring Glows */}
        <div className="flex items-center space-x-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 p-3 hover:border-gold hover:text-gold text-white/70 hover:scale-110 hover:shadow-[0_0_15px_rgba(212,175,55,0.45)] transition-all duration-300 rounded-none bg-black/60"
                aria-label={social.label}
              >
                <Icon className="w-4.5 h-4.5" />
              </a>
            );
          })}
        </div>

        {/* Thin Gold flourish line */}
        <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-gold to-transparent mb-8" />

        {/* Copyright Text */}
        <p className="text-[10px] sm:text-xs tracking-widest text-white/40 uppercase text-center font-light">
          © 2026 JK Orchid Events. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
