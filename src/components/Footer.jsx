import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { name: 'PAN Card New & Correction', path: '/services/online' },
  { name: 'Aadhaar Biometric & Mobile Link', path: '/services/online' },
  { name: 'Passport Application Assistance', path: '/services/online' },
  { name: 'GCAS College Registration', path: '/services/education' },
  { name: 'Scholarship & Exam Forms', path: '/services/education' },
  { name: 'Government Job Applications', path: '/services/jobs' },
  { name: 'CCC & Tally Computer Training', path: '/services/courses' },
  { name: 'PVC Smart Card & Xerox', path: '/services/printing' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'All Services (30+)', path: '/services' },
  { name: 'About HY-Tech Hub', path: '/about' },
  { name: 'Contact & Location', path: '/contact' },
  { name: 'Client Login', path: '/login' },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">

          {/* Col 1 — Brand info & WhatsApp CTA */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="bg-white px-3 py-1.5 rounded-lg inline-block">
                <img
                  src="/hy-tech-logo.png"
                  alt="HY-Tech Online Hub"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              HY-Tech Online Hub & Computer Education is Dharampur's premier center for citizen document services, university admissions, and practical computer skills.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F96400] hover:bg-[#E05A00] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all"
              >
                <MessageCircle size={15} />
                <span>Instant WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Services List */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F96400] pl-2.5">
              Popular Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs text-gray-400 hover:text-[#F96400] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-xs text-[#F96400]">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links & Timing */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F96400] pl-2.5">
              Quick Links & Hours
            </h4>
            <ul className="space-y-2.5 mb-6">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
              <p className="text-xs font-semibold text-white flex items-center gap-1.5 mb-1">
                <Clock size={13} className="text-[#F96400]" /> Working Hours
              </p>
              <p className="text-xs text-gray-400">Monday – Saturday: 9:00 AM – 7:00 PM</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Sunday: Closed</p>
            </div>
          </div>

          {/* Col 4 — Physical Center Address */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#F96400] pl-2.5">
              Visit Our Center
            </h4>
            <ul className="space-y-3.5 mb-4 text-xs">
              <li className="flex items-start gap-2.5 text-gray-400">
                <MapPin size={16} className="text-[#F96400] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  College Road,Kanurbarda,Old Jakatnaka, Dharampur -396050
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <Phone size={15} className="text-[#F96400] flex-shrink-0" />
                <a href="tel:+917226030701" className="hover:text-white transition-colors">
                  +91 72260 30701
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-400">
                <Mail size={15} className="text-[#F96400] flex-shrink-0" />
                <a href="mailto:info@hytechonlinehub.in" className="hover:text-white transition-colors">
                  info@hytechonlinehub.in
                </a>
              </li>
            </ul>

            <a
              href="https://maps.google.com/?q=College+Road,Kanurbarda,Old+Jakatnaka,Dharampur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F96400] hover:text-[#E05A00] font-semibold transition-colors"
            >
              <span>View Location on Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} HY-Tech Computer Education & Online Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dharampur, Valsad District, Gujarat</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-gray-300">Help & Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
