'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const PainPointsSolutions = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const problemSolutions = [
    {
      problem: {
        title: "Double-Booking Disasters",
        description: "Multiple families scheduled for the same chapel creates devastating conflicts.",
        stat: "73% of funeral homes face monthly double-bookings",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        )
      },
      solution: {
        title: "AI Conflict Prevention",
        description: "Real-time scheduling intelligence that makes double-bookings impossible.",
        stat: "99% conflict elimination rate",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    },
    {
      problem: {
        title: "Unpredictable Workload",
        description: "Case volumes swing wildly — 2 one week, 10 the next.",
        stat: "400% seasonal variation in case loads",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      },
      solution: {
        title: "Smart Load Balancing",
        description: "AI predicts patterns and optimizes staff scheduling automatically.",
        stat: "35% improvement in staff utilization",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
      }
    },
    {
      problem: {
        title: "Resource Juggling Chaos",
        description: "Tracking availability of hearses, chapels, and staff manually.",
        stat: "15+ hours weekly spent on coordination",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        )
      },
      solution: {
        title: "Automated Resource Management",
        description: "Everything tracked and allocated in real-time, automatically.",
        stat: "73% reduction in scheduling time",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      }
    },
    {
      problem: {
        title: "Paper-Based Confusion",
        description: "Lost schedules, illegible notes, and outdated information.",
        stat: "60% more errors with manual systems",
        icon: (
          <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        )
      },
      solution: {
        title: "Digital Intelligence",
        description: "Cloud-based system accessible anywhere with automatic backups.",
        stat: "99.9% system reliability",
        icon: (
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
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
            See how our AI transforms your biggest scheduling challenges into automated solutions
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
              Stop fighting with schedules. Let our AI handle the complexity while you focus on 
              providing compassionate care to families. It's that simple.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSolutions;