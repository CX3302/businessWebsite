// app/components/shared/ReactBitsComponents.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useRef, useEffect, ReactNode } from 'react';
import { cn } from '@/lib/utils';

// Magnetic Button Component
export const MagneticWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !isHovered) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.1);
    y.set((e.clientY - centerY) * 0.1);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};

// Spotlight Card Component
export const SpotlightCard = ({
  children,
  className,
  spotlightColor = 'rgba(59, 130, 246, 0.15)',
}: {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn('relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8', className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {children}
    </div>
  );
};

// 3D Tilt Card Component
export const TiltCard = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;
    const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10;
    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      style={{ transformStyle: 'preserve-3d' }}
      className={cn('relative', className)}
    >
      <div style={{ transform: 'translateZ(50px)' }}>{children}</div>
    </motion.div>
  );
};

// Animated Progress Bar
export const AnimatedProgress = ({
  value,
  className,
  indicatorClassName,
  delay = 0,
}: {
  value: number;
  className?: string;
  indicatorClassName?: string;
  delay?: number;
}) => {
  return (
    <div className={cn('relative h-2 w-full overflow-hidden rounded-full bg-gray-200', className)}>
      <motion.div
        className={cn('h-full bg-gradient-to-r from-gray-900 to-blue-900', indicatorClassName)}
        initial={{ width: '0%' }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay, ease: 'easeOut' }}
      />
    </div>
  );
};

// Shimmer Button
export const ShimmerButton = ({
  children,
  className,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <motion.button
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-gray-900 to-blue-900 px-8 py-3 font-medium text-white transition-all hover:shadow-xl',
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: [-200, 200] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

// Animated Counter
export const AnimatedCounter = ({
  value,
  duration = 2000,
  className,
  prefix = '',
  suffix = '',
}: {
  value: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const steps = 60;
            const stepValue = value / steps;
            const stepTime = duration / steps;
            let currentStep = 0;

            const timer = setInterval(() => {
              currentStep++;
              if (currentStep <= steps) {
                setCount(Math.floor(stepValue * currentStep));
              } else {
                setCount(value);
                clearInterval(timer);
              }
            }, stepTime);

            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

// Gradient Text
export const GradientText = ({
  children,
  className,
  animate = false,
}: {
  children: ReactNode;
  className?: string;
  animate?: boolean;
}) => {
  if (animate) {
    return (
      <motion.span
        className={cn('bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent', className)}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundSize: '200% 200%' }}
      >
        {children}
      </motion.span>
    );
  }

  return (
    <span className={cn('bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent', className)}>
      {children}
    </span>
  );
};

// Blur In Component
export const BlurIn = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  return (
    <motion.div
      className={className}
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

// Hover Scale Component
export const HoverScale = ({
  children,
  className,
  scale = 1.05,
}: {
  children: ReactNode;
  className?: string;
  scale?: number;
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ scale }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};