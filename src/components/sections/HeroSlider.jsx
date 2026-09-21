import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=2000',
    tag: 'Govt. Authorized Desk',
    title: 'All Your Government Documents, Sorted.',
    subtitle: 'Fast, error-free processing for PAN, Aadhaar, Passport, and more. Skip the long lines and let our Dharampur experts handle it.',
    primaryBtn: 'Explore Services',
    primaryLink: '/services',
    secondaryBtn: 'Chat on WhatsApp',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000',
    tag: 'Computer Education',
    title: 'Master Tally Prime & CCC with GST',
    subtitle: 'Government recognized courses with practical training. Upgrade your skills right here in Dharampur.',
    primaryBtn: 'View Courses',
    primaryLink: '/services',
    secondaryBtn: 'Admissions Open',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000',
    tag: 'Online Admissions',
    title: 'GCAS & College Admissions Made Easy',
    subtitle: 'From form filling to scholarship applications, we guide you through every step of your college admission journey.',
    primaryBtn: 'Get Admission Help',
    primaryLink: '/services',
    secondaryBtn: 'Chat on WhatsApp',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2000',
    tag: 'Govt. Job Forms',
    title: 'Launch Your Government Career',
    subtitle: 'Error-free online application submissions for Police, Talati, Railway, SSC, and GPSC exams.',
    primaryBtn: 'Apply Now',
    primaryLink: '/services',
    secondaryBtn: 'Inquire on WhatsApp',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2000',
    tag: 'Printing Center',
    title: 'Premium Printing & Documentation',
    subtitle: 'High-speed color printing, PVC smart cards, lamination, and instant passport photos under one roof.',
    primaryBtn: 'View Pricing',
    primaryLink: '/services',
    secondaryBtn: 'Contact Us',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=2000',
    tag: 'Utility Desk',
    title: 'Easy Utility Payments & Tickets',
    subtitle: 'Hassle-free electricity bills, train/bus bookings, and instant money transfers with our secure desk.',
    primaryBtn: 'Pay Bills',
    primaryLink: '/services',
    secondaryBtn: 'Chat on WhatsApp',
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[500px] lg:h-[600px] bg-black overflow-hidden">
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          
          {/* Dark Overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 w-full">
          <div className="max-w-3xl">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Tag */}
                <div className="inline-block px-3 py-1 mb-4 rounded-full bg-[#F96400]/20 border border-[#F96400]/50 backdrop-blur-md">
                  <span className="text-[#F96400] text-xs md:text-sm font-bold tracking-wide uppercase">
                    {slides[currentSlide].tag}
                  </span>
                </div>
                
                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg">
                  {slides[currentSlide].title}
                </h1>
                
                {/* Subtitle */}
                <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                  {slides[currentSlide].subtitle}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={slides[currentSlide].primaryLink}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#F96400] hover:bg-[#E05A00] text-white transition-all shadow-lg shadow-orange-500/30"
                  >
                    {slides[currentSlide].primaryBtn} <ArrowRight size={18} />
                  </Link>
                  
                  <a
                    href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20need%20assistance."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all"
                  >
                    <MessageCircle size={18} className="text-green-400" />
                    <span>{slides[currentSlide].secondaryBtn}</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-black/40 hover:bg-[#F96400] border border-white/20 hover:border-[#F96400] backdrop-blur-md flex items-center justify-center text-white transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-black/40 hover:bg-[#F96400] border border-white/20 hover:border-[#F96400] backdrop-blur-md flex items-center justify-center text-white transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-4 md:left-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index 
                ? 'w-8 h-2 bg-[#F96400]' 
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
