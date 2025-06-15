'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-manrope">
              About Prelude
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed font-inter">
              <p>
                Prelude was born from a simple observation: small to medium-sized businesses spend 
                countless hours juggling scheduling, lead management, customer relationships, and 
                team coordination when they should be focused on what matters most—growing their 
                business and serving their customers.
              </p>
              
              <p>
                Our AI-powered business management platform eliminates operational chaos, 
                streamlining everything from intelligent scheduling to predictive customer analytics. 
                We reduce operational overhead by 73% while maximizing revenue opportunities. 
                This isn't just software—it's business transformation.
              </p>
              
              <p>
                Built for the modern business landscape, Prelude understands the complex challenges 
                of multi-faceted operations. From smart scheduling and lead scoring to CRM automation 
                and employee optimization—we unify it all in one intelligent platform.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2 font-manrope">73%</div>
                <div className="text-gray-600 font-inter">Operational Efficiency<br />Improvement</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2 font-manrope">5-in-1</div>
                <div className="text-gray-600 font-inter">Unified Platform<br />Solution</div>
              </div>
            </div>

            {/* Pilot Data Disclaimer */}
            <motion.div
              className="mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xs text-gray-500 font-inter text-center">
                Based on 2025 modeling
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-2xl p-8 text-white shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4 font-manrope">Why Businesses Choose Prelude</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300 font-inter">Integrates with existing business tools seamlessly</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300 font-inter">24/7 intelligent AI + human support</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300 font-inter">Enterprise-grade security and compliance</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300 font-inter">Built with SMB leaders across industries</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-blue-300 font-medium font-inter">
                  "Transformed our operations with 73% efficiency improvement."
                </p>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-blue-100 w-20 h-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent font-manrope">73%</div>
                <div className="text-xs text-gray-600 font-inter">Time Saved</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-blue-100 w-20 h-20"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-center h-full flex flex-col justify-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent font-manrope">24/7</div>
                <div className="text-xs text-gray-600 font-inter">Support</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;