import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, BookOpen, UserCheck, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const stats = [
  {
    id: 1,
    icon: Users,
    targetNumber: 8000,
    suffix: "+",
    isDecimal: false,
    label: {
      en: "Active Students & Citizens",
      gu: "સક્રિય વિદ્યાર્થીઓ અને નાગરિકો"
    }
  },
  {
    id: 2,
    icon: BookOpen,
    targetNumber: 300,
    suffix: "+",
    isDecimal: false,
    label: {
      en: "Daily Services & Courses",
      gu: "રોજિંદી સેવાઓ અને કોર્સ"
    }
  },
  {
    id: 3,
    icon: UserCheck,
    targetNumber: 100,
    suffix: "+",
    isDecimal: false,
    label: {
      en: "Expert Facilitators",
      gu: "નિષ્ણાત કાઉન્સિલર્સ"
    }
  },
  {
    id: 4,
    icon: Star,
    targetNumber: 99.9,
    suffix: "%",
    isDecimal: true,
    label: {
      en: "Citizen Satisfaction Rate",
      gu: "સંતોષકારક સેવા પરિણામ"
    }
  }
];

function CounterNumber({ targetNumber, isDecimal, inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = targetNumber;
    const duration = 2200; // 2.2 seconds smooth count
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // EaseOutExpo easing curve for realistic counter deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = start + (end - start) * easeOut;

      setCount(currentVal);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [inView, targetNumber]);

  if (isDecimal) {
    return count.toFixed(1);
  }
  return Math.floor(count).toLocaleString('en-IN');
}

export default function StatsCounter() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.35 });
  const { language } = useLanguage();

  return (
    <section 
      ref={sectionRef} 
      className="bg-gradient-to-r from-[#F96400] via-[#FA751A] to-[#F96400] py-20 relative overflow-hidden"
    >
      {/* Subtle Noise / Particle Background Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* Decorative Floating Lights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-white/20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.id} 
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className={`flex flex-col items-center text-center p-8 group ${
                  index % 2 !== 0 ? 'md:border-l border-white/20 lg:border-l-0' : ''
                }`}
              >
                {/* 3D Animated Circle Icon */}
                <motion.div 
                  whileHover={{ scale: 1.15, rotate: 6 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 15 }}
                  className="w-18 h-18 rounded-2xl bg-[#1E293B] border border-white/10 flex items-center justify-center mb-6 shadow-2xl group-hover:shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition-shadow duration-300"
                >
                  <Icon className="w-8 h-8 text-white stroke-[1.8] group-hover:text-[#F96400] transition-colors" />
                </motion.div>

                {/* Animated Incremental Counter with Suffix */}
                <div className="flex items-baseline justify-center mb-2 font-black tracking-tight select-none">
                  <span className="text-5xl sm:text-6xl font-black text-white drop-shadow-md">
                    <CounterNumber 
                      targetNumber={stat.targetNumber} 
                      isDecimal={stat.isDecimal} 
                      inView={isInView} 
                    />
                  </span>
                  <span className="text-4xl sm:text-5xl font-black text-white/90 ml-1 drop-shadow-md">
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <p className="text-white/95 text-base sm:text-lg font-bold tracking-wide">
                  {stat.label?.[language] || stat.label?.en}
                </p>
                
                <span className="mt-1 text-xs text-white/60 font-semibold uppercase tracking-wider">
                  Verified Metric
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
