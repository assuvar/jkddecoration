import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare } from 'lucide-react';
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Birthday Decoration',
    eventDate: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp redirection
    const formattedText = `Hi JK Orchid Events,
I would like to inquire about a decoration service. Here are my details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Event Type: ${formData.eventType}
- Event Date: ${formData.eventDate || 'Not specified'}
- Message: ${formData.message || 'No additional message'}`;

    const encodedText = encodeURIComponent(formattedText);
    const whatsappUrl = `https://wa.me/916381491400?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const contactInfos = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 63814 91400",
      href: "tel:+916381491400"
    },
    {
      icon: Mail,
      label: "Email Address",
      value: "Jkorchidevents@gmail.com",
      href: "mailto:Jkorchidevents@gmail.com"
    },
    {
      icon: InstagramIcon,
      label: "Instagram Portfolio",
      value: "@jk.orchid",
      href: "https://www.instagram.com/jk.orchid/"
    }
  ];

  return (
    <section id="contact" className="relative bg-black py-24 sm:py-32 border-t border-gold/15 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-gold/5 rounded-full filter blur-[150px] pointer-events-none" />

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
          <span className="font-cinzel text-xs tracking-[0.4em] text-gold uppercase block mb-3 font-medium">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider font-cinzel text-white mb-6">
            Begin Your <span className="text-gold gold-text-glow">Journey</span>
          </h2>
          <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />
          <p className="text-sm sm:text-base text-white/70 font-light tracking-wide leading-relaxed">
            Let’s discuss your upcoming celebration. Fill out the booking details below to connect with our design lead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details with scroll reveal */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-5 space-y-8"
          >
            <h3 className="text-2xl font-cinzel tracking-wider text-white font-bold mb-6">
              Contact Information
            </h3>
            
            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed mb-8 uppercase tracking-widest">
              We look forward to creating magic for you. Reach out via your preferred channel, or send us your details via the custom planner form on the right.
            </p>

            <div className="space-y-6">
              {contactInfos.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 border border-gold/10 bg-black/60 hover:border-gold/30 hover:bg-black/90 hover:shadow-[0_5px_15px_rgba(212,175,55,0.15)] transition-all duration-500 hover:-translate-y-1 group"
                  >
                    <div className="border border-gold/20 p-3 bg-black text-gold group-hover:border-gold group-hover:bg-gold group-hover:text-black transition-all duration-300 shadow-[0_0_8px_rgba(212,175,55,0.1)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[9px] tracking-widest uppercase text-white/40 block">
                        {info.label}
                      </span>
                      <span className="text-sm font-semibold tracking-wide text-white group-hover:text-gold transition-colors">
                        {info.value}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Lead Form with scroll reveal */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85 }}
            className="lg:col-span-7 bg-black/85 border border-gold/15 p-8 sm:p-10 relative shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:border-gold/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
            
            <h3 className="text-2xl font-cinzel tracking-wider text-white font-bold mb-8">
              Event Planner Inquiry
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] tracking-widest uppercase text-gold mb-2 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="bg-black border border-gold/25 text-white placeholder-white/30 px-4 py-3.5 text-xs sm:text-sm outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(212,175,55,0.35)] focus:ring-1 focus:ring-gold/30 transition-all duration-300 rounded-none font-light"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-[10px] tracking-widest uppercase text-gold mb-2 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="e.g. +91 98765 43210"
                    className="bg-black border border-gold/25 text-white placeholder-white/30 px-4 py-3.5 text-xs sm:text-sm outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(212,175,55,0.35)] focus:ring-1 focus:ring-gold/30 transition-all duration-300 rounded-none font-light"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Event Type */}
                <div className="flex flex-col">
                  <label htmlFor="eventType" className="text-[10px] tracking-widest uppercase text-gold mb-2 font-medium">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="bg-black border border-gold/25 text-white px-4 py-3.5 text-xs sm:text-sm outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(212,175,55,0.35)] focus:ring-1 focus:ring-gold/30 transition-all duration-300 rounded-none font-light"
                  >
                    <option value="Birthday Decoration">Birthday Decoration</option>
                    <option value="Baby Shower Decoration">Baby Shower Decoration</option>
                    <option value="Wedding Decoration">Wedding Decoration</option>
                    <option value="Reception Decoration">Reception Decoration</option>
                    <option value="Surprise Parties">Surprise Parties</option>
                    <option value="Engagement Decoration">Engagement Decoration</option>
                    <option value="Anniversary Decoration">Anniversary Decoration</option>
                    <option value="Naming Ceremony">Naming Ceremony</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Custom Theme Decor">Custom Theme Decor</option>
                  </select>
                </div>

                {/* Event Date */}
                <div className="flex flex-col">
                  <label htmlFor="eventDate" className="text-[10px] tracking-widest uppercase text-gold mb-2 font-medium">
                    Event Date
                  </label>
                  <input
                    type="date"
                    id="eventDate"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="bg-black border border-gold/25 text-white px-4 py-3.5 text-xs sm:text-sm outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(212,175,55,0.35)] focus:ring-1 focus:ring-gold/30 transition-all duration-300 rounded-none font-light"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label htmlFor="message" className="text-[10px] tracking-widest uppercase text-gold mb-2 font-medium">
                  Brief details about the venue/theme
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about the venue, preferences, or any specific theme you want..."
                  className="bg-black border border-gold/25 text-white placeholder-white/30 px-4 py-3.5 text-xs sm:text-sm outline-none focus:border-gold focus:shadow-[0_0_15px_rgba(212,175,55,0.35)] focus:ring-1 focus:ring-gold/30 transition-all duration-300 resize-none rounded-none font-light"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gold text-black py-4 border border-gold hover:border-gold-light transition-all duration-300 font-bold text-xs uppercase tracking-widest flex items-center justify-center space-x-2 hover:scale-[1.02] shadow-[0_0_15px_rgba(212,175,55,0.35)] hover:shadow-[0_0_25px_rgba(212,175,55,0.65)] shine-sweep"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send via WhatsApp</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
