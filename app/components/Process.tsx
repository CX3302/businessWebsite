'use client';

import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    {
      title: "Observe",
      description: "Map the workflow, study the bottleneck"
    },
    {
      title: "Model",
      description: "Prototype solution / optimisation layers in weeks, not months"
    },
    {
      title: "Prove",
      description: "Ship to a pilot cohort; release when KPIs hit"
    },
    {
      title: "Scale",
      description: "Bigger, better, faster"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-8">How We Work</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Timeline line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-[11px] top-[30px] bottom-0 w-[2px] bg-gray-300" />
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-[6px] w-6 h-6 rounded-full bg-black" />
              
              {/* Content */}
              <div className="pt-1">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 