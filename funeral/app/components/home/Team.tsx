'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  school?: string;
  company?: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Benjamin Martindale",
      role: "Chief Executive Officer",
      description: "Attended University of Toronto, specializes in finance and market expansion with 4+ years experience in corporate finance settings.",
      image: "benmartindale.jpg",
      school: "uoft.jpg"
    },
    {
      name: "James Tan",
      role: "Chief Technology Officer", 
      description: "Attended University of Toronto, specializes in product development and artificial intelligence.",
      image: "jamestan.jpg",
      school: "uoft.jpg"
    },
    {
      name: "Wenjie Zhou",
      role: "Chief Research Officer",
      description: "PhD candidate at Johns Hopkins University, applies expertise in theoretical physics to AI-driven automation frameworks.",
      image: "vincentzhou.jpg",
      school: "johnhopkins.jpg"
    },
    {
      name: "Aoxue Ding",
      role: "AI Engineer",
      description: "2 years at Huawei building production-grade AI systems. Strong in data modeling with 10K+ datasets processed.",
      image: "dingaoxue.jpg",
      company: "huawei.png"
    },
    {
      name: "Bolin Wu",
      role: "Software Engineer",
      description: "Engineered YOLO and OCR-based automation tools. M.S. in Computational Data Science at CMU.",
      image: "wubolin.jpg",
      school: "cmu.png"
    },
    {
      name: "Bohan Wu",
      role: "Backend Engineer",
      description: "Built scalable backend systems and AI toolchains. M.S. in Electrical & Computer Engineering at CMU.",
      image: "wubohan.jpg",
      school: "cmu.png"
    },
    {
      name: "Mark Li",
      role: "AI Researcher",
      description: "Attended UofT, at Huawei building AI systems. Integrated multi-modal LLMs with robotic systems for planning and control.",
      image: "markli.jpg",
      school: "uoft.jpg",
      company: "huawei.png"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-manrope">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-inter">
            The experts behind Prelude's innovative AI-powered business management platform
          </p>
        </motion.div>

        {/* Founders Row - 3 members */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-manrope">Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 min-h-[400px]"
              >
                <div className="text-center h-full flex flex-col">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={`/images/${member.image}`}
                      alt={member.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-manrope">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 font-inter">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-inter mb-4 flex-grow">
                    {member.description}
                  </p>
                  {/* Company and School logos */}
                  <div className="flex justify-center space-x-4 mt-auto">
                    {member.school && (
                      <div className="relative w-20 h-20">
                        <Image
                          src={`/images/${member.school}`}
                          alt="School logo"
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                    )}
                    {member.company && (
                      <div className="relative w-20 h-20">
                        <Image
                          src={`/images/${member.company}`}
                          alt="Company logo"
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engineering Team Row - 4 members */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center font-manrope">Engineering Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(3).map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (3 + index) * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-100 min-h-[400px]"
              >
                <div className="text-center h-full flex flex-col">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={`/images/${member.image}`}
                      alt={member.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-manrope">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3 font-inter">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed font-inter mb-4 flex-grow">
                    {member.description}
                  </p>
                  {/* Company and School logos */}
                  <div className="flex justify-center space-x-4 mt-auto">
                    {member.school && (
                      <div className="relative w-20 h-20">
                        <Image
                          src={`/images/${member.school}`}
                          alt="School logo"
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                    )}
                    {member.company && (
                      <div className="relative w-20 h-20">
                        <Image
                          src={`/images/${member.company}`}
                          alt="Company logo"
                          fill
                          className="object-contain rounded"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team; 