'use client';

import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode, useRef, useState } from 'react';
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'shimmer' | 'magnetic' | 'glow' | 'depth';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  children,
  className = '',
  icon,
  iconPosition = 'right',
  isLoading = false,
  disabled,
  onClick,
  type = 'button',
  'aria-label': ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 });
  
  // Handle magnetic effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (variant === 'magnetic' && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      setMagneticPosition({ x: x * 0.1, y: y * 0.1 });
    }
  };

  const handleMouseLeave = () => {
    if (variant === 'magnetic') {
      setMagneticPosition({ x: 0, y: 0 });
    }
  };

  // Standard Shadcn/UI Button variants
  if (['default', 'outline', 'ghost', 'destructive'].includes(variant)) {
    return (
      <ShadcnButton
        variant={variant as 'default' | 'outline' | 'ghost' | 'destructive'}
        size={size}
        className={cn(
          "transition-all duration-200 font-manrope",
          "focus:ring-2 focus:ring-offset-2",
          variant === 'default' && "bg-gradient-to-r from-gray-900 to-blue-900 hover:from-blue-900 hover:to-gray-900",
          className
        )}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
        aria-label={ariaLabel}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </ShadcnButton>
    );
  }

  // Advanced effect variants
  const baseStyles = 'relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-manrope overflow-hidden';
  
  const variantStyles = {
    shimmer: 'bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg hover:shadow-2xl focus:ring-blue-500 hover:scale-105',
    magnetic: 'bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white shadow-sm hover:shadow-xl focus:ring-gray-500 hover:scale-105',
    glow: 'bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg focus:ring-blue-500',
    depth: 'bg-white text-gray-900 border-2 border-gray-900 shadow-sm focus:ring-gray-500'
  };
  
  const sizeStyles = {
    default: 'px-6 py-3 text-base',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg',
    icon: 'p-2'
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant as keyof typeof variantStyles]} ${sizeStyles[size]} ${className}`;
  
  // Shimmer Button Content
  if (variant === 'shimmer') {
    return (
      <motion.button
        ref={buttonRef}
        className={`group ${combinedClassName}`}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={ariaLabel}
      >
        {/* Shimmer glow effect */}
        <div className="absolute inset-0 -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
        
        {/* Inner button content */}
        <span className="relative flex items-center gap-2 z-10">
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && (
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
          )}
        </span>
        
        {/* Particle effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:animate-particle"
              style={{
                animationDelay: `${i * 0.1}s`,
                '--x': Math.cos(i * 60 * Math.PI / 180),
                '--y': Math.sin(i * 60 * Math.PI / 180),
              } as React.CSSProperties}
            />
          ))}
        </div>
      </motion.button>
    );
  }
  
  // Magnetic Button Content
  if (variant === 'magnetic') {
    return (
      <motion.button
        ref={buttonRef}
        className={`group ${combinedClassName}`}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `translate(${magneticPosition.x}px, ${magneticPosition.y}px)`,
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={ariaLabel}
      >
        <span className="relative z-10 flex items-center gap-2">
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </span>
        <div className="absolute inset-0 bg-gray-900 rounded-lg transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {children}
        </span>
      </motion.button>
    );
  }
  
  // Glow Button Content
  if (variant === 'glow') {
    return (
      <motion.button
        ref={buttonRef}
        className={`group ${combinedClassName}`}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={ariaLabel}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 blur-xl" />
        </div>
        
        <span className="relative z-10 flex items-center gap-2">
          {isLoading && (
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          )}
          {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
          {children}
          {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </span>
      </motion.button>
    );
  }
  
  // Depth Button Content
  if (variant === 'depth') {
    return (
      <motion.button
        ref={buttonRef}
        className={`group ${combinedClassName} hover:shadow-lg hover:shadow-gray-400/50 active:shadow-sm active:translate-y-1`}
        disabled={disabled || isLoading}
        onClick={onClick}
        type={type}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        aria-label={ariaLabel}
      >
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
      </motion.button>
    );
  }

  return null;
};

export default Button; 