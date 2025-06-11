'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Products = () => {
  const products = [
    {
      name: "Fareflow",
      description: "Real-time transit payment optimization",
      color: "from-bastl-blue-500 to-bastl-blue-700",
      logo: "/logos/Fareflow.png"
    },
    {
      name: "Snapquote",
      description: "Instant, margin-safe construction estimates",
      color: "from-bastl-accent-500 to-bastl-accent-700",
      logo: "/logos/Snapquote.png"
    },
    {
      name: "Torque",
      description: "Unified parts and vendor tariff coordination",
      color: "from-bastl-blue-400 to-bastl-accent-400",
      logo: "/logos/Torque.png"
    }
  ];

  return (
    <section className="py-20 bg-bastl-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-bastl-blue-900 mb-8">What We Build</h2>
          <p className="text-xl text-bastl-gray-700 max-w-3xl mx-auto">
            Our suite of AI-powered solutions helps businesses optimize their operations
            and deliver better customer experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`h-48 bg-gradient-to-r ${product.color} p-6 flex items-center justify-center`}>
                <Image
                  src={product.logo}
                  alt={product.name}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-bastl-blue-900 mb-2">{product.name}</h3>
                <p className="text-bastl-gray-600">{product.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 