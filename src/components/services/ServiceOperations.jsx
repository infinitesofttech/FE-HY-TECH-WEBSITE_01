import React, { useState } from 'react';
import { 
  CheckCircle2, FileText, ShieldCheck, Clock, 
  AlertCircle, Sparkles, Edit3, Calendar, RefreshCw
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getServiceOperations } from '../../utils/serviceUtils';
import { getBilingualText } from '../../data/translationsDictionary';

export default function ServiceOperations({ service }) {
  const { language } = useLanguage();
  const operations = getServiceOperations(service);
  const [selectedOpKey, setSelectedOpKey] = useState(operations[0]?.key || 'new');

  if (!operations || operations.length === 0) return null;

  const currentOp = operations.find(op => op.key === selectedOpKey) || operations[0];

  const getTabIcon = (key) => {
    switch (key) {
      case 'new':
        return Sparkles;
      case 'correction':
        return Edit3;
      case 'dob_correction':
        return Calendar;
      case 'renewal':
        return RefreshCw;
      default:
        return FileText;
    }
  };

  const getTabLabel = (op) => {
    let en = op.title?.en;
    let gu = op.title?.gu;

    if (!en && typeof op.title === 'string') en = op.title;
    if (!en) {
      switch (op.key) {
        case 'new': en = 'New Application'; gu = 'નવી અરજી'; break;
        case 'correction': en = 'Correction / Update'; gu = 'સુધારો / અપડેટ'; break;
        case 'update': en = 'Address / Info Update'; gu = 'સરનામું / વિગત સુધારો'; break;
        case 'dob_correction': en = 'DOB Correction'; gu = 'જન્મ તારીખ સુધારો'; break;
        case 'spouseNameUpdate': en = "Husband's Name Update"; gu = 'પતિના નામે કાર્ડ'; break;
        case 'renewal': en = 'Renewal'; gu = 'રીન્યુઅલ'; break;
        default: en = op.key.toUpperCase(); gu = '';
      }
    }
    if (!gu && op.key === 'new') gu = 'નવી અરજી';
    if (!gu && op.key === 'correction') gu = 'સુધારો / અપડેટ';
    if (!gu && op.key === 'update') gu = 'સરનામું સુધારો';
    if (!gu && op.key === 'dob_correction') gu = 'જન્મ તારીખ સુધારો';
    if (!gu && op.key === 'spouseNameUpdate') gu = 'પતિના નામે કાર્ડ';
    if (!gu && op.key === 'renewal') gu = 'રીન્યુઅલ';

    return { en: en || 'Service', gu: gu || '' };
  };

  const currentTabLabel = getTabLabel(currentOp);

  const docs = Array.isArray(currentOp.documents) && currentOp.documents.length > 0
    ? currentOp.documents
    : (Array.isArray(service.requiredDocuments) ? service.requiredDocuments : []);

  const eligibility = Array.isArray(currentOp.eligibility) && currentOp.eligibility.length > 0
    ? currentOp.eligibility
    : (Array.isArray(service.eligibility) ? service.eligibility : (service.eligibilityCriteria || []));

  const processSteps = Array.isArray(currentOp.process) && currentOp.process.length > 0
    ? currentOp.process
    : (Array.isArray(service.process) ? service.process : (service.applicationProcess || []));

  const notes = Array.isArray(currentOp.notes) && currentOp.notes.length > 0
    ? currentOp.notes
    : (Array.isArray(service.importantNotes) ? service.importantNotes : (service.notes ? [service.notes] : []));

  return (
    <div className="w-full space-y-6">
      {/* ── Dynamic Operation Tabs (Bilingual: English + Gujarati) ── */}
      {operations.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-100 dark:bg-neutral-800/80 rounded-2xl border border-neutral-200 dark:border-neutral-700">
          {operations.map((op) => {
            const Icon = getTabIcon(op.key);
            const isSelected = op.key === selectedOpKey;
            const tabLabel = getTabLabel(op);
            return (
              <button
                key={op.key}
                type="button"
                onClick={() => setSelectedOpKey(op.key)}
                className={`flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-white dark:bg-neutral-900 text-[#F96400] shadow-sm border border-neutral-200/80 dark:border-neutral-700'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Icon size={16} className={isSelected ? 'text-[#F96400]' : 'text-neutral-400 shrink-0'} />
                <div className="flex flex-col text-left">
                  <span className="text-xs sm:text-sm font-bold leading-tight">{tabLabel.en}</span>
                  {tabLabel.gu && (
                    <span className="text-[11px] font-semibold opacity-75 leading-tight">{tabLabel.gu}</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Operation Title / Subtitle Banner (Bilingual) */}
      <div className="bg-orange-50/70 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-neutral-100 flex flex-wrap items-center gap-2">
            <span>{currentTabLabel.en}</span>
            {currentTabLabel.gu && (
              <>
                <span className="text-gray-400 font-normal">/</span>
                <span className="text-[#F96400] font-bold">{currentTabLabel.gu}</span>
              </>
            )}
          </h4>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1 leading-relaxed">
            Follow the exact document checklist and eligibility for this specific operation.
            <span className="block text-neutral-500 dark:text-neutral-400 mt-0.5">આ પ્રક્રિયા માટે નીચે દર્શાવેલ ચોક્કસ પુરાવાઓ સાથે રાખો.</span>
          </p>
        </div>
        <div className="shrink-0 self-start sm:self-auto">
          <span className="text-[11px] font-extrabold uppercase px-3 py-1.5 bg-[#F96400] text-white rounded-xl shadow-xs">
            {docs.length} Docs / પુરાવા
          </span>
        </div>
      </div>

      {/* ── Document Checklist (Exact Checklist - Bilingual Topic & Content) ── */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
          <FileText className="text-[#F96400]" size={20} />
          <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-neutral-100 flex flex-wrap items-center gap-2">
            <span>Required Documents Checklist</span>
            <span className="text-gray-400 font-normal">/</span>
            <span className="text-[#F96400] font-bold">જરૂરી પુરાવાઓની યાદી</span>
          </h4>
        </div>

        {docs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {docs.map((doc, idx) => {
              const { en, gu } = getBilingualText(doc);
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl border border-neutral-200/70 dark:border-neutral-700/60 hover:border-[#F96400]/40 transition-colors"
                >
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xs">
                    {idx + 1}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                      {en}
                    </span>
                    {gu && gu !== en && (
                      <span className="text-xs font-semibold text-[#F96400] dark:text-orange-400 leading-snug mt-0.5">
                        {gu}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs sm:text-sm text-neutral-500">
            No specific documents required / કોઈ વિશેષ દસ્તાવેજ નિર્દિષ્ટ નથી.
          </p>
        )}
      </div>

      {/* ── Eligibility Criteria (Bilingual Topic & Content) ── */}
      {eligibility.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <ShieldCheck className="text-blue-500" size={20} />
            <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-neutral-100 flex flex-wrap items-center gap-2">
              <span>Eligibility Criteria</span>
              <span className="text-gray-400 font-normal">/</span>
              <span className="text-blue-600 font-bold">પાત્રતા અને શરતો</span>
            </h4>
          </div>

          <ul className="space-y-3">
            {eligibility.map((item, idx) => {
              const { en, gu } = getBilingualText(item);
              return (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">{en}</span>
                    {gu && gu !== en && (
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5 leading-snug font-gujarati">{gu}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* ── Application Process (Bilingual Topic & Content) ── */}
      {processSteps.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <Clock className="text-purple-500" size={20} />
            <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-neutral-100 flex flex-wrap items-center gap-2">
              <span>Step-by-Step Application Process</span>
              <span className="text-gray-400 font-normal">/</span>
              <span className="text-purple-600 font-bold">અરજી પ્રક્રિયા (પગલાંવાર)</span>
            </h4>
          </div>

          <div className="space-y-3.5 relative pl-5 border-l-2 border-purple-200 dark:border-purple-900/60 ml-2.5">
            {processSteps.map((step, idx) => {
              const { en, gu } = getBilingualText(step);
              return (
                <div key={idx} className="relative">
                  <div className="absolute -left-[27px] top-0 w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px] font-black shadow-xs">
                    {idx + 1}
                  </div>
                  <div className="pl-1">
                    <p className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-neutral-100 leading-snug">
                      {en}
                    </p>
                    {gu && gu !== en && (
                      <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold mt-0.5 leading-snug font-gujarati">
                        {gu}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Important Notes / Government Advisory (Bilingual Topic & Content) ── */}
      {notes.length > 0 && (
        <div className="bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 rounded-2xl p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3 text-amber-800 dark:text-amber-400">
            <AlertCircle size={20} />
            <h4 className="text-base font-black flex flex-wrap items-center gap-2">
              <span>Important Advisory & Notes</span>
              <span className="text-amber-400 font-normal">/</span>
              <span>મહત્વપૂર્ણ નોંધ અને સૂચનાઓ</span>
            </h4>
          </div>

          <div className="space-y-2.5">
            {notes.map((note, idx) => {
              const { en, gu } = getBilingualText(note);
              return (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                  <span className="font-bold text-amber-600 mt-0.5">•</span>
                  <div className="flex flex-col">
                    <span className="font-semibold">{en}</span>
                    {gu && gu !== en && (
                      <span className="text-xs text-amber-800 dark:text-amber-300 font-semibold mt-0.5 font-gujarati">{gu}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
