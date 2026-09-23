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
    primaryLink: '/services?category=online-services',
    secondaryBtn: 'Chat on WhatsApp',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=2000',
    tag: 'Computer Education',
    title: 'Master Tally Prime & CCC with GST',
    subtitle: 'Government recognized courses with practical training. Upgrade your skills right here in Dharampur.',
    primaryBtn: 'View Courses',
    primaryLink: '/services?category=computer-courses',
    secondaryBtn: 'Admissions Open',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000',
    tag: 'Online Admissions',
    title: 'GCAS & College Admissions Made Easy',
    subtitle: 'From form filling to scholarship applications, we guide you through every step of your college admission journey.',
    primaryBtn: 'Get Admission Help',
    primaryLink: '/services?category=education-services',
    secondaryBtn: 'Chat on WhatsApp',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2000',
    tag: 'Govt. Job Forms',
    title: 'Launch Your Government Career',
    subtitle: 'Error-free online application submissions for Police, Talati, Railway, SSC, and GPSC exams.',
    primaryBtn: 'Apply Now',
    primaryLink: '/services?category=job-services',
    secondaryBtn: 'Inquire on WhatsApp',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=2000',
    tag: 'Printing Center',
    title: 'Premium Printing & Documentation',
    subtitle: 'High-speed color printing, PVC smart cards, lamination, and instant passport photos under one roof.',
    primaryBtn: 'View Pricing',
    primaryLink: '/services?category=printing-services',
    secondaryBtn: 'Contact Us',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=2000',
    tag: 'Utility Desk',
    title: 'Easy Utility Payments & Tickets',
    subtitle: 'Hassle-free electricity bills, train/bus bookings, and instant money transfers with our secure desk.',
    primaryBtn: 'Pay Bills',
    primaryLink: '/services?category=other-services',
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
                <motion.div
                  className="perspective-1000 cursor-default"
                  whileHover={{ scale: 1.02, rotateX: 3, rotateY: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5 drop-shadow-lg text-3d-modern">
                    {slides[currentSlide].title}
                  </h1>
                </motion.div>
                
                {/* Subtitle */}
                <p className="text-base md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed drop-shadow-md">
                  {slides[currentSlide].subtitle}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 1 }}
                  >
                    <Link
                      to={slides[currentSlide].primaryLink}
                      className="btn-3d-circle inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-[#F96400] text-white shadow-lg shadow-orange-500/30 border border-orange-400/40"
                    >
                      {slides[currentSlide].primaryBtn} <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, y: 1 }}
                  >
                    <a
                      href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20need%20assistance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-3d-circle inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20"
                    >
                      <MessageCircle size={18} className="text-green-400" />
                      <span>{slides[currentSlide].secondaryBtn}</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
        <motion.button 
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.9, y: 2 }}
          onClick={prevSlide}
          className="btn-3d-circle w-12 h-12 rounded-full bg-black/50 hover:bg-[#F96400] border border-white/20 hover:border-[#F96400] backdrop-blur-md flex items-center justify-center text-white"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </motion.button>
        <motion.button 
          whileHover={{ scale: 1.12, y: -2 }}
          whileTap={{ scale: 0.9, y: 2 }}
          onClick={nextSlide}
          className="btn-3d-circle w-12 h-12 rounded-full bg-black/50 hover:bg-[#F96400] border border-white/20 hover:border-[#F96400] backdrop-blur-md flex items-center justify-center text-white"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </motion.button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-4 md:left-8 z-20 flex gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full btn-3d-circle ${
              currentSlide === index 
                ? 'w-8 h-2.5 bg-[#F96400] shadow-md shadow-orange-500/40' 
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
