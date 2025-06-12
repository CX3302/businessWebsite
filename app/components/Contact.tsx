'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-bastl-tech-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-bastl-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-bastl-tech-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="text-bastl-tech-400">Email:</span>
                  <a href="mailto:hello@bastl.ai" className="ml-2 hover:text-white transition-colors">
                    hello@bastl.ai
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="text-bastl-tech-400">Phone:</span>
                  <a href="tel:+15551234567" className="ml-2 hover:text-white transition-colors">
                    (555) 123-4567
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-bastl-tech-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-bastl-gray-300">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 bg-bastl-tech-800 rounded-2xl p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-bastl-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-bastl-accent-600 border border-bastl-tech-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-bastl-tech-500 text-white placeholder-bastl-tech-400"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-bastl-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-bastl-accent-600 border border-bastl-tech-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-bastl-tech-500 text-white placeholder-bastl-tech-400"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-bastl-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-bastl-accent-600 border border-bastl-tech-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-bastl-tech-500 text-white placeholder-bastl-tech-400"
                placeholder="How can we help?"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-bastl-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 bg-bastl-accent-600 border border-bastl-tech-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-bastl-tech-500 text-white placeholder-bastl-tech-400 resize-none"
                placeholder="Tell us about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-bastl-energy-600 hover:bg-bastl-energy-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 