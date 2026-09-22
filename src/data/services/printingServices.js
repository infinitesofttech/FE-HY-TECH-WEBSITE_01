/**
 * Category 4 — Printing & Documentation Services
 * Standardized data for printing, scanning, binding, photo and document facilitation.
 */

const PRINT_OVERVIEW = "Professional digital document printing, scanning, photocopying, lamination, binding and card/photo services.";
const PRINT_NEW_APP = [
  'Digital file or physical original document',
  'Required paper/card size (A4, Legal, A3, PVC)',
  'Quantity',
  'Colour/B&W requirement'
];
const PRINT_CORRECTION = [
  'Crop',
  'Resize',
  'Brightness adjustment',
  'Orientation',
  'Basic formatting before printing'
];
const PRINT_DOCS = [
  'Original physical document or digital PDF/JPG/PNG/Word file',
  'Printing specifications'
];
const PRINT_ELIGIBILITY = [
  'Available to students, citizens, businesses and other customers.'
];
const PRINT_PROCESS = [
  'Receive document/file.',
  'Verify print requirements.',
  'Preview.',
  'Select paper/size/colour.',
  'Print/scan/copy.',
  'Apply lamination/binding/card printing where requested.',
  'Deliver final output.'
];
const PRINT_NOTES = [
  'Do not print counterfeit, forged or illegally altered government documents.',
  'Customer is responsible for verifying document content before printing.'
];

export const printingServices = [
  {
    id: 'xerox-photocopy',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'xerox-photocopy',
    title: 'Xerox / Photocopy',
    titleGujarati: 'ઝેરોક્ષ / ફોટોકોપી',
    icon: 'Copy',
    image: '/images/services/xerox.webp',
    shortDescription: 'High-speed B&W and colour bulk photocopying on 75+ GSM paper.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'colour-printing',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'colour-printing',
    title: 'Colour Printing',
    titleGujarati: 'કલર પ્રિન્ટિંગ',
    icon: 'Printer',
    image: '/images/services/colour-printing.webp',
    shortDescription: 'Vibrant laser and inkjet colour printouts for projects & reports.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'bw-printing',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'bw-printing',
    title: 'B&W Printing',
    titleGujarati: 'બ્લેક એન્ડ વ્હાઇટ પ્રિન્ટિંગ',
    icon: 'FileText',
    image: '/images/services/printout.webp',
    shortDescription: 'Sharp monochrome printouts for legal, official & study notes.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'document-scanning',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'document-scanning',
    title: 'Document Scanning',
    titleGujarati: 'ડોક્યુમેન્ટ સ્કેનિંગ',
    icon: 'Scan',
    image: '/images/services/scanning.webp',
    shortDescription: 'High-DPI digital archiving into multi-page PDF or JPEG.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'lamination',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'lamination',
    title: 'Lamination',
    titleGujarati: 'લેમિનેશન',
    icon: 'Layers',
    image: '/images/services/lamination.webp',
    shortDescription: 'Waterproof protective thermal lamination for marksheet & ID.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'spiral-binding',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'spiral-binding',
    title: 'Spiral Binding',
    titleGujarati: 'સ્પાઇરલ બાઇન્ડિંગ',
    icon: 'BookOpen',
    image: '/images/services/spiral-binding.webp',
    shortDescription: 'Professional spiral & soft cover binding for project files.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'pvc-card-printing',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'pvc-card-printing',
    title: 'PVC Card Printing',
    titleGujarati: 'PVC સ્માર્ટ કાર્ડ પ્રિન્ટિંગ',
    icon: 'CreditCard',
    image: '/images/services/pvc-card.webp',
    shortDescription: 'Durable HD PVC printing for Aadhaar, PAN, Voter & Health Cards.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: [
      'Original official digital copy must be provided.',
      ...PRINT_NOTES
    ],
    active: true,
    isActive: true
  },
  {
    id: 'passport-photo',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'passport-photo',
    title: 'Passport Photo',
    titleGujarati: 'પાસપોર્ટ સાઇઝ ફોટો',
    icon: 'Camera',
    image: '/images/services/passport-photo.webp',
    shortDescription: 'Instant glossy passport photos with white or blue background.',
    overview: PRINT_OVERVIEW,
    newApplication: [
      'Studio capture or existing digital selfie/photograph',
      'Required background colour (White, Blue, Light Grey)',
      'Number of copies (8, 16, 32 prints)'
    ],
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'photo-printing',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'photo-printing',
    title: 'Photo Printing',
    titleGujarati: 'ફોટો પ્રિન્ટિંગ',
    icon: 'Image',
    image: '/images/services/photo-printing.webp',
    shortDescription: 'Premium glossy & matte photo printing in 4x6, 5x7 and A4 sizes.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'document-printing',
    category: 'Printing & Documentation Services',
    categoryId: 'printing-services',
    slug: 'document-printing',
    title: 'Document Printing',
    titleGujarati: 'દસ્તાવેજ પ્રિન્ટિંગ',
    icon: 'FileCheck',
    image: '/images/services/document-printing.webp',
    shortDescription: 'Direct WhatsApp/Email to print facility for official documents.',
    overview: PRINT_OVERVIEW,
    newApplication: PRINT_NEW_APP,
    correctionUpdate: PRINT_CORRECTION,
    requiredDocuments: PRINT_DOCS,
    eligibility: PRINT_ELIGIBILITY,
    process: PRINT_PROCESS,
    importantNotes: PRINT_NOTES,
    active: true,
    isActive: true
  }
];
