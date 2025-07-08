'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentProduct = {
    name: "Business Management Suite",
    description: "Complete AI-powered platform for SMBs",
    href: "/product"
  };

  const futureProducts = [
    {
      name: "Advanced Analytics Dashboard",
      description: "Predictive insights and business intelligence", 
      href: "/under-development?product=analytics"
    },
    {
      name: "Multi-Channel Integration",
      description: "Connect all your business tools seamlessly",
      href: "/under-development?product=integrations"
    }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'
    )} role="navigation" aria-label="Main navigation">
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
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 font-inter"
                    )}>
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-inter">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4">
                      {/* Current Product */}
                      <div className="mb-4">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 font-inter">
                          Available Now
                        </div>
                        <Link
                          href={currentProduct.href}
                          className="block p-3 rounded-md hover:bg-gray-900 hover:text-white transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
                      <div className="border-t border-gray-100 mb-4"></div>

                      {/* Future Products */}
                      <div>
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 font-inter">
                          Coming Soon
                        </div>
                        {futureProducts.map((product, index) => (
                          <Link
                            key={index}
                            href={product.href}
                            className="block p-3 rounded-md hover:bg-gray-50 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
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
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link href="/roadmap" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(
                      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 font-inter"
                    )}>
                      Roadmap
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 font-manrope ml-4">
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
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
            </Button>
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
            
            {/* Mobile Products Section */}
            <div className="space-y-1">
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium font-inter"
                aria-expanded={mobileProductsOpen}
              >
                Products
                <svg 
                  className={`h-4 w-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 space-y-1">
                  {/* Current Product */}
                  <div className="px-3 py-2">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-inter">
                      Available Now
                    </div>
                  </div>
                  <Link
                    href={currentProduct.href}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium font-inter"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileProductsOpen(false);
                    }}
                  >
                    {currentProduct.name}
                  </Link>
                  
                  {/* Future Products */}
                  <div className="px-3 py-2 pt-4">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide font-inter">
                      Coming Soon
                    </div>
                  </div>
                  {futureProducts.map((product, index) => (
                    <Link
                      key={index}
                      href={product.href}
                      className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium font-inter"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileProductsOpen(false);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{product.name}</span>
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full font-medium">
                          Soon
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link
              href="/roadmap"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-medium font-inter"
              onClick={() => setMobileMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Button asChild className="w-full mt-2 bg-gray-900 text-white hover:bg-gray-800 font-manrope">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Book Demo
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;