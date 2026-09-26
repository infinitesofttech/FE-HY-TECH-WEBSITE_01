import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getServiceVisual, handleImageFallback } from '../../utils/serviceVisuals';
import { SITE_CONFIG } from '../../config/siteConfig';

export default function ServiceCard({ service, onSelect, index }) {
  const { language } = useLanguage();

  if (!service) return null;

  const titleEn = service.title?.en || service.rawTitle || service.title;
  const titleGu = service.title?.gu || service.titleGujarati || titleEn;
  const descEn = service.shortDescription?.en || service.rawShortDescription || (service.overview ? service.overview.slice(0, 110) + '...' : '');
  const descGu = service.shortDescription?.gu || descEn;

  const displayTitle = language === 'gu' ? titleGu : titleEn;
  const secondaryTitle = language === 'gu' ? titleEn : (titleGu !== titleEn ? titleGu : null);
  const displayDesc = language === 'gu' ? descGu : descEn;

  const visualUrl = service.image || getServiceVisual(service.slug, service.categoryId);

  // Extract operations pills
  const opKeys = service.operations ? Object.keys(service.operations) : [];
  const hasNew = opKeys.includes('new') || (service.newApplication && service.newApplication.length > 0);
  const hasCorrection = opKeys.includes('correction') || (service.correctionUpdate && service.correctionUpdate.length > 0);
  const hasDob = opKeys.includes('dob_correction');
  const hasRenewal = opKeys.includes('renewal') || service.title?.toLowerCase().includes('renewal');

  const numberBadge = service.number ? `#${String(service.number).padStart(2, '0')}` : (index !== undefined ? `#${String(index + 1).padStart(2, '0')}` : null);

  const handleApplyWhatsApp = (e) => {
    e.stopPropagation();
    const serviceName = titleEn;
    const msg = `Hello HY-TECH Hub Dharampur, I want to apply for "${serviceName}". Please share details.`;
    window.open(SITE_CONFIG.getWhatsAppUrl(msg), '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: ((index || 0) % 8) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect && onSelect(service)}
      className="group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-[#F96400]/40 dark:hover:border-[#F96400]/40 transition-all duration-300 flex flex-col cursor-pointer"
    >
      {/* Top Banner / Image Section */}
      <div className="relative h-44 w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <img
          src={visualUrl}
          alt={titleEn}
          onError={(e) => handleImageFallback(e, service.categoryId)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* Number Badge */}
        {numberBadge && (
          <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-extrabold px-2.5 py-1 rounded-full border border-white/20 tracking-wider">
            {numberBadge}
          </span>
        )}

        {/* Category Pill */}
        <span className="absolute top-3 right-3 bg-[#F96400] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
          {typeof service.category === 'string' ? service.category : (service.category?.en || 'Service')}
        </span>

        {/* Operation Badges over Image bottom */}
        <div className="absolute bottom-2.5 left-3 right-3 flex flex-wrap gap-1.5 z-10">
          {hasNew && (
            <span className="bg-emerald-500/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs flex items-center gap-1 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              {language === 'gu' ? 'નવું' : 'New'}
            </span>
          )}
          {hasCorrection && (
            <span className="bg-amber-500/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
              {language === 'gu' ? 'સુધારો' : 'Correction'}
            </span>
          )}
          {hasDob && (
            <span className="bg-purple-500/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
              {language === 'gu' ? 'જન્મ તારીખ' : 'DOB'}
            </span>
          )}
          {hasRenewal && (
            <span className="bg-blue-500/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-md backdrop-blur-xs shadow-xs">
              {language === 'gu' ? 'રીન્યુઅલ' : 'Renewal'}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Main Title */}
          {/* Main Title (English) */}
          <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-[#F96400] dark:group-hover:text-[#F96400] transition-colors leading-snug line-clamp-1">
            {titleEn}
          </h3>

          {/* Secondary Title (Gujarati Translation) */}
          {titleGu && titleGu !== titleEn && (
            <p className="text-xs font-bold text-[#F96400] mt-0.5 line-clamp-1 font-gujarati">
              {titleGu}
            </p>
          )}

          {/* Short Description (Bilingual: English + Gujarati) */}
          <div className="mt-2.5 space-y-1">
            {descEn && (
              <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                {descEn}
              </p>
            )}
            {descGu && descGu !== descEn && (
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed font-gujarati">
                {descGu}
              </p>
            )}
          </div>

          {/* Quick Checklist Teaser (Bilingual) */}
          {Array.isArray(service.requiredDocuments) && service.requiredDocuments.length > 0 && (
            <div className="mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <p className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                <CheckCircle2 size={12} className="text-emerald-500" />
                Key Documents / જરૂરી પુરાવા:
              </p>
              <div className="flex flex-wrap gap-1">
                {service.requiredDocuments.slice(0, 3).map((doc, i) => (
                  <span
                    key={i}
                    className="text-[11px] bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-0.5 rounded-md font-medium"
                  >
                    {typeof doc === 'string' ? doc : (doc.en || '')}
                  </span>
                ))}
                {service.requiredDocuments.length > 3 && (
                  <span className="text-[11px] text-[#F96400] font-semibold px-1 py-0.5">
                    +{service.requiredDocuments.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
          <button
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-[#F96400] bg-[#F96400]/10 hover:bg-[#F96400] hover:text-white rounded-xl transition-all duration-200"
          >
            <span>View Details / વિગત જુઓ</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={handleApplyWhatsApp}
            title={language === 'gu' ? 'WhatsApp પર પૂછપરછ કરો' : 'Inquire on WhatsApp'}
            className="p-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white dark:bg-emerald-950/40 dark:hover:bg-emerald-600 rounded-xl transition-colors duration-200"
          >
            <MessageCircle size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
