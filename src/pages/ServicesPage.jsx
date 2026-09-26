import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ChevronRight, Clock, Box, LayoutGrid, Loader2 } from 'lucide-react';
import { fetchCategories, fetchServices } from '../api/servicesApi';
import { useLanguage } from '../context/LanguageContext';
import { getServiceVisual, handleImageFallback } from '../utils/serviceVisuals';
import ServiceDetailsModal from '../components/ServiceDetailsModal';

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { language } = useLanguage();
  const t = (obj) => obj?.[language] || obj?.['en'] || '';

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      try {
        const [cats, svcs] = await Promise.all([fetchCategories(), fetchServices()]);

        // Group services into categories
        const grouped = cats.map(cat => ({
          ...cat,
          services: svcs.filter(s => s.categoryId === cat.id)
        }));

        setCategories(grouped);
      } catch (error) {
        console.error("Failed to fetch services:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  // Sync state whenever URL query parameters change (e.g. navigation or browser buttons)
  useEffect(() => {
    const cat = searchParams.get('category') || 'all';
    const s = searchParams.get('search') || '';
    setActiveCategory(cat);
    setSearchQuery(s);
  }, [searchParams]);

  // Filter logic
  const filteredCategories = useMemo(() => {
    let base = categories;

    if (activeCategory !== 'all') {
      base = categories.filter(c => c.slug === activeCategory || c.id === activeCategory);
    }

    if (!searchQuery.trim()) {
      return base;
    }

    const q = searchQuery.toLowerCase();
    return base
      .map(cat => {
        const matchingServices = cat.services.filter(s => {
          const titleEn = (s.title?.en || s.rawTitle || s.title || '').toLowerCase();
          const titleGu = (s.title?.gu || s.titleGujarati || '').toLowerCase();
          const descEn = (s.shortDescription?.en || s.rawShortDescription || s.overview || '').toLowerCase();
          const descGu = (s.shortDescription?.gu || '').toLowerCase();
          const catName = (typeof s.category === 'string' ? s.category : (s.category?.en || '')).toLowerCase();
          const docs = Array.isArray(s.requiredDocuments) ? s.requiredDocuments.join(' ').toLowerCase() : '';
          return titleEn.includes(q) || titleGu.includes(q) || descEn.includes(q) || descGu.includes(q) || catName.includes(q) || docs.includes(q);
        });
        return { ...cat, services: matchingServices };
      })
      .filter(cat => cat.services.length > 0);
  }, [activeCategory, searchQuery, categories]);

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    updateParams(val, activeCategory);
  };

  const handleCategoryChange = (slug) => {
    setActiveCategory(slug);
    updateParams(searchQuery, slug);
  };

  const updateParams = (search, cat) => {
    const params = {};
    if (search) params.search = search;
    if (cat && cat !== 'all') params.category = cat;
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] w-full overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Premium Hero Section ───────────────────────────── */}
      <div className="relative w-full bg-[#171717] pt-16 pb-24 overflow-hidden perspective-1000">
        {/* Floating 3D Background Elements */}
        <div className="absolute top-0 right-10 w-[500px] h-[500px] bg-[#F96400] rounded-full blur-[150px] opacity-20 animate-pulse pointer-events-none" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-blue-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

        {/* Floating Glass Panels */}
        <motion.div
          className="absolute right-[10%] top-[20%] w-32 h-32 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl hidden md:block"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>

        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center">

          {/* Glowing Center Pill with Flanking Lines */}
          <div className="flex items-center justify-center w-full max-w-md mx-auto gap-3 sm:gap-4 mb-6">
            <div className="flex-1 flex items-center justify-end">
              <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-cyan-500/60 to-cyan-400" />
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00E5FF] -mr-1" />
            </div>

            <div className="px-6 py-2 rounded-full bg-[#0A1325]/90 border border-cyan-400/80 shadow-[0_0_20px_rgba(0,229,255,0.4)] backdrop-blur-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F96400] shadow-[0_0_8px_#F96400] animate-pulse"></span>
              <span className="text-xs sm:text-sm font-black text-white tracking-wider uppercase">
                {language === 'en' ? 'Our Services' : 'અમારી સેવાઓ'}
              </span>
            </div>

            <div className="flex-1 flex items-center justify-start">
              <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#00E5FF] -ml-1" />
              <div className="h-[1.5px] w-full bg-gradient-to-l from-transparent via-cyan-500/60 to-cyan-400" />
            </div>
          </div>

          {/* 3D Modern Interactive Heading */}
          <motion.div
            className="perspective-1000 cursor-default"
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: -2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-tight select-none">
              <span className="text-3d-modern">
                {language === 'en' ? 'All Your Essential' : 'તમારી જરૂરી'}
              </span>
              <br />
              <span className="text-3d-gradient">
                {language === 'en' ? 'Online Services' : 'ઓનલાઈન સેવાઓ'}
              </span>
            </h1>
          </motion.div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
            {language === 'en'
              ? "All your essential online services in one place. Experience seamless, fast, and digital assistance."
              : "તમારી જરૂરી ઓનલાઈન સેવાઓ હવે એક જ જગ્યાએ. સરળ અને ઝડપી ડિજિટલ સેવાઓનો અનુભવ કરો."}
          </p>

          {/* Floating Search Bar */}
          <div className="relative w-full max-w-2xl mx-auto group perspective-1000">
            <div className="absolute inset-0 bg-[#F96400] blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full"></div>
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center p-2 shadow-2xl transform-gpu transition-transform duration-300 hover:scale-[1.02]">
              <Search size={20} className="text-gray-400 ml-4 mr-2" />
              <input
                type="text"
                placeholder={language === 'en' ? "Search services..." : "સેવા શોધો..."}
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:outline-none focus:ring-0 text-lg py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange({ target: { value: '' } })}
                  className="mr-4 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Beautiful Category Navigation ─────────────────── */}
      <div className="w-full bg-white/80 backdrop-blur-xl border-b border-gray-200 py-4 shadow-sm sticky top-[74px] z-30">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          {/* Horizontal scroll on mobile */}
          <div className="flex overflow-x-auto hide-scrollbar gap-3 pb-2 md:pb-0 items-center justify-start md:justify-center">
            <motion.button
              whileTap={{ scale: 0.94, y: 1 }}
              whileHover={{ scale: 1.04, y: -2 }}
              onClick={() => handleCategoryChange('all')}
              className={`flex-shrink-0 px-5 py-2.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                activeCategory === 'all'
                  ? 'btn-3d-circle-active border-[#171717]'
                  : 'btn-3d-circle bg-white text-gray-700 border-gray-200 hover:border-[#F96400] hover:text-[#F96400]'
              }`}
            >
              <span>All Services</span>
              <span className="text-[11px] opacity-75 font-normal">(બધી સેવાઓ)</span>
            </motion.button>
            {categories.map((cat) => {
              const catKey = cat.slug || cat.id;
              const isActive = activeCategory === cat.slug || activeCategory === cat.id;
              const titleEn = cat.title?.en || cat.name || cat.id;
              const titleGu = cat.title?.gu || '';
              return (
                <motion.button
                  key={catKey}
                  whileTap={{ scale: 0.94, y: 1 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  onClick={() => handleCategoryChange(catKey)}
                  className={`flex-shrink-0 px-5 py-2.5 text-xs sm:text-sm font-bold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                    isActive
                      ? 'btn-3d-circle-active'
                      : 'btn-3d-circle bg-white text-gray-700 border-gray-200 hover:border-[#F96400] hover:text-[#F96400]'
                  }`}
                >
                  <span>{titleEn}</span>
                  {titleGu && <span className="text-[11px] opacity-75 font-normal">({titleGu})</span>}
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── 3D Service Grid ───────────────────── */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 text-gray-400">
            <Loader2 size={48} className="animate-spin mb-4 text-[#F96400]" />
            <p className="font-bold">{language === 'en' ? 'Loading services...' : 'સેવાઓ લોડ થઈ રહી છે...'}</p>
          </div>
        ) : filteredCategories.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
            <Box size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-2xl font-bold text-[#171717] mb-3">
              {language === 'en' ? 'No services found' : 'કોઈ સેવા મળી નથી'}
            </p>
            <p className="text-gray-500 mb-8">
              {language === 'en' ? 'Try searching for something else.' : 'કૃપા કરીને બીજું કંઈક શોધો.'}
            </p>
            <button
              onClick={() => handleSearchChange({ target: { value: '' } })}
              className="px-8 py-3 rounded-full bg-[#171717] text-white text-sm font-bold hover:bg-[#F96400] transition-colors"
            >
              {language === 'en' ? 'Clear Search' : 'શોધ સાફ કરો'}
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-16">
            {filteredCategories.map((cat) => (
              <div key={cat.slug} className="w-full">

                {/* Category Header (Bilingual) */}
                {activeCategory === 'all' && !searchQuery && (
                  <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl sm:text-3xl font-black text-[#171717] flex flex-wrap items-baseline gap-2">
                      <span>{cat.title?.en || cat.name || cat.id}</span>
                      {cat.title?.gu && (
                        <span className="text-xl sm:text-2xl font-bold text-[#F96400] font-gujarati">
                          / {cat.title.gu}
                        </span>
                      )}
                    </h2>
                    <div className="h-px bg-gray-200 flex-1 ml-4 hidden md:block"></div>
                  </div>
                )}

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                  {cat.services.map((svc, i) => (
                    <motion.div
                      key={svc.slug}
                      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.5, delay: (i % 8) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full flex flex-col"
                    >
                      <div
                        onClick={() => {
                          setSelectedService(svc);
                          setIsModalOpen(true);
                        }}
                        className="flex flex-col h-full perspective-1000 group cursor-pointer text-left"
                      >

                        {/* 3D Card Container */}
                        <div className="relative flex flex-col h-full bg-white rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-sm transition-all duration-300 transform-gpu preserve-3d
                                        group-hover:-translate-y-2 group-hover:[transform:rotateX(2deg)_rotateY(-2deg)] group-hover:shadow-[0_20px_40px_-15px_rgba(249,100,0,0.2)]">

                          {/* Inner border glow on hover */}
                          <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#F96400]/20 transition-colors pointer-events-none"></div>

                          {/* Top Section with Full Size 3D Visual */}
                          <div className="w-full h-48 sm:h-52 bg-gray-900 rounded-2xl mb-4 relative overflow-hidden border border-gray-100 shadow-sm group/img shrink-0">
                            <motion.div
                              className="w-full h-full"
                              whileHover={{ scale: 1.06 }}
                              transition={{ duration: 0.4, ease: 'easeOut' }}
                            >
                              <img
                                src={svc.image || getServiceVisual(svc.slug, cat.id)}
                                alt={`${svc.title?.en || 'Service'} visual`}
                                loading="lazy"
                                decoding="async"
                                onError={(e) => handleImageFallback(e, cat.id)}
                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                              />
                            </motion.div>

                            {/* Gradient Vignette for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15 pointer-events-none" />

                            {/* Category Badge overlay (Bilingual) */}
                            <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-md border border-white/80 rounded-full text-[10px] font-black text-gray-800 tracking-wider uppercase shadow-md z-10">
                              {cat.title?.en || cat.title || 'Service'}
                              {cat.title?.gu && ` • ${cat.title.gu}`}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex flex-col flex-1 justify-between">
                            <div>
                              {/* Bilingual Titles */}
                              <h3 className="text-xl font-black text-[#171717] mb-0.5 group-hover:text-[#F96400] transition-colors leading-tight">
                                {svc.title?.en || svc.rawTitle || svc.title}
                              </h3>
                              <h4 className="text-sm font-bold text-[#F96400] mb-2 font-gujarati">
                                {svc.title?.gu || svc.titleGujarati}
                              </h4>

                              {/* Service Status / Feature Pills (Bilingual) */}
                              <div className="flex flex-wrap items-center gap-1.5 mb-3 text-[11px] font-bold text-gray-400">
                                <span className="text-[#F96400] bg-orange-50 px-2 py-0.5 rounded-md">
                                  New • નવું
                                </span>
                                <span>•</span>
                                <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                                  Correction • સુધારો
                                </span>
                                <span>•</span>
                                <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                                  Update • અપડેટ
                                </span>
                              </div>

                              {/* Short Description (Bilingual: English + Gujarati) */}
                              <div className="space-y-1 mb-4">
                                <p className="text-xs sm:text-sm text-gray-600 leading-snug line-clamp-2">
                                  {svc.shortDescription?.en || svc.rawShortDescription || (typeof svc.overview === 'string' ? svc.overview : '')}
                                </p>
                                {svc.shortDescription?.gu && (
                                  <p className="text-xs text-gray-500 font-medium leading-snug line-clamp-2 font-gujarati">
                                    {svc.shortDescription.gu}
                                  </p>
                                )}
                              </div>
                            </div>

                            {/* Footer / Button (Bilingual) */}
                            <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                              <span className="text-[#F96400] font-black text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                View Details / વિગતો જુઓ <ChevronRight size={16} />
                              </span>
                              <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full">
                                Digital India
                              </span>
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Dynamic Service Details Modal with 3D Visual Moment */}
      <ServiceDetailsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />

    </div>
  );
}
