'use client';

import { motion } from 'framer-motion';

const researchAreas = [
  {
    title: 'Natural Language Processing',
    description: 'Advancing conversational AI and text understanding for better human-machine interaction.',
    icon: '🧠',
    highlights: [
      'Advanced sentiment analysis',
      'Contextual understanding',
      'Multilingual support'
    ]
  },
  {
    title: 'Automated Decision Systems',
    description: 'Developing intelligent systems that can make complex decisions in real-time.',
    icon: '🤖',
    highlights: [
      'Real-time processing',
      'Multi-factor analysis',
      'Risk assessment'
    ]
  },
  {
    title: 'Process Mining',
    description: 'Discovering and optimizing business processes through AI-driven analysis.',
    icon: '⚡',
    highlights: [
      'Process discovery',
      'Bottleneck detection',
      'Efficiency optimization'
    ]
  }
];

const publications = [
  {
    title: 'Advancing Business Process Automation through Deep Learning',
    authors: 'Thompson, A., Chen, S., et al.',
    year: '2023',
    journal: 'Journal of Business Automation',
    link: '#'
  },
  {
    title: 'Neural Networks in Enterprise Decision Making',
    authors: 'Rodriguez, M., Parker, E., et al.',
    year: '2023',
    journal: 'AI in Business Quarterly',
    link: '#'
  }
];

const Research = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Research & Innovation
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pushing the boundaries of AI automation through cutting-edge research
          </motion.p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {area.description}
              </p>
              <ul className="space-y-2">
                {area.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center text-gray-600">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <motion.div
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Latest Publications
          </h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {pub.title}
                </h4>
                <p className="text-gray-600 mb-2">{pub.authors}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {pub.journal} • {pub.year}
                  </span>
                  <a 
                    href={pub.link}
                    className="text-purple-600 hover:text-purple-700 font-medium text-sm"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 