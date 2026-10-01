import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, FileText, AlertCircle, Loader2, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { saveSubmission } from '../utils/submissionUtils';
import ApplyConfirmation from './ApplyConfirmation';

export default function ApplyServiceModal({ isOpen, onClose, service }) {
  const { user } = useAuth();
  const serviceTitleEn = service?.title?.en || service?.rawTitle || service?.title || 'Online Government / Citizen Service';
  const serviceTitleGu = service?.title?.gu || service?.titleGujarati || '';
  const serviceCategory = service?.category?.en || service?.rawCategory || service?.category || 'General Service';

  const defaultName = user?.name && user.name !== user.id ? user.name : (user?.name || '');
  const defaultMobile = user?.id && user.id.replace(/\D/g, '').length === 10 ? user.id : '';

  const [formData, setFormData] = useState({
    name: defaultName,
    mobile: defaultMobile,
    message: '',
    serviceName: serviceTitleEn
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState('');
  const [submissionSuccess, setSubmissionSuccess] = useState(null);

  // Sync user info and prefilled service title if service prop changes or modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        serviceName: serviceTitleEn,
        name: prev.name || (user?.name && user.name !== user.id ? user.name : (user?.name || '')),
        mobile: prev.mobile || (user?.id && user.id.replace(/\D/g, '').length === 10 ? user.id : '')
      }));
    }
  }, [isOpen, serviceTitleEn, user]);

  // Reset form when modal closes or opens
  useEffect(() => {
    if (!isOpen) {
      setErrors({});
      setSubmissionError('');
      // Keep success state if user wants, or reset on re-open
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required / પૂરું નામ દાખલ કરો';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Please enter at least 3 characters for name';
    }

    const cleanMobile = formData.mobile.trim().replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobile = 'Mobile number is required / મોબાઇલ નંબર દાખલ કરો';
    } else if (cleanMobile.length !== 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please specify your requirement or query';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError('');

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const record = await saveSubmission('application', {
        userId: user?.id || null,
        name: formData.name,
        mobile: formData.mobile,
        service: formData.serviceName || serviceTitleEn,
        serviceSlug: service?.slug || '',
        category: serviceCategory,
        message: formData.message
      });

      // Show confirmation view with recorded submission
      setSubmissionSuccess(record);
    } catch (err) {
      console.error('Submission failed:', err);
      setSubmissionError(err.message || 'Submission failed. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionSuccess(null);
    setFormData({
      name: '',
      mobile: '',
      message: '',
      serviceName: serviceTitleEn
    });
    setErrors({});
    setSubmissionError('');
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[100005] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.5)] overflow-hidden z-10 border border-gray-100 dark:border-gray-800 max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 via-[#171717] to-gray-900 text-white p-5 sm:p-6 flex items-center justify-between border-b border-gray-800 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F96400]/20 text-[#F96400] flex items-center justify-center border border-[#F96400]/30">
                <Sparkles size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-black tracking-tight leading-tight">
                  {submissionSuccess ? 'Application Received' : 'Apply for Online Service'}
                </h3>
                <p className="text-xs text-gray-400 font-medium">
                  {submissionSuccess ? 'HY-Tech Education & Online Hub Dharampur' : 'હાઇ-ટેક ઓનલાઇન સેવા સહાયતા કેન્દ્ર'}
                </p>
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X size={18} />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-5 sm:p-7 overflow-y-auto flex-1">
            {submissionSuccess ? (
              <ApplyConfirmation
                submission={submissionSuccess}
                serviceTitle={serviceTitleEn}
                onReset={handleReset}
                onClose={onClose}
              />
            ) : (
              <div>
                {/* Active Service Pill Header */}
                <div className="mb-6 p-4 rounded-2xl bg-orange-50/80 dark:bg-orange-950/30 border border-orange-200/80 dark:border-orange-900/50 flex items-start justify-between gap-3">
                  <div>
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider text-[#F96400] mb-1">
                      Target Service / પસંદ કરેલી સેવા
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-gray-900 dark:text-white">
                      {serviceTitleEn}
                    </h4>
                    {serviceTitleGu && (
                      <p className="text-xs font-bold text-orange-600 dark:text-orange-400 mt-0.5 font-gujarati">
                        {serviceTitleGu}
                      </p>
                    )}
                  </div>
                  <span className="shrink-0 text-[11px] font-bold px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {serviceCategory}
                  </span>
                </div>

                {/* Submission Error Banner */}
                {submissionError && (
                  <div className="mb-5 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-xs sm:text-sm flex items-start gap-2.5">
                    <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Failed</p>
                      <p>{submissionError}</p>
                    </div>
                  </div>
                )}

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="modal_name" className="block text-xs font-extrabold text-gray-800 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
                      <User size={14} className="text-[#F96400]" /> Full Name / પૂરું નામ *
                    </label>
                    <input
                      type="text"
                      id="modal_name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      disabled={isSubmitting}
                      placeholder="e.g. Rameshchandra Patel"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white'
                      } text-sm focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label htmlFor="modal_mobile" className="block text-xs font-extrabold text-gray-800 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
                      <Phone size={14} className="text-[#F96400]" /> 10-Digit Mobile Number / મોબાઇલ નંબર *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="modal_mobile"
                        name="mobile"
                        maxLength={10}
                        value={formData.mobile}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormData({ ...formData, mobile: val });
                          if (errors.mobile) setErrors({ ...errors, mobile: '' });
                        }}
                        disabled={isSubmitting}
                        placeholder="9876543210"
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                          errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white'
                        } text-sm focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all`}
                      />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-xs mt-1 font-medium">{errors.mobile}</p>}
                  </div>

                  {/* Requirements / Query */}
                  <div>
                    <label htmlFor="modal_message" className="block text-xs font-extrabold text-gray-800 dark:text-gray-200 mb-1.5 flex items-center gap-1.5">
                      <FileText size={14} className="text-[#F96400]" /> Requirements or Query / શું સહાયતા જોઈએ છે? *
                    </label>
                    <textarea
                      id="modal_message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: '' });
                      }}
                      disabled={isSubmitting}
                      placeholder="e.g. New application, name correction, mobile number link, or document query..."
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white'
                      } text-sm focus:outline-none bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all resize-none`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                  </div>

                  {/* Submit Button with Loading State */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-white font-extrabold text-sm bg-[#F96400] hover:bg-[#E05A00] disabled:bg-orange-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 transition-all cursor-pointer active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          <span>Submitting Application...</span>
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          <span>Submit Application / અરજી સબમિટ કરો</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-gray-500 dark:text-gray-400 mt-2.5">
                      Direct verification & quick callback by Dharampur Hub Team.
                    </p>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
