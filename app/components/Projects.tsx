'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Torque by Panacea Aftermarket Co.',
      description: 'Distributed automotive parts matching system using LSH algorithms and semantic embeddings for 99.8% accuracy across 500M+ part database.',
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Apache Spark'],
      metrics: {
        accuracy: '99.8%',
        latency: '50ms',
        throughput: '100K+ queries/day'
      },
      image: '/images/Torque.png',
      link: '/projects/torque',
      year: '2023',
      duration: '18 months'
    },
    {
      title: 'FareFlow by Rocky Technology',
      description: 'ML-powered transit fare optimization using Graph Neural Networks and real-time demand forecasting with LSTM + attention mechanisms.',
      techStack: ['Python', 'TensorFlow', 'GCP', 'Kafka', 'BigQuery'],
      metrics: {
        efficiency: '15% revenue ↑',
        latency: '50ms p99',
        availability: '99.99%'
      },
      image: '/images/Fareflow.png',
      link: '/projects/fareflow',
      year: '2023',
      duration: '12 months'
    },
    {
      title: 'Snapquote by Havenmark',
      description: 'AI-powered insurance quote generation using Vision Transformers and BERT for document parsing with 95% F1 score accuracy.',
      techStack: ['TypeScript', 'Next.js', 'GPT-4', 'Prisma', 'Vercel'],
      metrics: {
        processing: '90% faster',
        accuracy: '45% improvement',
        automation: '100% trace coverage'
      },
      image: '/images/Snapquote.png',
      link: '/projects/snapquote',
      year: '2024',
      duration: '8 months'
    }
  ];

  const timeline = [
    { year: '2022', event: 'Founded Bastl', description: 'Started developing next-generation AI automation platform' },
    { year: '2023', event: 'First Enterprise Deployments', description: 'Launched Torque and FareFlow for automotive and transit industries' },
    { year: '2024', event: 'Insurance Innovation', description: 'Deployed Snapquote AI-powered quote generation system' },
    { year: '2025', event: 'Stealth Project Launch', description: 'Preparing to launch revolutionary Prelude platform' }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-bastl-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-xl text-bastl-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Enterprise-grade AI solutions deployed across automotive, transit, and insurance industries
          </motion.p>
        </div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-bastl-black text-center mb-8">Development Timeline</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-bastl-tech-300"></div>
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-lg p-4 shadow-md border border-bastl-tech-300">
                    <div className="text-lg font-bold text-bastl-black">{item.year}</div>
                    <div className="text-md font-semibold text-bastl-gray-700">{item.event}</div>
                    <div className="text-sm text-bastl-tech-700">{item.description}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bastl-accent-600 rounded-full border-4 border-white shadow-md"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={project.link}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-bastl-tech-300 h-full">
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-bastl-tech-700 font-medium">{project.year}</span>
                    <span className="text-xs text-bastl-tech-600">{project.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-bastl-black mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-bastl-gray-700 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-bastl-tech-800 mb-2">Tech Stack:</div>
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-xs bg-bastl-tech-200 text-bastl-gray-700 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-bastl-tech-800 mb-2">Key Metrics:</div>
                    <div className="grid grid-cols-1 gap-1">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-xs">
                          <span className="text-bastl-tech-700 capitalize">{key}:</span>
                          <span className="text-bastl-black font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-bastl-tech-700 font-medium text-sm">
                    Learn more
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            href="/projects/upcoming"
            className="inline-flex items-center px-8 py-3 border border-bastl-tech-700 text-base font-medium rounded-lg text-bastl-tech-700 bg-white hover:bg-bastl-tech-100 transition-colors"
          >
            View Current Projects
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 