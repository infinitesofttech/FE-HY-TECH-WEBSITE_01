/**
 * Category 3 — Job Services
 * Standardized data for recruitment and government job application assistance.
 */

const JOB_OVERVIEW = "Online application assistance for recruitment notifications issued by the respective recruiting authority.";
const JOB_NEW_APP = [
  'OTR (One Time Registration) where applicable',
  'Identity details',
  'Educational details',
  'Photograph',
  'Signature',
  'Category documents where applicable'
];
const JOB_CORRECTION = [
  'Correction during the official correction/edit window, where provided by the authority.'
];
const JOB_DOCS = [
  'Aadhaar/valid photo ID',
  '10th/12th/degree marksheets',
  'Degree/diploma certificate',
  'Caste/EWS/NCL documents where applicable',
  'Passport size photograph',
  'Specimen signature',
  'Computer certificate (CCC or equivalent) where required'
];
const JOB_PROCESS = [
  'Check official recruitment notification.',
  'Create/login to registration account.',
  'Fill personal details.',
  'Fill educational details.',
  'Upload photograph/signature/documents.',
  'Pay applicable fee.',
  'Submit/confirm application.',
  'Save confirmation/application number.',
  'Download application copy.'
];
const JOB_NOTES = [
  'Recruitment eligibility, age, fee, reservation and qualification vary by post and notification.',
  'Always verify the official recruitment notification.',
  'Saving an application is not necessarily the same as final submission/confirmation.',
  'Requirements may change according to the latest official notification. Please verify with the concerned government authority.'
];

export const jobServices = [
  {
    id: 'government-job',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'government-job',
    title: 'Government Job',
    titleGujarati: 'સરકારી નોકરી ભરતી',
    icon: 'Briefcase',
    image: '/images/services/government-job.webp',
    shortDescription: 'State & Central Government online job applications & OTR.',
    overview: JOB_OVERVIEW,
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Must be taken from the specific recruitment notification.',
      'Age and educational qualifications depend on the specific post.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://ojas.gujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'railway-job',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'railway-job',
    title: 'Railway Job',
    titleGujarati: 'રેલ્વે ભરતી (RRB / RRC)',
    icon: 'Train',
    image: '/images/services/railway-recruitment.webp',
    shortDescription: 'RRB NTPC, Group D, ALP & Technician applications.',
    overview: 'Online application assistance for Indian Railway recruitment notifications issued by RRB/RRC.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Eligibility conditions, age limits and educational criteria are strictly as specified in the official RRB notification.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://indianrailways.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'ssc-job',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'ssc-job',
    title: 'SSC Job',
    titleGujarati: 'સ્ટાફ સિલેક્શન કમિશન (SSC)',
    icon: 'Award',
    image: '/images/services/ssc-recruitment.webp',
    shortDescription: 'SSC CGL, CHSL, MTS, GD Constable & CPO forms.',
    overview: 'Online application assistance for Staff Selection Commission national recruitments.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Taken from the specific SSC recruitment notification (10th, 12th or Degree depending on post).'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://ssc.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'upsc-job',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'upsc-job',
    title: 'UPSC Job',
    titleGujarati: 'સંઘ લોક સેવા આયોગ (UPSC)',
    icon: 'Shield',
    image: '/images/services/upsc-recruitment.webp',
    shortDescription: 'Civil Services, NDA, CDS & Central Armed Forces OTR.',
    overview: 'Online application assistance for Union Public Service Commission competitive examinations.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Graduation degree or equivalent as defined in the specific UPSC examination rules.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://upsc.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'gpsc-job',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'gpsc-job',
    title: 'GPSC Job',
    titleGujarati: 'ગુજરાત જાહેર સેવા આયોગ (GPSC)',
    icon: 'Building2',
    image: '/images/services/gpsc-recruitment.webp',
    shortDescription: 'Class 1-2 Officers, DySO, Mamlatdar & State Cadre.',
    overview: 'Online application assistance for Gujarat Public Service Commission gazetted recruitment notifications.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Degree from a recognized university and meeting GPSC age/domicile rules.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://gpsc.gujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'police-recruitment',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'police-recruitment',
    title: 'Police Recruitment',
    titleGujarati: 'પોલીસ ભરતી (LRD / PSI)',
    icon: 'ShieldAlert',
    image: '/images/services/police-recruitment.webp',
    shortDescription: 'Gujarat Police Constable, Lokrakshak & PSI recruitment.',
    overview: 'Online application assistance for Gujarat Police Bharti Board notifications.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Physical fitness, height, chest measurements, age and educational criteria as per police notification.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://ojas.gujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'army-recruitment',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'army-recruitment',
    title: 'Army Recruitment',
    titleGujarati: 'આર્મી ભરતી (અગ્નિવીર)',
    icon: 'Award',
    image: '/images/services/army-recruitment.webp',
    shortDescription: 'Indian Army Agniveer GD, Technical, Tradesman rallies.',
    overview: 'Online application assistance for Indian Army Agniveer recruitment rallies.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Age, physical standards and educational qualifications specified in the Army rally notification.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://joinindianarmy.nic.in/',
    active: true,
    isActive: true
  },
  {
    id: 'talati-recruitment',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'talati-recruitment',
    title: 'Talati Recruitment',
    titleGujarati: 'તલાટી કમ મંત્રી ભરતી',
    icon: 'FileSpreadsheet',
    image: '/images/services/talati-recruitment.webp',
    shortDescription: 'GPSSB / GSSSB Talati Mantri online application desk.',
    overview: 'Online application assistance for Gujarat Panchayat Service Selection Board Talati recruitments.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'HSC (12th pass) or degree qualification and basic computer certificate as per state rules.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://ojas.gujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'clerk-recruitment',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'clerk-recruitment',
    title: 'Clerk Recruitment',
    titleGujarati: 'જુનિયર / સિનિયર ક્લાર્ક ભરતી',
    icon: 'FileText',
    image: '/images/services/clerk-recruitment.webp',
    shortDescription: 'GSSSB Junior Clerk, Senior Clerk & Head Clerk exams.',
    overview: 'Online application assistance for Subordinate Services clerk recruitments.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Educational qualifications and age limits as stipulated in GSSSB/GPSSB recruitment notification.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://gsssb.gujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'bank-recruitment',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'bank-recruitment',
    title: 'Bank Recruitment',
    titleGujarati: 'બેંક ભરતી (IBPS / SBI / RBI)',
    icon: 'Landmark',
    image: '/images/services/bank-recruitment.webp',
    shortDescription: 'SBI, IBPS PO, Clerk, SO & Regional Rural Bank applications.',
    overview: 'Online application assistance for Institute of Banking Personnel Selection and SBI recruitments.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'Graduation degree in any discipline from a recognized university as per IBPS/SBI rules.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://www.ibps.in/',
    active: true,
    isActive: true
  },
  {
    id: 'apprentice-recruitment',
    category: 'Job Services',
    categoryId: 'job-services',
    slug: 'apprentice-recruitment',
    title: 'Apprentice Recruitment',
    titleGujarati: 'એપ્રેન્ટિસ ભરતી',
    icon: 'Wrench',
    image: '/images/services/apprentice-recruitment.webp',
    shortDescription: 'ITI, Diploma & Graduate apprentice portals & company vacancies.',
    overview: 'Online application and apprentice portal registration assistance for government and PSU apprenticeships.',
    newApplication: JOB_NEW_APP,
    correctionUpdate: JOB_CORRECTION,
    requiredDocuments: JOB_DOCS,
    eligibility: [
      'ITI, Diploma, or Degree pass candidates as per the specific establishment notification.'
    ],
    process: JOB_PROCESS,
    importantNotes: JOB_NOTES,
    officialWebsite: 'https://www.apprenticeshipindia.gov.in/',
    active: true,
    isActive: true
  }
];
