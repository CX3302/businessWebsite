'use client';

import { motion } from 'framer-motion';

const ProductOverview = () => {
  const keyFeatures = [
    {
      title: "Real-time conflict detection",
      description: "Instantly identifies scheduling conflicts before they happen"
    },
    {
      title: "Smart resource allocation",
      description: "Optimizes staff, vehicles, and facility usage automatically"
    },
    {
      title: "Automated confirmations",
      description: "Sends instant notifications to all parties involved"
    },
    {
      title: "Calendar integrations",
      description: "Syncs seamlessly with Google and Outlook calendars"
    }
  ];

  const stats = [
    { 
      number: "99%", 
      label: "Conflict reduction", 
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      number: "73%", 
      label: "Time savings", 
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      number: "35%", 
      label: "Staff efficiency", 
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    { 
      number: "24/7", 
      label: "AI availability", 
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center bg-blue-100 text-blue-800 text-sm px-4 py-2 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            AI-Powered Scheduling
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            AI Scheduling System
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Transform scheduling chaos into seamless coordination. Our AI eliminates double-bookings, 
            optimizes resources, and gives you peace of mind — all automatically.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Overview Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Focus on Families, Not Scheduling
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our intelligent system handles the complexity of funeral home coordination automatically. 
              From the moment a case comes in, our AI ensures every detail is perfectly orchestrated — 
              no conflicts, no confusion, just smooth operations.
            </p>
            
            <div className="space-y-6 mb-8">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-900 transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/contact'}
            >
              Schedule Your Demo
            </motion.button>
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
                className="bg-white rounded-2xl p-6 shadow-lg text-center border border-gray-100 hover:border-blue-200 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, shadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              >
                <div className="w-16 h-16 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Value Proposition */}
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Built by Funeral Directors, for Funeral Directors
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            We understand the unique challenges you face — unpredictable case loads, complex resource coordination, 
            and the critical importance of flawless execution. That's why we built an AI that thinks like you do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductOverview;