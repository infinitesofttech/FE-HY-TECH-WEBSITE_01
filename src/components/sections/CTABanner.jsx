import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <div className="w-full py-4 bg-white border-y border-gray-100">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <p className="text-sm font-medium flex items-center gap-2 flex-wrap" style={{ color: '#6B7280' }}>
          <span className="font-bold flex items-center gap-1" style={{ color: '#1E1B2E' }}>
            <Flame size={16} className="text-orange-500" /> Popular
          </span>
          Manage 500+ family services with ease.
          <button className="flex items-center gap-1 font-semibold underline underline-offset-2 ml-1"
            style={{ color: '#7C3AED' }}>
            Explore more services <ArrowRight size={14} />
          </button>
        </p>
      </div>
    </div>
  );
}
