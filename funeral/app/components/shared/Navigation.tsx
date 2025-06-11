'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentProduct = {
    name: "AI Scheduling System",
    description: "Eliminate double-bookings forever",
    href: "/product"
  };

  const futureProducts = [
    {
      name: "Vendor Network Integration",
      description: "Direct booking with service providers", 
      href: "/under-development?product=vendors"
    },
    {
      name: "Automated CRM Follow-up",
      description: "AI-powered aftercare and revenue optimization",
      href: "/under-development?product=crm"
    }
  ];

  const handleMouseEnter = () => {
    setShowProductDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowProductDropdown(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    }`} role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md"
            aria-label="Prelude - Home"
          >
            <Image
              src="/images/plogo.png"
              alt="Prelude Logo"
              width={400}
              height={150}
              className="h-32 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-inter"
            >
              Home
            </Link>
            
            {/* Product Dropdown Container - handles hover for both button and dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Products Button */}
              <div className="flex items-center text-gray-700 hover:text-gray-900 transition-colors font-medium cursor-pointer px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-inter">
                Products
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${showProductDropdown ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Dropdown Menu - positioned to connect seamlessly with button */}
              <div className={`absolute top-full left-0 w-80 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 transform ${
                showProductDropdown
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-1 scale-95 pointer-events-none'
              }`} role="menu" aria-labelledby="products-menu">
                {/* Invisible bridge to ensure no gap */}
                <div className="absolute -top-1 left-0 right-0 h-1 bg-transparent"></div>
                
                {/* Current Product */}
                <div className="p-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 font-inter">
                    Available Now
                  </div>
                  <Link 
                    href={currentProduct.href}
                    className="block p-3 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                    role="menuitem"
                  >
                    <div className="font-semibold text-gray-900 group-hover:text-white font-manrope">
                      {currentProduct.name}
                    </div>
                    <div className="text-sm text-gray-600 group-hover:text-gray-300 font-inter">
                      {currentProduct.description}
                    </div>
                  </Link>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100"></div>

                {/* Future Products */}
                <div className="p-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2 font-inter">
                    Coming Soon
                  </div>
                  {futureProducts.map((product, index) => (
                    <Link
                      key={index}
                      href={product.href}
                      className="block p-3 rounded-md hover:bg-gray-50 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                      role="menuitem"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold text-gray-900 group-hover:text-gray-700 font-manrope">
                            {product.name}
                          </div>
                          <div className="text-sm text-gray-600 font-inter">
                            {product.description}
                          </div>
                        </div>
                        <div className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium font-inter">
                          Soon
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link 
              href="/roadmap"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-inter"
            >
              Roadmap
            </Link>
            <Link 
              href="/contact"
              className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 font-manrope"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main menu"
            >
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-lg border-t border-gray-100">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium font-inter"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/product"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium font-inter"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Scheduling System
            </Link>
            <Link
              href="/roadmap"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium font-inter"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md bg-gray-900 text-white hover:bg-gray-800 font-medium text-center font-manrope"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;