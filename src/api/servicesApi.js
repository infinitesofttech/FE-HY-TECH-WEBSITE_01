import { mockCategories } from '../data/mockDatabase';
import { getActiveServices, getServiceByIdOrSlug } from '../utils/serviceUtils';

// This file simulates API fetching for the frontend.
// In the future, simply replace the mock logic with:
// const res = await fetch('http://localhost:5000/api/services');
// return await res.json();

const DELAY_MS = 250; // Optimized latency for smooth UX

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activeServices = getActiveServices();
      // Dynamically recalculate category counts based on active services
      const dynamicCats = mockCategories
        .filter(cat => cat.isActive)
        .map(cat => ({
          ...cat,
          count: activeServices.filter(s => s.categoryId === cat.id).length
        }));
      resolve(dynamicCats);
    }, DELAY_MS);
  });
};

export const fetchServices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activeServices = getActiveServices();
      resolve(activeServices);
    }, DELAY_MS);
  });
};

export const fetchServiceBySlug = async (slug) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const service = getServiceByIdOrSlug(slug);
      if (service && service.isActive !== false) {
        resolve(service);
      } else {
        reject(new Error('Service not found or inactive'));
      }
    }, DELAY_MS);
  });
};
