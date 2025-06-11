'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const CaseStudy = () => {
  const [selectedMonth, setSelectedMonth] = useState(12);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateMonthlySavings = (monthsUsed: number) => {
    const hoursPerMonth = 2500;
    const hourlyRate = 35;
    const totalHoursSaved = monthsUsed * hoursPerMonth;
    const totalCostSaved = totalHoursSaved * hourlyRate;
    
    // Additional monthly savings categories
    const conflictReductionPerMonth = 750; // Cost of conflicts avoided per month
    const efficiencyGainsPerMonth = 425; // Additional efficiency savings per month
    const adminSavingsPerMonth = 325; // Administrative savings per month
    
    const totalConflictSaved = monthsUsed * conflictReductionPerMonth;
    const totalEfficiencySaved = monthsUsed * efficiencyGainsPerMonth;
    const totalAdminSaved = monthsUsed * adminSavingsPerMonth;
    
    return {
      monthsUsed,
      hoursSaved: totalHoursSaved,
      costSaved: totalCostSaved,
      conflictSaved: totalConflictSaved,
      efficiencySaved: totalEfficiencySaved,
      adminSaved: totalAdminSaved,
      totalSaved: totalCostSaved + totalConflictSaved + totalEfficiencySaved + totalAdminSaved,
      monthlyHours: hoursPerMonth,
      monthlySavings: (totalCostSaved + totalConflictSaved + totalEfficiencySaved + totalAdminSaved) / monthsUsed
    };
  };

  const savings = calculateMonthlySavings(selectedMonth);

  const handleMonthChange = (value: number) => {
    setIsCalculating(true);
    setSelectedMonth(value);
    setTimeout(() => setIsCalculating(false), 300);
  };

  const caseStudyMetrics = [
    { label: "Hours Saved/Month", value: "2,500 hours", color: "text-blue-600" },
    { label: "Monthly Savings", value: `$${Math.round(savings.monthlySavings).toLocaleString()}`, color: "text-green-600" },
    { label: "Payback Period", value: "< 1 month", color: "text-gray-900" },
    { label: "ROI After 12 Months", value: "1,200%+", color: "text-purple-600" }
  ];

  // Generate monthly breakdown data
  const monthlyBreakdown = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    const monthData = calculateMonthlySavings(month);
    return {
      month: `Month ${month}`,
      hours: month * 2500,
      savings: Math.round(monthData.totalSaved / month)
    };
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-16 text-center font-manrope"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Monthly Savings Calculator
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Monthly Results Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-100 to-blue-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-manrope">
                Monthly Impact Results
              </h3>
            </div>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-4 font-inter">
                <span className="font-semibold">Consistent Monthly Savings:</span> Our AI scheduling system 
                saves funeral homes exactly 2,500 hours each month through automated coordination, 
                conflict prevention, and streamlined operations.
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
                  <div className="text-sm text-gray-600 mb-1 font-inter">{metric.label}</div>
                  <div className={`text-lg font-bold ${metric.color} font-manrope`}>{metric.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Monthly Breakdown Chart */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 font-manrope">Cumulative Hours Saved</h4>
              <div className="space-y-2">
                {monthlyBreakdown.slice(0, 6).map((month, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 font-inter">{month.month}</span>
                    <div className="flex items-center">
                      <div className="w-24 h-2 bg-gray-200 rounded-full mr-2">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                          style={{ width: `${(month.hours / 30000) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 font-manrope">{month.hours.toLocaleString()}h</span>
                    </div>
                  </div>
                ))}
                <div className="text-xs text-gray-500 text-center mt-2 font-inter">
                  View calculator for months 7-12 →
                </div>
              </div>
            </div>
          </motion.div>

          {/* Monthly Calculator Card */}
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
              <h3 className="text-2xl font-bold font-manrope">
                Calculate Cumulative Savings
              </h3>
            </div>
            
            <div className="space-y-6">
              {/* Month Slider */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium font-inter">
                    Months of usage
                  </label>
                  <span className="text-2xl font-bold font-manrope">{selectedMonth}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={selectedMonth}
                  onChange={(e) => handleMonthChange(parseInt(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${((selectedMonth - 1) / 11) * 100}%, rgba(255,255,255,0.2) ${((selectedMonth - 1) / 11) * 100}%, rgba(255,255,255,0.2) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-1 font-inter">
                  <span>1 month</span>
                  <span>12 months</span>
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
                    <span className="text-gray-300 font-inter">Total Hours Saved</span>
                    <span className="font-bold text-xl font-manrope">{savings.hoursSaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-inter">Staff Time Value</span>
                    <span className="font-bold text-xl font-manrope">${savings.costSaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-inter">Conflicts Avoided</span>
                    <span className="font-bold text-xl font-manrope">${savings.conflictSaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-inter">Efficiency Gains</span>
                    <span className="font-bold text-xl font-manrope">${savings.efficiencySaved.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-inter">Administrative Savings</span>
                    <span className="font-bold text-xl font-manrope">${savings.adminSaved.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold font-inter">Total Cumulative Savings</span>
                    <motion.span 
                      className="text-3xl font-bold text-green-400 font-manrope"
                      key={savings.totalSaved}
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ${savings.totalSaved.toLocaleString()}
                    </motion.span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-sm text-gray-400 font-inter">Average per month</span>
                    <span className="text-lg font-semibold text-blue-300 font-manrope">
                      ${Math.round(savings.totalSaved / selectedMonth).toLocaleString()}
                    </span>
                  </div>
                </div>
              </motion.div>

              <div className="bg-gradient-to-r from-gray-800/50 to-blue-800/50 border border-white/20 rounded-xl p-4">
                <p className="text-sm text-gray-200 font-inter">
                  <span className="font-semibold">Guaranteed Results:</span> Every month, our AI system 
                  saves exactly 2,500 hours through automated scheduling, conflict prevention, 
                  and streamlined funeral home operations.
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
          <p className="text-lg text-gray-600 mb-6 font-inter">
            Ready to start saving 2,500 hours every month?
          </p>
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-gray-900 to-blue-900 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-900 hover:to-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-manrope"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Saving Hours Today
            </motion.button>
          </Link>
        </motion.div>

        {/* Pilot Data Disclaimer */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500 font-inter">
            Based on 2025 modeling
          </p>
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