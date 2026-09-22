/**
 * Category 1 — Online Services
 * Standardized data for essential citizen identity and welfare services.
 */

const GOVT_DISCLAIMER = "Requirements, rules and fees may vary according to the latest government notification. Please verify with the concerned authority before submission.";

export const onlineServices = [
  {
    id: 'pan-card',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'pan-card',
    title: 'PAN Card',
    titleGujarati: 'પાન કાર્ડ',
    icon: 'FileText',
    image: '/images/services/pan-card.webp',
    shortDescription: 'New PAN, Update, Correction & Reprint services.',
    overview: 'PAN (Permanent Account Number) is a unique 10-character alphanumeric identification number issued by the Income Tax Department and is used for taxation and various financial transactions.',
    newApplication: [
      'Passport-size photograph and signature, where applicable',
      'Proof of identity such as Aadhaar, Passport or Voter ID',
      'Proof of address',
      'Proof of date of birth'
    ],
    correctionUpdate: [
      'Existing PAN number/card',
      'Supporting document for name/date of birth/address correction',
      'Legal supporting document for name change, where applicable'
    ],
    requiredDocuments: [
      'Aadhaar Card',
      'Passport',
      'Driving Licence',
      'Voter ID',
      'Birth/Matriculation/DOB proof',
      'Address proof'
    ],
    eligibility: [
      'Indian citizens',
      'Minors through parent/guardian where applicable',
      'Eligible firms, entities and organizations'
    ],
    process: [
      'Open the authorized PAN application portal.',
      'Select new PAN or correction/reissue service.',
      'Fill in the required details.',
      'Upload/submit required documents.',
      'Complete applicable authentication/payment.',
      'Save the acknowledgement/reference number.',
      'Download e-PAN or receive physical PAN as applicable.'
    ],
    importantNotes: [
      'A person should not possess more than one PAN.',
      'PAN requirements and Aadhaar linking rules can change according to Income Tax Department notifications.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html',
    active: true,
    isActive: true
  },
  {
    id: 'aadhaar-card',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'aadhaar-card',
    title: 'Aadhaar Card',
    titleGujarati: 'આધાર કાર્ડ',
    icon: 'Fingerprint',
    image: '/images/services/aadhaar.webp',
    shortDescription: 'Aadhaar enrolment and update services.',
    overview: 'Aadhaar is a 12-digit identity number issued by UIDAI to eligible residents based on demographic and biometric information.',
    newApplication: [
      'Visit an authorized Aadhaar enrolment centre.',
      'Submit valid identity/address documents.',
      'Provide photograph and required biometrics.'
    ],
    correctionUpdate: [
      'Address/name/date-of-birth demographic update where available online.',
      'Biometric/mobile-related updates may require a visit to an Aadhaar centre.',
      'Submit supporting documents where required.'
    ],
    requiredDocuments: [
      'Passport',
      'PAN',
      'Voter ID',
      'Driving Licence',
      'Electricity/water bill',
      'Bank/post-office records',
      'Other UIDAI-approved documents'
    ],
    eligibility: [
      'Eligible residents of India according to UIDAI rules.'
    ],
    process: [
      'Locate an authorized Aadhaar centre or use available UIDAI online services.',
      'Complete the application/update form.',
      'Submit original documents for verification.',
      'Provide required photograph/biometrics.',
      'Collect acknowledgement.',
      'Track status.',
      'Download e-Aadhaar when available.'
    ],
    importantNotes: [
      'Aadhaar update requirements vary according to UIDAI rules.',
      'Children require mandatory biometric updates at specified ages.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://myaadhaar.uidai.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'passport',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'passport',
    title: 'Passport',
    titleGujarati: 'પાસપોર્ટ',
    icon: 'Globe',
    image: '/images/services/passport.webp',
    shortDescription: 'New Passport, Renewal, Reissue & Minor Passports.',
    overview: 'Passport is an official travel document issued by the Government of India for international travel.',
    newApplication: [
      'Date-of-birth proof',
      'Address proof',
      'Identity proof',
      'Education proof where required for applicable passport status'
    ],
    correctionUpdate: [
      'Existing passport',
      'Supporting documents for address/name/marital-status changes',
      'Other documents according to Passport Seva requirements'
    ],
    requiredDocuments: [
      'Aadhaar/address proof',
      'Birth certificate or accepted DOB proof',
      'Existing passport for reissue',
      'Other Passport Seva-approved documents'
    ],
    eligibility: [
      'Indian citizens subject to applicable passport laws and eligibility conditions.'
    ],
    process: [
      'Register/login on Passport Seva.',
      'Select Fresh Passport or Re-issue.',
      'Fill the application.',
      'Pay applicable fee.',
      'Book PSK/POPSK appointment.',
      'Visit the centre with original documents.',
      'Complete verification.',
      'Complete police verification where applicable.',
      'Receive passport through the applicable delivery process.'
    ],
    importantNotes: [
      'Always verify the latest Passport Seva document checklist.',
      'Carry original documents and required copies during appointment.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.passportindia.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'driving-licence',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'driving-licence',
    title: 'Driving Licence',
    titleGujarati: 'ડ્રાઇવિંગ લાઇસન્સ',
    icon: 'Car',
    image: '/images/services/driving-licence.webp',
    shortDescription: 'Learner & Permanent Driving Licence services.',
    overview: 'Driving Licence is the legal authorization required to drive specified motor vehicles on public roads.',
    newApplication: [
      'Age proof',
      'Address proof',
      'Required photographs/signature',
      'Medical certificate where applicable'
    ],
    correctionUpdate: [
      'Existing driving licence',
      'Address/name correction proof',
      'Medical fitness document where required',
      'Renewal-related documents'
    ],
    requiredDocuments: [
      'Aadhaar/address proof',
      'Birth/DOB proof',
      'Existing licence for renewal/update',
      'Medical certificate where applicable'
    ],
    eligibility: [
      'Eligibility depends on vehicle class and applicable age requirements.',
      'Typical minimum ages must be displayed only according to current Parivahan/RTO rules.'
    ],
    process: [
      'Visit the official Parivahan/Sarathi portal.',
      'Apply for Learner Licence where required.',
      'Complete required test.',
      'Obtain Learner Licence.',
      'Apply for Driving Licence after the applicable waiting period.',
      'Book driving test.',
      'Attend RTO test.',
      'Receive licence after approval.'
    ],
    importantNotes: [
      'Licence eligibility and waiting periods can vary according to current rules.',
      'Always verify current RTO requirements.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://parivahan.gov.in/parivahan/',
    active: true,
    isActive: true
  },
  {
    id: 'ayushman-card',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'ayushman-card',
    title: 'Ayushman Card',
    titleGujarati: 'આયુષ્માન કાર્ડ',
    icon: 'HeartPulse',
    image: '/images/services/ayushman-card.webp',
    shortDescription: 'PM-JAY Health Card registration & download.',
    overview: 'Ayushman Bharat PM-JAY provides eligible beneficiaries access to cashless hospitalization benefits according to the applicable government scheme rules.',
    newApplication: [
      'Aadhaar/identity details',
      'Eligible family/ration-card details where applicable',
      'Mobile number for authentication where required'
    ],
    correctionUpdate: [
      'Family-member addition/update where permitted',
      'Demographic correction',
      'e-KYC update'
    ],
    requiredDocuments: [
      'Aadhaar',
      'Eligible ration/family document',
      'Other documents requested by the authorized system'
    ],
    eligibility: [
      'Eligibility is based on current PM-JAY and applicable state scheme criteria.'
    ],
    process: [
      'Visit the official beneficiary portal or authorized centre.',
      'Check beneficiary eligibility.',
      'Complete authentication/e-KYC.',
      'Verify beneficiary details.',
      'Generate/download the card where available.'
    ],
    importantNotes: [
      'Eligibility and benefit limits depend on the current scheme and applicable state implementation.',
      'Verify information through the official PM-JAY source.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://beneficiary.nha.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'e-shram-card',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'e-shram-card',
    title: 'e-Shram Card',
    titleGujarati: 'ઈ-શ્રમ કાર્ડ',
    icon: 'HardHat',
    image: '/images/services/e-shram.webp',
    shortDescription: 'National unorganized worker database registration.',
    overview: 'e-Shram is a national database initiative for eligible workers in the unorganized sector.',
    newApplication: [
      'Aadhaar',
      'Aadhaar-linked mobile number where required',
      'Bank account details',
      'Occupation and other required information'
    ],
    correctionUpdate: [
      'Address',
      'Occupation',
      'Bank information',
      'Other profile information where update facility is available'
    ],
    requiredDocuments: [
      'Aadhaar',
      'Bank account/passbook',
      'Other information requested by e-Shram'
    ],
    eligibility: [
      'Eligibility is subject to current e-Shram registration rules.'
    ],
    process: [
      'Open the official e-Shram portal.',
      'Start registration.',
      'Complete OTP/authentication.',
      'Enter personal and occupational details.',
      'Enter bank details.',
      'Submit registration.',
      'Download/save the e-Shram card.'
    ],
    importantNotes: [
      'Verify current eligibility conditions before registration.',
      'Registration does not automatically guarantee eligibility for every government scheme.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://eshram.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'pm-kisan',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'pm-kisan',
    title: 'PM-KISAN',
    titleGujarati: 'પીએમ-કિસાન સન્માન નિધિ',
    icon: 'Wheat',
    image: '/images/services/pm-kisan.webp',
    shortDescription: 'Farmer registration, e-KYC and status check.',
    overview: 'PM-KISAN is a Government of India income-support scheme for eligible farmer families according to current scheme rules.',
    newApplication: [
      'Aadhaar',
      'Land ownership/land record information',
      'Bank account details',
      'Other required information'
    ],
    correctionUpdate: [
      'e-KYC',
      'Aadhaar-related correction',
      'Land information update where applicable',
      'Bank details where permitted'
    ],
    requiredDocuments: [
      'Land records (7/12, 8A where applicable)',
      'Aadhaar',
      'Bank details',
      'Other documents according to current PM-KISAN requirements'
    ],
    eligibility: [
      'Eligible farmer families according to current PM-KISAN rules.'
    ],
    process: [
      'Open official PM-KISAN portal.',
      'Select Farmer Registration.',
      'Enter Aadhaar and required details.',
      'Submit land and bank information.',
      'Complete verification/e-KYC.',
      'Track application/benefit status.'
    ],
    importantNotes: [
      'Benefit amount, eligibility and e-KYC requirements must be shown according to the latest official notification.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://pmkisan.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'income-certificate',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'income-certificate',
    title: 'Income Certificate',
    titleGujarati: 'આવક પ્રમાણપત્ર',
    icon: 'FileCheck2',
    image: '/images/services/income-certificate.webp',
    shortDescription: 'Official income proof issued by Revenue Authority.',
    overview: 'An official certificate showing income information for applicable government, education, scholarship or other purposes.',
    newApplication: [
      'Identity/address proof',
      'Income-related evidence',
      'Required declaration/affidavit where applicable'
    ],
    correctionUpdate: [
      'Correct supporting documents',
      'Fresh income information',
      'Renewal/reapplication according to authority requirements'
    ],
    requiredDocuments: [
      'Aadhaar',
      'Ration card/address proof',
      'Salary slip/Form 16/ITR or applicable income evidence',
      'Talati/Mamlatdar verified report where applicable'
    ],
    eligibility: [
      'Applicants requiring an official income certificate for eligible purposes.'
    ],
    process: [
      'Open the applicable state service portal (e.g. Digital Gujarat).',
      'Select Income Certificate.',
      'Fill the application.',
      'Upload documents.',
      'Pay applicable fee, if any.',
      'Submit and track the application.',
      'Download certificate after approval.'
    ],
    importantNotes: [
      'Validity and issuing authority can vary by purpose and state rules.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.digitalgujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'caste-certificate',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'caste-certificate',
    title: 'Caste Certificate',
    titleGujarati: 'જાતિ પ્રમાણપત્ર',
    icon: 'Award',
    image: '/images/services/caste-certificate.webp',
    shortDescription: 'SC / ST / OBC category community certificate.',
    overview: 'Official certificate establishing membership in a recognized reserved category according to applicable government records and rules.',
    newApplication: [
      "Applicant's school records",
      'Parent/family caste evidence',
      'Genealogy/family records where required',
      'Residence/identity documents'
    ],
    correctionUpdate: [
      'Existing certificate',
      'Correct supporting documents',
      'Evidence supporting correction'
    ],
    requiredDocuments: [
      'Applicant LC/school record',
      'Parent/family records',
      'Aadhaar',
      'Ration/address proof',
      'Other authority-required evidence'
    ],
    eligibility: [
      'Applicants belonging to categories recognized under applicable government lists.'
    ],
    process: [
      'Open the applicable Digital Gujarat/local government service.',
      'Select the caste certificate service.',
      'Fill details.',
      'Upload supporting documents.',
      'Complete verification.',
      'Receive/download certificate after approval.'
    ],
    importantNotes: [
      'Document requirements can vary based on category, family history and authority.',
      'Central and state category requirements may differ.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.digitalgujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'non-creamy-layer',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'non-creamy-layer',
    title: 'Non-Creamy Layer Certificate',
    titleGujarati: 'નોન-ક્રિમી લેયર પ્રમાણપત્ર',
    icon: 'ShieldCheck',
    image: '/images/services/ncl-certificate.webp',
    shortDescription: 'OBC / SEBC certificate for reservation benefits.',
    overview: 'A certificate used by eligible applicants of applicable OBC/SEBC categories to establish non-creamy-layer status according to relevant government rules.',
    newApplication: [
      'Caste certificate',
      'Income documents',
      'Identity/address proof',
      'Required declaration/affidavit'
    ],
    correctionUpdate: [
      'Updated income information',
      'Corrected identity/caste documents',
      'Renewal according to current rules'
    ],
    requiredDocuments: [
      'Caste certificate',
      'Aadhaar',
      'Address proof',
      'Applicable income documents',
      'Required affidavit'
    ],
    eligibility: [
      'Eligible applicants according to the applicable state/central NCL rules.'
    ],
    process: [
      'Open the applicable government portal.',
      'Select NCL service.',
      'Enter caste and income information.',
      'Upload documents.',
      'Submit application.',
      'Complete verification.',
      'Download certificate after approval.'
    ],
    importantNotes: [
      'State and Central OBC/NCL requirements can differ.',
      'Income limits and validity must be verified against the latest notification.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.digitalgujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'ews-certificate',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'ews-certificate',
    title: 'EWS Certificate',
    titleGujarati: 'EWS પ્રમાણપત્ર',
    icon: 'FileBadge',
    image: '/images/services/ews-certificate.webp',
    shortDescription: 'Economically Weaker Section certificate.',
    overview: 'Certificate used to establish eligibility under applicable Economically Weaker Section reservation rules.',
    newApplication: [
      'Income details',
      'Asset/property details',
      'Identity/address proof',
      'Applicable category/non-reservation status evidence'
    ],
    correctionUpdate: [
      'Updated income/property details',
      'New certificate according to applicable validity period'
    ],
    requiredDocuments: [
      'Aadhaar',
      'Income evidence',
      'Land/property records where required',
      'Address proof',
      'Other authority-required documents'
    ],
    eligibility: [
      'Applicants meeting the applicable EWS income and asset criteria.'
    ],
    process: [
      'Open the applicable government portal.',
      'Fill EWS application.',
      'Enter income and asset details.',
      'Upload documents.',
      'Complete verification.',
      'Download certificate after approval.'
    ],
    importantNotes: [
      'State and Central EWS criteria/forms may differ.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.digitalgujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'domicile-certificate',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'domicile-certificate',
    title: 'Domicile / Residence Certificate',
    titleGujarati: 'રહેઠાણ પ્રમાણપત્ર',
    icon: 'Home',
    image: '/images/services/domicile-certificate.webp',
    shortDescription: 'Permanent residence proof for jobs & colleges.',
    overview: 'An official document used to establish residence/domicile according to applicable state requirements.',
    newApplication: [
      'Long-term residence evidence',
      'Identity/address proof',
      'School/birth records where applicable',
      'Local verification documents where required'
    ],
    correctionUpdate: [
      'Updated address/residence evidence',
      'Correction documents'
    ],
    requiredDocuments: [
      'Aadhaar',
      'Address proof',
      'School Leaving Certificate/Birth Certificate',
      'Utility bill/property/ration records where applicable'
    ],
    eligibility: [
      'Applicants meeting the applicable state domicile/residence requirements.'
    ],
    process: [
      'Open the applicable government/local service portal.',
      'Fill application.',
      'Upload supporting documents.',
      'Complete verification.',
      'Download certificate after approval.'
    ],
    importantNotes: [
      'Residence-duration requirements vary by purpose and current state rules.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://www.digitalgujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'birth-certificate',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'birth-certificate',
    title: 'Birth Certificate',
    titleGujarati: 'જન્મ પ્રમાણપત્ર',
    icon: 'Baby',
    image: '/images/services/birth-certificate.webp',
    shortDescription: 'Official birth record registration & download.',
    overview: "Official record of a person's birth issued by the competent local registration authority.",
    newApplication: [
      'Hospital birth report/discharge record where applicable',
      'Parent identity documents',
      'Other registrar-required documents'
    ],
    correctionUpdate: [
      'Name addition',
      'Spelling correction',
      'Date/place or parent-detail correction where legally permitted',
      'Supporting evidence'
    ],
    requiredDocuments: [
      'Birth/hospital record',
      'Parent identity proof',
      'Other registrar-required documents'
    ],
    eligibility: [
      'Births requiring registration under applicable law.'
    ],
    process: [
      'Contact the competent local birth registrar/e-Olakh service where available.',
      'Submit birth details.',
      'Provide required documents.',
      'Complete verification.',
      'Download/collect certificate.'
    ],
    importantNotes: [
      'Registration timelines and late-registration procedures depend on current law.',
      'Do not hard-code a fixed court/SDM procedure unless verified.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://eolakh.gujarat.gov.in/',
    active: true,
    isActive: true
  },
  {
    id: 'death-certificate',
    category: 'Online Services',
    categoryId: 'online-services',
    slug: 'death-certificate',
    title: 'Death Certificate',
    titleGujarati: 'મૃત્યુ પ્રમાણપત્ર',
    icon: 'FileText',
    image: '/images/services/death-certificate.webp',
    shortDescription: 'Official death record registration & download.',
    overview: "Official record of a person's death used for legal, inheritance, insurance, pension and administrative purposes.",
    newApplication: [
      'Hospital death report where applicable',
      'Cremation/burial record where applicable',
      'Identity details of deceased and informant'
    ],
    correctionUpdate: [
      'Existing death certificate',
      'Supporting evidence for correction'
    ],
    requiredDocuments: [
      'Medical/death report',
      'Cremation/burial receipt where applicable',
      'Identity documents',
      'Other registrar-required documents'
    ],
    eligibility: [
      'Legal family members/informants or persons authorized under applicable registration rules.'
    ],
    process: [
      'Report the death to the competent local registrar.',
      'Submit required documents.',
      'Complete verification.',
      'Receive/download death certificate.'
    ],
    importantNotes: [
      'Registration timelines and late-registration requirements vary according to law and local authority.',
      GOVT_DISCLAIMER
    ],
    officialWebsite: 'https://eolakh.gujarat.gov.in/',
    active: true,
    isActive: true
  }
];
