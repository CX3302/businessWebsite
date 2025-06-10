'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const Roadmap = () => {
  const roadmapItems = [
    {
      quarter: "Available Now",
      title: "AI Scheduling System",
      description: "Eliminate double-bookings forever with intelligent scheduling, resource management, and conflict prevention",
      status: "Live",
      href: "/product"
    },
    {
      quarter: "Q2 2024",
      title: "Vendor Network Integration", 
      description: "Direct booking with florists, musicians, caterers, and other service providers through integrated platform",
      status: "In Development",
      href: "/under-development?product=vendors"
    },
    {
      quarter: "Q3 2024",
      title: "Automated CRM Follow-up",
      description: "AI-powered aftercare and revenue optimization with personalized family communications and upselling",
      status: "In Development",
      href: "/under-development?product=crm"
    },
    {
      quarter: "Q4 2024",
      title: "Advanced Analytics Dashboard",
      description: "Deep insights into scheduling patterns, resource utilization, revenue trends, and business performance metrics",
      status: "Planned"
    }
  ];

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Product Roadmap
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our development roadmap for the future of funeral home management
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${
                    item.status === 'Live' ? 'border-green-500' :
                    item.status === 'In Development' ? 'border-blue-500' :
                    'border-gray-400'
                  } hover:shadow-xl transition-all duration-200 ${item.href ? 'cursor-pointer' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => item.href && window.open(item.href, '_self')}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Live' ? 'bg-green-100 text-green-800' :
                      item.status === 'In Development' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">{item.quarter}</div>
                    {item.href && (
                      <div className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                        Learn More →
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            className="mt-12 bg-gray-50 rounded-xl p-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Progress</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div className="text-sm font-medium text-gray-900">AI Scheduling</div>
                <div className="text-xs text-gray-600">Live</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm font-medium text-gray-900">Vendor Network</div>
                <div className="text-xs text-gray-600">75% Complete</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm font-medium text-gray-900">CRM Follow-up</div>
                <div className="text-xs text-gray-600">45% Complete</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-sm font-medium text-gray-900">Analytics</div>
                <div className="text-xs text-gray-600">Planning</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16 bg-gray-900 text-white rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              See how our current AI Scheduling System can transform your funeral home operations today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                  Book a Demo
                </button>
              </Link>
              <Link href="/product">
                <button className="bg-transparent text-white px-8 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-gray-900 transition-colors text-lg">
                  View Current Product
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap; 