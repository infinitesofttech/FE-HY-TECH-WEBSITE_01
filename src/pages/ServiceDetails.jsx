import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, FileText, Info,
  ExternalLink, MessageCircle, Clock, ShieldCheck,
  Edit3, Loader2, Sparkles, Globe, AlertCircle, Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fetchServiceBySlug } from '../api/servicesApi';
import { getServiceVisual, handleImageFallback } from '../utils/serviceVisuals';

const ServiceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // If slug is a category identifier, seamlessly route to /services?category=...
    const categoryMapping = {
      'online-services': 'online-services',
      'online': 'online-services',
      'education-services': 'education-services',
      'education': 'education-services',
      'job-services': 'job-services',
      'jobs': 'job-services',
      'printing-services': 'printing-services',
      'printing': 'printing-services',
      'computer-courses': 'computer-courses',
      'courses': 'computer-courses',
      'other-services': 'other-services',
      'other': 'other-services',
      'utility': 'other-services'
    };

    if (categoryMapping[slug]) {
      navigate(`/services?category=${categoryMapping[slug]}`, { replace: true });
      return;
    }

    async function loadService() {
      setIsLoading(true);
      try {
        const data = await fetchServiceBySlug(slug);
        if (!data) {
          navigate('/services', { replace: true });
          return;
        }
        setService(data);
      } catch (error) {
        console.error("Service not found", error);
        navigate('/services', { replace: true });
      } finally {
        setIsLoading(false);
      }
    }
    loadService();
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center">
        <Loader2 size={48} className="animate-spin text-[#F96400] mb-4" />
        <p className="font-bold text-gray-500">Loading details...</p>
      </div>
    );
  }

  if (!service) return null;

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['en'] || '';
  };

  const titleText = service.title?.en || service.rawTitle || service.title;
  const titleGuText = service.title?.gu || service.titleGujarati;

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

  const tabs = [
    { id: 'all', label: language === 'en' ? 'All Sections' : 'બધા વિભાગો', icon: Layers },
    { id: 'overview', label: language === 'en' ? '1. Overview' : '૧. વિહંગાવલોકન', icon: Info },
    { id: 'new', label: language === 'en' ? '2. New Application' : '૨. નવી અરજી', icon: Sparkles },
    { id: 'correction', label: language === 'en' ? '3. Correction / Update' : '૩. સુધારો / અપડેટ', icon: Edit3 },
    { id: 'docs', label: language === 'en' ? '4. Required Documents' : '૪. જરૂરી દસ્તાવેજો', icon: FileText },
    { id: 'eligibility', label: language === 'en' ? '5. Eligibility' : '૫. પાત્રતા', icon: ShieldCheck },
    { id: 'process', label: language === 'en' ? '6. Process' : '૬. પ્રક્રિયા', icon: Clock },
    { id: 'notes', label: language === 'en' ? '7. Important Notes' : '૭. મહત્વપૂર્ણ નોંધ', icon: AlertCircle }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 w-full overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ── Header Area ───────────────────────────── */}
      <div className="relative w-full bg-gradient-to-br from-[#171717] to-[#2D2D2D] pt-12 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[#F96400] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} />
            {language === 'en' ? 'Back to Services' : 'સેવાઓ પર પાછા ફરો'}
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex-1 min-w-0 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                <span className="btn-3d-circle inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F96400] text-[10px] uppercase font-black tracking-wider shadow-sm">
                  {t(service.category) || service.rawCategory || 'Service'}
                </span>
                <span className="btn-3d-circle inline-block px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] uppercase font-bold tracking-wider shadow-sm">
                  ● {language === 'en' ? 'Active Service' : 'સક્રિય સેવા'}
                </span>
                <span className="btn-3d-circle inline-block px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-[10px] uppercase font-bold tracking-wider shadow-sm">
                  Digital India
                </span>
              </div>

              {/* Bilingual Titles with 3D Typography */}
              <motion.div
                className="perspective-1000 cursor-default"
                whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-tight select-none text-3d-modern">
                  {titleText}
                </h1>
              </motion.div>

              {titleGuText && (
                <h2 className="text-2xl md:text-3xl font-bold text-gray-400 mb-5">
                  {titleGuText}
                </h2>
              )}

              {/* Action Pills with 3D Tactile Movement */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-6">
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-3d-circle px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold shadow-sm"
                >
                  ✨ {language === 'en' ? 'New Application' : 'નવી અરજી'}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-3d-circle px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold shadow-sm"
                >
                  ✏️ {language === 'en' ? 'Correction' : 'સુધારો'}
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-3d-circle px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold shadow-sm"
                >
                  🔄 {language === 'en' ? 'Update / Renewal' : 'અપડેટ / રિન્યુઅલ'}
                </motion.span>
              </div>

              <p className="text-lg text-gray-300 max-w-2xl font-medium leading-relaxed mb-6">
                {t(service.shortDescription) || service.overview}
              </p>
            </div>

            {/* 3D Visual */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F96400]/30 via-blue-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/15 shadow-2xl flex items-center justify-center overflow-hidden group">
                <img
                  src={service.image || getServiceVisual(service.slug, service.categoryId)}
                  alt={`${titleText} 3D illustration`}
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => handleImageFallback(e, service.categoryId)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Content Area ─────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 -mt-16 relative z-30">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column (Details & Tabs) */}
          <div className="flex-1 min-w-0 space-y-6">

            {/* Tabs Navigation with 3D circle/pill buttons */}
            <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-gray-100 flex overflow-x-auto hide-scrollbar gap-2 w-full max-w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <motion.button
                    key={tab.id}
                    whileTap={{ scale: 0.94, y: 1 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'btn-3d-circle-active'
                        : 'btn-3d-circle bg-gray-50 text-gray-600 hover:text-[#171717] border border-gray-200'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-white' : 'text-gray-400'} />
                    {tab.label}
                  </motion.button>
                );
              })}
            </div>

            {/* Structured Content Area */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 space-y-10 min-h-[400px]">

              {/* 1. OVERVIEW */}
              {(activeTab === 'all' || activeTab === 'overview') && (
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black text-[#171717] flex items-center gap-3">
                      <Info className="text-[#F96400]" size={24} />
                      {language === 'en' ? '1. Overview' : '૧. વિહંગાવલોકન'}
                    </h2>
                    {service.officialWebsite && (
                      <a
                        href={service.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#F96400] bg-orange-50 hover:bg-orange-100 transition-colors border border-orange-200"
                      >
                        <Globe size={14} />
                        <span>{language === 'en' ? 'Official Portal' : 'સત્તાવાર પોર્ટલ'}</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-gray-700 leading-relaxed text-[15px]">
                    {t(service.overview) || t(service.shortDescription)}
                  </div>
                </section>
              )}

              {/* 2. NEW APPLICATION */}
              {(activeTab === 'all' || activeTab === 'new') && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-black text-[#171717] flex items-center gap-3">
                    <Sparkles className="text-[#F96400]" size={24} />
                    {language === 'en' ? '2. New Application' : '૨. નવી અરજી'}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    {language === 'en' ? 'Checklist and requirements for fresh application submission:' : 'નવી અરજી ફાઈલ કરવા માટેની મુખ્ય બાબતો અને પુરાવા:'}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {newAppList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-6 h-6 rounded-full bg-orange-100 text-[#F96400] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 size={15} />
                        </div>
                        <span className="text-sm font-bold text-gray-800 leading-relaxed">{t(item)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 3. CORRECTION / UPDATE */}
              {(activeTab === 'all' || activeTab === 'correction') && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-black text-[#171717] flex items-center gap-3">
                    <Edit3 className="text-[#F96400]" size={24} />
                    {language === 'en' ? '3. Correction / Update' : '૩. સુધારો / અપડેટ'}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    {language === 'en' ? 'Procedure and supporting evidence for corrections, updates or reissue:' : 'સુધારો, અપડેટ અથવા ફરીથી મેળવવા માટે જરૂરી પુરાવા અને વિગતો:'}
                  </p>
                  <div className="space-y-3">
                    {correctionList.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Edit3 size={15} />
                        </div>
                        <span className="text-sm font-bold text-gray-800 leading-relaxed">{t(item)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 4. REQUIRED DOCUMENTS */}
              {(activeTab === 'all' || activeTab === 'docs') && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-black text-[#171717] flex items-center gap-3">
                    <FileText className="text-[#F96400]" size={24} />
                    {language === 'en' ? '4. Required Documents' : '૪. જરૂરી દસ્તાવેજો'}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    {language === 'en' ? 'Clear document checklist to carry when visiting:' : 'સાથે લાવવાના જરૂરી મૂળ અને નકલ દસ્તાવેજોની યાદી:'}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {docsList.map((doc, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-xs hover:border-[#F96400] transition-colors">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 size={16} />
                        </div>
                        <span className="text-sm font-bold text-gray-800 leading-relaxed">{t(doc)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 5. ELIGIBILITY */}
              {(activeTab === 'all' || activeTab === 'eligibility') && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-black text-[#171717] flex items-center gap-3">
                    <ShieldCheck className="text-[#F96400]" size={24} />
                    {language === 'en' ? '5. Eligibility' : '૫. પાત્રતા'}
                  </h2>
                  <div className="space-y-3">
                    {eligibilityList.map((crit, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ShieldCheck size={15} />
                        </div>
                        <span className="text-sm font-bold text-gray-800 leading-relaxed">{t(crit)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 6. PROCESS */}
              {(activeTab === 'all' || activeTab === 'process') && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-black text-[#171717] flex items-center gap-3">
                    <Clock className="text-[#F96400]" size={24} />
                    {language === 'en' ? '6. Process' : '૬. પ્રક્રિયા'}
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    {language === 'en' ? 'Numbered step-by-step facilitation flow:' : 'પગલાંવાર ઓનલાઈન અને ઓફલાઈન અરજી પ્રક્રિયા:'}
                  </p>
                  <div className="space-y-3">
                    {processList.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4.5 bg-gray-50 rounded-2xl border border-gray-100">
                        <span className="w-7 h-7 rounded-full bg-[#171717] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-bold text-gray-800 leading-relaxed">{t(step)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 7. IMPORTANT NOTES */}
              {(activeTab === 'all' || activeTab === 'notes') && (
                <section className="space-y-4">
                  <h2 className="text-2xl font-black text-[#171717] flex items-center gap-3">
                    <AlertCircle className="text-amber-600" size={24} />
                    {language === 'en' ? '7. Important Notes' : '૭. મહત્વપૂર્ણ નોંધ'}
                  </h2>
                  <div className="space-y-3">
                    {notesList.map((note, idx) => (
                      <div key={idx} className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-amber-50/80 border border-amber-200 text-amber-950 text-sm font-medium leading-relaxed">
                        <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{t(note)}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

            </div>

          </div>

          {/* Right Column (Sidebar Actions) */}
          <div className="w-full lg:w-[360px] flex-shrink-0 space-y-6">

            {/* Direct Assistance Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-5">
              <h3 className="font-extrabold text-xl text-[#171717]">
                {language === 'en' ? 'Assisted Application Desk' : 'સહાયક અરજી કેન્દ્ર'}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {language === 'en' 
                  ? 'Avoid rejection or repeated visits. Get expert guidance and document preparation directly at our Dharampur center.' 
                  : 'અરજી રદ થતી અટકાવો. અમારા ધરમપુર કેન્દ્ર પર નિષ્ણાત માર્ગદર્શન સાથે ફોર્મ ભરાવો.'}
              </p>

              <div className="space-y-3 pt-2">
                <motion.a
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.96, y: 1 }}
                  href={`https://wa.me/917226030701?text=${encodeURIComponent(`Hello HY-TECH, I need help regarding: ${titleText}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-circle w-full py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full font-black text-sm flex items-center justify-center gap-2.5 shadow-md shadow-green-500/25 border border-green-400/40 cursor-pointer"
                >
                  <MessageCircle size={18} />
                  <span>{language === 'en' ? 'Inquire via WhatsApp' : 'વોટ્સએપ પર પૂછપરછ કરો'}</span>
                </motion.a>

                {service.officialWebsite && (
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.96, y: 1 }}
                    href={service.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-circle w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-800 rounded-full font-bold text-xs flex items-center justify-center gap-2 border border-gray-200 shadow-xs cursor-pointer"
                  >
                    <Globe size={15} />
                    <span>{language === 'en' ? 'View Official Website' : 'સત્તાવાર પોર્ટલ ખોલો'}</span>
                    <ExternalLink size={13} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Official Center Information */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4">
              <h4 className="font-extrabold text-base text-[#171717]">
                {language === 'en' ? 'Center Information' : 'કેન્દ્ર માહિતી'}
              </h4>
              <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                <p>
                  <strong className="text-gray-900">{language === 'en' ? 'Branch:' : 'શાખા:'}</strong> College Road, Near Vanraj College, Dharampur, Gujarat - 396050
                </p>
                <p>
                  <strong className="text-gray-900">{language === 'en' ? 'Helpline:' : 'હેલ્પલાઇન:'}</strong> +91 72260 30701
                </p>
                <p>
                  <strong className="text-gray-900">{language === 'en' ? 'Working Hours:' : 'સમય:'}</strong> Monday to Saturday (9:00 AM to 7:00 PM)
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
