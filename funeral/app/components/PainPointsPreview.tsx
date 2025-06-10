'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const PainPointsPreview = () => {
  const painPoints = [
    "Double-booking disasters damage your reputation",
    "Manual coordination burns out your staff", 
    "Resource conflicts create costly delays",
    "Paper-based systems lead to critical errors"
  ];

  const solutions = [
    "AI prevents conflicts before they happen",
    "Smart automation reduces workload by 73%",
    "Real-time tracking eliminates confusion", 
    "Digital system ensures 99.9% reliability"
  ];

  return (
    <section id="pain-points" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Problem → The Solution
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how Prelude transforms common scheduling nightmares into seamless operations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Pain Points Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Common Pain Points
              </h3>
            </div>
            
            <div className="space-y-4">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-orange-50 rounded-xl">
              <p className="text-sm text-orange-700 font-medium">
                These issues cost funeral homes an average of 15+ hours per week in manual coordination
              </p>
            </div>
          </motion.div>

          {/* Solutions Card */}
          <motion.div
            className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
            
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Prelude's Solution
              </h3>
            </div>
            
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300 leading-relaxed">{solution}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <p className="text-sm text-green-400 font-medium">
                Funeral homes save 73% of coordination time while achieving 99% conflict prevention
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsPreview; 