import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  {
    title: 'Fintech Dashboard',
    blurb: 'Streamlined complex data into a clear, actionable interface with subtle motion cues.',
    image:
      'https://images.unsplash.com/photo-1551281044-8d8d6df14d79?q=80&w=1600&auto=format&fit=crop',
    tag: 'Product UI',
  },
  {
    title: 'SaaS Marketing Site',
    blurb: 'Interactive hero and animated storytelling increased signups by 34%.',
    image:
      'https://images.unsplash.com/photo-1523861751938-8270dbf34c05?q=80&w=1600&auto=format&fit=crop',
    tag: 'Web Experience',
  },
  {
    title: 'Corporate Portal',
    blurb: 'Accessible, enterprise-grade portal with robust navigation and performance.',
    image:
      'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
    tag: 'Platform',
  },
];

export default function CaseStudies() {
  return (
    <section id="work" className="relative bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Selected work</h2>
          <p className="mt-4 text-gray-600">
            A glimpse into the kinds of products we design and build.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((item, idx) => (
            <motion.article
              key={item.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-900 shadow">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{item.blurb}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
