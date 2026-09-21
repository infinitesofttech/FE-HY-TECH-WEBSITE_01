import React from 'react';
import { MapPin, Phone, MessageCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  return (
    <section className="w-full py-20 bg-[#000000] text-white relative overflow-hidden">
      {/* Subtle brand orange glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#F96400]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white/10 text-[#F96400] border border-white/10">
          <MapPin size={13} /> Visit Our Dharampur Center
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-tight text-white leading-tight">
          Have an Application to File or a Document to Update?
        </h2>

        <p className="text-sm md:text-base text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Walk into our center at College Road, Dharampur for in-person assistance, or start your inquiry online via WhatsApp today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <a
            href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20need%20assistance%20with%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] text-white transition-all shadow-lg shadow-orange-500/20"
          >
            <MessageCircle size={17} /> Message on WhatsApp
          </a>

          <a
            href="tel:+917226030701"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all"
          >
            <Phone size={16} /> Call +91 72260 30701
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-transparent hover:bg-white/5 text-gray-300 hover:text-white border border-white/10 transition-colors"
          >
            Center Address & Hours
          </Link>
        </div>

        {/* Quick details strip */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#F96400]" />
            College Road,Kanurbarda,Old Jakatnaka, Dharampur -396050
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} className="text-[#F96400]" />
            Mon – Sat: 9:00 AM – 7:00 PM
          </span>
        </div>
      </div>
    </section>
  );
}
