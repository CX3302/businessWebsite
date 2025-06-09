'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How quickly can you integrate with our existing systems?',
    answer: 'Our integration process typically takes 2-4 weeks, depending on your system complexity. We provide dedicated technical support throughout the process and have experience with most major enterprise systems. Our modular architecture allows for rapid deployment while maintaining security and reliability.'
  },
  {
    question: 'What kind of ROI can we expect from your AI solutions?',
    answer: 'Our clients typically see ROI within the first 3-6 months of deployment. This includes average efficiency improvements of 30-40% in automated processes, 25% reduction in operational costs, and 50% faster decision-making cycles. We provide detailed analytics and tracking to measure your specific returns.'
  },
  {
    question: 'How do you ensure data security and privacy?',
    answer: 'We maintain the highest standards of data security with SOC 2 Type II compliance and end-to-end encryption. Your data never leaves your secure environment, and we implement role-based access controls. Our systems are regularly audited by third-party security firms, and we provide detailed documentation of our security measures.'
  }
];

export default function GetStartedPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    // Submit the form data
    const formData = new FormData(form);
    fetch('https://formsubmit.co/vincent.zhou026@gmail.com', {
      method: 'POST',
      body: formData
    })
    .then(() => {
      setShowSuccess(true);
      form.reset();
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error submitting the form. Please try again.');
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-32">
        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <span className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </div>
                  {openFaq === index && (
                    <p className="mt-4 text-gray-600 leading-relaxed">{faq.answer}</p>
                  )}
                </button>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto relative"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Get Started</h2>
          
          {/* Success Message */}
          <AnimatePresence>
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-0 left-0 right-0 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 text-center"
              >
                Thank you for your message! We'll be in touch soon.
              </motion.div>
            )}
          </AnimatePresence>

          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <input type="hidden" name="_next" value="https://eff53a9b.businessWebsite-b20.pages.dev/get-started" />
            <input type="hidden" name="_subject" value="New Contact Form Submission" />
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                How can we help?
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Submit Request
            </button>
          </form>
        </motion.section>
      </div>
    </main>
  );
} 