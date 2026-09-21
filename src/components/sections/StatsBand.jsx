import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, UserCheck, Star } from 'lucide-react';

const stats = [
  { icon: Users, value: '2,000+', label: 'Families Served' },
  { icon: BookOpen, value: '15+', label: 'Services Offered' },
  { icon: UserCheck, value: '10+', label: 'Expert Staff' },
  { icon: Star, value: '99.9%', label: 'Satisfaction Rate' },
];

export default function StatsBand() {
  return (
    <section className="w-full py-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 100%)' }}>
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/20">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center py-6 px-4"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5"
                style={{ background: '#1E1B2E' }}>
                <Icon size={26} color="white" />
              </div>
              <span className="text-4xl md:text-5xl font-extrabold text-white mb-2">{value}</span>
              <span className="text-sm text-white/70 font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
