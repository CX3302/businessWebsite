'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bastl-blue-50 to-bastl-gray-100">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          {/* Tech pattern overlay */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }} />
          
          {/* Animated circles */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-bastl-blue-200 rounded-full mix-blend-multiply filter blur-xl"
          />
          <motion.div
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-bastl-accent-200 rounded-full mix-blend-multiply filter blur-xl"
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="text-center">
          <motion.div 
            className="mb-8 inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-bastl-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">
              Powered by Advanced AI
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-bastl-blue-900">Transforming</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bastl-blue-600 to-bastl-accent-500">
              Business with AI
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-bastl-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We harness cutting-edge artificial intelligence to automate complex workflows, 
            optimize operations, and drive unprecedented efficiency gains across your organization.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/get-started" 
              className="group relative bg-bastl-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-bastl-blue-700 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-bastl-blue-500 to-bastl-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a 
              href="/projects" 
              className="group bg-white text-bastl-blue-900 px-8 py-4 rounded-xl text-lg font-semibold border-2 border-bastl-blue-200 hover:border-bastl-blue-300 hover:bg-bastl-blue-50 transition-all duration-300"
            >
              View Projects
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>

          {/* Tech stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: 'Automation Success Rate', value: '99.9%' },
              { label: 'Processing Speed', value: '500ms' },
              { label: 'Efficiency Increase', value: '10x' },
              { label: 'Cost Reduction', value: '60%' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-bastl-blue-600 mb-2">{stat.value}</div>
                <div className="text-sm text-bastl-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;