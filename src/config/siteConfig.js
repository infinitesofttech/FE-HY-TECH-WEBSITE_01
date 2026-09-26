/**
 * HY-TECH Online Hub — Centralized Site & Contact Configuration
 * Single source of truth for business contact information, WhatsApp endpoints, and metadata.
 */

export const SITE_CONFIG = {
  brandName: 'HY-TECH Computer Education & Online Hub',
  shortName: 'HY-TECH Online Hub',
  tagline: 'Your Trusted Government Service & Digital Education Partner in Dharampur',
  
  // Official Contact Information
  primaryPhone: '+91 72260 30701',
  secondaryPhone: '+91 76004 44321',
  whatsappNumber: '917226030701',
  whatsappSecondary: '917600444321',
  email: 'info@hytechonlinehub.in',
  supportEmail: 'info@hytechonlinehub.in',

  // Physical Location & Operating Details
  city: 'Dharampur',
  district: 'Valsad',
  state: 'Gujarat',
  pincode: '396050',
  fullAddress: 'College Road, Kanurbarda, Old Jakatnaka, Dharampur, Valsad, Gujarat - 396050',
  workingHours: 'Monday – Saturday: 9:00 AM – 7:00 PM',
  sundayStatus: 'Sunday: Closed',
  
  // External Maps link
  mapUrl: 'https://maps.google.com/?q=College+Road,Kanurbarda,Old+Jakatnaka,Dharampur',

  /**
   * Helper to generate a pre-filled WhatsApp click-to-chat URL
   * @param {string} customMessage Optional pre-filled text
   * @param {boolean} useSecondary Whether to route to secondary desk
   */
  getWhatsAppUrl(customMessage = 'Hello HY-TECH Online Hub, I have an inquiry.', useSecondary = false) {
    const num = useSecondary ? this.whatsappSecondary : this.whatsappNumber;
    return `https://wa.me/${num}?text=${encodeURIComponent(customMessage)}`;
  }
};

export default SITE_CONFIG;
