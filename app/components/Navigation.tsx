'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectsMenu = [
    { name: 'Current Projects', href: '/projects/current' },
    { name: 'Past Projects', href: '/projects/past' },
    { name: 'Case Studies', href: '/projects/case-studies' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="text-2xl font-bold text-bastl-blue-900 hover:text-bastl-blue-700 transition-colors"
          >
            <span className="flex items-center">
              <span className="text-bastl-accent-500">B</span>astl
              <span className="ml-1 text-sm text-bastl-blue-600 font-normal">beta</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button
                onMouseEnter={() => setIsProjectsOpen(true)}
                onMouseLeave={() => setIsProjectsOpen(false)}
                className="text-bastl-gray-700 hover:text-bastl-blue-600 transition-colors flex items-center"
              >
                Projects
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    isProjectsOpen ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <AnimatePresence>
                {isProjectsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setIsProjectsOpen(true)}
                    onMouseLeave={() => setIsProjectsOpen(false)}
                    className="absolute left-0 mt-2 w-48 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden"
                  >
                    <div className="py-1">
                      {projectsMenu.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-bastl-gray-700 hover:bg-bastl-blue-50 hover:text-bastl-blue-600 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/research" 
              className="text-bastl-gray-700 hover:text-bastl-blue-600 transition-colors"
            >
              Research
            </Link>
            <Link 
              href="/integration" 
              className="text-bastl-gray-700 hover:text-bastl-blue-600 transition-colors"
            >
              Integration
            </Link>
            <Link 
              href="/get-started" 
              className="group relative bg-bastl-blue-600 text-white px-6 py-2 rounded-xl hover:bg-bastl-blue-700 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-bastl-blue-500 to-bastl-accent-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 