import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ChevronDown, User, MessageCircle, Phone } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import PromoBar from './PromoBar';
import LanguageSwitcher from './LanguageSwitcher';
import { fetchCategories } from '../api/servicesApi';
import { useLanguage } from '../context/LanguageContext';

function ProfileMenu({ isLoggedIn, user, logout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/');
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors border border-gray-200 hover:border-black focus:outline-none bg-white"
        aria-label="User account menu"
      >
        <User size={18} className="text-[#171717]" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
          {isLoggedIn ? (
            <>
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-xs text-gray-500">Signed in as</p>
                <p className="text-sm font-bold text-[#171717] truncate">{user?.name || user?.id}</p>
              </div>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F96400]">My Dashboard</Link>
              <Link to="/family" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F96400]">My Family Documents</Link>
              <div className="border-t border-gray-100 my-1"></div>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-red-600 text-sm font-medium hover:bg-red-50">Log Out</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-orange-50 hover:text-[#F96400]">Log In</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="block px-4 py-2 text-sm font-medium text-gray-800 hover:bg-orange-50 hover:text-[#F96400]">Register Account</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoggedIn, user, logout } = useAuth();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = (obj) => obj?.[language] || obj?.['en'] || '';

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-[#F96400] transition-colors py-2 text-sm"
      : "font-medium text-[#171717] hover:text-[#F96400] transition-colors py-2 text-sm";

  const mobileNavLinkClass = ({ isActive }) =>
    isActive
      ? "block px-4 py-3 rounded-lg text-sm font-bold bg-[#FFF5EE] text-[#F96400]"
      : "block px-4 py-3 rounded-lg text-sm font-medium text-[#171717] hover:bg-gray-50 hover:text-[#F96400]";

  return (
    <>
      <PromoBar />
      <header className={`sticky top-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-gray-100'}`}>
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-[74px]">
            {/* Brand Logo */}
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="flex items-center gap-3">
                <img
                  src="/hy-tech-logo.png"
                  alt="HY-Tech Online Hub Logo"
                  className="h-12 md:h-14 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-7">
              <NavLink to="/" className={navLinkClass}>Home</NavLink>

              {/* Services Mega Dropdown */}
              <div className="relative group cursor-pointer h-full flex items-center">
                <NavLink to="/services" className={({ isActive }) => `flex items-center font-medium transition-colors py-6 text-sm ${isActive ? 'text-[#F96400] font-semibold' : 'text-[#171717] hover:text-[#F96400]'}`}>
                  Services <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180" />
                </NavLink>

                <div className="absolute top-[85%] left-1/2 -translate-x-1/2 hidden group-hover:block pt-2 w-72 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 overflow-hidden">
                    <Link
                      to="/services"
                      className="block px-4 py-2.5 rounded-xl text-xs font-bold text-[#000000] bg-gray-50 hover:bg-[#FFF5EE] hover:text-[#F96400] transition-colors"
                    >
                      Browse All 30+ Services →
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug || cat.id}
                        to={`/services?category=${cat.slug || cat.id}`}
                        className="flex items-center justify-between px-4 py-2 rounded-xl text-xs font-medium text-[#444] hover:bg-gray-50 hover:text-[#F96400] transition-colors"
                      >
                        <span>{t(cat.title)}</span>
                        <span className="text-[10px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">{cat.services?.length || cat.count}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* HY-Tech Smart Family Page */}
              <NavLink 
                to="/smart-family" 
                className={({ isActive }) => 
                  `flex items-center gap-1.5 py-2 text-sm font-semibold transition-colors ${
                    isActive ? 'text-[#F96400]' : 'text-[#171717] hover:text-[#F96400]'
                  }`
                }
              >
                <span>Smart Family</span>
                <span className="px-1.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FFF5EE] text-[#F96400] border border-[#F96400]/20 animate-pulse">
                  NEW
                </span>
              </NavLink>

              <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
              <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
            </nav>

            {/* Right Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <Search size={15} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search PAN, Aadhaar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-3 py-2 border border-gray-200 bg-[#FAFAFA] rounded-full text-xs focus:outline-none focus:border-[#000000] focus:bg-white w-48 transition-all text-[#171717] placeholder-gray-400"
                />
              </form>

              {/* Language Switcher */}
              <LanguageSwitcher />

              {/* Primary Call / WhatsApp Action Button */}
              <a
                href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20need%20assistance%20with%20online%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F96400] hover:bg-[#E05A00] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-all shadow-sm hover:shadow"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Help</span>
              </a>

              {/* Profile Menu */}
              <ProfileMenu isLoggedIn={isLoggedIn} user={user} logout={logout} />
            </div>

            {/* Mobile Actions & Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />
              <a
                href="https://wa.me/917226030701"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#FFF5EE] text-[#F96400] flex items-center justify-center border border-[#F96400]/20"
                aria-label="WhatsApp Quick Link"
              >
                <MessageCircle size={18} />
              </a>
              <ProfileMenu isLoggedIn={isLoggedIn} user={user} logout={logout} />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-[#171717] hover:bg-gray-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3 shadow-lg">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative mb-3">
              <Search size={16} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search services (e.g. Aadhaar, PAN)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black bg-gray-50 text-[#171717]"
              />
            </form>

            <NavLink to="/" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Home</NavLink>
            <NavLink to="/smart-family" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>
              <div className="flex items-center justify-between">
                <span>HY-Tech Smart Family</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F96400] text-white">NEW</span>
              </div>
            </NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>All Services (30+)</NavLink>
            <div className="pl-4 space-y-1 border-l-2 border-orange-100 my-1">
              {categories.map((cat) => (
                <Link
                  key={cat.slug || cat.id}
                  to={`/services?category=${cat.slug || cat.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-1.5 text-xs text-gray-600 hover:text-[#F96400]"
                >
                  • {t(cat.title)}
                </Link>
              ))}
            </div>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>About Our Center</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)} className={mobileNavLinkClass}>Contact</NavLink>

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20have%20an%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#F96400] text-white rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp Inquiry
              </a>
              <a
                href="tel:+917226030701"
                className="w-full py-2.5 bg-gray-100 text-[#171717] rounded-xl text-center font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone size={15} /> Call: +91 72260 30701
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
