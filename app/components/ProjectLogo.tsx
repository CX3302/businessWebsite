'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectLogoProps {
  name: 'torque' | 'fareflow' | 'snapquote';
  className?: string;
}

export default function ProjectLogo({ name, className = '' }: ProjectLogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative w-48 h-48 flex items-center justify-center ${className}`}
    >
      {!imageError ? (
        <Image
          src={`/projects/${name}-logo.svg`}
          alt={`${name} logo`}
          width={192}
          height={192}
          className="object-contain"
          priority
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-48 h-48 bg-bastl-tech-200 rounded-full flex items-center justify-center border-4 border-bastl-tech-700">
          <span className="text-2xl font-bold text-bastl-tech-700 uppercase">
            {name}
          </span>
        </div>
      )}
    </motion.div>
  );
} 