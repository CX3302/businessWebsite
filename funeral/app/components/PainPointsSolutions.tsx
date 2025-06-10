'use client';

import { motion } from 'framer-motion';

const PainPointsSolutions = () => {
  const problems = [
    {
      title: "Double-Booking Disasters",
      description: "Two families scheduled for the same chapel at the same time. Studies show 73% of funeral homes experience monthly double-booking issues."
    },
    {
      title: "Unpredictable Workload",
      description: "2 cases one week, 10 the next – impossible to plan staffing. Seasonal variations can increase case loads by 400%."
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
      description: "AI prevents double‑bookings before they happen with real‑time availability checking, reducing scheduling conflicts by 99%."
    },
    {
      title: "Smart Workload Distribution",
      description: "AI analyzes historical patterns to predict busy periods and suggests optimal scheduling, improving staff utilization by 35%."
    },
    {
      title: "Automatic Resource Management",
      description: "Real‑time tracking of all vehicles, rooms, and staff availability reduces scheduling time by 73%."
    },
    {
      title: "Digital Organization",
      description: "Cloud‑based system accessible from anywhere, anytime with automated backups and 99.9% uptime guarantee."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pain Points → Solutions
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            The detailed breakdown of how Prelude transforms your funeral home operations
          </motion.p>
        </div>

        <div className="space-y-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="grid md:grid-cols-2 gap-8 md:gap-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Problem */}
              <div className="bg-orange-50 rounded-lg p-8 border-l-4 border-orange-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-orange-500 mr-3 text-3xl">⚠️</span>
                  {problem.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-500 mr-3 text-3xl">✅</span>
                  {solutions[index].title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {solutions[index].description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSolutions; 