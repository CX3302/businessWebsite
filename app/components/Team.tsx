'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      name: 'Benjamin Martindale',
      role: 'CEO',
      image: '/images/Benjamin Martindale.jpg',
      description: 'Leads vision and growth after 10+ years scaling construction, aftermarket, and SaaS ventures across North America and Europe. Combines an honours Commerce degree (U of T) with hands-on sales and go-to-market execution. Obsessive about turning messy ops into repeatable revenue engines.',
      expertise: ['Business Strategy', 'Sales Leadership', 'Market Expansion', 'Operations']
    },
    {
      name: 'James Tan',
      role: 'CTO',
      image: '/images/James Tan.jpg',
      description: 'Full-stack engineer & ML architect; previously built edge-AI payment systems for 7,000 Shenzhen transit gates. At Bastl he owns product architecture, security, and infrastructure. Passionate about performance tuning, open-source contribution, and mentoring dev teams.',
      expertise: ['Full-stack Development', 'ML Architecture', 'Edge-AI Systems', 'Infrastructure']
    },
    {
      name: 'Wenjie Zhou',
      role: 'CRO',
      image: '/images/Wenjie Zhou.jpg',
      description: 'Research-driven AI strategist bridging theoretical foundations with business applications. Combines deep expertise in machine learning theory and algorithmic optimization with practical business insights. Leads research initiatives in advanced AI architectures while translating complex technical concepts into actionable business strategies.',
      expertise: ['AI Strategy', 'ML Theory', 'Research Direction', 'Business Analytics']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-bastl-black mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-bastl-tech-700 max-w-3xl mx-auto">
            Experts in AI and automation, dedicated to transforming businesses through innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-bastl-tech-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-bastl-tech-300 shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-bastl-black mb-2">
                    {member.name}
                  </h3>
                  <p className="text-bastl-tech-700 font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-bastl-tech-100 text-bastl-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our leadership team combines deep technical expertise with industry knowledge to deliver cutting-edge AI solutions that help businesses thrive in the digital age.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 