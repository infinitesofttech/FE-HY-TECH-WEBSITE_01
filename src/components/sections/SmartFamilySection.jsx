import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  QrCode,
  Wallet,
  Bell,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Smartphone,
  Lock,
  RefreshCw,
  Gift,
  FileCheck,
  MessageCircle,
  Award,
  ChevronRight,
  FolderLock
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SmartFamilySection() {
  const { language } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const benefits = [
    {
      id: 'redundancy',
      titleEn: 'Zero Document Redundancy',
      titleGu: 'વારંવાર ડોક્યુમેન્ટ આપવાની ઝંઝટ મુક્તિ',
      descEn: 'Upload Aadhaar, School LC, or Ration card once. It automatically auto-fills all future government, college, and exam forms for every family member.',
      descGu: 'એકવાર આધાર કે એલસી અપલોડ કરો. પરિવારના કોઈપણ સભ્યના ભવિષ્યના ફોર્મમાં તે આપમેળે ઉપયોગમાં આવશે.',
      icon: FolderLock,
      tagEn: '100% Paperless Vault',
      tagGu: 'સંપૂર્ણ ડિજિટલ લોકર',
      color: 'from-orange-500/10 to-amber-500/10 border-orange-200 text-[#F96400]'
    },
    {
      id: 'rewards',
      titleEn: 'Shared Family Reward Wallet',
      titleGu: 'સંયુક્ત ફેમિલી રિવોર્ડ વોલેટ',
      descEn: 'Every xerox, admission form, or PAN application earns pooled reward coins. Any member can redeem accumulated savings on subsequent center services.',
      descGu: 'દરેક સેવા કે ફોર્મ પર કેશબેક રિવોર્ડ મેળવો. પરિવારનો કોઈપણ સભ્ય આ બચતનો ઉપયોગ આગામી સેવામાં કરી શકે છે.',
      icon: Wallet,
      tagEn: 'Save Up to 15%',
      tagGu: '૧૫% સુધીની બચત',
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-200 text-emerald-600'
    },
    {
      id: 'card',
      titleEn: 'Instant Digital Family Card',
      titleGu: 'ઇન્સ્ટન્ટ ડિજિટલ ફેમિલી કાર્ડ',
      descEn: 'One smart QR-enabled digital identity card for your entire household. Access your family’s verified profiles seamlessly on WhatsApp or physical scan.',
      descGu: 'સમગ્ર ઘર માટે એક જ સ્માર્ટ QR કોડ કાર્ડ. વોટ્સએપ પર અથવા અમારા કેન્દ્ર પર માત્ર સ્કેન કરીને સેવા મેળવો.',
      icon: QrCode,
      tagEn: 'Single Smart QR',
      tagGu: 'એક સ્માર્ટ QR',
      color: 'from-blue-500/10 to-indigo-500/10 border-blue-200 text-blue-600'
    },
    {
      id: 'tracking',
      titleEn: 'Real-Time Tracking & Transparency',
      titleGu: 'લાઇવ ટ્રેકિંગ & પારદર્શિતા',
      descEn: 'Track government application stages, college merit list statuses, and PVC printing live from your phone with zero hidden facilitator fees.',
      descGu: 'સરકારી અરજીની પ્રક્રિયા, કોલેજ મેરિટ લિસ્ટ અને પ્રિન્ટિંગનું સ્ટેટસ તમારા ફોન પર લાઈવ ટ્રેક કરો.',
      icon: CheckCircle2,
      tagEn: 'Live Status Tracker',
      tagGu: 'લાઈવ સ્ટેટસ અપડેટ',
      color: 'from-purple-500/10 to-pink-500/10 border-purple-200 text-purple-600'
    },
    {
      id: 'notifications',
      titleEn: 'Automated WhatsApp & SMS Alerts',
      titleGu: 'સ્વચાલિત વોટ્સએપ અને SMS એલર્ટ',
      descEn: 'Get smart proactive reminders before passport/licence expirations, college scholarship deadlines, and government job exam admit cards.',
      descGu: 'દસ્તાવેજ રિન્યુઅલ, સ્કોલરશિપ તારીખો અને ભરતી પરીક્ષાની છેલ્લી તારીખના આગોતરા રિમાઇન્ડર મેળવો.',
      icon: Bell,
      tagEn: 'Zero Missed Deadlines',
      tagGu: 'સમયસર સૂચનાઓ',
      color: 'from-rose-500/10 to-orange-500/10 border-rose-200 text-rose-600'
    }
  ];

  const steps = [
    {
      number: '01',
      stepEn: 'Step 1',
      stepGu: 'પગલું ૧',
      titleEn: 'Registration & Smart Member ID Generation',
      titleGu: 'નોંધણી અને સ્માર્ટ મેમ્બર ID જનરેશન',
      descEn: 'Register with your mobile number. A unique 10-digit Smart Member ID (#HYT-MEM-XXXX) is generated instantly.',
      descGu: 'પરિવારના મોભીના મોબાઇલ નંબર સાથે ફ્રી રજીસ્ટ્રેશન કરો. તરત જ યુનિક ૧૦-અંકનું ફેમિલી આઈડી પ્રાપ્ત થશે.',
      icon: Smartphone,
      detailBadgeEn: 'Takes 60 seconds',
      detailBadgeGu: 'માત્ર ૬૦ સેકન્ડ'
    },
    {
      number: '02',
      stepEn: 'Step 2',
      stepGu: 'પગલું ૨',
      titleEn: 'Add Family Members',
      titleGu: 'પરિવારના સભ્યો ઉમેરો',
      descEn: 'Link husband, wife, children, and parents with quick relationship tagging and individual date of birth records.',
      descGu: 'પતિ, પત્ની, બાળકો અને માતા-પિતાની પ્રોફાઇલ સરળતાથી જોડો જેથી બધાની વિગતો સચવાય.',
      icon: Users,
      detailBadgeEn: 'Unlimited Members',
      detailBadgeGu: 'અમર્યાદિત સભ્યો'
    },
    {
      number: '03',
      stepEn: 'Step 3',
      stepGu: 'પગલું ૩',
      titleEn: 'Secure Document Upload',
      titleGu: 'સુરક્ષિત દસ્તાવેજ અપલોડ',
      descEn: 'Store Aadhaar, PAN, School LC, Income & Caste certificates in 256-bit encrypted bank-grade citizen lockers.',
      descGu: 'આધાર, પાન કાર્ડ, એલસી અને આવક પ્રમાણપત્ર એન્ક્રિપ્ટેડ ડિજિટલ લોકરમાં સુરક્ષિત સાચવો.',
      icon: Lock,
      detailBadgeEn: 'Bank-Grade 256-Bit Security',
      detailBadgeGu: 'સંપૂર્ણ સુરક્ષિત એન્ક્રિપ્શન'
    },
    {
      number: '04',
      stepEn: 'Step 4',
      stepGu: 'પગલું ૪',
      titleEn: 'Avail Services & Track via QR Code',
      titleGu: 'QR કોડથી સેવાઓ અને લાઇવ ટ્રેકિંગ',
      descEn: 'Apply online or flash your Family QR Card at our Dharampur Center. Documents auto-fill instantly with zero queue waiting.',
      descGu: 'ઓનલાઈન અરજી કરો અથવા ધરમપુર કેન્દ્ર પર ફેમિલી QR કાર્ડ બતાવો. આપમેળે ફોર્મ ભરાશે.',
      icon: QrCode,
      detailBadgeEn: 'Priority Fast-Track Queue',
      detailBadgeGu: 'ઝડપી પ્રાથમિકતા સેવા'
    },
    {
      number: '05',
      stepEn: 'Step 5',
      stepGu: 'પગલું ૫',
      titleEn: 'Earn & Redeem Shared Rewards',
      titleGu: 'સંયુક્ત રિવોર્ડ્સ અને કેશબેક',
      descEn: 'Receive pooled reward cashback on every service. Redeem points for free photocopies, fee discounts, or computer course coupons.',
      descGu: 'દરેક સેવા પર કેશબેક મેળવો અને ઝેરોક્ષ, પ્રિન્ટિંગ કે કોમ્પ્યુટર કોર્સમાં ફી ડિસ્કાઉન્ટ મેળવો.',
      icon: Gift,
      detailBadgeEn: 'Instant Wallet Balance',
      detailBadgeGu: 'વોલેટમાં તાત્કાલિક જમા'
    }
  ];

  return (
    <section className="relative w-full py-20 lg:py-28 bg-[#FAFAFA] border-b border-gray-200 overflow-hidden">
      
      {/* Background Ambience Blobs */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#F96400]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">

        {/* ══════════════════════════════════════════════════════════════════
            PART 1: MAIN MOTIVE / HERO HIGHLIGHT
           ══════════════════════════════════════════════════════════════════ */}
        <div className="bg-gradient-to-br from-[#111111] via-[#1A1A1A] to-[#252525] rounded-[32px] md:rounded-[40px] p-8 md:p-14 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-white/10 mb-20">
          
          {/* Subtle Glow inside Card */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F96400] rounded-full blur-[140px] opacity-20 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-[#F96400] border border-white/15 backdrop-blur-md">
                <Sparkles size={14} className="animate-pulse" />
                <span>HY-Tech Smart Member Ecosystem</span>
              </div>

              <motion.div
                className="perspective-1000 cursor-default"
                whileHover={{ scale: 1.01, rotateX: 2, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight text-3d-modern">
                  One Family ID, Infinite Services &amp;{' '}
                  <span className="text-3d-gradient">Shared Rewards!</span>
                </h2>
              </motion.div>

              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal max-w-2xl">
                {language === 'en'
                  ? 'No more repeated document photocopies, lost certificates, or confusing paperwork. Link your entire household under a single digital Family ID to access 60+ government, education, job, and printing services with shared family benefits.'
                  : 'વારંવાર ઝેરોક્ષ કે દસ્તાવેજ ખોવાઈ જવાની ચિંતા નહીં. એક જ ડિજિટલ ફેમિલી આઈડી હેઠળ સમગ્ર પરિવારને જોડો અને 60+ સરકારી, શિક્ષણ, નોકરી અને પ્રિન્ટિંગ સેવાઓ સંયુક્ત લાભો સાથે સરળતાથી મેળવો.'}
              </p>

              {/* Quick Feature Tickers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-200 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <CheckCircle2 size={18} className="text-[#F96400] flex-shrink-0" />
                  <span>{language === 'en' ? 'Unified Household Vault' : 'પરિવાર માટે એક જ ડિજિટલ લોકર'}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-semibold text-gray-200 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
                  <CheckCircle2 size={18} className="text-emerald-400 flex-shrink-0" />
                  <span>{language === 'en' ? 'Pooled Cashback on Every Bill' : 'દરેક સેવા પર સંયુક્ત કેશબેક'}</span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/signup"
                  className="btn-3d-circle inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] text-white shadow-xl shadow-orange-500/30 transition-all border border-orange-400/40"
                >
                  <span>{language === 'en' ? 'Get Your Family ID' : 'તમારું ફેમિલી ID મેળવો'}</span>
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20want%20to%20register%20my%20family%20for%20a%20Smart%20Family%20ID."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d-circle inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all"
                >
                  <MessageCircle size={17} className="text-green-400" />
                  <span>{language === 'en' ? 'Consult Family Desk' : 'ફેમિલી ડેસ્ક સાથે વાત કરો'}</span>
                </a>
              </div>

            </div>

            {/* Right Visual: Interactive Digital Family Card Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md relative"
              >
                {/* Floating Badge 1 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-5 -left-4 z-20 bg-white text-[#171717] px-4 py-2 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 text-xs font-bold"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <ShieldCheck size={14} />
                  </div>
                  <span>Verified Citizen Vault</span>
                </motion.div>

                {/* Floating Badge 2 */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-5 -right-4 z-20 bg-white text-[#171717] px-4 py-2 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 text-xs font-bold"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-100 text-[#F96400] flex items-center justify-center">
                    <Gift size={14} />
                  </div>
                  <span>₹1,250 Shared Wallet</span>
                </motion.div>

                {/* Main Digital Card */}
                <div className="bg-gradient-to-tr from-gray-900 via-neutral-900 to-black p-6 sm:p-7 rounded-3xl border border-white/20 shadow-2xl relative overflow-hidden backdrop-blur-xl">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-[#F96400] flex items-center justify-center text-white font-black text-sm shadow-md shadow-orange-500/40">
                        HY
                      </div>
                      <div>
                        <p className="text-[11px] font-black tracking-widest text-[#F96400] uppercase">HY-TECH SMART MEMBER</p>
                        <p className="text-[9px] text-gray-400">Digital Citizen Pass</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      ACTIVE ID
                    </span>
                  </div>

                  {/* Family ID & Details */}
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Member ID Number</p>
                      <p className="text-xl sm:text-2xl font-black text-white tracking-widest font-mono">HYT-MEM-8821</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 bg-white/5 p-3.5 rounded-2xl border border-white/5">
                      <div>
                        <p className="text-[10px] text-gray-400 font-medium">Head of Family</p>
                        <p className="text-xs font-bold text-white">Rajeshbhai Patel</p>
                        <p className="text-[10px] text-gray-400">Dharampur, Gujarat</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-gray-400 font-medium">Linked Members</p>
                        <p className="text-xs font-bold text-emerald-400">4 Active Members</p>
                        <p className="text-[10px] text-gray-400">Father, Mother, 2 Kids</p>
                      </div>
                    </div>

                    {/* QR Code and Wallet Strip */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase font-bold text-gray-400">Wallet Rewards</p>
                        <div className="flex items-center gap-1.5 text-base font-extrabold text-[#F96400]">
                          <Wallet size={16} />
                          <span>₹1,250.00</span>
                        </div>
                        <p className="text-[9px] text-gray-400">Redeemable on all 60+ services</p>
                      </div>

                      {/* Mock QR */}
                      <div className="w-16 h-16 bg-white p-1 rounded-xl shadow-md flex items-center justify-center">
                        <QrCode size={52} className="text-black" />
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </div>

          </div>

        </div>

        {/* ══════════════════════════════════════════════════════════════════
            PART 2: CUSTOMER BENEFITS GRID (5 PILLARS)
           ══════════════════════════════════════════════════════════════════ */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400] border border-[#F96400]/20">
              <Award size={13} /> Exclusive Household Advantages
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-[#111111] tracking-tight mb-3">
              Why Citizens Choose HY-Tech Smart Member
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Designed specifically for families in Dharampur to make administrative, educational, and government tasks 100% stress-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="bg-white rounded-3xl p-7 border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${benefit.color} border flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform`}>
                        <Icon size={24} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-gray-50 border border-gray-200 text-gray-600">
                        {language === 'en' ? benefit.tagEn : benefit.tagGu}
                      </span>
                    </div>

                    <h4 className="text-xl font-bold text-[#111111] mb-2.5 group-hover:text-[#F96400] transition-colors">
                      {language === 'en' ? benefit.titleEn : benefit.titleGu}
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {language === 'en' ? benefit.descEn : benefit.descGu}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center gap-1.5 text-xs font-bold text-[#F96400]">
                    <span>{language === 'en' ? 'Included in Free Family ID' : 'મફત ફેમિલી આઈડીમાં ઉપલબ્ધ'}</span>
                    <CheckCircle2 size={14} />
                  </div>
                </motion.div>
              );
            })}

            {/* Quick Summary Card */}
            <div className="bg-gradient-to-br from-[#F96400] to-[#E05A00] rounded-3xl p-7 text-white flex flex-col justify-between shadow-lg shadow-orange-500/20">
              <div>
                <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-white/20 text-white mb-4 inline-block">
                  All-In-One Hub
                </span>
                <h4 className="text-2xl font-black mb-3">
                  Ready to simplify your family documents?
                </h4>
                <p className="text-xs sm:text-sm text-orange-100 leading-relaxed mb-6">
                  Join today. Registration takes less than 60 seconds with zero paperwork fees.
                </p>
              </div>

              <Link
                to="/signup"
                className="btn-3d-circle w-full py-3.5 px-6 rounded-full bg-white text-[#171717] hover:bg-neutral-100 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Register Your Family Today</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            PART 3: STEP-BY-STEP CONNECTION PROCESS
           ══════════════════════════════════════════════════════════════════ */}
        <div className="bg-white rounded-[32px] md:rounded-[40px] p-8 md:p-12 lg:p-16 border border-gray-200/90 shadow-sm">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400] border border-[#F96400]/20">
              <RefreshCw size={13} /> Simple 5-Step Process
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-[#111111] tracking-tight mb-3">
              How Families Connect to the Platform
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              From free registration to lifetime digital convenience — here is how easy it is to link your household.
            </p>
          </div>

          {/* Connected Step Cards (Grid & Timeline) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
            {steps.map((st, i) => {
              const StepIcon = st.icon;
              const isSelected = activeStep === i;

              return (
                <motion.div
                  key={st.number}
                  whileHover={{ y: -4 }}
                  onClick={() => setActiveStep(i)}
                  className={`p-6 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between relative ${
                    isSelected
                      ? 'bg-[#FFF5EE] border-[#F96400] shadow-md shadow-orange-500/10'
                      : 'bg-gray-50/70 hover:bg-gray-50 border-gray-200/80'
                  }`}
                >
                  {/* Step Top Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-2xl font-black font-mono ${isSelected ? 'text-[#F96400]' : 'text-gray-400'}`}>
                        {st.number}
                      </span>
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-[#F96400] text-white shadow-md' : 'bg-white text-gray-700 shadow-2xs'
                      }`}>
                        <StepIcon size={18} />
                      </div>
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#F96400] block mb-1">
                      {language === 'en' ? st.stepEn : st.stepGu}
                    </span>

                    <h4 className="text-base font-extrabold text-[#111111] mb-2 leading-snug">
                      {language === 'en' ? st.titleEn : st.titleGu}
                    </h4>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {language === 'en' ? st.descEn : st.descGu}
                    </p>
                  </div>

                  {/* Detail Badge */}
                  <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500">
                      {language === 'en' ? st.detailBadgeEn : st.detailBadgeGu}
                    </span>
                    <ChevronRight size={14} className={isSelected ? 'text-[#F96400]' : 'text-gray-300'} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Active Step Highlight Detail Strip */}
          <div className="mt-10 p-6 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F96400] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <CheckCircle2 size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#F96400]">
                  {language === 'en' ? 'Active Workflow Highlight' : 'હાલની પ્રક્રિયા વિગત'}
                </p>
                <p className="text-sm sm:text-base font-extrabold text-[#111111]">
                  {language === 'en' ? steps[activeStep].titleEn : steps[activeStep].titleGu}
                </p>
              </div>
            </div>

            <Link
              to="/signup"
              className="btn-3d-circle inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold bg-[#111111] hover:bg-[#F96400] text-white transition-all shadow-md flex-shrink-0"
            >
              <span>{language === 'en' ? 'Start This Step' : 'આ પગલું શરૂ કરો'}</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Final Conversion Strip inside Section */}
          <div className="mt-14 pt-10 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h4 className="text-xl font-black text-[#111111]">
                {language === 'en' ? 'Protect Your Family Documents with One ID' : 'એક જ ID સાથે પરિવારના દસ્તાવેજો સુરક્ષિત કરો'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {language === 'en' ? 'Zero registration fees • 100% data confidentiality • Supported across all 60+ services' : 'મફત રજીસ્ટ્રેશન • ૧૦૦% ગોપનીયતા • તમામ ૬૦+ સેવાઓ માટે માન્ય'}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/signup"
                className="btn-3d-circle px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-[#F96400] hover:bg-[#E05A00] text-white shadow-lg shadow-orange-500/25 transition-all"
              >
                Register Your Family
              </Link>
              <Link
                to="/services"
                className="btn-3d-circle px-6 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-white hover:bg-gray-50 text-[#171717] border border-gray-200 shadow-2xs transition-all"
              >
                Explore All 60+ Services
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
