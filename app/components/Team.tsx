'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Benjamin Martindale',
    role: 'CEO',
    image: '/images/Benjamin Martindale.jpg',
    bio: 'Leads vision and growth after 10+ years scaling construction, aftermarket, and SaaS ventures across North America and Europe. Combines an honours Commerce degree (U of T) with hands-on sales and go-to-market execution. Obsessive about turning messy ops into repeatable revenue engines.'
  },
  {
    name: 'James Tan',
    role: 'CTO',
    image: '/images/James Tan.jpg',
    bio: 'Full-stack engineer & ML architect; previously built edge-AI payment systems for 7,000 Shenzhen transit gates. At Bastl he owns product architecture, security, and infrastructure. Passionate about performance tuning, open-source contribution, and mentoring dev teams.'
  },
  {
    name: 'Wenjie Zhou',
    role: 'CRO',
    image: '/images/Wenjie Zhou.jpg',
    bio: 'Research-driven AI strategist bridging theoretical foundations with business applications. Combines deep expertise in machine learning theory and algorithmic optimization with practical business insights. Leads research initiatives in advanced AI architectures while translating complex technical concepts into actionable business strategies.'
  }
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experts in AI and automation, dedicated to transforming your business
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-purple-600 font-medium mb-4">
                {member.role}
              </p>
              <p className="text-gray-600">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 