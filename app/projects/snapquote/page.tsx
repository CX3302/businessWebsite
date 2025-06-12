'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectLogo from '../../components/ProjectLogo';

const SnapquoteProject = () => {
  const timelineData = [
    { 
      phase: "Market Research & Design", 
      duration: "3 months", 
      period: "Q1 2024",
      description: "Insurance industry analysis, AI model selection, and UI/UX design for seamless quote generation"
    },
    { 
      phase: "AI Engine Development", 
      duration: "6 months", 
      period: "Q1-Q2 2024",
      description: "Built document parsing AI, GPT-4 integration, and Vision Transformer models"
    },
    { 
      phase: "Platform Development", 
      duration: "5 months", 
      period: "Q2-Q3 2024",
      description: "Created full-stack platform with Next.js, database architecture, and API integrations"
    },
    { 
      phase: "Testing & Validation", 
      duration: "3 months", 
      period: "Q3 2024",
      description: "Accuracy testing, security audits, and real-world validation with insurance partners"
    },
    { 
      phase: "Production Launch", 
      duration: "1 month", 
      period: "Q4 2024",
      description: "Full deployment with monitoring, analytics, and customer onboarding systems"
    }
  ];

  const impacts = [
    {
      metric: "90%",
      label: "Faster Processing",
      description: "Reduced quote generation time from hours to minutes using AI automation"
    },
    {
      metric: "45%",
      label: "Accuracy Improvement",
      description: "Enhanced quote accuracy through AI-powered document analysis and validation"
    },
    {
      metric: "78%",
      label: "Cost Reduction",
      description: "Decreased operational costs through automated underwriting processes"
    },
    {
      metric: "10K+",
      label: "Quotes Generated",
      description: "Successfully processed insurance quotes across multiple product lines"
    }
  ];

  const aiFeatures = [
    {
      icon: "📄",
      title: "Intelligent Document Processing",
      description: "Advanced Vision Transformers extract and validate information from insurance documents with human-level accuracy",
      details: [
        "Vision Transformer (ViT) for document image analysis",
        "OCR with confidence scoring and error correction",
        "Multi-modal understanding (text, tables, signatures)",
        "Real-time document classification and validation"
      ]
    },
    {
      icon: "🤖",
      title: "GPT-4 Powered Quote Engine",
      description: "Large language model generates comprehensive insurance quotes based on risk analysis and policy requirements",
      details: [
        "GPT-4 integration for natural language processing",
        "Risk assessment and premium calculation",
        "Policy recommendation engine",
        "Automated compliance checking"
      ]
    },
    {
      icon: "🔍",
      title: "Predictive Risk Analytics",
      description: "Machine learning models analyze historical data to predict risks and optimize pricing strategies",
      details: [
        "Ensemble models for risk prediction",
        "Real-time fraud detection algorithms",
        "Dynamic pricing optimization",
        "Behavioral pattern analysis"
      ]
    }
  ];

  const techStack = [
    { category: "Frontend", technologies: ["Next.js 14", "TypeScript", "React 18", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", technologies: ["Node.js", "Express", "tRPC", "TypeScript", "Zod Validation"] },
    { category: "AI/ML", technologies: ["OpenAI GPT-4", "Vision Transformers", "TensorFlow", "Hugging Face", "LangChain"] },
    { category: "Database", technologies: ["Prisma ORM", "PostgreSQL", "Redis", "Vector Database (Pinecone)"] },
    { category: "Infrastructure", technologies: ["Vercel", "AWS", "Docker", "GitHub Actions", "Sentry"] },
    { category: "Integration", technologies: ["Stripe", "Twilio", "SendGrid", "RESTful APIs", "Webhooks"] }
  ];

  const challenges = [
    {
      challenge: "Document Accuracy",
      solution: "Implemented ensemble Vision Transformers with confidence scoring and human-in-the-loop validation for critical decisions"
    },
    {
      challenge: "AI Hallucinations",
      solution: "Built multi-layer validation system with fact-checking, constraint enforcement, and regulatory compliance checks"
    },
    {
      challenge: "Real-time Performance",
      solution: "Optimized AI inference with model caching, parallel processing, and intelligent request batching"
    },
    {
      challenge: "Data Security",
      solution: "Implemented end-to-end encryption, GDPR compliance, and zero-trust security architecture"
    }
  ];

  const businessMetrics = [
    {
      category: "Operational Efficiency",
      metrics: [
        { label: "Processing Time", before: "4-6 hours", after: "8-12 minutes", improvement: "90% faster" },
        { label: "Manual Review", before: "100%", after: "15%", improvement: "85% reduction" },
        { label: "Error Rate", before: "12%", after: "3%", improvement: "75% improvement" }
      ]
    },
    {
      category: "Business Impact",
      metrics: [
        { label: "Customer Satisfaction", before: "6.2/10", after: "8.9/10", improvement: "43% increase" },
        { label: "Quote Conversion", before: "23%", after: "34%", improvement: "48% increase" },
        { label: "Agent Productivity", before: "12 quotes/day", after: "45 quotes/day", improvement: "275% increase" }
      ]
    }
  ];

  const innovationHighlights = [
    {
      title: "Industry First",
      description: "First insurance platform to combine Vision Transformers with GPT-4 for end-to-end quote automation"
    },
    {
      title: "AI Safety Leadership",
      description: "Pioneered multi-layer validation system preventing AI hallucinations in critical financial decisions"
    },
    {
      title: "Regulatory Innovation",
      description: "Developed AI transparency framework meeting insurance regulatory requirements across 15 states"
    },
    {
      title: "Open Source Contribution",
      description: "Released insurance-ai-toolkit with 1.8K+ GitHub stars for industry adoption"
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
            <ProjectLogo name="snapquote" className="mx-auto mb-8" />
            <h1 className="text-5xl md:text-6xl font-bold text-bastl-black mb-6">
              Snapquote
            </h1>
            <p className="text-xl text-bastl-gray-700 max-w-3xl mx-auto mb-8">
              AI-Powered Insurance Quote Generation Platform
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-bastl-tech-200 text-bastl-tech-800 px-3 py-1 rounded-full">Havenmark Insurance</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full">2024</span>
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
                  Snapquote transforms insurance quote generation through cutting-edge AI technology. Built for Havenmark Insurance, 
                  this platform combines Vision Transformers and GPT-4 to automate document processing and generate accurate quotes 
                  in minutes instead of hours, revolutionizing the insurance industry's approach to underwriting.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">Vision AI Integration</h4>
                      <p className="text-gray-600">Advanced computer vision extracts data from insurance documents with 98% accuracy</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">GPT-4 Quote Engine</h4>
                      <p className="text-gray-600">Large language model generates comprehensive, compliant insurance quotes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-bastl-accent-600 rounded-full mt-2"></div>
                    <div>
                      <h4 className="font-semibold text-bastl-black">Real-time Validation</h4>
                      <p className="text-gray-600">Multi-layer validation prevents AI errors and ensures regulatory compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-bastl-tech-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-bastl-black mb-4">Platform Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">98%</div>
                    <div className="text-sm text-gray-600">OCR Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">8min</div>
                    <div className="text-sm text-gray-600">Avg Quote Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">15+</div>
                    <div className="text-sm text-gray-600">Product Lines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bastl-accent-600">24/7</div>
                    <div className="text-sm text-gray-600">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Innovation Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">AI Innovation at Scale</h2>
            <div className="space-y-16">
              {aiFeatures.map((feature, index) => (
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
                    <div className="grid grid-cols-1 gap-3">
                      {feature.details.map((detail, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-bastl-accent-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={`bg-white rounded-xl p-8 shadow-sm ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="h-56 bg-gradient-to-br from-bastl-tech-200 to-bastl-tech-300 rounded-lg flex items-center justify-center">
                      <span className="text-6xl opacity-50">{feature.icon}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Impact Analysis */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">Business Impact Analysis</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {businessMetrics.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-bastl-black mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.metrics.map((metric, idx) => (
                      <div key={idx} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-800">{metric.label}</span>
                          <span className="text-sm font-semibold text-green-600">{metric.improvement}</span>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Before: {metric.before}</span>
                          <span>After: {metric.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">Technical Architecture</h2>
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
      <section className="py-16">
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
      <section className="py-16 bg-gray-50">
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

      {/* Innovation Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-bastl-black mb-12">Innovation Highlights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {innovationHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm border border-bastl-tech-300"
                >
                  <h3 className="text-xl font-bold text-bastl-black mb-3">{highlight.title}</h3>
                  <p className="text-gray-700">{highlight.description}</p>
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
              <h2 className="text-4xl font-bold text-bastl-black mb-4">From Manual to Intelligent</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                See how our AI transforms insurance complexities into streamlined automated processes
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
                          {item.challenge === "Document Accuracy" && "Complex insurance documents with varying formats, handwriting, and quality issues."}
                          {item.challenge === "AI Hallucinations" && "Large language models generating plausible but incorrect insurance information."}
                          {item.challenge === "Real-time Performance" && "Processing complex documents and generating quotes within acceptable timeframes."}
                          {item.challenge === "Data Security" && "Handling sensitive personal and financial information with strict compliance requirements."}
                        </p>
                        <div className="mt-4 text-sm font-semibold text-red-600">
                          {item.challenge === "Document Accuracy" && "85% manual error rate"}
                          {item.challenge === "AI Hallucinations" && "12% AI fabrication risk"}
                          {item.challenge === "Real-time Performance" && "4-6 hour processing time"}
                          {item.challenge === "Data Security" && "GDPR & SOX compliance required"}
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
                        <h3 className="text-xl font-bold mb-3">Vision AI Solution</h3>
                        <p className="text-bastl-gray-300 mb-4">{item.solution}</p>
                        <div className="text-sm font-semibold text-bastl-tech-400">
                          {item.challenge === "Document Accuracy" && "98% accuracy achieved"}
                          {item.challenge === "AI Hallucinations" && "<1% error rate maintained"}
                          {item.challenge === "Real-time Performance" && "8-12 minute processing"}
                          {item.challenge === "Data Security" && "Full compliance achieved"}
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

export default SnapquoteProject; 