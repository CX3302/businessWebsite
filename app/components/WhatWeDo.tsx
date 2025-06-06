'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';

// Define color schemes for each layer - adjusted for white background
const layerColors = {
  analytics: {
    gradient: 'from-purple-500 to-purple-400',
    glow: '#A855F7',
    shadow: '0 0 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(168, 85, 247, 0.2)',
    text: '#7C3AED',
    bg: 'bg-purple-50'
  },
  agents: {
    gradient: 'from-violet-500 to-violet-400',
    glow: '#8B5CF6',
    shadow: '0 0 20px rgba(139, 92, 246, 0.3), 0 0 40px rgba(139, 92, 246, 0.2)',
    text: '#6D28D9',
    bg: 'bg-violet-50'
  },
  actions: {
    gradient: 'from-indigo-500 to-indigo-400',
    glow: '#6366F1',
    shadow: '0 0 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(99, 102, 241, 0.2)',
    text: '#4C1D95',
    bg: 'bg-indigo-50'
  }
};

const features = [
  // Row 1 — Data Analytics Layer (Purple)
  {
    id: 'operational-analytics',
    title: 'Operational Analytics',
    description: 'Live dashboards surface daily metrics and patterns for immediate action.',
    icon: '📊',
    layer: 'analytics',
    connections: ['scheduling-agent'],
    row: 0
  },
  {
    id: 'capacity-forecast',
    title: 'Capacity Forecasting',
    description: 'AI predicts resource needs 7-30 days ahead to optimize operations.',
    icon: '📈',
    layer: 'analytics',
    connections: ['aftercare-agent'],
    row: 0
  },
  {
    id: 'revenue-insights',
    title: 'Revenue Insights',
    description: 'Track opportunities and margins in real-time for smarter growth.',
    icon: '💰',
    layer: 'analytics',
    connections: ['upsell-agent'],
    row: 0
  },
  
  // Row 2 — AI Agents Layer (Violet)
  {
    id: 'scheduling-agent',
    title: 'Scheduling Agent',
    description: 'Automates complex scheduling with conflict detection and vendor sync.',
    icon: '🤖',
    layer: 'agents',
    connections: ['real-time-alerts'],
    row: 1
  },
  {
    id: 'aftercare-agent',
    title: 'Aftercare Agent',
    description: 'Delivers personalized support at critical moments automatically.',
    icon: '🤝',
    layer: 'agents',
    connections: ['follow-up-flow'],
    row: 1
  },
  {
    id: 'upsell-agent',
    title: 'Upsell Agent',
    description: 'Identifies and presents relevant opportunities using AI insights.',
    icon: '🎯',
    layer: 'agents',
    connections: ['keepsake-checkout'],
    row: 1
  },
  
  // Row 3 — Action Items Layer (Indigo)
  {
    id: 'real-time-alerts',
    title: 'Real-Time Alerts',
    description: 'Instant notifications keep teams responsive to critical changes.',
    icon: '🚨',
    layer: 'actions',
    connections: [],
    row: 2
  },
  {
    id: 'follow-up-flow',
    title: 'Automated Follow-Up',
    description: 'Systematic outreach ensures consistent family engagement.',
    icon: '📱',
    layer: 'actions',
    connections: [],
    row: 2
  },
  {
    id: 'keepsake-checkout',
    title: 'Integrated Commerce',
    description: 'Seamless purchasing flow with automated financial sync.',
    icon: '🛒',
    layer: 'actions',
    connections: [],
    row: 2
  }
];

// Animated particle with subtle glow
const FlowingParticle = ({ from, to, delay = 0, color }: { from: any; to: any; delay?: number; color: string }) => {
  if (!from || !to) return null;
  
  return (
    <motion.circle
      r="3"
      fill={color}
      opacity={0.6}
      initial={{ x: from.x, y: from.y, scale: 0 }}
      animate={{
        x: [from.x, (from.x + to.x) / 2, to.x],
        y: [from.y, (from.y + to.y) / 2 - 40, to.y],
        scale: [0, 1, 0],
      }}
      transition={{
        duration: 2.5,
        delay,
        repeat: Infinity,
        repeatDelay: 3,
        ease: "easeInOut"
      }}
    />
  );
};

// Connection line with subtle gradient
const ConnectionLine = ({ from, to, isActive, fromLayer }: { from: any; to: any; isActive: boolean; fromLayer: string }) => {
  if (!from || !to) return null;
  
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 - 40;
  const path = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
  const color = layerColors[fromLayer as keyof typeof layerColors].glow;
  
  return (
    <>
      {/* Subtle glow effect */}
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        opacity={0.1}
        filter="url(#softBlur)"
      />
      
      {/* Core line */}
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        opacity={isActive ? 0.8 : 0.3}
        strokeDasharray="4 4"
        animate={isActive ? {
          strokeDashoffset: [0, -8],
        } : {}}
        transition={isActive ? {
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        } : {}}
      />
    </>
  );
};

const FeatureCard = ({ feature, position, isActive, onHover }: any) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [2, -2]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-2, 2]), { stiffness: 300, damping: 30 });
  
  const colors = layerColors[feature.layer as keyof typeof layerColors];
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    onHover(null);
  };
  
  return (
    <motion.div
      className="absolute"
      style={{ 
        left: position.x - 140, 
        top: position.y - 90,
        width: 280,
        height: 180,
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d"
      }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: feature.row * 0.15 + (feature.id.charCodeAt(0) % 3) * 0.1,
        type: "spring",
        stiffness: 120
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => onHover(feature.id)}
    >
      <motion.div
        className={`relative w-full h-full ${colors.bg} backdrop-blur-sm rounded-2xl p-6 cursor-pointer overflow-hidden border ${
          isActive ? 'border-gray-300 shadow-xl' : 'border-gray-200 shadow-lg'
        }`}
        style={{
          boxShadow: isActive ? colors.shadow : undefined
        }}
        whileHover={!isActive ? { 
          scale: 1.02, 
          y: -2,
          boxShadow: colors.shadow
        } : {}}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Static gradient overlay for active state */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: isActive ? 0.08 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="text-3xl mb-3">
            {feature.icon}
          </div>
          <h3 className="text-lg font-bold mb-2" style={{ color: colors.text }}>
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
        

      </motion.div>
    </motion.div>
  );
};

// Layer label component - positioned beside each row
const LayerLabel = ({ layer, label, yPosition }: { layer: string; label: string; yPosition: number }) => {
  const colors = layerColors[layer as keyof typeof layerColors];
  
  return (
    <motion.div
      className="absolute left-0 flex items-center space-x-3"
      style={{ top: yPosition - 10 }}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="flex items-center space-x-3">
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{ 
            backgroundColor: colors.glow,
            boxShadow: `0 0 8px ${colors.glow}40`
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <div>
          <h3 className="text-sm font-semibold" style={{ color: colors.text }}>
            {label}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

const WhatWeDo = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [positions, setPositions] = useState<{ [key: string]: { x: number; y: number } }>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<boolean>(true);
  
  useEffect(() => {
    const calculatePositions = () => {
      if (!containerRef.current) return;
      
      const containerWidth = containerRef.current.offsetWidth;
      const cardWidth = 280;
      const horizontalSpacing = 300;
      const verticalSpacing = 220;
      const leftOffset = 160; // Space for labels
      
      const newPositions: { [key: string]: { x: number; y: number } } = {};
      
      // Three rows layout
      const layout = [
        ['operational-analytics', 'capacity-forecast', 'revenue-insights'],
        ['scheduling-agent', 'aftercare-agent', 'upsell-agent'],
        ['real-time-alerts', 'follow-up-flow', 'keepsake-checkout']
      ];
      
      layout.forEach((row, rowIndex) => {
        const rowWidth = row.length * horizontalSpacing - (horizontalSpacing - cardWidth);
        const startX = leftOffset + (containerWidth - leftOffset - rowWidth) / 2 + cardWidth / 2;
        const y = 100 + rowIndex * verticalSpacing;
        
        row.forEach((featureId, colIndex) => {
          newPositions[featureId] = {
            x: startX + colIndex * horizontalSpacing,
            y: y
          };
        });
      });
      
      setPositions(newPositions);
    };
    
    calculatePositions();
    window.addEventListener('resize', calculatePositions);
    return () => window.removeEventListener('resize', calculatePositions);
  }, []);
  
  // Auto-cycle through features (slower and more subtle)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!autoplayRef.current) return;
      
      setActiveFeature(prev => {
        const currentIndex = features.findIndex(f => f.id === prev);
        const nextIndex = (currentIndex + 1) % features.length;
        return features[nextIndex].id;
      });
    }, 4000); // Slower cycling
    
    return () => clearInterval(interval);
  }, []);
  
  const handleHover = (featureId: string | null) => {
    autoplayRef.current = !featureId;
    setActiveFeature(featureId);
  };
  
  // Get all connections
  const allConnections = features.flatMap(feature =>
    feature.connections.map(connectionId => {
      const toFeature = features.find(f => f.id === connectionId);
      return {
        from: positions[feature.id],
        to: positions[connectionId],
        id: `${feature.id}-${connectionId}`,
        isActive: activeFeature === feature.id || activeFeature === connectionId,
        fromLayer: feature.layer,
        toLayer: toFeature?.layer || 'actions'
      };
    })
  );
  
  // Calculate layer label positions
  const layerLabelPositions = [
    { layer: 'analytics', label: 'Data Analytics', yPosition: 100 },
    { layer: 'agents', label: 'AI Agents', yPosition: 320 },
    { layer: 'actions', label: 'Action Items', yPosition: 540 }
  ];
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We leverage cutting-edge AI technology to transform your business operations 
            through three integrated layers of intelligence
          </motion.p>
        </div>
        
        <div 
          ref={containerRef}
          className="relative h-[650px] mx-auto"
        >
          {/* Layer labels positioned beside each row */}
          {layerLabelPositions.map(({ layer, label, yPosition }) => (
            <LayerLabel 
              key={layer}
              layer={layer} 
              label={label} 
              yPosition={yPosition}
            />
          ))}
          
          {/* SVG for connections and particles */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <filter id="softBlur">
                <feGaussianBlur stdDeviation="1.5"/>
              </filter>
            </defs>
            
            {/* Render all connections */}
            {Object.keys(positions).length > 0 && allConnections.map(({ from, to, id, isActive, fromLayer }) => {
              if (!from || !to || from.y >= to.y) return null;
              
              const color = layerColors[fromLayer as keyof typeof layerColors].glow;
              
              return (
                <g key={id}>
                  <ConnectionLine 
                    from={from} 
                    to={to} 
                    isActive={isActive}
                    fromLayer={fromLayer}
                  />
                  {/* Flowing particles on active connections */}
                  {isActive && (
                    <>
                      <FlowingParticle from={from} to={to} delay={0} color={color} />
                      <FlowingParticle from={from} to={to} delay={1} color={color} />
                    </>
                  )}
                </g>
              );
            })}
          </svg>
          
          {/* Feature cards */}
          <AnimatePresence>
            {Object.keys(positions).length > 0 && features.map((feature) => (
              <FeatureCard
                key={feature.id}
                feature={feature}
                position={positions[feature.id]}
                isActive={activeFeature === feature.id}
                onHover={handleHover}
              />
            ))}
          </AnimatePresence>
          
          {/* Subtle background gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-0 left-1/4 w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(168, 85, 247, 0.03) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                x: [-20, 20, -20],
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              animate={{
                x: [20, -20, 20],
                y: [15, -15, 15],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;