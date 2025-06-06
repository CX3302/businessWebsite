'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
            href="/"
            className="text-2xl font-bold text-funeral-black hover:text-funeral-gray transition-colors"
          >
            Bastl Funeral Services
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-funeral-black hover:text-funeral-gray transition-colors font-medium"
            >
              Overview
            </button>
            <Link 
              href="/solutions"
              className="text-funeral-black hover:text-funeral-gray transition-colors font-medium"
            >
              Our Solutions
            </Link>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-funeral-black hover:text-funeral-gray transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-funeral-black text-white px-6 py-2 rounded-md hover:bg-funeral-gray transition-colors font-medium"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;