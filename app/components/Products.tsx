'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Products = () => {
  const products = [
    {
      name: "Fareflow",
      description: "Real-time transit payment optimization",
      color: "from-blue-500 to-cyan-500",
      logo: "/logos/Fareflow.png"
    },
    {
      name: "Snapquote",
      description: "Instant, margin-safe construction estimates",
      color: "from-purple-500 to-pink-500",
      logo: "/logos/Snapquote.png"
    },
    {
      name: "Torque",
      description: "Unified parts and vendor tariff coordination",
      color: "from-orange-500 to-yellow-500",
      logo: "/logos/Torque.png"
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
              className="rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white border border-gray-100"
            >
              <div className={`h-48 bg-gradient-to-r ${product.color} p-8 flex items-center justify-center`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 w-32 h-32 flex items-center justify-center">
                  <Image
                    src={product.logo}
                    alt={`${product.name} logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
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