'use client';

import { motion } from 'framer-motion';

const Mission = () => {
  const principles = [
    {
      title: "Precision first",
      description: "We quantify before we code, ensuring every release moves a metric."
    },
    {
      title: "Human-centric AI",
      description: "Tech augments people; it never eclipses their judgment."
    },
    {
      title: "Open foundation",
      description: "Wherever possible we contribute components back to the community."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our mission is to automate every high-friction operation—from transit payments to luxury home quotes—so 
            businesses can scale faster with fewer resources and a smaller footprint.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
              <p className="text-gray-600">{principle.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Mission; 