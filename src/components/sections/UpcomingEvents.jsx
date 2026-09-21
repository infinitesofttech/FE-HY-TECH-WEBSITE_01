import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, MapPin, Clock, ArrowUpRight, Sparkles, 
  CheckCircle2, Rocket, Calendar, MessageCircle, Laptop, BellRing
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const demoClasses = [
  {
    id: 'demo-tally',
    category: 'demo',
    badge: { en: "Free 2-Day Demo • Tally Prime", gu: "૨ દિવસ ફ્રી ડેમો • ટેલી પ્રાઇમ" },
    badgeColor: "bg-emerald-600 text-white border-emerald-500",
    title: { 
      en: "Tally Prime with GST Live Demo Session", 
      gu: "ટેલી પ્રાઇમ વિથ GST લાઈવ ફ્રી ડેમો ક્લાસ" 
    },
    description: {
      en: "Experience live computerized accounting: company creation, GST invoices, ledger posting, and balance sheet preparation in our AC lab.",
      gu: "અમારી એરકન્ડિશન્ડ લેબમાં પ્રેક્ટિકલ એકાઉન્ટિંગ શીખો: કંપની ક્રિએશન, GST બિલિંગ, લેજર એન્ટ્રી અને બેંક રિકન્સિલેશનનો ૨ દિવસનો ફ્રી ડેમો."
    },
    location: "HY-TECH Lab, College Road, Dharampur - 396050",
    time: "Morning 09:00 AM & Evening 05:00 PM",
    scheduleText: { en: "Every Mon & Sat", gu: "દર સોમવાર અને શનિવાર" },
    dateMonth: "NEXT",
    dateDay: "BATCH",
    image: "/images/events/tally-demo.jpg",
    whatsappMsg: "Hello HY-TECH, I want to book a FREE Seat for the Tally Prime with GST Demo Class in Dharampur."
  },
  {
    id: 'demo-ccc',
    category: 'demo',
    badge: { en: "Govt Certified • Free Lab Demo", gu: "સરકાર માન્ય • ફ્રી લેબ ડેમો" },
    badgeColor: "bg-blue-600 text-white border-blue-500",
    title: { 
      en: "CCC & Gujarati Typing Skill Workshop", 
      gu: "CCC કમ્પ્યુટર અને ગુજરાતી ટાઈપિંગ ડેમો સેશન" 
    },
    description: {
      en: "Hands-on demo on individual PCs: Windows, MS Word/Excel basics, Shruti Gujarati font typing, and government exam mock test practice.",
      gu: "દરેક વિદ્યાર્થી માટે સ્વતંત્ર કમ્પ્યુટર: વિન્ડોઝ, એમએસ ઓફિસ અને સરકારી નોકરી માટે જરૂરી ગુજરાતી શ્રુતિ ટાઈપિંગની મોક ટેસ્ટ તાલીમ."
    },
    location: "HY-TECH Lab, College Road, Dharampur - 396050",
    time: "Flexible 1-Hour Daily Slots",
    scheduleText: { en: "Daily Batches", gu: "રોજિંદી બેચ" },
    dateMonth: "FREE",
    dateDay: "DEMO",
    image: "/images/events/ccc-demo.jpg",
    whatsappMsg: "Hello HY-TECH, I want to attend the Free Demo for CCC & Gujarati Typing Course."
  },
  {
    id: 'demo-excel',
    category: 'demo',
    badge: { en: "Corporate Skills • Free Session", gu: "ઓફિસ સ્કીલ્સ • ફ્રી સેશન" },
    badgeColor: "bg-[#F96400] text-white border-orange-500",
    title: { 
      en: "Advanced MS Excel & Office Automation Demo", 
      gu: "એડવાન્સ એક્સેલ (VLOOKUP, Pivot) ડેમો વર્કશોપ" 
    },
    description: {
      en: "Learn high-demand formula workflows: VLOOKUP, XLOOKUP, automated salary sheets, and interactive business dashboards for job seekers.",
      gu: "નોકરી માટે અનિવાર્ય એક્સેલ ફોર્મ્યુલા શીખો: VLOOKUP, Pivot Tables, સેલેરી સ્લિપ ઓટોમેશન અને ડેટા એનાલિસિસ."
    },
    location: "HY-TECH Lab, College Road, Dharampur - 396050",
    time: "Sunday Special: 10:00 AM to 12:00 PM",
    scheduleText: { en: "Weekly Sunday", gu: "દર રવિવારે" },
    dateMonth: "OPEN",
    dateDay: "SEATS",
    image: "/images/events/excel-demo.jpg",
    whatsappMsg: "Hello HY-TECH, I want to join the Sunday Free Demo for Advanced Excel."
  }
];

const comingSoonCourses = [
  {
    id: 'coming-web',
    category: 'coming-soon',
    badge: { en: "🚀 Coming Soon • Launching Soon", gu: "🚀 કમિંગ સૂન • ટૂંક સમયમાં" },
    badgeColor: "bg-purple-600 text-white border-purple-500",
    title: { 
      en: "Full-Stack Web & UI/UX Development", 
      gu: "વેબ ડિઝાઇન અને ડેવલપમેન્ટ (HTML, CSS, JS, React)" 
    },
    description: {
      en: "Complete hands-on curriculum: build responsive modern websites, portfolio pages, modern web apps, and understand domain/hosting.",
      gu: "આધુનિક વેબસાઇટ બનાવતા શીખો: HTML5, CSS3, JavaScript, React.js અને હોસ્ટિંગ. સ્થાનિક અને રિમોટ આઇટી જોબ માટે કારકિર્દી નિર્માણ."
    },
    location: "HY-TECH Lab & Online Hybrid Mode",
    time: "Evening 06:00 PM - 07:30 PM",
    scheduleText: { en: "Pre-Book Seat", gu: "અગાઉથી બુકિંગ કરો" },
    dateMonth: "COMING",
    dateDay: "SOON",
    image: "/images/events/web-dev.jpg",
    whatsappMsg: "Hello HY-TECH, I want to pre-register for the upcoming Web Development Course."
  },
  {
    id: 'coming-graphics',
    category: 'coming-soon',
    badge: { en: "🎨 Coming Soon • Creative Media", gu: "🎨 કમિંગ સૂન • ગ્રાફિક ડિઝાઇન" },
    badgeColor: "bg-pink-600 text-white border-pink-500",
    title: { 
      en: "Graphic Design, Video Editing & Social Media Marketing", 
      gu: "ગ્રાફિક ડિઝાઇન, વિડીયો એડિટિંગ અને કેન્વા / ફોટોશોપ" 
    },
    description: {
      en: "Master Canva Pro, Adobe Photoshop, poster designing, festival banners for local businesses, YouTube thumbnail design, and Reels editing.",
      gu: "દુકાનો અને કંપનીઓ માટે સોશિયલ મીડિયા પોસ્ટ, ફેસ્ટિવલ બેનર, વિડીયો રીલ્સ એડિટિંગ અને લોગો ડિઝાઇનનું પ્રેક્ટિકલ શિક્ષણ."
    },
    location: "HY-TECH Studio, Dharampur",
    time: "Afternoon 03:00 PM - 04:30 PM",
    scheduleText: { en: "Pre-Register", gu: "નોંધણી શરૂ" },
    dateMonth: "NEXT",
    dateDay: "MONTH",
    image: "/images/events/graphic-design.jpg",
    whatsappMsg: "Hello HY-TECH, please notify me when the Graphic Design & Video Editing Course starts."
  },
  {
    id: 'coming-ai',
    category: 'coming-soon',
    badge: { en: "🤖 Coming Soon • 2026 Tech", gu: "🤖 કમિંગ સૂન • આર્ટિફિશિયલ ઇન્ટેલિજન્સ" },
    badgeColor: "bg-cyan-700 text-white border-cyan-600",
    title: { 
      en: "Python Programming & Practical AI Tools Literacy", 
      gu: "પાયથોન પ્રોગ્રામિંગ અને પ્રેક્ટિકલ AI ટૂલ્સ તાલીમ" 
    },
    description: {
      en: "Beginner-friendly Python coding, automation of Excel & Word data, and utilizing modern AI tools for student research and office productivity.",
      gu: "વિદ્યાર્થીઓ અને ઓફિસ સ્ટાફ માટે પાયથોન કોડિંગ અને AI ટૂલ્સ દ્વારા દૈનિક કામકાજ ઝડપી બનાવવાની આધુનિક તાલીમ."
    },
    location: "HY-TECH Computer Lab, Dharampur",
    time: "Weekend Special Batches",
    scheduleText: { en: "Seat Reserve", gu: "સીટ રિઝર્વ" },
    dateMonth: "2026",
    dateDay: "NEW",
    image: "/images/events/python-ai.jpg",
    whatsappMsg: "Hello HY-TECH, I am interested in the Python & Practical AI Course."
  }
];

export default function UpcomingEvents() {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'demo', 'coming-soon'

  const t = (obj) => {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[language] || obj['en'] || '';
  };

  const allItems = [...demoClasses, ...comingSoonCourses];
  const filteredItems = activeFilter === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === activeFilter);

  return (
    <section className="bg-gradient-to-b from-[#F96400] to-[#E55700] py-24 relative overflow-hidden">
      
      {/* Background Ambience and Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      />
      
      {/* Ambient Lighting Spheres */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#F96400] font-black text-xs sm:text-sm mb-6 shadow-md uppercase tracking-wider">
            <GraduationCap className="w-4 h-4" />
            <span>{language === 'en' ? 'HY-TECH COMPUTER ACADEMY' : 'હાઇ-ટેક કમ્પ્યુટર એકેડમી'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-3xl mb-4 drop-shadow-sm">
            {language === 'en' 
              ? 'Free Demo Classes & Upcoming Career Courses' 
              : 'ફ્રી ડેમો ક્લાસ અને આગામી નવા કોર્સ'}
          </h2>

          <p className="text-white/90 text-sm sm:text-base max-w-2xl font-medium leading-relaxed mb-8">
            {language === 'en' 
              ? 'Attend free practical demo batches before enrolling in courses like Tally Prime & CCC, or pre-register for upcoming technology programs in Dharampur.'
              : 'ટેલી પ્રાઇમ અને CCC જેવા કોર્સમાં જોડાતાં પહેલાં ફ્રી પ્રેક્ટિકલ ડેમો ક્લાસનો અનુભવ કરો અથવા ટૂંક સમયમાં શરૂ થતા નવા ટેક્નોલોજી કોર્સ માટે અગાઉથી રજીસ્ટ્રેશન કરાવો.'}
          </p>

          {/* Interactive Filter Pills */}
          <div className="inline-flex p-1.5 bg-black/20 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeFilter === 'all'
                  ? 'bg-white text-[#171717] shadow-md scale-105'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {language === 'en' ? '🌟 All Programs (6)' : '🌟 તમામ કાર્યક્રમો (6)'}
            </button>

            <button
              onClick={() => setActiveFilter('demo')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeFilter === 'demo'
                  ? 'bg-white text-emerald-800 shadow-md scale-105'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Sparkles size={14} className={activeFilter === 'demo' ? 'text-emerald-600' : ''} />
              {language === 'en' ? '✨ Free Demo Classes' : '✨ ફ્રી ડેમો ક્લાસ'}
            </button>

            <button
              onClick={() => setActiveFilter('coming-soon')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all flex items-center gap-1.5 ${
                activeFilter === 'coming-soon'
                  ? 'bg-white text-purple-800 shadow-md scale-105'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Rocket size={14} className={activeFilter === 'coming-soon' ? 'text-purple-600' : ''} />
              {language === 'en' ? '🚀 Coming Soon' : '🚀 કમિંગ સૂન'}
            </button>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-3xl p-4 sm:p-5 flex flex-col md:flex-row items-center gap-6 sm:gap-8 shadow-xl hover:shadow-2xl transition-all duration-300 group border border-white/60 relative z-20"
              >
                
                {/* Left Visual Preview Container */}
                <div className="w-full md:w-[270px] h-52 sm:h-56 rounded-2xl overflow-hidden shrink-0 relative bg-gray-900 border border-gray-100 shadow-md">
                  <img 
                    src={item.image} 
                    alt={t(item.title)} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Category Pill on Image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider border shadow-md backdrop-blur-sm ${item.badgeColor}`}>
                      {t(item.badge)}
                    </span>
                  </div>

                  {/* Mode / Lab indicator at bottom left */}
                  <div className="absolute bottom-2.5 left-3 z-10 flex items-center gap-1.5 text-white text-[11px] font-bold drop-shadow">
                    <Laptop className="w-3.5 h-3.5 text-[#F96400]" />
                    <span>{item.category === 'demo' ? (language === 'en' ? 'Live Lab Demo' : 'લાઈવ લેબ સેશન') : (language === 'en' ? 'Upcoming Batch' : 'નવી બેચ')}</span>
                  </div>
                </div>

                {/* Center Content */}
                <div className="flex-1 py-2 px-1 sm:px-0 text-left w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                      <Calendar size={13} className="text-[#F96400]" />
                      {t(item.scheduleText)}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#171717] mb-2 leading-snug group-hover:text-[#F96400] transition-colors">
                    {t(item.title)}
                  </h3>

                  <p className="text-gray-600 mb-5 leading-relaxed text-xs sm:text-sm font-medium">
                    {t(item.description)}
                  </p>
                  
                  {/* Metadata Chips */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-gray-500 font-bold border-t border-gray-100 pt-3">
                    <div className="flex items-center gap-1.5 text-gray-700">
                      <MapPin className="w-4 h-4 text-[#F96400] shrink-0" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-600">
                      <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>

                {/* Right Action CTA Column */}
                <div className="w-full md:w-56 md:border-l border-gray-100 flex flex-row md:flex-col items-center justify-between md:justify-center p-2 sm:p-4 shrink-0 gap-3">
                  <div className="text-center">
                    <span className="block text-gray-400 font-bold text-xs uppercase tracking-wider mb-0.5">
                      {item.dateMonth}
                    </span>
                    <span className="block text-3xl sm:text-4xl font-black text-[#171717] tracking-tighter">
                      {item.dateDay}
                    </span>
                  </div>
                  
                  <a
                    href={`https://wa.me/917226030701?text=${encodeURIComponent(item.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-5 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg w-full text-center ${
                      item.category === 'demo'
                        ? 'bg-[#171717] hover:bg-[#F96400] text-white'
                        : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white'
                    }`}
                  >
                    <MessageCircle size={16} />
                    <span>{item.category === 'demo' 
                      ? (language === 'en' ? 'Book Free Seat' : 'ફ્રી સીટ બુક કરો') 
                      : (language === 'en' ? 'Pre-Register' : 'અગાઉથી નોંધણી')}</span>
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-bold shadow-lg">
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              {language === 'en' ? '100% Practical PC Lab Training' : '૧૦૦% પ્રેક્ટિકલ કમ્પ્યુટર લેબ તાલીમ'}
            </span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              {language === 'en' ? 'Separate Computer For Every Student' : 'દરેક વિદ્યાર્થીને વ્યક્તિગત કમ્પ્યુટર'}
            </span>
            <span className="hidden sm:inline opacity-40">•</span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-white" />
              {language === 'en' ? 'Air-Conditioned Modern Classroom' : 'AC ડિજિટલ ક્લાસરૂમ'}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
