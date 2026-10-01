import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Phone, MessageCircle, Mail, Sparkles, Clock, ArrowRight } from 'lucide-react';

export default function ApplyConfirmation({ 
  submission, 
  onReset, 
  onClose,
  serviceTitle 
}) {
  const applicantName = submission?.name || '';
  const refId = submission?.id || '';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="w-full bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-100 dark:border-emerald-950/60 shadow-xl space-y-6 text-[#171717] dark:text-gray-100"
    >
      {/* Success Badge & Animated Check */}
      <div className="flex flex-col items-center text-center">
        <div className="relative mb-3">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 flex items-center justify-center border-2 border-emerald-500/30 shadow-inner">
            <CheckCircle2 size={40} className="sm:size-12 animate-bounce-short text-emerald-600" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
        </div>

        {refId && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-100/70 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 mb-2">
            <Sparkles size={12} /> Reference No: {refId}
          </span>
        )}

        {/* Required Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-snug">
          Welcome to HY-Tech Computer Education & Online Hub!
        </h2>

        {applicantName && (
          <p className="text-sm font-semibold text-[#F96400] mt-1">
            Applicant: {applicantName} {serviceTitle ? `• ${serviceTitle}` : ''}
          </p>
        )}

        {/* Required Message */}
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mt-2 max-w-xl leading-relaxed">
          Thank you for applying for our services. We have received your request, and our team will contact you shortly.
        </p>
      </div>

      {/* Required Contact Details Card */}
      <div className="bg-[#FAFAFA] dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 border border-gray-200/80 dark:border-gray-700/80 space-y-4">
        <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
          <p className="text-xs font-black uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Center & Communication Details / સંપર્ક વિગતો
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          {/* Address */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <div className="w-9 h-9 rounded-lg bg-orange-50 text-[#F96400] flex items-center justify-center shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 dark:text-white mb-0.5">Address / સરનામું</p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                College Road, Kanurbarda, Old Jakatnaka, Dharampur, Valsad, Gujarat – 396050
              </p>
            </div>
          </div>

          {/* Phone / WhatsApp */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Phone size={18} />
            </div>
            <div className="space-y-1">
              <p className="font-extrabold text-gray-900 dark:text-white">Phone / WhatsApp</p>
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <a
                  href="tel:+917226030701"
                  className="font-bold text-[#171717] dark:text-white hover:text-[#F96400] underline underline-offset-2 flex items-center gap-1"
                >
                  <Phone size={13} className="text-[#F96400]" /> +91 72260 30701
                </a>
                <span className="text-gray-300 dark:text-gray-600">|</span>
                <a
                  href="https://wa.me/917226030701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#25D366]/15 hover:bg-[#25D366] text-emerald-700 dark:text-emerald-300 hover:text-white font-bold transition-all"
                >
                  <MessageCircle size={13} /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 dark:text-white mb-0.5">Email / ઇમેઇલ</p>
              <a
                href="mailto:info@hytechonlinehub.in"
                className="font-bold text-gray-700 dark:text-gray-200 hover:text-[#F96400] underline underline-offset-2 break-all"
              >
                info@hytechonlinehub.in
              </a>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
            <div className="w-9 h-9 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <p className="font-extrabold text-gray-900 dark:text-white mb-0.5">Center Timings</p>
              <p className="text-gray-600 dark:text-gray-300">
                Mon - Sat: 9:00 AM – 8:00 PM (Sunday Open for Appointments)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Required Footer Message */}
      <div className="text-center py-2 px-4 rounded-xl bg-orange-50/60 dark:bg-orange-950/30 border border-orange-200/60 dark:border-orange-800/40">
        <p className="text-xs sm:text-sm font-bold text-[#F96400] dark:text-orange-300">
          Thank you for visiting HY-Tech Online Hub. We look forward to assisting you!
        </p>
      </div>

      {/* Direct Interactive Call To Actions */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/dashboard"
          onClick={onClose}
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#F96400] hover:bg-[#e05a00] text-white text-xs sm:text-sm font-black inline-flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          <span>Track on Dashboard</span>
          <ArrowRight size={15} />
        </Link>

        <a
          href={`https://wa.me/917226030701?text=${encodeURIComponent(
            `Hello HY-Tech Hub, I just submitted an application (Ref: ${refId || 'Direct'}). Name: ${applicantName || 'Applicant'}. Please assist me.`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-black inline-flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          <MessageCircle size={16} /> WhatsApp Update
        </a>

        <a
          href="tel:+917226030701"
          className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gray-900 hover:bg-black text-white text-xs sm:text-sm font-bold inline-flex items-center justify-center gap-2 transition-all"
        >
          <Phone size={15} /> Call Desk
        </a>

        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="w-full sm:w-auto px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            Apply Another
          </button>
        )}

        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
          >
            Close / પૂર્ણ
          </button>
        )}
      </div>
    </motion.div>
  );
}
