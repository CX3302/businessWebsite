'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Research = () => {
  const technologies = [
    {
      title: 'Natural Language Processing',
      image: '/images/nlp.svg',
      description: 'Advanced language models and semantic understanding systems that process and analyze human language with unprecedented accuracy.',
      publications: [
        {
          title: 'Attention Is All You Need',
          authors: 'Vaswani et al.',
          journal: 'Advances in Neural Information Processing Systems 30 (NIPS 2017)',
          link: 'https://proceedings.neurips.cc/paper/2017/file/3f5ee243547dee91fbd053c1c4a845aa-Paper.pdf'
        },
        {
          title: 'BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding',
          authors: 'Devlin et al.',
          journal: 'NAACL-HLT 2019',
          link: 'https://aclanthology.org/N19-1423.pdf'
        }
      ]
    },
    {
      title: 'Computer Vision',
      image: '/images/cv.svg',
      description: 'State-of-the-art visual recognition systems that can understand and process images with human-level accuracy.',
      publications: [
        {
          title: 'Deep Residual Learning for Image Recognition',
          authors: 'He et al.',
          journal: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR 2016)',
          link: 'https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf'
        },
        {
          title: 'Mask R-CNN',
          authors: 'He et al.',
          journal: 'IEEE International Conference on Computer Vision (ICCV 2017)',
          link: 'https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html'
        }
      ]
    },
    {
      title: 'Predictive Analytics',
      image: '/images/analytics.svg',
      description: 'Advanced machine learning systems that can forecast trends and patterns with remarkable precision.',
      publications: [
        {
          title: 'XGBoost: A Scalable Tree Boosting System',
          authors: 'Chen & Guestrin',
          journal: 'Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining',
          link: 'https://dl.acm.org/doi/10.1145/2939672.2939785'
        },
        {
          title: 'Deep Learning for Time Series Forecasting',
          authors: 'Lim & Zohren',
          journal: 'International Journal of Forecasting (2021)',
          link: 'https://www.sciencedirect.com/science/article/abs/pii/S0169207021000637'
        }
      ]
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
          <h2 className="text-4xl font-bold text-bastl-blue-900 mb-4">
            Advancing AI Technology
          </h2>
          <p className="text-xl text-bastl-blue-600 max-w-3xl mx-auto">
            Our research builds on cutting-edge academic work to deliver practical business solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              className="bg-bastl-blue-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full">
                <Image
                  src={tech.image}
                  alt={tech.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-bastl-blue-900 mb-3">
                  {tech.title}
                </h3>
                <p className="text-bastl-blue-600 mb-6">
                  {tech.description}
                </p>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-bastl-blue-700">Key Publications</h4>
                  {tech.publications.map((pub) => (
                    <Link
                      key={pub.title}
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-4 bg-white rounded-lg hover:bg-bastl-blue-100 transition-colors"
                    >
                      <h5 className="font-medium text-bastl-blue-900 mb-1">
                        {pub.title}
                      </h5>
                      <p className="text-sm text-bastl-blue-600">
                        {pub.authors}
                      </p>
                      <p className="text-xs text-bastl-blue-500 mt-1">
                        {pub.journal}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research; 