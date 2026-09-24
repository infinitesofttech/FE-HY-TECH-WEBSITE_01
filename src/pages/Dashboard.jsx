import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Plus, Search, Edit2, Trash2, CheckCircle2,
  XCircle, ExternalLink, RefreshCw, LayoutGrid, Eye,
  SlidersHorizontal, Check, AlertTriangle, Layers,
  User, Award, FileText, ArrowRight, Sparkles, Filter
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  getAllServicesForAdmin, 
  toggleServiceStatus, 
  deleteService, 
  resetServicesToDefault 
} from '../utils/serviceUtils';
import { serviceCategories } from '../data/servicesData';
import { getServiceVisual, handleImageFallback } from '../utils/serviceVisuals';
import AdminServiceModal from '../components/services/AdminServiceModal';
import ServiceDetailsModal from '../components/ServiceDetailsModal';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { language } = useLanguage();

  const isAdmin = user?.role === 'Admin' || user?.id?.toLowerCase() === 'admin';

  // State for Admin Services
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);
  const [notification, setNotification] = useState(null);

  // Reload services
  const loadServices = () => {
    const all = getAllServicesForAdmin();
    setServices(all);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const showToast = (msg, type = 'success') => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3500);
  };

  // Filtered services for admin table
  const filteredServices = useMemo(() => {
    let list = services;
    if (selectedCategory !== 'all') {
      list = list.filter(s => s.categoryId === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(s => {
        const titleEn = (s.title?.en || s.rawTitle || s.title || '').toLowerCase();
        const titleGu = (s.title?.gu || s.titleGujarati || '').toLowerCase();
        const slug = (s.slug || '').toLowerCase();
        const cat = (typeof s.category === 'string' ? s.category : (s.category?.en || '')).toLowerCase();
        return titleEn.includes(q) || titleGu.includes(q) || slug.includes(q) || cat.includes(q);
      });
    }
    return list;
  }, [services, selectedCategory, searchQuery]);

  const handleToggle = (id) => {
    const updated = toggleServiceStatus(id);
    loadServices();
    showToast(`Service status updated to ${updated ? 'Active' : 'Inactive'}.`);
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Are you sure you want to delete or hide "${name}"?`)) {
      deleteService(id);
      loadServices();
      showToast(`Service "${name}" removed.`, 'warning');
    }
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all service modifications and return to codebase defaults?')) {
      resetServicesToDefault();
      loadServices();
      showToast('All services reset to codebase defaults.');
    }
  };

  const handleOpenAdd = () => {
    setServiceToEdit(null);
    setIsEditModalOpen(true);
  };

  const handleOpenEdit = (svc) => {
    setServiceToEdit(svc);
    setIsEditModalOpen(true);
  };

  const handleViewDetails = (svc) => {
    setSelectedServiceForModal(svc);
    setIsDetailsModalOpen(true);
  };

  // ─────────────────────────────────────────────────────────────
  // USER DASHBOARD VIEW (If not Admin)
  // ─────────────────────────────────────────────────────────────
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* User Welcome Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#F96400] to-orange-400 text-white flex items-center justify-center font-black text-2xl shadow-lg">
                {user?.name ? user.name[0].toUpperCase() : 'U'}
              </div>
              <div>
                <span className="text-xs font-bold text-[#F96400] uppercase tracking-wider">
                  Verified Family Account
                </span>
                <h2 className="text-2xl font-black text-neutral-900 dark:text-neutral-100">
                  Welcome, {user?.name || user?.id || 'Citizen'}!
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500">
                  Family ID: <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">HY-DHP-{(user?.id || '84920').slice(-5)}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/services"
                className="px-5 py-2.5 bg-[#F96400] hover:bg-[#e05a00] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors inline-flex items-center gap-2"
              >
                <span>Browse 32+ Services</span>
                <ArrowRight size={15} />
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2.5 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-red-500 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* User Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F96400] flex items-center justify-center mb-3">
                <FileText size={20} />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">Saved Documents</h4>
              <p className="text-xs text-neutral-500 mt-1">Zero-redundancy digital document vault.</p>
              <p className="mt-3 text-2xl font-black text-neutral-900 dark:text-white">4 Files</p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3">
                <Award size={20} />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">Reward Wallet</h4>
              <p className="text-xs text-neutral-500 mt-1">Earn points on every application filed.</p>
              <p className="mt-3 text-2xl font-black text-emerald-600">₹240.00</p>
            </div>

            <div className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                <Sparkles size={20} />
              </div>
              <h4 className="text-base font-bold text-neutral-900 dark:text-neutral-100">Active Requests</h4>
              <p className="text-xs text-neutral-500 mt-1">Live updates from Dharampur desk.</p>
              <p className="mt-3 text-2xl font-black text-blue-600">1 In Progress</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // ADMIN DASHBOARD VIEW
  // ─────────────────────────────────────────────────────────────
  const totalCount = services.length;
  const activeCount = services.filter(s => s.isActive !== false).length;
  const inactiveCount = totalCount - activeCount;

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Floating Notification Toast */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`fixed top-20 right-6 z-50 px-4 py-3 rounded-2xl shadow-xl border text-sm font-semibold flex items-center gap-2 ${
                notification.type === 'warning'
                  ? 'bg-amber-50 text-amber-900 border-amber-300'
                  : 'bg-emerald-50 text-emerald-900 border-emerald-300'
              }`}
            >
              <CheckCircle2 size={18} className={notification.type === 'warning' ? 'text-amber-600' : 'text-emerald-600'} />
              <span>{notification.msg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Admin Header ─────────────────────────────────── */}
        <div className="bg-[#171717] rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F96400]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F96400]/20 border border-[#F96400]/40 text-[#F96400] text-xs font-bold uppercase tracking-wider mb-2">
                <Shield size={14} />
                <span>HY-TECH Hub Administrator</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
                Complete Dynamic Service Management
              </h1>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Add, edit, reorder, and manage all government welfare & citizen services across Dharampur center.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleOpenAdd}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#F96400] hover:bg-[#e05a00] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition-all"
              >
                <Plus size={16} />
                <span>Add New Service</span>
              </button>

              <button
                type="button"
                onClick={handleResetDefaults}
                title="Reset all modifications back to defaults"
                className="p-2.5 bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white rounded-xl border border-white/10 transition-colors"
              >
                <RefreshCw size={16} />
              </button>

              <Link
                to="/services"
                target="_blank"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-white/10 hover:bg-white/20 text-neutral-200 text-xs sm:text-sm font-semibold rounded-xl border border-white/10 transition-colors"
              >
                <span>Live View</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
            <div>
              <span className="text-xs text-neutral-400 font-medium">Total Services</span>
              <p className="text-2xl sm:text-3xl font-black text-white">{totalCount}</p>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-medium">Active Publicly</span>
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">{activeCount}</p>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-medium">Inactive / Drafts</span>
              <p className="text-2xl sm:text-3xl font-black text-amber-400">{inactiveCount}</p>
            </div>
            <div>
              <span className="text-xs text-neutral-400 font-medium">Service Categories</span>
              <p className="text-2xl sm:text-3xl font-black text-blue-400">{serviceCategories.length}</p>
            </div>
          </div>
        </div>

        {/* ── Search & Filter Controls ──────────────────────── */}
        <div className="bg-white dark:bg-neutral-900 p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3.5 top-3 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, slug, or document..."
              className="w-full pl-10 pr-4 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 text-neutral-800 dark:text-neutral-100"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-neutral-400 hover:text-neutral-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Filter size={16} className="text-neutral-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3.5 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
            >
              <option value="all">All Categories ({totalCount})</option>
              {serviceCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.title.en} ({services.filter(s => s.categoryId === cat.id).length})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* ── Services Management Table ─────────────────────── */}
        <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-neutral-50 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400 uppercase text-[11px] font-bold tracking-wider border-b border-neutral-200 dark:border-neutral-800">
                <tr>
                  <th className="py-4 px-4 sm:px-6">#</th>
                  <th className="py-4 px-4">Service Details</th>
                  <th className="py-4 px-4">Category</th>
                  <th className="py-4 px-4">Operations</th>
                  <th className="py-4 px-4 text-center">Status</th>
                  <th className="py-4 px-4 sm:px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                {filteredServices.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="py-12 text-center text-neutral-400">
                      No services match your search or filter.
                    </td>
                  </tr>
                ) : (
                  filteredServices.map((svc, idx) => {
                    const titleEn = svc.title?.en || svc.rawTitle || svc.title;
                    const titleGu = svc.title?.gu || svc.titleGujarati;
                    const visualUrl = svc.image || getServiceVisual(svc.slug, svc.categoryId);
                    const opKeys = svc.operations ? Object.keys(svc.operations) : [];

                    return (
                      <tr
                        key={svc.id || svc.slug || idx}
                        className="hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40 transition-colors"
                      >
                        {/* Display Order / Number */}
                        <td className="py-4 px-4 sm:px-6 font-mono font-bold text-neutral-400">
                          {svc.displayOrder || svc.number || idx + 1}
                        </td>

                        {/* Service Thumbnail & Title */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={visualUrl}
                              alt={titleEn}
                              onError={(e) => handleImageFallback(e, svc.categoryId)}
                              className="w-12 h-12 rounded-xl object-cover bg-neutral-100 border border-neutral-200 dark:border-neutral-700 flex-shrink-0"
                            />
                            <div>
                              <p className="font-bold text-neutral-900 dark:text-neutral-100 leading-snug">
                                {titleEn}
                              </p>
                              {titleGu && (
                                <p className="text-[11px] font-medium text-neutral-500 font-gujarati">
                                  {titleGu}
                                </p>
                              )}
                              <p className="text-[10px] text-neutral-400 font-mono mt-0.5">
                                /{svc.slug}
                              </p>
                            </div>
                          </div>
                        </td>

                        {/* Category */}
                        <td className="py-4 px-4">
                          <span className="inline-block px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-semibold">
                            {typeof svc.category === 'string' ? svc.category : (svc.category?.en || svc.categoryId)}
                          </span>
                        </td>

                        {/* Operations Available */}
                        <td className="py-4 px-4">
                          <div className="flex flex-wrap gap-1 max-w-[180px]">
                            {opKeys.length > 0 ? (
                              opKeys.map(k => (
                                <span
                                  key={k}
                                  className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                                >
                                  {k.replace('_', ' ')}
                                </span>
                              ))
                            ) : (
                              <span className="text-[10px] text-neutral-400">Standard</span>
                            )}
                          </div>
                        </td>

                        {/* Status Toggle */}
                        <td className="py-4 px-4 text-center">
                          <button
                            type="button"
                            onClick={() => handleToggle(svc.id)}
                            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                              svc.isActive !== false
                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400'
                                : 'bg-neutral-100 text-neutral-500 border border-neutral-300 dark:bg-neutral-800 dark:text-neutral-400'
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                svc.isActive !== false ? 'bg-emerald-500 animate-pulse' : 'bg-neutral-400'
                              }`}
                            />
                            <span>{svc.isActive !== false ? 'Active' : 'Inactive'}</span>
                          </button>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-4 sm:px-6 text-right">
                          <div className="inline-flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => handleViewDetails(svc)}
                              title="Preview Details Modal"
                              className="p-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-white rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleOpenEdit(svc)}
                              title="Edit Service"
                              className="p-2 text-blue-600 hover:text-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-colors"
                            >
                              <Edit2 size={16} />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDelete(svc.id, titleEn)}
                              title="Delete Service"
                              className="p-2 text-red-500 hover:text-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ── Edit / Add Service Modal ──────────────────────── */}
      <AdminServiceModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        serviceToEdit={serviceToEdit}
        onServiceSaved={(saved) => {
          loadServices();
          showToast(`Service "${saved.title}" saved successfully!`);
        }}
      />

      {/* ── Detail Preview Modal ──────────────────────────── */}
      <ServiceDetailsModal
        isOpen={isDetailsModalOpen}
        onClose={() => setIsDetailsModalOpen(false)}
        service={selectedServiceForModal}
      />
    </div>
  );
}
