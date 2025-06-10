'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface UpcomingProductProps {
  productInfo: {
    name: string;
    description: string;
    features: string[];
    eta: string;
  };
}

const UpcomingProduct = ({ productInfo }: UpcomingProductProps) => {
  const progressPercentage = {
    "Q2 2024": 75,
    "Q3 2024": 45,
    "Q4 2024": 25,
    "Q1 2025": 15
  }[productInfo.eta] || 30;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full mb-6">
            <motion.div
              className="w-2 h-2 bg-blue-500 rounded-full mr-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Coming Soon
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-funeral-black mb-6">
            {productInfo.name}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {productInfo.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Expected Launch */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-funeral-black mb-2">Expected Launch</h3>
              <div className="text-3xl font-bold text-blue-600">{productInfo.eta}</div>
            </div>

            {/* Development Progress */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-funeral-black mb-4">Development Progress</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Current Status</span>
                <span className="text-sm font-medium text-funeral-black">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </div>

            {/* Planned Features */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-lg font-semibold text-funeral-black mb-6">Planned Features</h3>
              <div className="space-y-4">
                {productInfo.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-20"
          >
            <div className="bg-gradient-to-br from-funeral-black to-funeral-gray rounded-2xl p-8 text-white text-center">
              <motion.div
                className="text-6xl mb-6"
                animate={{ 
                  rotateY: [0, 180, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                🚀
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-4">In Active Development</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our development team is working hard to bring this feature to life. 
                We're committed to delivering innovative solutions that transform funeral home operations.
              </p>

              <div className="space-y-6">
                <Link href="/contact">
                  <motion.button
                    className="w-full bg-white text-funeral-black px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Notified When Ready
                  </motion.button>
                </Link>
                
                <Link href="/product">
                  <motion.button
                    className="w-full bg-transparent text-white px-6 py-4 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-funeral-black transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    See Current Product
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 bg-amber-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-start">
                <div className="text-2xl mr-3">💡</div>
                <div>
                  <h4 className="font-semibold text-funeral-black mb-2">Have Input?</h4>
                  <p className="text-sm text-gray-600">
                    We value feedback from funeral home professionals. Share your thoughts on what features would be most valuable for your operations.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingProduct; 