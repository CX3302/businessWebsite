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
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
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
      icon: (
        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
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
              className="bg-white rounded-xl p-8 md:p-12 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-10">
                <div className="w-24 h-24 bg-blue-800 rounded-xl flex items-center justify-center mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-xl text-gray-600">
                  {service.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Problem Section */}
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-400">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    {service.problem.title}
                  </h4>
                  <ul className="space-y-3">
                    {service.problem.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-gray-400 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution Section */}
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-lg p-6 border-l-4 border-blue-400">
                  <h4 className="text-2xl font-bold mb-4 flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {service.solution.title}
                  </h4>
                  <ul className="space-y-3">
                    {service.solution.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-gray-300 mr-2 mt-1">•</span>
                        <span className="text-gray-200">{point}</span>
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
            className="bg-gradient-to-r from-gray-900 to-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-900 hover:to-gray-900 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Schedule Your Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;