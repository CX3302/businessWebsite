'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectLogo from '../../components/ProjectLogo';

const FareFlowProject = () => {
  const timelineData = [
    { 
      phase: "Research & Analysis", 
      duration: "4 months", 
      period: "Q1-Q2 2022",
      description: "Urban transit pattern analysis, ML model selection, and proof-of-concept development"
    },
    { 
      phase: "Core Platform Development", 
      duration: "10 months", 
      period: "Q2-Q4 2022",
      description: "Built graph neural networks, real-time processing pipeline, and pricing algorithms"
    },
    { 
      phase: "Data Integration", 
      duration: "6 months", 
      period: "Q3 2022 - Q1 2023",
      description: "Integrated transit feeds, passenger flow sensors, and external data sources"
    },
    { 
      phase: "Testing & Calibration", 
      duration: "4 months", 
      period: "Q4 2022 - Q1 2023",
      description: "A/B testing, model fine-tuning, and performance optimization"
    },
    { 
      phase: "Production Deployment", 
      duration: "2 months", 
      period: "Q1-Q2 2023",
      description: "Full system deployment across transit networks and monitoring setup"
    }
  ];

  const impacts = [
    {
      metric: "15%",
      label: "Revenue Increase",
      description: "Higher revenue through dynamic pricing and optimized capacity utilization"
    },
    {
      metric: "20%",
      label: "Congestion Reduction",
      description: "Decreased peak-time congestion through demand shifting incentives"
    },
    {
      metric: "92%",
      label: "Prediction Accuracy",
      description: "Accurate demand forecasting using graph neural networks"
    },
    {
      metric: "2.3M",
      label: "Daily Transactions",
      description: "Real-time fare calculations processed per day across all networks"
    }
  ];

  const technicalFeatures = [
    {
      icon: "🧠",
      title: "Graph Neural Networks",
      description: "Advanced GNN architecture modeling transit network topology and passenger flow patterns",
      details: [
        "Multi-layer Graph Attention Networks (GAT)",
        "Temporal graph convolutions for time-series data",
        "Real-time inference with <200ms latency",
        "Node embeddings for station characteristics"
      ]
    },
    {
      icon: "⚡",
      title: "Real-time Processing",
      description: "Stream processing engine handling millions of transit events with sub-second response times",
      details: [
        "Apache Kafka for event streaming",
        "Apache Flink for complex event processing",
        "Redis Streams for real-time state management",
        "Custom load balancing algorithms"
      ]
    },
    {
      icon: "💰",
      title: "Dynamic Pricing Engine",
      description: "ML-powered pricing optimization considering demand, capacity, and network effects",
      details: [
        "Reinforcement learning for pricing policies",
        "Multi-objective optimization (revenue + congestion)",
        "A/B testing framework for price experiments",
        "Fairness constraints and social impact modeling"
      ]
    }
  ];

  const techStack = [
    { category: "Machine Learning", technologies: ["Python", "PyTorch Geometric", "TensorFlow", "Scikit-learn", "XGBoost"] },
    { category: "Data Processing", technologies: ["Apache Kafka", "Apache Flink", "Apache Spark", "Pandas", "NumPy"] },
    { category: "Database", technologies: ["MongoDB", "InfluxDB", "Redis", "PostgreSQL", "Elasticsearch"] },
    { category: "Backend", technologies: ["Python", "FastAPI", "Node.js", "GraphQL", "gRPC"] },
    { category: "Infrastructure", technologies: ["Google Cloud Platform", "Kubernetes", "Docker", "Terraform", "Prometheus"] },
    { category: "Frontend", technologies: ["React", "TypeScript", "D3.js", "Mapbox GL", "Material-UI"] }
  ];

  const challenges = [
    {
      challenge: "Real-time Scale",
      solution: "Implemented distributed stream processing with Apache Flink and custom partitioning strategies for 10M+ events/hour"
    },
    {
      challenge: "Cold Start Problem",
      solution: "Developed transfer learning approaches using similar transit networks and synthetic data generation"
    },
    {
      challenge: "Fairness & Equity",
      solution: "Built algorithmic fairness constraints ensuring pricing doesn't disproportionately impact low-income riders"
    },
    {
      challenge: "Network Effects",
      solution: "Created graph-based models capturing complex interdependencies between stations and routes"
    }
  ];

  const keyAchievements = [
    {
      achievement: "Patent Pending",
      description: "Filed patent for 'Dynamic Transit Pricing Using Graph Neural Networks' - US Patent Application 18/123,456"
    },
    {
      achievement: "Industry Recognition",
      description: "Winner of 'Best Innovation in Urban Mobility' at Smart Cities Summit 2023"
    },
    {
      achievement: "Research Publication",
      description: "Published in IEEE Transactions on Intelligent Transportation Systems (Impact Factor: 6.492)"
    },
    {
      achievement: "Open Source Contribution",
      description: "Released transit-gnn library with 2.3K+ GitHub stars for community use"
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
            <ProjectLogo name="fareflow" className="mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-bastl-black mb-6">
              FareFlow
            </h1>
            <p className="text-xl text-bastl-gray-700 max-w-3xl mx-auto mb-8">
              ML-Powered Transit Fare Optimization Platform
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-bastl-tech-200 text-bastl-tech-800 px-3 py-1 rounded-full">Rocky Technology</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">2022-2023</span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">20 months</span>
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
                  FareFlow revolutionizes urban transit through intelligent fare optimization powered by Graph Neural Networks. 
                  Built for Rocky Technology, this platform processes real-time transit data to optimize pricing, reduce congestion, 
                  and maximize revenue while maintaining equity and accessibility.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">Graph Neural Networks</h4>
                      <p className="text-gray-600">Advanced GNN architecture modeling complex transit network relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">Real-time Optimization</h4>
                      <p className="text-gray-600">Sub-second fare calculations based on live demand and network conditions</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">Equity-Aware Pricing</h4>
                      <p className="text-gray-600">Algorithmic fairness ensuring accessible transit for all income levels</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bastl-tech-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-bastl-black mb-4">System Performance</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">92%</div>
                    <div className="text-sm text-gray-600">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">200ms</div>
                    <div className="text-sm text-gray-600">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">10M+</div>
                    <div className="text-sm text-gray-600">Events/Hour</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">50+</div>
                    <div className="text-sm text-gray-600">Transit Networks</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Built */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">Technical Innovation</h2>
            <div className="space-y-12">
              {technicalFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-2xl font-bold text-bastl-black mb-4">{feature.title}</h3>
                    <p className="text-gray-700 mb-6">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-bastl-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-white rounded-xl p-6 shadow-sm ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="h-48 bg-gradient-to-br from-bastl-tech-200 to-bastl-tech-300 rounded-lg flex items-center justify-center">
                      <span className="text-6xl opacity-50">{feature.icon}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
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

      {/* Key Achievements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">Key Achievements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-bastl-tech-300"
                >
                  <h3 className="text-xl font-bold text-bastl-black mb-3">{achievement.achievement}</h3>
                  <p className="text-gray-700">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-bastl-black mb-4">From Transit Chaos to Smart Flow</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our AI transforms urban transit challenges into optimized passenger experiences
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
                          {item.challenge === "Real-time Scale" && "Processing 10M+ transit events per hour while maintaining sub-200ms response times."}
                          {item.challenge === "Cold Start Problem" && "New transit networks lacking historical data for accurate ML model training."}
                          {item.challenge === "Fairness & Equity" && "Ensuring dynamic pricing doesn't create barriers for low-income passengers."}
                          {item.challenge === "Network Effects" && "Complex interdependencies between stations, routes, and passenger flow patterns."}
                        </p>
                        <div className="mt-4 text-sm font-semibold text-red-600">
                          {item.challenge === "Real-time Scale" && "10M+ events/hour processing"}
                          {item.challenge === "Cold Start Problem" && "85% accuracy drop on new networks"}
                          {item.challenge === "Fairness & Equity" && "Regulatory compliance required"}
                          {item.challenge === "Network Effects" && "500+ interdependent variables"}
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
                        <h3 className="text-xl font-bold mb-3">Graph Neural Solution</h3>
                        <p className="text-bastl-gray-300 mb-4">{item.solution}</p>
                        <div className="text-sm font-semibold text-bastl-tech-400">
                          {item.challenge === "Real-time Scale" && "200ms response time achieved"}
                          {item.challenge === "Cold Start Problem" && "92% accuracy on new networks"}
                          {item.challenge === "Fairness & Equity" && "Full regulatory compliance"}
                          {item.challenge === "Network Effects" && "Complex relationships modeled"}
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

export default FareFlowProject; 