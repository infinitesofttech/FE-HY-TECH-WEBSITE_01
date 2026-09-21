import { mockCategories, mockServices } from '../data/mockDatabase';

// This file simulates API fetching for the frontend.
// In the future, simply replace the mock logic with:
// const res = await fetch('http://localhost:5000/api/services');
// return await res.json();

const DELAY_MS = 600; // Simulate network latency

export const fetchCategories = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Only return active categories
      const activeCats = mockCategories.filter(cat => cat.isActive);
      resolve(activeCats);
    }, DELAY_MS);
  });
};

export const fetchServices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Only return active services
      const activeServices = mockServices.filter(svc => svc.isActive);
      resolve(activeServices);
    }, DELAY_MS);
  });
};

export const fetchServiceBySlug = async (slug) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const service = mockServices.find(svc => svc.slug === slug && svc.isActive);
      if (service) {
        resolve(service);
      } else {
        reject(new Error('Service not found or inactive'));
      }
    }, DELAY_MS);
  });
};
