import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/gallery';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import Sparkles from './Sparkles';

// ============================================================
// HIGH-QUALITY MULTI-COLORED DETAILED VECTOR BACKGROUND ILLUSTRATIONS
// ============================================================

const AllEventsSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    <path d="M120 440 C 160 280, 270 200, 420 120" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
    <path d="M130 380 Q 90 280 180 320 Z" fill="#2d5a27" />
    <path d="M180 320 Q 280 240 230 350 Z" fill="#2d5a27" />
    
    <g transform="translate(260, 250)">
      <path d="M0 -45 C -22 -15, -35 30, 0 15 C 35 30, 22 -15, 0 -45 Z" fill="#ffffff" />
      <path d="M-45 0 C -15 -22, 30 -35, 15 0 C 35 35, -15 22, -45 0 Z" fill="#F3E5AB" />
      <circle cx="0" cy="0" r="14" fill="#D4AF37" />
      <circle cx="0" cy="0" r="6" fill="#AA820A" />
    </g>
    
    <g transform="translate(360, 160)">
      <path d="M0 -25 C -15 -8, -25 15, 0 8 C 25 15, 15 -8, 0 -25 Z" fill="#ffffff" />
      <path d="M-25 0 C -8 -15, 15 -25, 8 0 C 15 25, -8 15, -25 0 Z" fill="#F3E5AB" />
      <circle cx="0" cy="0" r="8" fill="#D4AF37" />
    </g>

    <circle cx="160" cy="180" r="6" fill="#ff6b6b" />
    <circle cx="380" cy="300" r="5" fill="#4dabf7" />
  </svg>
);

const BirthdaySVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    {/* Balloon cluster */}
    <g transform="translate(220, 160)">
      <ellipse cx="-45" cy="-25" rx="42" ry="56" fill="url(#goldGradB)" />
      <path d="M-45 31 L-51 40 L-39 40 Z" fill="#AA820A" />
      <path d="M-45 40 Q-55 100 -10 160" stroke="#D4AF37" strokeWidth="2.5" />
    </g>
    <g transform="translate(220, 160)">
      <ellipse cx="45" cy="-35" rx="38" ry="52" fill="url(#coralGradB)" />
      <path d="M45 17 L39 26 L51 26 Z" fill="#c92a2a" />
      <path d="M45 26 Q55 90 10 160" stroke="#ff6b6b" strokeWidth="2.5" />
    </g>
    <g transform="translate(220, 160)">
      <ellipse cx="0" cy="15" rx="44" ry="58" fill="url(#blueGradB)" />
      <path d="M0 73 L-6 82 L6 82 Z" fill="#1b4b73" />
      <path d="M0 82 Q-10 140 0 190" stroke="#4dabf7" strokeWidth="2.5" />
    </g>
    
    {/* Detailed Gift Box */}
    <g transform="translate(160, 340)">
      <rect x="0" y="30" width="130" height="100" rx="4" fill="#D4AF37" />
      <rect x="53" y="30" width="24" height="100" fill="#c92a2a" />
      <rect x="-10" y="10" width="150" height="20" rx="2" fill="#AA820A" />
      <rect x="-10" y="10" width="150" height="6" fill="#e03131" />
      {/* Ribbons bow */}
      <path d="M 35 -15 Q 65 -35 65 -5 Q 65 15 35 15" fill="#c92a2a" />
      <path d="M 95 -15 Q 65 -35 65 -5 Q 65 15 95 15" fill="#c92a2a" />
      <circle cx="65" cy="-5" r="8" fill="#ff6b6b" />
    </g>
    
    {/* Floating Confetti */}
    <path d="M 110 260 L 120 270" stroke="#ff6b6b" strokeWidth="4" strokeLinecap="round" />
    <path d="M 340 220 L 355 225" stroke="#fcc419" strokeWidth="4" strokeLinecap="round" />
    <path d="M 290 320 L 300 335" stroke="#4dabf7" strokeWidth="4" strokeLinecap="round" />
    
    <defs>
      <radialGradient id="goldGradB" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#AA820A" />
      </radialGradient>
      <radialGradient id="coralGradB" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFD3D3" />
        <stop offset="40%" stopColor="#FF6B6B" />
        <stop offset="100%" stopColor="#C92A2A" />
      </radialGradient>
      <radialGradient id="blueGradB" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#D0EBFF" />
        <stop offset="40%" stopColor="#4DABF7" />
        <stop offset="100%" stopColor="#1971C2" />
      </radialGradient>
    </defs>
  </svg>
);

const BabyShowerSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    {/* Cloud Backgrounds */}
    <path d="M 80 280 C 80 250, 120 230, 160 250 C 180 230, 230 230, 250 260 C 270 250, 310 260, 300 290 C 310 310, 290 340, 260 330 L 100 330 C 80 330, 70 300, 80 280 Z" fill="#ffffff" opacity="0.6" />
    
    {/* Golden Moon */}
    <path d="M 350 100 C 290 100, 240 150, 240 210 C 240 270, 290 320, 350 320 C 380 320, 400 310, 415 295 C 360 295, 315 250, 315 210 C 315 170, 360 125, 415 125 C 400 110, 380 100, 350 100 Z" fill="#F3E5AB" />
    
    {/* Stroller */}
    <g transform="translate(170, 220)">
      <path d="M0 60 A 60 60 0 0 1 120 60 L 60 60 Z" fill="#A5D8FF" />
      <path d="M0 60 L120 60 L130 15 Z" fill="#FFD8A8" />
      <path d="M-10 30 L10 60" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
      <circle cx="-12" cy="26" r="6" fill="#AA820A" />
      <circle cx="30" cy="95" r="22" fill="#D4AF37" />
      <circle cx="30" cy="95" r="8" fill="#FFF" />
      <circle cx="90" cy="95" r="22" fill="#D4AF37" />
      <circle cx="90" cy="95" r="8" fill="#FFF" />
    </g>
    
    {/* Stars */}
    <polygon points="100,100 103,105 109,106 105,110 106,116 100,113 94,116 95,110 91,106 97,105" fill="#D4AF37" />
    <polygon points="310,140 312,144 317,145 313,149 314,154 310,152 306,154 307,149 303,145 308,144" fill="#D4AF37" />
  </svg>
);

const WeddingsSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    {/* Large Green Banana Leaves at corners/bottom */}
    <g opacity="0.95">
      <path d="M 30 490 C 60 260, 160 160, 310 90" stroke="#2d5a27" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M 30 490 Q 0 370 80 400 Z" fill="#1e3f1a" />
      <path d="M 80 400 Q 150 310 130 420 Z" fill="#2d5a27" />
      <path d="M 130 420 Q 210 340 180 440 Z" fill="#1e3f1a" />
      <path d="M 180 440 Q 250 380 220 460 Z" fill="#2d5a27" />
      
      <path d="M 470 490 C 440 260, 340 160, 190 90" stroke="#2d5a27" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M 470 490 Q 500 370 420 400 Z" fill="#1e3f1a" />
      <path d="M 420 400 Q 350 310 370 420 Z" fill="#2d5a27" />
      <path d="M 370 420 Q 290 340 320 440 Z" fill="#1e3f1a" />
    </g>
    
    {/* Golden Wedding Mandap Arch */}
    <path d="M 110 495 V 200 C 110 120, 390 120, 390 200 V 495" stroke="#D4AF37" strokeWidth="7" strokeLinecap="round" />
    <path d="M 90 495 H 130 M 370 495 H 410" stroke="#D4AF37" strokeWidth="10" />
    
    {/* Hanging Temple Bells */}
    <g transform="translate(250, 140)">
      <path d="M -20 0 L 20 0 L 16 -32 L -16 -32 Z" fill="#D4AF37" />
      <circle cx="0" cy="7" r="7" fill="#AA820A" />
      <path d="M -16 -32 C -16 -44, 16 -44, 16 -32" stroke="#D4AF37" strokeWidth="2.5" fill="none" />
    </g>
    
    <g transform="translate(170, 180)">
      <path d="M -14 0 L 14 0 L 11 -24 L -11 -24 Z" fill="#D4AF37" />
      <circle cx="0" cy="5" r="5" fill="#AA820A" />
    </g>
    
    <g transform="translate(330, 180)">
      <path d="M -14 0 L 14 0 L 11 -24 L -11 -24 Z" fill="#D4AF37" />
      <circle cx="0" cy="5" r="5" fill="#AA820A" />
    </g>
    
    {/* Traditional Marigold Garlands */}
    <g opacity="0.9">
      <line x1="140" y1="200" x2="140" y2="400" stroke="#ff922b" strokeWidth="5" strokeDasharray="12 12" />
      <line x1="360" y1="200" x2="360" y2="400" stroke="#ff922b" strokeWidth="5" strokeDasharray="12 12" />
      <line x1="200" y1="160" x2="200" y2="350" stroke="#ffffff" strokeWidth="3" strokeDasharray="8 8" />
      <line x1="300" y1="160" x2="300" y2="350" stroke="#ffffff" strokeWidth="3" strokeDasharray="8 8" />
    </g>
  </svg>
);

const ReceptionsSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    <path d="M70 480 L70 180 Q250 50 430 180 L430 480" fill="none" stroke="#AA820A" strokeWidth="5" />
    <ellipse cx="250" cy="450" rx="180" ry="35" fill="#c92a2a" />
    
    {/* Hanging Grand Chandelier */}
    <g transform="translate(250, 80)">
      <line x1="0" y1="0" x2="0" y2="70" stroke="#D4AF37" strokeWidth="3" />
      <path d="-60 70 Q0 85 60 70" fill="none" stroke="#D4AF37" strokeWidth="4" />
      <line x1="-60" y1="70" x2="-60" y2="100" stroke="#FFF" strokeWidth="2.5" />
      <line x1="-30" y1="75" x2="-30" y2="115" stroke="#FFF" strokeWidth="2.5" />
      <line x1="0" y1="78" x2="0" y2="130" stroke="#FFF" strokeWidth="2.5" />
      <line x1="30" y1="75" x2="30" y2="115" stroke="#FFF" strokeWidth="2.5" />
      <line x1="60" y1="70" x2="60" y2="100" stroke="#FFF" strokeWidth="2.5" />
      <path d="-40 105 Q0 115 40 105" fill="none" stroke="#D4AF37" strokeWidth="2" />
    </g>
    
    <g transform="translate(100, 220)">
      <circle cx="0" cy="0" r="20" fill="#ffffff" />
      <circle cx="-14" cy="-14" r="14" fill="#f1f3f5" />
      <circle cx="14" cy="-14" r="14" fill="#f1f3f5" />
      <circle cx="-14" cy="14" r="14" fill="#f1f3f5" />
      <circle cx="14" cy="14" r="14" fill="#f1f3f5" />
    </g>
    
    <g transform="translate(400, 220)">
      <circle cx="0" cy="0" r="20" fill="#ffffff" />
      <circle cx="-14" cy="-14" r="14" fill="#f1f3f5" />
      <circle cx="14" cy="-14" r="14" fill="#f1f3f5" />
      <circle cx="-14" cy="14" r="14" fill="#f1f3f5" />
      <circle cx="14" cy="14" r="14" fill="#f1f3f5" />
    </g>
  </svg>
);

const EngagementsSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    <g transform="translate(250, 260) rotate(-15)">
      <circle cx="0" cy="0" r="85" stroke="url(#silverGradE)" strokeWidth="16" fill="none" />
      <path d="-30 -82 L 30 -82 L 0 -50 Z" fill="#D4AF37" />
      <path d="M-35 -82 L-20 -120 L0 -160 L20 -120 L35 -82 Z" fill="#e7f5ff" />
      <line x1="-20" y1="-120" x2="20" y2="-120" stroke="#ffffff" strokeWidth="2" />
      <line x1="0" y1="-140" x2="0" y2="-82" stroke="#ffffff" strokeWidth="2" />
    </g>
    
    <g transform="translate(320, 320) rotate(15)">
      <circle cx="0" cy="0" r="85" stroke="url(#goldGradE)" strokeWidth="16" fill="none" />
    </g>
    
    <g transform="translate(275, 290)">
      <circle cx="0" cy="0" r="18" fill="#e03131" />
      <circle cx="-16" cy="-16" r="14" fill="#ff6b6b" />
      <circle cx="16" cy="-16" r="14" fill="#ff6b6b" />
      <circle cx="-16" cy="16" r="14" fill="#ff6b6b" />
      <circle cx="16" cy="16" r="14" fill="#ff6b6b" />
      <circle cx="0" cy="0" r="6" fill="#F3E5AB" />
    </g>
    
    <defs>
      <linearGradient id="silverGradE" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f1f3f5" />
        <stop offset="50%" stopColor="#adb5bd" />
        <stop offset="100%" stopColor="#dee2e6" />
      </linearGradient>
      <linearGradient id="goldGradE" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#AA820A" />
      </linearGradient>
    </defs>
  </svg>
);

const AnniversariesSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    <g transform="translate(170, 240)">
      <rect x="-20" y="0" width="40" height="170" rx="4" fill="#ffffff" />
      <path d="M0 0 C-15 -25, 0 -45, 0 -60 C0 -45, 15 -25, 0 0" fill="#ff922b" />
      <circle cx="0" cy="-8" r="6" fill="#ffcc00" />
    </g>
    
    <g transform="translate(330, 190)">
      <rect x="-20" y="0" width="40" height="220" rx="4" fill="#ffffff" />
      <path d="M0 0 C-15 -25, 0 -45, 0 -60 C0 -45, 15 -25, 0 0" fill="#ff922b" />
      <circle cx="0" cy="-8" r="6" fill="#ffcc00" />
    </g>
    
    <g transform="translate(250, 110) scale(1.8)">
      <path d="M0 20 C-20 0, -30 -12, -25 -30 C-20 -40, 0 -30, 0 -12 C0 -30, 20 -40, 25 -30 C30 -12, 20 0, 0 20 Z" fill="#e03131" />
    </g>
  </svg>
);

const SurprisePartiesSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    <g transform="translate(250, 320)">
      <rect x="-70" y="0" width="140" height="100" rx="5" fill="#D4AF37" />
      <rect x="-12" y="0" width="24" height="100" fill="#c92a2a" />
      <g transform="translate(70, -10) rotate(25)">
        <rect x="-75" y="-12" width="150" height="24" rx="2" fill="#AA820A" />
      </g>
      <g transform="translate(-70, -10) rotate(-25)">
        <rect x="-75" y="-12" width="150" height="24" rx="2" fill="#AA820A" />
      </g>
    </g>
    
    <g transform="translate(250, 220)" strokeWidth="4" fill="none">
      <path d="M0 -40 L0 -130" stroke="#D4AF37" strokeDasharray="10 10" />
      <path d="-30 -30 L-100 -110" stroke="#ff6b6b" strokeDasharray="10 10" />
      <path d="M30 -30 L100 -110" stroke="#4dabf7" strokeDasharray="10 10" />
    </g>
    
    <circle cx="200" cy="100" r="10" fill="#ff6b6b" />
    <circle cx="320" cy="110" r="8" fill="#4dabf7" />
  </svg>
);

const CorporateEventsSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-full" fill="none">
    <g transform="translate(150, 160)">
      <rect x="0" y="0" width="300" height="180" rx="8" fill="#1b4b73" stroke="#D4AF37" strokeWidth="6" />
      <line x1="20" y1="140" x2="280" y2="140" stroke="#4dabf7" strokeWidth="4" />
      <line x1="50" y1="40" x2="50" y2="130" stroke="#D4AF37" strokeWidth="4" />
      <line x1="150" y1="30" x2="150" y2="130" stroke="#ffffff" strokeWidth="5" />
      <line x1="250" y1="50" x2="250" y2="130" stroke="#ffffff" strokeWidth="5" />
    </g>
    
    <path d="M 60 80 L 220 340 L 160 340 Z" fill="#FFF" opacity="0.12" />
    <path d="M 440 80 L 280 340 L 340 340 Z" fill="#FFF" opacity="0.12" />
    
    <g transform="translate(250, 360)">
      <path d="M 10 0 L 50 0 L 40 100 L 20 100 Z" fill="#868e96" />
      <path d="M -5 0 L 65 0 L 58 -10 L 2 -10 Z" fill="#D4AF37" />
    </g>
  </svg>
);

// ============================================================
// BACKGROUND ACCENT PATTERNS
// ============================================================

const AccentPattern = ({ type }) => {
  switch (type) {
    case 'confetti':
      return (
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-10 w-2.5 h-2.5 bg-gold rounded-full animate-pulse" />
          <div className="absolute top-24 right-32 w-2 h-2 bg-gold rounded-full rotate-45" />
          <div className="absolute bottom-16 left-1/4 w-4 h-0.5 bg-gold rotate-12" />
          <div className="absolute bottom-32 right-1/3 w-2.5 h-2.5 bg-gold rounded-full" />
          <div className="absolute top-1/2 left-12 w-1.5 h-4 bg-gold rotate-90" />
          <div className="absolute top-16 right-16 w-3 h-0.5 bg-gold rotate-45" />
        </div>
      );
    case 'footprints':
      return (
        <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
          <div className="absolute top-16 left-28 w-12 h-12 rounded-full border border-gold/25" />
          <div className="absolute bottom-24 right-32 w-16 h-16 rounded-full border border-gold/25" />
        </div>
      );
    case 'mandap':
      return (
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden flex justify-around items-end">
          <div className="w-[1.5px] h-full bg-gradient-to-t from-gold/40 via-transparent to-transparent" />
          <div className="w-[1.5px] h-full bg-gradient-to-t from-gold/40 via-transparent to-transparent" />
          <div className="w-[1.5px] h-full bg-gradient-to-t from-gold/40 via-transparent to-transparent" />
          <div className="w-[1.5px] h-full bg-gradient-to-t from-gold/40 via-transparent to-transparent" />
        </div>
      );
    case 'chandeliers':
      return (
        <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
          <div className="absolute -top-16 left-16 w-40 h-40 border-b border-gold/25 rounded-full animate-pulse" />
          <div className="absolute -top-16 right-16 w-40 h-40 border-b border-gold/25 rounded-full animate-pulse" />
        </div>
      );
    case 'rings':
      return (
        <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
          <div className="absolute top-8 left-16 w-24 h-24 border border-gold/20 rounded-full" />
          <div className="absolute top-14 left-32 w-24 h-24 border border-gold/20 rounded-full" />
          <div className="absolute bottom-16 right-20 w-32 h-32 border border-gold/20 rounded-full" />
        </div>
      );
    case 'hearts':
      return (
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden flex justify-center items-center gap-24">
          <div className="w-6 h-6 border border-gold/25 rotate-45 animate-pulse" />
          <div className="w-10 h-10 border border-gold/25 rotate-45" />
        </div>
      );
    case 'fireworks':
      return (
        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-12 left-20 w-20 h-20 border-2 border-dashed border-gold/15 rounded-full animate-spin-slow" />
          <div className="absolute bottom-16 right-32 w-28 h-28 border-2 border-dashed border-gold/15 rounded-full animate-spin-slow" />
        </div>
      );
    case 'geometric':
    default:
      return (
        <div className="absolute inset-0 opacity-15 pointer-events-none overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.06) 1px, transparent 1px)',
            backgroundSize: '55px 55px'
          }} />
        </div>
      );
  }
};

// ============================================================
// CONFIGURATIONS MAP FOR VISUAL STORYTELLING
// ============================================================

const categoryConfigs = {
  'All Events': {
    title: "JK Orchid Masterpieces",
    subtitle: "A curation of our finest events and timeless designs.",
    icon: AllEventsSVG,
    accentPattern: "geometric"
  },
  'Mugurtham (Weddings)': {
    title: "Mugurtham Decorations",
    subtitle: "Traditional floral decors and stage setups for auspicious weddings.",
    icon: WeddingsSVG,
    accentPattern: "mandap"
  },
  'Receptions': {
    title: "Grand Reception Setups",
    subtitle: "Luxury décor panels, stage layouts, and gorgeous lighting setups.",
    icon: ReceptionsSVG,
    accentPattern: "chandeliers"
  },
  'Engagements': {
    title: "Engagement Decor",
    subtitle: "Beautiful settings and floral backdrops for your special promise.",
    icon: EngagementsSVG,
    accentPattern: "rings"
  },
  'Birthdays': {
    title: "Birthday Celebrations",
    subtitle: "Organic balloon arches, marquees, and fun birthday setups.",
    icon: BirthdaySVG,
    accentPattern: "confetti"
  },
  'Baby Shower': {
    title: "Baby Shower Magic",
    subtitle: "Adorable moon, stroller, and floral canopies for special arrivals.",
    icon: BabyShowerSVG,
    accentPattern: "footprints"
  },
  'Naming Ceremony': {
    title: "Naming Ceremony Setups",
    subtitle: "Sweet, elegant designs and setups to welcome your little ones.",
    icon: BabyShowerSVG,
    accentPattern: "footprints"
  },
  'Entrance': {
    title: "Grand Entrance Decor",
    subtitle: "Welcoming archways, floral gates, and entry pathway styling.",
    icon: AllEventsSVG,
    accentPattern: "geometric"
  },
  'Haldi & Mehendi': {
    title: "Haldi & Mehendi decors",
    subtitle: "Vibrant yellow themes and traditional decor elements.",
    icon: AnniversariesSVG,
    accentPattern: "hearts"
  },
  'Surprise Parties': {
    title: "Surprise Party Decor",
    subtitle: "Glowing fairy lights, balloons, and customized canopy surprises.",
    icon: SurprisePartiesSVG,
    accentPattern: "fireworks"
  },
  'Puberty Ceremony': {
    title: "Puberty Decor",
    subtitle: "Traditional flower setups and stage decorations for milestone moments.",
    icon: AnniversariesSVG,
    accentPattern: "hearts"
  },
  'Palahkuu': {
    title: "Palahkuu Styling",
    subtitle: "Elegant custom setups and traditional decorations for Palahkuu.",
    icon: CorporateEventsSVG,
    accentPattern: "geometric"
  }
};

const filterMap = {
  'All Events': 'All',
  'Mugurtham (Weddings)': 'Mugurtham',
  'Receptions': 'Reception',
  'Engagements': 'Engagement',
  'Birthdays': 'Birthdays',
  'Baby Shower': 'Baby Shower',
  'Naming Ceremony': 'Naming Ceremony',
  'Entrance': 'Entrance',
  'Haldi & Mehendi': 'Haldi',
  'Surprise Parties': 'Surprise Parties',
  'Puberty Ceremony': 'Puberty',
  'Palahkuu': 'Palahkuu'
};

const categoriesList = Object.keys(categoryConfigs);

// ============================================================
// MAIN GALLERY COMPONENT
// ============================================================

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All Events');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isBannerHovered, setIsBannerHovered] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(12);

  useEffect(() => {
    setItemsToShow(12);
  }, [activeCategory]);

  const activeFilterValue = filterMap[activeCategory];

  const filteredItems = activeFilterValue === 'All'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilterValue);

  const paginatedItems = filteredItems.slice(0, itemsToShow);

  const openLightbox = (item) => {
    const fullIndex = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(fullIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  // Mouse Movement Parallax tracker
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Framer Motion Variants
  const bannerVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      scale: 0.96, 
      transition: { duration: 0.3 } 
    }
  };

  const activeConfig = categoryConfigs[activeCategory];

  return (
    <section id="gallery" className="relative bg-black py-24 sm:py-32 border-t border-gold/15 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading with scroll trigger */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold uppercase block mb-3 font-medium">Portfolio Showcase</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider font-cinzel text-white mb-6">
            Our Magic in <span className="text-gold gold-text-glow">Pictures</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed">
            Browse through our portfolio of custom-crafted events. Use the filters below to explore setups from weddings to intimate gatherings.
          </p>
        </motion.div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-5xl mx-auto">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-[10px] uppercase tracking-widest font-semibold border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-black border-gold shadow-[0_0_18px_rgba(212,175,55,0.5)] scale-105'
                  : 'bg-transparent text-white border-white/20 hover:border-gold hover:text-gold hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cinematic Tall Premium Category Visual Storytelling Banner with OVERFLOW-VISIBLE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={bannerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsBannerHovered(true)}
            onMouseLeave={() => {
              setIsBannerHovered(false);
              handleMouseLeave();
            }}
            className="relative border border-gold/15 bg-black/90 mb-16 gold-border-glow flex flex-col justify-center min-h-[420px] md:min-h-[460px] lg:min-h-[550px] select-none py-12 px-6 sm:px-12 md:px-20 z-10 overflow-visible"
          >
            {/* Background elements (Z-Index 0) */}
            
            {/* Soft vertical layout lines */}
            <div className="absolute inset-0 grid grid-cols-4 pointer-events-none opacity-5 z-0">
              <div className="border-r border-gold/30 h-full" />
              <div className="border-r border-gold/30 h-full" />
              <div className="border-r border-gold/30 h-full" />
            </div>

            {/* Radial Gold Glow behind illustration */}
            <div className="absolute right-[-100px] bottom-[-50px] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,transparent_70%)] pointer-events-none z-0 rounded-full blur-[40px]" />
            
            {/* Background particles */}
            <Sparkles count={25} />

            {/* Pattern Accent Background */}
            <AccentPattern type={activeConfig.accentPattern} />

            {/* Decorative SVG (Absolute background artwork, overflows OUTSIDE the card limits) */}
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute pointer-events-none select-none z-1 max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:opacity-15 max-lg:w-[360px] max-lg:h-[360px] lg:right-[-120px] lg:bottom-[-20px] lg:w-[620px] lg:h-[620px] transition-all duration-500"
              style={{
                opacity: isBannerHovered ? 0.40 : 0.22,
                filter: 'drop-shadow(0 0 25px rgba(212,175,55,0.25))'
              }}
            >
              <motion.div
                animate={{
                  x: mousePosition.x * 35,
                  y: mousePosition.y * 35,
                  rotate: mousePosition.x * 4,
                  scale: isBannerHovered ? 1.04 : 1
                }}
                transition={{ type: "spring", stiffness: 45, damping: 15 }}
                className="w-full h-full"
              >
                <activeConfig.icon />
              </motion.div>
            </motion.div>

            {/* Left Content Area (Z-Index 5) */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 items-center w-full h-full gap-8">
              <div className="lg:col-span-7 flex flex-col justify-center text-left max-w-[55%] max-lg:max-w-full max-lg:text-center max-lg:items-center max-lg:mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.4em] text-gold uppercase block mb-3 font-semibold">
                    Luxury Event Showcase
                  </span>
                  <h3 className="text-4xl sm:text-5xl lg:text-[64px] font-cinzel tracking-wider text-white font-bold mb-6 leading-tight max-lg:leading-snug">
                    {activeConfig.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-white/70 font-light leading-relaxed tracking-wide mb-8">
                    {activeConfig.subtitle}
                  </p>
                  
                  {/* Optional CTA Button */}
                  <div className="flex max-lg:justify-center">
                    <a
                      href="#gallery-grid"
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById('gallery-grid');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="border border-gold px-6 py-3.5 text-[10px] uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300 font-bold shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] shine-sweep"
                    >
                      View {activeCategory} Gallery
                    </a>
                  </div>
                </motion.div>
              </div>
              <div className="hidden lg:col-span-5 h-full pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Masonry Columns Gallery Grid */}
        <div id="gallery-grid" className="scroll-mt-24">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            key={activeCategory} // Force re-render grid on category change to trigger stagger
            className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance] w-full"
          >
            <AnimatePresence mode="popLayout">
              {paginatedItems.map((item, index) => (
                <motion.div
                  layout
                  variants={itemVariants}
                  key={item.id}
                  className="masonry-item break-inside-avoid relative overflow-hidden group cursor-pointer border border-gold/10 bg-black/40 hover:border-gold/40 transition-all duration-300"
                  onClick={() => openLightbox(item)}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 z-10 border border-gold/40 shadow-[inset_0_0_20px_rgba(212,175,55,0.25)]">
                    <div className="flex justify-end">
                      <div className="border border-gold p-2 bg-black/60 shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                        <ZoomIn className="w-5 h-5 text-gold" />
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.3em] uppercase text-gold block mb-1">
                        {item.category}
                      </span>
                      <h4 className="text-lg font-cinzel tracking-wider text-white font-bold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-white/70 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {/* Pagination Load More Button */}
          {filteredItems.length > itemsToShow && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setItemsToShow(prev => prev + 12)}
                className="border border-gold px-8 py-4 text-xs uppercase tracking-widest text-gold hover:bg-gold hover:text-black transition-all duration-300 font-bold shadow-[0_0_12px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)] cursor-pointer"
              >
                View More Masterpieces
              </button>
            </div>
          )}
        </div>

        {/* Full-screen Lightbox Popup */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/98 flex flex-col justify-between p-4 sm:p-8 select-none"
              onClick={closeLightbox}
            >
              {/* Top Navigation */}
              <div className="flex justify-between items-center z-10 w-full">
                <span className="font-cinzel text-[10px] sm:text-xs tracking-[0.35em] text-gold uppercase">
                  JK Orchid Events
                </span>
                <button
                  onClick={closeLightbox}
                  className="text-white hover:text-gold transition-colors duration-300 p-2"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Image Slider Area */}
              <div className="flex-grow flex items-center justify-between relative max-w-5xl mx-auto w-full h-[65vh]">
                {/* Left Navigation */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:-left-16 bg-black/80 border border-gold/30 hover:border-gold hover:text-gold p-3 z-20 text-white transition-colors duration-300"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Display Current Image */}
                <div className="w-full h-full flex items-center justify-center p-2">
                  <motion.img
                    key={lightboxIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={filteredItems[lightboxIndex].image}
                    alt={filteredItems[lightboxIndex].title}
                    className="max-w-full max-h-full object-contain border border-gold/15"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                {/* Right Navigation */}
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:-right-16 bg-black/80 border border-gold/30 hover:border-gold hover:text-gold p-3 z-20 text-white transition-colors duration-300"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Bottom Caption Info */}
              <div className="text-center z-10 max-w-2xl mx-auto pb-4">
                <span className="text-[10px] tracking-[0.25em] text-gold uppercase font-medium">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-xl sm:text-2xl font-cinzel tracking-wider text-white font-bold my-1">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-light max-w-lg mx-auto">
                  {filteredItems[lightboxIndex].description}
                </p>
                <div className="text-white/40 text-[10px] tracking-widest uppercase mt-4">
                  {lightboxIndex + 1} / {filteredItems.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
