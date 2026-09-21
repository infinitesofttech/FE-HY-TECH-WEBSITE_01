/**
 * HY-TECH Computer Education & Online Hub
 * Complete 3D Service Visuals Mapping & Resilient Fallback Utility
 */

export const categoryVisuals = {
  'online-services': '/images/3d_icons/online-services.jpg',
  'education-services': '/images/3d_icons/education-services.jpg',
  'job-services': '/images/3d_icons/job-services.jpg',
  'printing-services': '/images/3d_icons/printing-services.jpg',
  'computer-courses': '/images/3d_icons/computer-courses.jpg',
  'other-services': '/images/3d_icons/other-services.jpg',
  default: '/images/3d_icons/online-services.jpg',
};

// All 45 service visuals specified in requirement
export const serviceVisuals = {
  // 1. ONLINE SERVICES
  'pan-card': '/images/services/pan-card.webp',
  'aadhaar': '/images/services/aadhaar.webp',
  'voter-id': '/images/services/voter-id.webp',
  'passport': '/images/services/passport.webp',
  'driving-licence': '/images/services/driving-licence.webp',
  'ayushman-card': '/images/services/ayushman-card.webp',
  'e-shram': '/images/services/e-shram.webp',
  'pm-kisan': '/images/services/pm-kisan.webp',
  'income-certificate': '/images/services/income-certificate.webp',
  'caste-certificate': '/images/services/caste-certificate.webp',
  'ncl-certificate': '/images/services/ncl-certificate.webp',
  'certificate': '/images/services/income-certificate.webp',

  // 2. EDUCATION SERVICES
  'college-admission': '/images/services/college-admission.webp',
  'university-exam': '/images/services/university-exam.webp',
  'hostel-admission': '/images/services/hostel-admission.webp',
  'scholarship': '/images/services/scholarship.webp',
  'college-exam-renewal': '/images/services/college-exam-renewal.webp',
  'college-renewal': '/images/services/college-exam-renewal.webp',
  'resume-cv': '/images/services/resume-cv.webp',

  // 3. JOB SERVICES
  'government-job': '/images/services/government-job.webp',
  'gov-job': '/images/services/government-job.webp',
  'railway-recruitment': '/images/services/railway-recruitment.webp',
  'railway': '/images/services/railway-recruitment.webp',
  'ssc-recruitment': '/images/services/ssc-recruitment.webp',
  'upsc-recruitment': '/images/services/upsc-recruitment.webp',
  'gpsc-recruitment': '/images/services/gpsc-recruitment.webp',
  'ssc-upsc-gpsc': '/images/services/gpsc-recruitment.webp',
  'police-recruitment': '/images/services/police-recruitment.webp',
  'army-recruitment': '/images/services/army-recruitment.webp',
  'defense-clerk': '/images/services/police-recruitment.webp',
  'talati-recruitment': '/images/services/talati-recruitment.webp',
  'clerk-recruitment': '/images/services/clerk-recruitment.webp',

  // 4. PRINTING SERVICES
  'xerox': '/images/services/xerox.webp',
  'printout': '/images/services/printout.webp',
  'xerox-print': '/images/services/xerox.webp',
  'lamination': '/images/services/lamination.webp',
  'scanning': '/images/services/scanning.webp',
  'spiral-binding': '/images/services/spiral-binding.webp',
  'pvc-card': '/images/services/pvc-card.webp',
  'passport-photo': '/images/services/passport-photo.webp',

  // 5. COMPUTER COURSES
  'ccc-course': '/images/services/ccc-course.webp',
  'ms-office': '/images/services/ms-office.webp',
  'tally-gst': '/images/services/tally-gst.webp',
  'advanced-courses': '/images/services/tally-gst.webp',
  'typing-course': '/images/services/typing-course.webp',
  'internet-training': '/images/services/internet-training.webp',

  // 6. OTHER SERVICES
  'money-transfer': '/images/services/money-transfer.webp',
  'mobile-recharge': '/images/services/mobile-recharge.webp',
  'bill-payment': '/images/services/bill-payment.webp',
  'train-ticket': '/images/services/train-ticket.webp',
  'bus-ticket': '/images/services/bus-ticket.webp',
  'flight-ticket': '/images/services/flight-ticket.webp',
  'international-flight': '/images/services/international-flight.webp',
  'ticketing': '/images/services/train-ticket.webp',
  'banking-bill': '/images/services/money-transfer.webp',
};

// All 45 services now have individual dedicated 3D visuals
export const availableCustomVisuals = new Set(Object.keys(serviceVisuals));

/**
 * Returns the best visual URL for a service with category fallback.
 */
export function getServiceVisual(slug, categoryId) {
  if (slug && serviceVisuals[slug]) {
    return serviceVisuals[slug];
  }
  return categoryVisuals[categoryId] || categoryVisuals.default;
}

/**
 * Handles image loading error and sets fallback
 */
export function handleImageFallback(e, categoryId) {
  e.target.onerror = null;
  e.target.src = categoryVisuals[categoryId] || categoryVisuals.default;
}
