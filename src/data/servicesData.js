/**
 * HY-TECH Computer Education & Online Hub
 * Centralized Standardized Service Data & Categories Architecture
 */

import { onlineServices } from './services/onlineServices';
import { educationServices } from './services/educationServices';
import { jobServices } from './services/jobServices';
import { printingServices } from './services/printingServices';
import { computerCourses } from './services/computerCourses';
import { utilityServices } from './services/utilityServices';

export const serviceCategories = [
  {
    id: 'online-services',
    slug: 'online-services',
    title: {
      en: 'Online Services',
      gu: 'ઓનલાઈન સેવાઓ'
    },
    icon: 'Monitor',
    catImage: '/images/categories/online_services.jpg',
    count: onlineServices.length,
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
    catImage: '/images/categories/education.jpg',
    count: educationServices.length,
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
    catImage: '/images/categories/jobs.jpg',
    count: jobServices.length,
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
    catImage: '/images/categories/printing.jpg',
    count: printingServices.length,
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
    catImage: '/images/categories/courses.jpg',
    count: computerCourses.length,
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
    catImage: '/images/categories/other.jpg',
    count: utilityServices.length,
    isActive: true
  }
];

// All 60 standardized services combined
export const servicesData = [
  ...onlineServices,
  ...educationServices,
  ...jobServices,
  ...printingServices,
  ...computerCourses,
  ...utilityServices
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
