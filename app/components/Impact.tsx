'use client';

import { motion } from 'framer-motion';

const Impact = () => {
  const impacts = [
    {
      title: "Downtime erased",
      icon: "⚡" // We can replace these with proper SVG icons later
    },
    {
      title: "Information leveraged",
      icon: "📊"
    },
    {
      title: "Hours Reclaimed",
      icon: "⏰"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why it Matters</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {impacts.map((impact, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="text-6xl mb-6">{impact.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900">{impact.title}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Impact; 