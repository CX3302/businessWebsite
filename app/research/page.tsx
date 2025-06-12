'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';

export default function ResearchPage() {
  const aiFoundations = [
    {
      icon: "🧠",
      title: "Machine Learning",
      description: "Algorithms that learn from data to make predictions and decisions without explicit programming",
      applications: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Recommendation Systems"]
    },
    {
      icon: "🔬",
      title: "Deep Learning", 
      description: "Neural networks with multiple layers that can learn complex patterns from large datasets",
      applications: ["Computer Vision", "Natural Language Processing", "Speech Recognition", "Medical Imaging"]
    },
    {
      icon: "💬",
      title: "Natural Language Processing",
      description: "AI that understands, interprets, and generates human language in meaningful ways",
      applications: ["Chatbots", "Language Translation", "Sentiment Analysis", "Document Processing"]
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "AI systems that can interpret and understand visual information from the world",
      applications: ["Object Detection", "Facial Recognition", "Medical Imaging", "Quality Control"]
    }
  ];

  const researchAreas = [
    {
      title: "Graph Neural Networks",
      description: "Advanced neural architectures for modeling complex relationships and dependencies",
      status: "Active Research",
      impact: "Revolutionizing network analysis, social media, and molecular discovery",
      publications: 12,
      applications: ["Social Network Analysis", "Drug Discovery", "Transportation Systems", "Knowledge Graphs"]
    },
    {
      title: "Federated Learning",
      description: "Training AI models across decentralized data sources while preserving privacy",
      status: "Production Ready",
      impact: "Enabling collaborative AI without compromising data security",
      publications: 8,
      applications: ["Healthcare Data", "Financial Services", "IoT Networks", "Edge Computing"]
    },
    {
      title: "Multimodal AI",
      description: "AI systems that can process and understand multiple types of data simultaneously",
      status: "Breakthrough Phase",
      impact: "Creating more human-like AI understanding and interaction",
      publications: 15,
      applications: ["Virtual Assistants", "Content Creation", "Medical Diagnosis", "Autonomous Systems"]
    },
    {
      title: "Quantum Machine Learning",
      description: "Leveraging quantum computing principles to enhance machine learning capabilities",
      status: "Experimental",
      impact: "Potential exponential speedup for specific ML problems",
      publications: 5,
      applications: ["Cryptography", "Optimization", "Material Science", "Financial Modeling"]
    }
  ];

  const aiIntegrations = [
    {
      industry: "Healthcare",
      currentProcess: "Manual medical record review",
      aiEnhancement: "Automated diagnosis assistance",
      improvement: "85% faster diagnosis",
      icon: "🏥",
      technologies: ["Computer Vision", "NLP", "Predictive Analytics"],
      realWorldExample: "AI-powered radiology systems detecting cancer 30% more accurately than humans alone"
    },
    {
      industry: "Finance",
      currentProcess: "Traditional risk assessment",
      aiEnhancement: "Real-time fraud detection",
      improvement: "99.7% fraud prevention",
      icon: "💰",
      technologies: ["Anomaly Detection", "Pattern Recognition", "Time Series Analysis"],
      realWorldExample: "ML algorithms processing millions of transactions per second to prevent financial fraud"
    },
    {
      industry: "Manufacturing",
      currentProcess: "Scheduled maintenance",
      aiEnhancement: "Predictive maintenance",
      improvement: "40% cost reduction",
      icon: "🏭",
      technologies: ["IoT Analytics", "Predictive Modeling", "Computer Vision"],
      realWorldExample: "Smart sensors predicting equipment failures weeks in advance, preventing costly downtime"
    },
    {
      industry: "Retail",
      currentProcess: "Generic marketing campaigns",
      aiEnhancement: "Personalized recommendations",
      improvement: "250% conversion increase",
      icon: "🛍️",
      technologies: ["Recommendation Systems", "Customer Analytics", "Behavioral Modeling"],
      realWorldExample: "AI analyzing customer behavior to deliver personalized shopping experiences"
    },
    {
      industry: "Transportation",
      currentProcess: "Fixed route planning",
      aiEnhancement: "Dynamic optimization",
      improvement: "30% efficiency gain",
      icon: "🚗",
      technologies: ["Graph Neural Networks", "Real-time Analytics", "Optimization Algorithms"],
      realWorldExample: "AI optimizing delivery routes in real-time based on traffic, weather, and demand patterns"
    },
    {
      industry: "Education",
      currentProcess: "One-size-fits-all learning",
      aiEnhancement: "Adaptive learning paths",
      improvement: "60% better outcomes",
      icon: "📚",
      technologies: ["Learning Analytics", "Natural Language Processing", "Personalization"],
      realWorldExample: "AI tutoring systems adapting to individual student learning styles and pace"
    }
  ];

  const researchMetrics = [
    { label: "Research Papers", value: "150+", description: "Published in top-tier conferences" },
    { label: "Patents Filed", value: "25", description: "Innovative AI methodologies" },
    { label: "Industry Partnerships", value: "40+", description: "Collaborative research projects" },
    { label: "Open Source", value: "30+", description: "Community contributions" }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-bastl-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-bastl-black mb-6">
                AI Research & Innovation
              </h1>
              <p className="text-xl text-bastl-gray-700 max-w-3xl mx-auto mb-8">
                Pioneering the future of artificial intelligence through cutting-edge research, 
                practical applications, and transformative business integrations
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-bastl-tech-200 text-bastl-tech-800 px-4 py-2 rounded-full">Machine Learning</span>
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Deep Learning</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Computer Vision</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Natural Language Processing</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Foundations */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-bastl-black mb-4">Understanding AI Foundations</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Artificial Intelligence encompasses multiple interconnected fields, each contributing to creating 
                  intelligent systems that can perceive, learn, reason, and act
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiFoundations.map((foundation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <div className="text-4xl mb-4 text-center">{foundation.icon}</div>
                    <h3 className="text-xl font-bold text-bastl-black mb-3 text-center">{foundation.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{foundation.description}</p>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-800 text-sm">Applications:</h4>
                      {foundation.applications.map((app, idx) => (
                        <div key={idx} className="text-xs text-gray-500 flex items-center">
                          <div className="w-1 h-1 bg-bastl-tech-700 rounded-full mr-2"></div>
                          {app}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Current Research Areas */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-bastl-black mb-4">Current Research Areas</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  We're pushing the boundaries of AI through focused research in emerging fields 
                  that will shape the future of technology
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {researchAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-bastl-black">{area.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        area.status === 'Active Research' ? 'bg-blue-100 text-blue-800' :
                        area.status === 'Production Ready' ? 'bg-green-100 text-green-800' :
                        area.status === 'Breakthrough Phase' ? 'bg-purple-100 text-purple-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {area.status}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Research Impact:</h4>
                      <p className="text-gray-600 text-sm">{area.impact}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {area.applications.map((app, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{area.publications} publications</span>
                      <span>Research ongoing</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research Metrics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-bastl-black mb-4">Research Impact</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Our research contributions are making a significant impact in the field of AI
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {researchMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center"
                  >
                    <div className="text-3xl font-bold text-bastl-accent-600 mb-2">{metric.value}</div>
                    <div className="text-lg font-semibold text-bastl-black mb-1">{metric.label}</div>
                    <p className="text-gray-600 text-sm">{metric.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-bastl-black mb-4">Industry Applications</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Transforming industries through practical AI implementations
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiIntegrations.map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">{integration.icon}</span>
                      <h3 className="text-xl font-bold text-bastl-black">{integration.industry}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Current Process:</h4>
                        <p className="text-gray-600 text-sm">{integration.currentProcess}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">AI Enhancement:</h4>
                        <p className="text-gray-600 text-sm">{integration.aiEnhancement}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Improvement:</h4>
                        <p className="text-bastl-accent-600 font-medium">{integration.improvement}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {integration.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-bastl-tech-100 text-bastl-tech-800 px-2 py-1 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Real World Example:</h4>
                        <p className="text-gray-600 text-sm">{integration.realWorldExample}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
} 