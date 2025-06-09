'use client';

import Navigation from '../../components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PastProjectsPage() {
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
          <h1 className="text-4xl font-bold mb-4">Past Projects</h1>
          <p className="text-xl text-gray-600">Success stories from our completed partnerships</p>
        </motion.div>

        <div className="grid gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/logos/Fareflow.png"
                  alt="Rocky Technology Logo"
                  width={300}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Rocky Technology (FareFlow)</h2>
                <p className="text-gray-600 mb-6">
                  Built an ML system to optimize transit payment processing, reducing transaction 
                  costs by 48% and increasing throughput by 312%, now processing over 8M daily 
                  transactions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">48%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">312%</div>
                    <div className="text-sm text-gray-600">Throughput Increase</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/logos/Snapquote.png"
                  alt="Havenmark Logo"
                  width={300}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Havenmark (Snapquote)</h2>
                <p className="text-gray-600 mb-6">
                  Developed an automated construction quoting system that reduced quote generation 
                  time from 2.3 days to 4.1 minutes while improving accuracy by 26%.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">99%</div>
                    <div className="text-sm text-gray-600">Time Reduction</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">26%</div>
                    <div className="text-sm text-gray-600">Accuracy Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 