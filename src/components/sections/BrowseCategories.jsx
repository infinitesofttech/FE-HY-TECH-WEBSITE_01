import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../api/servicesApi';
import { useLanguage } from '../../context/LanguageContext';
import CategoryAntiGravityCard from '../services/CategoryAntiGravityCard';
import AntiGravityParticles from '../services/AntiGravityParticles';

// 6 Categories matching the exact order from the reference:
// 1. Online Services
// 2. Education Services
// 3. Job Services
// 4. Printing Services
// 5. Computer Courses
// 6. Other Services
const CATEGORY_ORDER = [
  'online-services',
  'education-services',
  'job-services',
  'printing-services',
  'computer-courses',
  'other-services',
];

export default function BrowseCategories() {
  const { language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetchCategories()
      .then((data) => {
        if (!isMounted) return;
        const sorted = [...data].sort((a, b) => {
          const indexA = CATEGORY_ORDER.indexOf(a.slug || a.id);
          const indexB = CATEGORY_ORDER.indexOf(b.slug || b.id);
          return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
        });
        setCategories(sorted);
      })
      .catch((err) => {
        console.error('Failed to load categories:', err);
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const headingText = language === 'gu' ? 'અમારી સેવાઓ' : 'Our Services';
  const subtitleText = language === 'gu' ? 'અમારી વિશેષ સેવાઓનું અન્વેષણ કરો' : 'Explore Our Specialized Services';

  return (
    <section
      id="services-section"
      className="relative w-full py-20 sm:py-28 bg-[#060913] text-white overflow-hidden border-t border-b border-white/5 select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ════════════ COSMIC ANTI-GRAVITY BACKGROUND ════════════ */}
      {/* Ambient Radial Lights */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-cyan-500/15 via-blue-600/8 to-transparent rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/3 w-[600px] h-[400px] bg-pink-600/8 rounded-full blur-[170px] pointer-events-none" />

      {/* Floating Canvas Particles */}
      <AntiGravityParticles className="opacity-80" />

      {/* Subtle Starfield & Circuit Pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #38BDF8 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ════════════ CENTERED HERO HEADER MATCHING REFERENCE IMAGE ════════════ */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">
          {/* Header Strip with Glowing Center Pill and Flanking Lines with Dots */}
          <motion.div
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -20, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center w-full max-w-xl mx-auto gap-3 sm:gap-4 mb-3"
          >
            {/* Left Line with Dot */}
            <div className="flex-1 flex items-center justify-end">
              <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-cyan-500/60 to-cyan-400" />
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00E5FF] -mr-1" />
            </div>

            {/* Glowing Pill: "Our Services" */}
            <div className="relative px-7 sm:px-9 py-2 sm:py-2.5 rounded-full bg-[#0A1325]/90 border border-cyan-400/80 shadow-[0_0_24px_rgba(0,229,255,0.45),inset_0_1px_1px_rgba(255,255,255,0.4)] backdrop-blur-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-wide">
                {headingText}
              </h2>
            </div>

            {/* Right Line with Dot */}
            <div className="flex-1 flex items-center justify-start">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00E5FF] -ml-1" />
              <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent via-cyan-500/60 to-cyan-400" />
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base font-medium text-gray-300 tracking-wide"
          >
            {subtitleText}
          </motion.p>
        </div>

        {/* ════════════ 3D ANTI-GRAVITY CATEGORY GRID (3x2 Desktop, 2x3 Tablet, 1x6 Mobile) ════════════ */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-[380px] rounded-[28px] bg-white/[0.03] border border-white/10 animate-pulse p-6 flex flex-col justify-end"
              >
                <div className="w-full h-[220px] rounded-full bg-white/[0.05] mx-auto mb-4" />
                <div className="w-3/4 h-14 bg-white/[0.08] rounded-2xl mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {categories.map((cat, i) => (
              <CategoryAntiGravityCard key={cat.id || cat.slug} category={cat} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
