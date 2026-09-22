import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Monitor, GraduationCap, Briefcase, Printer, Laptop, Globe, FolderCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fetchCategories } from '../../api/servicesApi';
import { useLanguage } from '../../context/LanguageContext';

const IconMap = {
  Monitor: Monitor,
  GraduationCap: GraduationCap,
  Briefcase: Briefcase,
  Printer: Printer,
  Laptop: Laptop,
  Globe: Globe,
};

export default function BrowseCategories() {
  const { language } = useLanguage();
  const t = (obj) => obj?.[language] || obj?.['en'] || '';
  
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    fetchCategories().then(setCategories).catch(console.error);
  }, []);

  return (
    <section className="w-full py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-[#FFF5EE] text-[#F96400] border border-[#F96400]/20">
              <FolderCheck size={13} /> Specialized Service Pillars
            </span>
            <motion.div
              className="perspective-1000 cursor-default"
              whileHover={{ scale: 1.01, rotateX: 2, rotateY: -1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#000000] tracking-tight mb-2 text-3d-modern">
                Everything Your Family & Career Needs.
              </h2>
            </motion.div>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl">
              From essential government identification documents to college admissions and certified computer education, explore our organized service departments in Dharampur.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 1 }}
            className="mt-6 md:mt-0 flex-shrink-0"
          >
            <Link
              to="/services"
              className="btn-3d-circle inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm bg-black hover:bg-[#F96400] text-white transition-all shadow-md"
            >
              View All Services <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>

        {/* 6-Category Premium Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {categories.map((cat, i) => {
            const Icon = IconMap[cat.icon] || Monitor;
            
            // Define pastel color palettes based on category id
            const colorPalettes = {
              'online-services': { bg: 'bg-[#F1EDFD]', text: 'text-[#6A47D4]', border: 'border-[#E0D4FC]' },
              'education-services': { bg: 'bg-[#EAF3FA]', text: 'text-[#2B7EC1]', border: 'border-[#D4E6F6]' },
              'job-services': { bg: 'bg-[#EBFAEE]', text: 'text-[#2B8B5B]', border: 'border-[#D1F2D9]' },
              'printing-services': { bg: 'bg-[#FEF1EE]', text: 'text-[#DC5A2D]', border: 'border-[#FCE0D7]' },
              'computer-courses': { bg: 'bg-[#FCECF3]', text: 'text-[#C23C73]', border: 'border-[#F7D4E3]' },
              'other-services': { bg: 'bg-[#FFF6E9]', text: 'text-[#CD8B20]', border: 'border-[#FCE8CC]' },
            };
            const palette = colorPalettes[cat.id] || { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-200' };

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.35 }}
                className={`w-full h-[280px] sm:h-[300px] rounded-[24px] ${palette.bg} ${palette.border} border p-6 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group`}
              >
                {/* Top section: Icon */}
                <div>
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
                    <Icon size={26} className={palette.text} />
                  </div>
                  
                  {/* Title and Count */}
                  <h3 className="font-bold text-[#171717] text-xl md:text-2xl mb-1">
                    {t(cat.title)}
                  </h3>
                  <p className="text-gray-500 text-sm font-medium">
                    {cat.services?.length || cat.count} specialized services
                  </p>
                </div>

                {/* Bottom section: Explore Link */}
                <Link
                  to={`/services/${cat.slug}`}
                  className="flex items-center justify-between w-full mt-auto group/btn cursor-pointer"
                >
                  <span className="font-bold text-[13px] text-[#171717] group-hover/btn:text-black transition-colors">
                    Explore Services
                  </span>
                  <motion.div 
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center btn-3d-circle border border-gray-100"
                  >
                    <ArrowRight size={16} className={palette.text} />
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
