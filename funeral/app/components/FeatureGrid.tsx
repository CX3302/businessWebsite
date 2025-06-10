'use client';

import { motion } from 'framer-motion';

const FeatureGrid = () => {
  const features = [
    {
      feature: "Vendor scheduling",
      benefit: "Auto‑matches vendors & chapel slots",
      icon: "🏢"
    },
    {
      feature: "Auto‑confirmations", 
      benefit: "Instant email/SMS to all parties",
      icon: "📨"
    },
    {
      feature: "Smart suggestions",
      benefit: "Recommends optimal times & resources", 
      icon: "💡"
    },
    {
      feature: "Calendar sync",
      benefit: "Google & Outlook two‑way",
      icon: "📅"
    },
    {
      feature: "Role permissions",
      benefit: "Staff see only what they need",
      icon: "👥"
    },
    {
      feature: "PDF export & integrations",
      benefit: "Push data to forms & BI tools",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-funeral-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Feature Grid
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Comprehensive tools designed specifically for funeral home operations
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:bg-white border-2 border-transparent hover:border-funeral-black"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-funeral-black mb-3">
                  {feature.feature}
                </h3>
                <p className="text-gray-600 text-lg">
                  {feature.benefit}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-funeral-black to-funeral-gray text-white rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">All Features. One Platform.</h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Every tool you need to run a modern funeral home, integrated seamlessly with your existing workflow.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/20 px-4 py-2 rounded-full">Real-time Updates</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Mobile Access</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">24/7 Support</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Data Security</span>
            <span className="bg-white/20 px-4 py-2 rounded-full">Easy Setup</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureGrid; 