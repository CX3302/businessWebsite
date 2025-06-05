'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';

const features = [
  {
    title: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation that learns and adapts.',
    icon: '🤖',
    color: 'from-blue-500 to-cyan-500',
    bgPattern: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
  },
  {
    title: 'Data Analysis',
    description: 'Transform raw data into actionable insights with our AI-powered analytics.',
    icon: '📊',
    color: 'from-emerald-500 to-green-500',
    bgPattern: 'radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.1) 0%, transparent 70%)'
  },
  {
    title: 'Custom AI Solutions',
    description: 'Tailored AI solutions designed specifically for your business needs.',
    icon: '🎯',
    color: 'from-purple-500 to-violet-500',
    bgPattern: 'radial-gradient(circle at 80% 30%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)'
  },
  {
    title: 'Integration Services',
    description: 'Seamlessly integrate AI automation with your existing systems.',
    icon: '🔄',
    color: 'from-orange-500 to-red-500',
    bgPattern: 'radial-gradient(circle at 20% 70%, rgba(249, 115, 22, 0.1) 0%, transparent 70%)'
  }
];

// Floating orb component for background animation
const FloatingOrb = ({ delay = 0, duration = 20, size = 100, opacity = 0.1 }: {
  delay?: number;
  duration?: number;
  size?: number;
  opacity?: number;
}) => {
  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 blur-xl"
      style={{
        width: size,
        height: size,
        opacity: opacity,
      }}
      animate={{
        x: [0, 100, 0, -100, 0],
        y: [0, -100, 0, 100, 0],
        scale: [1, 1.2, 1, 0.8, 1],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// 3D Feature Card Component
const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const springConfig = { stiffness: 100, damping: 15 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const rotateXValue = (event.clientY - centerY) / 10;
    const rotateYValue = (centerX - event.clientX) / 10;
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
    x.set((event.clientX - centerX) / 20);
    y.set((event.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative group cursor-pointer"
      style={{
        x,
        y,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, z: -100 }}
      whileInView={{ opacity: 1, z: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
    >
      {/* Card Background with Gradient */}
      <div 
        className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden transition-all duration-500"
        style={{
          background: isHovered ? `linear-gradient(135deg, white 0%, rgba(255,255,255,0.9) 100%), ${feature.bgPattern}` : 'white',
          transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
        }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute inset-0"
            style={{ background: feature.bgPattern }}
            animate={{
              backgroundPosition: isHovered ? ['0% 0%', '100% 100%'] : ['0% 0%', '0% 0%'],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>

        {/* Floating Icon */}
        <motion.div 
          className="relative z-10 text-5xl mb-6 flex justify-center"
          animate={{
            y: isHovered ? [-5, 5, -5] : [0],
            rotateY: isHovered ? [0, 360] : [0],
          }}
          transition={{
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            rotateY: { duration: 1.5, ease: "easeInOut" }
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(10px)',
          }}
        >
          {feature.icon}
        </motion.div>

        {/* Title with Gradient */}
        <motion.h3 
          className={`text-xl font-bold mb-4 text-center bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
          style={{
            transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0% 50%', '100% 50%', '0% 50%'] : ['0% 50%'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {feature.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          className="text-gray-600 text-center leading-relaxed"
          style={{
            transform: isHovered ? 'translateZ(15px)' : 'translateZ(0px)',
          }}
        >
          {feature.description}
        </motion.p>

        {/* Glow Effect */}
        <motion.div
          className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 blur-xl -z-10`}
          animate={{
            opacity: isHovered ? 0.2 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Interactive Particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full"
                initial={{
                  x: Math.random() * 300,
                  y: Math.random() * 200,
                  opacity: 0,
                }}
                animate={{
                  y: Math.random() * 200 - 50,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingOrb delay={0} duration={25} size={120} opacity={0.08} />
        <FloatingOrb delay={5} duration={30} size={80} opacity={0.06} />
        <FloatingOrb delay={10} duration={20} size={150} opacity={0.04} />
        <FloatingOrb delay={15} duration={35} size={100} opacity={0.07} />
      </div>

      {/* Mesh Gradient Background */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-blue-100 to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-20"
          style={{ y: textY }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            What We Do
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We leverage cutting-edge AI technology to transform your business operations with intelligent solutions that adapt and evolve
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Discover Our Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo; 