'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SchedulingDetails = () => {
  const [animateProgress, setAnimateProgress] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateProgress(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const progressSection = document.getElementById('progress-section');
    if (progressSection) {
      observer.observe(progressSection);
    }

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      title: "Double-Booking Disasters",
      description: "Two families scheduled for the same chapel at the same time. Studies show 73% of funeral homes experience monthly double-booking issues."
    },
    {
      title: "Unpredictable Workload", 
      description: "2 cases one week, 10 the next - impossible to plan staffing. Seasonal variations can increase case loads by 400%."
    },
    {
      title: "Manual Resource Juggling",
      description: "Constantly checking which hearses, chapels, and staff are available. Average funeral home spends 15+ hours weekly on coordination."
    },
    {
      title: "Paper-Based Confusion",
      description: "Lost schedules, unclear handwriting, outdated information. Manual systems increase scheduling errors by 60%."
    }
  ];

  const solutions = [
    {
      title: "Conflict-Free Scheduling",
      description: "AI prevents double-bookings before they happen with real-time availability checking, reducing scheduling conflicts by 99%."
    },
    {
      title: "Smart Workload Distribution", 
      description: "AI analyzes historical patterns to predict busy periods and suggests optimal scheduling, improving staff utilization by 35%."
    },
    {
      title: "Automatic Resource Management",
      description: "Real-time tracking of all vehicles, rooms, and staff availability reduces scheduling time by 73%."
    },
    {
      title: "Digital Organization",
      description: "Cloud-based system accessible from anywhere, anytime with automated backups and 99.9% uptime guarantee."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-funeral-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            AI Scheduling System: From Chaos to Control
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how our intelligent scheduling transforms your daily operations
          </motion.p>
        </div>

        {/* Problem vs Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border-l-4 border-gray-600 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">⚠️</span>
                Current Challenges
              </h3>
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{problem.title}</h4>
                      <p className="text-gray-700">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-funeral-black text-white border-l-4 border-gray-400 p-6 rounded-r-lg">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">✅</span>
                AI-Powered Solutions
              </h3>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gray-400 text-funeral-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-semibold">{solution.title}</h4>
                      <p className="text-gray-300">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Time Savings Visual */}
        <motion.div 
          id="progress-section"
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-funeral-black mb-6 text-center">Time Savings Per Week</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-lg">Manual Scheduling:</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-gray-600 h-4 rounded-full transition-all duration-2000 ease-out"
                  style={{ width: animateProgress ? '75%' : '0%' }}
                />
              </div>
              <span className="text-lg font-bold text-gray-600">15 hours</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg">With AI Scheduling:</span>
              <div className="flex-1 mx-4 bg-gray-200 rounded-full h-4">
                <div 
                  className="bg-funeral-black h-4 rounded-full transition-all duration-2000 ease-out"
                  style={{ width: animateProgress ? '25%' : '0%' }}
                />
              </div>
              <span className="text-lg font-bold text-funeral-black">4 hours</span>
            </div>
            <div className="text-center mt-6">
              <div className="inline-block bg-funeral-black text-white px-6 py-3 rounded-lg">
                <span className="text-2xl font-bold">11 hours saved</span> per week for family care
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SchedulingDetails;