'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-funeral-black mb-6">
              About Bastl Funeral Services
            </h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                As a specialized division of <strong className="text-funeral-black">Bastl</strong>, we bring years of AI and automation expertise specifically to the funeral services industry. 
                We understand the unique challenges funeral homes face and have developed solutions that respect the dignity of your work while modernizing your operations.
              </p>
              <p>
                Our mission is to help funeral directors focus on what matters most - <strong className="text-funeral-black">caring for families during their most difficult times</strong> - 
                while our AI handles the complex scheduling, follow-up, and administrative tasks that can overwhelm your staff.
              </p>
              <p>
                We've worked closely with funeral home owners and staff to understand pain points like double-bookings, missed follow-ups, and the unpredictable nature of case loads. 
                Our solutions are built with <strong className="text-funeral-black">sensitivity, professionalism, and respect</strong> at their core.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-funeral-black mb-6">Why Choose Bastl?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-funeral-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-funeral-black">Industry Expertise</h4>
                  <p className="text-gray-600">Deep understanding of funeral home operations and challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-funeral-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-funeral-black">Respectful Technology</h4>
                  <p className="text-gray-600">Solutions designed with dignity and sensitivity</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-funeral-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-funeral-black">Proven AI Solutions</h4>
                  <p className="text-gray-600">Advanced automation that actually works for your business</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-funeral-black rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-funeral-black">Dedicated Support</h4>
                  <p className="text-gray-600">Ongoing assistance to ensure smooth operations</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-16 bg-funeral-black text-white rounded-xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Operations?</h3>
          <p className="text-xl mb-6 text-gray-300">
            Join funeral homes that have streamlined their operations and improved family care with our AI solutions.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-white text-funeral-black px-8 py-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 