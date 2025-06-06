'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AI-Powered Customer Service',
    description: 'Automated customer support system with natural language processing capabilities.',
    imageUrl: '/projects/customer-service.jpg',
    category: 'Machine Learning',
    status: 'completed' as const
  },
  {
    title: 'Smart Inventory Management',
    description: 'Real-time inventory tracking and prediction system using AI algorithms.',
    imageUrl: '/projects/inventory.jpg',
    category: 'Automation',
    status: 'completed' as const
  },
  {
    title: 'Predictive Maintenance System',
    description: 'AI system that predicts equipment maintenance needs before failures occur.',
    imageUrl: '/projects/maintenance.jpg',
    category: 'Machine Learning',
    status: 'ongoing' as const
  },
  {
    title: 'Automated Document Processing',
    description: 'Intelligent document processing and data extraction system.',
    imageUrl: '/projects/document.jpg',
    category: 'Automation',
    status: 'ongoing' as const
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.status === filter
  );

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
            Our Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how we&apos;ve helped businesses transform through AI automation
          </motion.p>

          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'completed'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Completed
            </button>
            <button
              onClick={() => setFilter('ongoing')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === 'ongoing'
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              Ongoing
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 