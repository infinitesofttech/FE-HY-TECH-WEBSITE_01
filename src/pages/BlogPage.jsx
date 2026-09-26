import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Search, Clock, Calendar, ArrowRight, X, 
  Share2, MessageCircle, Sparkles, Filter, ChevronRight 
} from 'lucide-react';
import { blogs } from '../data/blogs';
import { SITE_CONFIG } from '../config/siteConfig';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Identity & KYC', 'Family Vault', 'Education & Admissions', 'Government Welfare', 'Citizen Loyalty'];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((b) => {
      const matchesCategory = selectedCategory === 'All' || b.category === selectedCategory || b.tag === selectedCategory;
      const matchesSearch = 
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.tag.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-neutral-950 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ─── Hero Header ─── */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-50 dark:bg-orange-950/40 text-[#F96400] border border-orange-200/60 dark:border-orange-900/50">
            <Sparkles size={13} /> HY-TECH Knowledge & Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight leading-tight">
            Government Portals, Documents & Tech Guides
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Expert step-by-step documentation walkthroughs, university admission procedures, and online service updates for citizens of Dharampur.
          </p>

          {/* Search Bar */}
          <div className="pt-4 max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides (e.g. Aadhaar, GCAS, Ayushman, Family ID)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#F96400] text-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#F96400] text-white shadow-md'
                    : 'bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Articles Grid ─── */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8">
            <BookOpen size={40} className="mx-auto text-neutral-300 mb-3" />
            <p className="text-lg font-bold text-neutral-700 dark:text-neutral-300">No articles found</p>
            <p className="text-sm text-neutral-400 mt-1">Try searching with a different keyword or reset filters.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="mt-4 px-4 py-2 bg-orange-50 text-[#F96400] rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((b) => (
              <motion.article
                key={b.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveArticle(b)}
                className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group"
              >
                {/* Banner Thumbnail */}
                <div 
                  className="h-44 p-6 flex flex-col justify-between text-white relative overflow-hidden"
                  style={{ background: b.bg || '#1E1B2E' }}
                >
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-white/20 backdrop-blur-md border border-white/20">
                      {b.tag}
                    </span>
                    <span className="text-3xl filter drop-shadow-md">{b.emoji}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/80 z-10">
                    <span className="flex items-center gap-1"><Calendar size={13} /> {b.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={13} /> {b.readTime || '3 min'}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h2 className="text-lg font-extrabold text-neutral-900 dark:text-neutral-100 group-hover:text-[#F96400] transition-colors line-clamp-2">
                      {b.title}
                    </h2>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 line-clamp-3 leading-relaxed">
                      {b.excerpt}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-800 text-xs font-bold text-[#F96400]">
                    <span>Read Full Guide</span>
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* ─── Bottom CTA Box ─── */}
        <div className="bg-[#171717] rounded-3xl p-8 sm:p-10 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black">Need direct offline assistance in Dharampur?</h3>
            <p className="text-sm text-neutral-400">
              Our experts can prepare your official documents, scholarships, or college choice forms on the spot.
            </p>
          </div>
          <a
            href={SITE_CONFIG.getWhatsAppUrl('Hello HY-TECH Hub, I need assistance with an official application.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#F96400] hover:bg-[#E05A00] text-white font-bold rounded-2xl text-sm transition-all flex items-center gap-2 shadow-lg flex-shrink-0"
          >
            <MessageCircle size={18} />
            <span>Chat with Helpdesk</span>
          </a>
        </div>

      </div>

      {/* ─── Article Reader Modal ─── */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-neutral-200 dark:border-neutral-800 shadow-2xl relative"
            >
              {/* Modal Header */}
              <div 
                className="p-6 text-white relative"
                style={{ background: activeArticle.bg || '#1E1B2E' }}
              >
                <button
                  onClick={() => setActiveArticle(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors"
                >
                  <X size={18} />
                </button>
                <span className="text-4xl mb-3 block">{activeArticle.emoji}</span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-white/20 border border-white/20">
                  {activeArticle.tag}
                </span>
                <h2 className="text-xl sm:text-2xl font-black mt-2 leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-xs text-white/80 mt-3">
                  <span>{activeArticle.author || 'HY-TECH Desk'}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime || '3 min read'}</span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="prose dark:prose-invert max-w-none text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed whitespace-pre-line">
                  {activeArticle.content}
                </div>

                {/* Helpdesk Action Bar */}
                <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-neutral-500">
                    Have questions about this guide? Consult our certified desk.
                  </div>
                  <a
                    href={SITE_CONFIG.getWhatsAppUrl(`Hello HY-TECH Hub, I was reading your guide on "${activeArticle.title}" and have a query.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#F96400] text-white rounded-xl text-xs font-bold hover:bg-[#E05A00] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle size={15} />
                    <span>Ask on WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
