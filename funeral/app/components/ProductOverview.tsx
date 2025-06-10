'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ProductOverview = () => {
  const keyFeatures = [
    "Real-time conflict detection",
    "Smart resource allocation", 
    "Automated confirmations",
    "Calendar integrations"
  ];

  const stats = [
    { number: "99%", label: "Conflict reduction" },
    { number: "73%", label: "Time savings" },
    { number: "35%", label: "Staff efficiency" },
    { number: "99.9%", label: "System uptime" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-funeral-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Scheduling System
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The complete solution to eliminate double-bookings and bring peace of mind to your funeral home operations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Overview Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-funeral-black mb-6">
              Never Worry About Scheduling Again
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our AI-powered scheduling system transforms the chaos of funeral home coordination into 
              a seamless, automated process. From preventing double-bookings to optimizing resource 
              allocation, we handle the complexity so you can focus on what matters most - caring for families.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-funeral-black">Key Capabilities:</h3>
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <motion.button
                className="bg-funeral-black text-white px-8 py-3 rounded-md font-semibold hover:bg-funeral-gray transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Demo
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg text-center border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-funeral-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          className="bg-funeral-black text-white rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-4">Built Specifically for Funeral Homes</h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Unlike generic scheduling software, our AI understands the unique challenges of funeral service coordination - 
            from unpredictable case loads to the critical importance of getting every detail right.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview; 