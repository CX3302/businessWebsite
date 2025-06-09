'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Benjamin Martindale',
    role: 'CEO',
    description: 'Leads vision and growth after 10+ years scaling construction, aftermarket, and SaaS ventures across North America and Europe. Combines an honours Commerce degree (U of T) with hands-on sales and go-to-market execution. Obsessive about turning messy ops into repeatable revenue engines.',
    imagePath: '/team/benjamin.jpg'
  },
  {
    name: 'James Tan',
    role: 'CTO',
    description: 'Full-stack engineer & ML architect; previously built edge-AI payment systems for 7 000 Shenzhen transit gates. At Bastl he owns product architecture, security, and infrastructure. Passionate about performance tuning, open-source contribution, and mentoring dev teams.',
    imagePath: '/team/james.jpg'
  },
  {
    name: 'Wenjie Zhou',
    role: 'CRO',
    description: 'Research-driven AI strategist bridging theoretical foundations with business applications. Combines deep expertise in machine learning theory and algorithmic optimization with practical business insights. Leads research initiatives in advanced AI architectures while translating complex technical concepts into actionable business strategies.',
    imagePath: '/team/wenjie.jpg'
  }
];

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('There was an error sending your message. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-32">
        {/* Team Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="text-4xl font-bold text-center mb-16">Meet Our Team</h1>
          <div className="grid md:grid-cols-3 gap-12">
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                <div className="mb-6 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                  <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                <h4 className="text-lg text-gray-600 mb-4">{member.role}</h4>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

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
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">Get Started</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  id="company"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                How can we help?
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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