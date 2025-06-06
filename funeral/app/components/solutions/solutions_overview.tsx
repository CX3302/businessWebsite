'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const SolutionsOverview = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const solutions = [
    {
      id: 1,
      icon: "📅",
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
      icon: "💝",
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
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-funeral-black mb-6"
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
                <div className="absolute inset-0 w-full h-full backface-hidden bg-funeral-black text-white p-8 rounded-lg shadow-lg flex flex-col justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">{solution.icon}</div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-lg text-gray-300">{solution.subtitle}</p>
                    <div className="mt-6 text-sm text-gray-400">Hover to see details</div>
                  </div>
                </div>
                
                {/* Back */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-funeral-black p-8 rounded-lg shadow-lg flex flex-col justify-center">
                  <h4 className="text-xl font-bold text-funeral-black mb-4">Key Features:</h4>
                  <ul className="space-y-2 text-gray-700">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-funeral-black mr-2">•</span>
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