'use client';

import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      name: "Fareflow",
      description: "Real-time transit payment optimization",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Snapquote",
      description: "Instant, margin-safe construction estimates",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Torque",
      description: "Unified parts and vendor tariff coordination",
      color: "from-orange-500 to-yellow-500"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What We Build</h2>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <div 
              key={index}
              className="rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className={`h-32 bg-gradient-to-r ${product.color}`} />
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products; 