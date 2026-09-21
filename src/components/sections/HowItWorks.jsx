import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Bring Documents or Send Online',
    desc: 'Walk into our center at College Road, Dharampur, or share your document copies securely via WhatsApp.',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'Verified Application Processing',
    desc: 'Our staff accurately fills the official government or university forms, eliminating common spelling & demographic rejections.',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Acknowledgment & Timely Delivery',
    desc: 'Receive your official acknowledgment receipt, online tracking number, and instant PVC plastic card printing or document copy.',
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400]">
            Simple & Transparent
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight mb-3">
            How Our Facilitation Works.
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Three simple steps to complete your government documents, scholarships, or certificates without confusion.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.35 }}
                className="relative flex flex-col p-8 rounded-2xl bg-[#FAFAFA] border border-gray-200"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-black text-[#F96400]">
                    {step.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#000000]">
                    <Icon size={20} />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#000000] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Contact Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-gray-500 mb-3">
            Have an urgent requirement or question regarding required documents?
          </p>
          <a
            href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20can%20you%20help%20me%20with%20documents?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F96400] hover:text-[#E05A00] transition-colors"
          >
            <span>Ask our team directly on WhatsApp</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
