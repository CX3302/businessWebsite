'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Image from 'next/image';

const projects = [
  {
    title: 'AI-Powered Customer Service',
    description: 'Automated customer support system with natural language processing capabilities.',
    imageUrl: '/projects/customer-service.jpg',
    category: 'Machine Learning',
    status: 'completed' as const
  },
  {
    title: 'Smart Inventory Management',
    description: 'Real-time inventory tracking and prediction system using AI algorithms.',
    imageUrl: '/projects/inventory.jpg',
    category: 'Automation',
    status: 'completed' as const
  },
  {
    title: 'Predictive Maintenance System',
    description: 'AI system that predicts equipment maintenance needs before failures occur.',
    imageUrl: '/projects/maintenance.jpg',
    category: 'Machine Learning',
    status: 'ongoing' as const
  },
  {
    title: 'Automated Document Processing',
    description: 'Intelligent document processing and data extraction system.',
    imageUrl: '/projects/document.jpg',
    category: 'Automation',
    status: 'ongoing' as const
  }
];

const pastProjects = [
  {
    name: "Panacea Aftermarket Co.",
    product: "Torque",
    logo: "/logos/Torque.png",
    reference: {
      name: "Moe Albazadar",
      quote: "[Placeholder] Torque has revolutionized how we handle tariff tracking, making our operations significantly more efficient and responsive to market changes.",
      role: "Leadership, Panacea Aftermarket Co."
    },
    achievements: [
      "Tariff tracking technology",
      "Stay up to date with fluctuating tariff announcements",
      "Monitor inclusion + exclusion of products",
      "Categorization of products into HS codes",
      "Identification of which HS codes are impacted",
      "Recommendation as to what inventory to move to international markets in short term due to tariff impact"
    ]
  },
  {
    name: "Rocky Technology",
    product: "FareFlow",
    logo: "/logos/Fareflow.png",
    reference: {
      name: "Robert Zhang",
      quote: "[Placeholder] FareFlow's implementation has transformed our fare gate operations, delivering unprecedented uptime and significant cost savings.",
      role: "Leadership, Rocky Technology"
    },
    achievements: [
      "Edge-inference acceleration on 7,000+ fare gates",
      "Micro-service re-architecture for 99.995% uptime & 90-second rollbacks",
      "Dynamic fare-capping engine boosting rider CSAT by 18%",
      "Predictive maintenance scheduler cutting truck rolls 31%",
      "Streaming fraud-detection GNN flagging anomalies in 2s",
      "RL auto-scaler & Spot fleets reducing cloud spend 38%",
      "PCI-DSS L1 automation with confidential-compute enclaves"
    ]
  },
  {
    name: "Havenmark",
    product: "Snapquote",
    logo: "/logos/Snapquote.png",
    reference: {
      name: "Johnny Cheng",
      quote: "[Placeholder] Snapquote has revolutionized our quoting process, turning hours of work into minutes while maintaining our pricing accuracy.",
      role: "Leadership, Havenmark"
    },
    achievements: [
      "Guided-questionnaire quoting engine",
      "Real-time unit-cost database tied to Havenmark materials",
      "Automated margin guardrails & change-order deltas",
      "1-click PDF proposal with e-signature",
      "Generates room-by-room line-item breakdown in seconds",
      "Syncs accepted quotes straight to build schedule & PO list",
      "Version history & client-approved scope lock-in",
      "Cuts estimate time from 2h → 10min while protecting margins"
    ]
  }
];

const Projects = () => {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>('all');

  const filteredProjects = projects.filter(project => 
    filter === 'all' ? true : project.status === filter
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Current Projects Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Projects</h2>
            <p className="text-xl text-gray-600">
              [Placeholder] Details about our ongoing projects will be added here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Past Projects Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Projects</h2>
            <p className="text-xl text-gray-600">
              Discover how we've transformed businesses through innovative automation solutions.
            </p>
          </motion.div>

          <div className="space-y-24">
            {pastProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className={`space-y-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 bg-white rounded-lg shadow-lg p-2 flex items-center justify-center">
                      <Image
                        src={project.logo}
                        alt={`${project.product} logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{project.name}</h3>
                      <p className="text-xl text-gray-600">{project.product}</p>
          </div>
        </div>

                  <div className="space-y-4">
                    {project.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2.5" />
                        <p className="text-gray-600">{achievement}</p>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-4 border-black pl-4 italic text-gray-600">
                    {project.reference.quote}
                    <footer className="mt-2 text-sm text-gray-500 not-italic">
                      — {project.reference.name}, {project.reference.role}
                    </footer>
                  </blockquote>
                </div>

                <div className={`bg-gray-100 rounded-2xl p-12 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="aspect-[4/3] relative bg-white rounded-lg shadow-lg flex items-center justify-center">
                    <Image
                      src={project.logo}
                      alt={`${project.product} visualization`}
                      width={400}
                      height={300}
                      className="object-contain p-8"
                    />
                  </div>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Projects; 