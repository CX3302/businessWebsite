'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const [timelineHeight, setTimelineHeight] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.offsetHeight;
        setTimelineHeight(height - 200); // Adjust for padding
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const steps = [
    {
      number: "01",
      title: "AI Intake",
      description: "System automatically captures case details, family preferences, and resource requirements with intelligent form processing",
      icon: "📝",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      title: "Smart Matching",
      description: "AI instantly analyzes availability and matches optimal resources, venues, staff, and vendors based on requirements",
      icon: "🧠",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "03",
      title: "Auto-Confirmation", 
      description: "Sends automated confirmations to all parties including families, staff, and vendors with detailed scheduling information",
      icon: "✉️",
      color: "from-green-500 to-green-600"
    },
    {
      number: "04",
      title: "Zero Coordination",
      description: "Everything runs seamlessly in the background - you focus on families while AI handles all scheduling logistics",
      icon: "🎯",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Four simple steps to eliminate manual coordination forever
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative" ref={containerRef}>
          {/* Timeline line - positioned absolutely to span full height */}
          <div 
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-gray-300 via-gray-400 to-gray-300 top-16"
            style={{ height: `${timelineHeight}px` }}
          ></div>

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Content Card */}
                <div className="flex-1 w-full max-w-lg">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg`}>
                        <span className="text-3xl">{step.icon}</span>
                      </div>
                      <div>
                        <span className="text-lg font-bold text-gray-400 block">
                          Step {step.number}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:block relative z-10">
                  <div className="w-8 h-8 bg-white rounded-full border-4 border-gray-400 shadow-lg relative">
                    <div className={`absolute inset-1 bg-gradient-to-r ${step.color} rounded-full`}></div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl p-8 lg:p-12 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Zero Manual Coordination
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              Once set up, Prelude handles everything automatically. Your staff can focus entirely on what matters most—caring for families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See It in Action
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks; 