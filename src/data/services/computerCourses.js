/**
 * Category 5 — Computer Courses
 * Standardized data for computer literacy, accounting, design and technical education.
 */

const COURSE_OVERVIEW = "Practical job-oriented computer training for students, job seekers, professionals and beginners.";
const COURSE_NEW_APP = [
  'Course selection',
  'Batch timing preference (Morning / Afternoon / Evening)',
  'Admission form submission',
  'Passport-size photograph',
  'Contact information and emergency contact'
];
const COURSE_CORRECTION = [
  'Batch timing change request',
  'Course upgrade / module addition',
  'Student profile update'
];
const COURSE_DOCS = [
  'Aadhaar copy where required',
  'Passport-size photograph',
  'Latest educational qualification marksheet where required'
];
const COURSE_PROCESS = [
  'Course & career counselling.',
  'Select course curriculum.',
  'Select batch timing.',
  'Complete admission registration.',
  'Pay applicable fee (installment facility available).',
  'Attend 100% practical lab training.',
  'Complete assignments and live projects.',
  'Take assessment / practical exam where applicable.',
  'Receive course completion certificate where applicable.'
];
const COURSE_NOTES = [
  'Course certificate/recognition must be described accurately.',
  'Do not claim government recognition unless officially verified.',
  'Regular attendance and practical lab assignments are mandatory for certification.'
];

export const computerCourses = [
  {
    id: 'ccc-course',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'ccc-course',
    title: 'CCC',
    titleGujarati: 'CCC કમ્પ્યુટર કોર્સ',
    icon: 'Laptop',
    image: '/images/services/ccc-course.webp',
    shortDescription: 'Government recognized Course on Computer Concepts.',
    overview: 'Complete preparation for government job eligibility covering Windows, LibreOffice/MS Office, and Internet concepts.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Open to all students, job applicants and government employees.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'basic-computer',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'basic-computer',
    title: 'Basic Computer',
    titleGujarati: 'બેઝિક કમ્પ્યુટર ફાઉન્ડેશન',
    icon: 'Monitor',
    image: '/images/services/basic-computer.webp',
    shortDescription: 'Computer fundamentals, typing, file management & internet.',
    overview: COURSE_OVERVIEW,
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Open to beginners of all age groups with no prior computer background.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'ms-office',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'ms-office',
    title: 'MS Office',
    titleGujarati: 'એમએસ ઓફિસ (Word, Excel, PowerPoint)',
    icon: 'FileSpreadsheet',
    image: '/images/services/ms-office.webp',
    shortDescription: 'Essential office automation with Word, Excel, PowerPoint & Outlook.',
    overview: 'Practical office productivity suite training for drafting, data calculation and presentations.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Basic reading and typing knowledge.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'advanced-excel',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'advanced-excel',
    title: 'Advanced Excel',
    titleGujarati: 'એડવાન્સ એક્સેલ & ડેટા એનાલિસિસ',
    icon: 'Table',
    image: '/images/services/advanced-excel.webp',
    shortDescription: 'VLOOKUP, XLOOKUP, Pivot Tables, Dashboards & Formulas.',
    overview: 'Master data analysis, complex formulas, automated reports and professional dashboards.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Basic knowledge of MS Excel required.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'tally-prime-gst',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'tally-prime-gst',
    title: 'Tally Prime + GST',
    titleGujarati: 'ટેલી પ્રાઇમ + GST એકાઉન્ટિંગ',
    icon: 'CreditCard',
    image: '/images/services/tally-gst.webp',
    shortDescription: 'Complete computerized accounting, GST billing, inventory & TDS.',
    overview: 'Industry-standard accounting training with live company voucher entries, GST returns and financial statements.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Commerce, Arts, Science students or anyone interested in accounting careers.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'canva-design',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'canva-design',
    title: 'Canva',
    titleGujarati: 'કેનવા ગ્રાફિક ડિઝાઇનિંગ',
    icon: 'Palette',
    image: '/images/services/canva-design.webp',
    shortDescription: 'Social media posters, brochures, banners & reels editing.',
    overview: 'Learn modern visual graphic designing for businesses, marketing campaigns and digital creators.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Beginner-friendly; no design degree required.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'typing-course',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'typing-course',
    title: 'Typing',
    titleGujarati: 'ટાઇપિંગ કોર્સ (ગુજરાતી / English)',
    icon: 'Keyboard',
    image: '/images/services/typing-course.webp',
    shortDescription: 'English & Gujarati (Shruti / Indic) touch typing with speed tests.',
    overview: 'Develop high-speed touch typing skills required for clerk exams, court stenography and data entry.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Open to all candidates preparing for exams or typing jobs.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'ai-tools-course',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'ai-tools-course',
    title: 'AI Tools',
    titleGujarati: 'આર્ટિફિશિયલ ઇન્ટેલિજન્સ (AI) ટૂલ્સ',
    icon: 'Bot',
    image: '/images/services/ai-tools-course.webp',
    shortDescription: 'ChatGPT, Midjourney, Claude & modern AI productivity tools.',
    overview: 'Learn how to leverage generative AI tools to accelerate work, write professional emails and automate tasks.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Basic computer and internet knowledge.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'python-programming',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'python-programming',
    title: 'Python',
    titleGujarati: 'પાયથોન પ્રોગ્રામિંગ',
    icon: 'Code',
    image: '/images/services/python-programming.webp',
    shortDescription: 'Core Python, logic building, data structures & mini-projects.',
    overview: 'Industry-leading programming language course for students starting their software coding journey.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Basic logical thinking; suitable for 10th/12th/College students.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  },
  {
    id: 'web-development',
    category: 'Computer Courses',
    categoryId: 'computer-courses',
    slug: 'web-development',
    title: 'Web Development',
    titleGujarati: 'વેબ ડેવલપમેન્ટ (HTML, CSS, JS)',
    icon: 'Globe',
    image: '/images/services/web-development.webp',
    shortDescription: 'Build modern responsive websites from scratch.',
    overview: 'Hands-on practical training covering HTML5, CSS3, JavaScript and hosting live web projects.',
    newApplication: COURSE_NEW_APP,
    correctionUpdate: COURSE_CORRECTION,
    requiredDocuments: COURSE_DOCS,
    eligibility: [
      'Any student with passion for web design and programming.'
    ],
    process: COURSE_PROCESS,
    importantNotes: COURSE_NOTES,
    active: true,
    isActive: true
  }
];
