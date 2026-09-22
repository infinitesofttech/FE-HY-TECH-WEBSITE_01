import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, MessageCircle, FileText, CheckCircle2, 
  AlertCircle, Clock, ShieldCheck,
  Info, Edit3, Sparkles, Layers, Globe
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getServiceVisual, handleImageFallback } from '../utils/serviceVisuals';
import { Link } from 'react-router-dom';

export default function ServiceDetailsModal({ isOpen, onClose, service }) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState('all');

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['en'] || '';
  };

  // Reset tab on open
  useEffect(() => {
    if (isOpen) {
      setActiveTab('all');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen || !service) return null;

  const tabs = [
    { id: 'all', label: language === 'en' ? 'All Sections' : 'બધા વિભાગો', icon: Layers },
    { id: 'overview', label: language === 'en' ? '1. Overview' : '૧. વિહંગાવલોકન', icon: Info },
    { id: 'new-app', label: language === 'en' ? '2. New Application' : '૨. નવી અરજી', icon: Sparkles },
    { id: 'correction', label: language === 'en' ? '3. Correction / Update' : '૩. સુધારો / અપડેટ', icon: Edit3 },
    { id: 'documents', label: language === 'en' ? '4. Required Documents' : '૪. જરૂરી પુરાવા', icon: FileText },
    { id: 'eligibility', label: language === 'en' ? '5. Eligibility' : '૫. પાત્રતા', icon: ShieldCheck },
    { id: 'process', label: language === 'en' ? '6. Process' : '૬. પ્રક્રિયા', icon: Clock },
    { id: 'notes', label: language === 'en' ? '7. Important Notes' : '૭. મહત્વપૂર્ણ નોંધ', icon: AlertCircle },
  ];

  const visualUrl = service.image || getServiceVisual(service.slug, service.categoryId);

  // Normalize array fields
  const newAppList = Array.isArray(service.newApplication) 
    ? service.newApplication 
    : (service.newApplication ? [service.newApplication] : []);

  const correctionList = Array.isArray(service.correctionUpdate) 
    ? service.correctionUpdate 
    : Array.isArray(service.correction) 
      ? service.correction 
      : (service.correction ? [service.correction] : []);

  const docsList = Array.isArray(service.requiredDocuments) 
    ? service.requiredDocuments 
    : Array.isArray(service.documents) 
      ? service.documents 
      : (service.documents ? [service.documents] : []);

  const eligibilityList = Array.isArray(service.eligibility) 
    ? service.eligibility 
    : (service.eligibility ? [service.eligibility] : []);

  const processList = Array.isArray(service.process) 
    ? service.process 
    : (service.process ? [service.process] : []);

  const notesList = Array.isArray(service.importantNotes) 
    ? service.importantNotes 
    : (service.notes ? [service.notes] : []);

  const titleText = service.title?.en || service.rawTitle || service.title;
  const titleGuText = service.title?.gu || service.titleGujarati;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0A0A0A]/75 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ type: 'spring', damping: 26, stiffness: 280 }}
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.35)] border border-gray-100 overflow-hidden z-10 flex flex-col max-h-[92vh]"
        >
          
          {/* Header Banner with 3D Visual */}
          <div className="relative bg-[#171717] text-white p-6 sm:p-8 overflow-hidden flex-shrink-0">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F96400]/25 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center transition-all z-20 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6">
              
              {/* 3D Visual Container */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F96400] to-blue-500 rounded-2xl blur-xl opacity-40 animate-pulse" />
                <motion.div
                  animate={{ 
                    y: [0, -6, 0],
                    rotateZ: [0, 1, 0, -1, 0],
                  }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                  whileHover={{ scale: 1.06 }}
                  className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gray-900 border border-white/20 shadow-2xl overflow-hidden cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={visualUrl}
                    alt={titleText}
                    onError={(e) => handleImageFallback(e, service.categoryId)}
                    className="w-full h-full object-cover filter drop-shadow-xl select-none"
                    loading="eager"
                  />
                  {/* Subtle Light Reflection Glint */}
                  <motion.div 
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ repeat: Infinity, duration: 3.5, ease: 'linear', repeatDelay: 2 }}
                    className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none"
                  />
                </motion.div>
                
                {/* 3D Floating Badge */}
                <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#F96400] text-white text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1 border border-white/20">
                  <Sparkles size={10} /> 3D VISUAL
                </div>
              </div>

              {/* Title & Info */}
              <div className="flex-1 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F96400]/20 border border-[#F96400]/40 text-[#F96400] text-xs font-black uppercase tracking-wider">
                    {t(service.category) || service.rawCategory || 'Service'}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    {language === 'en' ? 'Active Service' : 'સક્રિય સેવા'}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
                  {titleText}
                </h2>
                {titleGuText && (
                  <h3 className="text-lg sm:text-xl font-bold text-gray-400 mt-0.5 mb-3">
                    {titleGuText}
                  </h3>
                )}

                <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 max-w-xl font-medium leading-relaxed">
                  {t(service.shortDescription) || service.overview}
                </p>
              </div>

            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="bg-gray-50 border-b border-gray-200 px-4 sm:px-8 py-2.5 flex items-center gap-1.5 overflow-x-auto hide-scrollbar flex-shrink-0">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#171717] text-white shadow-sm'
                      : 'text-gray-600 hover:text-[#171717] hover:bg-gray-200/60'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-[#F96400]' : 'text-gray-400'} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-gray-800 space-y-8">
            
            {/* 1. OVERVIEW SECTION */}
            {(activeTab === 'all' || activeTab === 'overview') && (
              <section className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                    <Info size={20} className="text-[#F96400]" />
                    {language === 'en' ? '1. Overview' : '૧. વિહંગાવલોકન'}
                  </h3>
                  {service.officialWebsite && (
                    <a
                      href={service.officialWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-[#F96400] bg-orange-50 hover:bg-orange-100 transition-colors border border-orange-200"
                    >
                      <Globe size={13} />
                      <span>{language === 'en' ? 'Official Portal' : 'સત્તાવાર પોર્ટલ'}</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                <div className="bg-gray-50 p-5 rounded-2xl border border-gray-200/80 leading-relaxed text-sm sm:text-base text-gray-700">
                  {t(service.overview) || t(service.shortDescription)}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                    <p className="text-xs font-bold text-[#F96400] uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Facility Available' : 'ઉપલબ્ધ સુવિધા'}
                    </p>
                    <p className="text-sm font-extrabold text-[#171717]">
                      {language === 'en' ? 'Direct Counter Assistance & Online Filing' : 'કાઉન્ટર સહાય અને ઓનલાઈન ફાઈલિંગ'}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                      {language === 'en' ? 'Center Location' : 'સેન્ટર સ્થળ'}
                    </p>
                    <p className="text-sm font-extrabold text-[#171717]">
                      College Road, Dharampur - 396050
                    </p>
                  </div>
                </div>
              </section>
            )}

            {/* 2. NEW APPLICATION SECTION */}
            {(activeTab === 'all' || activeTab === 'new-app') && (
              <section className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                  <Sparkles size={20} className="text-[#F96400]" />
                  {language === 'en' ? '2. New Application' : '૨. નવી અરજી'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {language === 'en' ? 'Requirements and documentation checklist for fresh applications:' : 'નવી અરજી માટે જરૂરી બાબતો અને દસ્તાવેજો:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {newAppList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
                      <div className="w-5 h-5 rounded-full bg-orange-100 text-[#F96400] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={13} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t(item)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 3. CORRECTION / UPDATE SECTION */}
            {(activeTab === 'all' || activeTab === 'correction') && (
              <section className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                  <Edit3 size={20} className="text-[#F96400]" />
                  {language === 'en' ? '3. Correction / Update' : '૩. સુધારો / અપડેટ'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {language === 'en' ? 'Documents and procedures for correction, update, renewal or re-issue:' : 'નામ, સરનામું, સુધારો કે રિન્યુઅલ માટેની પ્રક્રિયા:'}
                </p>
                <div className="space-y-2.5">
                  {correctionList.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
                      <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Edit3 size={13} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t(item)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 4. REQUIRED DOCUMENTS SECTION */}
            {(activeTab === 'all' || activeTab === 'documents') && (
              <section className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                  <FileText size={20} className="text-[#F96400]" />
                  {language === 'en' ? '4. Required Documents' : '૪. જરૂરી દસ્તાવેજો'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {language === 'en' ? 'Clear checklist of papers to bring along:' : 'સાથે લાવવાના જરૂરી મૂળ અને નકલ પુરાવાઓ:'}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {docsList.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-gray-200 shadow-xs hover:border-[#F96400] transition-colors">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t(doc)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 5. ELIGIBILITY SECTION */}
            {(activeTab === 'all' || activeTab === 'eligibility') && (
              <section className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#F96400]" />
                  {language === 'en' ? '5. Eligibility' : '૫. પાત્રતા'}
                </h3>
                <div className="space-y-2.5">
                  {eligibilityList.map((crit, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ShieldCheck size={13} />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t(crit)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 6. PROCESS SECTION */}
            {(activeTab === 'all' || activeTab === 'process') && (
              <section className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                  <Clock size={20} className="text-[#F96400]" />
                  {language === 'en' ? '6. Process' : '૬. પ્રક્રિયા'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">
                  {language === 'en' ? 'Step-by-step facilitation workflow:' : 'પગલાંવાર ઓનલાઈન અને ઓફલાઈન પ્રક્રિયા:'}
                </p>
                <div className="space-y-2.5">
                  {processList.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-gray-50 border border-gray-200/80">
                      <span className="w-6 h-6 rounded-full bg-[#171717] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-gray-800 leading-relaxed">{t(step)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. IMPORTANT NOTES SECTION */}
            {(activeTab === 'all' || activeTab === 'notes') && (
              <section className="space-y-3 pt-2">
                <h3 className="text-lg sm:text-xl font-black text-[#171717] flex items-center gap-2">
                  <AlertCircle size={20} className="text-amber-600" />
                  {language === 'en' ? '7. Important Notes' : '૭. મહત્વપૂર્ણ નોંધ'}
                </h3>
                <div className="space-y-2.5">
                  {notesList.map((note, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 leading-relaxed text-xs sm:text-sm font-medium">
                      <AlertCircle size={17} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <span>{t(note)}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

          </div>

          {/* Footer Action Strip */}
          <div className="bg-gray-50 border-t border-gray-200 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
            <Link
              to={`/services/${service.slug}`}
              onClick={onClose}
              className="text-xs sm:text-sm font-bold text-gray-600 hover:text-[#171717] flex items-center gap-1.5 transition-colors"
            >
              <ExternalLink size={15} />
              {language === 'en' ? 'Open Full Dedicated Page' : 'સંપૂર્ણ પેજ જુઓ'}
            </Link>

            <div className="flex items-center gap-2.5 w-full sm:w-auto">
              {service.officialWebsite && (
                <a
                  href={service.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm font-bold text-gray-700 hover:bg-gray-100 transition-all flex items-center gap-1.5"
                >
                  <Globe size={14} />
                  <span>{language === 'en' ? 'Portal' : 'પોર્ટલ'}</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl border border-gray-300 text-xs sm:text-sm font-bold text-gray-700 hover:bg-gray-100 transition-all cursor-pointer"
              >
                {language === 'en' ? 'Close' : 'બંધ કરો'}
              </button>

              <a
                href={`https://wa.me/917226030701?text=${encodeURIComponent(`Hello HY-TECH, I need guidance regarding: ${titleText || service.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <MessageCircle size={16} />
                <span>{language === 'en' ? 'WhatsApp Desk' : 'વોટ્સએપ સહાય'}</span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
