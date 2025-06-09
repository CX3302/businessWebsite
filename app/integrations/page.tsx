'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Image from 'next/image';

const integrations = [
  {
    name: 'GitHub',
    description: 'Seamlessly integrate with GitHub repositories to automate code reviews, manage pull requests, and enhance your development workflow with AI-powered insights.',
    features: ['Automated code review', 'PR analysis', 'Issue management', 'Commit suggestions'],
    icon: '/images/github-icon.png'
  },
  {
    name: 'Google Workspace',
    description: 'Transform your Google Docs, Sheets, and Slides with AI automation. Enhance collaboration and productivity across your team with smart document processing.',
    features: ['Document automation', 'Smart formatting', 'Content generation', 'Data analysis'],
    icon: '/images/google-workspace-icon.png'
  },
  {
    name: 'Slack',
    description: 'Bring AI automation directly into your team communications. Get instant insights, automate responses, and streamline workflow processes right within Slack.',
    features: ['Automated responses', 'Task management', 'Meeting summaries', 'Custom workflows'],
    icon: '/images/slack-icon.png'
  },
  {
    name: 'Microsoft Teams',
    description: 'Enhance your Microsoft Teams experience with AI-powered collaboration tools. Automate meeting scheduling, transcription, and task management.',
    features: ['Meeting automation', 'Chat assistance', 'File management', 'Team coordination'],
    icon: '/images/teams-icon.png'
  },
  {
    name: 'Jira',
    description: 'Streamline project management with AI automation in Jira. Automatically prioritize tasks, predict timelines, and optimize team workflows.',
    features: ['Task automation', 'Sprint planning', 'Timeline prediction', 'Resource optimization'],
    icon: '/images/jira-icon.png'
  },
  {
    name: 'Notion',
    description: 'Transform your Notion workspace with AI capabilities. Automate document organization, enhance search, and generate content intelligently.',
    features: ['Content organization', 'Smart templates', 'Automated updates', 'Knowledge management'],
    icon: '/images/notion-icon.png'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold mb-6"
          >
            Powerful Integrations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Connect our AI automation platform with your favorite tools and services.
            Streamline your workflow and boost productivity across your entire tech stack.
          </motion.p>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="pb-32 px-4">
        <motion.div 
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={integration.icon}
                    alt={`${integration.name} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl font-semibold">{integration.name}</h3>
              </div>
              <p className="text-gray-600 mb-6">{integration.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {integration.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to supercharge your workflow?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-300 mb-8"
          >
            Start integrating our AI automation with your tools today and experience
            the future of work.
          </motion.p>
          <motion.a
            href="/get-started"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </section>
    </main>
  );
} 