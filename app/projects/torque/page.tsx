'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectLogo from '../../components/ProjectLogo';
import Logo from '../../components/Logo';

const TorqueProject = () => {
  const timelineData = [
    { 
      phase: "Discovery & Planning", 
      duration: "3 months", 
      period: "Q1 2023",
      description: "Requirements analysis, system architecture design, and technology stack selection"
    },
    { 
      phase: "Core Development", 
      duration: "8 months", 
      period: "Q2-Q3 2023",
      description: "Built matching algorithms, database infrastructure, and API layer"
    },
    { 
      phase: "ML Model Training", 
      duration: "4 months", 
      period: "Q3-Q4 2023",
      description: "Trained LSH algorithms and semantic embeddings on 500M+ parts dataset"
    },
    { 
      phase: "Testing & Optimization", 
      duration: "2 months", 
      period: "Q4 2023",
      description: "Performance tuning, accuracy improvements, and load testing"
    },
    { 
      phase: "Deployment & Launch", 
      duration: "1 month", 
      period: "Q1 2024",
      description: "Production deployment, monitoring setup, and user training"
    }
  ];

  const impacts = [
    {
      metric: "99.8%",
      label: "Matching Accuracy",
      description: "Improved from 85% manual accuracy to 99.8% automated precision"
    },
    {
      metric: "60%",
      label: "Efficiency Gain",
      description: "Reduced manual part lookup time from hours to seconds"
    },
    {
      metric: "35%",
      label: "Inventory Turnover",
      description: "Increased inventory turnover through better demand forecasting"
    },
    {
      metric: "$2.1M",
      label: "Annual Savings",
      description: "Cost reduction through optimized inventory and reduced manual labor"
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit"] },
    { category: "Backend", technologies: ["Node.js", "Express", "TypeScript", "GraphQL"] },
    { category: "Database", technologies: ["PostgreSQL", "Redis", "Elasticsearch"] },
    { category: "ML/AI", technologies: ["Python", "TensorFlow", "Apache Spark", "Scikit-learn"] },
    { category: "Infrastructure", technologies: ["AWS", "Docker", "Kubernetes", "Apache Kafka"] },
    { category: "Monitoring", technologies: ["Prometheus", "Grafana", "ELK Stack", "Sentry"] }
  ];

  const challenges = [
    {
      challenge: "Scale & Performance",
      solution: "Implemented distributed processing with Apache Spark and Redis caching for sub-50ms response times"
    },
    {
      challenge: "Data Quality",
      solution: "Built automated data validation pipelines and ML-based data cleaning processes"
    },
    {
      challenge: "Legacy Integration",
      solution: "Created API adapters and ETL pipelines to integrate with existing ERP systems"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-bastl-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-col items-center mb-8">
              <Logo variant="light" size="lg" className="mb-4" />
              <ProjectLogo name="torque" className="mx-auto" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-bastl-black mb-6">
              Torque
            </h1>
            <p className="text-xl text-bastl-gray-700 max-w-3xl mx-auto mb-8">
              Automotive Parts Intelligence Platform
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-bastl-tech-200 text-bastl-tech-800 px-3 py-1 rounded-full">Panacea Aftermarket Co.</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">2023-2024</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">18 months</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-8">Project Overview</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Torque revolutionizes automotive parts identification and inventory management through advanced AI and machine learning. 
                  Built for Panacea Aftermarket Co., this platform processes over 500 million automotive parts with unprecedented accuracy.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">Distributed Architecture</h4>
                      <p className="text-gray-600">Microservices-based system handling massive scale with event-driven communication</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">AI-Powered Matching</h4>
                      <p className="text-gray-600">LSH algorithms and semantic embeddings for precise part identification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">Real-time Analytics</h4>
                      <p className="text-gray-600">Live inventory optimization and demand forecasting capabilities</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bastl-tech-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-bastl-black mb-4">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">500M+</div>
                    <div className="text-sm text-gray-600">Parts Database</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">50ms</div>
                    <div className="text-sm text-gray-600">Avg Response</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">99.8%</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">100K+</div>
                    <div className="text-sm text-gray-600">Daily Queries</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Did */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">What We Built</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-bastl-black mb-3">Intelligent Matching Engine</h3>
                <p className="text-gray-600 mb-4">
                  Developed LSH-based algorithms with semantic embeddings to match automotive parts across different manufacturers and specifications.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Locality-Sensitive Hashing implementation</li>
                  <li>• Word2Vec embeddings for part descriptions</li>
                  <li>• Fuzzy matching for part numbers</li>
                  <li>• Image similarity comparison</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-bastl-black mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Built LSTM networks with attention mechanisms for demand forecasting and inventory optimization.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Time-series demand prediction</li>
                  <li>• Seasonal trend analysis</li>
                  <li>• Market anomaly detection</li>
                  <li>• Automated reorder points</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-bastl-black mb-3">Dynamic Pricing Engine</h3>
                <p className="text-gray-600 mb-4">
                  Implemented reinforcement learning algorithms for real-time pricing optimization based on market conditions.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Multi-armed bandit algorithms</li>
                  <li>• Thompson sampling optimization</li>
                  <li>• Competitor price monitoring</li>
                  <li>• Margin optimization models</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Implementation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">Technical Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((category) => (
                <div key={category.category} className="bg-white border border-gray-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-bastl-black mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.technologies.map((tech) => (
                      <span key={tech} className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12 text-center">Development Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-bastl-tech-300"></div>
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-md border border-bastl-tech-300">
                      <div className="text-sm font-medium text-bastl-accent-600 mb-1">{item.period}</div>
                      <div className="text-xl font-bold text-bastl-black mb-2">{item.phase}</div>
                      <div className="text-sm text-gray-500 mb-3">{item.duration}</div>
                      <div className="text-gray-700">{item.description}</div>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-bastl-accent-600 rounded-full border-4 border-white shadow-md"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact & Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12 text-center">Impact & Results</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {impacts.map((impact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold text-bastl-accent-600 mb-2">{impact.metric}</div>
                  <div className="text-lg font-semibold text-bastl-black mb-2">{impact.label}</div>
                  <div className="text-sm text-gray-600">{impact.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-bastl-black mb-4">From Problem to Solution</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how we transformed complex automotive challenges into intelligent automated solutions
              </p>
            </div>
            
            <div className="space-y-8">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid md:grid-cols-2 gap-0 items-center"
                >
                  {/* Challenge Card */}
                  <div className="bg-gray-100 rounded-l-xl md:rounded-r-none rounded-r-xl p-8 relative">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{item.challenge} Challenge</h3>
                        <p className="text-gray-600">
                          {item.challenge === "Scale & Performance" && "Processing 500M+ automotive parts with sub-50ms response times across distributed systems."}
                          {item.challenge === "Data Quality" && "Inconsistent part data from multiple manufacturers with varying formats and standards."}
                          {item.challenge === "Legacy Integration" && "Connecting modern AI systems with decades-old ERP and inventory management systems."}
                        </p>
                        <div className="mt-4 text-sm font-semibold text-red-600">
                          {item.challenge === "Scale & Performance" && "99.9% uptime requirement"}
                          {item.challenge === "Data Quality" && "15% data inconsistency rate"}
                          {item.challenge === "Legacy Integration" && "12 different legacy systems"}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center relative z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <div className="w-12 h-12 bg-bastl-accent-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>

                  {/* Solution Card */}
                  <div className="bg-bastl-tech-900 rounded-r-xl md:rounded-l-none rounded-l-xl p-8 text-white">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-bastl-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">AI-Powered Solution</h3>
                        <p className="text-bastl-gray-300 mb-4">{item.solution}</p>
                        <div className="text-sm font-semibold text-bastl-tech-400">
                          {item.challenge === "Scale & Performance" && "50ms average response time achieved"}
                          {item.challenge === "Data Quality" && "98.5% data accuracy improvement"}
                          {item.challenge === "Legacy Integration" && "100% system compatibility"}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TorqueProject; 