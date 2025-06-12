'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function IntegrationPage() {
  const popularIntegrations = [
    {
      name: 'Salesforce',
      description: 'CRM automation',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#00A1E0"/>
          <path d="M8 6h8v12H8V6z" fill="white"/>
        </svg>
      ),
      category: 'CRM'
    },
    {
      name: 'Microsoft Teams',
      description: 'Collaboration platform',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#6264A7"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Communication'
    },
    {
      name: 'Slack',
      description: 'Team messaging',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#4A154B"/>
          <path d="M6 10h4v4H6v-4zm8 0h4v4h-4v-4z" fill="white"/>
        </svg>
      ),
      category: 'Communication'
    },
    {
      name: 'Google Workspace',
      description: 'Productivity suite',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#4285F4"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Productivity'
    },
    {
      name: 'ServiceNow',
      description: 'IT service management',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#62D84E"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'ITSM'
    },
    {
      name: 'Jira',
      description: 'Project management',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#0052CC"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Development'
    }
  ];

  const turnkeyIntegrations = [
    {
      name: 'GitHub',
      description: 'Version control',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#24292e"/>
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" fill="white"/>
        </svg>
      ),
      category: 'Development'
    },
    {
      name: 'AWS',
      description: 'Cloud infrastructure',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#FF9900"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Cloud'
    },
    {
      name: 'Docker',
      description: 'Containerization',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#2496ED"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'DevOps'
    },
    {
      name: 'Kubernetes',
      description: 'Container orchestration',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#326CE5"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'DevOps'
    },
    {
      name: 'PostgreSQL',
      description: 'Database management',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#336791"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Database'
    },
    {
      name: 'Redis',
      description: 'In-memory data structure',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#DC382D"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Database'
    },
    {
      name: 'Kafka',
      description: 'Event streaming',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#231F20"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Streaming'
    },
    {
      name: 'Elasticsearch',
      description: 'Search and analytics',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="6" fill="#005571"/>
          <path d="M8 8h8v8H8V8z" fill="white"/>
        </svg>
      ),
      category: 'Analytics'
    }
  ];

  const integrationFeatures = [
    {
      title: "Real-time sync",
      description: "Data is updated in sync with the source and reflected in automation workflows instantly.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Enterprise security",
      description: "End-to-end encryption with SOC 2 Type II compliance and enterprise-grade access controls.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
      <div className="pt-24 pb-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Integrations
              </h1>
              <h2 className="text-3xl md:text-4xl font-light text-gray-500 mb-8">
                Bastl Agents
              </h2>
              <div className="flex items-center space-x-4 mb-8">
                <span className="text-lg text-gray-700">200+ enterprise integrations automatically synced with Bastl Agents.</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="flex space-x-4"
              >
                                  <div className="flex-shrink-0 w-12 h-12 bg-bastl-tech-200 rounded-lg flex items-center justify-center text-bastl-tech-700">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Popular Apps Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Popular apps</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {popularIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-200">
                    {integration.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{integration.name}</span>
                  <span className="text-xs text-gray-500 mt-1">{integration.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <hr className="max-w-7xl mx-auto border-gray-200 mb-16" />

        {/* Turnkey Integrations Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Turnkey integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {turnkeyIntegrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.03 }}
                  className="flex flex-col items-center text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 mb-3 group-hover:scale-110 transition-transform duration-200">
                    {integration.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-900">{integration.name}</span>
                  <span className="text-xs text-gray-500 mt-1">{integration.description}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Banner */}
                      <div className="bg-bastl-tech-700 text-white py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-lg mb-4 md:mb-0">
                Bastl co-launches enterprise AI automation to bring agentic AI to Fortune 500 companies across industries.
              </p>
              <Link
                href="/get-started"
                                  className="bg-white text-bastl-tech-700 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
} 