import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
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
  Layers,
  Award
} from 'lucide-react';
import SmartFamilySection from '../components/sections/SmartFamilySection';
import { useLanguage } from '../context/LanguageContext';

export default function SmartFamilyPage() {
  const { language } = useLanguage();
  const [familyMembersCount, setFamilyMembersCount] = useState(4);
  const [openFaq, setOpenFaq] = useState(0);

  // Calculations for savings
  const calculateSavings = (count) => {
    const xeroxSaved = count * 24; // ~24 pages per member annually
    const formDiscounts = count * 180; // form discounts & cashbacks
    const rewardCoins = count * 125; // reward wallet credits
    const totalRupees = (xeroxSaved * 5) + formDiscounts + rewardCoins;
    return { xeroxSaved, formDiscounts, rewardCoins, totalRupees };
  };

  const currentSavings = calculateSavings(familyMembersCount);

  const familyRoles = [
    {
      titleEn: 'Head of Household (Karta)',
      titleGu: 'પરિવારના વડા (મુખી)',
      roleEn: 'Primary Wallet Administrator',
      roleGu: 'મુખ્ય વૉલેટ સંચાલક',
      descEn: 'Manages pooled family rewards, approves service applications, and gets WhatsApp update digests for all linked members.',
      descGu: 'પરિવારના રિવોર્ડ પોઈન્ટ્સનું સંચાલન કરે છે અને તમામ સભ્યોની અરજીઓનું એક જ વોટ્સએપ પર અપડેટ મેળવે છે.',
      icon: Award,
      badge: 'Admin',
      badgeColor: 'bg-orange-100 text-[#F96400]'
    },
    {
      titleEn: 'Spouse & Parents',
      titleGu: 'જીવનસાથી અને માતા-પિતા',
      roleEn: 'Welfare & Identity Beneficiary',
      roleGu: 'સરકારી યોજનાઓ અને પેન્શન લાભાર્થી',
      descEn: 'Instant access to Ayushman Bharat Golden Cards, Niradhar Pension forms, PM-Kisan e-KYC, and Aadhaar-ration linking.',
      descGu: 'આયુષ્માન ભારત કાર્ડ, વૃદ્ધ પેન્શન, પીએમ કિસાન e-KYC અને રેશનકાર્ડની સેવાઓ માટે એક ક્લિક સુવિધા.',
      icon: HeartHandshake,
      badge: 'Citizen',
      badgeColor: 'bg-blue-100 text-blue-700'
    },
    {
      titleEn: 'College & School Students',
      titleGu: 'વિદ્યાર્થીઓ અને યુવાનો',
      roleEn: 'Admissions & Career Desk',
      roleGu: 'એડમિશન અને સ્કોલરશિપ સેવાઓ',
      descEn: 'Auto-fill high school LC, 10th/12th marksheets for GCAS college admissions, digital Gujarat scholarships, and exam forms.',
      descGu: 'GCAS કોલેજ એડમિશન, ડિજિટલ ગુજરાત શિષ્યવૃત્તિ અને પરીક્ષા ફોર્મ માટે માર્કશીટ આપમેળે સબમિટ થાય છે.',
      icon: Users,
      badge: 'Student',
      badgeColor: 'bg-emerald-100 text-emerald-700'
    },
    {
      titleEn: 'Job Aspirants & Siblings',
      titleGu: 'નોકરી વાંછુક યુવાનો',
      roleEn: 'Employment & Exam Application',
      roleGu: 'સરકારી નોકરી ફોર્મ સહાય',
      descEn: 'Instant resume generation, domicile and non-creamy layer verification, and GPSC/OJAS/Police recruitment submissions.',
      descGu: 'ઓજસ, પોલીસ ભરતી, તલાટી અને રેલ્વે જેવી સરકારી પરીક્ષાઓ માટે ફોર્મ ભરવામાં સમય અને ખર્ચ બંનેની બચત.',
      icon: FileCheck2,
      badge: 'Career',
      badgeColor: 'bg-purple-100 text-purple-700'
    }
  ];

  const faqs = [
    {
      qEn: 'What is HY-Tech Smart Family ID?',
      qGu: 'HY-Tech સ્માર્ટ ફેમિલી આઈડી શું છે?',
      aEn: 'It is a unique digital household identity code (#HYT-FAM-XXXX) issued by HY-Tech Online Hub. It links all documents of your family members into one encrypted vault with a shared reward cashback wallet.',
      aGu: 'આ એક અનન્ય ડિજિટલ ફેમિલી કોડ (#HYT-FAM-XXXX) છે જે તમારા સમગ્ર પરિવારના દસ્તાવેજોને એક સુરક્ષિત વૉલ્ટમાં જોડે છે અને સંયુક્ત કેશબેક રિવોર્ડ્સ આપે છે.'
    },
    {
      qEn: 'Is registration free for Dharampur families?',
      qGu: 'શું ધરપમુરના પરિવારો માટે રજીસ્ટ્રેશન મફત છે?',
      aEn: 'Yes! Registration and Digital Family ID generation are 100% free of charge. You can register online or visit our Dharampur center.',
      aGu: 'હા! રજીસ્ટ્રેશન અને ડિજિટલ ફેમિલી આઈડી બનાવવું તદ્દન મફત છે. તમે ઓનલાઈન અથવા અમારા કેન્દ્ર પર રૂબરૂ આવીને કરાવી શકો છો.'
    },
    {
      qEn: 'How does the Shared Reward Wallet work?',
      qGu: 'સંયુક્ત ફેમિલી રિવોર્ડ વોલેટ કેવી રીતે કામ કરે છે?',
      aEn: 'Every time any linked family member avails a service (xerox, college form, PAN card, or course), reward cashback coins are credited into your joint wallet. Anyone in the family can redeem these coins for instant discounts on future services.',
      aGu: 'જ્યારે પણ પરિવારનો કોઈપણ સભ્ય ઝેરોક્ષ, ફોર્મ કે સર્વિસ લેશે ત્યારે પોઈન્ટ્સ સંયુક્ત વોલેટમાં જમા થશે. પરિવારનો કોઈપણ સભ્ય ભવિષ્યની સેવામાં આ રિવોર્ડથી સીધો ફાયદો મેળવી શકે છે.'
    },
    {
      qEn: 'Are our personal documents and Aadhaar details safe?',
      qGu: 'શું અમારા અંગત દસ્તાવેજો સુરક્ષિત છે?',
      aEn: 'Absolutely. We follow strict 256-bit encryption and data privacy protocols. Your documents are solely used to fill official portals upon your authorization, never shared with third parties.',
      aGu: 'ચોક્કસપણે. તમારા દસ્તાવેજો ૨૫૬-બીટ એન્ક્રિપ્શન સાથે સુરક્ષિત રહે છે અને માત્ર સરકારી કે શૈક્ષણિક ફોર્મ ભરવા પૂરતા જ તમારી મંજૂરીથી વપરાય છે.'
    },
    {
      qEn: 'Can I add or update family members later?',
      qGu: 'શું ભવિષ્યમાં નવા સભ્ય ઉમેરી શકાય?',
      aEn: 'Yes, you can add new family members (children, new spouse, parents) anytime from your dashboard or by sending a quick WhatsApp request to our center.',
      aGu: 'હા, તમે તમારા એકાઉન્ટમાંથી અથવા અમારા વોટ્સએપ નંબર પર મેસેજ મોકલીને કોઈપણ સમયે નવા સભ્ય ઉમેરી શકો છો.'
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
            <span className="text-[#F96400]">HY-Tech Smart Family</span>
          </div>

          <div className="max-w-4xl">
            <span className="btn-3d-circle inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-white/10 text-[#F96400] border border-white/10 shadow-lg">
              <Sparkles size={14} className="text-[#F96400] animate-pulse" />
              <span>Official Citizen Household Portal</span>
            </span>

            <motion.div
              className="perspective-1000 cursor-default"
              whileHover={{ scale: 1.01, rotateX: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight mb-6 text-3d-modern">
                HY-Tech Smart Family{' '}
                <span className="text-3d-gradient">Ecosystem</span>
              </h1>
            </motion.div>

            <p className="text-base sm:text-xl text-gray-300 leading-relaxed font-normal mb-8 max-w-3xl">
              {language === 'en'
                ? 'Welcome to the revolutionary family document and rewards platform designed for Dharampur citizens. One Family ID, Zero repeated paperwork, and pooled rewards on every single center service.'
                : 'ધરમપુરના નાગરિકો માટે તૈયાર કરાયેલ ક્રાંતિકારી ફેમિલી ડોક્યુમેન્ટ અને રિવોર્ડ્સ પ્લેટફોર્મ. એક ફેમિલી આઈડી, વારંવાર કાગળો આપવાની ઝંઝટમાંથી મુક્તિ અને સંયુક્ત પારિવારિક બચત.'}
            </p>

            {/* Quick Feature Badges */}
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> 1 Single Smart Family ID
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> 60+ Online & Printing Services
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> Shared Reward Wallet
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold text-gray-200">
                <CheckCircle2 size={16} className="text-[#F96400]" /> 100% Free Registration
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Main Smart Family Section (Hero Motive, Benefits Grid & 5-Step Process) ── */}
      <SmartFamilySection />

      {/* ── Interactive Family Savings & Coins Calculator ───────────────────── */}
      <section className="w-full py-20 bg-white border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="btn-3d-circle inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-orange-50 text-[#F96400] border border-orange-200">
              <Calculator size={14} /> {language === 'en' ? 'Smart Value Estimator' : 'પારિવારિક બચત કેલ્ક્યુલેટર'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-4 text-3d-modern">
              {language === 'en'
                ? 'How Much Does Your Family Save Annually?'
                : 'તમારો પરિવાર વાર્ષિક કેટલી બચત કરી શકે?'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {language === 'en'
                ? 'Select your household size to see how shared family rewards and paperless autofill save both time and money.'
                : 'તમારા ઘરના સભ્યોની સંખ્યા પસંદ કરો અને જુઓ કે સંયુક્ત ફેમિલી આઈડીથી કેટલી વાર્ષિક બચત થાય છે.'}
            </p>
          </div>

          <div className="bg-[#171717] text-white rounded-[32px] p-6 sm:p-10 md:p-12 shadow-2xl relative overflow-hidden border border-gray-800">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F96400] rounded-full blur-[140px] opacity-20 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Selector */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Step 1: Choose Family Members</span>
                <h3 className="text-2xl font-bold text-white">How many members in your household?</h3>
                
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[2, 4, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setFamilyMembersCount(num)}
                      className={`py-3.5 px-4 rounded-2xl font-bold text-center text-sm transition-all border ${
                        familyMembersCount === num
                          ? 'btn-3d-circle-active border-transparent'
                          : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {num} {language === 'en' ? (num === 6 ? '6+ Members' : 'Members') : 'સભ્યો'}
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-gray-300 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#F96400]" />
                    <span>Includes Father, Mother, Children &amp; Parents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#F96400]" />
                    <span>Instant document auto-fill across 60+ center services</span>
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
                      <span className="text-sm font-semibold text-gray-400">/ year saved</span>
                    </div>
                  </div>
                  <Link
                    to="/signup"
                    className="btn-3d-circle inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#F96400] hover:bg-[#E05A00] text-white shadow-lg transition-all"
                  >
                    Claim Your Family ID <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 text-center">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400 block mb-1">Xerox Copies Saved</span>
                    <span className="text-2xl font-black text-white">{currentSavings.xeroxSaved} Sheets</span>
                    <span className="text-[11px] text-emerald-400 block mt-1">100% Paperless</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400 block mb-1">Service Fee Discounts</span>
                    <span className="text-2xl font-black text-white">₹{currentSavings.formDiscounts}</span>
                    <span className="text-[11px] text-[#F96400] block mt-1">Priority Desk</span>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-xs text-gray-400 block mb-1">Reward Coins Earned</span>
                    <span className="text-2xl font-black text-amber-300">{currentSavings.rewardCoins} Coins</span>
                    <span className="text-[11px] text-amber-200/80 block mt-1">Direct Redeemable</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── Supported Family Roles Breakdown ───────────────────── */}
      <section className="w-full py-20 bg-[#FAFAFA]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="btn-3d-circle inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-orange-50 text-[#F96400] border border-orange-200">
              <Users size={14} /> Household Integration
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-4 text-3d-modern">
              {language === 'en'
                ? 'Who Can You Connect Under One Family ID?'
                : 'એક ફેમિલી આઈડીમાં કોને જોડી શકાય?'}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              {language === 'en'
                ? 'Every generation of your family receives tailored government, educational, and utility document assistance.'
                : 'તમારા પરિવારની દરેક પેઢીને જરૂરી તમામ દસ્તાવેજો અને યોજનાઓ માટે વિશેષ સહાય.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyRoles.map((role, idx) => {
              const Icon = role.icon;
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
                      <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${role.badgeColor}`}>
                        {role.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-[#171717] text-lg mb-1">
                      {language === 'en' ? role.titleEn : role.titleGu}
                    </h3>
                    <p className="text-xs font-bold text-[#F96400] mb-3">
                      {language === 'en' ? role.roleEn : role.roleGu}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      {language === 'en' ? role.descEn : role.descGu}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 mt-6 flex items-center justify-between text-xs font-bold text-gray-800">
                    <span>Verified Benefits</span>
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
                  Bank-Grade Encryption &amp; Strict Citizen Privacy
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-2xl font-medium">
                  {language === 'en'
                    ? 'All Aadhaar, PAN, School LC, and Ration card records are stored in a 256-bit encrypted digital vault. We never share or sell personal data. Documents are solely processed on official portals under your direct authorization.'
                    : 'તમારા તમામ આધાર, પાન, એલસી અને રેશનકાર્ડ સંપૂર્ણ ૨૫૬-બીટ સુરક્ષિત એન્ક્રિપ્શન સાથે સાચવવામાં આવે છે. તમારી મંજૂરી સિવાય કોઈ પણ વિગતો ક્યાંય શેર કરવામાં આવતી નથી.'}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                to="/signup"
                className="btn-3d-circle inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm bg-[#171717] hover:bg-[#F96400] text-white transition-all shadow-md"
              >
                <span>Register Your Family</span>
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
              <HelpCircle size={14} /> Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-3 text-3d-modern">
              Smart Family FAQ
            </h2>
            <p className="text-gray-600 text-sm">
              Everything you need to know about setting up and using your HY-Tech Smart Family ID.
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
            Connect Your Family to HY-Tech Today
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Join hundreds of smart households in Dharampur who enjoy paperless document convenience and shared reward savings.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/signup"
              className="btn-3d-circle inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] text-white shadow-xl transition-all"
            >
              <span>Get Your Family ID Now</span>
              <ArrowRight size={16} />
            </Link>
            <a
              href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20want%20to%20register%20my%20family%20for%20a%20Smart%20Family%20ID."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-circle inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all backdrop-blur-md"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>WhatsApp Family Desk</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
