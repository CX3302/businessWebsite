'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

// Intersection Observer hook for scroll-based animations
export function useScrollAnimation<T extends HTMLElement = HTMLElement>(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: '-50px',
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible] as const;
}

// Animation wrapper components for easy replacement of motion.*
interface AnimatedProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedDiv({ 
  children, 
  className = '', 
  variant = 'fadeUp', 
  delay = 0,
  as: Component = 'div',
  ...props 
}: AnimatedProps) {
  const [ref, isVisible] = useScrollAnimation();

  const animationClasses = {
    fadeUp: 'animate-on-scroll',
    fadeLeft: 'animate-on-scroll-left',
    fadeRight: 'animate-on-scroll-right',
    scale: 'animate-on-scroll-scale',
  };

  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return React.createElement(
    Component,
    {
      ref,
      className: cn(
        animationClasses[variant],
        isVisible && 'visible',
        className
      ),
      style: delayStyle,
      ...props,
    },
    children
  );
}

// Pre-configured animated components
export function AnimatedSection({ children, className, delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <AnimatedDiv as="section" variant="fadeUp" delay={delay} className={className}>
      {children}
    </AnimatedDiv>
  );
}

export function AnimatedHeading({ 
  children, 
  level = 2, 
  className,
  delay = 0 
}: {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  delay?: number;
}) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <AnimatedDiv as={Tag} variant="fadeUp" delay={delay} className={className}>
      {children}
    </AnimatedDiv>
  );
}

export function AnimatedText({ children, className, delay = 0 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <AnimatedDiv as="p" variant="fadeUp" delay={delay} className={className}>
      {children}
    </AnimatedDiv>
  );
}

// Staggered animation for lists
export function AnimatedList({ 
  children, 
  className, 
  staggerDelay = 100 
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const [ref, isVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div 
      ref={ref} 
      className={cn('grid gap-6', className)}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={cn(
            'animate-on-scroll',
            isVisible && 'visible'
          )}
          style={{ transitionDelay: `${index * staggerDelay}ms` }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

// CSS-only hover effects utility
export function withHoverEffect(component: React.ReactElement, effect: 'lift' | 'scale' | 'glow' = 'lift') {
  const effectClasses = {
    lift: 'hover-lift',
    scale: 'hover-scale',
    glow: 'hover-glow',
  };

  return React.cloneElement(component, {
    className: cn(component.props.className, effectClasses[effect]),
  });
}

// Performance tips component for documentation
export function AnimationPerformanceTips() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
      <h4 className="font-semibold text-blue-900 mb-2">Animation Performance Tips:</h4>
      <ul className="text-blue-800 space-y-1">
        <li>• Use CSS animations instead of Framer Motion for simple fade/slide effects</li>
        <li>• Prefer transform and opacity changes over layout properties</li>
        <li>• Use intersection observer for scroll-triggered animations</li>
        <li>• Apply will-change: transform sparingly and remove after animation</li>
        <li>• Use CSS containment for isolated animation contexts</li>
        <li>• Prefer requestAnimationFrame for complex JavaScript animations</li>
      </ul>
    </div>
  );
}

// Helper function to replace common Framer Motion patterns
export const motionToCSS = {
  // Replace motion.div with initial={{ opacity: 0, y: 20 }}
  fadeUp: (className = '') => `animate-on-scroll ${className}`,
  
  // Replace motion.div with initial={{ opacity: 0, x: -30 }}
  slideLeft: (className = '') => `animate-on-scroll-left ${className}`,
  
  // Replace motion.div with initial={{ opacity: 0, x: 30 }}
  slideRight: (className = '') => `animate-on-scroll-right ${className}`,
  
  // Replace motion.div with initial={{ opacity: 0, scale: 0.9 }}
  scale: (className = '') => `animate-on-scroll-scale ${className}`,
  
  // Stagger delays
  stagger: (index: number, delay = 100) => `animate-stagger-${Math.min(index + 1, 6)}`,
};

export default useScrollAnimation; 