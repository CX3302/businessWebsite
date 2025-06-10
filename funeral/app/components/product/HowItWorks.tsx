'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const steps = [
    {
      number: "01",
      title: "AI Intake",
      description: "System captures case details and requirements automatically through intelligent form processing",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "02", 
      title: "Smart Matching",
      description: "AI analyzes availability and matches optimal resources, venues, and staff instantly",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-blue-600 to-blue-700"
    },
    {
      number: "03",
      title: "Auto-Confirmation", 
      description: "Automated notifications sent to all parties with complete scheduling details",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-gray-700 to-gray-800"
    },
    {
      number: "04",
      title: "Zero Coordination",
      description: "Everything runs automatically while you focus on serving families",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "from-gray-800 to-gray-900"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
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
            Four automated steps that eliminate manual coordination forever
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="mb-16 max-w-4xl mx-auto">
          <div className="relative">
            {/* Static grey background line */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full bg-gray-200 h-1 rounded-full"></div>
            </div>
            
            {/* Animated progress line - layered on top */}
            <div className="absolute inset-0 flex items-center">
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-600 to-gray-900 rounded-full transition-all duration-1000"
                style={{ width: `${(activeStep / 3) * 100}%` }}
              />
            </div>
            
            {/* Step circles */}
            <div className="relative flex justify-between">
              {steps.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 z-10 ${
                    index <= activeStep 
                      ? 'bg-gradient-to-r from-blue-600 to-gray-900 shadow-lg scale-110' 
                      : 'bg-gray-300'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: index <= activeStep ? [1, 1.2, 1] : 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {index + 1}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps Display */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative transition-all duration-500 ${
                index === activeStep ? 'scale-105' : 'scale-95 opacity-70'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                index === activeStep ? 'border-blue-500' : 'border-gray-100'
              }`}>
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg ${
                  index === activeStep ? 'animate-pulse' : ''
                }`}>
                  {step.icon}
                </div>
                <div className="text-center">
                  <span className="text-sm font-bold text-gray-400 block mb-1">
                    Step {step.number}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Demo */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              See It In Action
            </h3>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Watch how a typical service goes from initial call to fully scheduled — in under 60 seconds
            </p>
          </div>

          {/* Demo Visualization */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-lg font-semibold">Current Step:</span>
              <span className="text-2xl font-bold">{steps[activeStep].title}</span>
            </div>
            <div className="space-y-3">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                    index === activeStep ? 'bg-white/20' : 'bg-white/5'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                    index <= activeStep ? 'bg-green-500' : 'bg-gray-500'
                  }`}>
                    {index < activeStep ? '✓' : index + 1}
                  </div>
                  <span className={index <= activeStep ? 'text-white' : 'text-gray-400'}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact">
              <motion.button
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Live Demo
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;