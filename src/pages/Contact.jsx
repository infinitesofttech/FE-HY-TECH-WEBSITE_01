import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: 'PAN Card / Aadhaar',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[0-9]{10}$/.test(formData.mobile.trim().replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.message.trim()) newErrors.message = 'Please describe your query';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Construct prefilled WhatsApp link for direct forwarding
      const text = `Hello HY-Tech,\nName: ${formData.name}\nMobile: ${formData.mobile}\nService: ${formData.service}\nQuery: ${formData.message}`;
      const waUrl = `https://wa.me/917226030701?text=${encodeURIComponent(text)}`;

      // Open WhatsApp in new tab after a brief pause so user sees confirmation
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 600);
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

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">

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
        <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-10 border border-gray-200 shadow-sm">
          {isSubmitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#FFF5EE] text-[#F96400]">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-extrabold text-[#000000]">Inquiry Prepared!</h3>
              <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. WhatsApp is opening with your inquiry details. Our staff will respond to you promptly.
              </p>
              <div className="pt-4 flex gap-3">
                <a
                  href={`https://wa.me/917226030701?text=${encodeURIComponent(
                    `Hello HY-Tech,\nName: ${formData.name}\nMobile: ${formData.mobile}\nService: ${formData.service}\nQuery: ${formData.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#F96400] text-white text-xs font-bold hover:bg-[#E05A00]"
                >
                  Open WhatsApp Again
                </a>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', mobile: '', service: 'PAN Card / Aadhaar', message: '' });
                  }}
                  className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold hover:bg-gray-200"
                >
                  Send Another
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#000000]">Send an Inquiry</h2>
                <p className="text-xs text-gray-500 mt-1">
                  Fill in your details below. You can also send the query directly to our WhatsApp support.
                </p>
              </div>

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
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.mobile ? 'border-red-500 bg-red-50/20' : 'border-gray-200 focus:border-black'
                      } text-sm focus:outline-none transition-all text-[#171717]`}
                    />
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97, y: 1 }}
                  className="btn-3d-circle w-full py-3.5 rounded-full text-white font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] flex items-center justify-center gap-2 shadow-md shadow-orange-500/25 border border-orange-400/40 cursor-pointer"
                >
                  <MessageCircle size={17} /> Send via WhatsApp & Submit
                </motion.button>
              </form>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
