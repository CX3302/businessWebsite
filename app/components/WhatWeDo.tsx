'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/*
  =====================================================================
  FuneralTech — «What We Do»
  Animated three‑layer feature map inspired by Instalily.ai
  ---------------------------------------------------------------------
  • Row 1  ➜  Data Analytics     (insight generation)
  • Row 2  ➜  AI Agents          (decision layer)
  • Row 3  ➜  Action Items       (execution layer)
  ---------------------------------------------------------------------
  Visual behaviour
  ‑ Cards cycle focus automatically every 3 s (autoplay).  
  ‑ Hovering a card pauses autoplay and highlights that card.  
  ‑ Connection lines have a continuous dash‑offset animation to suggest
    data flow between layers.
  =====================================================================
*/

/* -----------------------------
   Data model for all features
------------------------------*/
const features = [
  // Row 1 — Data Analytics
  {
    id: 'operational-analytics',
    title: 'Operational Analytics',
    description:
      'Live dashboards surface daily case volumes, staff workload and fleet usage so directors can react quickly.',
    icon: '📊',
    color: 'from-blue-500 to-cyan-500',
    connections: ['scheduling-agent', 'capacity-forecast', 'revenue-insights']
  },
  {
    id: 'capacity-forecast',
    title: 'Capacity Forecasting',
    description: 'AI projects case load 7‑30 days ahead, helping managers right‑size teams and avoid burnout.',
    icon: '📈',
    color: 'from-indigo-500 to-purple-500',
    connections: ['scheduling-agent', 'operational-analytics']
  },
  {
    id: 'revenue-insights',
    title: 'Revenue Insights',
    description: 'Track memorial sales, preneed opportunities and margins in one place to fuel smarter growth.',
    icon: '💰',
    color: 'from-emerald-500 to-green-500',
    connections: ['upsell-agent', 'keepsake-checkout']
  },
  // Row 2 — AI Agents
  {
    id: 'scheduling-agent',
    title: 'Scheduling Agent',
    description: 'Detects conflicts and automatically books chapels, vehicles and staff, with real‑time vendor sync.',
    icon: '🗓️',
    color: 'from-purple-500 to-pink-500',
    connections: ['real-time-alerts', 'aftercare-agent']
  },
  {
    id: 'aftercare-agent',
    title: 'Aftercare Agent',
    description: 'Sends compassionate 3‑day, 30‑day and anniversary check‑ins, keeping families supported and loyal.',
    icon: '🤝',
    color: 'from-teal-500 to-emerald-500',
    connections: ['follow-up-flow', 'capacity-forecast']
  },
  {
    id: 'upsell-agent',
    title: 'Upsell Agent',
    description: 'Recommends keepsakes and preneed plans using personalized AI text generation.',
    icon: '🎁',
    color: 'from-pink-500 to-rose-500',
    connections: ['keepsake-checkout', 'revenue-insights']
  },
  // Row 3 — Action Items
  {
    id: 'real-time-alerts',
    title: 'Real-Time Alerts',
    description: 'Instant Slack/SMS notifications when schedule conflicts or last‑minute cases appear.',
    icon: '🚨',
    color: 'from-orange-500 to-red-500',
    connections: []
  },
  {
    id: 'follow-up-flow',
    title: 'Family Follow‑Up Flow',
    description: 'Automated CRM tasks and message sequences ensure no family slips through the cracks.',
    icon: '📱',
    color: 'from-yellow-500 to-orange-500',
    connections: []
  },
  {
    id: 'keepsake-checkout',
    title: 'Keepsake Checkout',
    description: 'Shopify‑powered cart (→ Stripe → QuickBooks) for memorial products synced with after‑care messages.',
    icon: '🛒',
    color: 'from-indigo-500 to-blue-500',
    connections: []
  }
] as const;

/* -----------------------------
   Helper component — ConnectionLine
------------------------------*/
const ConnectionLine = ({ from, to }: { from: { x: number; y: number }; to: { x: number; y: number } }) => {
  if (!from || !to) return null;
  const midX = (from.x + to.x) / 2;
  const midY = (from.y + to.y) / 2 - 40;
  const path = `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;

  return (
    <motion.path
      d={path}
      fill="none"
      stroke="url(#gradient)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="6 6"
      /* dash‑offset animation gives perpetual motion */
      animate={{ strokeDashoffset: [12, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
    />
  );
};

/* -----------------------------
   Helper component — FeatureCard
------------------------------*/
const FeatureCard = ({ feature, position, isFocused, setFocus }: any) => {
  /* subtle 3‑D tilt on mouse */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-80, 80], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-80, 80], [-10, 10]));

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
    setFocus(feature.id);
  };

  return (
    <motion.div
      className="absolute"
      style={{ left: position.x - 120, top: position.y - 100, width: 240, height: 200, rotateX, rotateY, transformPerspective: 800 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      onMouseMove={handleMove}
      onMouseLeave={() => setFocus(null)}
    >
      <motion.div
        className={`relative w-full h-full bg-white rounded-2xl p-6 cursor-pointer overflow-hidden group ${isFocused ? 'shadow-2xl' : 'shadow-lg'}`}
        whileHover={{ scale: 1.05 }}
      >
        {/* Glow */}
        <motion.div
          className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${feature.color} blur-lg`}
          style={{ opacity: isFocused ? 0.8 : 0.15, zIndex: -1 }}
          animate={{ opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'mirror' }}
        />
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div className="text-4xl">{feature.icon}</div>
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">{feature.title}</h3>
            <p className="text-xs text-gray-600 leading-tight">{feature.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* -----------------------------
   Main component — WhatWeDo
------------------------------*/
const WhatWeDo = () => {
  // Layout calcs
  const containerRef = useRef<HTMLDivElement>(null);
  const [positions, setPositions] = useState<Record<string, { x: number; y: number }>>({});
  const layout = [
    ['operational-analytics', 'capacity-forecast', 'revenue-insights'],
    ['scheduling-agent', 'aftercare-agent', 'upsell-agent'],
    ['real-time-alerts', 'follow-up-flow', 'keepsake-checkout']
  ];

  useEffect(() => {
    const calc = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.offsetWidth;
      const cardW = 240;
      const hSpacing = 320;
      const vSpacing = 250;
      const temp: Record<string, { x: number; y: number }> = {};
      layout.forEach((row, r) => {
        const rowWidth = row.length * hSpacing - (hSpacing - cardW);
        const startX = (w - rowWidth) / 2 + cardW / 2;
        const y = 80 + r * vSpacing;
        row.forEach((id, c) => (temp[id] = { x: startX + c * hSpacing, y }));
      });
      setPositions(temp);
    };
    calc();
    window.addEventListener('resize', calc);
    return () => window.removeEventListener('resize', calc);
  }, []);

  // Autoplay focus cycling
  const [focus, setFocus] = useState<string | null>(null);
  const focusRef = useRef<boolean>(false);

  useEffect(() => {
    focusRef.current = !!focus;
  }, [focus]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (focusRef.current) return; // pause on hover
      setFocus(prev => {
        const idx = features.findIndex(f => f.id === prev);
        const next = features[(idx + 1) % features.length];
        return next.id;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Connections for all features
  const allConnections = features.flatMap(f =>
    f.connections.map(to => ({ from: positions[f.id], to: positions[to], key: `${f.id}-${to}` }))
  );

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 className="text-4xl font-bold text-gray-900" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            What We Do
          </motion.h2>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            We blend powerful data analytics, specialized AI agents and automated action flows to keep every service on schedule and every family cared for.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative h-[760px] mx-auto">
          {/* SVG lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
            {allConnections.map(({ from, to, key }) => from && to && from.y < to.y && <ConnectionLine key={key} from={from} to={to} />)}
          </svg>

          {/* Feature cards */}
          {Object.keys(positions).length > 0 &&
            features.map(f => (
              <FeatureCard
                key={f.id}
                feature={f}
                position={positions[f.id]}
                isFocused={focus === f.id}
                setFocus={setFocus}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
