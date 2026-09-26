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
      className="bg-gradient-to-b from-[#F96400] to-[#E55700] py-20 sm:py-28 relative overflow-hidden select-none"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* ── Background Noise & Lighting Spheres (Matching UpcomingEvents format) ── */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Canvas Particles */}
      <AntiGravityParticles className="opacity-40" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
        {/* ════════════ HEADER SECTION (Matching UpcomingEvents format) ════════════ */}
        <div className="flex flex-col items-center justify-center text-center mb-14 sm:mb-18">
          {/* Top White Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#F96400] font-black text-xs sm:text-sm mb-4 shadow-md uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#F96400] animate-pulse" />
            <span>{language === 'gu' ? 'અમારી સેવાઓ' : 'OUR SPECIALIZED SERVICES'}</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl mb-3 drop-shadow-sm">
            {headingText}
          </h2>

          {/* Subtitle */}
          <p className="text-white/95 text-sm sm:text-base max-w-2xl font-medium leading-relaxed drop-shadow-xs">
            {subtitleText}
          </p>
        </div>

        {/* ════════════ 3D ANTI-GRAVITY CATEGORY GRID (Option C: 3-Column White Box Cards) ════════════ */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="h-[430px] rounded-3xl bg-white/[0.12] border border-white/20 animate-pulse p-6 flex flex-col justify-between"
              >
                <div className="w-full h-[220px] rounded-2xl bg-white/[0.15] mb-4" />
                <div className="space-y-3">
                  <div className="w-3/4 h-6 bg-white/[0.15] rounded-lg" />
                  <div className="w-1/2 h-4 bg-white/[0.1] rounded-lg" />
                </div>
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
