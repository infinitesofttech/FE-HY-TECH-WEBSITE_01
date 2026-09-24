import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  User,
  QrCode,
  Wallet,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calculator,
  Lock,
  HeartHandshake,
  FileCheck2,
  HelpCircle,
  ChevronDown,
  Gift,
  PhoneCall,
  MessageCircle,
  Award,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function SmartMemberPage() {
  const { language } = useLanguage();
  const [selectedProfile, setSelectedProfile] = useState('student');
  const [openFaq, setOpenFaq] = useState(0);

  // Individual Annual Savings Estimates by Profile
  const profileSavings = {
    student: {
      labelEn: 'Student / Scholar',
      labelGu: 'વિદ્યાર્થી',
      xeroxSaved: 45,
      formDiscounts: 250,
      rewardCoins: 200,
      totalRupees: 45 * 5 + 250 + 200
    },
    jobSeeker: {
      labelEn: 'Job Aspirant',
      labelGu: 'નોકરી વાંછુક',
      xeroxSaved: 60,
      formDiscounts: 350,
      rewardCoins: 300,
      totalRupees: 60 * 5 + 350 + 300
    },
    citizen: {
      labelEn: 'General Citizen / Business',
      labelGu: 'સામાન્ય નાગરિક / વેપારી',
      xeroxSaved: 35,
      formDiscounts: 200,
      rewardCoins: 150,
      totalRupees: 35 * 5 + 200 + 150
    }
  };

  const currentSavings = profileSavings[selectedProfile];

  const profileFeatures = [
    {
      id: 'student',
      titleEn: 'College & School Students',
      titleGu: 'વિદ્યાર્થીઓ અને યુવાનો',
      roleEn: 'Admissions & Digital Desk',
      roleGu: 'એડમિશન અને સ્કોલરશિપ સહાય',
      descEn: 'One-click auto-fill for 10th/12th marksheets, LC, GCAS college admissions, and Digital Gujarat scholarships.',
      descGu: 'GCAS કોલેજ એડમિશન, ડિજિટલ ગુજરાત શિષ્યવૃત્તિ અને પરીક્ષા ફોર્મ માટે માર્કશીટ તથા દસ્તાવેજો સરળતાથી સબમિટ થાય છે.',
      icon: GraduationCap,
      badge: 'Student',
      badgeColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      id: 'jobSeeker',
      titleEn: 'Job Aspirants & Candidates',
      titleGu: 'સરકારી અને ખાનગી નોકરી ઉમેદવારો',
      roleEn: 'Recruitment & Domicile Hub',
      roleGu: 'ઓજસ અને ભરતી સહાય',
      descEn: 'Quick document retrieval for OJAS, GPSC, Police, and Railway exams without carrying physical photocopies.',
      descGu: 'ઓજસ, જીપીએસસી અને પોલીસ ભરતી જેવી સ્પર્ધાત્મક પરીક્ષાઓ માટે વારંવાર દસ્તાવેજો અપલોડ કરવાની ઝંઝટમાંથી મુક્તિ.',
      icon: Briefcase,
      badge: 'Career',
      badgeColor: 'bg-purple-100 text-purple-700'
    },
    {
      id: 'welfare',
      titleEn: 'Welfare & Government Schemes',
      titleGu: 'સરકારી યોજનાઓ અને ઓળખ',
      roleEn: 'Citizen Services Beneficiary',
      roleGu: 'નાગરિક સેવાઓ અને પેન્શન',
      descEn: 'Seamless processing for Ayushman Golden Card, PAN updates, Domicile/Caste certificates, and pension applications.',
      descGu: 'આયુષ્માન કાર્ડ, પાન કાર્ડ, આવકનો દાખલો, જાતિ પ્રમાણપત્ર અને પેન્શન યોજનાઓ માટે સીધી સહાય.',
      icon: HeartHandshake,
      badge: 'Citizen',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      id: 'rewards',
      titleEn: 'Individual Reward Account',
      titleGu: 'વ્યક્તિગત રિવોર્ડ્સ અને ડિસ્કાઉન્ટ',
      roleEn: 'Personal Digital Wallet',
      roleGu: 'પર્સનલ કેશબેક વૉલેટ',
      descEn: 'Earn reward coins on every xerox, printout, or form filled. Redeem instantly as cash discounts on subsequent services.',
      descGu: 'દરેક પ્રિન્ટ, ફોર્મ કે ઓનલાઇન અરજી પર કોઈન્સ મેળવો અને આગળની સેવાઓમાં સીધું ડિસ્કાઉન્ટ મેળવો.',
      icon: Award,
      badge: 'Rewards',
      badgeColor: 'bg-orange-100 text-[#F96400]'
    }
  ];

  const faqs = [
    {
      qEn: 'What is HY-Tech Smart Member ID?',
      qGu: 'HY-Tech સ્માર્ટ મેમ્બર આઈડી શું છે?',
      aEn: 'It is a unique individual digital identity code (#HYT-MEM-XXXX) issued by HY-Tech Online Hub. It securely stores your personal documents in an encrypted vault and links them to your personal cashback wallet.',
      aGu: 'આ એક અનન્ય વ્યક્તિગત ડિજિટલ કોડ (#HYT-MEM-XXXX) છે જે તમારા દસ્તાવેજોને સુરક્ષિત વૉલ્ટમાં સાચવે છે અને તમને વ્યક્તિગત કેશબેક રિવોર્ડ્સ આપે છે.'
    },
    {
      qEn: 'Is registration free for Dharampur residents?',
      qGu: 'શું ધરપમુરના નાગરિકો માટે રજીસ્ટ્રેશન મફત છે?',
      aEn: 'Yes! Registration and Digital Member ID generation are 100% free. You can register online or visit our Dharampur center.',
      aGu: 'હા! રજીસ્ટ્રેશન અને સ્માર્ટ મેમ્બર આઈડી બનાવવું તદ્દન મફત છે. તમે ઓનલાઈન અથવા અમારા કેન્દ્ર પર આવીને કરાવી શકો છો.'
    },
    {
      qEn: 'How does the Individual Reward Wallet work?',
      qGu: 'વ્યક્તિગત રિવોર્ડ વોલેટ કેવી રીતે કામ કરે છે?',
      aEn: 'Every time you avail a service (xerox, college form, PAN update, or certification), reward coins are credited to your personal wallet for future discounts.',
      aGu: 'જ્યારે પણ તમે ઝેરોક્ષ, ફોર્મ કે અન્ય ઓનલાઇન સેવા લેશો ત્યારે તમારા વોલેટમાં રિવોર્ડ પોઈન્ટ્સ જમા થશે, જેને તમે ભવિષ્યની સેવાઓમાં વાપરી શકો છો.'
    },
    {
      qEn: 'Are my personal documents and ID details safe?',
      qGu: 'શું મારા અંગત દસ્તાવેજો સુરક્ષિત છે?',
      aEn: 'Absolutely. We follow strict 256-bit encryption and data privacy protocols. Your records are used exclusively to process official applications with your explicit consent.',
      aGu: 'ચોક્કસપણે. તમારા દસ્તાવેજો ૨૫૬-બીટ સુરક્ષિત એન્ક્રિપ્શન સાથે રહે છે અને માત્ર તમારી મંજૂરીથી જ સત્તાવાર ફોર્મ ભરવા માટે વપરાય છે.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] w-full overflow-x-hidden" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Page Hero Banner ───────────────────────────── */}
      <section className="relative w-full bg-[#111111] text-white pt-16 pb-20 overflow-hidden border-b border-gray-800">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#F96400] rounded-full blur-[180px] opacity-15 pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-purple-600 rounded-full blur-[160px] opacity-10 pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8 uppercase tracking-wider">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#F96400]">HY-Tech Smart Member</span>
          </div>

          <div className="max-w-4xl">
            <span className="btn-3d-circle inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white/10 text-[#F96400] border border-white/10 shadow-lg">
              <Sparkles size={14} className="text-[#F96400] animate-pulse" />
              <span>Official Citizen Digital Card</span>
            </span>

            <motion.div
              className="perspective-1000 cursor-default"
              whileHover={{ scale: 1.01, rotateX: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6 text-3d-modern">
                HY-Tech Smart Member{' '}
                <span className="text-3d-gradient">ID Card</span>
              </h1>
            </motion.div>

            <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-normal mb-8 max-w-3xl">
              {language === 'en'
                ? 'Your individual digital identity for hassle-free public and educational services in Dharampur. One Member ID, zero repeated physical photocopies, and direct cashback rewards on every service.'
                : 'ધરમપુરના નાગરિકો માટે તમારું વ્યક્તિગત ડિજિટલ સ્માર્ટ આઈડી. એક જ આઈડીથી તમામ ઓનલાઈન ફોર્મ અને ઝેરોક્ષની ઝંઝટમાંથી મુક્તિ સાથે દરેક કામ પર કેશબેક રિવોર્ડ્સ.'}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> 1 Dedicated Smart Member ID
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> 60+ Online & Printing Services
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> Personal Reward Wallet
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> 100% Free Registration
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Interactive Individual Savings Calculator ───────────────────── */}
      <section className="w-full py-20 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="btn-3d-circle inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-orange-50 text-[#F96400] border border-orange-200">
              <Calculator size={14} /> {language === 'en' ? 'Personal Value Estimator' : 'વ્યક્તિગત બચત કેલ્ક્યુલેટર'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-4 text-3d-modern">
              {language === 'en'
                ? 'Calculate Your Annual Personal Savings'
                : 'તમારી વાર્ષિક વ્યક્તિગત બચત જાણો'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {language === 'en'
                ? 'Choose your profile type to see how paperless auto-fill and direct member coins save you time and money.'
                : 'તમારી પ્રોફાઇલ પસંદ કરો અને જુઓ કે વ્યક્તિગત સ્માર્ટ આઈડીથી વર્ષે કેટલી બચત થાય છે.'}
            </p>
          </div>

          <div className="bg-[#171717] text-white rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden border border-gray-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F96400] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Selector */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Step 1: Select Your Profile</span>
                <h3 className="text-2xl font-bold text-white">What best describes your current need?</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {Object.keys(profileSavings).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedProfile(key)}
                      className={`py-3.5 px-4 rounded-2xl font-bold text-center text-xs sm:text-sm transition-all border ${
                        selectedProfile === key
                          ? 'btn-3d-circle-active border-transparent'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {language === 'en' ? profileSavings[key].labelEn : profileSavings[key].labelGu}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#F96400]" />
                    <span>Single-user dedicated document vault</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#F96400]" />
                    <span>Instant auto-fill across all portal applications</span>
                  </div>
                </div>
              </div>

              {/* Right Output Dashboard */}
              <div className="lg:col-span-7 bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F96400]">Estimated Annual Value</span>
                    <div className="text-4xl sm:text-5xl font-black text-white mt-1">
                      ₹{currentSavings.totalRupees.toLocaleString('en-IN')}{' '}
                      <span className="text-sm font-semibold text-gray-400">/ saved annually</span>
                    </div>
                  </div>
                  <Link
                    to="/signup"
                    className="btn-3d-circle inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#F96400] hover:bg-[#E05A00] text-white shadow-lg transition-all"
                  >
                    Claim Your Member ID <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400 block mb-1">Xerox Copies Saved</span>
                    <span className="text-2xl font-black text-white">{currentSavings.xeroxSaved} Sheets</span>
                    <span className="text-[11px] text-emerald-400 block mt-1">100% Digital</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400 block mb-1">Form Discounts</span>
                    <span className="text-2xl font-black text-white">₹{currentSavings.formDiscounts}</span>
                    <span className="text-[11px] text-[#F96400] block mt-1">Direct Benefits</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400 block mb-1">Reward Coins</span>
                    <span className="text-2xl font-black text-amber-300">{currentSavings.rewardCoins} Coins</span>
                    <span className="text-[11px] text-amber-200/80 block mt-1">Wallet Credit</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Supported Individual Use Cases ───────────────────── */}
      <section className="w-full py-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="btn-3d-circle inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-orange-50 text-[#F96400] border border-orange-200">
              <User size={14} /> Tailored Assistance
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-4 text-3d-modern">
              {language === 'en'
                ? 'What Can You Do With Your Smart Member ID?'
                : 'તમારા સ્માર્ટ મેમ્બર આઈડીથી શું ફાયદા થશે?'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {language === 'en'
                ? 'Designed for single citizens, students, and professionals seeking efficient government and educational processing.'
                : 'સરકારી, શૈક્ષણિક અને ઓનલાઈન સેવાઓ મેળવવા માટે દરેક વ્યક્તિ માટે એક સુરક્ષિત ઓળખ.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {profileFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-7 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F96400] flex items-center justify-center font-bold">
                        <Icon size={22} />
                      </div>
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-[#171717] text-lg mb-1">
                      {language === 'en' ? item.titleEn : item.titleGu}
                    </h3>
                    <p className="text-xs font-bold text-[#F96400] mb-3">
                      {language === 'en' ? item.roleEn : item.roleGu}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      {language === 'en' ? item.descEn : item.descGu}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs font-bold text-gray-800">
                    <span>Active Benefit</span>
                    <CheckCircle2 size={16} className="text-[#F96400]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Security & Privacy Guarantee ───────────────────── */}
      <section className="w-full py-16 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="bg-[#FFF5EE] border border-[#F96400]/20 rounded-3xl p-8 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#F96400] text-white flex-shrink-0 flex items-center justify-center shadow-lg shadow-orange-500/30">
                <Lock size={26} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-black text-[#171717] text-3d-modern">
                  Bank-Grade Encryption &amp; Strict Personal Privacy
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl font-medium">
                  {language === 'en'
                    ? 'All your identity documents, marksheets, and records are stored in a 256-bit encrypted digital vault. Your documents are solely processed on official portals under your explicit authorization.'
                    : 'તમારા તમામ પ્રમાણપત્રો અને અંગત વિગતો ૨૫૬-બીટ સુરક્ષિત એન્ક્રિપ્શન સાથે સાચવવામાં આવે છે અને માત્ર તમારી મંજૂરીથી જ વપરાય છે.'}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                to="/signup"
                className="btn-3d-circle inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-[#171717] hover:bg-[#F96400] text-white transition-all shadow-md"
              >
                <span>Get Your Member ID</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Frequently Asked Questions ───────────────────── */}
      <section className="w-full py-20 bg-[#FAFAFA]">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="btn-3d-circle inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-orange-50 text-[#F96400] border border-orange-200">
              <HelpCircle size={14} /> Quick Help
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-3 text-3d-modern">
              Smart Member FAQ
            </h2>
            <p className="text-gray-600 text-sm">
              Everything you need to know about setting up and using your HY-Tech Smart Member ID.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-bold text-base text-[#171717] hover:text-[#F96400] transition-colors"
                  >
                    <span>{language === 'en' ? faq.qEn : faq.qGu}</span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180 text-[#F96400]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm text-gray-600 leading-relaxed border-t border-gray-100 font-medium">
                          {language === 'en' ? faq.aEn : faq.aGu}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Final Conversion Call To Action ───────────────────── */}
      <section className="w-full py-16 bg-[#111111] text-white text-center relative overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-5 tracking-tight text-white !text-white text-3d-modern">
            Get Your HY-Tech Smart Member ID Today
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Join hundreds of citizens in Dharampur who enjoy single-click document handling and instant reward savings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signup"
              className="btn-3d-circle inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] text-white shadow-xl transition-all"
            >
              <span>Get Your Member ID Now</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20want%20to%20register%20for%20a%20Smart%20Member%20ID."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-circle inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all backdrop-blur-md"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>WhatsApp Member Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export { SmartMemberPage as SmartFamilyPage };
