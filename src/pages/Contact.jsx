import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, AlertCircle, Loader2, ExternalLink, CheckCircle2 } from 'lucide-react';
import ApplyConfirmation from '../components/ApplyConfirmation';
import { saveSubmission } from '../utils/submissionUtils';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: 'PAN Card / Aadhaar',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submissionRecord, setSubmissionRecord] = useState(null);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    const cleanMobile = formData.mobile.trim().replace(/\D/g, '');
    if (!cleanMobile) {
      newErrors.mobile = 'Mobile number is required';
    } else if (cleanMobile.length !== 10) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your query';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const record = await saveSubmission('inquiry', {
        name: formData.name,
        mobile: formData.mobile,
        service: formData.service,
        message: formData.message,
      });

      setSubmissionRecord(record);
    } catch (err) {
      console.error('Contact form submission error:', err);
      setSubmitError(err.message || 'Unable to submit your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen text-[#171717] pb-20 w-full overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* Header Banner */}
      <div className="bg-white py-14 text-center border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <span className="btn-3d-circle inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400] border border-[#F96400]/20 shadow-xs">
            <MapPin size={13} /> Dharampur, Gujarat
          </span>
          <motion.div
            className="perspective-1000 cursor-default"
            whileHover={{ scale: 1.01, rotateX: 2, rotateY: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h1 className="text-3xl md:text-5xl font-black text-[#000000] tracking-tight mb-3 text-3d-modern">
              Contact & Visit Our Center
            </h1>
          </motion.div>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Have questions about document requirements, government schemes, or computer courses? Reach out to us or visit in person.
          </p>
        </div>
      </div>

      {/* ── Real Office Showcase Banner ─────────────── */}
      <section className="pt-8 pb-2">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl group bg-black"
          >
            <div className="relative h-64 sm:h-80 md:h-[440px] w-full overflow-hidden">
              <img
                src="/images/hytech-office-reception.jpg"
                alt="HY-Tech Computer Education & Online Hub Dharampur Office Reception & Service Counter"
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            </div>

            {/* Floating Real-Office Badge & Location Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold bg-[#F96400] text-white border border-orange-400/30 flex items-center gap-1.5 shadow-sm !text-white"
                  style={{ color: '#ffffff' }}
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Live Walk-in Service Counter
                </span>
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center gap-1.5 !text-white"
                  style={{ color: '#ffffff' }}
                >
                  <MapPin size={12} /> College Road, Dharampur
                </span>
                <span 
                  className="px-3 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5"
                  style={{ color: '#34d399' }}
                >
                  <Clock size={12} /> Mon – Sat: 9:00 AM – 7:00 PM
                </span>
              </div>

              <h2
                className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-tight !text-white text-white drop-shadow-md"
                style={{ color: '#ffffff' }}
              >
                HY-Tech Office Reception & Facilitation Desk
              </h2>

              <p
                className="text-xs sm:text-sm !text-white text-white/95 mt-1.5 max-w-2xl font-gujarati leading-relaxed drop-shadow-sm"
                style={{ color: '#ffffff' }}
              >
                આપનો વિશ્વાસ, અમારી જવાબદારી • રૂબરૂ મુલાકાત લઈ તમારા ઓનલાઈન ફોર્મ, સરકારી યોજના, પાન કાર્ડ તથા કમ્પ્યુટર કોર્સનું ત્વરિત માર્ગદર્શન મેળવો.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* Left Column: Direct Contact Details & Timings */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-black text-[#000000] mb-6">
              Get in Touch Directly
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#FFF5EE] text-[#F96400] flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#000000] mb-1">Center Address</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    College Road,Kanurbarda,<br />
                    Old Jakatnaka, Dharampur -396050
                  </p>
                  <a
                    href="https://maps.google.com/?q=College+Road,Kanurbarda,Old+Jakatnaka,Dharampur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F96400] mt-2 hover:underline"
                  >
                    <span>View on Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#FFF5EE] text-[#F96400] flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#000000] mb-1">Phone & WhatsApp</h3>
                  <p className="text-xs text-gray-600 mb-1">
                    Call: <a href="tel:+917226030701" className="font-bold text-[#171717] hover:text-[#F96400]">+91 72260 30701</a>
                  </p>
                  <a
                    href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20have%20an%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F96400] hover:underline"
                  >
                    <MessageCircle size={13} />
                    <span>Instant WhatsApp Chat</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-gray-100 text-[#000000] flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#000000] mb-1">Email Address</h3>
                  <a href="mailto:info@hytechonlinehub.in" className="text-xs text-gray-600 hover:text-[#F96400]">
                    info@hytechonlinehub.in
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-200 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-gray-100 text-[#000000] flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#000000] mb-1">Working Hours</h3>
                  <p className="text-xs text-gray-600">Monday – Saturday: 9:00 AM – 7:00 PM</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">Sunday: Closed</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Interactive Consultation & WhatsApp Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 shadow-sm">
          {submissionRecord ? (
            <ApplyConfirmation
              submission={submissionRecord}
              serviceTitle={formData.service}
              onReset={() => {
                setSubmissionRecord(null);
                setFormData({ name: '', mobile: '', service: 'PAN Card Application', message: '' });
                setErrors({});
                setSubmitError('');
              }}
            />
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#000000]">Send an Inquiry / સંપર્ક કરો</h2>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your details below. You will receive an immediate confirmation and direct callback from our center staff.
                </p>
              </div>

              {submitError && (
                <div className="mb-5 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle size={18} className="shrink-0 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-bold">Submission Failed</p>
                    <p>{submitError}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#171717] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="e.g. Ramesh Patel"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-black'
                    } text-sm focus:outline-none transition-all text-[#171717]`}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="mobile" className="block text-xs font-bold text-[#171717] mb-1.5">
                      Mobile Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400">
                        +91
                      </span>
                      <input
                        type="tel"
                        id="mobile"
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
                          errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-black'
                        } text-sm focus:outline-none transition-all text-[#171717]`}
                      />
                    </div>
                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-[#171717] mb-1.5">
                      Service Category
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-black text-sm focus:outline-none bg-white text-[#171717]"
                    >
                      <option value="PAN Card Application">PAN Card (New / Correction)</option>
                      <option value="Aadhaar Card Update">Aadhaar Card Update</option>
                      <option value="Passport Assistance">Passport Application</option>
                      <option value="GCAS College Admission">GCAS / College Admission</option>
                      <option value="Scholarship Form">Digital Gujarat Scholarship</option>
                      <option value="CCC / Tally Computer Course">CCC / Tally Computer Course</option>
                      <option value="PVC Card / Printing">PVC Smart Card / Printing</option>
                      <option value="Other Service">Other Citizen Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#171717] mb-1.5">
                    Your Question / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Describe what help you need or ask about required documents..."
                    rows="4"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-black'
                    } text-sm focus:outline-none transition-all text-[#171717] resize-none`}
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.97, y: 1 } : {}}
                  className="btn-3d-circle w-full py-3.5 rounded-full text-white font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] disabled:bg-orange-300 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 border border-orange-400/40 cursor-pointer transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Submitting Your Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <MessageCircle size={17} />
                      <span>Submit Inquiry / સંપર્ક વિગત મોકલો</span>
                    </>
                  )}
                </motion.button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
