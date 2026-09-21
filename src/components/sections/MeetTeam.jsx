import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Star, GraduationCap, User } from 'lucide-react';
import { team } from '../../data/team';

export default function MeetTeam() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
              style={{ background: '#FDEDE3', color: '#7C3AED' }}>
              <GraduationCap size={14} className="mr-1 inline" /> MEET OUR TEAM
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight" style={{ color: '#1E1B2E' }}>
              Meet Our Expert<br />Staff Members.
            </h2>
          </div>
          <div className="flex gap-3 mt-6 md:mt-0">
            <button onClick={() => setActive((a) => Math.max(0, a - 1))}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#E5E7EB' }}>
              <ChevronLeft size={18} />
            </button>
            <button onClick={() => setActive((a) => Math.min(team.length - 1, a + 1))}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#E5E7EB' }}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 text-center"
              style={{ background: member.bg }}
            >
              {/* Avatar with ring */}
              <div className="relative inline-block mb-5">
                <div className="w-28 h-28 rounded-full flex items-center justify-center mx-auto"
                  style={{ background: member.ringColor, padding: '3px' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center"
                    style={{ background: member.bg }}>
                    <User size={48} style={{ color: '#7C3AED' }} />
                  </div>
                </div>
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold text-white"
                  style={{ background: '#7C3AED', whiteSpace: 'nowrap' }}>
                  Top Rated
                </span>
              </div>

              <h3 className="text-xl font-extrabold mb-1" style={{ color: '#1E1B2E' }}>{member.name}</h3>
              <p className="text-sm mb-6" style={{ color: '#6B7280' }}>{member.role}</p>

              {/* Stats */}
              <div className="flex justify-around py-4 border-y mb-6" style={{ borderColor: 'rgba(0,0,0,0.08)' }}>
                <div>
                  <p className="font-extrabold text-lg" style={{ color: '#1E1B2E' }}>{member.services}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>Services</p>
                </div>
                <div>
                  <p className="font-extrabold text-lg" style={{ color: '#1E1B2E' }}>{member.families}</p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>Families</p>
                </div>
                <div>
                  <p className="font-extrabold text-lg flex items-center gap-1 justify-center">
                    <Star size={13} fill="#F97316" stroke="none" />
                    <span style={{ color: '#1E1B2E' }}>{member.rating}</span>
                  </p>
                  <p className="text-xs" style={{ color: '#6B7280' }}>Rating</p>
                </div>
              </div>

              <button
                className="w-full py-3 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2"
                style={{ background: '#7C3AED' }}
                onMouseEnter={e => e.currentTarget.style.background = '#6D28D9'}
                onMouseLeave={e => e.currentTarget.style.background = '#7C3AED'}
              >
                See Profile <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
