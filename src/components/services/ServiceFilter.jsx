import React from 'react';
import { 
  LayoutGrid, Monitor, GraduationCap, Briefcase, 
  Printer, Laptop, Globe 
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ICON_MAP = {
  Monitor,
  GraduationCap,
  Briefcase,
  Printer,
  Laptop,
  Globe,
  LayoutGrid
};

export default function ServiceFilter({ categories, activeCategory, onSelectCategory, totalAllCount }) {
  const { language } = useLanguage();

  return (
    <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-2 px-1 gap-2 sm:gap-2.5">
      {/* "All Services" Button */}
      <button
        type="button"
        onClick={() => onSelectCategory('all')}
        className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
          activeCategory === 'all'
            ? 'bg-[#171717] dark:bg-white text-white dark:text-neutral-900 border-[#171717] dark:border-white shadow-md'
            : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
        }`}
      >
        <LayoutGrid size={15} />
        <span>All Services</span>
        <span className="text-[11px] opacity-75 font-normal">(બધી સેવાઓ)</span>
        {totalAllCount !== undefined && (
          <span
            className={`text-[11px] px-1.5 py-0.2 rounded-md font-bold ${
              activeCategory === 'all'
                ? 'bg-white/20 dark:bg-neutral-900/20 text-white dark:text-neutral-900'
                : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300'
            }`}
          >
            {totalAllCount}
          </span>
        )}
      </button>

      {/* Dynamic Category Buttons */}
      {categories.map((cat) => {
        const IconComponent = ICON_MAP[cat.icon] || Globe;
        const isActive = activeCategory === cat.slug || activeCategory === cat.id;
        const titleEn = cat.title?.en || cat.name || cat.id;
        const titleGu = cat.title?.gu || '';

        return (
          <button
            key={cat.id || cat.slug}
            type="button"
            onClick={() => onSelectCategory(cat.slug || cat.id)}
            className={`flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
              isActive
                ? 'bg-[#F96400] text-white border-[#F96400] shadow-md shadow-[#F96400]/20'
                : 'bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600'
            }`}
          >
            <IconComponent size={15} />
            <span>{titleEn}</span>
            {titleGu && <span className="text-[11px] opacity-75 font-normal font-gujarati">({titleGu})</span>}
            {cat.count !== undefined && (
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-md font-bold ${
                  isActive
                    ? 'bg-white/25 text-white'
                    : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                }`}
              >
                {cat.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
