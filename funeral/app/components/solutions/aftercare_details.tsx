'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const AftercareDetails = () => {
  const [animateCounters, setAnimateCounters] = useState(false);
  const [counters, setCounters] = useState({ current: 0, ai: 0, revenue: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animateCounters) {
            setAnimateCounters(true);
            animateNumbers();
          }
        });
      },
      { threshold: 0.5 }
    );

    const countersSection = document.getElementById('counters-section');
    if (countersSection) {
      observer.observe(countersSection);
    }

    return () => observer.disconnect();
  }, [animateCounters]);

  const animateNumbers = () => {
    const targets = { current: 15, ai: 95, revenue: 40 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        current: Math.floor(targets.current * progress),
        ai: Math.floor(targets.ai * progress),
        revenue: Math.floor(targets.revenue * progress)
      });
      
      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepTime);
  };

  const timeline = [
    {
      days: "3",
      title: "3 Days After Service",
      description: "Compassionate check-in message with grief support resources and helpline numbers. Research shows this is the most critical time for family support.",
      method: "📱 SMS/Email"
    },
    {
      days: "30", 
      title: "30 Days After Service",
      description: "Memorial product suggestions based on service preferences, gentle pre-need planning invitation, and grief counseling resources. 78% of memorial purchases happen within this window.",
      method: "📧 Personalized Email"
    },
    {
      days: "90",
      title: "90 Days After Service", 
      description: "Follow-up on memorial products, invitation to support groups, and pre-need planning benefits explanation. Families are more receptive to planning at this stage.",
      method: "📞 Automated Call"
    },
    {
      days: "365",
      title: "Anniversary Date",
      description: "Remembrance message with memorial service options, celebration of life ideas, and continued support offerings. Anniversary contacts show 95% positive response rates.",
      method: "💌 Memorial Card"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-funeral-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Aftercare & Revenue AI: Turning Care Into Ongoing Revenue
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Transform post-service relationships into lasting revenue streams with compassionate, automated follow-up
          </motion.p>
        </div>

        {/* Hidden Revenue Crisis */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">The Hidden Revenue Crisis</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📉</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Lost Follow-up Opportunities</h4>
              <p className="text-gray-700">85% of families never receive meaningful follow-up after services, missing crucial touchpoints for memorial products and pre-need planning.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💔</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Unsupported Grieving Families</h4>
              <p className="text-gray-700">Families struggle through grief alone without resources or guidance, missing opportunities for healing and connection.</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💸</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Missed Revenue Streams</h4>
              <p className="text-gray-700">No systematic approach to memorial sales, preneed plans, or referrals - leaving thousands in potential revenue on the table annually.</p>
            </div>
          </div>
        </motion.div>

        {/* Revenue Opportunity Visual */}
        <div id="counters-section" className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-200 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-funeral-black mb-2">Current Reality</h3>
            <div className="text-3xl font-bold text-funeral-black">{counters.current}%</div>
            <p className="text-gray-600">of families receive systematic follow-up</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-300 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-funeral-black mb-2">With AI Aftercare</h3>
            <div className="text-3xl font-bold text-funeral-black">{counters.ai}%</div>
            <p className="text-gray-600">of families receive personalized follow-up</p>
          </motion.div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-funeral-black text-white rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <span className="text-3xl">💰</span>
            </div>
            <h3 className="text-xl font-bold text-funeral-black mb-2">Revenue Increase</h3>
            <div className="text-3xl font-bold text-funeral-black">{counters.revenue}%</div>
            <p className="text-gray-600">more annual revenue from existing clients</p>
          </motion.div>
        </div>

        {/* Follow-up Timeline */}
        <motion.div 
          className="bg-gray-50 rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-funeral-black mb-8 text-center">Automated Follow-up Timeline</h3>
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <div className="bg-funeral-black text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6">
                    {item.days}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-funeral-black">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="text-funeral-black font-semibold">{item.method}</div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="border-l-2 border-gray-300 ml-6 h-6"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AftercareDetails;