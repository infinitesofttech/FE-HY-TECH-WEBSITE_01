import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, Image as ImageIcon, Globe, FileText, CheckCircle2, Hash } from 'lucide-react';
import { saveService } from '../../utils/serviceUtils';
import { serviceCategories } from '../../data/servicesData';

export default function AdminServiceModal({ isOpen, onClose, serviceToEdit, onServiceSaved }) {
  const [formData, setFormData] = useState({
    title: '',
    titleGujarati: '',
    slug: '',
    categoryId: 'online-services',
    category: 'Online Services',
    image: '',
    officialWebsite: '',
    displayOrder: 1,
    isActive: true,
    shortDescription: '',
    overview: '',
    requiredDocumentsText: '',
    eligibilityText: '',
    processText: '',
    notesText: ''
  });

  const [error, setError] = useState('');

  useEffect(() => {
    if (serviceToEdit) {
      const docs = Array.isArray(serviceToEdit.requiredDocuments)
        ? serviceToEdit.requiredDocuments.map(d => typeof d === 'string' ? d : d.en).join('\n')
        : '';
      const elig = Array.isArray(serviceToEdit.eligibility)
        ? serviceToEdit.eligibility.map(d => typeof d === 'string' ? d : d.en).join('\n')
        : (Array.isArray(serviceToEdit.eligibilityCriteria) ? serviceToEdit.eligibilityCriteria.join('\n') : '');
      const proc = Array.isArray(serviceToEdit.process)
        ? serviceToEdit.process.map(d => typeof d === 'string' ? d : d.en).join('\n')
        : (Array.isArray(serviceToEdit.applicationProcess) ? serviceToEdit.applicationProcess.join('\n') : '');
      const notes = Array.isArray(serviceToEdit.importantNotes)
        ? serviceToEdit.importantNotes.map(d => typeof d === 'string' ? d : d.en).join('\n')
        : (serviceToEdit.notes || '');

      setFormData({
        id: serviceToEdit.id,
        title: serviceToEdit.title?.en || serviceToEdit.rawTitle || serviceToEdit.title || '',
        titleGujarati: serviceToEdit.title?.gu || serviceToEdit.titleGujarati || '',
        slug: serviceToEdit.slug || '',
        categoryId: serviceToEdit.categoryId || 'online-services',
        category: typeof serviceToEdit.category === 'string' ? serviceToEdit.category : (serviceToEdit.category?.en || 'Online Services'),
        image: serviceToEdit.image || '',
        officialWebsite: serviceToEdit.officialWebsite || '',
        displayOrder: serviceToEdit.displayOrder || serviceToEdit.number || 1,
        isActive: serviceToEdit.isActive !== false,
        shortDescription: serviceToEdit.shortDescription?.en || serviceToEdit.rawShortDescription || serviceToEdit.shortDescription || '',
        overview: serviceToEdit.overview || '',
        requiredDocumentsText: docs,
        eligibilityText: elig,
        processText: proc,
        notesText: notes
      });
    } else {
      // Defaults for new service
      setFormData({
        title: '',
        titleGujarati: '',
        slug: '',
        categoryId: 'online-services',
        category: 'Online Services',
        image: '/images/services/online-services.jpg',
        officialWebsite: '',
        displayOrder: 99,
        isActive: true,
        shortDescription: '',
        overview: '',
        requiredDocumentsText: 'Aadhaar Card\nPassport size photo\nMobile number',
        eligibilityText: 'All Indian citizens with valid identity proof',
        processText: 'Submit documents at HY-TECH Center\nDocument verification\nOnline application processing\nReceive acknowledgment',
        notesText: 'Verify original documents before submission.'
      });
    }
    setError('');
  }, [serviceToEdit, isOpen]);

  if (!isOpen) return null;

  const handleTitleChange = (val) => {
    const autoSlug = val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    setFormData(prev => ({
      ...prev,
      title: val,
      slug: serviceToEdit ? prev.slug : autoSlug
    }));
  };

  const handleCategoryChange = (catId) => {
    const found = serviceCategories.find(c => c.id === catId);
    setFormData(prev => ({
      ...prev,
      categoryId: catId,
      category: found ? found.title.en : 'Services'
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setError('Service title (English) is required.');
      return;
    }

    const docs = formData.requiredDocumentsText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const elig = formData.eligibilityText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const proc = formData.processText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const notes = formData.notesText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const payload = {
      ...(serviceToEdit || {}),
      id: formData.id || formData.slug,
      slug: formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      title: formData.title,
      titleGujarati: formData.titleGujarati || formData.title,
      categoryId: formData.categoryId,
      category: formData.category,
      image: formData.image || '/images/services/online-services.jpg',
      officialWebsite: formData.officialWebsite,
      displayOrder: Number(formData.displayOrder) || 99,
      isActive: Boolean(formData.isActive),
      shortDescription: formData.shortDescription,
      overview: formData.overview || formData.shortDescription,
      requiredDocuments: docs,
      eligibility: elig,
      process: proc,
      importantNotes: notes
    };

    try {
      saveService(payload);
      if (onServiceSaved) onServiceSaved(payload);
      onClose();
    } catch (err) {
      setError(err.message || 'Failed to save service');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 p-5 sm:p-7"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                {serviceToEdit ? 'Edit Service' : 'Add New Service'}
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Dynamic HY-TECH Hub Administration System
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-white rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Service Name (English) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="e.g. Election Card"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Service Name (Gujarati)
                </label>
                <input
                  type="text"
                  value={formData.titleGujarati}
                  onChange={(e) => setFormData(prev => ({ ...prev, titleGujarati: e.target.value }))}
                  placeholder="દા.ત. ચૂંટણી કાર્ડ"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 font-gujarati"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Category
                </label>
                <select
                  value={formData.categoryId}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
                >
                  {serviceCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.title.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  URL Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                  placeholder="e.g. election-card"
                  className="w-full px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Display Order
                </label>
                <input
                  type="number"
                  min="1"
                  value={formData.displayOrder}
                  onChange={(e) => setFormData(prev => ({ ...prev, displayOrder: e.target.value }))}
                  className="w-full px-3 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <ImageIcon size={14} className="text-neutral-400" />
                  Image Path / URL
                </label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.value }))}
                  placeholder="/images/services/election-card.jpg"
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5 flex items-center gap-1.5">
                  <Globe size={14} className="text-neutral-400" />
                  Official Website
                </label>
                <input
                  type="url"
                  value={formData.officialWebsite}
                  onChange={(e) => setFormData(prev => ({ ...prev, officialWebsite: e.target.value }))}
                  placeholder="https://..."
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                Short Description
              </label>
              <textarea
                rows="2"
                value={formData.shortDescription}
                onChange={(e) => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                placeholder="Brief summary of the service..."
                className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                Required Documents Checklist (One per line)
              </label>
              <textarea
                rows="4"
                value={formData.requiredDocumentsText}
                onChange={(e) => setFormData(prev => ({ ...prev, requiredDocumentsText: e.target.value }))}
                placeholder="Aadhaar Card&#10;Passport Photo&#10;Mobile Number linked with Aadhaar"
                className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F96400]/40 font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Eligibility Criteria (One per line)
                </label>
                <textarea
                  rows="3"
                  value={formData.eligibilityText}
                  onChange={(e) => setFormData(prev => ({ ...prev, eligibilityText: e.target.value }))}
                  placeholder="Indian Citizen&#10;Age 18+"
                  className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                  Process Steps (One per line)
                </label>
                <textarea
                  rows="3"
                  value={formData.processText}
                  onChange={(e) => setFormData(prev => ({ ...prev, processText: e.target.value }))}
                  placeholder="Submit at center&#10;Verification&#10;Approval"
                  className="w-full px-3.5 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#F96400]/40"
                />
              </div>
            </div>

            {/* Active Toggle */}
            <div className="flex items-center justify-between p-3.5 bg-neutral-50 dark:bg-neutral-800/60 rounded-xl border border-neutral-200 dark:border-neutral-700">
              <div>
                <span className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
                  Service Active Status
                </span>
                <p className="text-[11px] text-neutral-500">
                  Inactive services are hidden from public view and search.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#F96400]"></div>
              </label>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs sm:text-sm font-bold text-white bg-[#F96400] hover:bg-[#e05a00] rounded-xl shadow-md transition-colors"
              >
                <Save size={16} />
                <span>Save Service</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
