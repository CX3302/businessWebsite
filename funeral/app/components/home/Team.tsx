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
      description: "Bachelor of Finance at University of Toronto, specializes in finance and market expansion with 4+ years experience in corporate finance settings.",
      image: "benmartindale.jpg",
      school: "uoft.jpg",
      company: "deloitte.jpg"
    },
    {
      name: "James Tan",
      role: "Chief Technology Officer", 
      description: "Computer Engineering at University of Toronto, specializes in product development. Built agentic systems used by companies with 100 million ARR.",
      image: "jamestan.jpg",
      school: "uoft.jpg",
      company: "instalily.jpg"
    },
    {
      name: "Wenjie Zhou",
      role: "Chief Research Officer",
      description: "PhD candidate at Johns Hopkins University, applies expertise in theoretical physics to AI-driven automation frameworks.",
      image: "vincentzhou.jpg",
      school: "umich.jpg",
      company: "johnhopkins.jpg"
    },
    {
      name: "Aoxue Ding",
      role: "AI Engineer",
      description: "M.S. candidate at UIUC. 2 years at Huawei building production-grade AI systems. Strong in data modeling with 10K+ datasets processed.",
      image: "dingaoxue.jpg",
      school: "expedia.jpg",
      company: "huawei.png"
    },
    {
      name: "Bolin Wu",
      role: "Software Engineer",
      description: "M.S. in Computational Data Science at CMU. Engineered YOLO and OCR-based automation tools used by 20+ companies.",
      image: "wubolin.jpg",
      school: "cmu.png",
      company: "vertex.jpg"
    },
    {
      name: "Bohan Wu",
      role: "Backend Engineer",
      description: "M.S. in Electrical & Computer Engineering at CMU. Built scalable backend systems and AI toolchains. Specialize in AI agentic systems.",
      image: "wubohan.jpg",
      school: "umich.jpg",
      company: "cmu.png"
    },
    {
      name: "Mark Li",
      role: "AI Researcher",
      description: "Engineering Science at University of Toronto, currently at Huawei building AI systems. Integrated multi-modal LLMs with robotic systems for planning and control.",
      image: "markli.jpg",
      school: "uoft.jpg",
      company: "huawei.png"
    }
  ];

  const LeadershipCard = ({ member, index, delay }: { member: TeamMember; index: number; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-[540px] flex flex-col relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/50 transition-all duration-300 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Profile Image with enhanced styling */}
          <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-blue-900/10"></div>
            <Image
              src={`/images/${member.image}`}
              alt={member.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 144px, 144px"
            />
          </div>
          
          {/* Name and Role */}
          <h3 className="text-xl font-bold text-gray-900 mb-1 font-manrope group-hover:text-blue-900 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4 font-inter">
            {member.role}
          </p>
          
          {/* Description - flex-grow to push logos to bottom */}
          <p className="text-gray-600 text-sm leading-relaxed font-inter mb-6 flex-grow">
            {member.description}
          </p>
          
          {/* Company and School logos - always at bottom - LARGER for leadership */}
          <div className="flex justify-center items-center gap-3 mt-auto">
            {member.school && (
              <div className="relative w-[104px] h-[104px] opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={`/images/${member.school}`}
                  alt="School logo"
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )}
            {member.company && (
              <div className="relative w-[104px] h-[104px] opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={`/images/${member.company}`}
                  alt="Company logo"
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const EngineeringCard = ({ member, index, delay }: { member: TeamMember; index: number; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 h-[540px] flex flex-col relative overflow-hidden">
        {/* Subtle gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/50 transition-all duration-300 pointer-events-none"></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {/* Profile Image with enhanced styling */}
          <div className="relative w-36 h-36 mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-blue-900/10"></div>
            <Image
              src={`/images/${member.image}`}
              alt={member.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 144px, 144px"
            />
          </div>
          
          {/* Name and Role */}
          <h3 className="text-xl font-bold text-gray-900 mb-1 font-manrope group-hover:text-blue-900 transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-sm font-semibold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4 font-inter">
            {member.role}
          </p>
          
          {/* Description - flex-grow to push logos to bottom */}
          <p className="text-gray-600 text-sm leading-relaxed font-inter mb-6 flex-grow">
            {member.description}
          </p>
          
          {/* Company and School logos - always at bottom */}
          <div className="flex justify-center items-center gap-3 mt-auto">
            {member.school && (
              <div className="relative w-20 h-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={`/images/${member.school}`}
                  alt="School logo"
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )}
            {member.company && (
              <div className="relative w-20 h-20 opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={`/images/${member.company}`}
                  alt="Company logo"
                  fill
                  className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with consistent styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-manrope">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            The experts behind Prelude's innovative AI-powered business management platform
          </p>
        </motion.div>

        {/* Founders Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 mx-4 font-manrope">Leadership Team</h3>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.slice(0, 3).map((member, index) => (
              <LeadershipCard key={member.name} member={member} index={index} delay={index * 0.1} />
            ))}
          </div>
        </div>

        {/* Engineering Team Section */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
              <h3 className="text-2xl font-bold text-gray-900 mx-4 font-manrope">Founding Engineering Team</h3>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-900/50 to-transparent"></div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.slice(3).map((member, index) => (
              <EngineeringCard key={member.name} member={member} index={index + 3} delay={(index + 3) * 0.1} />
            ))}
          </div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-500 font-inter">
            Building the future of business automation with world-class talent
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;