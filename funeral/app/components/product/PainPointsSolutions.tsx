'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PainPointsSolutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const problemSolutions = [
    {
      problem: {
        title: "Disconnected Business Operations",
        description: "Scheduling, leads, CRM, and team management scattered across multiple tools.",
        stat: "73% of SMBs use 5+ separate systems",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        )
      },
      solution: {
        title: "Unified AI Platform",
        description: "Complete business management ecosystem with intelligent automation and predictive insights.",
        stat: "5-in-1 platform integration",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    },
    {
      problem: {
        title: "Manual Lead Management",
        description: "Lost opportunities due to poor lead scoring and inconsistent follow-up processes.",
        stat: "60% of leads never get proper follow-up",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      solution: {
        title: "AI Lead Intelligence",
        description: "Automated scoring, intelligent assignment, and predictive conversion analytics.",
        stat: "3x higher conversion rates",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        )
      }
    },
    {
      problem: {
        title: "Reactive Customer Management",
        description: "No visibility into customer health or churn risk until it's too late.",
        stat: "85% of churn happens without warning",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        )
      },
      solution: {
        title: "Predictive Customer Success",
        description: "Real-time health monitoring, churn prediction, and automated intervention strategies.",
        stat: "85% churn prevention success",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    },
    {
      problem: {
        title: "Inefficient Resource Allocation",
        description: "Wrong people on wrong projects, missed opportunities, suboptimal scheduling.",
        stat: "40% productivity loss from poor matching",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.364-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        )
      },
      solution: {
        title: "Smart Employee Optimization",
        description: "AI-driven skills matching, performance tracking, and optimal assignment recommendations.",
        stat: "40% productivity improvement",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
      }
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            From Chaos to Control
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how our AI transforms your biggest business management challenges into intelligent automation
          </motion.p>
        </div>

        <div className="space-y-8">
          {problemSolutions.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                {/* Problem Card */}
                <motion.div
                  className={`bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 transition-all duration-300 ${
                    hoveredIndex === index ? 'border-red-400 shadow-lg' : 'border-gray-200'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      {item.problem.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {item.problem.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {item.problem.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg inline-block mt-4">
                    <span className="font-semibold">{item.problem.stat}</span>
                  </div>
                </motion.div>

                {/* Arrow */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: hoveredIndex === index ? [0, 10, 0] : 0 }}
                    transition={{ duration: 1, repeat: hoveredIndex === index ? Infinity : 0 }}
                    className="bg-blue-600 text-white rounded-full p-3 shadow-lg"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.div>
                </div>

                {/* Solution Card */}
                <motion.div
                  className={`bg-gradient-to-br from-blue-900 to-gray-900 text-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                    hoveredIndex === index ? 'border-blue-400 shadow-lg' : 'border-transparent'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start mb-4">
                    <div className="w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      {item.solution.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">
                        {item.solution.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.solution.description}
                      </p>
                    </div>
                  </div>
                  <div className="bg-blue-800 text-blue-100 px-4 py-2 rounded-lg inline-block mt-4">
                    <span className="font-semibold">{item.solution.stat}</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 border border-blue-200">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              The Bottom Line
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Stop juggling multiple systems and manual processes. Let our AI handle the operational complexity 
              while you focus on growing your business and serving your customers. It's that simple.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSolutions;