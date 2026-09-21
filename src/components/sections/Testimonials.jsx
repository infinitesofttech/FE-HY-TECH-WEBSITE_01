import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Quote, Star, GraduationCap, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    bgColor: 'bg-[#fdf2f8]', // pink-50
    text: "The platform transformed complex analytics into simple actions, helping our team make faster, smarter decisions with deep technical expertise daily.",
    name: "Brooklyn Simmons",
    designation: "Co. Founder",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    bgColor: 'bg-[#e0f2fe]', // sky-100
    text: "Our team reduced manual reporting time drastically and now focuses on strategy instead of repetitive data tasks thanks to the AI insights.",
    name: "Cody Fisher",
    designation: "Co. Founder",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    bgColor: 'bg-[#dcfce7]', // green-100
    text: "We improved marketing performance significantly using AI-driven recommendations that optimize campaigns for consistent results.",
    name: "Jenny Wilson",
    designation: "Co. Founder",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    bgColor: 'bg-[#f3e8ff]', // purple-100
    text: "The facilitation services are top-notch. They handled all our complex documentation requirements seamlessly and securely.",
    name: "Bessie Cooper",
    designation: "Co. Founder",
    avatar: "https://i.pravatar.cc/150?u=4"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 text-orange-600 font-semibold text-sm mb-4">
              <GraduationCap className="w-4 h-4" />
              <span className="tracking-wide">STUDENTS FEEDBACK</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a202c] leading-tight tracking-tight">
              Explore our students<br/>users feedback.
            </h2>
          </div>
          
          {/* Custom Navigation */}
          <div className="hidden lg:flex gap-4 mt-6 lg:mt-0 pb-2">
            <button className="testimonial-prev w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="testimonial-next w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slider Section */}
        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            pagination={{ 
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#F96400]',
              bulletClass: 'swiper-pagination-bullet !w-2 !h-2 !bg-gray-300'
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className={`h-full p-8 rounded-2xl ${item.bgColor} flex flex-col border border-black/5`}>
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#F96400] flex items-center justify-center mb-6 shadow-md">
                    <Quote className="w-6 h-6 text-white fill-current" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-[#F96400] fill-current" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-gray-700 text-lg mb-8 flex-grow leading-relaxed">
                    "{item.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-white"
                    />
                    <div>
                      <h4 className="font-bold text-[#1a202c] text-lg">{item.name}</h4>
                      <p className="text-gray-500 text-sm font-medium">{item.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
