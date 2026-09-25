/**
 * Category 6 — Other Utility Services
 * Standardized data for bill payments, travel ticketing, recharges and digital assistance.
 */

const UTILITY_OVERVIEW = "Convenient assistance for everyday digital payments, travel booking and online application services.";
const UTILITY_PROCESS = [
  'Collect required details.',
  'Verify entered information.',
  'Complete transaction through the authorized provider/platform.',
  'Make secure payment.',
  'Generate/save receipt or ticket.',
  'Provide customer copy.'
];
const UTILITY_NOTES = [
  'Ticket cancellation/refund depends on the service provider\'s current rules.',
  'Verify passenger names, dates and journey details before payment.',
  'Do not store sensitive payment credentials unnecessarily.'
];

export const utilityServices = [
  {
    id: 'mobile-recharge',
    category: 'Other Utility Services',
    categoryId: 'other-services',
    slug: 'mobile-recharge',
    title: 'Mobile Recharge',
    titleGujarati: 'મોબાઇલ રિચાર્જ (Jio / Airtel / Vi / BSNL)',
    icon: 'Smartphone',
    image: '/images/services/mobile-recharge.webp',
    shortDescription: 'Prepaid, Postpaid & DTH instant recharge with best offer check.',
    overview: UTILITY_OVERVIEW,
    newApplication: [
      'Customer mobile number',
      'Telecom operator and circle',
      'Selected plan amount or validity'
    ],
    correctionUpdate: [
      'Recharge reversal or complaint assistance where permitted by the telecom operator.'
    ],
    requiredDocuments: [
      'Mobile number / DTH customer ID',
      'Payment details'
    ],
    eligibility: [
      'Customers using the respective mobile or DTH network.'
    ],
    process: UTILITY_PROCESS,
    importantNotes: UTILITY_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'electricity-bill-payment',
    category: 'Other Utility Services',
    categoryId: 'other-services',
    slug: 'electricity-bill-payment',
    title: 'Electricity Bill Payment',
    titleGujarati: 'લાઇટ બિલ (DGVCL / Torrent)',
    icon: 'Zap',
    image: '/images/services/electricity-bill-payment.webp',
    shortDescription: 'Instant payment with digital receipt for DGVCL and state discoms.',
    overview: UTILITY_OVERVIEW,
    newApplication: [
      'Consumer number (11 digits for DGVCL)',
      'Electricity bill copy or bill SMS',
      'Payer contact number'
    ],
    correctionUpdate: [
      'Bill receipt re-print and transaction status verification.'
    ],
    requiredDocuments: [
      'Electricity consumer bill copy / Consumer ID',
      'Payment amount'
    ],
    eligibility: [
      'Electricity consumers under DGVCL, UGVCL, MGVCL, PGVCL or other authorized discoms.'
    ],
    process: UTILITY_PROCESS,
    importantNotes: [
      'Pay before due date to avoid late payment surcharge and disconnection.',
      ...UTILITY_NOTES
    ],
    officialWebsite: 'https://www.dgvcl.com/',
    active: true,
    isActive: true
  },
  {
    id: 'water-bill-payment',
    category: 'Other Utility Services',
    categoryId: 'other-services',
    slug: 'water-bill-payment',
    title: 'Water Bill Payment',
    titleGujarati: 'પાણી વેરો / બિલ',
    icon: 'Droplets',
    image: '/images/services/water-bill-payment.webp',
    shortDescription: 'Nagar Palika and Panchayat water utility charges payment.',
    overview: UTILITY_OVERVIEW,
    newApplication: [
      'Water connection number / Consumer assessment ID',
      'Local municipality / Gram Panchayat bill notice'
    ],
    correctionUpdate: [
      'Receipt verification and tax receipt archiving.'
    ],
    requiredDocuments: [
      'Municipality assessment bill / Consumer number',
      'Identity proof where required'
    ],
    eligibility: [
      'Property owners / tenants connected to municipal or panchayat water supply.'
    ],
    process: UTILITY_PROCESS,
    importantNotes: UTILITY_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'train-ticket-booking',
    category: 'Other Utility Services',
    categoryId: 'other-services',
    slug: 'train-ticket-booking',
    title: 'Train Ticket Booking',
    titleGujarati: 'રેલવે ટિકિટ બુકિંગ (IRCTC)',
    icon: 'Train',
    image: '/images/services/train-ticket.webp',
    shortDescription: 'Confirmed train reservations, Tatkal assistance & PNR tracking.',
    overview: 'IRCTC e-ticket booking, berth preference assistance and train status tracking.',
    newApplication: [
      'Passenger names, age, gender and berth preference',
      'Journey origin, destination and date',
      'Valid identity details'
    ],
    correctionUpdate: [
      'Ticket cancellation and refund processing as per Railway rules.',
      'Boarding point change request where permitted.'
    ],
    requiredDocuments: [
      'Valid government ID details of traveling passengers (Aadhaar/Voter ID/Driving Licence)',
      'Passenger travel details'
    ],
    eligibility: [
      'All bona fide travelers holding valid government photo identification.'
    ],
    process: UTILITY_PROCESS,
    importantNotes: [
      'Carry original ID proof matching the ticket during the train journey.',
      ...UTILITY_NOTES
    ],
    officialWebsite: 'https://www.irctc.co.in/',
    active: true,
    isActive: true
  },
  {
    id: 'bus-ticket-booking',
    category: 'Other Utility Services',
    categoryId: 'other-services',
    slug: 'bus-ticket-booking',
    title: 'Bus Ticket Booking',
    titleGujarati: 'બસ ટિકિટ બુકિંગ (GSRTC)',
    icon: 'Bus',
    image: '/images/services/bus-ticket.webp',
    shortDescription: 'GSRTC Volvo, Gurjarnagri, Express & Private sleeper coach booking.',
    overview: 'Advance seat reservation for state transport (GSRTC) and leading private luxury bus operators.',
    newApplication: [
      'Passenger names, age, gender and seat selection',
      'Travel date, departure point and arrival city',
      'Passenger mobile number'
    ],
    correctionUpdate: [
      'Ticket cancellation assistance according to GSRTC/Operator policy.'
    ],
    requiredDocuments: [
      'Passenger contact details',
      'Valid photo ID during journey'
    ],
    eligibility: [
      'All travelers.'
    ],
    process: UTILITY_PROCESS,
    importantNotes: UTILITY_NOTES,
    officialWebsite: 'https://gsrtc.in/',
    active: true,
    isActive: true
  },
  {
    id: 'flight-ticket-booking',
    category: 'Other Utility Services',
    categoryId: 'other-services',
    slug: 'flight-ticket-booking',
    title: 'Flight Ticket Booking',
    titleGujarati: 'હવાઈ મુસાફરી ટિકિટ બુકિંગ',
    icon: 'Plane',
    image: '/images/services/flight-ticket.webp',
    shortDescription: 'Domestic & International flights with web check-in & baggage help.',
    overview: 'Competitive airfares, airline seat selection, excess baggage booking and online web check-in.',
    newApplication: [
      'Passenger exact full names as per passport or government ID',
      'Travel dates, departure & arrival airports',
      'Passport & visa details for international flights'
    ],
    correctionUpdate: [
      'Rescheduling, date change or cancellation according to airline fare rules.'
    ],
    requiredDocuments: [
      'Valid Passport / Government Photo ID',
      'Visa copy for international destinations'
    ],
    eligibility: [
      'All domestic and international air passengers.'
    ],
    process: UTILITY_PROCESS,
    importantNotes: [
      'Passenger name MUST match official government ID exactly.',
      ...UTILITY_NOTES
    ],
    active: true,
    isActive: true
  },
  {
    id: 'online-form-assistance',
    category: 'Other Utility Services',
    categoryId: 'other-services',
    slug: 'online-form-assistance',
    title: 'Online Form Assistance',
    titleGujarati: 'કોઈપણ ઓનલાઈન ફોર્મ સહાય',
    icon: 'FileSpreadsheet',
    image: '/images/services/online-form-assistance.webp',
    shortDescription: 'Expert assistance for any central, state, or private online portal.',
    overview: 'General computer desk support for filing complex forms, correcting portal errors, and PDF document formatting.',
    newApplication: [
      'Form details or portal web address',
      'Applicant identity and qualification documents',
      'Mobile phone for OTP verification'
    ],
    correctionUpdate: [
      'Re-submission, document re-upload, and grievance filing.'
    ],
    requiredDocuments: [
      'All relevant original documents for the specific application form',
      'Applicant mobile number'
    ],
    eligibility: [
      'Any citizen or student needing digital facilitation.'
    ],
    process: [
      'Examine the specific form requirements.',
      'Scan and format supporting documents according to size limits.',
      'Fill required data carefully.',
      'Verify details before final submit.',
      'Complete payment / final submission.',
      'Hand over official acknowledgement printout.'
    ],
    importantNotes: [
      'Applicant must verify all filled details on preview screen before final confirmation.',
      'HY-TECH provides facilitation services and is not the approval authority.'
    ],
    active: true,
    isActive: true
  }
];
