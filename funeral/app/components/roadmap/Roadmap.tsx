'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const Roadmap = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const roadmapItems = [
    {
      quarter: "Available Now",
      title: "Business Management Suite",
      description: "Complete AI-powered business management platform with intelligent automation and predictive analytics",
      status: "Live",
      href: "/product",
      features: [
        "AI Scheduling Intelligence - Conversational AI with predictive analytics for optimal meeting times and success rates",
        "Lead Generation & Scoring - Comprehensive lead database with AI-powered qualification and intelligent assignment",
        "Customer Success Management - Health score monitoring, churn prediction, and renewal forecasting",
        "Employee Optimization - Skills-based matching and event-specific recommendations for maximum performance",
        "Vendor Management - Complete vendor database with integration capabilities and relationship tracking",
        "Predictive Analytics - Real-time business intelligence with forecasting and automated workflows"
      ]
    },
    {
      quarter: "Q4 2025",
      title: "Advanced Analytics Dashboard",
      description: "Enhanced predictive insights and advanced business intelligence with custom reporting and data visualization",
      status: "In Development",
      href: "/under-development?product=analytics"
    },
    {
      quarter: "Q1 2026",
      title: "Multi-Channel Integration",
      description: "Connect all your business tools and platforms seamlessly for unified workflow automation",
      status: "In Development",
      href: "/under-development?product=integrations"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 min-h-screen">
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
            Our development roadmap for the future of AI-powered business management
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
                    item.status === 'Live' ? 'border-blue-500' :
                    item.status === 'In Development' ? 'border-blue-400' :
                    'border-gray-400'
                  } hover:shadow-xl transition-all duration-200`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'Live' ? 'bg-blue-100 text-blue-800' :
                      item.status === 'In Development' ? 'bg-blue-50 text-blue-700' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                  
                  {/* Features dropdown for Business Management Suite */}
                  {item.features && (
                    <div className="mb-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setExpandedItem(expandedItem === index ? null : index);
                        }}
                        className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                      >
                        <span>View Features</span>
                        <svg 
                          className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                            expandedItem === index ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ 
                          opacity: expandedItem === index ? 1 : 0,
                          height: expandedItem === index ? 'auto' : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <div className="grid gap-3">
                            {item.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <div className="text-sm text-gray-700">
                                  <span className="font-semibold">{feature.split(' - ')[0]}</span>
                                  {feature.includes(' - ') && (
                                    <span className="text-gray-600"> - {feature.split(' - ')[1]}</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">{item.quarter}</div>
                    {item.href && (
                      <Link 
                        href={item.href}
                        className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More →
                      </Link>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <motion.div
            className="mt-12 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Progress</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div className="text-sm font-medium text-gray-900">Business Management Suite</div>
                <div className="text-xs text-gray-600">Live</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm font-medium text-gray-900">Advanced Analytics</div>
                <div className="text-xs text-gray-600">In Development</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                </div>
                <div className="text-sm font-medium text-gray-900">Multi-Channel Integration</div>
                <div className="text-xs text-gray-600">In Development</div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              See how our Business Management Suite can transform your business operations with AI-powered intelligence today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-lg">
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