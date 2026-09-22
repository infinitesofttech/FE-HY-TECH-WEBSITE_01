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
  documents: svc.requiredDocuments.map(d => ({ en: d, gu: d })),
  correction: svc.correctionUpdate.join(' • '),
  notes: svc.importantNotes.join(' ')
}));

export default {
  mockCategories,
  mockServices
};
