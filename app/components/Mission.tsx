'use client';

import { motion } from 'framer-motion';

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stats = [
  { value: '99.9%', label: 'Automation Success Rate' },
  { value: '500ms', label: 'Processing Speed' },
  { value: '10x', label: 'Efficiency Increase' },
  { value: '60%', label: 'Cost Reduction' }
];

const Mission = () => {
  return (
    <section id="mission" className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
                      <span className="bg-bastl-accent-100 text-bastl-accent-700 px-4 py-1 rounded-full text-sm font-medium">
            Our Mission
          </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-bastl-black mt-6 mb-4"
          >
            Transforming Business Through AI
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We harness the power of artificial intelligence to revolutionize how businesses operate,
            making them more efficient, data-driven, and future-ready.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUpVariant}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-bastl-accent-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Vision and Approach */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUpVariant}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-bastl-tech-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-bastl-black mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To create a world where every business process is optimized through intelligent automation,
                enabling companies to focus on innovation and growth rather than repetitive tasks.
              </p>
            </div>

            <div className="bg-bastl-tech-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Approach
              </h3>
              <p className="text-bastl-gray-300">
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
            className="bg-bastl-tech-200 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-bastl-black mb-6">
              Key Differentiators
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-bastl-accent-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-bastl-black">Lightning Fast</h4>
                  <p className="text-gray-600">Process automation that operates at the speed of thought</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-bastl-accent-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-bastl-black">Enterprise Security</h4>
                  <p className="text-gray-600">Bank-grade security with end-to-end encryption</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-bastl-accent-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-bastl-black">Continuous Learning</h4>
                  <p className="text-gray-600">Systems that evolve and improve with your business</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 