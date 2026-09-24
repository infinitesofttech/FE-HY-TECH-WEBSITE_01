/**
 * HY-TECH Computer Education & Online Hub
 * Dynamic Service Management Utility & LocalStorage Persistence System
 */

import { servicesData as baseServicesData, serviceCategories } from '../data/servicesData';

const CUSTOM_SERVICES_KEY = 'hyTechCustomServices';
const SERVICE_OVERRIDES_KEY = 'hyTechServiceOverrides';

/**
 * Get service overrides from localStorage (e.g. edits, isActive status, deleted status)
 */
export const getServiceOverrides = () => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(SERVICE_OVERRIDES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    console.error('Failed to parse service overrides:', e);
    return {};
  }
};

/**
 * Get custom added services from localStorage
 */
export const getCustomServices = () => {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(CUSTOM_SERVICES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to parse custom services:', e);
    return [];
  }
};

/**
 * Returns all services for Admin (including inactive ones)
 */
export const getAllServicesForAdmin = () => {
  const overrides = getServiceOverrides();
  const custom = getCustomServices();

  // Combine base services with overrides applied
  const baseProcessed = baseServicesData
    .filter(svc => !overrides[svc.id]?.isDeleted)
    .map(svc => {
      const override = overrides[svc.id] || {};
      return {
        ...svc,
        ...override,
        // Ensure required flags
        isActive: override.isActive !== undefined ? override.isActive : (svc.isActive ?? true)
      };
    });

  // Combine with custom services
  const customProcessed = custom
    .filter(svc => !overrides[svc.id]?.isDeleted)
    .map(svc => {
      const override = overrides[svc.id] || {};
      return {
        ...svc,
        ...override,
        isActive: override.isActive !== undefined ? override.isActive : (svc.isActive ?? true)
      };
    });

  const combined = [...baseProcessed, ...customProcessed];

  // Sort by displayOrder or number
  return combined.sort((a, b) => {
    const orderA = a.displayOrder ?? a.number ?? 999;
    const orderB = b.displayOrder ?? b.number ?? 999;
    return orderA - orderB;
  });
};

/**
 * Returns all active services for public display
 */
export const getActiveServices = () => {
  return getAllServicesForAdmin().filter(svc => svc.isActive !== false);
};

/**
 * Find service by ID or Slug
 */
export const getServiceByIdOrSlug = (identifier) => {
  if (!identifier) return null;
  const all = getAllServicesForAdmin();
  return all.find(svc => svc.id === identifier || svc.slug === identifier) || null;
};

/**
 * Extract structured operations list from a service
 */
export const getServiceOperations = (service) => {
  if (!service) return [];
  if (service.operations && typeof service.operations === 'object') {
    return Object.entries(service.operations).map(([key, op]) => ({
      key,
      title: op.title || { en: key.toUpperCase(), gu: key.toUpperCase() },
      documents: op.documents || [],
      eligibility: op.eligibility || [],
      process: op.process || [],
      notes: op.notes || []
    }));
  }

  // Fallback if operations object not defined: construct default tabs
  const ops = [];
  if (service.newApplication && service.newApplication.length > 0) {
    ops.push({
      key: 'new',
      title: { en: 'New Application / Registration', gu: 'નવી અરજી / નોંધણી' },
      documents: service.requiredDocuments || service.newApplication || [],
      eligibility: service.eligibility || [],
      process: service.process || [],
      notes: service.importantNotes || []
    });
  }
  if (service.correctionUpdate && service.correctionUpdate.length > 0) {
    ops.push({
      key: 'correction',
      title: { en: 'Correction / Update', gu: 'સુધારો / અપડેટ' },
      documents: service.correctionUpdate || [],
      eligibility: service.eligibility || [],
      process: service.process || [],
      notes: service.importantNotes || []
    });
  }

  if (ops.length === 0) {
    ops.push({
      key: 'standard',
      title: { en: 'Service Details & Documents', gu: 'સેવા વિગત અને દસ્તાવેજો' },
      documents: service.requiredDocuments || [],
      eligibility: service.eligibility || [],
      process: service.process || [],
      notes: service.importantNotes || []
    });
  }

  return ops;
};

/**
 * Bilingual Search helper
 */
export const searchServices = (services, query, language = 'en') => {
  if (!query || !query.trim()) return services;
  const q = query.trim().toLowerCase();

  return services.filter(s => {
    const titleEn = (s.title?.en || s.rawTitle || s.title || '').toLowerCase();
    const titleGu = (s.title?.gu || s.titleGujarati || '').toLowerCase();
    const slug = (s.slug || '').toLowerCase();
    const descEn = (s.shortDescription?.en || s.rawShortDescription || s.overview || '').toLowerCase();
    const descGu = (s.shortDescription?.gu || '').toLowerCase();
    const category = (typeof s.category === 'string' ? s.category : (s.category?.en || '')).toLowerCase();
    
    // Check documents
    const docs = Array.isArray(s.requiredDocuments) ? s.requiredDocuments.join(' ').toLowerCase() : '';
    
    // Check operations documents and titles
    let opsText = '';
    if (s.operations) {
      Object.values(s.operations).forEach(op => {
        if (op.title?.en) opsText += ' ' + op.title.en.toLowerCase();
        if (op.title?.gu) opsText += ' ' + op.title.gu.toLowerCase();
        if (Array.isArray(op.documents)) opsText += ' ' + op.documents.join(' ').toLowerCase();
      });
    }

    return (
      titleEn.includes(q) ||
      titleGu.includes(q) ||
      slug.includes(q) ||
      descEn.includes(q) ||
      descGu.includes(q) ||
      category.includes(q) ||
      docs.includes(q) ||
      opsText.includes(q)
    );
  });
};

/**
 * Filter services by category slug
 */
export const filterServicesByCategory = (services, categorySlug) => {
  if (!categorySlug || categorySlug === 'all') return services;
  return services.filter(s => s.categoryId === categorySlug || s.category?.toLowerCase() === categorySlug.toLowerCase());
};

/**
 * Save (Add or Edit) Service in LocalStorage
 */
export const saveService = (serviceData) => {
  if (!serviceData || !serviceData.title) {
    throw new Error('Service title is required');
  }

  // Generate ID / slug if new
  const slug = serviceData.slug || serviceData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const id = serviceData.id || slug;

  const overrides = getServiceOverrides();
  const custom = getCustomServices();

  const isExistingBase = baseServicesData.some(s => s.id === id);
  const existingCustomIndex = custom.findIndex(s => s.id === id);

  const payload = {
    ...serviceData,
    id,
    slug,
    updatedAt: new Date().toISOString()
  };

  if (isExistingBase) {
    // Record override
    overrides[id] = {
      ...(overrides[id] || {}),
      ...payload,
      isDeleted: false
    };
    localStorage.setItem(SERVICE_OVERRIDES_KEY, JSON.stringify(overrides));
  } else if (existingCustomIndex >= 0) {
    // Update existing custom service
    custom[existingCustomIndex] = {
      ...custom[existingCustomIndex],
      ...payload
    };
    localStorage.setItem(CUSTOM_SERVICES_KEY, JSON.stringify(custom));
  } else {
    // Add new custom service
    const maxOrder = Math.max(
      ...getAllServicesForAdmin().map(s => s.displayOrder || s.number || 0),
      0
    );
    payload.displayOrder = payload.displayOrder || (maxOrder + 1);
    payload.number = payload.number || payload.displayOrder;
    payload.isActive = payload.isActive !== undefined ? payload.isActive : true;

    custom.push(payload);
    localStorage.setItem(CUSTOM_SERVICES_KEY, JSON.stringify(custom));
  }

  return payload;
};

/**
 * Toggle Active / Inactive status of a service
 */
export const toggleServiceStatus = (serviceId) => {
  const overrides = getServiceOverrides();
  const all = getAllServicesForAdmin();
  const target = all.find(s => s.id === serviceId);

  if (!target) return false;

  const newStatus = !target.isActive;

  // Check if it's a custom service
  const custom = getCustomServices();
  const customIndex = custom.findIndex(s => s.id === serviceId);

  if (customIndex >= 0) {
    custom[customIndex].isActive = newStatus;
    localStorage.setItem(CUSTOM_SERVICES_KEY, JSON.stringify(custom));
  } else {
    overrides[serviceId] = {
      ...(overrides[serviceId] || {}),
      isActive: newStatus
    };
    localStorage.setItem(SERVICE_OVERRIDES_KEY, JSON.stringify(overrides));
  }

  return newStatus;
};

/**
 * Soft-delete / Remove a service
 */
export const deleteService = (serviceId) => {
  const overrides = getServiceOverrides();
  const custom = getCustomServices();

  const customIndex = custom.findIndex(s => s.id === serviceId);
  if (customIndex >= 0) {
    custom.splice(customIndex, 1);
    localStorage.setItem(CUSTOM_SERVICES_KEY, JSON.stringify(custom));
  }

  // Mark override as deleted in case it was a base service
  overrides[serviceId] = {
    ...(overrides[serviceId] || {}),
    isDeleted: true
  };
  localStorage.setItem(SERVICE_OVERRIDES_KEY, JSON.stringify(overrides));

  return true;
};

/**
 * Reset all service edits back to initial codebase defaults
 */
export const resetServicesToDefault = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SERVICE_OVERRIDES_KEY);
    localStorage.removeItem(CUSTOM_SERVICES_KEY);
  }
};
