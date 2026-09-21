import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPlatform() {
  const highlights = [
    "Expertise in Gujarati & English demographic data entry.",
    "Certified computer courses (CCC, MS Office, Tally Prime GST).",
    "Instant PVC Smart Card printing (Aadhaar, PAN, Ayushman).",
    "Special admission guidance for Shree Vanraj College students.",
    "Strict citizen data privacy and secure digital record handling.",
    "Transparent government fees and instant official receipts."
  ];

  return (
    <section className="w-full bg-white py-20 border-b border-gray-100 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Visual Card Showcase */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative rounded-3xl bg-[#FAFAFA] border border-gray-200 p-8 lg:p-10 shadow-sm"
            >
              {/* Top Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5EE] text-[#F96400] text-xs font-bold mb-6">
                <MapPin size={13} /> Established in Dharampur, Gujarat
              </div>

              <h3 className="text-2xl lg:text-3xl font-extrabold text-[#000000] tracking-tight mb-4">
                Bridging the Digital Divide for Dharampur & Surrounding Villages.
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Government and educational schemes in India are increasingly online. For families and students who may not have high-speed internet, printers, or technical expertise, HY-Tech Online Hub provides patient, dependable, in-person assistance right in town.
              </p>

              {/* Local stats strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200 text-center">
                <div className="p-3 bg-white rounded-xl border border-gray-100">
                  <p className="text-xl font-black text-[#000000]">30+</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Services Handled</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-100">
                  <p className="text-xl font-black text-[#F96400]">6 Days</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Walk-in Support</p>
                </div>
                <div className="p-3 bg-white rounded-xl border border-gray-100">
                  <p className="text-xl font-black text-[#000000]">100%</p>
                  <p className="text-[11px] text-gray-500 font-medium mt-0.5">Genuine Filing</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Narrative & Highlights */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-[#FFF5EE] text-[#F96400]">
                <ShieldCheck size={13} /> Your Trusted Local Partner
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight mb-5 leading-tight">
                Accurate Document Services & Practical Computer Training.
              </h2>

              <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
                Whether you need to update an Aadhaar mobile link, apply for a new PAN card, register on the GCAS portal for college admission, or enroll in a CCC certification course, our staff ensures your application is handled with precision and care.
              </p>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="mt-1 w-4 h-4 rounded-full bg-[#FFF5EE] text-[#F96400] flex items-center justify-center flex-shrink-0">
                      <Check size={11} strokeWidth={3} />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] text-white transition-all shadow-sm"
                >
                  Explore All Services <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-white hover:bg-gray-50 text-[#171717] border border-gray-200 transition-colors"
                >
                  Visit Our Center in Dharampur
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
