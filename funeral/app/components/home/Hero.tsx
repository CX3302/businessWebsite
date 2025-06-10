'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Simplified background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Announcement Badge */}
          <motion.div
            className="inline-flex items-center bg-blue-900 text-white text-sm px-4 py-2 rounded-full mb-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI-Powered Scheduling Now Available
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Never Double-Book
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
              Again
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Eliminate scheduling conflicts and reduce coordination time by 73% with 
            <br className="hidden sm:block" />
            Prelude's intelligent funeral home management system.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button 
              onClick={() => window.location.href = '/contact'}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-gray-900 to-blue-900 text-white text-lg font-semibold rounded-lg hover:from-blue-900 hover:to-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book a Demo
              <svg className="ml-2 -mr-1 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('pain-points');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-lg border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              aria-label="Scroll to see how Prelude works"
            >
              See How It Works
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2">99%</div>
              <div className="text-sm text-gray-600">Conflict Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2">73%</div>
              <div className="text-sm text-gray-600">Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2">35%</div>
              <div className="text-sm text-gray-600">Staff Efficiency</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-blue-900 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-blue-900 rounded-full mt-2"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;