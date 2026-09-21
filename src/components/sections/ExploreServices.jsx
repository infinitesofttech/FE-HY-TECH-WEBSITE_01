import React from 'react';
import { motion } from 'framer-motion';
import { Clock, FileCheck, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { featuredServices } from '../../data/services';

export default function ExploreServices() {
  return (
    <section className="w-full py-20 bg-[#FAFAFA]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400]">
            <Sparkles size={13} /> Daily Citizen Highlights
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight mb-3">
            Most In-Demand Facilitation Services.
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            We handle the official paperwork and online queues so you don't have to face rejected applications or repeated office visits.
          </p>
        </div>

        {/* 3 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((svc, i) => (
            <motion.div
              key={svc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="bg-white rounded-2xl p-7 border border-gray-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-[#F96400] uppercase tracking-wider bg-[#FFF5EE] px-2.5 py-1 rounded-full">
                    {svc.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                    <Clock size={12} className="text-[#F96400]" /> {svc.time}
                  </span>
                </div>

                <h3 className="font-extrabold text-xl text-[#000000] leading-snug mb-3">
                  {svc.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-5">
                  {svc.desc}
                </p>

                {/* Required Documents Box */}
                <div className="p-3.5 rounded-xl bg-gray-50 border border-gray-100 mb-6">
                  <p className="text-[11px] font-bold text-[#171717] flex items-center gap-1.5 mb-1">
                    <FileCheck size={13} className="text-[#F96400]" /> Required Documents:
                  </p>
                  <p className="text-xs text-gray-600">
                    {svc.docsNeeded}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href={`https://wa.me/917226030701?text=${encodeURIComponent(svc.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#F96400] hover:bg-[#E05A00] text-white text-xs font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle size={14} /> Inquire / Apply via WhatsApp
                </a>
                <Link
                  to="/services"
                  className="w-full py-2 bg-transparent hover:bg-gray-50 text-gray-700 text-xs font-semibold rounded-xl text-center transition-colors border border-gray-200"
                >
                  View Requirements & Checklist
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Support Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-full bg-[#FFF5EE] text-[#F96400] flex items-center justify-center flex-shrink-0">
              <FileCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#171717]">Need assistance with a different government or educational document?</p>
              <p className="text-xs text-gray-500">We assist with over 30+ services at our Dharampur branch or remotely via WhatsApp.</p>
            </div>
          </div>
          <Link
            to="/services"
            className="px-5 py-2.5 rounded-full bg-black hover:bg-[#F96400] text-white text-xs font-bold transition-colors flex-shrink-0"
          >
            Explore Complete Directory
          </Link>
        </div>

      </div>
    </section>
  );
}
