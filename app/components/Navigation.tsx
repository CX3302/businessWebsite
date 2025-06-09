'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            YourLogo
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setProjectsDropdownOpen(true)}
              onMouseLeave={() => setProjectsDropdownOpen(false)}
            >
              <button
                className="text-gray-700 hover:text-gray-900 transition-colors flex items-center py-4"
              >
                Projects
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${projectsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 origin-top ${
                  projectsDropdownOpen
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
              >
                <div className="py-1">
                  <Link
                    href="/projects/current"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Current Projects
                  </Link>
                  <Link
                    href="/projects/past"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Past Projects
                  </Link>
                </div>
              </div>
            </div>
            
            <Link href="/research" className="text-gray-700 hover:text-gray-900 transition-colors">
              Research
            </Link>
            <Link href="/integration" className="text-gray-700 hover:text-gray-900 transition-colors">
              Integration
            </Link>
            <Link 
              href="/get-started" 
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 