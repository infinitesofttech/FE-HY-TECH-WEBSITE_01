import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "What documents do I need for an Aadhaar mobile link or address update?",
    answer: "For mobile number linking, no document is needed — only your physical presence for biometric verification and your mobile phone to receive the OTP. For address update, you need valid proof of address (such as Ration card, Voter ID, Bank passbook, or Electricity bill) and your Aadhaar-registered mobile number."
  },
  {
    question: "How long does a new PAN card or correction take?",
    answer: "A digital e-PAN is typically generated within 2 to 3 working days and sent to your email. The physical laminated PAN card is delivered by India Post directly to your residential address within 7 to 10 working days."
  },
  {
    question: "Do you help with GCAS registration and Shree Vanraj College admissions?",
    answer: "Yes, absolutely. We assist students from Dharampur and surrounding areas through the entire GCAS (Gujarat Common Admission Services) process, choice filling, document upload, fee payment, and scholarship applications (Digital Gujarat)."
  },
  {
    question: "Are your computer courses (CCC, Tally, Typing) certified for government jobs?",
    answer: "Yes! Our Course on Computer Concepts (CCC) course covers the official syllabus required for Gujarat state government recruitment examinations. We also provide practical Tally Prime with GST accounting and daily Gujarati/English typing practice."
  },
  {
    question: "Can I send documents online via WhatsApp, or do I have to visit in person?",
    answer: "For services that do not require live biometric capture (such as PAN card application, scholarship forms, GCAS registration, xerox, ticket bookings), you can send clear photos/PDFs directly on our WhatsApp (+91 72260 30701). For Aadhaar biometric updates, visiting our center at College Road is required."
  },
  {
    question: "Where is the HY-Tech center located and what are the timings?",
    answer: "We are located at College Road,Kanurbarda,Old Jakatnaka, Dharampur -396050. We are open Monday through Saturday from 9:00 AM to 7:00 PM. We remain closed on Sundays."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400]">
            <HelpCircle size={13} /> Common Queries
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight mb-3">
            Frequently Asked Questions.
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Clear, honest answers about document requirements, processing times, and how we assist you.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? 'border-[#F96400] bg-[#FFF5EE]/20 shadow-sm' : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                >
                  <h3 className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-[#F96400]' : 'text-[#171717]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-[#F96400] text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-gray-600 leading-relaxed border-t border-orange-100/60 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-[#FAFAFA] border border-gray-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm font-bold text-[#000000]">Still have a specific question about your documents?</p>
            <p className="text-xs text-gray-500">Our Dharampur staff is ready to help you directly.</p>
          </div>
          <a
            href="https://wa.me/917226030701?text=Hello%20HY-Tech,%20I%20have%20a%20question%20regarding%20documents."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F96400] hover:bg-[#E05A00] text-white text-xs font-bold transition-colors shadow-sm flex-shrink-0"
          >
            <MessageCircle size={15} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
