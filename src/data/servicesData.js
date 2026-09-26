/**
 * HY-TECH Computer Education & Online Hub
 * Centralized Standardized Service Data & Categories Architecture
 */

import { sourceServicesData } from './sourceServicesData';
import { educationServices } from './services/educationServices';
import { jobServices } from './services/jobServices';
import { printingServices } from './services/printingServices';
import { computerCourses } from './services/computerCourses';
import { utilityServices } from './services/utilityServices';

// Gather other services, ensuring no duplicate slugs/ids with sourceServicesData
const sourceSlugs = new Set(sourceServicesData.map(s => s.slug || s.id));
const nonDuplicateOtherServices = [
  ...educationServices,
  ...jobServices,
  ...printingServices,
  ...computerCourses,
  ...utilityServices
].filter(s => !sourceSlugs.has(s.slug) && !sourceSlugs.has(s.id));

// Combined services with sourceServicesData prioritised
export const servicesData = [
  ...sourceServicesData,
  ...nonDuplicateOtherServices
];

export const serviceCategories = [
  {
    id: 'online-services',
    slug: 'online-services',
    title: {
      en: 'Online Services',
      gu: 'ઓનલાઈન સેવાઓ'
    },
    icon: 'Monitor',
    catImage: '/images/categories/online_services_antigravity.jpg',
    count: servicesData.filter(s => s.categoryId === 'online-services').length,
    isActive: true
  },
  {
    id: 'education-services',
    slug: 'education-services',
    title: {
      en: 'Education Services',
      gu: 'શિક્ષણ સેવાઓ'
    },
    icon: 'GraduationCap',
    catImage: '/images/categories/education_services_antigravity.jpg',
    count: servicesData.filter(s => s.categoryId === 'education-services').length,
    isActive: true
  },
  {
    id: 'job-services',
    slug: 'job-services',
    title: {
      en: 'Job Services',
      gu: 'નોકરી સેવાઓ'
    },
    icon: 'Briefcase',
    catImage: '/images/categories/job_services_antigravity.jpg',
    count: servicesData.filter(s => s.categoryId === 'job-services').length,
    isActive: true
  },
  {
    id: 'printing-services',
    slug: 'printing-services',
    title: {
      en: 'Printing Services',
      gu: 'પ્રિન્ટિંગ સેવાઓ'
    },
    icon: 'Printer',
    catImage: '/images/categories/printing_services_antigravity.jpg',
    count: servicesData.filter(s => s.categoryId === 'printing-services').length,
    isActive: true
  },
  {
    id: 'computer-courses',
    slug: 'computer-courses',
    title: {
      en: 'Computer Courses',
      gu: 'કમ્પ્યુટર કોર્સ'
    },
    icon: 'Laptop',
    catImage: '/images/categories/computer_courses_antigravity.jpg',
    count: servicesData.filter(s => s.categoryId === 'computer-courses').length,
    isActive: true
  },
  {
    id: 'other-services',
    slug: 'other-services',
    title: {
      en: 'Other Services',
      gu: 'અન્ય સેવાઓ'
    },
    icon: 'Globe',
    catImage: '/images/categories/other_services_antigravity.jpg',
    count: servicesData.filter(s => s.categoryId === 'other-services').length,
    isActive: true
  }
];

export const getServiceBySlug = (slug) => {
  if (!slug) return null;
  return servicesData.find(svc => svc.slug === slug || svc.id === slug);
};

export const getServicesByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') return servicesData;
  return servicesData.filter(svc => svc.categoryId === categoryId);
};

export default servicesData;
