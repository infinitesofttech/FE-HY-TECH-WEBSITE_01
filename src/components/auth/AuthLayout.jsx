import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Sparkles,
  QrCode,
  Wallet,
  CheckCircle2,
  ArrowRight,
  Lock,
  Smartphone,
  Award
} from 'lucide-react';

export default function AuthLayout({
  title,
  subtitle,
  mode = 'login',
  children,
  footerText,
  footerLinkText,
  footerLinkTo,
  onSocialLogin
}) {
  // 3D Parallax & Anti-Gravity Mouse Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Parallax rotations & offsets for 3D elements
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const floatCard1X = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const floatCard1Y = useTransform(smoothY, [-0.5, 0.5], [-14, 14]);
  const floatCard2X = useTransform(smoothX, [-0.5, 0.5], [16, -16]);
  const floatCard2Y = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const floatCard3X = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const floatCard3Y = useTransform(smoothY, [-0.5, 0.5], [15, -15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#F4F8FB] relative overflow-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-blue-200/40 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-200/40 rounded-full blur-[140px] pointer-events-none"></div>

      {/* Main Container Card */}
      <div className="w-full max-w-5xl bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl shadow-blue-900/5 border border-gray-100 overflow-hidden relative z-10 grid grid-cols-1 lg:grid-cols-12">
        
        {/* ── LEFT PANEL: Form Section (as in reference image) ── */}
        <div className="lg:col-span-6 p-8 sm:p-12 md:p-14 flex flex-col justify-between z-10 bg-white">
          <div>
            {/* Logo Header - Centered */}
            <div className="mb-6 flex justify-center">
              <Link to="/" className="inline-block group">
                <img
                  src="/hy-tech-logo.png"
                  alt="HY-Tech Online Hub"
                  className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Subtitle & Main Title */}
            <p className="text-xs sm:text-sm font-semibold text-gray-500 mb-1 tracking-tight">
              {subtitle || 'Welcome back !!!'}
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#171717] tracking-tight mb-8">
              {title}
            </h1>

            {/* Form Slot */}
            <div className="space-y-4">
              {children}
            </div>
          </div>

          {/* Social / Alternative Login & Footer */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="text-center mb-5 relative">
              <span className="text-[12px] font-semibold text-gray-400 bg-white px-3 relative z-10">
                or continue with
              </span>
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-gray-100"></div>
            </div>

            {/* Social Auth Buttons */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {/* Google Button */}
              <button
                type="button"
                onClick={() => onSocialLogin && onSocialLogin('Google')}
                className="w-20 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                title="Continue with Google"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </button>

              {/* GitHub Button */}
              <button
                type="button"
                onClick={() => onSocialLogin && onSocialLogin('GitHub')}
                className="w-20 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                title="Continue with GitHub"
              >
                <svg className="w-5 h-5 text-[#24292F] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </button>

              {/* WhatsApp / Phone OTP Button */}
              <button
                type="button"
                onClick={() => onSocialLogin && onSocialLogin('WhatsApp')}
                className="w-20 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 flex items-center justify-center transition-all shadow-xs group cursor-pointer"
                title="Instant WhatsApp OTP"
              >
                <svg className="w-5 h-5 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                </svg>
              </button>
            </div>

            {/* Footer Navigation Link */}
            {footerText && footerLinkText && footerLinkTo && (
              <p className="text-center text-xs text-gray-500 font-medium">
                {footerText}{' '}
                <Link
                  to={footerLinkTo}
                  className="font-bold text-[#F96400] hover:text-[#E05A00] hover:underline transition-colors"
                >
                  {footerLinkText}
                </Link>
              </p>
            )}
          </div>
        </div>

        {/* ── RIGHT PANEL: Interactive 3D Anti-Gravity Portal Scene ── */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="lg:col-span-6 relative bg-gradient-to-br from-[#EAF3FA] via-[#DCEEFB] to-[#D5E8F7] p-8 sm:p-12 flex flex-col items-center justify-center overflow-hidden min-h-[480px] lg:min-h-[640px]"
        >
          {/* Decorative Curved Organic Backing (just like reference image) */}
          <div className="absolute inset-0 bg-[#CDE6F8]/60 rounded-l-[60px] pointer-events-none"></div>

          {/* Floating Anti-Gravity Particles / Geometric Orbs */}
          <div className="absolute top-10 right-12 w-20 h-20 bg-white/40 rounded-full blur-xl pointer-events-none"></div>
          <div className="absolute bottom-12 left-10 w-28 h-28 bg-[#F96400]/10 rounded-full blur-2xl pointer-events-none"></div>

          {/* ── 3D Interactive Parallax Scene ── */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative z-10 w-full max-w-[420px] flex flex-col items-center justify-center"
          >
            {/* 3D Character Illustration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full flex justify-center"
            >
              <img
                src="/images/auth-3d-character.png"
                alt="HY-Tech 3D Character"
                className="w-72 sm:w-84 md:w-96 h-auto object-contain drop-shadow-2xl select-none pointer-events-none"
              />
            </motion.div>

            {/* ── Anti-Gravity Floating Card 1: Family Pass ── */}
            <motion.div
              style={{ x: floatCard1X, y: floatCard1Y }}
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:left-0 bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-blue-900/10 flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#F96400] to-orange-400 text-white flex items-center justify-center font-black shadow-md">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Smart Family ID</span>
                <span className="text-xs sm:text-sm font-black text-[#171717] block">#HYT-FAM-8821</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping ml-1"></span>
            </motion.div>

            {/* ── Anti-Gravity Floating Card 2: Shared Rewards ── */}
            <motion.div
              style={{ x: floatCard2X, y: floatCard2Y }}
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -right-2 sm:right-2 bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl p-3 sm:p-3.5 shadow-xl shadow-blue-900/10 flex items-center gap-3 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center font-black shadow-md">
                <Wallet size={19} />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Reward Wallet</span>
                <span className="text-xs sm:text-sm font-black text-emerald-600 block">₹1,250 Coins</span>
              </div>
            </motion.div>

            {/* ── Anti-Gravity Floating Badge 3: 256-Bit Encryption ── */}
            <motion.div
              style={{ x: floatCard3X, y: floatCard3Y }}
              animate={{ y: [-4, 6, -4] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-4 sm:-right-6 bg-white/90 backdrop-blur-md border border-white/70 rounded-full px-3 py-1.5 shadow-lg flex items-center gap-1.5 text-[11px] font-extrabold text-[#171717]"
            >
              <Lock size={12} className="text-[#F96400]" />
              <span>256-Bit Vault</span>
            </motion.div>

          </motion.div>

          {/* Bottom Trust Tag */}
          <div className="mt-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white/60 backdrop-blur-md text-[#171717] border border-white/80 shadow-xs">
              <CheckCircle2 size={14} className="text-[#F96400]" /> Dharampur's Premier Citizen Service Portal
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
