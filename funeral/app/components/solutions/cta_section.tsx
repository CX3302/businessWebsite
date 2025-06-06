'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const CTASection = () => {
  const [formData, setFormData] = useState({
    funeralHomeName: '',
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will contact you within 24 hours.');
    setFormData({
      funeralHomeName: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-funeral-black mb-6">
              Ready to Transform Your Funeral Home?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the funeral homes already using Bastl AI to save time, reduce stress, and increase revenue.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-funeral-black mb-2">Free 30-Day Trial</h3>
                <p className="text-gray-600">Test both solutions with your real data</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-funeral-black mb-2">Personal Setup</h3>
                <p className="text-gray-600">We'll configure everything for your funeral home</p>
              </div>
            </div>
            <button 
              onClick={scrollToContact}
              className="inline-block bg-funeral-black hover:bg-funeral-gray text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
            >
              Start Your Free Trial Today
            </button>
            <p className="text-sm text-gray-500 mt-4">No credit card required • Setup in 24 hours</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-funeral-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Get Started Today
            </motion.h2>
            <motion.p 
              className="text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contact us to schedule your free consultation and demo
            </motion.p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="text-gray-400 mr-3">📞</span>
                  <span>(555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <span className="text-gray-400 mr-3">✉️</span>
                  <span>funeral@bastl.com</span>
                </p>
                <p className="flex items-center">
                  <span className="text-gray-400 mr-3">⏰</span>
                  <span>Monday-Friday: 8 AM - 6 PM</span>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="funeralHomeName"
                  value={formData.funeralHomeName}
                  onChange={handleChange}
                  placeholder="Funeral Home Name" 
                  required
                  className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" 
                />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required
                  className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" 
                />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address" 
                  required
                  className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" 
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number" 
                  className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400" 
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your current challenges" 
                  rows={4} 
                  className="w-full p-3 rounded bg-funeral-gray text-white placeholder-gray-400"
                />
                <button 
                  type="submit" 
                  className="w-full bg-white text-funeral-black hover:bg-gray-200 font-bold py-3 px-6 rounded transition-colors"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-funeral-gray text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Bastl Funeral Services. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Compassionate technology for caring professionals</p>
        </div>
      </footer>
    </>
  );
};

export default CTASection;