'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    funeralHome: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-funeral-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Book a Demo
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            See how Prelude can eliminate double-bookings and transform your funeral home operations
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Demo Form */}
          <motion.div
            className="bg-gray-50 rounded-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-funeral-black mb-8">Schedule Your Demo</h2>
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-funeral-black focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-funeral-black focus:border-transparent"
                      placeholder="john@funeralhome.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Funeral Home Name *
                    </label>
                    <input
                      type="text"
                      name="funeralHome"
                      value={formData.funeralHome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-funeral-black focus:border-transparent"
                      placeholder="Smith Funeral Home"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-funeral-black focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your current scheduling challenges
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-funeral-black focus:border-transparent"
                    placeholder="Describe your current pain points with scheduling..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-funeral-black text-white px-6 py-4 rounded-md text-lg font-semibold hover:bg-funeral-gray transition-colors"
                >
                  Book My Demo
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">✅</div>
                <h3 className="text-2xl font-bold text-funeral-black mb-4">Demo Scheduled!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in Prelude. We'll contact you within 24 hours to schedule your personalized demo.
                </p>
                <div className="bg-white rounded-lg p-6 border-l-4 border-green-500">
                  <h4 className="font-semibold text-funeral-black mb-2">What to expect:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 30-minute personalized demonstration</li>
                    <li>• Q&A session tailored to your needs</li>
                    <li>• Custom ROI calculation for your funeral home</li>
                    <li>• Implementation timeline discussion</li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>

          {/* Contact Info & Calendly Placeholder */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Calendar Widget Placeholder */}
            <div className="bg-funeral-black text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Schedule Instantly</h3>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">📅</div>
                <p className="text-gray-300 mb-4">
                  Calendly booking widget would be embedded here
                </p>
                <div className="text-sm text-gray-400">
                  Pick a time that works for you from our available slots
                </div>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-funeral-black mb-6">Other Ways to Connect</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-funeral-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-funeral-black">Call Us</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-funeral-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-funeral-black">Email Us</h4>
                    <p className="text-gray-600">hello@prelude.ai</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-funeral-black rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-funeral-black">LinkedIn</h4>
                    <p className="text-gray-600">/company/prelude-ai</p>
                    <p className="text-sm text-gray-500">Connect with our team</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo; 