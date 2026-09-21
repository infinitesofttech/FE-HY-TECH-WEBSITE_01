import React from 'react';
import { allServices } from '../../data/services';
import { Monitor, GraduationCap, Briefcase, Printer, Laptop, Globe, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const items = [...allServices, ...allServices];

function getCategoryIcon(category) {
  const iconMap = {
    'Government Online Services': <Monitor size={13} className="text-[#F96400]" />,
    'Student & Education Services': <GraduationCap size={13} className="text-[#F96400]" />,
    'Government Job Applications': <Briefcase size={13} className="text-[#F96400]" />,
    'Printing & Documentation Services': <Printer size={13} className="text-[#F96400]" />,
    'Computer Courses & Training': <Laptop size={13} className="text-[#F96400]" />,
    'Utility & Citizen Payments': <Globe size={13} className="text-[#F96400]" />,
  };
  return iconMap[category] ?? <CheckCircle size={13} className="text-[#F96400]" />;
}

export default function ServicesMarquee() {
  const { language } = useLanguage();
  const t = (obj) => obj?.[language] || obj?.['en'] || '';

  return (
    <div className="py-4 border-y border-gray-200 bg-[#FAFAFA] overflow-hidden relative">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #FAFAFA, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #FAFAFA, transparent)' }}
      />

      {/* Scrolling track */}
      <div
        className="flex gap-3"
        style={{
          width: 'max-content',
          animation: 'marquee 120s linear infinite',
        }}
      >
        {items.map((svc, i) => (
          <Link
            key={i}
            to={`/services/${svc.slug}`}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-200 bg-white text-[#171717] hover:border-[#F96400] hover:text-[#F96400] transition-colors flex-shrink-0 text-xs font-semibold shadow-2xs"
          >
            {getCategoryIcon(svc.category?.en || svc.category)}
            <span className="whitespace-nowrap">{t(svc.title)}</span>
          </Link>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .flex:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
