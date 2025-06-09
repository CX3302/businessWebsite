'use client';

import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const popularIntegrations = [
  { name: 'Gmail', icon: '/images/gmail.png' },
  { name: 'GitHub', icon: '/images/github.png' },
  { name: 'Slack', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg' },
  { name: 'Microsoft Teams', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg' },
  { name: 'Jira', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg' },
  { name: 'Confluence', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Confluence_2017_icon.svg' },
];

const allIntegrations = [
  // Communication & Email
  { name: 'Gmail', icon: '/images/gmail.png', category: 'Communication' },
  { name: 'Slack', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg', category: 'Communication' },
  { name: 'Microsoft Teams', icon: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg', category: 'Communication' },
  { name: 'Discord', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Discord_icon.svg', category: 'Communication' },
  { name: 'Zoom', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/Zoom_logo.svg', category: 'Communication' },
  
  // Development & Version Control
  { name: 'GitHub', icon: '/images/github.png', category: 'Development' },
  { name: 'GitLab', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/GitLab_logo.svg', category: 'Development' },
  { name: 'Bitbucket', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Bitbucket-blue-logomark-only.svg', category: 'Development' },
  { name: 'Jira', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Jira_%28Software%29_logo.svg', category: 'Development' },
  { name: 'Confluence', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Confluence_2017_icon.svg', category: 'Development' },
  
  // Cloud & Infrastructure
  { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', category: 'Cloud' },
  { name: 'Google Cloud', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Google-cloud-platform.svg', category: 'Cloud' },
  { name: 'Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg', category: 'Cloud' },
  { name: 'Kubernetes', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg', category: 'Cloud' },
  
  // Productivity
  { name: 'Google Workspace', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg', category: 'Productivity' },
  { name: 'Microsoft 365', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg', category: 'Productivity' },
  { name: 'Notion', icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Notion-logo.svg', category: 'Productivity' },
  { name: 'Asana', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Asana_logo.svg', category: 'Productivity' },
];

const IntegrationCard = ({ name, icon }: { name: string; icon: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center gap-4"
  >
    <div className="w-16 h-16 relative">
      <Image
        src={icon}
        alt={`${name} logo`}
        fill
        className="object-contain"
      />
    </div>
    <p className="text-gray-800 font-medium text-center">{name}</p>
  </motion.div>
);

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold mb-6">Integrations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect your workflow with 100+ apps and services. Our AI seamlessly integrates 
            with your existing tools to enhance productivity and automation.
          </p>
        </motion.div>

        {/* Popular Integrations */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-8">Popular Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                icon={integration.icon}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Real-time Sync</h3>
              <p className="text-gray-600">
                Data is updated instantly and reflected in your workflow immediately, 
                ensuring you always have the latest information.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Secure Authentication</h3>
              <p className="text-gray-600">
                Enterprise-grade security with OAuth 2.0 and encrypted data transmission 
                keeps your information safe.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-4">Custom Workflows</h3>
              <p className="text-gray-600">
                Create automated workflows that connect multiple tools and trigger 
                actions based on your business rules.
              </p>
            </motion.div>
          </div>
        </section>

        {/* All Integrations */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">All Integrations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {allIntegrations.map((integration) => (
              <IntegrationCard
                key={integration.name}
                name={integration.name}
                icon={integration.icon}
              />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Don't see what you need?</h2>
          <p className="text-gray-600 mb-8">
            We're constantly adding new integrations. Let us know what you're looking for!
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Request Integration
          </button>
        </motion.section>
      </div>
    </main>
  );
} 