'use client';

import { motion } from 'framer-motion';

const Mission = () => {
  const stats = [
    {
      value: '500+',
      label: 'AI Models Deployed',
      description: 'Powering business automation worldwide'
    },
    {
      value: '98%',
      label: 'Accuracy Rate',
      description: 'In process optimization and prediction'
    },
    {
      value: '60%',
      label: 'Cost Reduction',
      description: 'Average client savings through AI automation'
    },
    {
      value: '24/7',
      label: 'System Uptime',
      description: 'Continuous monitoring and optimization'
    }
  ];

  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="bg-bastl-blue-50 text-bastl-blue-600 px-4 py-1 rounded-full text-sm font-medium">
              Our Mission
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-bastl-blue-900 mt-6 mb-4"
          >
            Transforming Business Through AI
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-bastl-gray-600 max-w-3xl mx-auto"
          >
            We harness the power of artificial intelligence to revolutionize how businesses operate,
            making them more efficient, data-driven, and future-ready.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariant}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-bastl-blue-50">
                <div className="text-3xl font-bold text-bastl-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-bastl-blue-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-bastl-gray-600">
                  {stat.description}
                </div>
                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-bastl-blue-500 to-bastl-accent-500 group-hover:w-full transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mission Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-bastl-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-bastl-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-bastl-gray-600">
                To create a world where every business process is optimized through intelligent automation,
                enabling companies to focus on innovation and growth rather than repetitive tasks.
              </p>
            </div>

            <div className="bg-bastl-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Our Approach
              </h3>
              <p className="text-bastl-blue-100">
                We combine cutting-edge AI technology with deep industry expertise to deliver
                solutions that are not just intelligent, but transformative for your business.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-bastl-blue-900 mb-6">
              Key Differentiators
            </h3>
            
            {[
              'Custom AI models tailored to your specific business needs',
              'End-to-end process automation with continuous learning',
              'Real-time analytics and performance monitoring',
              'Scalable solutions that grow with your business'
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bastl-blue-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-bastl-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-bastl-gray-600">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 