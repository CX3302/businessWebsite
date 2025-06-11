'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Research = () => {
  const researchAreas = [
    {
      title: 'Natural Language Processing',
      description: 'Advanced algorithms for understanding and generating human language, powering intelligent automation systems.',
      stats: '98% accuracy',
      image: '/images/nlp.jpg',
      technologies: ['BERT', 'GPT', 'Transformer']
    },
    {
      title: 'Computer Vision',
      description: 'State-of-the-art visual recognition systems for automated quality control and process monitoring.',
      stats: '99.9% precision',
      image: '/images/vision.jpg',
      technologies: ['CNN', 'YOLO', 'ResNet']
    },
    {
      title: 'Predictive Analytics',
      description: 'Machine learning models that forecast trends and identify patterns in complex business data.',
      stats: '95% prediction rate',
      image: '/images/analytics.jpg',
      technologies: ['XGBoost', 'LSTM', 'Prophet']
    }
  ];

  const publications = [
    {
      title: 'Optimizing Business Workflows with AI',
      conference: 'IEEE International Conference 2024',
      link: '#'
    },
    {
      title: 'Neural Networks in Process Automation',
      conference: 'AI Summit 2024',
      link: '#'
    },
    {
      title: 'The Future of Intelligent Systems',
      conference: 'Tech Symposium 2024',
      link: '#'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-bastl-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <span className="bg-bastl-blue-900 text-white px-4 py-1 rounded-full text-sm font-medium">
              Research & Innovation
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold text-bastl-blue-900 mt-6 mb-4"
          >
            Advancing AI Technology
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-bastl-gray-600 max-w-3xl mx-auto"
          >
            Our research team pushes the boundaries of what's possible with artificial intelligence
          </motion.p>
        </div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bastl-blue-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-xl mb-2">{area.title}</div>
                  <div className="text-bastl-blue-100">{area.stats}</div>
                </div>
              </div>
              
              <p className="text-bastl-gray-600 mb-4">{area.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-bastl-blue-50 text-bastl-blue-600 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Publications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-bastl-blue-50"
        >
          <h3 className="text-2xl font-bold text-bastl-blue-900 mb-6">Latest Publications</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-between border-b border-bastl-blue-50 pb-6 last:border-0 last:pb-0"
              >
                <div>
                  <h4 className="text-lg font-semibold text-bastl-blue-900 mb-1">{pub.title}</h4>
                  <p className="text-bastl-gray-600">{pub.conference}</p>
                </div>
                <a
                  href={pub.link}
                  className="text-bastl-blue-600 hover:text-bastl-blue-700 transition-colors"
                >
                  Read More →
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a 
            href="/research" 
            className="inline-flex items-center space-x-2 text-bastl-blue-600 font-semibold group"
          >
            <span>Explore All Research</span>
            <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Research; 