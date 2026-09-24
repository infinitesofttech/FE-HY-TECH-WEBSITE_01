/**
 * HY-TECH Computer Education & Online Hub
 * Centralized Mock Database bridged to the Standardized servicesData architecture.
 */

import { serviceCategories, servicesData } from './servicesData';

export const mockCategories = serviceCategories;

export const mockServices = servicesData.map(svc => ({
  ...svc,
  // Ensure backward and forward compatibility for title object and string
  rawTitle: svc.title,
  title: {
    en: svc.title,
    gu: svc.titleGujarati || svc.title
  },
  titleGujarati: svc.titleGujarati,
  category: {
    en: svc.category,
    gu: svc.category
  },
  rawCategory: svc.category,
  shortDescription: {
    en: svc.shortDescription || (svc.overview ? svc.overview.slice(0, 100) + '...' : ''),
    gu: svc.shortDescription || (svc.overview ? svc.overview.slice(0, 100) + '...' : '')
  },
  rawShortDescription: svc.shortDescription,
  // Map documents array for legacy and modern components
  documents: Array.isArray(svc.requiredDocuments) ? svc.requiredDocuments.map(d => typeof d === 'string' ? { en: d, gu: d } : d) : [],
  correction: Array.isArray(svc.correctionUpdate) ? svc.correctionUpdate.join(' • ') : (svc.correctionUpdate || ''),
  notes: Array.isArray(svc.importantNotes) ? svc.importantNotes.join(' ') : (svc.importantNotes || '')
}));

export default {
  mockCategories,
  mockServices
};
