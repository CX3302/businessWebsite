'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Logo from './Logo';

const Navigation = () => {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileProjectsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-bastl-tech-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
              <Logo size="md" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-bastl-gray-700 hover:text-bastl-black transition-colors"
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
                className="text-bastl-gray-700 hover:text-bastl-black flex items-center space-x-1 transition-colors"
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
              className="text-bastl-gray-700 hover:text-bastl-black transition-colors"
            >
              Research
            </Link>
            
            <Link 
              href="/integration" 
              className="text-bastl-gray-700 hover:text-bastl-black transition-colors"
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
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-bastl-gray-700 hover:text-bastl-black hover:bg-bastl-tech-100 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg 
                className={`h-6 w-6 transition-transform duration-200 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-bastl-tech-300 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Home Link */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-lg font-medium text-bastl-gray-700 hover:text-bastl-black hover:bg-bastl-tech-100 rounded-lg transition-colors"
              >
                Home
              </Link>

              {/* Projects Section */}
              <div>
                <button
                  onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-lg font-medium text-bastl-gray-700 hover:text-bastl-black hover:bg-bastl-tech-100 rounded-lg transition-colors"
                >
                  <span>Projects</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-200 ${isMobileProjectsOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isMobileProjectsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 mt-2 space-y-1 overflow-hidden"
                    >
                      {/* Current Projects */}
                      <div className="px-4 py-2 text-xs font-semibold text-bastl-black bg-bastl-tech-200 rounded">
                        Current Projects
                      </div>
                      {projectsMenu.current.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-sm text-bastl-gray-600 hover:text-bastl-black hover:bg-bastl-tech-50 rounded transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}

                      {/* Past Projects */}
                      <div className="px-4 py-2 text-xs font-semibold text-bastl-black bg-bastl-tech-200 rounded mt-3">
                        Past Projects
                      </div>
                      {projectsMenu.past.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="block px-4 py-2 text-sm text-bastl-gray-600 hover:text-bastl-black hover:bg-bastl-tech-50 rounded transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}

                      {/* View All Projects */}
                      <Link
                        href="/projects"
                        onClick={closeMobileMenu}
                        className="block px-4 py-2 text-sm font-medium text-bastl-black hover:bg-bastl-tech-50 rounded transition-colors"
                      >
                        View All Projects →
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Research Link */}
              <Link
                href="/research"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-lg font-medium text-bastl-gray-700 hover:text-bastl-black hover:bg-bastl-tech-100 rounded-lg transition-colors"
              >
                Research
              </Link>

              {/* Integration Link */}
              <Link
                href="/integration"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-lg font-medium text-bastl-gray-700 hover:text-bastl-black hover:bg-bastl-tech-100 rounded-lg transition-colors"
              >
                Integration
              </Link>

              {/* Get Started Button */}
              <div className="pt-4">
                <Link
                  href="/get-started"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-bastl-energy-600 to-bastl-energy-700 hover:from-bastl-energy-700 hover:to-bastl-energy-800 transition-all duration-200 shadow-lg"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 