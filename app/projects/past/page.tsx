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

        <div className="space-y-24 mb-32">
          {/* Torque Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/logos/Torque.png"
                  alt="Panacea Aftermarket Co. Logo"
                  width={300}
                  height={100}
                  className="w-full h-auto"
                />
                <blockquote className="mt-8 border-l-4 border-black pl-4 italic text-gray-600">
                  "Torque has revolutionized how we handle tariff tracking, making our operations significantly more efficient and responsive to market changes."
                  <footer className="mt-2 text-sm text-gray-500 not-italic">
                    — Moe Albazadar, Leadership at Panacea Aftermarket Co.
                  </footer>
                </blockquote>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Panacea Aftermarket Co. (Torque)</h2>
                <p className="text-gray-600 mb-6">
                  Built an intelligent tariff management system that transformed how Panacea handles international trade compliance. 
                  The system reduced classification time by 91% and generated $2.1M in annual duty savings through smart inventory routing.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">91%</div>
                    <div className="text-sm text-gray-600">Reduction in Classification Time</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">$2.1M</div>
                    <div className="text-sm text-gray-600">Annual Savings</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Real-time tariff announcement monitoring and updates</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Automated product inclusion/exclusion tracking</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">AI-powered HS code categorization system</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Smart inventory routing recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FareFlow Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-2/3 order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">Rocky Technology (FareFlow)</h2>
                <p className="text-gray-600 mb-6">
                  Engineered a comprehensive transit payment system that revolutionized fare processing 
                  across 7,000+ gates. Our solution delivered unprecedented uptime, enhanced security, 
                  and significant cost savings through intelligent automation and edge computing.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">99.995%</div>
                    <div className="text-sm text-gray-600">System Uptime</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">38%</div>
                    <div className="text-sm text-gray-600">Cloud Cost Reduction</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg mb-4">Technical Achievements</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Edge-inference acceleration across 7,000+ gates</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">90-second rollback capability with 99.995% uptime</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Dynamic fare-capping with 18% CSAT improvement</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">2-second anomaly detection with GNN</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 order-1 md:order-2">
                <Image
                  src="/logos/Fareflow.png"
                  alt="Rocky Technology Logo"
                  width={300}
                  height={100}
                  className="w-full h-auto"
                />
                <blockquote className="mt-8 border-l-4 border-black pl-4 italic text-gray-600">
                  "FareFlow's implementation has transformed our fare gate operations, delivering unprecedented uptime and significant cost savings."
                  <footer className="mt-2 text-sm text-gray-500 not-italic">
                    — Robert Zhang, Leadership at Rocky Technology
                  </footer>
                </blockquote>
              </div>
            </div>
          </motion.div>

          {/* Snapquote Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-full md:w-1/3">
                <Image
                  src="/logos/Snapquote.png"
                  alt="Havenmark Logo"
                  width={300}
                  height={100}
                  className="w-full h-auto"
                />
                <blockquote className="mt-8 border-l-4 border-black pl-4 italic text-gray-600">
                  "Snapquote has revolutionized our quoting process, turning hours of work into minutes while maintaining our pricing accuracy."
                  <footer className="mt-2 text-sm text-gray-500 not-italic">
                    — Johnny Cheng, Leadership at Havenmark
                  </footer>
                </blockquote>
              </div>
              <div className="w-full md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Havenmark (Snapquote)</h2>
                <p className="text-gray-600 mb-6">
                  Developed an intelligent construction quoting system that transformed Havenmark's 
                  estimation process. The solution reduced quote generation time from hours to minutes 
                  while maintaining pricing accuracy and improving workflow integration.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">99%</div>
                    <div className="text-sm text-gray-600">Time Reduction</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black">26%</div>
                    <div className="text-sm text-gray-600">Accuracy Improvement</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg mb-4">System Features</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">AI-powered guided questionnaire engine</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Real-time material cost integration</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Automated margin protection system</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-black mt-2" />
                      <p className="text-gray-600">Instant room-by-room cost breakdown</p>
                    </div>
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