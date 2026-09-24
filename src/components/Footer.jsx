import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceLinks = [
  { name: 'PAN Card New & Correction', path: '/services?category=online-services' },
  { name: 'Aadhaar Biometric & Mobile Link', path: '/services?category=online-services' },
  { name: 'Passport Application Assistance', path: '/services?category=online-services' },
  { name: 'GCAS College Registration', path: '/services?category=education-services' },
  { name: 'Scholarship & Exam Forms', path: '/services?category=education-services' },
  { name: 'Government Job Applications', path: '/services?category=job-services' },
  { name: 'CCC & Tally Computer Training', path: '/services?category=computer-courses' },
  { name: 'PVC Smart Card & Xerox', path: '/services?category=printing-services' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'HY-Tech Smart Member (New)', path: '/smart-member' },
  { name: 'All Services (30+)', path: '/services' },
  { name: 'About HY-Tech Hub', path: '/about' },
  { name: 'Contact & Location', path: '/contact' },
  { name: 'Client Login', path: '/login' },
];

export default function Footer() {
  return (
    <footer className="bg-white text-[#171717] pt-16 pb-8 border-t border-gray-200 shadow-xs">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-gray-200">

          {/* Col 1 — Brand info & WhatsApp CTA */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/hy-tech-logo.png"
                alt="HY-Tech Online Hub"
                className="h-11 md:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              HY-TECH COMPUTER EDUCATION & ONLINE HUB is Dharampur's premier center for citizen document services, university admissions, and practical computer skills.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-circle inline-flex items-center gap-2 bg-[#F96400] hover:bg-[#E05A00] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-all shadow-md shadow-orange-500/20"
              >
                <MessageCircle size={15} />
                <span>Instant WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Col 2 — Services List */}
          <div>
            <h4 className="text-sm font-extrabold text-[#111111] uppercase tracking-wider mb-4 border-l-2 border-[#F96400] pl-2.5">
              Popular Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs text-gray-600 hover:text-[#F96400] font-medium transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-xs text-[#F96400] group-hover:translate-x-0.5 transition-transform">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Quick Links & Timing */}
          <div>
            <h4 className="text-sm font-extrabold text-[#111111] uppercase tracking-wider mb-4 border-l-2 border-[#F96400] pl-2.5">
              Quick Links & Hours
            </h4>
            <ul className="space-y-2.5 mb-6">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-xs text-gray-600 hover:text-[#F96400] font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200/90 shadow-2xs">
              <p className="text-xs font-bold text-[#111111] flex items-center gap-1.5 mb-1.5">
                <Clock size={14} className="text-[#F96400]" /> Working Hours
              </p>
              <p className="text-xs text-gray-600 font-medium">Monday – Saturday: 9:00 AM – 7:00 PM</p>
              <p className="text-[11px] text-gray-500 mt-1 font-semibold">Sunday: Closed</p>
            </div>
          </div>

          {/* Col 4 — Physical Center Address */}
          <div>
            <h4 className="text-sm font-extrabold text-[#111111] uppercase tracking-wider mb-4 border-l-2 border-[#F96400] pl-2.5">
              Visit Our Center
            </h4>
            <ul className="space-y-3.5 mb-4 text-xs font-medium">
              <li className="flex items-start gap-2.5 text-gray-600">
                <MapPin size={16} className="text-[#F96400] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  College Road,Kanurbarda,Old Jakatnaka, Dharampur -396050
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-gray-600">
                <Phone size={15} className="text-[#F96400] flex-shrink-0" />
                <a href="tel:+917226030701" className="hover:text-[#F96400] transition-colors">
                  +91 72260 30701
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-gray-600">
                <Mail size={15} className="text-[#F96400] flex-shrink-0" />
                <a href="mailto:info@hytechonlinehub.in" className="hover:text-[#F96400] transition-colors">
                  info@hytechonlinehub.in
                </a>
              </li>
            </ul>

            <a
              href="https://maps.google.com/?q=College+Road,Kanurbarda,Old+Jakatnaka,Dharampur"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#F96400] hover:text-[#E05A00] font-bold transition-colors"
            >
              <span>View Location on Google Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} HY-Tech Computer Education & Online Hub. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Dharampur, Valsad District, Gujarat</span>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#111111] transition-colors">Help & Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
