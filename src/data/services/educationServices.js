/**
 * Category 2 — Education Services
 * Standardized data for college, university and academic assistance services.
 */

const GOVT_DISCLAIMER = "Deadlines, fee structures, seat allocations and eligibility criteria depend on current university and institutional notifications. Please verify with the concerned institution.";

export const educationServices = [
  {
    id: 'college-admission',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'college-admission',
    title: 'College Admission',
    titleGujarati: 'કોલેજ પ્રવેશ',
    icon: 'GraduationCap',
    image: '/images/services/college-admission.webp',
    shortDescription: 'Undergraduate & Postgraduate college admission assistance.',
    overview: 'Admission assistance for undergraduate/postgraduate programs offered by recognized colleges/universities.',
    newApplication: [
      '10th/12th marksheets as applicable',
      'School Leaving Certificate (LC)',
      'Category certificate where applicable',
      'Passport-size photograph',
      'Identity proof'
    ],
    correctionUpdate: [
      'Correction through authorized admission portal/help centre during the permitted correction window.'
    ],
    requiredDocuments: [
      '10th marksheet',
      '12th marksheet',
      'LC/TC',
      'Aadhaar',
      'Category/EWS documents where applicable',
      'Passport photograph'
    ],
    eligibility: [
      'Eligibility depends on the selected course and university criteria.'
    ],
    process: [
      'Register on the applicable university/admission portal.',
      'Complete application.',
      'Upload documents.',
      'Select college/course choices.',
      'Check merit/allocation.',
      'Pay applicable fee.',
      'Confirm admission.'
    ],
    importantNotes: [
      'Deadlines and eligibility vary by university/course.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.vnsgu.ac.in/',
    active: true,
    isActive: true
  },
  {
    id: 'vanraj-college-admission',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'vanraj-college-admission',
    title: 'Shree Vanraj Arts & Commerce College Admission',
    titleGujarati: 'શ્રી વનરાજ આર્ટ્સ એન્ડ કોમર્સ કોલેજ પ્રવેશ',
    icon: 'School',
    image: '/images/services/vanraj-college-admission.webp',
    shortDescription: 'Dedicated admission desk for Shree Vanraj College, Dharampur.',
    overview: 'Admission assistance for eligible students applying to the specified college and its available programs.',
    newApplication: [
      'HSC marksheet',
      'School Leaving Certificate (LC)',
      'Aadhaar',
      'University enrollment details where applicable',
      'Category certificate where applicable'
    ],
    correctionUpdate: [
      'Contact the college administration for permitted corrections or subject changes.'
    ],
    requiredDocuments: [
      '12th marksheet',
      'LC',
      'Aadhaar',
      'Passport photographs',
      'Category documents where applicable'
    ],
    eligibility: [
      'Depends on the course and college admission rules.'
    ],
    process: [
      'Complete applicable online/college application.',
      'Submit documents.',
      'Complete verification.',
      'Pay semester/admission fee.',
      'Receive admission confirmation.'
    ],
    importantNotes: [
      'Course availability and admission requirements must be verified with the college/university.',
      GOVT_DISCLAIMER
    ],
    active: true,
    isActive: true
  },
  {
    id: 'cgas-registration',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'cgas-registration',
    title: 'CGAS Registration',
    titleGujarati: 'CGAS રજીસ્ટ્રેશન',
    icon: 'FileCheck',
    image: '/images/services/cgas-registration.webp',
    shortDescription: 'Student registration & academic data portal enrollment.',
    overview: 'Student registration/academic data service as applicable to the concerned institution or university system.',
    newApplication: [
      'Student name',
      'Seat/enrollment details',
      'Admission details',
      'Required institutional documents'
    ],
    correctionUpdate: [
      'Personal information correction',
      'Academic information correction according to portal rules'
    ],
    requiredDocuments: [
      'Admission/fee receipt',
      'Aadhaar',
      'Previous marksheet',
      'Enrollment/admission record'
    ],
    eligibility: [
      'Students covered by the relevant institutional system.'
    ],
    process: [
      'Login/register on the applicable portal.',
      'Verify student information.',
      'Submit/confirm information.',
      'Save registration details.'
    ],
    importantNotes: [
      'Verify the exact meaning and current requirements of CGAS with the concerned institution before publishing this service as a government-wide service.',
      GOVT_DISCLAIMER
    ],
    active: true,
    isActive: true
  },
  {
    id: 'hostel-admission',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'hostel-admission',
    title: 'Hostel Admission',
    titleGujarati: 'હોસ્ટેલ પ્રવેશ',
    icon: 'Building',
    image: '/images/services/hostel-admission.webp',
    shortDescription: 'Government & Institutional hostel accommodation application.',
    overview: 'Application assistance for eligible students seeking accommodation in eligible government, grant-in-aid or institutional hostels.',
    newApplication: [
      'College admission proof',
      'Income certificate',
      'Category certificate where applicable',
      'Residence/distance proof',
      'Photograph'
    ],
    correctionUpdate: [
      'Renewal',
      'Room/allocation information',
      'Permitted profile correction'
    ],
    requiredDocuments: [
      'College admission/fee receipt',
      'Income certificate',
      'Category certificate',
      'Residence proof',
      'Photograph'
    ],
    eligibility: [
      'Depends on hostel, category, course and current admission rules.'
    ],
    process: [
      'Register on applicable hostel portal.',
      'Fill application.',
      'Upload documents.',
      'Submit.',
      'Check merit/allocation.',
      'Complete physical verification where required.',
      'Confirm hostel admission.'
    ],
    importantNotes: [
      'Hostel rules, fees and eligibility vary by institution.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.digitalgujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'scholarship-form',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'scholarship-form',
    title: 'Digital Gujarat Scholarship',
    titleGujarati: 'ડિજિટલ ગુજરાત સ્કોલરશિપ',
    icon: 'Sparkles',
    image: '/images/services/scholarship.webp',
    shortDescription: 'Post Matric Scholarship for SC, ST, SEBC & EWS students.',
    overview: 'Online scholarship application assistance for eligible students under applicable state/central scholarship schemes.',
    newApplication: [
      'Current fee receipt',
      'Bonafide certificate',
      'Aadhaar-linked bank details where applicable',
      'Marksheets',
      'Income/caste certificate where applicable'
    ],
    correctionUpdate: [
      'Resolve deficiencies',
      'Re-upload corrected documents',
      'Correct application details during permitted correction period'
    ],
    requiredDocuments: [
      '10th/12th marksheet',
      'Income certificate',
      'Caste certificate where applicable',
      'Fee receipt',
      'Bonafide certificate',
      'Bank details (Aadhaar linked)',
      'Hostel certificate where applicable'
    ],
    eligibility: [
      'Depends on scholarship scheme, category, course and current income criteria.'
    ],
    process: [
      'Login to Digital Gujarat portal.',
      'Select applicable scholarship scheme.',
      'Complete application form.',
      'Upload documents.',
      'Submit.',
      'Print/save application where required.',
      'Complete institutional verification.'
    ],
    importantNotes: [
      'Scholarship criteria, income limits and deadlines vary by scheme and academic year.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.digitalgujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'university-exam-form',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'university-exam-form',
    title: 'University Exam Form',
    titleGujarati: 'યુનિવર્સિટી પરીક્ષા ફોર્મ',
    icon: 'ClipboardList',
    image: '/images/services/university-exam.webp',
    shortDescription: 'Semester & Annual exam online registration and hall ticket.',
    overview: 'Online application for eligible students appearing in university/semester examinations.',
    newApplication: [
      'Enrollment number',
      'Subject details',
      'Exam fee',
      'Previous academic information where required'
    ],
    correctionUpdate: [
      'Subject/backlog corrections according to university correction rules.'
    ],
    requiredDocuments: [
      'Student ID',
      'Previous marksheet',
      'Fee receipt',
      'Enrollment details'
    ],
    eligibility: [
      'Registered students meeting attendance and academic requirements.'
    ],
    process: [
      'Login to university portal.',
      'Verify student details.',
      'Select subjects.',
      'Pay examination fee.',
      'Submit form.',
      'Download/print confirmation or hall ticket when released.'
    ],
    importantNotes: [
      'Exam dates, fees and late fees depend on the university notification.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.vnsgu.ac.in/',
    active: true,
    isActive: true
  },
  {
    id: 'university-registration',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'university-registration',
    title: 'University Registration',
    titleGujarati: 'યુનિવર્સિટી રજીસ્ટ્રેશન',
    icon: 'BookOpen',
    image: '/images/services/university-registration.webp',
    shortDescription: 'Student enrollment and university ID registration.',
    overview: 'Registration/enrollment process through which a student receives the applicable university enrollment or registration number.',
    newApplication: [
      'Admission details',
      '12th certificate',
      'Transfer/Leaving Certificate',
      'Migration/eligibility documents where applicable'
    ],
    correctionUpdate: [
      'Name/spelling correction',
      'Personal information correction according to university rules'
    ],
    requiredDocuments: [
      '12th certificate',
      'TC/LC',
      'Eligibility certificate where applicable',
      'Migration certificate where applicable'
    ],
    eligibility: [
      'Newly admitted students according to university rules.'
    ],
    process: [
      'College submits student information.',
      'University verifies data.',
      'Student details are confirmed.',
      'Enrollment/registration number is generated.'
    ],
    importantNotes: [
      'Enrollment number rules differ by university.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.vnsgu.ac.in/',
    active: true,
    isActive: true
  },
  {
    id: 'resume-cv-making',
    category: 'Education Services',
    categoryId: 'education-services',
    slug: 'resume-cv-making',
    title: 'Resume / CV Making',
    titleGujarati: 'રિઝ્યૂમે / CV બનાવટ',
    icon: 'FileText',
    image: '/images/services/resume-cv.webp',
    shortDescription: 'ATS-friendly, professional CV and bio-data creation.',
    overview: 'Professional resume/CV preparation service for students, freshers and job seekers.',
    newApplication: [
      'Personal information',
      'Education',
      'Skills',
      'Projects',
      'Experience',
      'Certifications'
    ],
    correctionUpdate: [
      'Add experience',
      'Add projects/certifications',
      'Update skills',
      'Update layout/design'
    ],
    requiredDocuments: [
      'Existing resume if available',
      'Education certificates',
      'Experience details',
      'Project details',
      'Professional photo if required'
    ],
    eligibility: [
      'Any job seeker or student.'
    ],
    process: [
      'Collect candidate information.',
      'Select suitable template.',
      'Organize education/skills/experience.',
      'Apply ATS-friendly formatting.',
      'Proofread.',
      'Export PDF and print copy.'
    ],
    importantNotes: [
      'Candidate must verify all information before final submission.',
      'Ensure contact numbers and email address are active and professional.'
    ],
    active: true,
    isActive: true
  }
];
