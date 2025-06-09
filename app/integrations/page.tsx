'use client';

import Navigation from '../components/Navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';

const popularIntegrations = [
  { name: 'Slack', icon: '/logos/integrations/slack.svg' },
  { name: 'Microsoft Teams', icon: '/logos/integrations/teams.svg' },
  { name: 'Google Workspace', icon: '/logos/integrations/google.svg' },
  { name: 'GitHub', icon: '/logos/integrations/github.svg' },
  { name: 'Jira', icon: '/logos/integrations/jira.svg' },
  { name: 'Confluence', icon: '/logos/integrations/confluence.svg' },
];

const allIntegrations = [
  // Development & Version Control
  { name: 'GitHub', icon: '/logos/integrations/github.svg', category: 'Development' },
  { name: 'GitLab', icon: '/logos/integrations/gitlab.svg', category: 'Development' },
  { name: 'Bitbucket', icon: '/logos/integrations/bitbucket.svg', category: 'Development' },
  { name: 'Jira', icon: '/logos/integrations/jira.svg', category: 'Development' },
  { name: 'Confluence', icon: '/logos/integrations/confluence.svg', category: 'Development' },
  
  // Communication
  { name: 'Slack', icon: '/logos/integrations/slack.svg', category: 'Communication' },
  { name: 'Microsoft Teams', icon: '/logos/integrations/teams.svg', category: 'Communication' },
  { name: 'Discord', icon: '/logos/integrations/discord.svg', category: 'Communication' },
  { name: 'Zoom', icon: '/logos/integrations/zoom.svg', category: 'Communication' },
  
  // Cloud & Infrastructure
  { name: 'AWS', icon: '/logos/integrations/aws.svg', category: 'Cloud' },
  { name: 'Google Cloud', icon: '/logos/integrations/gcp.svg', category: 'Cloud' },
  { name: 'Azure', icon: '/logos/integrations/azure.svg', category: 'Cloud' },
  { name: 'Kubernetes', icon: '/logos/integrations/kubernetes.svg', category: 'Cloud' },
  
  // Productivity
  { name: 'Google Workspace', icon: '/logos/integrations/google.svg', category: 'Productivity' },
  { name: 'Microsoft 365', icon: '/logos/integrations/office365.svg', category: 'Productivity' },
  { name: 'Notion', icon: '/logos/integrations/notion.svg', category: 'Productivity' },
  { name: 'Asana', icon: '/logos/integrations/asana.svg', category: 'Productivity' },
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