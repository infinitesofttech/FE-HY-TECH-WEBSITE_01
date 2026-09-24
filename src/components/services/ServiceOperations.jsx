import React, { useState } from 'react';
import { 
  CheckCircle2, FileText, ShieldCheck, Clock, 
  AlertCircle, Sparkles, Edit3, Calendar, RefreshCw,
  ExternalLink, MessageCircle
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { getServiceOperations } from '../../utils/serviceUtils';

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
    if (op.title?.[language]) return op.title[language];
    if (op.title?.en) return op.title.en;
    if (typeof op.title === 'string') return op.title;

    switch (op.key) {
      case 'new':
        return language === 'gu' ? 'નવી અરજી' : 'New Application';
      case 'correction':
        return language === 'gu' ? 'સુધારો / અપડેટ' : 'Correction / Update';
      case 'dob_correction':
        return language === 'gu' ? 'જન્મ તારીખ સુધારો' : 'DOB Correction';
      case 'renewal':
        return language === 'gu' ? 'રીન્યુઅલ' : 'Renewal';
      default:
        return op.key.toUpperCase();
    }
  };

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
      {/* ── Dynamic Operation Tabs ───────────────────────────── */}
      {operations.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-100 dark:bg-neutral-800/80 rounded-2xl border border-neutral-200 dark:border-neutral-700">
          {operations.map((op) => {
            const Icon = getTabIcon(op.key);
            const isSelected = op.key === selectedOpKey;
            return (
              <button
                key={op.key}
                type="button"
                onClick={() => setSelectedOpKey(op.key)}
                className={`flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  isSelected
                    ? 'bg-white dark:bg-neutral-900 text-[#F96400] shadow-sm border border-neutral-200/80 dark:border-neutral-700'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                <Icon size={16} className={isSelected ? 'text-[#F96400]' : 'text-neutral-400'} />
                <span>{getTabLabel(op)}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Operation Title / Subtitle */}
      {currentOp.title && (
        <div className="bg-orange-50/60 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900/40 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
              {getTabLabel(currentOp)}
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              {language === 'gu'
                ? 'આ પ્રક્રિયા માટે નીચે દર્શાવેલ ચોક્કસ પુરાવાઓ સાથે રાખો.'
                : 'Follow the exact document checklist and eligibility for this specific operation.'}
            </p>
          </div>
          <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 bg-[#F96400] text-white rounded-lg">
            {docs.length} {language === 'gu' ? 'દસ્તાવેજ' : 'Docs'}
          </span>
        </div>
      )}

      {/* ── Document Checklist (Exact Checklist) ─────────────── */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
          <FileText className="text-[#F96400]" size={18} />
          <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
            {language === 'gu' ? 'જરૂરી પુરાવાઓની યાદી (Checklist):' : 'Required Documents Checklist:'}
          </h4>
        </div>

        {docs.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {docs.map((doc, idx) => {
              const docName = typeof doc === 'string' ? doc : (doc[language] || doc.en || '');
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl border border-neutral-200/60 dark:border-neutral-700/60 hover:border-[#F96400]/40 transition-colors"
                >
                  <div className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-[11px]">
                    {idx + 1}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                    {docName}
                  </span>
                </div>
              );
            })}
          </div>
        ) : (
          <p className="text-xs text-neutral-500">
            {language === 'gu' ? 'કોઈ દસ્તાવેજ નિર્દિષ્ટ નથી.' : 'No specific documents specified.'}
          </p>
        )}
      </div>

      {/* ── Eligibility Criteria (If present) ────────────────── */}
      {eligibility.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <ShieldCheck className="text-blue-500" size={18} />
            <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
              {language === 'gu' ? 'પાત્રતા અને શરતો (Eligibility):' : 'Eligibility Criteria:'}
            </h4>
          </div>

          <ul className="space-y-2.5">
            {eligibility.map((item, idx) => {
              const text = typeof item === 'string' ? item : (item[language] || item.en || '');
              return (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                  <CheckCircle2 size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* ── Application Process (Timeline / Steps) ────────────── */}
      {processSteps.length > 0 && (
        <div className="bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800 rounded-2xl p-5 shadow-xs">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-neutral-100 dark:border-neutral-800">
            <Clock className="text-purple-500" size={18} />
            <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-neutral-100">
              {language === 'gu' ? 'અરજી પ્રક્રિયા (Step-by-Step Process):' : 'Application Process:'}
            </h4>
          </div>

          <div className="space-y-3 relative pl-4 border-l-2 border-purple-200 dark:border-purple-900/60 ml-2">
            {processSteps.map((step, idx) => {
              const text = typeof step === 'string' ? step : (step[language] || step.en || '');
              return (
                <div key={idx} className="relative">
                  <div className="absolute -left-[23px] top-0 w-4 h-4 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 pl-1 font-medium">
                    {text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Important Notes / Government Advisory ────────────── */}
      {notes.length > 0 && (
        <div className="bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-3 text-amber-700 dark:text-amber-400">
            <AlertCircle size={18} />
            <h4 className="text-sm font-bold">
              {language === 'gu' ? 'મહત્વપૂર્ણ નોંધ (Important Advisory):' : 'Important Advisory & Notes:'}
            </h4>
          </div>

          <ul className="space-y-2">
            {notes.map((note, idx) => {
              const text = typeof note === 'string' ? note : (note[language] || note.en || '');
              return (
                <li key={idx} className="text-xs text-amber-800/90 dark:text-amber-300/90 flex items-start gap-2 leading-relaxed">
                  <span className="font-bold">•</span>
                  <span>{text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
