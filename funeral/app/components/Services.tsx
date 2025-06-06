'use client';

import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "AI-Powered Scheduling System",
      subtitle: "Eliminate Double-Bookings & Optimize Resource Management",
      problem: {
        title: "The Challenge",
        points: [
          "Whiteboards and outdated calendars lead to double-bookings of chapels, hearses, and staff",
          "Unpredictable case loads create scheduling chaos and staff burnout",
          "Manual allocation of vehicles, drivers, and facilities wastes time",
          "One week might bring 2 cases, the next week 10 - impossible to predict"
        ]
      },
      solution: {
        title: "Our AI Solution",
        points: [
          "Real-time conflict detection prevents double-bookings automatically",
          "Intelligent resource allocation across staff, vehicles, and facilities",
          "Seamless sync between all team members and external vendors",
          "Smart location and logistics planning based on case requirements",
          "Predictive scheduling helps anticipate busy periods"
        ]
      },
      icon: "📅"
    },
    {
      title: "Automated Aftercare & Revenue Optimization",
      subtitle: "Never Miss Follow-Up Opportunities Again",
      problem: {
        title: "The Challenge",
        points: [
          "Most funeral homes don't follow up after services end",
          "Grieving families are left without ongoing support",
          "Missed opportunities for memorial sales and preneed plans",
          "Lost referral potential from satisfied families",
          "No systematic approach to maintaining relationships"
        ]
      },
      solution: {
        title: "Our AI Solution",
        points: [
          "Automated CRM with thoughtful follow-up sequences (3-day, 30-day, anniversary)",
          "AI-generated personalized SMS and email messages",
          "Integrated e-commerce platform for memorial keepsakes",
          "Seamless Shopify → Stripe → QuickBooks integration",
          "Drives revenue and customer loyalty with minimal staff effort"
        ]
      },
      icon: "💝"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-funeral-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Professional Solutions
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Designed specifically for funeral homes to enhance service quality while reducing operational stress
          </motion.p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-10">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-3xl md:text-4xl font-bold text-funeral-black mb-3">
                  {service.title}
                </h3>
                <p className="text-xl text-funeral-gray">
                  {service.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Problem Section */}
                <div className="bg-white rounded-lg p-6 border-l-4 border-gray-600">
                  <h4 className="text-2xl font-bold text-funeral-black mb-4 flex items-center">
                    <span className="text-gray-600 mr-2">⚠️</span>
                    {service.problem.title}
                  </h4>
                  <ul className="space-y-3">
                    {service.problem.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-gray-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Section */}
                <div className="bg-funeral-black text-white rounded-lg p-6 border-l-4 border-gray-400">
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="text-gray-400 mr-2">✅</span>
                    {service.solution.title}
                  </h4>
                  <ul className="space-y-3">
                    {service.solution.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-gray-400 mr-2 mt-1">•</span>
                        <span className="text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-funeral-black text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-funeral-gray transition-colors"
          >
            Schedule Your Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;