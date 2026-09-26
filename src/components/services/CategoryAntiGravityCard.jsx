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

// Exact color atmospheres matching the user's 3D reference image & HY-TECH brand harmony
const categoryAtmospheres = {
  'online-services': {
    primaryColor: '#0084FF',
    accentColor: '#00D2FF',
    glowColor: 'rgba(0, 132, 255, 0.5)',
    platformGlow: '0 0 40px rgba(0, 132, 255, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(0, 132, 255, 0.22), transparent 70%)',
    pillBorder: 'border-[#0084FF]/60',
    btnBg: 'linear-gradient(135deg, #0070F3 0%, #00C6FF 100%)',
    floatDuration: 6.0,
    floatDelay: 0.1,
  },
  'education-services': {
    primaryColor: '#00E5A3',
    accentColor: '#00B4D8',
    glowColor: 'rgba(0, 229, 163, 0.5)',
    platformGlow: '0 0 40px rgba(0, 229, 163, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(0, 229, 163, 0.22), transparent 70%)',
    pillBorder: 'border-[#00E5A3]/60',
    btnBg: 'linear-gradient(135deg, #059669 0%, #00E5A3 100%)',
    floatDuration: 6.8,
    floatDelay: 0.4,
  },
  'job-services': {
    primaryColor: '#F96400',
    accentColor: '#FFB800',
    glowColor: 'rgba(249, 100, 0, 0.55)',
    platformGlow: '0 0 40px rgba(249, 100, 0, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(249, 100, 0, 0.24), transparent 70%)',
    pillBorder: 'border-[#F96400]/60',
    btnBg: 'linear-gradient(135deg, #F96400 0%, #FF9900 100%)',
    floatDuration: 5.6,
    floatDelay: 0.7,
  },
  'printing-services': {
    primaryColor: '#A855F7',
    accentColor: '#EC4899',
    glowColor: 'rgba(168, 85, 247, 0.55)',
    platformGlow: '0 0 40px rgba(168, 85, 247, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(168, 85, 247, 0.22), transparent 70%)',
    pillBorder: 'border-[#A855F7]/60',
    btnBg: 'linear-gradient(135deg, #9333EA 0%, #C084FC 100%)',
    floatDuration: 6.5,
    floatDelay: 0.2,
  },
  'computer-courses': {
    primaryColor: '#00D2FF',
    accentColor: '#0066FF',
    glowColor: 'rgba(0, 210, 255, 0.55)',
    platformGlow: '0 0 40px rgba(0, 210, 255, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(0, 210, 255, 0.22), transparent 70%)',
    pillBorder: 'border-[#00D2FF]/60',
    btnBg: 'linear-gradient(135deg, #0284C7 0%, #38BDF8 100%)',
    floatDuration: 7.2,
    floatDelay: 0.5,
  },
  'other-services': {
    primaryColor: '#FF2A85',
    accentColor: '#FF6B9D',
    glowColor: 'rgba(255, 42, 133, 0.55)',
    platformGlow: '0 0 40px rgba(255, 42, 133, 0.45)',
    ambientGradient: 'radial-gradient(circle at 50% 40%, rgba(255, 42, 133, 0.22), transparent 70%)',
    pillBorder: 'border-[#FF2A85]/60',
    btnBg: 'linear-gradient(135deg, #E11D48 0%, #FB7185 100%)',
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

  const tiltX = isHovered ? -mousePos.y * 8 : 0;
  const tiltY = isHovered ? mousePos.x * 8 : 0;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="relative h-full perspective-1000 group select-none flex flex-col justify-end"
    >
      <Link
        to={categoryUrl}
        aria-label={`${displayTitle} - ${countLabel}`}
        className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070B14] rounded-[28px]"
      >
        {/* Anti-Gravity Floating Stage Container */}
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : isHovered
              ? {
                  y: -12,
                  rotateX: tiltX,
                  rotateY: tiltY,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 280, damping: 20 },
                }
              : {
                  y: [0, -9, 0, 9, 0],
                  rotateZ: [-0.5, 0.5, -0.5],
                  transition: {
                    y: {
                      duration: atmosphere.floatDuration,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: atmosphere.floatDelay,
                    },
                    rotateZ: {
                      duration: atmosphere.floatDuration * 1.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: atmosphere.floatDelay,
                    },
                  },
                }
          }
          className="relative flex flex-col justify-between items-center rounded-[28px] overflow-visible preserve-3d"
        >
          {/* Ambient Glow Aura */}
          <div
            className="absolute top-10 w-[300px] h-[300px] rounded-full pointer-events-none transition-opacity duration-500 blur-[80px]"
            style={{
              background: atmosphere.ambientGradient,
              opacity: isHovered ? 0.95 : 0.5,
            }}
          />

          {/* ════════════ 1. CIRCULAR 3D PLATFORM & FLOATING OBJECTS ════════════ */}
          <div className="relative w-full h-[270px] sm:h-[290px] flex items-center justify-center overflow-visible preserve-3d">
            {/* Luminous Neon Orbital Ring */}
            <motion.div
              animate={
                prefersReducedMotion
                  ? {}
                  : {
                      rotate: 360,
                      scale: isHovered ? 1.06 : 1,
                    }
              }
              transition={{
                rotate: { duration: 26, repeat: Infinity, ease: 'linear' },
                scale: { duration: 0.3 },
              }}
              className="absolute w-[240px] h-[240px] rounded-full border border-dashed pointer-events-none opacity-30"
              style={{
                borderColor: atmosphere.primaryColor,
                transform: 'rotateX(70deg)',
              }}
            />

            {/* Core 3D Master Render of Circular Anti-Gravity Platform */}
            <motion.div
              animate={{
                x: isHovered ? mousePos.x * 16 : 0,
                y: isHovered ? mousePos.y * 16 : 0,
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ type: 'spring', stiffness: 240, damping: 18 }}
              className="relative z-10 w-[260px] h-[260px] sm:w-[280px] sm:h-[280px] flex items-center justify-center rounded-full overflow-hidden"
              style={{
                maskImage: 'radial-gradient(circle at center, black 68%, rgba(0,0,0,0.6) 84%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 68%, rgba(0,0,0,0.6) 84%, transparent 100%)',
              }}
            >
              <img
                src={imageSource}
                alt={`${displayTitle} 3D Platform`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transition-all duration-500"
              />
            </motion.div>

            {/* Soft Contact Shadow Below Platform */}
            <motion.div
              animate={{
                scale: isHovered ? 1.15 : [0.92, 1.06, 0.92],
                opacity: isHovered ? 0.75 : [0.4, 0.6, 0.4],
              }}
              transition={
                isHovered
                  ? { duration: 0.3 }
                  : { duration: atmosphere.floatDuration, repeat: Infinity, ease: 'easeInOut' }
              }
              className="absolute bottom-2 w-[220px] h-[36px] rounded-[50%] blur-[12px] pointer-events-none"
              style={{
                background: `radial-gradient(ellipse at center, ${atmosphere.primaryColor} 0%, rgba(0,0,0,0.9) 65%, transparent 100%)`,
              }}
            />
          </div>

          {/* ════════════ 2. FRONT MOUNTED GLOWING CONSOLE PILL ════════════ */}
          <div
            className="relative z-20 w-full max-w-[340px] -mt-6 sm:-mt-8 rounded-[24px] p-4 sm:p-5 flex flex-col items-center text-center border backdrop-blur-xl transition-all duration-400"
            style={{
              background: 'linear-gradient(180deg, rgba(13, 20, 36, 0.85) 0%, rgba(6, 10, 20, 0.96) 100%)',
              borderColor: isHovered ? atmosphere.primaryColor : 'rgba(255, 255, 255, 0.14)',
              boxShadow: isHovered
                ? `0 16px 40px -10px ${atmosphere.glowColor}, 0 0 20px ${atmosphere.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.25)`
                : '0 12px 30px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Category Icon + Title + Count */}
            <div className="flex items-center gap-3.5 w-full justify-center">
              {/* Glowing Icon Square */}
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center border shadow-lg flex-shrink-0 transition-transform duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderColor: atmosphere.primaryColor,
                  boxShadow: `0 0 14px ${atmosphere.glowColor}`,
                  transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                <Icon size={22} style={{ color: atmosphere.primaryColor }} />
              </div>

              {/* Title & Count */}
              <div className="text-left flex-1 min-w-0">
                <h3 className="font-extrabold text-white text-lg sm:text-xl tracking-tight leading-snug truncate group-hover:text-cyan-200 transition-colors">
                  {displayTitle}
                </h3>
                {secondaryTitle && (
                  <p className="text-[11px] text-gray-400 font-medium font-gujarati -mt-0.5 truncate">
                    {secondaryTitle}
                  </p>
                )}
                <p className="text-xs font-semibold text-gray-300 mt-0.5">
                  ({countLabel})
                </p>
              </div>
            </div>

            {/* Glowing Pill Explore Button */}
            <div className="mt-3.5 w-full flex justify-center">
              <div
                className="w-full max-w-[170px] py-2 px-4 rounded-full font-bold text-xs sm:text-sm text-white flex items-center justify-center gap-1.5 transition-all duration-300 border shadow-lg"
                style={{
                  background: atmosphere.btnBg,
                  borderColor: 'rgba(255, 255, 255, 0.35)',
                  boxShadow: isHovered
                    ? `0 0 22px ${atmosphere.primaryColor}, inset 0 1px 1px rgba(255, 255, 255, 0.5)`
                    : `0 4px 14px ${atmosphere.glowColor}`,
                  transform: isHovered ? 'scale(1.04) translateY(-1px)' : 'scale(1)',
                }}
              >
                <span>{exploreLabel}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
