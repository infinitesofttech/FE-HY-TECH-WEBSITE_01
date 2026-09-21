import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, GraduationCap } from 'lucide-react';
import { blogs } from '../../data/blogs';

export default function BlogSection() {
  const [featured, ...rest] = blogs;

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ background: '#FDEDE3', color: '#7C3AED' }}>
              <GraduationCap size={14} className="mr-1 inline" /> EXPLORE BLOGS
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: '#1E1B2E' }}>
              Explore Latest Blog<br />and Insights.
            </h2>
          </div>
          <button
            className="mt-6 md:mt-0 flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white flex-shrink-0"
            style={{ background: '#7C3AED' }}
            onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
            onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
          >
            See more blogs <ArrowRight size={16} />
          </button>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: '#F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
          >
            <div className="h-56 flex items-center justify-center text-8xl"
              style={{ background: `linear-gradient(135deg, ${featured.bg}, #7C3AED)` }}>
              {featured.emoji}
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: '#FDEDE3', color: '#7C3AED' }}>{featured.tag}</span>
                <span className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                  <Calendar size={11} /> {featured.date}
                </span>
              </div>
              <h3 className="text-xl font-extrabold mb-3 leading-snug" style={{ color: '#1E1B2E' }}>
                {featured.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: '#6B7280' }}>{featured.excerpt}</p>
              <button className="flex items-center gap-1 text-sm font-bold" style={{ color: '#1E1B2E' }}>
                Read more <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* Smaller Cards */}
          <div className="flex flex-col gap-6">
            {rest.map((b, i) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
                className="rounded-2xl overflow-hidden border flex"
                style={{ borderColor: '#F3F4F6', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}
              >
                <div className="w-32 flex-shrink-0 flex items-center justify-center text-5xl"
                  style={{ background: `linear-gradient(135deg, ${b.bg}, #7C3AED)` }}>
                  {b.emoji}
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: '#FDEDE3', color: '#7C3AED' }}>{b.tag}</span>
                    <span className="flex items-center gap-1 text-xs" style={{ color: '#9CA3AF' }}>
                      <Calendar size={10} /> {b.date}
                    </span>
                  </div>
                  <h3 className="text-sm font-extrabold mb-2 leading-snug" style={{ color: '#1E1B2E' }}>
                    {b.title}
                  </h3>
                  <button className="flex items-center gap-1 text-xs font-bold" style={{ color: '#1E1B2E' }}>
                    Read more <ArrowRight size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
