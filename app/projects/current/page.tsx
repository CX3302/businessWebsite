'use client';

import Navigation from '../../components/Navigation';
import { motion } from 'framer-motion';

export default function CurrentProjectsPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Current Projects</h1>
          <p className="text-xl text-gray-600">Our ongoing partnerships and innovations</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center py-16"
        >
          <p className="text-xl text-gray-600">
            Our current projects are under active development. 
            Check back soon for updates on our latest innovations.
          </p>
        </motion.div>
      </div>
    </main>
  );
} 