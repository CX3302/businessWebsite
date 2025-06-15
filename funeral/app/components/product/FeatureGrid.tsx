'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const FeatureGrid = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const features = [
    {
      feature: "AI Scheduling Assistant",
      benefit: "Conversational meeting intelligence",
      description: "Natural language processing for effortless scheduling with AI-powered predictions for meeting success rates, engagement scores, and optimal timing recommendations.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      stats: "92% meeting success rate"
    },
    {
      feature: "Lead Intelligence",
      benefit: "AI-powered lead scoring & assignment",
      description: "Comprehensive lead database with automated qualification, hot/warm/cold categorization, and intelligent matching to sales representatives based on specialties and performance.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      stats: "3x higher conversion rates"
    },
    {
      feature: "Customer Success Analytics",
      benefit: "Health monitoring & churn prediction",
      description: "Real-time customer health scores, automated risk assessment, renewal forecasting, and AI-generated recommendations for retention and growth opportunities.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: "85% churn prevention rate"
    },
    {
      feature: "Employee Optimization",
      benefit: "Skills-based intelligent matching",
      description: "AI recommendations for optimal employee assignment based on event type, skills, performance history, and availability. Real-time performance tracking with team analytics.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.364-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      stats: "40% productivity improvement"
    },
    {
      feature: "Predictive Dashboard",
      benefit: "Real-time business intelligence",
      description: "AI-powered insights into customer health, business metrics, historical performance analysis, and actionable intelligence for strategic decision-making.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      stats: "Real-time predictive insights"
    },
    {
      feature: "Vendor Management",
      benefit: "Complete vendor ecosystem",
      description: "Comprehensive vendor database with contact management, relationship tracking, and seamless integration with existing business workflows for streamlined operations.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      stats: "Unified vendor coordination"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Powerful Features, Simple Experience
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            AI-powered features that revolutionize business management from lead generation to customer success
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className={`bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                hoveredFeature === index ? 'border-blue-500 scale-105' : 'border-gray-100'
              }`}>
                {/* Icon and Title */}
                <div className="text-center mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-4 ${
                      hoveredFeature === index ? 'scale-110' : ''
                    }`}
                    animate={{ 
                      scale: hoveredFeature === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.feature}
                  </h3>
                  <p className="text-gray-600 font-medium">
                    {feature.benefit}
                  </p>
                </div>

                {/* Detailed Description */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  hoveredFeature === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                    {feature.stats}
                  </div>
                </div>

                {/* Hover Indicator */}
                <div className={`mt-4 text-center transition-all duration-300 ${
                  hoveredFeature === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <span className="text-xs text-gray-400">Hover for details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Summary */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Complete Business Intelligence Platform</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Unify scheduling, lead management, customer success, employee optimization, and vendor coordination 
            into one AI-powered platform with predictive analytics and conversational interfaces.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.span 
              className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              Conversational AI
            </motion.span>
            <motion.span 
              className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              Predictive Analytics
            </motion.span>
            <motion.span 
              className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              Real-time Intelligence
            </motion.span>
            <motion.span 
              className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              Multi-modal Integration
            </motion.span>
            <motion.span 
              className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.3)' }}
            >
              Automated Workflows
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid;