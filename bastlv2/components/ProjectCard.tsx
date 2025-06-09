'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  status: 'completed' | 'ongoing';
}

const ProjectCard = ({ title, description, imageUrl, category, status }: ProjectCardProps) => {
  return (
    <motion.div 
      className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="aspect-w-16 aspect-h-9 relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            status === 'completed' 
              ? 'bg-green-100 text-green-800'
              : 'bg-blue-100 text-blue-800'
          }`}>
            {status === 'completed' ? 'Completed' : 'Ongoing'}
          </span>
        </div>
      </div>
      <div className="p-6">
        <span className="text-sm font-medium text-purple-600">{category}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 