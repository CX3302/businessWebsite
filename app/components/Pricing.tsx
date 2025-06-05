'use client';

import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Starter',
    price: '999',
    description: 'Perfect for small businesses starting with AI automation',
    features: [
      'Basic AI process automation',
      'Up to 5 automated workflows',
      'Email support',
      'Basic analytics',
      'Monthly performance reports'
    ]
  },
  {
    name: 'Professional',
    price: '2,499',
    description: 'Ideal for growing companies with complex automation needs',
    features: [
      'Advanced AI automation',
      'Unlimited workflows',
      'Priority support',
      'Advanced analytics',
      'Weekly performance reports',
      'Custom integrations',
      'Dedicated account manager'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Full-scale AI implementation',
      'Custom AI model development',
      '24/7 premium support',
      'Real-time analytics',
      'Daily performance reports',
      'Custom integrations',
      'Dedicated team',
      'On-site training'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Pricing Plans
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose the perfect plan for your business needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-purple-600' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.popular && (
                <span className="absolute top-0 right-6 -translate-y-1/2 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
              </div>
              <p className="text-gray-600 mb-8">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-full text-lg font-semibold transition-colors ${
                plan.popular
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing; 