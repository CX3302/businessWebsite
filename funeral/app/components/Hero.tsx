'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-funeral-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional AI Solutions
            <br />
            <span className="text-funeral-gray">
              for Funeral Services
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Streamline your funeral home operations with intelligent scheduling and customer care solutions. 
            Our AI-powered tools help you serve families with dignity while reducing administrative burden and increasing efficiency.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-funeral-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-funeral-gray transition-colors"
            >
              View Our Solutions
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white text-funeral-black px-8 py-4 rounded-md text-lg font-semibold border-2 border-funeral-black hover:bg-gray-50 transition-colors"
            >
              Schedule Consultation
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 