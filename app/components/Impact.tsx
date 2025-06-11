'use client';

import { motion } from 'framer-motion';

const Impact = () => {
  const impacts = [
    {
      title: 'AI-Powered Automation',
      description: 'Our advanced AI systems handle complex tasks with unprecedented accuracy and speed, reducing manual work by up to 90%.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      stats: '90% reduction'
    },
    {
      title: 'Real-time Processing',
      description: 'Process and analyze data in milliseconds, enabling instant decision-making and responsive system adjustments.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stats: '< 500ms latency'
    },
    {
      title: 'Scalable Architecture',
      description: 'Our cloud-native solutions scale automatically with your needs, handling from hundreds to millions of operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      stats: '∞ scalability'
    }
  ];

  return (
    <section className="py-20 bg-bastl-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Transformative Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-bastl-blue-100 max-w-3xl mx-auto"
          >
            Our AI solutions deliver measurable results across all aspects of your business operations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bastl-blue-800 to-bastl-blue-700 transform group-hover:scale-105 transition-transform duration-300 rounded-2xl" />
              <div className="relative bg-bastl-blue-800/50 backdrop-blur-sm p-8 rounded-2xl border border-bastl-blue-700/50 group-hover:border-bastl-blue-600/50 transition-colors duration-300">
                <div className="text-bastl-blue-200 mb-6 group-hover:text-bastl-blue-100 transition-colors duration-300">
                  {impact.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{impact.title}</h3>
                <p className="text-bastl-blue-200 mb-6">{impact.description}</p>
                <div className="text-3xl font-bold text-bastl-accent-400">{impact.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Wave Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 relative h-24 overflow-hidden"
        >
          <svg
            className="absolute w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              d="M0,0 C300,90 900,90 1200,0 L1200,120 L0,120 Z"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact; 