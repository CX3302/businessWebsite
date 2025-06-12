'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';

const Navigation = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  const projectsMenu = {
    current: [
      { name: 'New Projects Coming Soon', href: '/projects/upcoming' },
    ],
    past: [
      { name: 'Panacea Aftermarket Co. (Torque)', href: '/projects/torque' },
      { name: 'Rocky Technology (FareFlow)', href: '/projects/fareflow' },
      { name: 'Havenmark (Snapquote)', href: '/projects/snapquote' },
    ]
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-bastl-tech-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Logo size="md" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-bastl-gray-700 hover:text-bastl-black"
            >
              Home
            </Link>
            
            {/* Projects Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProjectsOpen(true)}
              onMouseLeave={() => setIsProjectsOpen(false)}
            >
              <button 
                className="text-bastl-gray-700 hover:text-bastl-black flex items-center space-x-1"
              >
                <span>Projects</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${isProjectsOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-64 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    {/* Current Projects */}
                    <div className="py-2">
                      <div className="px-4 py-2 text-xs font-semibold text-bastl-black bg-bastl-tech-200">
                        Current Projects
                      </div>
                      {projectsMenu.current.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-bastl-gray-700 hover:bg-bastl-tech-100 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* Past Projects */}
                    <div className="py-2 border-t border-bastl-tech-300">
                      <div className="px-4 py-2 text-xs font-semibold text-bastl-black bg-bastl-tech-200">
                        Past Projects
                      </div>
                      {projectsMenu.past.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-bastl-gray-700 hover:bg-bastl-tech-100 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>

                    {/* View All Projects */}
                    <div className="py-2 border-t border-bastl-tech-300">
                      <Link
                        href="/projects"
                        className="block px-4 py-2 text-sm font-medium text-bastl-black hover:bg-bastl-tech-100 transition-colors"
                      >
                        View All Projects →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/research" 
              className="text-bastl-gray-700 hover:text-bastl-black"
            >
              Research
            </Link>
            
            <Link 
              href="/integration" 
              className="text-bastl-gray-700 hover:text-bastl-black"
            >
              Integration
            </Link>

            <Link 
              href="/get-started" 
              className="inline-flex items-center px-6 py-2.5 rounded-full text-white font-medium bg-gradient-to-r from-bastl-energy-600 to-bastl-energy-700 hover:from-bastl-energy-700 hover:to-bastl-energy-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-bastl-energy-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-bastl-gray-700 hover:text-bastl-black">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 