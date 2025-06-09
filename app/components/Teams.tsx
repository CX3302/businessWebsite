import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Benjamin Martindale',
    role: 'CEO',
    description: 'Leads vision and growth after 10+ years scaling construction, aftermarket, and SaaS ventures across North America and Europe. Combines an honours Commerce degree (U of T) with hands-on sales and go-to-market execution. Obsessive about turning messy ops into repeatable revenue engines.',
    imagePath: '/images/Benjamin Martindale.jpg'
  },
  {
    name: 'James Tan',
    role: 'CTO',
    description: 'Full-stack engineer & ML architect; previously built edge-AI payment systems for 7 000 Shenzhen transit gates. At Bastl he owns product architecture, security, and infrastructure. Passionate about performance tuning, open-source contribution, and mentoring dev teams.',
    imagePath: '/team/james.jpg'
  },
  {
    name: 'Wenjie Zhou',
    role: 'CRO',
    description: 'Research-driven AI strategist bridging theoretical foundations with business applications. Combines deep expertise in machine learning theory and algorithmic optimization with practical business insights. Leads research initiatives in advanced AI architectures while translating complex technical concepts into actionable business strategies.',
    imagePath: '/images/Wenjie Zhou.jpg'
  }
];

export default function Teams() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-16">Meet Our Team</h1>
        <div className="grid md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-sm"
            >
              <div className="mb-6 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
              <h4 className="text-lg text-gray-600 mb-4">{member.role}</h4>
              <p className="text-gray-600 leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
} 