'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SolutionsOverview = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "AI Scheduling System",
      subtitle: "Eliminates double-bookings and optimizes resource allocation",
      features: [
        "Real-time conflict detection",
        "Staff & venue optimization", 
        "Automatic reminders",
        "Mobile accessibility",
        "Integration with existing systems"
      ]
    },
    {
      id: 2,
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Aftercare & Revenue AI",
      subtitle: "Automated follow-ups that generate additional revenue",
      features: [
        "Personalized follow-up messages",
        "Memorial product recommendations",
        "Pre-need plan automation",
        "Grief support resources", 
        "Revenue tracking & analytics"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Two Powerful Solutions for Modern Funeral Homes
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our AI technology addresses the most pressing challenges facing funeral homes today, 
            from chaotic scheduling to missed revenue opportunities.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className="h-80 perspective-1000"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setFlippedCard(solution.id)}
              onHoverEnd={() => setFlippedCard(null)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedCard === solution.id ? 'rotate-y-180' : ''
              }`}>
                {/* Front */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-xl shadow-lg flex flex-col justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-lg text-gray-300">{solution.subtitle}</p>
                    <div className="mt-6 text-sm text-gray-400">Hover to see details</div>
                  </div>
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-blue-500 p-8 rounded-xl shadow-lg flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default SolutionsOverview;