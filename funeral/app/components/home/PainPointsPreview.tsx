'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

// ReactBits-inspired components
const GlowCard = ({ 
  children, 
  className,
  glowColor = 'rgba(59, 130, 246, 0.5)',
  onClick
}: { 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={onClick}
    >
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
            }}
          />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

const AnimatedCounter = ({ 
  value, 
  suffix = '', 
  prefix = '',
  duration = 2000 
}: { 
  value: number; 
  suffix?: string; 
  prefix?: string;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  React.useEffect(() => {
    if (!hasAnimated) {
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
          setHasAnimated(true);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [value, duration, hasAnimated]);

  return (
    <span className="font-bold font-manrope">
      {prefix}{count}{suffix}
    </span>
  );
};

const ExpandableCard = ({ 
  title, 
  points, 
  icon, 
  accentGradient,
  iconBgColor,
  dotColor,
  stats
}: {
  title: string;
  points: string[];
  icon: React.ReactNode;
  accentGradient?: { from: string; to: string };
  iconBgColor: string;
  dotColor: string;
  stats?: { value: number; label: string; suffix?: string };
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {accentGradient && (
        <motion.div 
          layout 
          className="absolute top-0 left-0 w-full h-1.5"
          style={{
            background: `linear-gradient(to right, ${accentGradient.from}, ${accentGradient.to})`
          }}
        />
      )}
      
      <motion.div layout className="p-8">
        <div className="flex items-center mb-6">
          <motion.div 
            className={`w-12 h-12 ${iconBgColor} rounded-xl flex items-center justify-center mr-4`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 font-manrope">{title}</h3>
            {stats && (
              <motion.div 
                className="text-sm text-gray-600 mt-1 font-inter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <AnimatedCounter value={stats.value} suffix={stats.suffix} /> {stats.label}
              </motion.div>
            )}
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className={`w-2 h-2 ${dotColor} rounded-full mt-2 mr-4 flex-shrink-0`} />
                  <span className="text-gray-700 leading-relaxed font-inter">{point}</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const PainPointsPreview = () => {
  const [selectedView, setSelectedView] = useState<'problems' | 'solutions' | 'comparison'>('comparison');

  const painPoints = [
    "Scattered tools create operational chaos",
    "Manual processes waste valuable time", 
    "Lost leads cost thousands in revenue",
    "Disconnected systems hide critical insights"
  ];

  const solutions = [
    "Unified platform connects all operations",
    "AI automation reduces overhead by 73%",
    "Intelligent lead scoring maximizes conversions", 
    "Sales Data Analytics drive strategic decisions"
  ];

  const comparisonData = [
    {
      problem: "Scattered tools create operational chaos",
      solution: "Unified platform connects all operations",
      metric: { 
        before: 5, 
        after: 1, 
        unit: "tools",
        displayBefore: "5+",
        displayAfter: "1",
        progressBefore: 100, // Show full bar for many tools
        progressAfter: 20    // Show small bar for unified solution
      }
    },
    {
      problem: "Manual processes waste valuable time",
      solution: "AI automation reduces overhead by 73%",
      metric: { 
        before: 15, 
        after: 4, 
        unit: "hours/week",
        displayBefore: "15",
        displayAfter: "4",
        progressBefore: 100, // Show full bar for high hours
        progressAfter: 27    // Show 27% (4/15 * 100)
      }
    },
    {
      problem: "Lost leads cost thousands in revenue",
      solution: "Intelligent lead scoring maximizes conversions",
      metric: { 
        before: 60, 
        after: 20, 
        unit: "% lost",
        displayBefore: "60%",
        displayAfter: "20%",
        progressBefore: 60,  // Use actual percentage
        progressAfter: 20    // Use actual percentage
      }
    },
    {
      problem: "Disconnected systems hide critical insights",
      solution: "Sales Data Analytics drive strategic decisions",
      metric: { 
        before: 30, 
        after: 95, 
        unit: "% visibility",
        displayBefore: "30%",
        displayAfter: "95%",
        progressBefore: 30,  // Use actual percentage
        progressAfter: 95    // Use actual percentage
      }
    }
  ];

  return (
    <section id="pain-points" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-manrope"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            The Problem → The Solution
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            See how Prelude transforms business management chaos into intelligent automation
          </motion.p>
        </div>

        {/* View Selector */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {(['comparison', 'problems', 'solutions'] as const).map((view) => (
              <button
                key={view}
                onClick={() => setSelectedView(view)}
                className={cn(
                  "px-6 py-2 rounded-lg font-medium font-inter transition-all duration-200",
                  selectedView === view
                    ? "bg-gradient-to-r from-gray-900 to-blue-900 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Comparison View */}
          {selectedView === 'comparison' && (
            <motion.div
              key="comparison"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {/* Interactive Comparison Cards */}
              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <GlowCard
                    key={index}
                    glowColor="rgba(239, 68, 68, 0.3)"
                    className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-inter">Problem</p>
                          <p className="font-medium text-gray-900 font-manrope">{item.problem}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-gray-900 font-manrope">{item.metric.displayBefore}</p>
                        <p className="text-xs text-gray-500 font-inter">{item.metric.unit}</p>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${item.metric.progressBefore}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </GlowCard>
                ))}
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <GlowCard
                    key={index}
                    glowColor="rgba(59, 130, 246, 0.3)"
                    className="bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-300 font-inter">Solution</p>
                          <p className="font-medium text-white font-manrope">{item.solution}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-white font-manrope">{item.metric.displayAfter}</p>
                        <p className="text-xs text-gray-300 font-inter">{item.metric.unit}</p>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-2 bg-blue-800 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute h-full bg-gradient-to-r from-blue-400 to-blue-300 rounded-full"
                        initial={{ width: '0%' }}
                        whileInView={{ width: `${item.metric.progressAfter}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </GlowCard>
                ))}
              </div>
            </motion.div>
          )}

          {/* Problems Only View */}
          {selectedView === 'problems' && (
            <motion.div
              key="problems"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ExpandableCard
                title="Common Pain Points"
                points={painPoints}
                icon={
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                }
                iconBgColor="bg-red-100"
                dotColor="bg-red-400"
                stats={{ value: 73, label: "of SMBs struggle with these issues", suffix: "%" }}
              />
            </motion.div>
          )}

          {/* Solutions Only View */}
          {selectedView === 'solutions' && (
            <motion.div
              key="solutions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <ExpandableCard
                title="Prelude's Solution"
                points={solutions}
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
                iconBgColor="bg-blue-100"
                dotColor="bg-blue-400"
                stats={{ value: 99, label: "process reliability achieved", suffix: "%" }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { value: 73, label: "Efficiency Gain", suffix: "%" },
            { value: 15, label: "Hours Saved/Week", suffix: "+" },
            { value: 99, label: "Reliability", suffix: "%" },
            { value: 6, label: "Tools Unified", suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
              whileHover={{ scale: 1.05, shadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent font-manrope">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-600 mt-2 font-inter">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsPreview;