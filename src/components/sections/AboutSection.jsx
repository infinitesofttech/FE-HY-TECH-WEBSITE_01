import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, GraduationCap, Users, User } from 'lucide-react';
import aboutImage from '../../assets/about_illustration.jpg';

const checks = [
  'Verified document handling',
  'Transparent reward tracking',
  'Flexible service booking',
  'Lifetime family record access',
];

export default function AboutSection() {
  return (
    <section className="w-full py-24 bg-transparent">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left — Photo Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1 relative"
          >
            {/* Photo */}
            <div className="rounded-3xl overflow-hidden h-[420px] w-full relative"
              style={{ background: 'linear-gradient(135deg, #F1E1F2 0%, #FDF1E4 100%)' }}>
              <Users size={120} className="text-purple-300 opacity-30 absolute inset-0 m-auto" />
              <div className="absolute inset-0 flex items-end p-8">
                <div className="text-4xl font-extrabold opacity-10 select-none" style={{ color: '#7C3AED' }}>
                  Family<br/>First.
                </div>
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl px-5 py-4 flex flex-col gap-2"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            >
              <div className="flex -space-x-2 mb-1">
                {[1, 2, 3, 4].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs"
                    style={{ background: '#F1E1F2' }}>
                    <User size={14} className="text-purple-600" />
                  </div>
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: '#7C3AED' }}>
                  2k+
                </div>
              </div>
              <p className="text-xs font-semibold text-center" style={{ color: '#6B7280' }}>
                Join 2,000+ families already<br />managing their services
              </p>
            </motion.div>
            {/* Dot grid decoration */}
            <div className="absolute -bottom-4 -right-4 grid grid-cols-5 gap-1.5 opacity-30">
              {Array(25).fill(0).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ background: '#7C3AED' }} />
              ))}
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex-1"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-6"
              style={{ background: '#FDEDE3', color: '#7C3AED' }}>
              <GraduationCap size={14} className="mr-1 inline" /> ABOUT OUR PLATFORM
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5" style={{ color: '#1E1B2E' }}>
              Transforming Family Service<br />Management Through{' '}
              <span style={{ color: '#7C3AED' }}>HY-Tech.</span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: '#6B7280' }}>
              HY-Tech Online Hub is Dharampur's most trusted family service centre. We handle all your government
              document needs under one shared Family ID, with transparent tracking, real-time updates, and a
              rewarding points system that makes every service count.
            </p>

            {/* Checklist 2x2 */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {checks.map((c) => (
                <div key={c} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: '#EDE7FB' }}>
                    <Check size={11} strokeWidth={3} style={{ color: '#7C3AED' }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: '#1E1B2E' }}>{c}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white"
                style={{ background: '#7C3AED' }}
                onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
                onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
              >
                Get Started Free <ArrowRight size={16} />
              </button>
              <button
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                style={{ border: '1.5px solid #E5E7EB', color: '#1E1B2E', background: '#fff' }}
                onMouseEnter={e => e.currentTarget.style.background = '#F9FAFB'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                Explore Services <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
