import React from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function ServiceSearch({ value, onChange, onClear, totalCount }) {
  const { language } = useLanguage();

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <div className="absolute left-4.5 text-neutral-400 pointer-events-none flex items-center">
          <Search size={20} />
        </div>

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={
            language === 'gu'
              ? 'સેવાનું નામ, દસ્તાવેજ અથવા યોજના શોધો... (દા.ત. પાન કાર્ડ, ચૂંટણી કાર્ડ, PF)'
              : 'Search services, schemes, documents... (e.g. PAN, Election, PF, Ayushman)'
          }
          className="w-full pl-12 pr-28 py-3.5 sm:py-4 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 rounded-2xl border border-neutral-200 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 focus:border-[#F96400] text-sm sm:text-base shadow-lg shadow-black/5 dark:shadow-none placeholder:text-neutral-400 transition-all duration-200"
        />

        <div className="absolute right-3 flex items-center gap-2">
          {value && (
            <button
              type="button"
              onClick={onClear}
              className="p-1.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
              title="Clear search"
            >
              <X size={16} />
            </button>
          )}

          {totalCount !== undefined && (
            <span className="hidden sm:inline-block text-xs font-bold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-700/80 px-2.5 py-1 rounded-lg border border-neutral-200 dark:border-neutral-600">
              {totalCount} {language === 'gu' ? 'સેવાઓ' : 'services'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
