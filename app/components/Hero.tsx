'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-br from-bastl-accent-200/20 to-bastl-primary-300/20 rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              scale: [1, Math.random() * 0.3 + 0.8],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* "Powered by Advanced AI" badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="bg-bastl-accent-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Powered by Advanced AI
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mb-8 flex justify-center"
          >
            <Logo size="xl" animated />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-bastl-black mb-6 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Building the engines that let
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>great ideas run themselves
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We turn messy, people-heavy workflows into elegant AI systems—cutting waste,
            guarding uptime, and freeing teams to focus on the work that matters.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/get-started" 
              className="bg-bastl-energy-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-bastl-energy-700 transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Start Your AI Journey
            </Link>
            <Link 
              href="/projects" 
              className="bg-white text-bastl-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold border-2 border-bastl-black hover:bg-gray-50 transition-colors text-center group"
            >
              View Projects
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>

          {/* Tech stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { value: '99.9%', label: 'Automation Success Rate' },
              { value: '500ms', label: 'Processing Speed' },
              { value: '10x', label: 'Efficiency Increase' },
              { value: '60%', label: 'Cost Reduction' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-bastl-primary-600 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-gray-600 text-xs sm:text-sm leading-tight">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;