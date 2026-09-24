import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, FileText, Info,
  ExternalLink, MessageCircle, Clock, ShieldCheck,
  Edit3, Loader2, Sparkles, Globe, AlertCircle, Layers, MapPin, Phone
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fetchServiceBySlug } from '../api/servicesApi';
import { getServiceVisual, handleImageFallback } from '../utils/serviceVisuals';
import { getBilingualText } from '../data/translationsDictionary';
import ServiceOperations from '../components/services/ServiceOperations';

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
        <p className="font-bold text-gray-500">Loading service details / સેવા વિગતો લોડ થઈ રહી છે...</p>
      </div>
    );
  }

  if (!service) return null;

  const titleText = service.title?.en || service.rawTitle || service.title;
  const titleGuText = service.title?.gu || service.titleGujarati;

  const categoryEn = typeof service.category === 'string' ? service.category : (service.category?.en || service.rawCategory || 'Service');
  const categoryGu = typeof service.category === 'object' ? service.category?.gu : '';

  const shortDescEn = service.shortDescription?.en || service.rawShortDescription || (typeof service.overview === 'string' ? service.overview : service.overview?.en) || '';
  const shortDescGu = service.shortDescription?.gu || service.overview?.gu || '';

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
    { id: 'all', labelEn: 'All Sections', labelGu: 'બધા વિભાગો', icon: Layers },
    { id: 'overview', labelEn: '1. Overview', labelGu: '૧. વિહંગાવલોકન', icon: Info },
    { id: 'new', labelEn: '2. New Application', labelGu: '૨. નવી અરજી', icon: Sparkles },
    { id: 'correction', labelEn: '3. Correction & Update', labelGu: '૩. સુધારો / અપડેટ', icon: Edit3 },
    { id: 'docs', labelEn: '4. Required Documents', labelGu: '૪. જરૂરી પુરાવા', icon: FileText },
    { id: 'eligibility', labelEn: '5. Eligibility', labelGu: '૫. પાત્રતા', icon: ShieldCheck },
    { id: 'process', labelEn: '6. Process', labelGu: '૬. પ્રક્રિયા', icon: Clock },
    { id: 'notes', labelEn: '7. Important Notes', labelGu: '૭. મહત્વપૂર્ણ નોંધ', icon: AlertCircle }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 w-full overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ── Header Area (Bilingual Topic & Content) ───────────────────────────── */}
      <div className="relative w-full bg-gradient-to-br from-[#171717] to-[#2D2D2D] pt-12 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[#F96400] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} />
            Back to Services / સેવાઓ પર પાછા ફરો
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex-1 min-w-0 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                <span className="btn-3d-circle inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#F96400] text-[10px] uppercase font-black tracking-wider shadow-sm">
                  {categoryEn} {categoryGu && `• ${categoryGu}`}
                </span>
                <span className="btn-3d-circle inline-block px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] uppercase font-bold tracking-wider shadow-sm">
                  ● Active Service • સક્રિય સેવા
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
                <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-5 font-gujarati">
                  {titleGuText}
                </h2>
              )}

              {/* Action Pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 mb-6">
                <span className="btn-3d-circle px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold shadow-sm">
                  ✨ New Application / નવી અરજી
                </span>
                <span className="btn-3d-circle px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-bold shadow-sm">
                  🔄 Update / સુધારો
                </span>
              </div>

              {/* Bilingual Descriptions */}
              <div className="space-y-1.5 max-w-2xl mb-6">
                {shortDescEn && (
                  <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed">
                    {shortDescEn}
                  </p>
                )}
                {shortDescGu && (
                  <p className="text-sm sm:text-base text-gray-300 font-medium leading-relaxed font-gujarati">
                    {shortDescGu}
                  </p>
                )}
              </div>
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

            {/* Tabs Navigation (Bilingual: English + Gujarati) */}
            <div className="bg-white p-2.5 rounded-2xl shadow-sm border border-gray-100 flex overflow-x-auto hide-scrollbar gap-2 w-full max-w-full">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#171717] text-white shadow-md'
                        : 'bg-gray-50 text-gray-600 hover:text-[#171717] border border-gray-200'
                    }`}
                  >
                    <Icon size={16} className={isActive ? 'text-[#F96400]' : 'text-gray-400 shrink-0'} />
                    <div className="flex flex-col text-left">
                      <span className="leading-tight">{tab.labelEn}</span>
                      <span className="text-[10px] opacity-75 font-semibold leading-tight">{tab.labelGu}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Structured Content Area */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100 space-y-10 min-h-[400px]">

              {/* 1. OVERVIEW (Bilingual Topic & Content) */}
              {(activeTab === 'all' || activeTab === 'overview') && (
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-black text-[#171717] flex flex-wrap items-center gap-2.5">
                      <Info className="text-[#F96400]" size={24} />
                      <span>1. Overview</span>
                      <span className="text-gray-400 font-normal">/</span>
                      <span className="text-[#F96400]">૧. વિહંગાવલોકન</span>
                    </h2>
                    {service.officialWebsite && (
                      <a
                        href={service.officialWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#F96400] bg-orange-50 hover:bg-orange-100 transition-colors border border-orange-200"
                      >
                        <Globe size={14} />
                        <span>Official Portal / સત્તાવાર પોર્ટલ</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                  <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-gray-700 leading-relaxed text-[15px] space-y-3">
                    <p className="text-gray-800 font-medium">
                      {service.overview?.en || service.shortDescription?.en || service.rawShortDescription || (typeof service.overview === 'string' ? service.overview : '')}
                    </p>
                    {(service.overview?.gu || service.shortDescription?.gu) && (
                      <p className="text-gray-600 font-medium text-sm pt-2 border-t border-gray-200/70 font-gujarati">
                        {service.overview?.gu || service.shortDescription?.gu}
                      </p>
                    )}
                  </div>
                </section>
              )}

              {/* Dynamic Operations & Checklist */}
              {service.operations ? (
                <ServiceOperations service={service} />
              ) : (
                <>
                  {/* 2. NEW APPLICATION (Bilingual Topic & Content) */}
                  {(activeTab === 'all' || activeTab === 'new') && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-black text-[#171717] flex flex-wrap items-center gap-2.5">
                        <Sparkles className="text-[#F96400]" size={24} />
                        <span>2. New Application</span>
                        <span className="text-gray-400 font-normal">/</span>
                        <span className="text-[#F96400]">૨. નવી અરજી</span>
                      </h2>
                      <p className="text-sm text-gray-500 font-medium">
                        Checklist and requirements for fresh application submission:
                        <span className="block text-gray-400 font-gujarati">નવી અરજી ફાઈલ કરવા માટેની મુખ્ય બાબતો અને પુરાવા:</span>
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {newAppList.map((item, idx) => {
                          const { en, gu } = getBilingualText(item);
                          return (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                              <div className="w-6 h-6 rounded-full bg-orange-100 text-[#F96400] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle2 size={15} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-800 leading-relaxed">{en}</span>
                                {gu && gu !== en && (
                                  <span className="text-xs text-[#F96400] font-semibold mt-0.5 font-gujarati">{gu}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* 3. CORRECTION / UPDATE (Bilingual Topic & Content) */}
                  {(activeTab === 'all' || activeTab === 'correction') && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-black text-[#171717] flex flex-wrap items-center gap-2.5">
                        <Edit3 className="text-[#F96400]" size={24} />
                        <span>3. Correction & Update</span>
                        <span className="text-gray-400 font-normal">/</span>
                        <span className="text-[#F96400]">૩. સુધારો / અપડેટ</span>
                      </h2>
                      <p className="text-sm text-gray-500 font-medium">
                        Procedure and supporting evidence for corrections, updates or reissue:
                        <span className="block text-gray-400 font-gujarati">સુધારો, અપડેટ અથવા ફરીથી મેળવવા માટે જરૂરી પુરાવા અને વિગતો:</span>
                      </p>
                      <div className="space-y-3">
                        {correctionList.map((item, idx) => {
                          const { en, gu } = getBilingualText(item);
                          return (
                            <div key={idx} className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                              <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Edit3 size={15} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-800 leading-relaxed">{en}</span>
                                {gu && gu !== en && (
                                  <span className="text-xs text-blue-600 font-semibold mt-0.5 font-gujarati">{gu}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* 4. REQUIRED DOCUMENTS (Bilingual Topic & Content) */}
                  {(activeTab === 'all' || activeTab === 'docs') && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-black text-[#171717] flex flex-wrap items-center gap-2.5">
                        <FileText className="text-[#F96400]" size={24} />
                        <span>4. Required Documents Checklist</span>
                        <span className="text-gray-400 font-normal">/</span>
                        <span className="text-[#F96400]">૪. જરૂરી દસ્તાવેજોની યાદી</span>
                      </h2>
                      <p className="text-sm text-gray-500 font-medium">
                        Clear document checklist to carry when visiting:
                        <span className="block text-gray-400 font-gujarati">સાથે લાવવાના જરૂરી મૂળ અને નકલ દસ્તાવેજોની યાદી:</span>
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {docsList.map((doc, idx) => {
                          const { en, gu } = getBilingualText(doc);
                          return (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-xs hover:border-[#F96400] transition-colors">
                              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <CheckCircle2 size={16} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-800 leading-relaxed">{en}</span>
                                {gu && gu !== en && (
                                  <span className="text-xs text-emerald-700 font-semibold mt-0.5 font-gujarati">{gu}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* 5. ELIGIBILITY (Bilingual Topic & Content) */}
                  {(activeTab === 'all' || activeTab === 'eligibility') && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-black text-[#171717] flex flex-wrap items-center gap-2.5">
                        <ShieldCheck className="text-[#F96400]" size={24} />
                        <span>5. Eligibility Criteria</span>
                        <span className="text-gray-400 font-normal">/</span>
                        <span className="text-blue-600">૫. પાત્રતા અને શરતો</span>
                      </h2>
                      <div className="space-y-3">
                        {eligibilityList.map((crit, idx) => {
                          const { en, gu } = getBilingualText(crit);
                          return (
                            <div key={idx} className="flex items-start gap-3.5 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                              <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <ShieldCheck size={15} />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm font-bold text-gray-800 leading-relaxed">{en}</span>
                                {gu && gu !== en && (
                                  <span className="text-xs text-emerald-700 font-semibold mt-0.5 font-gujarati">{gu}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* 6. PROCESS (Bilingual Topic & Content) */}
                  {(activeTab === 'all' || activeTab === 'process') && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-black text-[#171717] flex flex-wrap items-center gap-2.5">
                        <Clock className="text-[#F96400]" size={24} />
                        <span>6. Step-by-Step Process</span>
                        <span className="text-gray-400 font-normal">/</span>
                        <span className="text-purple-600">૬. અરજી પ્રક્રિયા (પગલાંવાર)</span>
                      </h2>
                      <p className="text-sm text-gray-500 font-medium">
                        Numbered step-by-step facilitation flow:
                        <span className="block text-gray-400 font-gujarati">પગલાંવાર ઓનલાઈન અને ઓફલાઈન અરજી પ્રક્રિયા:</span>
                      </p>
                      <div className="space-y-3">
                        {processList.map((step, idx) => {
                          const { en, gu } = getBilingualText(step);
                          return (
                            <div key={idx} className="flex items-start gap-4 p-4.5 bg-gray-50 rounded-2xl border border-gray-100">
                              <span className="w-7 h-7 rounded-full bg-[#171717] text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                {idx + 1}
                              </span>
                              <div className="flex-1 flex flex-col">
                                <p className="text-sm font-bold text-gray-800 leading-relaxed">{en}</p>
                                {gu && gu !== en && (
                                  <p className="text-xs text-gray-500 font-medium mt-0.5 font-gujarati">{gu}</p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}

                  {/* 7. IMPORTANT NOTES (Bilingual Topic & Content) */}
                  {(activeTab === 'all' || activeTab === 'notes') && (
                    <section className="space-y-4">
                      <h2 className="text-2xl font-black text-[#171717] flex flex-wrap items-center gap-2.5">
                        <AlertCircle className="text-amber-600" size={24} />
                        <span>7. Important Notes & Advisory</span>
                        <span className="text-gray-400 font-normal">/</span>
                        <span className="text-amber-700">૭. મહત્વપૂર્ણ નોંધ અને સૂચનાઓ</span>
                      </h2>
                      <div className="space-y-3">
                        {notesList.map((note, idx) => {
                          const { en, gu } = getBilingualText(note);
                          return (
                            <div key={idx} className="flex items-start gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 leading-relaxed">
                              <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                              <div className="flex flex-col">
                                <span className="text-sm font-medium">{en}</span>
                                {gu && gu !== en && (
                                  <span className="text-xs text-amber-800 font-semibold mt-0.5 font-gujarati">{gu}</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}
                </>
              )}

            </div>
          </div>

          {/* Right Column (Sidebar CTA & Center Info - Bilingual) */}
          <div className="w-full lg:w-80 shrink-0 space-y-6">
            {/* Quick Contact & Assistance Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-center">
              <h3 className="text-lg font-black text-[#171717] mb-1">
                Need Fast Application Assistance?
              </h3>
              <p className="text-xs text-gray-500 font-medium mb-5 font-gujarati">
                ઝડપી અરજી સહાયતા મેળવવા સંપર્ક કરો
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/917226030701?text=${encodeURIComponent(`Hello HY-TECH Hub, I need assistance for service: ${titleText} (${titleGuText || ''})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageCircle size={18} />
                  WhatsApp Direct Desk / વોટ્સએપ
                </a>

                <a
                  href="tel:+917226030701"
                  className="w-full py-3 px-4 rounded-xl bg-[#171717] hover:bg-[#333] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <Phone size={18} />
                  Call Center / કોલ કરો
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100 text-left space-y-3">
                <div className="flex items-start gap-2.5 text-xs text-gray-600">
                  <Clock size={16} className="text-[#F96400] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Working Hours / કામકાજનો સમય</p>
                    <p>Mon - Sat: 9:00 AM – 8:00 PM</p>
                    <p className="font-gujarati text-[11px] text-gray-500">સોમથી શનિ: સવારે ૯ થી રાત્રે ૮</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 text-xs text-gray-600">
                  <MapPin size={16} className="text-[#F96400] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-900">Center Address / સરનામું</p>
                    <p>College Road, Dharampur - 396050</p>
                    <p className="font-gujarati text-[11px] text-gray-500">કોલેજ રોડ, ધરમપુર</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
