'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CaseStudy = () => {
  const [services, setServices] = useState(150);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateSavings = (servicesPerYear: number) => {
    // Updated calculations based on industry research
    const hoursPerService = 2.5; // More realistic time per service for scheduling/coordination
    const hoursSaved = servicesPerYear * hoursPerService;
    const hourlyRate = 35; // Updated average hourly rate for funeral staff
    const overtimeCost = hoursSaved * hourlyRate;
    
    // Conflict reduction - based on research showing significant conflict costs
    const conflictReduction = servicesPerYear * 0.85 * 250; // Higher cost per conflict avoided
    
    // Efficiency gains - automation and streamlined processes
    const efficiencyGains = servicesPerYear * 0.45 * 85; // Better efficiency multiplier
    
    // Additional savings from reduced phone calls, paperwork, etc.
    const administrativeSavings = servicesPerYear * 0.65 * 45;
    
    return {
      hoursSaved: Math.round(hoursSaved),
      costSaved: Math.round(overtimeCost),
      conflictSaved: Math.round(conflictReduction),
      efficiencySaved: Math.round(efficiencyGains),
      adminSaved: Math.round(administrativeSavings),
      totalSaved: Math.round(overtimeCost + conflictReduction + efficiencyGains + administrativeSavings)
    };
  };

  const savings = calculateSavings(services);

  const handleSliderChange = (value: number) => {
    setIsCalculating(true);
    setServices(value);
    setTimeout(() => setIsCalculating(false), 300);
  };

  const caseStudyMetrics = [
    { label: "Before Prelude", value: "15+ conflicts/month", color: "text-red-600" },
    { label: "After Prelude", value: "Zero conflicts", color: "text-green-600" },
    { label: "Time Saved", value: "11+ hours/week", color: "text-gray-900" },
    { label: "ROI Period", value: "< 3 months", color: "text-gray-700" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Calculate Your ROI
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Real Results Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Real Customer Results
              </h3>
            </div>
            
            <div className="mb-8">
              <blockquote className="text-gray-700 italic mb-4">
                "We went from constant scheduling chaos to complete peace of mind. 
                The AI handles everything automatically — it's like having a scheduling 
                expert working 24/7."
              </blockquote>
              <p className="text-sm text-gray-600 font-semibold">
                — Sarah Mitchell, Mitchell Funeral Home
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {caseStudyMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-xl text-center border border-gray-100"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className={`text-lg font-bold ${metric.color}`}>{metric.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ROI Calculator Card */}
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-2xl p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold">
                Your Potential Savings
              </h3>
            </div>
            
            <div className="space-y-6">
              {/* Services Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium">
                    Services per year
                  </label>
                  <span className="text-2xl font-bold">{services}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="500"
                  value={services}
                  onChange={(e) => handleSliderChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${((services - 50) / 450) * 100}%, rgba(255,255,255,0.2) ${((services - 50) / 450) * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>50</span>
                  <span>500</span>
                </div>
              </div>

              {/* Savings Breakdown */}
              <motion.div 
                className="bg-white/10 backdrop-blur rounded-xl p-6 space-y-4"
                animate={{ scale: isCalculating ? 0.95 : 1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Staff Time Saved</span>
                    <span className="font-bold text-xl">${savings.costSaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Conflicts Avoided</span>
                    <span className="font-bold text-xl">${savings.conflictSaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Efficiency Gains</span>
                    <span className="font-bold text-xl">${savings.efficiencySaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Administrative Savings</span>
                    <span className="font-bold text-xl">${savings.adminSaved.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total Annual Savings</span>
                    <motion.span 
                      className="text-3xl font-bold text-green-400"
                      key={savings.totalSaved}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${savings.totalSaved.toLocaleString()}
                    </motion.span>
                  </div>
                </div>
              </motion.div>

              <div className="bg-gradient-to-r from-gray-800/50 to-blue-800/50 border border-white/20 rounded-xl p-4">
                <p className="text-sm text-gray-200">
                  <span className="font-semibold">Industry Insight:</span> Most funeral homes see 
                  full ROI in less than 3 months and save {savings.hoursSaved} hours annually 
                  through automated scheduling and conflict prevention.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to transform your funeral home operations?
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-gray-900 to-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-900 hover:to-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Custom ROI Report
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
};

export default CaseStudy;