import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle2,
  Award,
} from 'lucide-react';
import FAQ from '../components/sections/FAQ';
import TrustLogos from '../components/sections/TrustLogos';

export default function About() {
  const commitments = [
    {
      title: "Data Confidentiality & Privacy",
      desc: "All citizen identity documents (Aadhaar, PAN, Bank records) are handled strictly for application submission and never retained without consent.",
    },
    {
      title: "Bilingual Accuracy (Gujarati & English)",
      desc: "Carefully verifying spellings, father's names, and dates of birth across Gujarati school LC records and English identity cards.",
    },
    {
      title: "Transparent & Fair Fees",
      desc: "Clear itemized charges for government portal fee challans, printing, and nominal facilitation assistance. No surprise charges.",
    },
    {
      title: "Certified Youth Computer Training",
      desc: "Hands-on practical classes in CCC, Tally Prime with GST, and typing to prepare local students for private jobs and government CPT exams.",
    },
  ];

  const facilities = [
    "Dedicated Computer Training Lab with individual workstations",
    "High-Definition PVC Card Thermal Embosser & Printer",
    "UIDAI & Govt Portal Compliant Biometric Fingerprint Scanners",
    "High-Speed Color Laser Xerox, Scanner & Heavy-Duty Lamination",
    "Air-conditioned citizen waiting area with drinking water",
    "Dedicated staff for Vanraj College admissions & scholarship guidance",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] w-full overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Hero Header ───────────────────────────── */}
      <section className="bg-white border-b border-gray-200 py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center">
          <span className="btn-3d-circle inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-[#FFF5EE] text-[#F96400] border border-[#F96400]/20 shadow-xs">
            <Award size={13} /> Dharampur's Trusted Digital Service Partner
          </span>
          <motion.div
            className="perspective-1000 cursor-default"
            whileHover={{ scale: 1.01, rotateX: 2, rotateY: -1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#000000] tracking-tight leading-tight mb-5 text-3d-modern">
              Empowering Dharampur with Accessible Document Services & Digital Education.
            </h1>
          </motion.div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            HY-Tech Online Hub was founded with a singular purpose: to ensure that every citizen, family, and student in Dharampur and nearby villages has reliable, patient access to modern digital services.
          </p>
        </div>
      </section>

      {/* ── Center Story & Mission ─────────────────── */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F96400] mb-2 block">
                  Our Background & Philosophy
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#000000] mb-4">
                  Why Local Assistance Matters in Digital India.
                </h2>
                <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
                  <p>
                    As government paperwork, university admissions, and citizen welfare schemes transition to online portals, small errors like mismatched surnames, missing OTPs, or incorrect document formats often lead to rejected applications and days of frustration.
                  </p>
                  <p>
                    At HY-Tech Online Hub, situated conveniently at College Road, Dharampur, our experienced team provides thorough, face-to-face assistance. We verify every record before submitting it to official state and central government portals.
                  </p>
                  <p>
                    Alongside document services, our Computer Education wing trains young boys and girls in essential computer literacy, Tally Prime with GST accounting, and speed typing, equipping them for careers in local businesses, schools, and government offices.
                  </p>
                </div>
              </div>

              {/* Center Quick Facts */}
              <div className="lg:col-span-5 bg-[#FAFAFA] rounded-2xl p-6 border border-gray-200">
                <h3 className="text-sm font-bold text-[#000000] mb-4 uppercase tracking-wider">
                  Center Fast Facts
                </h3>
                <div className="space-y-3.5 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#F96400] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#171717]">Address</p>
                      <p className="text-gray-500">College Road,Kanurbarda,Old Jakatnaka, Dharampur -396050</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#F96400] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#171717]">Operating Timings</p>
                      <p className="text-gray-500">Monday – Saturday: 9:00 AM – 7:00 PM (Sunday Closed)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={16} className="text-[#F96400] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#171717]">Contact</p>
                      <p className="text-gray-500">+91 72260 30701 • info@hytechonlinehub.in</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <a
                    href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20have%20an%20inquiry%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-[#F96400] hover:bg-[#E05A00] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle size={14} /> Connect on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Commitments ──────────────────────── */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F96400] mb-2 block">
              Our Principles
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#000000]">
              Built on Accuracy, Privacy & Trust.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((c, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200">
                <div className="w-8 h-8 rounded-lg bg-[#FFF5EE] text-[#F96400] flex items-center justify-center mb-3">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-base font-bold text-[#000000] mb-2">{c.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Infrastructure & Equipment ───────────── */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          <div className="bg-[#000000] text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F96400] mb-3 block">
                Modern Equipment & Facility
              </span>
              <h2 className="text-2xl md:text-3xl font-black mb-4">
                Equipped for Rapid, Professional Citizen Services.
              </h2>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mb-8">
                We invest in dependable, commercial-grade hardware so your PVC cards, xerox printouts, and online submissions are completed smoothly without delays.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 size={15} className="text-[#F96400] flex-shrink-0 mt-0.5" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Authorized Portals ─────────────────────── */}
      <TrustLogos />

      {/* ── Frequently Asked Questions ─────────────── */}
      <FAQ />

    </div>
  );
}
