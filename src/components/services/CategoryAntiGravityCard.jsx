import React, { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Monitor, GraduationCap, Briefcase, Printer, Laptop, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const IconMap = {
  Monitor,
  GraduationCap,
  Briefcase,
  Printer,
  Laptop,
  Globe,
};

// Exact color atmospheres matching the 3D visual models & HY-TECH brand harmony
const categoryAtmospheres = {
  'online-services': {
    primaryColor: '#0084FF',
    accentColor: '#00D2FF',
    glowColor: 'rgba(0, 132, 255, 0.5)',
    platformGlow: '0 0 40px rgba(0, 132, 255, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(0, 132, 255, 0.22), transparent 70%)',
    btnBg: 'linear-gradient(135deg, #0070F3 0%, #00C6FF 100%)',
    btnTextColor: '#FFFFFF',
    tagText: { en: 'Government Schemes & IDs', gu: 'સરકારી યોજનાઓ અને કાર્ડ' },
    floatDuration: 6.0,
    floatDelay: 0.1,
  },
  'education-services': {
    primaryColor: '#00E5A3',
    accentColor: '#00B4D8',
    glowColor: 'rgba(0, 229, 163, 0.5)',
    platformGlow: '0 0 40px rgba(0, 229, 163, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(0, 229, 163, 0.22), transparent 70%)',
    btnBg: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    btnTextColor: '#FFFFFF',
    tagText: { en: 'Scholarships & Admissions', gu: 'શિષ્યવૃત્તિ અને એડમિશન' },
    floatDuration: 6.8,
    floatDelay: 0.4,
  },
  'job-services': {
    primaryColor: '#F96400',
    accentColor: '#FFB800',
    glowColor: 'rgba(249, 100, 0, 0.55)',
    platformGlow: '0 0 40px rgba(249, 100, 0, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(249, 100, 0, 0.24), transparent 70%)',
    btnBg: 'linear-gradient(135deg, #F96400 0%, #FF9900 100%)',
    btnTextColor: '#FFFFFF',
    tagText: { en: 'OJAS & Competitive Exams', gu: 'OJAS અને સરકારી ભરતી' },
    floatDuration: 5.6,
    floatDelay: 0.7,
  },
  'printing-services': {
    primaryColor: '#A855F7',
    accentColor: '#EC4899',
    glowColor: 'rgba(168, 85, 247, 0.55)',
    platformGlow: '0 0 40px rgba(168, 85, 247, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(168, 85, 247, 0.22), transparent 70%)',
    btnBg: 'linear-gradient(135deg, #9333EA 0%, #C084FC 100%)',
    btnTextColor: '#FFFFFF',
    tagText: { en: 'Color Print & Lamination', gu: 'કલર પ્રિન્ટ અને લેમિનેશન' },
    floatDuration: 6.5,
    floatDelay: 0.2,
  },
  'computer-courses': {
    primaryColor: '#00D2FF',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 210, 255, 0.55)',
    platformGlow: '0 0 40px rgba(0, 210, 255, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(0, 210, 255, 0.22), transparent 70%)',
    btnBg: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
    btnTextColor: '#FFFFFF',
    tagText: { en: 'Tally GST, CCC & Typing', gu: 'ટેલી GST, CCC અને ટાઈપિંગ' },
    floatDuration: 7.2,
    floatDelay: 0.5,
  },
  'other-services': {
    primaryColor: '#FF2A85',
    accentColor: '#FF6B9D',
    glowColor: 'rgba(255, 42, 133, 0.55)',
    platformGlow: '0 0 40px rgba(255, 42, 133, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(255, 42, 133, 0.22), transparent 70%)',
    btnBg: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
    btnTextColor: '#FFFFFF',
    tagText: { en: 'Passport, FASTag & Utility', gu: 'પાસપોર્ટ, ફાસ્ટેગ અને બિલ' },
    floatDuration: 5.9,
    floatDelay: 0.9,
  },
};

export default function CategoryAntiGravityCard({ category, index }) {
  const { language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const cardRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const catId = category.id || category.slug;
  const atmosphere = categoryAtmospheres[catId] || categoryAtmospheres['online-services'];
  const Icon = IconMap[category.icon] || Monitor;

  // Bilingual strings
  const titleEn = category.title?.en || category.name || category.id;
  const titleGu = category.title?.gu || titleEn;
  const displayTitle = language === 'gu' ? titleGu : titleEn;
  const secondaryTitle = language === 'gu' ? titleEn : (titleGu !== titleEn ? titleGu : null);

  const serviceCount = category.services?.length ?? category.count ?? 0;
  const countLabel = language === 'gu' ? `${serviceCount} વિશેષ સેવાઓ` : `${serviceCount} Specialized Services`;
  const exploreLabel = language === 'gu' ? 'Explore →' : 'Explore →';

  const categoryUrl = `/services?category=${category.slug || category.id}`;
  const imageSource = category.catImage || `/images/categories/${catId.replace('-', '_')}_antigravity.jpg`;

  const handleMouseMove = (e) => {
    if (isTouchDevice || prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="w-full flex justify-center"
    >
      <Link
        to={categoryUrl}
        aria-label={`${displayTitle} - ${countLabel}`}
        className="w-full max-w-[420px] block group outline-none select-none"
      >
        {/* ─── OPTION C: ALL-WHITE BOX CARD CONTAINER ─── */}
        <div
          className="bg-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between gap-5 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/80 relative z-20 group-hover:-translate-y-2 h-full"
          style={{
            boxShadow: isHovered
              ? `0 24px 48px -12px rgba(0, 0, 0, 0.25), 0 0 0 2px ${atmosphere.primaryColor}`
              : '0 16px 36px -10px rgba(0, 0, 0, 0.14)',
          }}
        >
          {/* ════════════ 1. TOP 3D MASTER IMAGE (FULL SIZE) ════════════ */}
          <div className="relative w-full h-[270px] sm:h-[290px] rounded-2xl overflow-hidden shrink-0 bg-gray-950 border border-gray-100/20 shadow-md group/img">
            {/* Full-Size 3D Master Render with Smooth Parallax Zoom */}
            <motion.div
              animate={{
                x: isHovered ? mousePos.x * 10 : 0,
                y: isHovered ? mousePos.y * 10 : 0,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="w-full h-full"
            >
              <img
                src={imageSource}
                alt={`${displayTitle} 3D Platform`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Subtle Vignette Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* Category Tag on top-left */}
            <div className="absolute top-3 left-3 z-20">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-white border shadow-md backdrop-blur-md"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.65)',
                  borderColor: atmosphere.primaryColor,
                }}
              >
                {catId.replace('-', ' ').toUpperCase()}
              </span>
            </div>

            {/* Indicator on bottom-left */}
            <div className="absolute bottom-2.5 left-3 z-20 flex items-center gap-1.5 text-white text-[11px] font-bold drop-shadow px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: atmosphere.primaryColor }} />
              <span>{language === 'gu' ? 'હાઇ-ટેક સેવા' : 'HY-TECH HUB'}</span>
            </div>
          </div>

          {/* ════════════ 2. BOTTOM CARD CONTENT ON CRISP WHITE BACKGROUND ════════════ */}
          <div className="flex flex-col gap-3.5">
            {/* Category Icon + Title + Count */}
            <div className="flex items-start gap-3.5">
              {/* Category Icon Box */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: 'rgba(249, 100, 0, 0.06)',
                  borderColor: atmosphere.primaryColor,
                }}
              >
                <Icon size={24} style={{ color: atmosphere.primaryColor }} />
              </div>

              {/* Title, Subtitle & Count */}
              <div className="flex-1 min-w-0">
                <h3 className="font-black text-gray-900 text-lg sm:text-xl tracking-tight leading-snug truncate group-hover:text-[#F96400] transition-colors">
                  {displayTitle}
                </h3>
                {secondaryTitle && (
                  <p className="text-xs text-gray-500 font-semibold font-gujarati mt-0.5 truncate">
                    {secondaryTitle}
                  </p>
                )}
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="inline-flex items-center text-[11px] font-bold text-gray-700 bg-gray-100 px-2.5 py-0.5 rounded-full">
                    {countLabel}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Explore Button */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 group-hover:text-gray-600 transition-colors">
                {language === 'gu' ? 'સેવાઓ જુઓ' : 'Available Services'}
              </span>
              <div
                className="py-2 px-5 rounded-full font-black text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 transition-all duration-300 shadow-md group-hover:shadow-lg"
                style={{
                  background: atmosphere.btnBg,
                  color: atmosphere.btnTextColor || '#FFFFFF',
                  transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <span>{exploreLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
