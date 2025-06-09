import Navigation from '../../components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
                  src="/logos/Torque.png"
                  alt="Panacea Aftermarket Co. Logo"
                  width={300}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Panacea Aftermarket Co. (Torque)</h2>
                <p className="text-gray-600 mb-6">
                  Developing an AI-powered system to track and optimize tariff classifications 
                  for automotive parts, projected to save $2.1M annually in duties and reduce 
                  classification time by 91%.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">91%</div>
                    <div className="text-sm text-gray-600">Reduction in Classification Time</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">$2.1M</div>
                    <div className="text-sm text-gray-600">Projected Annual Savings</div>
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