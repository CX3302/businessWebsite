'use client';

import Hero from './components/Hero';
import Mission from './components/Mission';
import Process from './components/Process';
import Research from './components/Research';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Logo from './components/Logo';

export default function Home() {
  return (
    <main className="bg-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-bastl-deep-800/8 via-bastl-accent-700/3 to-bastl-primary-900/8" />
        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
            </filter>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(7, 89, 133, 0.1)' }} />
              <stop offset="30%" style={{ stopColor: 'rgba(6, 182, 212, 0.05)' }} />
              <stop offset="70%" style={{ stopColor: 'rgba(59, 154, 245, 0.08)' }} />
              <stop offset="100%" style={{ stopColor: 'rgba(30, 103, 119, 0.1)' }} />
            </linearGradient>
          </defs>
          <g filter="url(#goo)">
            <circle cx="15%" cy="25%" r="140" fill="url(#gradient)" />
            <circle cx="85%" cy="75%" r="160" fill="url(#gradient)" />
            <circle cx="45%" cy="15%" r="120" fill="url(#gradient)" />
            <circle cx="25%" cy="85%" r="150" fill="url(#gradient)" />
            <circle cx="75%" cy="35%" r="170" fill="url(#gradient)" />
            <circle cx="60%" cy="60%" r="100" fill="url(#gradient)" />
          </g>
        </svg>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(6, 182, 212, 0.03) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <Hero />
      <div className="space-y-8">
        <Mission />
        <Process />
        <Research />
        <Projects />
        <Team />
        <Contact />
      </div>
      
      {/* Footer Section */}
      <section className="bg-bastl-deep-900 text-white py-12 relative">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M0 32V0h32" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Company Info */}
            <div>
              <div className="mb-6">
                <Logo size="lg" />
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-bastl-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-bastl-gray-300">hello@bastl.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-bastl-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
              <div className="space-y-4">
                <a href="#mission" className="block text-bastl-gray-300 hover:text-white transition-colors">Our Mission</a>
                <a href="#process" className="block text-bastl-gray-300 hover:text-white transition-colors">Our Process</a>
                <a href="#research" className="block text-bastl-gray-300 hover:text-white transition-colors">Research</a>
                <a href="#projects" className="block text-bastl-gray-300 hover:text-white transition-colors">Projects</a>
                <a href="#team" className="block text-bastl-gray-300 hover:text-white transition-colors">Team</a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect</h3>
              <div className="space-y-4">
                <a 
                  href="https://linkedin.com/company/bastl-ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 text-bastl-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://github.com/bastl-ai" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 text-bastl-gray-300 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-bastl-tech-700">
            <div className="text-center text-bastl-gray-400">
              <p>&copy; 2024 Bastl. All rights reserved.</p>
              <p className="mt-2">Building the engines that let great ideas run themselves.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
