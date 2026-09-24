import React from 'react';
import { motion } from 'framer-motion';
import { SearchX, RefreshCw } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { useLanguage } from '../../context/LanguageContext';

export default function ServiceGrid({ services, isLoading, onSelectService, onResetFilter }) {
  const { language } = useLanguage();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 animate-pulse flex flex-col h-[380px]"
          >
            <div className="h-44 bg-neutral-200 dark:bg-neutral-800 w-full"></div>
            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="h-5 bg-neutral-200 dark:bg-neutral-800 rounded-md w-3/4"></div>
                <div className="h-3 bg-neutral-100 dark:bg-neutral-800/60 rounded-md w-1/2"></div>
                <div className="h-10 bg-neutral-100 dark:bg-neutral-800/60 rounded-md w-full"></div>
              </div>
              <div className="h-9 bg-neutral-200 dark:bg-neutral-800 rounded-xl w-full"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!services || services.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16 px-4 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/80 dark:border-neutral-800 max-w-lg mx-auto shadow-sm"
      >
        <div className="w-16 h-16 mx-auto mb-4 bg-orange-50 dark:bg-orange-950/40 text-[#F96400] rounded-2xl flex items-center justify-center">
          <SearchX size={32} />
        </div>
        <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
          {language === 'gu' ? 'કોઈ સેવા મળી નથી' : 'No Services Found'}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 max-w-sm mx-auto">
          {language === 'gu'
            ? 'તમારી શોધ મુજબ કોઈ સેવા ઉપલબ્ધ નથી. કૃપા કરીને અન્ય કીવર્ડ અજમાવો અથવા ફિલ્ટર રીસેટ કરો.'
            : 'We couldn’t find any services matching your search criteria. Try a different keyword or reset filters.'}
        </p>
        {onResetFilter && (
          <button
            type="button"
            onClick={onResetFilter}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#F96400] text-white text-sm font-semibold rounded-xl hover:bg-[#e05a00] transition-colors shadow-md hover:shadow-lg"
          >
            <RefreshCw size={15} />
            <span>{language === 'gu' ? 'બધી સેવાઓ જુઓ' : 'Show All Services'}</span>
          </button>
        )}
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={service.id || service.slug || index}
          service={service}
          index={index}
          onSelect={onSelectService}
        />
      ))}
    </div>
  );
}
