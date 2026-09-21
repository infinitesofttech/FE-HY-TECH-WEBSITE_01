import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, FileText, Info,
  CreditCard, ExternalLink, MessageCircle,
  Clock, ShieldCheck, Edit3, Loader2, Link as LinkIcon
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
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    async function loadService() {
      setIsLoading(true);
      try {
        const data = await fetchServiceBySlug(slug);
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

  const t = (obj) => obj?.[language] || obj?.['en'] || '';

  const whatsappMsg = t(service.actions?.whatsapp) || `Hello HY-Tech, I want to inquire about: ${t(service.title)}`;

  // Define available tabs based on data existence
  const tabs = [
    { id: 'overview', label: language === 'en' ? 'Overview' : 'ઝાંખી', icon: Info, data: service.overview },
    { id: 'new', label: language === 'en' ? 'New Application' : 'નવી અરજી', icon: FileText, data: service.newApplication },
    { id: 'correction', label: language === 'en' ? 'Correction / Update' : 'સુધારો / અપડેટ', icon: Edit3, data: service.correction },
    { id: 'docs', label: language === 'en' ? 'Required Documents' : 'જરૂરી દસ્તાવેજો', icon: FileText, data: service.documents },
    { id: 'eligibility', label: language === 'en' ? 'Eligibility' : 'પાત્રતા', icon: CheckCircle2, data: service.eligibility },
    { id: 'process', label: language === 'en' ? 'Process' : 'પ્રક્રિયા', icon: Clock, data: service.process },
    { id: 'fees', label: language === 'en' ? 'Fees' : 'ફી', icon: CreditCard, data: service.fees },
    { id: 'notes', label: language === 'en' ? 'Important Notes' : 'મહત્વપૂર્ણ નોંધો', icon: ShieldCheck, data: service.notes }
  ].filter(tab => tab.data && (Array.isArray(tab.data) ? tab.data.length > 0 : Object.keys(tab.data).length > 0));

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      {/* ── Header Area ───────────────────────────── */}
      <div className="relative w-full bg-gradient-to-br from-[#171717] to-[#2D2D2D] pt-12 pb-24 overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[#F96400] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10"></div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-20">
          <Link to="/services" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} />
            {language === 'en' ? 'Back to Services' : 'સેવાઓ પર પાછા ફરો'}
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#F96400] text-[10px] uppercase font-black tracking-wider">
                  {t(service.category)}
                </span>
                {service.serviceStatus && (
                  <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold tracking-wider">
                    ● {service.serviceStatus}
                  </span>
                )}
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-wider">
                  Digital India
                </span>
              </div>

              {/* Bilingual Titles */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 leading-tight tracking-tight">
                {service.title?.en}
              </h1>
              {service.title?.gu && (
                <h2 className="text-2xl md:text-3xl font-bold text-gray-400 mb-5">
                  {service.title?.gu}
                </h2>
              )}

              {/* Action Pills [New] [Correction] [Update] as specified in Section 50 */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6">
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-bold shadow-xs">
                  ✨ {language === 'en' ? 'New Application' : 'નવી અરજી'}
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-bold shadow-xs">
                  ✏️ {language === 'en' ? 'Correction' : 'સુધારો'}
                </span>
                <span className="px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs font-bold shadow-xs">
                  🔄 {language === 'en' ? 'Update / Renewal' : 'અપડેટ / રિન્યુઅલ'}
                </span>
              </div>

              <p className="text-lg text-gray-300 max-w-2xl font-medium leading-relaxed mb-6">
                {t(service.shortDescription)}
              </p>
            </div>

            {/* 3D Visual - Section 50 layout */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F96400]/30 via-blue-500/10 to-transparent rounded-3xl blur-2xl"></div>
              <div className="relative z-10 w-full h-full bg-white/5 backdrop-blur-md rounded-3xl p-4 border border-white/15 shadow-2xl flex items-center justify-center overflow-hidden group">
                <img
                  src={service.image || getServiceVisual(service.slug, service.categoryId)}
                  alt={`${service.title?.en || 'Service'} 3D illustration`}
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
          <div className="flex-1 space-y-6">

            {/* Tabs Navigation */}
            <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex overflow-x-auto hide-scrollbar gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${isActive
                        ? 'bg-[#171717] text-white shadow-md'
                        : 'bg-transparent text-gray-500 hover:bg-gray-50 hover:text-[#171717]'
                      }`}
                  >
                    <Icon size={16} className={isActive ? 'text-[#F96400]' : 'text-gray-400'} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content Area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 min-h-[400px]"
              >

                {/* OVERVIEW */}
                {activeTab === 'overview' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-6 flex items-center gap-3">
                      <Info className="text-[#F96400]" /> {language === 'en' ? 'Overview' : 'ઝાંખી'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px]">
                      {t(service.overview)}
                    </p>
                  </div>
                )}

                {/* NEW APPLICATION */}
                {activeTab === 'new' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-6 flex items-center gap-3">
                      <FileText className="text-[#F96400]" /> {language === 'en' ? 'New Application' : 'નવી અરજી'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                      {t(service.newApplication)}
                    </p>
                  </div>
                )}

                {/* CORRECTION */}
                {activeTab === 'correction' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-6 flex items-center gap-3">
                      <Edit3 className="text-[#F96400]" /> {language === 'en' ? 'Correction / Update' : 'સુધારો / અપડેટ'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                      {t(service.correction)}
                    </p>
                  </div>
                )}

                {/* DOCUMENTS */}
                {activeTab === 'docs' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-6 flex items-center gap-3">
                      <FileText className="text-[#F96400]" /> {language === 'en' ? 'Required Documents' : 'જરૂરી દસ્તાવેજો'}
                    </h2>

                    {/* Important Document Rule Banner */}
                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-2xl mb-8">
                      <h3 className="text-blue-800 font-bold mb-4 flex items-center gap-2">
                        <Info size={20} />
                        {language === 'en' ? 'Important Document Rules' : 'મહત્વપૂર્ણ દસ્તાવેજ નિયમો'}
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                          <div>
                            <p className="font-bold text-gray-800">{language === 'en' ? 'Original Documents' : 'મૂળ દસ્તાવેજો'}</p>
                            <p className="text-sm text-gray-600 font-medium mt-1">{language === 'en' ? 'Keep original documents available for verification.' : 'વેરિફિકેશન માટે મૂળ દસ્તાવેજો સાથે રાખવા.'}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                          <div>
                            <p className="font-bold text-gray-800">{language === 'en' ? 'Xerox + Scan Copy' : 'Xerox + Scan Copy'}</p>
                            <p className="text-sm text-gray-600 font-medium mt-1">{language === 'en' ? 'Keep Xerox and PDF/JPG scanned copies ready as required.' : 'જરૂરિયાત પ્રમાણે Xerox અને PDF/JPG Scan Copy તૈયાર રાખવી.'}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="text-blue-500 mt-0.5 flex-shrink-0" size={18} />
                          <div>
                            <p className="font-bold text-gray-800">{language === 'en' ? 'Mobile Number' : 'મોબાઇલ નંબર'}</p>
                            <p className="text-sm text-gray-600 font-medium mt-1">{language === 'en' ? 'Keep an active applicant mobile number for OTP and application communication.' : 'OTP અને application communication માટે અરજદારનો active mobile number રાખવો.'}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.documents?.map((doc, idx) => (
                        <li key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:border-[#F96400] transition-colors">
                          <div className="mt-0.5 w-6 h-6 rounded-full bg-orange-50 text-[#F96400] flex items-center justify-center flex-shrink-0">
                            <CheckCircle2 size={16} />
                          </div>
                          <span className="text-gray-800 font-bold text-sm leading-relaxed">{t(doc)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* ELIGIBILITY */}
                {activeTab === 'eligibility' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-6 flex items-center gap-3">
                      <CheckCircle2 className="text-[#F96400]" /> {language === 'en' ? 'Eligibility' : 'પાત્રતા'}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-[15px] whitespace-pre-line">
                      {t(service.eligibility)}
                    </p>
                  </div>
                )}

                {/* PROCESS */}
                {activeTab === 'process' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-8 flex items-center gap-3">
                      <Clock className="text-[#F96400]" /> {language === 'en' ? 'Process Timeline' : 'પ્રક્રિયા સમયરેખા'}
                    </h2>
                    <div className="relative border-l-2 border-gray-100 ml-4 space-y-8">
                      {service.process?.map((step, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-4 border-gray-100 shadow-sm flex items-center justify-center">
                            <span className="text-[10px] font-black text-gray-400">{String(idx + 1).padStart(2, '0')}</span>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100 -mt-2">
                            <h4 className="font-bold text-[#171717]">{t(step)}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* FEES */}
                {activeTab === 'fees' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-6 flex items-center gap-3">
                      <CreditCard className="text-[#F96400]" /> {language === 'en' ? 'Fees Structure' : 'ફી માળખું'}
                    </h2>
                    <div className="space-y-4 max-w-md">
                      {service.fees?.governmentFee && (
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <span className="text-gray-600 font-medium">Government / Official Fee</span>
                          <span className="font-bold text-[#171717]">{service.fees.governmentFee}</span>
                        </div>
                      )}
                      {service.fees?.hytechFee && (
                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <span className="text-gray-600 font-medium">HY-TECH Assistance Charge</span>
                          <span className="font-bold text-[#171717]">{service.fees.hytechFee}</span>
                        </div>
                      )}
                      {service.fees?.total && (
                        <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                          <span className="text-[#F96400] font-black">Total Estimated Cost</span>
                          <span className="font-black text-[#F96400]">{service.fees.total}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* NOTES */}
                {activeTab === 'notes' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#171717] mb-6 flex items-center gap-3">
                      <ShieldCheck className="text-[#F96400]" /> {language === 'en' ? 'Important Notes' : 'મહત્વપૂર્ણ નોંધો'}
                    </h2>
                    <div className="p-6 bg-orange-50/50 rounded-2xl border border-orange-100 flex items-start gap-4">
                      <Info className="text-[#F96400] flex-shrink-0 mt-1" size={24} />
                      <p className="text-gray-800 font-medium leading-relaxed">{t(service.notes)}</p>
                    </div>
                  </div>
                )}

              </motion.div>
            </AnimatePresence>

          </div>

          {/* Right Column (Sidebar Actions) */}
          <div className="w-full lg:w-[380px] space-y-4">

            {/* Dynamic Actions Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-28 space-y-3">
              <h3 className="text-sm font-bold text-[#171717] uppercase tracking-wider mb-4 pb-4 border-b border-gray-100">
                {language === 'en' ? 'Available Actions' : 'ઉપલબ્ધ ક્રિયાઓ'}
              </h3>

              {service.actions?.applyNow && (
                <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-[#171717] to-[#2D2D2D] text-white font-bold text-sm shadow-md transition-transform hover:-translate-y-1">
                  <FileText size={16} />
                  {language === 'en' ? 'Apply Now' : 'અત્યારે જ અરજી કરો'}
                </button>
              )}

              {service.actions?.correction && (
                <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gray-50 text-[#171717] font-bold text-sm border border-gray-200 hover:bg-gray-100 transition-colors">
                  <Edit3 size={16} />
                  {language === 'en' ? 'Correction / Update' : 'સુધારો / અપડેટ'}
                </button>
              )}

              {service.actions?.whatsapp && (
                <a
                  href={`https://wa.me/917226030701?text=${encodeURIComponent(whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md transition-transform hover:-translate-y-1"
                >
                  <MessageCircle size={16} />
                  {language === 'en' ? 'WhatsApp Inquiry' : 'WhatsApp પૂછપરછ'}
                </a>
              )}

              {service.actions?.officialWebsite && (
                <a
                  href={service.actions.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gray-50 text-blue-600 font-bold text-sm border border-gray-200 hover:bg-gray-100 transition-colors mt-4"
                >
                  <LinkIcon size={16} />
                  {language === 'en' ? 'Official Website' : 'સત્તાવાર વેબસાઇટ'}
                </a>
              )}
            </div>

            {/* Quick Contact Card */}
            <div className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
              <h3 className="font-bold text-[#171717] mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Visit our Dharampur center for offline assistance and document verification.</p>
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-[#F96400] font-bold text-sm border border-orange-200 hover:bg-orange-100 transition-colors"
              >
                <ExternalLink size={16} />
                Contact HY-TECH
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
