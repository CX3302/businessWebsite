'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function UpcomingProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-bastl-gray-50 to-bastl-gray-200">
      <div className="pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-bastl-black mb-6">
              New Projects Coming Soon
            </h1>
            <p className="text-xl text-bastl-gray-700 max-w-2xl mx-auto">
              We're working on exciting new partnerships and innovations that will reshape industries.
            </p>
          </motion.div>

          {/* Prelude Project Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl mb-12"
          >
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-bastl-tech-700 to-bastl-tech-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">P</span>
              </div>
              <h2 className="text-3xl font-bold text-bastl-black mb-4">
                Prelude
              </h2>
              <p className="text-lg text-bastl-gray-700 mb-6">
                A revolutionary platform that's currently in stealth mode. We're building something special that will transform how businesses approach automation and intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-bastl-black">
                  What We're Building
                </h3>
                <ul className="space-y-2 text-bastl-gray-700">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-bastl-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Next-generation AI automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-bastl-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Seamless integration capabilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-bastl-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Enterprise-grade security</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-bastl-black">
                  Expected Impact
                </h3>
                <ul className="space-y-2 text-bastl-gray-700">
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-bastl-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>90% reduction in manual processes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-bastl-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time decision making</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-bastl-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Scalable to any industry</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="https://prelude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r from-bastl-tech-700 to-bastl-tech-900 hover:from-bastl-tech-800 hover:to-bastl-tech-900 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-bastl-tech-600/25"
              >
                Visit Prelude Website
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-bastl-black mb-4">
                More Projects in Development
              </h3>
              <p className="text-bastl-gray-700 mb-6">
                We have several other exciting projects in various stages of development. 
                Each one represents a unique opportunity to transform industries through intelligent automation.
              </p>
              <div className="flex justify-center space-x-4">
                <div className="w-3 h-3 bg-bastl-accent-600 rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-bastl-accent-600 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 bg-bastl-accent-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <p className="text-sm text-bastl-accent-600 mt-4">
                Stay tuned for announcements
              </p>
            </div>
          </motion.div>

          {/* Back to Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
                                className="inline-flex items-center px-6 py-3 border border-bastl-tech-700 text-base font-medium rounded-lg text-bastl-accent-600 bg-white hover:bg-bastl-tech-100 transition-colors"
            >
              <svg
                className="mr-2 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Projects
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 