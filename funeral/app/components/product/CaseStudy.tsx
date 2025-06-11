'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const CaseStudy = () => {
  const [services, setServices] = useState(150);

  const calculateSavings = (servicesPerYear: number) => {
    const hoursPerService = 10;
    const hoursSaved = servicesPerYear * hoursPerService;
    const overtimeCost = hoursSaved * 25;
    return {
      hoursSaved: Math.round(hoursSaved),
      costSaved: Math.round(overtimeCost)
    };
  };

  const savings = calculateSavings(services);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          ROI Calculator & Case Study
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Real Results
            </h3>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">73%</div>
                  <div className="text-sm text-gray-600">Monthly double-bookings</div>
                  <div className="text-xs text-gray-500 mt-1">BEFORE</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">0.1%</div>
                  <div className="text-sm text-gray-600">Conflict rate</div>
                  <div className="text-xs text-gray-500 mt-1">AFTER</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-orange-600">15+</div>
                  <div className="text-sm text-gray-600">Hours/week coordination</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">2</div>
                  <div className="text-sm text-gray-600">Hours/week oversight</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 text-white rounded-xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Calculate Your Savings
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Services per year: {services}
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={services}
                  onChange={(e) => setServices(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="bg-white/10 rounded-lg p-6 space-y-4">
                <div className="flex justify-between">
                  <span>Hours saved annually:</span>
                  <span className="font-bold text-green-400">{savings.hoursSaved}</span>
                </div>
                <div className="flex justify-between">
                  <span>Cost savings:</span>
                  <span className="font-bold text-green-400">${savings.costSaved.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pilot Data Disclaimer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500">
            Based on 2025 modeling
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudy; 