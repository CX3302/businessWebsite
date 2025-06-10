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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              About Prelude
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Prelude was born from a simple observation: funeral homes spend countless hours 
                coordinating schedules, managing resources, and preventing conflicts when they 
                should be focused on what matters most—caring for families during their most 
                difficult moments.
              </p>
              
              <p>
                Our AI-powered scheduling system eliminates the chaos of manual coordination, 
                reducing double-bookings by 99% and freeing up 73% of administrative time. 
                This isn't just software—it's peace of mind.
              </p>
              
              <p>
                Built specifically for funeral home operations, Prelude understands the unique 
                challenges of your industry. From chapel availability to hearse scheduling, 
                from staff coordination to vendor management—we handle it all automatically.
              </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2">500+</div>
                <div className="text-gray-600">Hours Saved Monthly</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-2">99%</div>
                <div className="text-gray-600">Conflict Prevention Rate</div>
              </div>
            </div>
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
                <h3 className="text-2xl font-bold mb-4">Why Funeral Homes Choose Prelude</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">Designed specifically for funeral home workflows</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">Integrates with existing systems seamlessly</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">24/7 support from industry experts</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-300">Compliant with funeral industry standards</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-blue-300 font-medium">
                  "Prelude eliminated our scheduling headaches completely. We've had zero 
                  double-bookings since implementation." - Sarah M., Funeral Director
                </p>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-blue-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">73%</div>
                <div className="text-xs text-gray-600">Time Saved</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-blue-100"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">24/7</div>
                <div className="text-xs text-gray-600">AI Coverage</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;