'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation that learns and adapts.',
    icon: '🤖'
  },
  {
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with our AI-powered analytics.',
    icon: '📊'
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions designed specifically for your business needs.',
    icon: '🎯'
  },
  {
    title: 'Integration Services',
    description: 'Seamlessly integrate AI automation with your existing systems.',
    icon: '🔄'
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We leverage cutting-edge AI technology to transform your business operations
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo; 