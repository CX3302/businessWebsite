'use client';

import { motion } from 'framer-motion';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

const Logo = ({ 
  size = 'md', 
  className = '', 
  animated = false 
}: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12',
    xl: 'h-16 md:h-20 lg:h-24'
  };

  // Use the new transparent background logo for all variants
  const logoSrc = '/logos/LogoNoBackground.png';

  const LogoImage = () => (
    <img 
      src={logoSrc}
      alt="BASTL Logo" 
      className={`w-auto ${sizeClasses[size]} ${className}`}
    />
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LogoImage />
      </motion.div>
    );
  }

  return <LogoImage />;
};

export default Logo; 