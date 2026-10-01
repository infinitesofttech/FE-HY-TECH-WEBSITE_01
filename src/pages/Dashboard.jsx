import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Plus, Search, Edit2, Trash2, CheckCircle2,
  XCircle, ExternalLink, RefreshCw, LayoutGrid, Eye,
  SlidersHorizontal, Check, AlertTriangle, Layers,
  User, Award, FileText, ArrowRight, Sparkles, Filter,
  Download, Upload, Clock, Phone, MessageCircle, Copy,
  AlertCircle, ChevronRight, Inbox, FolderOpen, ArrowUpRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { 
  getAllServicesForAdmin, 
  toggleServiceStatus, 
  deleteService, 
  resetServicesToDefault,
  exportServicesBackup,
  importServicesBackup
} from '../utils/serviceUtils';
import {
  getSubmissions,
  updateSubmissionStatus,
  deleteSubmission
} from '../utils/submissionUtils';
import { SITE_CONFIG } from '../config/siteConfig';
import { serviceCategories } from '../data/servicesData';
import { getServiceVisual, handleImageFallback } from '../utils/serviceVisuals';
import AdminServiceModal from '../components/services/AdminServiceModal';
import ServiceDetailsModal from '../components/ServiceDetailsModal';
import { Link } from 'react-router-dom';

const TRACKING_STAGES = [
  { id: 1, titleEn: 'Application Received', titleGu: 'અરજી સ્વીકારાઈ', desc: 'Logged at Center Desk' },
  { id: 2, titleEn: 'Document Verification', titleGu: 'દસ્તાવેજ ચકાસણી', desc: 'Proof & Eligibility Checked' },
  { id: 3, titleEn: 'Govt Portal Processing', titleGu: 'પોર્ટલ પ્રક્રિયા', desc: 'State / Central Portal Entry' },
  { id: 4, titleEn: 'Completed & Ready', titleGu: 'મંજૂર / તૈયાર', desc: 'Certificate / Card Dispatched' }
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const { language } = useLanguage();

  const isAdmin = user?.role === 'Admin' || user?.id?.toLowerCase() === 'admin';

  // State for Admin Services Catalog
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);
  const [notification, setNotification] = useState(null);

  // State for Applications (both Citizen and Admin)
  const [applications, setApplications] = useState([]);
  const [userAppFilter, setUserAppFilter] = useState('all');
  const [userSearchQuery, setUserSearchQuery] = useState('');
  const [adminTab, setAdminTab] = useState('services'); // 'services' | 'applications'
  const [adminAppStatusFilter, setAdminAppStatusFilter] = useState('all');
  const [adminAppSearch, setAdminAppSearch] = useState('');
  const [copiedAppId, setCopiedAppId] = useState(null);
  const [savedDocsCount, setSavedDocsCount] = useState(4);

  // Reload services
  const loadServices = () => {
    const all = getAllServicesForAdmin();
    setServices(all);
  };

  // Reload applications
  const loadApplications = () => {
    const list = getSubmissions('application');
    setApplications(list);
    try {
      const rawDocs = localStorage.getItem('hytech_user_documents');
      if (rawDocs) {
        const parsed = JSON.parse(rawDocs);
        if (Array.isArray(parsed)) setSavedDocsCount(parsed.length);
      }
    } catch (e) {
      // ignore
    }
  };

  useEffect(() => {
    loadServices();
    loadApplications();

    const handleUpdate = () => {
      loadApplications();
    };

    window.addEventListener('hytech_submissions_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('hytech_submissions_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
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

  // Citizen filtered applications
  const citizenFilteredApps = useMemo(() => {
    let list = applications;

    // Filter by status tab
    if (userAppFilter !== 'all') {
      list = list.filter(app => app.status === userAppFilter);
    }

    // Filter by search query
    if (userSearchQuery.trim()) {
      const q = userSearchQuery.toLowerCase().trim();
      list = list.filter(app => {
        const idMatch = (app.id || '').toLowerCase().includes(q);
        const nameMatch = (app.service || '').toLowerCase().includes(q);
        const catMatch = (app.category || '').toLowerCase().includes(q);
        const applicantMatch = (app.name || '').toLowerCase().includes(q);
        const msgMatch = (app.message || '').toLowerCase().includes(q);
        return idMatch || nameMatch || catMatch || applicantMatch || msgMatch;
      });
    }

    return list;
  }, [applications, userAppFilter, userSearchQuery]);

  // Admin filtered applications
  const adminFilteredApps = useMemo(() => {
    let list = applications;

    if (adminAppStatusFilter !== 'all') {
      list = list.filter(app => app.status === adminAppStatusFilter);
    }

    if (adminAppSearch.trim()) {
      const q = adminAppSearch.toLowerCase().trim();
      list = list.filter(app => {
        const idMatch = (app.id || '').toLowerCase().includes(q);
        const nameMatch = (app.service || '').toLowerCase().includes(q);
        const catMatch = (app.category || '').toLowerCase().includes(q);
        const applicantMatch = (app.name || '').toLowerCase().includes(q);
        const mobileMatch = (app.mobile || '').includes(q);
        return idMatch || nameMatch || catMatch || applicantMatch || mobileMatch;
      });
    }

    return list;
  }, [applications, adminAppStatusFilter, adminAppSearch]);

  const handleCopyId = (id) => {
    if (!id) return;
    navigator.clipboard.writeText(id);
    setCopiedAppId(id);
    showToast(`Copied Application ID: ${id}`);
    setTimeout(() => setCopiedAppId(null), 2000);
  };

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

  const handleExport = () => {
    try {
      exportServicesBackup();
      showToast('Catalog backup JSON downloaded successfully.');
    } catch (e) {
      showToast('Failed to export backup.', 'warning');
    }
  };

  const handleImportFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        importServicesBackup(parsed);
        loadServices();
        showToast('Services backup imported successfully!');
      } catch (err) {
        showToast('Invalid backup file. Please provide a valid JSON file.', 'warning');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
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

  const handleViewApplicationService = (app) => {
    const match = services.find(
      s => (s.slug && app.serviceSlug && s.slug === app.serviceSlug) ||
           (s.title?.en && s.title.en.toLowerCase() === (app.service || '').toLowerCase()) ||
           (s.rawTitle && s.rawTitle.toLowerCase() === (app.service || '').toLowerCase())
    );
    if (match) {
      setSelectedServiceForModal(match);
      setIsDetailsModalOpen(true);
    } else {
      setSelectedServiceForModal({
        title: { en: app.service, gu: app.service },
        category: app.category,
        overview: `Official government citizen service: ${app.service}. Applied at HY-Tech Dharampur Desk. Reference ID: ${app.id}.`,
        slug: app.serviceSlug || 'service'
      });
      setIsDetailsModalOpen(true);
    }
  };

  const handleWithdrawApplication = (id, serviceName) => {
    if (window.confirm(`Are you sure you want to withdraw your application for "${serviceName}"?`)) {
      deleteSubmission(id, 'application');
      loadApplications();
      showToast(`Application ${id} has been withdrawn.`, 'warning');
    }
  };

  const handleAdminStatusChange = (id, newStatus) => {
    updateSubmissionStatus(id, newStatus, 'application');
    loadApplications();
    showToast(`Application ${id} updated to ${newStatus.replace('_', ' ').toUpperCase()}`);
  };

  const handleAdminDeleteApp = (id, name) => {
    if (window.confirm(`Delete application record ${id} (${name})?`)) {
      deleteSubmission(id, 'application');
      loadApplications();
      showToast(`Application ${id} removed.`, 'warning');
    }
  };

  const formatDate = (isoString) => {
    if (!isoString) return '';
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return isoString;
    }
  };

  const getStageStep = (status) => {
    if (status === 'completed') return 4;
    if (status === 'in_progress') return 3;
    return 2; // 'received' is active on step 2 (verification)
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            <CheckCircle2 size={13} className="text-emerald-500" />
            <span>Completed & Approved / મંજૂર</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span>Under Verification / પ્રક્રિયા હેઠળ</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span>Received at Desk / સ્વીકારેલ</span>
          </span>
        );
    }
  };

  // ─────────────────────────────────────────────────────────────
  // CITIZEN USER DASHBOARD VIEW (If not Admin)
  // ─────────────────────────────────────────────────────────────
  if (!isAdmin) {
    const receivedCount = applications.filter(a => a.status === 'received').length;
    const inProgressCount = applications.filter(a => a.status === 'in_progress').length;
    const completedCount = applications.filter(a => a.status === 'completed').length;
    const totalApplied = applications.length;

    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Floating Toast Notification */}
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

          {/* User Welcome Banner Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200/90 dark:border-neutral-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#F96400] to-orange-400 text-white flex items-center justify-center font-black text-2xl sm:text-3xl shadow-lg shrink-0">
                {user?.name ? user.name[0].toUpperCase() : 'U'}
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-800 text-[#F96400] text-[11px] font-black uppercase tracking-wider mb-1">
                  <Shield size={12} />
                  <span>Verified Citizen Account / પ્રમાણિત નાગરિક ખાતું</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900 dark:text-neutral-100 tracking-tight">
                  Welcome, {user?.name || user?.id || 'Citizen'}!
                </h2>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                  Citizen Mobile / Family ID: <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">{user?.id || '9876543210'}</span> • Dharampur Hub
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                to="/services"
                className="flex-1 md:flex-initial px-5 py-2.5 bg-[#F96400] hover:bg-[#e05a00] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>Browse 32+ Services</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                to="/documents"
                className="px-4 py-2.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-xl text-xs sm:text-sm font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <FolderOpen size={15} />
                <span>My Documents</span>
              </Link>
              <button
                onClick={logout}
                className="px-4 py-2.5 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:text-red-500 rounded-xl text-xs sm:text-sm font-semibold transition-colors"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Citizen Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {/* Total Applied Services */}
            <div className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-950/40 text-[#F96400] flex items-center justify-center mb-3">
                <Layers size={20} />
              </div>
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Applied Services</span>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white">
                {totalApplied}
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">મારી કરેલી સેવા અરજીઓ</p>
            </div>

            {/* In Verification / Processing */}
            <div className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center mb-3">
                <Clock size={20} />
              </div>
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">In Progress</span>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-blue-600">
                {receivedCount + inProgressCount}
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">ચકાસણી & પ્રક્રિયા હેઠળ</p>
            </div>

            {/* Completed */}
            <div className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mb-3">
                <CheckCircle2 size={20} />
              </div>
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Completed</span>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-emerald-600">
                {completedCount}
              </p>
              <p className="text-[11px] text-neutral-400 mt-0.5">સફળતાપૂર્વક પૂર્ણ / તૈયાર</p>
            </div>

            {/* Document Vault */}
            <Link
              to="/documents"
              className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs hover:border-[#F96400]/50 transition-colors group block"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <FileText size={20} />
              </div>
              <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">Saved Documents</span>
              <p className="mt-1 text-2xl sm:text-3xl font-black text-purple-600">
                {savedDocsCount} Files
              </p>
              <p className="text-[11px] text-[#F96400] font-semibold mt-0.5 flex items-center gap-1">
                <span>Open Vault</span>
                <ChevronRight size={12} />
              </p>
            </Link>
          </div>

          {/* ─────────────────────────────────────────────────────────────
              MY APPLIED SERVICES & TRACKING SECTION
              ───────────────────────────────────────────────────────────── */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-neutral-200/90 dark:border-neutral-800 shadow-sm space-y-6">
              
              {/* Section Header & Subtitle */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-100 dark:border-neutral-800 pb-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/40 text-[#F96400] text-xs font-bold uppercase tracking-wider mb-1.5">
                    <Sparkles size={13} />
                    <span>Real-Time Center Tracking / લાઈવ ટ્રેકિંગ</span>
                  </div>
                  <h3 className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                    My Applied Services & Tracking (મારી કરેલી અરજીઓ)
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-2xl">
                    Track the live status of all online government and citizen welfare services you have applied for at HY-Tech Dharampur Center.
                  </p>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#F96400] hover:bg-[#e05a00] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors self-start md:self-auto shrink-0"
                >
                  <Plus size={15} />
                  <span>Apply for Another Service</span>
                </Link>
              </div>

              {/* Filter Tabs & Search Bar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {/* Status Filter Buttons */}
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    onClick={() => setUserAppFilter('all')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      userAppFilter === 'all'
                        ? 'bg-[#171717] text-white dark:bg-white dark:text-black shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                    }`}
                  >
                    All ({totalApplied})
                  </button>
                  <button
                    onClick={() => setUserAppFilter('received')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      userAppFilter === 'received'
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                    }`}
                  >
                    Received ({receivedCount})
                  </button>
                  <button
                    onClick={() => setUserAppFilter('in_progress')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      userAppFilter === 'in_progress'
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                    }`}
                  >
                    In Verification ({inProgressCount})
                  </button>
                  <button
                    onClick={() => setUserAppFilter('completed')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      userAppFilter === 'completed'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200'
                    }`}
                  >
                    Completed ({completedCount})
                  </button>
                </div>

                {/* Instant Search Bar */}
                <div className="relative w-full sm:w-72">
                  <Search size={16} className="absolute left-3.5 top-3 text-neutral-400" />
                  <input
                    type="text"
                    value={userSearchQuery}
                    onChange={(e) => setUserSearchQuery(e.target.value)}
                    placeholder="Search by service or APP ID..."
                    className="w-full pl-9 pr-8 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 text-neutral-800 dark:text-neutral-100"
                  />
                  {userSearchQuery && (
                    <button
                      onClick={() => setUserSearchQuery('')}
                      className="absolute right-2.5 top-2.5 text-xs text-neutral-400 hover:text-neutral-700"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Applications List */}
              {citizenFilteredApps.length === 0 ? (
                <div className="text-center py-16 px-4 bg-neutral-50/70 dark:bg-neutral-800/40 rounded-3xl border border-dashed border-neutral-300 dark:border-neutral-700 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 dark:bg-orange-950/40 text-[#F96400] flex items-center justify-center mx-auto">
                    <Inbox size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-black text-neutral-900 dark:text-neutral-100">
                      {userSearchQuery || userAppFilter !== 'all'
                        ? 'No Matching Applications'
                        : 'No Services Applied Yet'}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mt-1">
                      {userSearchQuery || userAppFilter !== 'all'
                        ? 'No applied services match your search or active filter. Try resetting your query.'
                        : 'Whenever you apply for any government service (PAN Card, Ration Card, Ayushman, Caste Certificate, etc.), your application and live tracking will appear right here.'}
                    </p>
                  </div>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#F96400] hover:bg-[#e05a00] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors"
                  >
                    <span>Browse 32+ Services & Apply Now</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {citizenFilteredApps.map((app) => {
                    const currentStep = getStageStep(app.status);
                    const visualUrl = getServiceVisual(app.serviceSlug, app.category);
                    const isCopied = copiedAppId === app.id;

                    const whatsappInquiryUrl = SITE_CONFIG.getWhatsAppUrl(
                      `Hello HY-TECH Hub Dharampur,\nI am checking the status of my Application:\n• Reference ID: ${app.id}\n• Service: ${app.service}\n• Applicant: ${app.name}\n• Mobile: +91 ${app.mobile}\nPlease share the current status update. Thank you!`
                    );

                    return (
                      <motion.div
                        key={app.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-neutral-50/70 dark:bg-neutral-800/50 rounded-3xl border border-neutral-200/90 dark:border-neutral-700/80 p-5 sm:p-6 space-y-5 hover:border-[#F96400]/40 transition-all shadow-xs"
                      >
                        {/* Top Card Bar: App ID, Date & Status */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-200/70 dark:border-neutral-700/70 pb-4">
                          <div className="flex flex-wrap items-center gap-2.5">
                            <span className="text-xs font-mono font-black px-3 py-1 rounded-xl bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-xs flex items-center gap-1.5">
                              <span>{app.id}</span>
                              <button
                                onClick={() => handleCopyId(app.id)}
                                title="Copy Reference ID"
                                className="text-neutral-400 hover:text-white dark:hover:text-black transition-colors"
                              >
                                {isCopied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                              </button>
                            </span>
                            {isCopied && (
                              <span className="text-[11px] font-bold text-emerald-600">Copied!</span>
                            )}
                            <span className="text-neutral-300 dark:text-neutral-600">•</span>
                            <span className="text-xs text-neutral-500 font-medium">
                              Applied on: {formatDate(app.submittedAt)}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 self-start sm:self-auto">
                            {getStatusBadge(app.status)}
                          </div>
                        </div>

                        {/* Middle Card: Service Details & Applicant Info */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <img
                              src={visualUrl}
                              alt={app.service}
                              onError={(e) => handleImageFallback(e, app.category)}
                              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-cover bg-neutral-200 dark:bg-neutral-700 shrink-0 border border-neutral-200 dark:border-neutral-600 shadow-xs"
                            />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#F96400]/10 text-[#F96400] uppercase tracking-wider">
                                  {app.category || 'Citizen Service'}
                                </span>
                              </div>
                              <h4 className="text-base sm:text-lg font-black text-neutral-900 dark:text-neutral-100 mt-1 leading-snug">
                                {app.service}
                              </h4>
                              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                                Applicant: <span className="font-bold text-neutral-800 dark:text-neutral-200">{app.name}</span> • Phone: <span className="font-mono font-semibold">+91 {app.mobile}</span>
                              </p>
                              {app.message && (
                                <p className="text-xs text-neutral-600 dark:text-neutral-300 italic mt-1.5 bg-white dark:bg-neutral-800 px-3 py-1.5 rounded-xl border border-neutral-200/70 dark:border-neutral-700">
                                  "{app.message}"
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Quick Action Buttons on Right */}
                          <div className="flex items-center gap-2 pt-2 md:pt-0 shrink-0">
                            <a
                              href={whatsappInquiryUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-colors"
                              title="Ask live status update directly on WhatsApp"
                            >
                              <MessageCircle size={14} />
                              <span>WhatsApp Status</span>
                            </a>
                            <button
                              onClick={() => handleViewApplicationService(app)}
                              className="px-3 py-2 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#F96400] text-xs font-semibold inline-flex items-center gap-1 transition-colors"
                            >
                              <Eye size={13} />
                              <span>Details</span>
                            </button>
                            <button
                              onClick={() => handleWithdrawApplication(app.id, app.service)}
                              title="Withdraw or delete this application"
                              className="p-2 text-neutral-400 hover:text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>

                        {/* Interactive 4-Stage Step Tracker */}
                        <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-700/60">
                          <p className="text-[11px] font-black uppercase tracking-wider text-neutral-400 mb-3">
                            Verification & Processing Stages / પ્રક્રિયા સ્ટેપ
                          </p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative">
                            {TRACKING_STAGES.map((stg) => {
                              const isCompleted = currentStep > stg.id || (stg.id === 4 && app.status === 'completed');
                              const isActive = currentStep === stg.id && app.status !== 'completed';
                              const isPending = currentStep < stg.id;

                              return (
                                <div
                                  key={stg.id}
                                  className={`p-3 rounded-2xl border transition-all ${
                                    isCompleted
                                      ? 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/60'
                                      : isActive
                                      ? 'bg-blue-50/90 dark:bg-blue-950/40 border-blue-400 dark:border-blue-700 shadow-xs ring-2 ring-blue-500/20'
                                      : 'bg-white/60 dark:bg-neutral-800/40 border-neutral-200 dark:border-neutral-700 text-neutral-400'
                                  }`}
                                >
                                  <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-[10px] font-mono font-bold text-neutral-400">
                                      Stage 0{stg.id}
                                    </span>
                                    {isCompleted ? (
                                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                                    ) : isActive ? (
                                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping shrink-0" />
                                    ) : (
                                      <span className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                                    )}
                                  </div>

                                  <p className={`text-xs font-black leading-tight ${
                                    isCompleted
                                      ? 'text-emerald-900 dark:text-emerald-200'
                                      : isActive
                                      ? 'text-blue-900 dark:text-blue-200'
                                      : 'text-neutral-500 dark:text-neutral-400'
                                  }`}>
                                    {stg.titleEn}
                                  </p>
                                  <p className="text-[10px] font-gujarati text-neutral-500 dark:text-neutral-400 mt-0.5">
                                    {stg.titleGu}
                                  </p>
                                  <p className="text-[10px] text-neutral-400 mt-1 line-clamp-1">
                                    {stg.desc}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                      </motion.div>
                    );
                  })}
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Detail Preview Modal */}
        <ServiceDetailsModal
          isOpen={isDetailsModalOpen}
          onClose={() => setIsDetailsModalOpen(false)}
          service={selectedServiceForModal}
        />
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // ADMIN DASHBOARD VIEW
  // ─────────────────────────────────────────────────────────────
  const totalCount = services.length;
  const activeCount = services.filter(s => s.isActive !== false).length;
  const inactiveCount = totalCount - activeCount;
  const totalApplicationsCount = applications.length;
  const pendingAppsCount = applications.filter(a => a.status === 'received').length;

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
                Complete Dynamic Service & Application Management
              </h1>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl">
                Manage government service catalog, review citizen applications, and update live desk verification statuses across Dharampur.
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

              {/* Export Backup JSON */}
              <button
                type="button"
                onClick={handleExport}
                title="Download JSON Catalog Backup"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-semibold rounded-xl border border-white/10 transition-colors"
              >
                <Download size={14} />
                <span className="hidden sm:inline">Export Backup</span>
              </button>

              {/* Import Backup JSON */}
              <label
                title="Import & Restore Catalog from JSON Backup"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-white/10 hover:bg-white/20 text-neutral-200 text-xs font-semibold rounded-xl border border-white/10 transition-colors cursor-pointer"
              >
                <Upload size={14} />
                <span className="hidden sm:inline">Restore</span>
                <input
                  type="file"
                  accept=".json,application/json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>

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

          {/* Top Admin Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-white/10">
            <button
              onClick={() => setAdminTab('services')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                adminTab === 'services'
                  ? 'bg-[#F96400] text-white shadow-md'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              <Layers size={16} />
              <span>Service Catalog ({totalCount})</span>
            </button>
            <button
              onClick={() => setAdminTab('applications')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                adminTab === 'applications'
                  ? 'bg-[#F96400] text-white shadow-md'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              <Inbox size={16} />
              <span>Citizen Applications ({totalApplicationsCount})</span>
              {pendingAppsCount > 0 && (
                <span className="px-1.5 py-0.5 text-[10px] rounded-full bg-amber-400 text-black font-black">
                  {pendingAppsCount} new
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ── TAB 1: SERVICE CATALOG ───────────────────────── */}
        {adminTab === 'services' && (
          <div className="space-y-6">
            {/* Search & Filter Controls */}
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

            {/* Services Management Table */}
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
                            <td className="py-4 px-4 sm:px-6 font-mono font-bold text-neutral-400">
                              {svc.displayOrder || svc.number || idx + 1}
                            </td>

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

                            <td className="py-4 px-4">
                              <span className="inline-block px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs font-semibold">
                                {typeof svc.category === 'string' ? svc.category : (svc.category?.en || svc.categoryId)}
                              </span>
                            </td>

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
        )}

        {/* ── TAB 2: CITIZEN APPLICATIONS ──────────────────── */}
        {adminTab === 'applications' && (
          <div className="space-y-6">
            {/* Search & Filter Controls */}
            <div className="bg-white dark:bg-neutral-900 p-4 sm:p-5 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search size={18} className="absolute left-3.5 top-3 text-neutral-400" />
                <input
                  type="text"
                  value={adminAppSearch}
                  onChange={(e) => setAdminAppSearch(e.target.value)}
                  placeholder="Search applicant, phone, service, APP-ID..."
                  className="w-full pl-10 pr-4 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 text-neutral-800 dark:text-neutral-100"
                />
                {adminAppSearch && (
                  <button
                    onClick={() => setAdminAppSearch('')}
                    className="absolute right-3 top-2.5 text-xs text-neutral-400 hover:text-neutral-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Status Filter Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setAdminAppStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    adminAppStatusFilter === 'all'
                      ? 'bg-[#171717] text-white dark:bg-white dark:text-black'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  All ({totalApplicationsCount})
                </button>
                <button
                  onClick={() => setAdminAppStatusFilter('received')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    adminAppStatusFilter === 'received'
                      ? 'bg-amber-500 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  Received ({pendingAppsCount})
                </button>
                <button
                  onClick={() => setAdminAppStatusFilter('in_progress')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    adminAppStatusFilter === 'in_progress'
                      ? 'bg-blue-600 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  In Progress ({applications.filter(a => a.status === 'in_progress').length})
                </button>
                <button
                  onClick={() => setAdminAppStatusFilter('completed')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    adminAppStatusFilter === 'completed'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400'
                  }`}
                >
                  Completed ({applications.filter(a => a.status === 'completed').length})
                </button>
              </div>
            </div>

            {/* Applications Table */}
            <div className="bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-neutral-50 dark:bg-neutral-800/60 text-neutral-500 dark:text-neutral-400 uppercase text-[11px] font-bold tracking-wider border-b border-neutral-200 dark:border-neutral-800">
                    <tr>
                      <th className="py-4 px-4 sm:px-6">App ID & Date</th>
                      <th className="py-4 px-4">Applicant</th>
                      <th className="py-4 px-4">Service</th>
                      <th className="py-4 px-4">Citizen Query / Note</th>
                      <th className="py-4 px-4">Status Update</th>
                      <th className="py-4 px-4 sm:px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100 dark:divide-neutral-800">
                    {adminFilteredApps.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="py-12 text-center text-neutral-400">
                          No citizen applications match your search.
                        </td>
                      </tr>
                    ) : (
                      adminFilteredApps.map((app) => (
                        <tr
                          key={app.id}
                          className="hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40 transition-colors"
                        >
                          <td className="py-4 px-4 sm:px-6 font-mono font-bold text-neutral-800 dark:text-neutral-200">
                            <div>{app.id}</div>
                            <span className="text-[11px] font-sans font-normal text-neutral-400">
                              {formatDate(app.submittedAt)}
                            </span>
                          </td>

                          <td className="py-4 px-4">
                            <p className="font-bold text-neutral-900 dark:text-neutral-100">
                              {app.name}
                            </p>
                            <a
                              href={`tel:${app.mobile}`}
                              className="text-xs text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-mono mt-0.5"
                            >
                              <Phone size={11} />
                              <span>+91 {app.mobile}</span>
                            </a>
                          </td>

                          <td className="py-4 px-4">
                            <p className="font-bold text-neutral-900 dark:text-neutral-100">
                              {app.service}
                            </p>
                            <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mt-1">
                              {app.category || 'Service'}
                            </span>
                          </td>

                          <td className="py-4 px-4 max-w-xs">
                            <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2">
                              {app.message || 'Standard online service request.'}
                            </p>
                          </td>

                          {/* Quick Status Selector */}
                          <td className="py-4 px-4">
                            <select
                              value={app.status || 'received'}
                              onChange={(e) => handleAdminStatusChange(app.id, e.target.value)}
                              className={`text-xs font-bold rounded-xl px-2.5 py-1.5 border focus:outline-none cursor-pointer ${
                                app.status === 'completed'
                                  ? 'bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/40 dark:text-emerald-300'
                                  : app.status === 'in_progress'
                                  ? 'bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-300'
                                  : 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-300'
                              }`}
                            >
                              <option value="received">Received at Desk</option>
                              <option value="in_progress">In Verification</option>
                              <option value="completed">Completed & Approved</option>
                            </select>
                          </td>

                          <td className="py-4 px-4 sm:px-6 text-right">
                            <div className="inline-flex items-center gap-2">
                              <a
                                href={`https://wa.me/91${app.mobile}?text=${encodeURIComponent(
                                  `Hello ${app.name}, this is HY-Tech Online Hub Dharampur regarding your application [${app.id}] for ${app.service}. Current status: ${app.status.toUpperCase()}.`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Chat with applicant on WhatsApp"
                                className="p-2 text-emerald-600 hover:text-emerald-700 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 rounded-xl transition-colors"
                              >
                                <MessageCircle size={15} />
                              </a>
                              <button
                                onClick={() => handleAdminDeleteApp(app.id, app.name)}
                                title="Delete application record"
                                className="p-2 text-neutral-400 hover:text-red-500 rounded-xl hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors"
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

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
