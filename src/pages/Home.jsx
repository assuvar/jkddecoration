import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import WhatsAppCTA from '../components/WhatsAppCTA';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-gold selection:text-black">
      <CustomCursor />
      {/* Sticky Mobile Floating WhatsApp CTA Button */}
      <a
        href="https://wa.me/916381491400?text=Hi%20JK%20Orchid%20Events,%20I%20would%20like%20to%20book%20a%20decoration%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:hidden z-40 bg-gold text-black p-4 shadow-2xl transition-all duration-300 active:scale-95 border border-gold hover:bg-black hover:text-gold"
        aria-label="Direct WhatsApp Message"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.447 5.362 1.448 5.485 0 9.948-4.464 9.952-9.95.002-2.657-1.03-5.153-2.91-7.034C17.172 1.737 14.68 .7 12.009.7c-5.49 0-9.956 4.465-9.96 9.95-.001 2.14.561 4.224 1.63 6.04L2.68 21.05l4.316-1.134-.349-.762zM18.17 14.85c-.322-.16-1.9-.937-2.19-.997-.29-.07-.5-.1-.71.22-.21.32-.81 1.02-.99 1.23-.18.21-.36.24-.68.08-.32-.16-1.36-.5-2.59-1.6-1-.89-1.67-1.99-1.87-2.33-.2-.34-.02-.52.15-.68.15-.15.33-.38.5-.57.17-.19.23-.32.34-.54.11-.22.06-.41-.03-.57-.09-.16-.71-1.7-.97-2.34-.26-.62-.52-.54-.71-.55-.18-.01-.39-.01-.6-.01-.21 0-.55.08-.84.4-.29.32-1.1 1.07-1.1 2.62s1.12 3.05 1.27 3.25c.15.2 2.2 3.36 5.33 4.71.74.32 1.33.51 1.78.65.75.24 1.43.21 1.97.13.6-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.27-.22-.6-.38z" />
        </svg>
      </a>

      {/* Structured Sections */}
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <WhyChooseUs />
      <Testimonials />
      <WhatsAppCTA />
      <Contact />
      <Footer />
    </div>
  );
}
