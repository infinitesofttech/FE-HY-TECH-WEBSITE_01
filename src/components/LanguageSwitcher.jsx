import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

const LanguageSwitcher = ({ className = '' }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`relative inline-flex items-center justify-center p-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95 ${className}`}
      title="Switch Language"
      style={{ minWidth: '100px', height: '36px' }}
    >
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 w-1/2 bg-[#F96400] rounded-full shadow-md"
          initial={false}
          animate={{
            left: language === 'en' ? '2px' : 'calc(50% - 2px)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      </div>

      <div className="relative z-10 flex w-full justify-between items-center px-1 text-xs font-bold text-white uppercase tracking-wider">
        <div className={`w-1/2 text-center transition-colors ${language === 'en' ? 'text-white' : 'text-gray-300'}`}>
          EN
        </div>
        <div className={`w-1/2 text-center transition-colors ${language === 'gu' ? 'text-white font-black' : 'text-gray-300'}`}>
          ગુજ
        </div>
      </div>
    </button>
  );
};

export default LanguageSwitcher;
