import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function PromoBar() {
  return (
    <div className="w-full bg-[#000000] text-white py-2 px-4 border-b border-white/10 text-xs">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left: Location & Timings */}
        <div className="flex items-center flex-wrap justify-center sm:justify-start gap-4 text-white/80">
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin size={13} className="text-[#F96400]" />
            College Road,Kanurbarda,Old Jakatnaka, Dharampur -396050
          </span>
          <span className="hidden md:inline-block text-white/30">•</span>
          <span className="hidden md:flex items-center gap-1.5">
            <Clock size={13} className="text-[#F96400]" />
            Mon – Sat: 9:00 AM – 7:00 PM
          </span>
        </div>

        {/* Right: Direct Call & WhatsApp Link */}
        <div className="flex items-center gap-4 font-medium">
          <a
            href="tel:+917226030701"
            className="flex items-center gap-1.5 hover:text-[#F96400] transition-colors"
          >
            <Phone size={13} className="text-[#F96400]" />
            <span>+91 72260 30701</span>
          </a>
          <span className="text-white/30">•</span>
          <a
            href="https://wa.me/917226030701?text=Hello%20HY-Tech%20Online%20Hub,%20I%20have%20an%20inquiry%20regarding%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[#F96400] hover:text-[#E05A00] font-semibold transition-colors"
          >
            <MessageCircle size={13} />
            <span>WhatsApp Inquiry</span>
          </a>
        </div>
      </div>
    </div>
  );
}
