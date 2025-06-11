'use client';

import { motion } from 'framer-motion';

const Process = () => {
  const processes = [
    {
      step: '01',
      title: 'AI Analysis',
      description: 'Our advanced algorithms analyze your existing workflows and identify optimization opportunities using machine learning.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      step: '02',
      title: 'System Design',
      description: 'We architect a custom AI solution that integrates seamlessly with your existing tools and platforms.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our engineering team deploys the solution with zero downtime, ensuring continuous operation of your business.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'The AI system continuously learns and adapts, improving its performance based on real-world data.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="bg-bastl-blue-50 text-bastl-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Our Process
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-bastl-blue-900 mt-6 mb-4"
          >
            How We Transform Your Business
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-bastl-gray-600 max-w-3xl mx-auto"
          >
            Our systematic approach ensures successful AI integration and measurable results
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Connection Lines */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-bastl-blue-100 to-bastl-blue-200 hidden md:block" />
          
          {processes.map((process, index) => (
            <motion.div
              key={process.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-bastl-blue-50">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-bastl-blue-50 rounded-xl flex items-center justify-center group-hover:bg-bastl-blue-100 transition-colors duration-300">
                      <div className="text-bastl-blue-600">
                        {process.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-bastl-blue-600 font-mono text-sm mb-2">
                      Step {process.step}
                    </div>
                    <h3 className="text-2xl font-bold text-bastl-blue-900 mb-4">
                      {process.title}
                    </h3>
                    <p className="text-bastl-gray-600">
                      {process.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-bastl-blue-500 to-bastl-accent-500 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a 
            href="/get-started" 
            className="inline-flex items-center space-x-2 text-bastl-blue-600 font-semibold group"
          >
            <span>Start Your AI Journey</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Process; 