'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const ROICalculator = () => {
  const [formData, setFormData] = useState({
    services: 100,
    avgPrice: 5000,
    followupRate: 15
  });

  const [results, setResults] = useState({
    additionalRevenue: 60000,
    roiPercent: 400
  });

  const calculateROI = () => {
    const { services, avgPrice, followupRate } = formData;
    
    // Calculate additional revenue from improved follow-up (95% vs current rate)
    const improvedFollowup = 95;
    const additionalFollowups = services * ((improvedFollowup - followupRate) / 100);
    
    // Conservative estimates:
    // 20% of additional follow-ups generate $1500 in memorial/preneed revenue
    // 5% convert to pre-need plans averaging $5000
    const memorialRevenue = additionalFollowups * 0.20 * 1500;
    const preneedRevenue = additionalFollowups * 0.05 * 5000;
    const totalAdditionalRevenue = memorialRevenue + preneedRevenue;
    
    // System costs $500/month = $6000/year
    const systemCost = 6000;
    
    // Time savings: 11 hours per week = 572 hours per year
    // At $25/hour value = $14,300 in staff time savings
    const timeSavings = 572 * 25;
    const totalValue = totalAdditionalRevenue + timeSavings;
    const totalROI = Math.round((totalValue / systemCost) * 100);
    
    setResults({
      additionalRevenue: Math.round(totalAdditionalRevenue),
      roiPercent: totalROI
    });
  };

  useEffect(() => {
    calculateROI();
  }, [formData]);

  const handleInputChange = (field: string, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="py-16 bg-funeral-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Calculate Your Return on Investment
          </motion.h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how much additional revenue our AI solutions can generate for your funeral home
          </motion.p>
        </div>

        <motion.div 
          className="bg-funeral-gray rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Current Situation</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Services per year:</label>
                  <input 
                    type="number" 
                    value={formData.services}
                    onChange={(e) => handleInputChange('services', parseInt(e.target.value) || 0)}
                    className="w-full p-3 rounded bg-white text-funeral-black" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Average service price ($):</label>
                  <input 
                    type="number" 
                    value={formData.avgPrice}
                    onChange={(e) => handleInputChange('avgPrice', parseInt(e.target.value) || 0)}
                    className="w-full p-3 rounded bg-white text-funeral-black" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Current follow-up rate (%):</label>
                  <input 
                    type="number" 
                    value={formData.followupRate}
                    onChange={(e) => handleInputChange('followupRate', parseInt(e.target.value) || 0)}
                    className="w-full p-3 rounded bg-white text-funeral-black" 
                  />
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">With Bastl AI</h3>
              <div className="space-y-4">
                <div className="bg-gray-600 p-4 rounded">
                  <div className="text-2xl font-bold">11</div>
                  <div className="text-sm">Hours saved per week</div>
                </div>
                <div className="bg-white text-funeral-black p-4 rounded">
                  <div className="text-2xl font-bold">${results.additionalRevenue.toLocaleString()}</div>
                  <div className="text-sm">Additional annual revenue</div>
                </div>
                <div className="bg-gray-400 text-funeral-black p-4 rounded">
                  <div className="text-2xl font-bold">{results.roiPercent}%</div>
                  <div className="text-sm">Return on Investment</div>
                </div>
              </div>
            </div>
          </div>
          <button 
            onClick={calculateROI}
            className="w-full mt-8 bg-white text-funeral-black hover:bg-gray-200 font-bold py-3 px-6 rounded transition-colors"
          >
            Recalculate ROI
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;