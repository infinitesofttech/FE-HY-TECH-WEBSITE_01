/**
 * HY-TECH Computer Education & Online Hub
 * Standardized 32+ Core Source Services Dataset
 * Structured with dynamic operations (new, correction, update, renewal),
 * exact document checklists, bilingual titles, and admin-friendly fields.
 */

const GOVT_DISCLAIMER = "Requirements, rules and fees may vary according to the latest government notification. Please verify with the concerned authority before submission.";

export const sourceServicesData = [
  {
    id: "election-card",
    number: 1,
    slug: "election-card",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "Election Card (Voter ID)",
      gu: "ચુંટણી કાર્ડ (મતદાર ઓળખપત્ર)"
    },
    title: "Election Card",
    titleGujarati: "ચુંટણી કાર્ડ",
    image: "/images/services/voter-id.webp",
    shortDescription: {
      en: "New voter registration, birth date correction, address change, and name update.",
      gu: "નવું ચુંટણી કાર્ડ, જન્મ તારીખ સુધારો, સરનામું ફેરફાર અને પતિના નામે કાર્ડ."
    },
    operations: {
      new: {
        title: { en: "New Election Card", gu: "નવું ચુંટણી કાર્ડ" },
        documents: [
          "Aadhaar Card",
          "Passport Size Photograph",
          "Family Member Election Card (Voter Reference)",
          "Mobile Number"
        ]
      },
      correction: {
        title: { en: "Birth Date Correction", gu: "જન્મ તારીખ સુધારો" },
        documents: [
          "Birth Certificate / School Leaving Certificate",
          "Aadhaar Card",
          "Current Election Card"
        ]
      },
      update: {
        title: { en: "Address Correction", gu: "સરનામું સુધારો" },
        documents: [
          "Light Bill / Ration Card",
          "Aadhaar Card",
          "Current Election Card"
        ]
      },
      spouseNameUpdate: {
        title: { en: "Election Card in Husband's Name", gu: "પતિના નામે ચુંટણી કાર્ડ" },
        documents: [
          "Husband-Wife Election Card",
          "Aadhaar Card",
          "Marriage Certificate / Kankotri",
          "PAN Card"
        ]
      }
    },
    eligibility: [
      "Indian citizen residing in Gujarat/India",
      "Completed 18 years of age or turning 18 in current qualifying year",
      "Not disqualified under any election law"
    ],
    process: [
      "Collect and verify personal identity proofs.",
      "Select operation (New Form 6 / Correction Form 8).",
      "Fill online application on Election Commission Voter Portal.",
      "Upload documents and photograph.",
      "Submit application and collect digital tracking reference slip.",
      "Physical verification by local BLO and delivery by post."
    ],
    notes: [
      "Ensure mobile number is linked for digital e-EPIC download.",
      "One citizen cannot hold more than one voter registration.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://voters.eci.gov.in/",
    displayOrder: 1,
    isActive: true
  },
  {
    id: "aadhaar-card",
    number: 2,
    slug: "aadhaar-card",
    category: "Identity Documents",
    categoryId: "online-services",
    name: {
      en: "Aadhaar Card",
      gu: "આધાર કાર્ડ"
    },
    title: "Aadhaar Card",
    titleGujarati: "આધાર કાર્ડ",
    image: "/images/services/aadhaar.webp",
    shortDescription: {
      en: "New Aadhaar enrolment, biometric update, address change, and mobile linking.",
      gu: "નવું આધાર કાર્ડ, બાયોમેટ્રિક અપડેટ, સરનામું સુધારો અને મોબાઈલ લિંકિંગ."
    },
    operations: {
      new: {
        title: { en: "New Aadhaar Enrolment", gu: "નવું આધાર કાર્ડ" },
        documents: [
          "Birth Certificate / School Leaving Certificate",
          "Parent's Aadhaar Card (for minor enrolment)",
          "Address Proof (Ration Card / Light Bill)"
        ]
      },
      update: {
        title: { en: "Address / Mobile Update", gu: "સરનામું અને મોબાઈલ અપડેટ" },
        documents: [
          "Existing Aadhaar Card",
          "Light Bill / Bank Passbook / Rent Agreement",
          "Active Mobile Number for OTP"
        ]
      },
      correction: {
        title: { en: "Name & Date of Birth Correction", gu: "નામ અને જન્મ તારીખ સુધારો" },
        documents: [
          "Birth Certificate / PAN Card / School LC",
          "Gazette notification (if formal name change)",
          "Existing Aadhaar Card"
        ]
      }
    },
    eligibility: [
      "All resident citizens of India",
      "Minors and infants with parent/guardian consent"
    ],
    process: [
      "Schedule appointment at Dharampur Aadhaar Kendra.",
      "Present original valid supporting proofs for verification.",
      "Complete live biometric scan (iris, fingerprints, photo).",
      "Receive 14-digit Enrolment ID (EID) acknowledgement receipt.",
      "Track status online and download e-Aadhaar once generated."
    ],
    notes: [
      "Mandatory biometric update required for children at ages 5 and 15.",
      "Keep original documents handy for verification.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://uidai.gov.in/",
    displayOrder: 2,
    isActive: true
  },
  {
    id: "pan-card",
    number: 3,
    slug: "pan-card",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "PAN Card",
      gu: "પાન કાર્ડ"
    },
    title: "PAN Card",
    titleGujarati: "પાન કાર્ડ",
    image: "/images/services/pan-card.webp",
    shortDescription: {
      en: "New PAN, PAN correction, and Date of Birth correction services.",
      gu: "નવું પાન કાર્ડ, પાન કાર્ડ સુધારો અને જન્મ તારીખ સુધારો સેવાઓ."
    },
    operations: {
      new: {
        title: { en: "New PAN Card", gu: "નવું પાન કાર્ડ" },
        documents: [
          "Aadhaar Card",
          "Mobile Number",
          "E-mail ID",
          "Election Card / Birth Certificate / ABHA Card / Driving Licence for birth proof"
        ]
      },
      correction: {
        title: { en: "PAN Card Correction", gu: "પાન કાર્ડ સુધારો" },
        documents: [
          "PAN Card",
          "Aadhaar Card",
          "Mobile Number",
          "Election Card / Birth Certificate / ABHA Card / Driving Licence",
          "E-mail ID"
        ]
      },
      dobCorrection: {
        title: { en: "PAN DOB Correction", gu: "પાન કાર્ડ જન્મ તારીખ સુધારો" },
        documents: [
          "PAN Card",
          "Aadhaar Card",
          "Mobile Number",
          "Election Card / Birth Certificate / ABHA Card / Driving Licence",
          "E-mail ID"
        ]
      }
    },
    eligibility: [
      "Any Indian citizen, individual, minor (represented by guardian), or firm",
      "Applicants with valid photo and date of birth proof"
    ],
    process: [
      "Collect and verify Aadhaar and supporting birth proof.",
      "Initiate Form 49A (New) or Form 49A Correction on NSDL/UTIITSL.",
      "Complete Aadhaar e-KYC or physical photo upload.",
      "Submit government fee payment and generate acknowledgement receipt.",
      "e-PAN dispatched to email within 2-3 working days, physical card delivered by India Post."
    ],
    notes: [
      "Holding more than one PAN card is illegal under Section 272B of Income Tax Act.",
      "Aadhaar linking is mandatory for active PAN validity.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://incometax.gov.in/",
    displayOrder: 3,
    isActive: true
  },
  {
    id: "abha-card",
    number: 4,
    slug: "abha-card",
    category: "Identity Documents",
    categoryId: "online-services",
    name: {
      en: "ABHA Card (Health Account)",
      gu: "આભા કાર્ડ (ડિજિટલ હેલ્થ એકાઉન્ટ)"
    },
    title: "ABHA Card",
    titleGujarati: "આભા કાર્ડ",
    image: "/images/services/ayushman-card.webp",
    shortDescription: {
      en: "Ayushman Bharat Health Account 14-digit digital health ID card.",
      gu: "આયુષ્માન ભારત ૧૪-અંકનું ડિજિટલ હેલ્થ ઓળખપત્ર."
    },
    operations: {
      new: {
        title: { en: "New ABHA Card Registration", gu: "નવું આભા કાર્ડ રજીસ્ટ્રેશન" },
        documents: [
          "Aadhaar Card",
          "Mobile Number linked with Aadhaar",
          "Self Declaration / Basic Profile Details"
        ]
      },
      update: {
        title: { en: "ABHA Profile Update", gu: "આભા પ્રોફાઇલ અપડેટ" },
        documents: [
          "Existing 14-digit ABHA Number",
          "Aadhaar Card",
          "OTP on linked mobile"
        ]
      }
    },
    eligibility: [
      "All Indian citizens holding valid Aadhaar Card",
      "Any individual seeking digital hospital records management"
    ],
    process: [
      "Open National Health Authority ABHA portal.",
      "Enter 12-digit Aadhaar number for OTP verification.",
      "Confirm demographic and address details.",
      "Create personalized ABHA address (e.g. name@abdm).",
      "Instant PDF download and PVC card printing at center."
    ],
    notes: [
      "Enables paperless health treatment records across government and private hospitals.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://healthid.ndhm.gov.in/",
    displayOrder: 4,
    isActive: true
  },
  {
    id: "ayushman-card",
    number: 5,
    slug: "ayushman-card",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "Ayushman Card (PM-JAY MA)",
      gu: "આયુષ્માન ભારત કાર્ડ (પ્રધાનમંત્રી જન આરોગ્ય યોજના)"
    },
    title: "Ayushman Card",
    titleGujarati: "આયુષ્માન કાર્ડ",
    image: "/images/services/ayushman-card.webp",
    shortDescription: {
      en: "₹5 to ₹10 Lakh cashless hospital treatment card for eligible families.",
      gu: "પાત્ર પરિવારો માટે વાર્ષિક ₹૫ થી ₹૧૦ લાખ સુધીની કેશલેસ હોસ્પિટલ સારવાર."
    },
    operations: {
      new: {
        title: { en: "New Ayushman Card", gu: "નવું આયુષ્માન કાર્ડ" },
        documents: [
          "Ration Card (NFSA / Antyodaya / Priority Household)",
          "Aadhaar Card of all family members",
          "Active Mobile Number",
          "Income Certificate (if PM-JAY MA Card)"
        ]
      },
      update: {
        title: { en: "Ayushman e-KYC Update", gu: "આયુષ્માન e-KYC અપડેટ" },
        documents: [
          "Aadhaar Card",
          "Ration Card",
          "Live Biometric Scan or Aadhaar OTP"
        ]
      }
    },
    eligibility: [
      "Families listed in SECC census or holding Gujarat NFSA ration card",
      "Annual family income within prescribed government limits",
      "Senior citizens aged 70+ (Universal Vaya Vandana coverage)"
    ],
    process: [
      "Search beneficiary name in PM-JAY Setu database.",
      "Match family members listed on Ration Card.",
      "Perform live Aadhaar e-KYC / Biometric authentication.",
      "Submit application to authority for online approval.",
      "Print high-definition PVC smart card once approved."
    ],
    notes: [
      "Provides cashless inpatient care at all empaneled hospitals across India.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://beneficiary.nha.gov.in/",
    displayOrder: 5,
    isActive: true
  },
  {
    id: "ration-card-kyc",
    number: 6,
    slug: "ration-card-kyc",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "Ration Card KYC & Services",
      gu: "રેશન કાર્ડ e-KYC અને સેવાઓ"
    },
    title: "Ration Card KYC",
    titleGujarati: "રેશન કાર્ડ KYC",
    image: "/images/services/income-certificate.webp",
    shortDescription: {
      en: "Mandatory Aadhaar e-KYC seeding, member addition, and name deletion.",
      gu: "રેશનકાર્ડ આધાર e-KYC લિંકિંગ, નવા સભ્યનું નામ ઉમેરવું અથવા કમી કરવું."
    },
    operations: {
      update: {
        title: { en: "Ration Card Aadhaar e-KYC", gu: "રેશન કાર્ડ આધાર e-KYC" },
        documents: [
          "Original Barcoded Ration Card",
          "Aadhaar Card of all family members",
          "Active Mobile Number linked with Aadhaar",
          "Biometric verification at center"
        ]
      },
      newMember: {
        title: { en: "Add Family Member", gu: "નવા સભ્યનું નામ ઉમેરવું" },
        documents: [
          "Original Ration Card",
          "Child Birth Certificate / Marriage Certificate (for wife)",
          "Aadhaar Card of new member",
          "Name Deletion Certificate from previous ration card (if married)"
        ]
      },
      split: {
        title: { en: "Separate / Split Ration Card", gu: "નવું અલગ રેશન કાર્ડ" },
        documents: [
          "Existing Family Ration Card",
          "Electricity Bill of new residence",
          "Aadhaar Card and PAN Card",
          "Marriage Certificate"
        ]
      }
    },
    eligibility: [
      "All ration card holders in Dharampur and Gujarat State",
      "Mandatory for all family members to receive monthly grain quotas"
    ],
    process: [
      "Open Gujarat Food & Civil Supplies e-KYC portal.",
      "Enter Ration Card number and retrieve family list.",
      "Verify each member via Aadhaar OTP or Biometric scan.",
      "Upload supporting proofs for member additions.",
      "Obtain approval and updated digital ration card slip."
    ],
    notes: [
      "Unlinked ration card members risk suspension of food grain quota.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://ipds.gujarat.gov.in/",
    displayOrder: 6,
    isActive: true
  },
  {
    id: "awas-yojana",
    number: 7,
    slug: "awas-yojana",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "Pradhan Mantri Awas Yojana (PMAY)",
      gu: "પ્રધાનમંત્રી આવાસ યોજના (PMAY ગ્રામીણ / શહેરી)"
    },
    title: "Awas Yojana",
    titleGujarati: "આવાસ યોજના",
    image: "/images/services/government-job.webp",
    shortDescription: {
      en: "Housing subsidy assistance for pucca house construction.",
      gu: "પાકા મકાન બાંધકામ સહાય અને આવાસ સબસિડી માટે ઓનલાઈન અરજી."
    },
    operations: {
      new: {
        title: { en: "New Awas Yojana Application", gu: "નવું આવાસ યોજના ફોર્મ" },
        documents: [
          "Aadhaar Card of Head and Family Members",
          "Ration Card",
          "Bank Account Passbook (Aadhaar Seeded)",
          "Income Certificate / BPL Certificate",
          "Land Ownership Documents (7/12, 8-A or Gram Panchayat Certificate)",
          "Passport Size Photos and Photograph of Existing Kucha House"
        ]
      }
    },
    eligibility: [
      "Family without any pucca house anywhere in India",
      "Belonging to BPL / EWS / LIG economic categories",
      "Resident of Dharampur / Gujarat with valid rural/urban registration"
    ],
    process: [
      "Assess land ownership and economic survey status.",
      "Fill online application on PMAY-G / PMAY-U portal.",
      "Upload geo-tagged photo of existing structure and documents.",
      "Submit application to Gram Panchayat / Nagarpalika.",
      "Track stage-wise DBT fund disbursement directly into bank."
    ],
    notes: [
      "Subsidy funds are released directly into bank account in installments.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://pmayg.nic.in/",
    displayOrder: 7,
    isActive: true
  },
  {
    id: "udyam-registration",
    number: 8,
    slug: "udyam-registration",
    category: "Business",
    categoryId: "online-services",
    name: {
      en: "Udyog Aadhaar / Udyam Registration",
      gu: "ઉદ્યોગ આધાર / ઉદ્યમ રજીસ્ટ્રેશન (MSME)"
    },
    title: "Udyam Registration",
    titleGujarati: "ઉદ્યમ રજીસ્ટ્રેશન",
    image: "/images/services/basic-computer.webp",
    shortDescription: {
      en: "Official government MSME registration certificate for small businesses and shops.",
      gu: "વેપારીઓ, દુકાનદારો અને લઘુ ઉદ્યોગો માટે સરકારી MSME પ્રમાણપત્ર."
    },
    operations: {
      new: {
        title: { en: "New Udyam Registration", gu: "નવું ઉદ્યમ રજીસ્ટ્રેશન" },
        documents: [
          "Aadhaar Card of Business Owner",
          "PAN Card (Proprietor / Firm)",
          "Bank Account Details (Account Number & IFSC)",
          "Business Name, Address, and Date of Commencement",
          "Mobile Number linked with Aadhaar"
        ]
      },
      update: {
        title: { en: "Udyam Certificate Update", gu: "ઉદ્યમ વિગતો સુધારો" },
        documents: [
          "Existing Udyam Registration Number (URN)",
          "Aadhaar OTP",
          "Updated Business Details / Bank Passbook"
        ]
      }
    },
    eligibility: [
      "Micro, Small, and Medium Enterprises (proprietorship, partnership, or self-employed)",
      "Traders, shopkeepers, service providers, and manufacturers"
    ],
    process: [
      "Access Ministry of MSME Udyam portal.",
      "Verify Aadhaar and PAN credentials.",
      "Input business address, industry classification (NIC Code), and employee count.",
      "Submit online application without physical paperwork.",
      "Download official government Udyam Certificate with QR code."
    ],
    notes: [
      "Enables collateral-free MSME bank loans, subsidies, and government tender priority.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://udyamregistration.gov.in/",
    displayOrder: 8,
    isActive: true
  },
  {
    id: "citizen-new-registration",
    number: 9,
    slug: "citizen-new-registration",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "New Portal Citizen Registration",
      gu: "વિવિધ સરકારી પોર્ટલ નવું રજીસ્ટ્રેશન"
    },
    title: "New Registration",
    titleGujarati: "નવું રજીસ્ટ્રેશન",
    image: "/images/services/document-printing.webp",
    shortDescription: {
      en: "Digital Gujarat, e-Nagar, and Government service portal registration.",
      gu: "ડિજિટલ ગુજરાત, ઇ-નગર અને વિવિધ સરકારી સેવા પોર્ટલ એકાઉન્ટ રજીસ્ટ્રેશન."
    },
    operations: {
      new: {
        title: { en: "Portal Profile Creation", gu: "નવું પ્રોફાઇલ રજીસ્ટ્રેશન" },
        documents: [
          "Aadhaar Card",
          "Active Mobile Number (for OTP verification)",
          "Valid E-mail ID",
          "Passport Size Photograph"
        ]
      }
    },
    eligibility: [
      "Any citizen seeking online government forms and certificate access"
    ],
    process: [
      "Create master user credentials on relevant government portal.",
      "Verify mobile OTP and email verification link.",
      "Complete citizen demographic profile and save digital key."
    ],
    notes: [
      "Save login credentials safely for future applications.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://www.digitalgujarat.gov.in/",
    displayOrder: 9,
    isActive: true
  },
  {
    id: "pm-kisan",
    number: 10,
    slug: "pm-kisan",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "PM Kisan Samman Nidhi Yojana",
      gu: "પીએમ કિસાન સન્માન નિધિ યોજના"
    },
    title: "PM Kisan Yojana",
    titleGujarati: "પીએમ કિસાન યોજના",
    image: "/images/services/pm-kisan.webp",
    shortDescription: {
      en: "₹6,000 annual farmer income support, e-KYC update, and land record linking.",
      gu: "ખેડૂતોને વાર્ષિક ₹૬,૦૦૦ સહાય, બાયોમેટ્રિક e-KYC અને જમીન સીડિંગ."
    },
    operations: {
      new: {
        title: { en: "New Farmer Registration", gu: "નવું ખેડૂત રજીસ્ટ્રેશન" },
        documents: [
          "Aadhaar Card",
          "Agricultural Land Record (7/12 & 8-A Nakal)",
          "Bank Passbook (Aadhaar NPCI linked)",
          "Mobile Number linked with Aadhaar"
        ]
      },
      update: {
        title: { en: "PM Kisan e-KYC", gu: "પીએમ કિસાન e-KYC" },
        documents: [
          "Aadhaar Card",
          "Biometric Fingerprint or Aadhaar OTP on linked mobile"
        ]
      },
      landSeeding: {
        title: { en: "Land Seeding & Bank Link", gu: "જમીન વિગત અને બેંક સીડિંગ" },
        documents: [
          "Farmer Registration ID",
          "7/12 & 8-A Land Documents",
          "Bank Passbook with NPCI Aadhaar Seeding proof"
        ]
      }
    },
    eligibility: [
      "Small and marginal landholder farmer families with cultivable land holdings",
      "Subject to scheme exclusion criteria (income tax payees excluded)"
    ],
    process: [
      "Verify land ownership records with revenue database.",
      "Submit farmer profile and bank details on PM Kisan portal.",
      "Complete mandatory biometric e-KYC.",
      "Verify state and district nodals for regular installment releases."
    ],
    notes: [
      "Mandatory e-KYC and land seeding required to receive ₹2,000 installments.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://pmkisan.gov.in/",
    displayOrder: 10,
    isActive: true
  },
  {
    id: "navodaya-yojana",
    number: 11,
    slug: "navodaya-yojana",
    category: "Education",
    categoryId: "education-services",
    name: {
      en: "Jawahar Navodaya Vidyalaya Admission",
      gu: "જવાહર નવોદય વિદ્યાલય પ્રવેશ ફોર્મ (JNVST)"
    },
    title: "Jawahar Navodaya Yojana",
    titleGujarati: "જવાહર નવોદય યોજના",
    image: "/images/services/hostel-admission.webp",
    shortDescription: {
      en: "Class 6 & 9 Navodaya Vidyalaya free residential school entrance form.",
      gu: "નવોદય વિદ્યાલય મફત નિવાસી શાળા પ્રવેશ પરીક્ષા ફોર્મ."
    },
    operations: {
      new: {
        title: { en: "Class 6 / 9 Admission Form", gu: "નવોદય પ્રવેશ ફોર્મ" },
        documents: [
          "Certificate verified and signed by primary school Headmaster",
          "Student Passport Size Photograph",
          "Student and Parent Signatures",
          "Aadhaar Card or Residential Certificate",
          "Caste / Category Certificate (SC/ST/OBC/Divyang)"
        ]
      }
    },
    eligibility: [
      "Student studying in Class 5 in government/recognized school in Valsad district",
      "Must satisfy prescribed age criteria without having repeated Class 5"
    ],
    process: [
      "Download school certificate and get Headmaster signature & stamp.",
      "Fill online application on NVS admission portal.",
      "Upload verified certificate, photo, and signatures.",
      "Download acknowledgement form and exam hall ticket when released."
    ],
    notes: [
      "Provides 100% free quality CBSE education with lodging, boarding, and uniforms.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://navodaya.gov.in/",
    displayOrder: 11,
    isActive: true
  },
  {
    id: "vanraj-college-admission",
    number: 12,
    slug: "vanraj-college-admission",
    category: "Education",
    categoryId: "education-services",
    name: {
      en: "Vanraj Arts & Commerce College Admission",
      gu: "વનરાજ આર્ટસ એન્ડ કોમર્સ કોલેજ, ધરમપુર પ્રવેશ ફોર્મ"
    },
    title: "Vanraj College Admission Form",
    titleGujarati: "વનરાજ કોલેજ એડમિશન ફોર્મ",
    image: "/images/services/vanraj-college-admission.webp",
    shortDescription: {
      en: "GCAS university portal registration and Vanraj College FYBA/FYBCom admission.",
      gu: "GCAS પોર્ટલ રજીસ્ટ્રેશન અને વનરાજ કોલેજ પ્રથમ વર્ષ BA / B.Com એડમિશન."
    },
    operations: {
      new: {
        title: { en: "FYBA / FYBCom Admission", gu: "કોલેજ એડમિશન ફોર્મ" },
        documents: [
          "Standard 10th & 12th Marksheets",
          "School Leaving Certificate (LC)",
          "Aadhaar Card",
          "Caste Certificate & Non-Creamy Layer (NCL)",
          "ABC ID (Academic Bank of Credits)",
          "Student Passport Size Photograph & Signature",
          "Active Mobile Number and Email ID"
        ]
      },
      update: {
        title: { en: "Exam & Renewal Form", gu: "પરીક્ષા અને રીન્યુઅલ ફોર્મ" },
        documents: [
          "College Enrollment Number / Roll Number",
          "Previous Semester Marksheet",
          "College ID Card"
        ]
      }
    },
    eligibility: [
      "Passed HSC (12th Standard) from recognized board (GSEB / CBSE)",
      "Registered on Gujarat Common Admission Services (GCAS) portal"
    ],
    process: [
      "Create GCAS portal profile and generate applicant ID.",
      "Select Vanraj Arts & Commerce College, Dharampur as priority choice.",
      "Upload verified marksheets, school LC, and caste certificate.",
      "Pay application fees online and print submission slip.",
      "Verify documents in person at college during merit verification."
    ],
    notes: [
      "Our center provides special dedicated desk for Vanraj College students.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://gcas.gujgov.edu.in/",
    displayOrder: 12,
    isActive: true
  },
  {
    id: "scholarship-form",
    number: 13,
    slug: "scholarship-form",
    category: "Scholarship",
    categoryId: "education-services",
    name: {
      en: "Digital Gujarat Post-Matric Scholarship",
      gu: "ડિજિટલ ગુજરાત શિષ્યવૃત્તિ ફોર્મ (SC/ST/OBC/EWS)"
    },
    title: "Scholarship Form",
    titleGujarati: "સ્કોલરશીપ ફોર્મ",
    image: "/images/services/scholarship.webp",
    shortDescription: {
      en: "Tuition fee reimbursement and scholarship for college and diploma students.",
      gu: "કોલેજ અને ડિપ્લોમા વિદ્યાર્થીઓ માટે શિષ્યવૃત્તિ અને ફી સહાય ફોર્મ."
    },
    operations: {
      new: {
        title: { en: "New Scholarship Application", gu: "નવું શિષ્યવૃત્તિ ફોર્મ" },
        documents: [
          "Caste Certificate",
          "Competent Authority Income Certificate",
          "Previous Year Marksheets",
          "Current Year College Fee Receipt",
          "School / College Bonafide Certificate",
          "Student Bank Account Passbook (Aadhaar Linked)",
          "Hostel Certificate (if applicable)",
          "Aadhaar Card"
        ]
      },
      renewal: {
        title: { en: "Scholarship Renewal", gu: "શિષ્યવૃત્તિ રિન્યુઅલ" },
        documents: [
          "Previous Year Scholarship Application Number",
          "Current Year Marksheet (Passed)",
          "Current Year College Fee Receipt",
          "Valid Income Certificate"
        ]
      }
    },
    eligibility: [
      "Regular enrolled student in college, ITI, or higher secondary course",
      "Belonging to SC, ST, SEBC/OBC, or EWS categories",
      "Family annual income within government scholarship ceiling"
    ],
    process: [
      "Log in to Digital Gujarat scholarship portal.",
      "Select applicable scholarship scheme based on caste category.",
      "Enter academic, college admission, and fee receipt details.",
      "Upload verified certificates and bank passbook.",
      "Submit online form and submit printed copy to college administrative office."
    ],
    notes: [
      "Bank account must be seeded with Aadhaar for DBT scholarship transfer.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://www.digitalgujarat.gov.in/",
    displayOrder: 13,
    isActive: true
  },
  {
    id: "education-forms",
    number: 14,
    slug: "education-forms",
    category: "Education",
    categoryId: "education-services",
    name: {
      en: "I.C. & Education Exam Services",
      gu: "શૈક્ષણિક પ્રમાણપત્રો અને પરીક્ષા ફોર્મ"
    },
    title: "I.C. / Education Form",
    titleGujarati: "શૈક્ષણિક ફોર્મ",
    image: "/images/services/college-exam-renewal.webp",
    shortDescription: {
      en: "University exam form, enrollment verification, and duplicate marksheet requests.",
      gu: "યુનિવર્સિટી પરીક્ષા ફોર્મ, એનરોલમેન્ટ અને માર્કશીટ ચકાસણી."
    },
    operations: {
      new: {
        title: { en: "Exam & Certificate Form", gu: "પરીક્ષા ફોર્મ" },
        documents: [
          "Student College ID Card / Roll Number",
          "Previous Semester Marksheet",
          "Aadhaar Card",
          "Fee Payment Receipt"
        ]
      }
    },
    eligibility: [
      "Enrolled students in VNSGU or affiliated institutions"
    ],
    process: [
      "Access university student portal.",
      "Select exam semester and optional papers.",
      "Pay examination fee challan.",
      "Generate examination hall ticket."
    ],
    notes: [
      "Check official college exam deadlines before submission.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://vnsgu.ac.in/",
    displayOrder: 14,
    isActive: true
  },
  {
    id: "bus-pass-form",
    number: 15,
    slug: "bus-pass-form",
    category: "Transport",
    categoryId: "other-services",
    name: {
      en: "GSRTC Student Bus Pass",
      gu: "એસ.ટી. બસ કન્સેશન પાસ ફોર્મ"
    },
    title: "Bus Pass Form",
    titleGujarati: "બસ પાસ ફોર્મ",
    image: "/images/services/bus-ticket.webp",
    shortDescription: {
      en: "Discounted Gujarat State Road Transport (ST) bus pass for daily commuting students.",
      gu: "રોજિંદી મુસાફરી કરતા વિદ્યાર્થીઓ માટે એસ.ટી. બસ કન્સેશન પાસ."
    },
    operations: {
      new: {
        title: { en: "New Student Bus Pass", gu: "નવો વિદ્યાર્થી બસ પાસ" },
        documents: [
          "Bus Pass Application Form stamped by School/College Principal",
          "Current Academic Year Fee Receipt",
          "Residential Address Proof (Ration Card / Aadhaar)",
          "Passport Size Photographs",
          "Aadhaar Card"
        ]
      },
      renewal: {
        title: { en: "Bus Pass Renewal", gu: "બસ પાસ રિન્યુઅલ" },
        documents: [
          "Existing Bus Pass Card",
          "College ID Card",
          "Fee receipt of current term"
        ]
      }
    },
    eligibility: [
      "Regular enrolled student attending school or college situated away from residence",
      "Commuting daily via Gujarat ST buses"
    ],
    process: [
      "Download official GSRTC bus pass form from center.",
      "Get form certified with principal's signature and institutional stamp.",
      "Submit form at Dharampur ST Depo pass counter.",
      "Receive concessional monthly/term bus pass."
    ],
    notes: [
      "Offers up to 80% concession over normal passenger bus fares for students.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://gsrtc.in/",
    displayOrder: 15,
    isActive: true
  },
  {
    id: "pf-kyc",
    number: 16,
    slug: "pf-kyc",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "EPFO PF KYC Seeding",
      gu: "પીએફ બેંક, પાન અને આધાર KYC સીડિંગ"
    },
    title: "PF KYC",
    titleGujarati: "પીએફ KYC",
    image: "/images/services/bank-recruitment.webp",
    shortDescription: {
      en: "Aadhaar, PAN, and Bank Account KYC linking to UAN portal.",
      gu: "પીએફ ખાતામાં આધાર, પાન અને બેંક એકાઉન્ટ લિંક કરવું."
    },
    operations: {
      update: {
        title: { en: "PF KYC Seeding", gu: "પીએફ KYC લિંકિંગ" },
        documents: [
          "12-digit Universal Account Number (UAN) and Password",
          "Aadhaar Card",
          "PAN Card",
          "Bank Passbook or Cancelled Cheque with printed name",
          "Mobile Number linked with Aadhaar"
        ]
      }
    },
    eligibility: [
      "Salaried employee registered with Employees' Provident Fund Organisation (EPFO)"
    ],
    process: [
      "Login to EPFO Unified Member Portal.",
      "Navigate to Manage -> KYC section.",
      "Enter Bank Account Number, IFSC, PAN, and Aadhaar details.",
      "Submit for digital approval by employer and bank verification.",
      "Verify approval status in member portal."
    ],
    notes: [
      "Name on Aadhaar, PAN, and Bank account must match exactly.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 16,
    isActive: true
  },
  {
    id: "pf-transfer",
    number: 17,
    slug: "pf-transfer",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF Online Transfer (One Member One EPF)",
      gu: "પીએફ ટ્રાન્સફર (જૂની કંપનીમાંથી નવી કંપનીમાં)"
    },
    title: "PF Transfer",
    titleGujarati: "પીએફ ટ્રાન્સફર",
    image: "/images/services/apprentice-recruitment.webp",
    shortDescription: {
      en: "Transfer provident fund balance from previous company to current company.",
      gu: "અગાઉની નોકરીના પીએફ બેલેન્સને ચાલુ નોકરીના પીએફ ખાતામાં ટ્રાન્સફર કરવું."
    },
    operations: {
      new: {
        title: { en: "Online Transfer Claim (Form 13)", gu: "ઓનલાઈન પીએફ ટ્રાન્સફર" },
        documents: [
          "Active UAN and Password",
          "Previous Member ID / Company PF Account Number",
          "Current Member ID",
          "Aadhaar linked Mobile Number for OTP",
          "Approved Bank KYC in current EPF account"
        ]
      }
    },
    eligibility: [
      "Employee who changed jobs with both previous and current service accounts under EPFO"
    ],
    process: [
      "Login to EPFO member portal.",
      "Select Online Services -> Transfer Request.",
      "Verify personal information and current employment details.",
      "Select previous employer / current employer for attestation.",
      "Authenticate via Aadhaar OTP and generate Tracking ID."
    ],
    notes: [
      "Avoids tax deduction on PF withdrawal and maintains continuous pension service tenure.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 17,
    isActive: true
  },
  {
    id: "pf-withdrawal",
    number: 18,
    slug: "pf-withdrawal",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF Full & Final Withdrawal",
      gu: "પીએફ ફુલ એન્ડ ફાઇનલ ઉપાડ (Form 19 & 10C)"
    },
    title: "PF Withdrawal",
    titleGujarati: "પીએફ ઉપાડ",
    image: "/images/services/money-transfer.webp",
    shortDescription: {
      en: "Full PF balance and EPS pension withdrawal after leaving employment.",
      gu: "નોકરી છોડ્યા પછી પીએફ ફંડ અને પેન્શન રકમ સંપૂર્ણ ઉપાડ."
    },
    operations: {
      new: {
        title: { en: "Full Settlement (Form 19 & 10C)", gu: "પીએફ સંપૂર્ણ ઉપાડ" },
        documents: [
          "UAN and Password",
          "Date of Exit (DOE) marked in EPF service history",
          "Aadhaar Card and PAN Card",
          "Bank Passbook / Cancelled Cheque showing applicant's name & IFSC",
          "Form 15G (if total service is under 5 years to save TDS)",
          "Aadhaar linked Mobile for OTP"
        ]
      }
    },
    eligibility: [
      "Employee unemployed for 2 months after resignation / retirement / exit"
    ],
    process: [
      "Confirm Date of Exit (DOE) is updated by employer.",
      "Ensure Bank, PAN, and Aadhaar KYC are verified.",
      "Select Online Services -> Claim Form 19 & 10C.",
      "Upload cancelled cheque and Form 15G.",
      "Submit through Aadhaar OTP authentication; funds credited within 7-15 days."
    ],
    notes: [
      "Withdrawal before 5 years of service is taxable unless Form 15G/15H is submitted.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 18,
    isActive: true
  },
  {
    id: "pf-advance",
    number: 19,
    slug: "pf-advance",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF Advance Withdrawal (Form 31)",
      gu: "પીએફ એડવાન્સ ઉપાડ (બીમારી, લગ્ન, મકાન બાંધકામ)"
    },
    title: "PF Advance",
    titleGujarati: "પીએફ એડવાન્સ",
    image: "/images/services/bank-recruitment.webp",
    shortDescription: {
      en: "Non-refundable emergency advance from PF account while in service.",
      gu: "ચાલુ નોકરી દરમિયાન ઈમરજન્સી ખર્ચ માટે પીએફમાંથી એડવાન્સ ઉપાડ."
    },
    operations: {
      new: {
        title: { en: "Advance Claim (Form 31)", gu: "પીએફ એડવાન્સ ફોર્મ" },
        documents: [
          "Active UAN & Password",
          "Bank Passbook or Cancelled Cheque copy",
          "Aadhaar Card",
          "Active Mobile Number for OTP"
        ]
      }
    },
    eligibility: [
      "Active PF members requiring funds for illness, house purchase/renovation, wedding, or education"
    ],
    process: [
      "Select Claim (Form 31) on member portal.",
      "Choose withdrawal purpose (Illness, Marriage, Natural Calamity).",
      "Enter requested amount and upload bank passbook/cheque.",
      "Verify with Aadhaar OTP and track claim settlement."
    ],
    notes: [
      "Advance withdrawals do not require resignation and do not need to be repaid.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 19,
    isActive: true
  },
  {
    id: "pension-claim",
    number: 20,
    slug: "pension-claim",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "EPS Pension Claim (Form 10D)",
      gu: "પીએફ માસિક પેન્શન ક્લેમ (Form 10D)"
    },
    title: "Pension Claim",
    titleGujarati: "પેન્શન ક્લેમ",
    image: "/images/services/government-job.webp",
    shortDescription: {
      en: "Monthly pension claim under Employee Pension Scheme upon reaching 58 years.",
      gu: "૫૮ વર્ષની ઉંમરે અથવા નિવૃત્તિ પર માસિક સરકારી પેન્શન મેળવવાની અરજી."
    },
    operations: {
      new: {
        title: { en: "Monthly Pension Application (Form 10D)", gu: "માસિક પેન્શન ફોર્મ" },
        documents: [
          "UAN and Pension Scheme Certificate (if applicable)",
          "Bank Account Passbook (Joint account with spouse or single pension account)",
          "Passport Size Photos of Member and Spouse",
          "Birth Certificates of Minor Children",
          "Aadhaar Card and PAN Card"
        ]
      }
    },
    eligibility: [
      "Minimum 10 years of eligible pensionable service under EPFO",
      "Attained 58 years of age (reduced early pension available from age 50)"
    ],
    process: [
      "Confirm 10+ years pension service record in EPFO.",
      "Fill online Form 10D with bank branch and spouse/children details.",
      "Authenticate through Aadhaar biometric or OTP.",
      "Receive Pension Payment Order (PPO) number and monthly pension dispatch."
    ],
    notes: [
      "Provides lifelong monthly pension to employee and widow/children pension thereafter.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 20,
    isActive: true
  },
  {
    id: "pf-status",
    number: 21,
    slug: "pf-status",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF Claim Status Check",
      gu: "પીએફ ક્લેમ સ્ટેટસ તપાસ"
    },
    title: "PF Claim Status Check",
    titleGujarati: "પીએફ સ્ટેટસ તપાસ",
    image: "/images/services/document-printing.webp",
    shortDescription: {
      en: "Live status verification for submitted PF withdrawal, transfer, or advance claims.",
      gu: "સબમિટ કરેલા પીએફ ઉપાડ, ટ્રાન્સફર કે એડવાન્સ ક્લેમનું લાઈવ સ્ટેટસ જાણો."
    },
    operations: {
      update: {
        title: { en: "Track Claim Status", gu: "ક્લેમ ટ્રેકિંગ" },
        documents: [
          "12-digit UAN Number",
          "Claim Tracking ID or Mobile Number"
        ]
      }
    },
    eligibility: [
      "Any member who has submitted an online/offline EPFO claim"
    ],
    process: [
      "Access Track Claim Status module.",
      "Input UAN and captcha code.",
      "View real-time stage: Pending at Field Office, Settled, or Rejected reasons."
    ],
    notes: [
      "EPFO typically processes claims within 7 to 15 working days.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://passbook.epfindia.gov.in/",
    displayOrder: 21,
    isActive: true
  },
  {
    id: "pf-name-correction",
    number: 22,
    slug: "pf-name-correction",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF Name Correction (Joint Declaration)",
      gu: "પીએફ ખાતામાં નામ સુધારો (જોઇન્ટ ડિક્લેરેશન)"
    },
    title: "PF Name Correction",
    titleGujarati: "પીએફ નામ સુધારો",
    image: "/images/services/clerk-recruitment.webp",
    shortDescription: {
      en: "Correct spelling mistakes in employee or father name in EPFO database.",
      gu: "પીએફ ખાતામાં કર્મચારી કે પિતાના નામની જોડણીમાં સુધારો કરવાની ઓનલાઈન સુવિધા."
    },
    operations: {
      correction: {
        title: { en: "Name Correction (Joint Declaration)", gu: "નામ સુધારો જોઇન્ટ ડિક્લેરેશન" },
        documents: [
          "Online Joint Declaration signed by Employee and Employer",
          "Aadhaar Card",
          "PAN Card",
          "Passport / School Leaving Certificate",
          "Old PF service record / appointment letter"
        ]
      }
    },
    eligibility: [
      "PF member with mismatch between Aadhaar and EPFO record"
    ],
    process: [
      "Initiate Joint Declaration request on EPFO portal.",
      "Enter correct name exactly as printed on Aadhaar.",
      "Upload identity proofs and submit to employer for digital signature.",
      "EPFO field officer verifies and updates master record."
    ],
    notes: [
      "Name must match Aadhaar to enable online withdrawal claims.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 22,
    isActive: true
  },
  {
    id: "pf-dob-correction",
    number: 23,
    slug: "pf-dob-correction",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF Date of Birth Correction",
      gu: "પીએફ જન્મ તારીખ સુધારો"
    },
    title: "PF Date of Birth Correction",
    titleGujarati: "પીએફ જન્મ તારીખ સુધારો",
    image: "/images/services/birth-certificate.webp",
    shortDescription: {
      en: "Update incorrect date of birth on UAN portal with Aadhaar or birth certificate.",
      gu: "પીએફ પોર્ટલ પર જન્મ તારીખ સુધારણા માટે માન્ય પુરાવા સાથે ઓનલાઈન સુધારો."
    },
    operations: {
      correction: {
        title: { en: "Date of Birth Correction", gu: "જન્મ તારીખ સુધારો" },
        documents: [
          "Aadhaar Card (valid if difference is less than 3 years)",
          "Birth Certificate / School Leaving Certificate / Passport (if difference > 3 years)",
          "Joint Declaration attested by employer"
        ]
      }
    },
    eligibility: [
      "PF members whose recorded birth date does not match government identity documents"
    ],
    process: [
      "Select Modify Basic Details on member portal.",
      "Enter correct Date of Birth.",
      "Attach Aadhaar or birth certificate PDF.",
      "Employer approves request with digital signature certificate (DSC).",
      "EPFO approves within 3 to 7 working days."
    ],
    notes: [
      "If DOB discrepancy exceeds 3 years, birth certificate or school LC is mandatory.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 23,
    isActive: true
  },
  {
    id: "pf-profile-update",
    number: 24,
    slug: "pf-profile-update",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF Profile & Basic Details Update",
      gu: "પીએફ પ્રોફાઇલ અને બેઝિક ડિટેઇલ્સ અપડેટ"
    },
    title: "PF Profile Update",
    titleGujarati: "પીએફ પ્રોફાઇલ અપડેટ",
    image: "/images/services/resume-cv.webp",
    shortDescription: {
      en: "Update marital status, email ID, address, and mobile number on UAN portal.",
      gu: "પીએફ પોર્ટલમાં વૈવાહિક સ્થિતિ, સરનામું અને ઈમેઈલ અપડેટ કરવાની સુવિધા."
    },
    operations: {
      update: {
        title: { en: "Profile Update", gu: "પ્રોફાઇલ વિગતો સુધારો" },
        documents: [
          "Active UAN and Password",
          "Aadhaar Card",
          "Active Mobile Number for OTP",
          "Marriage Certificate (if updating marital status)"
        ]
      }
    },
    eligibility: [
      "All active PF subscribers"
    ],
    process: [
      "Open Member Profile module.",
      "Edit address, email, or marital details.",
      "Verify via Aadhaar OTP.",
      "Changes reflect immediately or after employer confirmation."
    ],
    notes: [
      "Always keep updated phone numbers linked for monthly PF deposit alerts.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 24,
    isActive: true
  },
  {
    id: "pf-e-nomination",
    number: 25,
    slug: "pf-e-nomination",
    category: "PF / Employment",
    categoryId: "job-services",
    name: {
      en: "PF E-Nomination (Digital Nominee)",
      gu: "પીએફ ઇ-નોમિનેશન (વારસદારનું નામ ઉમેરવું)"
    },
    title: "PF E-Nomination",
    titleGujarati: "પીએફ ઇ-નોમિનેશન",
    image: "/images/services/police-recruitment.webp",
    shortDescription: {
      en: "Mandatory digital nomination of family members for insurance (EDLI) and pension.",
      gu: "પીએફ અને ₹૭ લાખ સુધીના વીમા માટે પરિવારના સભ્યોનું નામ વારસદાર તરીકે જોડવું."
    },
    operations: {
      new: {
        title: { en: "Add Digital Nominee", gu: "વારસદાર નોંધણી" },
        documents: [
          "UAN and Password",
          "Aadhaar Card of Nominee(s) (Spouse/Children/Parents)",
          "Passport Size Photo of Nominee",
          "Bank Account Details of Nominee (Passbook/Cheque)",
          "Member's Aadhaar linked Mobile for e-Sign OTP"
        ]
      }
    },
    eligibility: [
      "All active PF subscribers (mandatory before filing online claims)"
    ],
    process: [
      "Login to EPFO Unified Portal.",
      "Navigate to Manage -> E-Nomination.",
      "Input family details and upload nominee photos.",
      "Specify percentage share of PF and EPS funds.",
      "Complete Aadhaar e-Sign authentication via mobile OTP."
    ],
    notes: [
      "Mandatory requirement to avail ₹7 Lakh free EDLI life insurance cover.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://unifiedportal-mem.epfindia.gov.in/",
    displayOrder: 25,
    isActive: true
  },
  {
    id: "passport-new",
    number: 26,
    slug: "passport-new",
    category: "Passport",
    categoryId: "online-services",
    name: {
      en: "New Passport Application",
      gu: "નવો પાસપોર્ટ અરજી (સામાન્ય / તત્કાલ)"
    },
    title: "Passport New",
    titleGujarati: "નવો પાસપોર્ટ",
    image: "/images/services/passport.webp",
    shortDescription: {
      en: "Fresh 36/60 page ordinary passport application with PSK/POPSK appointment.",
      gu: "નવા પાસપોર્ટ માટે ઓનલાઇન અરજી, ફી પેમેન્ટ અને પાસપોર્ટ કેન્દ્ર એપોઇન્ટમેન્ટ."
    },
    operations: {
      new: {
        title: { en: "New Passport", gu: "નવો પાસપોર્ટ" },
        documents: [
          "Proof of Date of Birth (Birth Certificate / School LC)",
          "Proof of Identity (Aadhaar Card / Voter ID / PAN Card)",
          "Proof of Address (Electricity bill / Bank passbook / Aadhaar)",
          "Standard 10th Passing Certificate (mandatory for Non-ECR status)"
        ]
      }
    },
    eligibility: [
      "Indian citizen by birth, descent, or naturalization",
      "No pending criminal proceedings in any court"
    ],
    process: [
      "Register on Passport Seva Online Portal.",
      "Fill Form for Fresh Passport (Normal / Tatkaal).",
      "Pay official government passport fees online.",
      "Book biometric appointment at Valsad POPSK / Surat PSK.",
      "Attend physical document verification at Passport Seva Kendra.",
      "Police verification at local police station and passport dispatch by India Post."
    ],
    notes: [
      "10th marksheet is essential to obtain Non-ECR passport status for international travel.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://www.passportindia.gov.in/",
    displayOrder: 26,
    isActive: true
  },
  {
    id: "passport-renewal",
    number: 27,
    slug: "passport-renewal",
    category: "Passport",
    categoryId: "online-services",
    name: {
      en: "Passport Renewal / Re-issue",
      gu: "પાસપોર્ટ રિન્યુઅલ / રી-ઇશ્યુ"
    },
    title: "Passport Renewal",
    titleGujarati: "પાસપોર્ટ રિન્યુઅલ",
    image: "/images/services/passport.webp",
    shortDescription: {
      en: "Renewal for expired or expiring passport, address change, and page exhaustion.",
      gu: "મુદત પૂરી થયેલ પાસપોર્ટ રીન્યુઅલ અને સરનામું સુધારવા માટેની સેવા."
    },
    operations: {
      renewal: {
        title: { en: "Passport Re-issue / Renewal", gu: "પાસપોર્ટ રિન્યુઅલ" },
        documents: [
          "Old Passport (Original and self-attested copies of first and last two pages)",
          "Aadhaar Card",
          "Address Proof (if residential address has changed)"
        ]
      }
    },
    eligibility: [
      "Holders of expired Indian passport or expiring within 1 year",
      "Passports damaged, exhausted of visa pages, or requiring personal detail changes"
    ],
    process: [
      "Initiate Re-issue of Passport on Passport Seva.",
      "Enter previous passport details and validity dates.",
      "Pay government re-issue fees and book POPSK slot.",
      "Present old passport and Aadhaar at Passport Kendra.",
      "New passport printed and dispatched with previous passport cancelled."
    ],
    notes: [
      "Existing valid foreign visas in old passport remain intact and valid.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://www.passportindia.gov.in/",
    displayOrder: 27,
    isActive: true
  },
  {
    id: "kunvarbai-mameru",
    number: 28,
    slug: "kunvarbai-mameru",
    category: "Government Services",
    categoryId: "online-services",
    name: {
      en: "Kunvarbai Nu Mameru Yojana",
      gu: "કુંવરબાઈનું મામેરું યોજના (દીકરીના લગ્ન સહાય)"
    },
    title: "Kunvarbai Nu Mameru Yojana",
    titleGujarati: "કુંવરબાઈનું મામેરું યોજના",
    image: "/images/services/birth-certificate.webp",
    shortDescription: {
      en: "Financial marriage assistance of ₹12,000 for daughters from eligible families.",
      gu: "દીકરીના લગ્ન પ્રસંગે સરકાર દ્વારા ₹૧૨,૦૦૦ ની સીધી આર્થિક સહાય."
    },
    operations: {
      new: {
        title: { en: "Mameru Financial Assistance", gu: "મામેરું યોજના ફોર્મ" },
        documents: [
          "Bride's Aadhaar Card",
          "Groom's Aadhaar Card",
          "Marriage Certificate / Kankotri (Wedding Invitation Card)",
          "Bride's Caste Certificate",
          "Father/Guardian Annual Income Certificate",
          "Bride's Bank Passbook (Aadhaar Seeded)",
          "School Leaving Certificate of Bride and Groom"
        ]
      }
    },
    eligibility: [
      "Girls belonging to SC, ST, SEBC/OBC, and economically weaker sections in Gujarat",
      "Family annual income within government prescribed limits",
      "Application must be filed within 2 years of legal marriage"
    ],
    process: [
      "Open e-Samaj Kalyan Gujarat portal.",
      "Fill online Kunvarbai Nu Mameru application form.",
      "Upload marriage certificate, bride's bank passbook, and caste proofs.",
      "District Social Welfare Officer approves application.",
      "Assistance credited directly to bride's bank account via DBT."
    ],
    notes: [
      "Assistance is provided for up to two adult daughters per family.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://esamajkalyan.gujarat.gov.in/",
    displayOrder: 28,
    isActive: true
  },
  {
    id: "driving-licence",
    number: 29,
    slug: "driving-licence",
    category: "Transport",
    categoryId: "online-services",
    name: {
      en: "Driving Licence (Learning & Permanent)",
      gu: "ડ્રાઇવિંગ લાયસન્સ (લર્નિંગ અને પાકું લાયસન્સ)"
    },
    title: "Driving Licence",
    titleGujarati: "ડ્રાઇવિંગ લાયસન્સ",
    image: "/images/services/driving-licence.webp",
    shortDescription: {
      en: "Two-wheeler, four-wheeler learning licence, computer test slot, and permanent licence.",
      gu: "ટુ-વ્હીલર અને ફોર-વ્હીલર લર્નિંગ લાયસન્સ, ઓનલાઇન ટેસ્ટ સ્લોટ અને પાકું લાયસન્સ."
    },
    operations: {
      new: {
        title: { en: "Learning Licence (LL)", gu: "લર્નિંગ લાયસન્સ" },
        documents: [
          "Age Proof (Birth Certificate / School LC / 10th Marksheet / PAN Card)",
          "Address Proof (Aadhaar Card / Light Bill / Voter ID)",
          "Passport Size Photos and Signature",
          "Medical Certificate Form 1-A (for applicants above 40 or transport vehicles)"
        ]
      },
      permanent: {
        title: { en: "Permanent Driving Licence (DL)", gu: "પાકું ડ્રાઇવિંગ લાયસન્સ" },
        documents: [
          "Valid Learning Licence Number",
          "Driving School Training Certificate (Form 5 for transport)",
          "Registered vehicle details for driving skill test"
        ]
      }
    },
    eligibility: [
      "Age 16+ for gearless 50cc two-wheelers with parental consent",
      "Age 18+ for geared two-wheelers and light motor vehicles (cars)",
      "Age 20+ for transport/commercial vehicles"
    ],
    process: [
      "Submit application on Ministry of Road Transport Parivahan portal.",
      "Upload age and address documents.",
      "Pay RTO government fee and book computer test slot.",
      "Clear online sign/traffic rules test and download Learning Licence.",
      "Book driving track test after 30 days and obtain Smart Card DL."
    ],
    notes: [
      "Learning licence is valid for 6 months across India.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://parivahan.gov.in/",
    displayOrder: 29,
    isActive: true
  },
  {
    id: "driving-licence-renewal",
    number: 30,
    slug: "driving-licence-renewal",
    category: "Transport",
    categoryId: "online-services",
    name: {
      en: "Driving Licence Renewal",
      gu: "ડ્રાઇવિંગ લાયસન્સ રિન્યુઅલ"
    },
    title: "Driving Licence Renewal",
    titleGujarati: "ડ્રાઇવિંગ લાયસન્સ રિન્યુઅલ",
    image: "/images/services/driving-licence.webp",
    shortDescription: {
      en: "Renewal of expired driving licence, address update, and duplicate smart card.",
      gu: "મુદત પૂરી થયેલ ડ્રાઇવિંગ લાયસન્સ રિન્યુઅલ અને સરનામું સુધારો."
    },
    operations: {
      renewal: {
        title: { en: "DL Renewal Application", gu: "લાયસન્સ રિન્યુઅલ ફોર્મ" },
        documents: [
          "Original Expired Driving Licence Card",
          "Form 9 Application",
          "Medical Certificate Form 1-A (if applicant age is above 40 years)",
          "Address Proof (Aadhaar Card)",
          "Passport Size Photographs"
        ]
      }
    },
    eligibility: [
      "Holders of expired Indian driving licence or expiring within 1 year"
    ],
    process: [
      "Open Parivahan Sarathi Services module.",
      "Enter DL number and Date of Birth.",
      "Fill Form 9 renewal request and upload medical certificate.",
      "Pay government renewal fee online.",
      "Receive renewed Smart Card DL by India Post."
    ],
    notes: [
      "Renew within one year of expiry to avoid re-appearing for the driving test.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://parivahan.gov.in/",
    displayOrder: 30,
    isActive: true
  },
  {
    id: "sbi-scholarship",
    number: 31,
    slug: "sbi-scholarship",
    category: "Scholarship",
    categoryId: "education-services",
    name: {
      en: "SBI Asha Scholarship Program",
      gu: "એસબીઆઈ આશા સ્કોલરશીપ પ્રોગ્રામ (SBI Foundation)"
    },
    title: "SBI Scholarship",
    titleGujarati: "એસબીઆઈ સ્કોલરશીપ",
    image: "/images/services/scholarship.webp",
    shortDescription: {
      en: "Merit-cum-means scholarship up to ₹7.5 Lakhs by SBI Foundation for top institutes.",
      gu: "તેજસ્વી વિદ્યાર્થીઓ માટે એસબીઆઈ ફાઉન્ડેશન દ્વારા ઉચ્ચ શિક્ષણ શિષ્યવૃત્તિ."
    },
    operations: {
      new: {
        title: { en: "SBI Asha Scholarship Application", gu: "એસબીઆઈ સ્કોલરશીપ ફોર્મ" },
        documents: [
          "Previous Academic Year Marksheet (Minimum 75% marks)",
          "Identity Proof (Aadhaar Card / Pan Card)",
          "Current Year Admission Proof (Fee Receipt / Admission Letter / College ID)",
          "Family Income Certificate (Annual income less than ₹3 to ₹6 Lakhs)",
          "Bank Account Passbook / Cancelled Cheque of the Applicant"
        ]
      }
    },
    eligibility: [
      "Meritorious students studying in Class 6-12, Undergraduate, IITs, IIMs, or Medical courses",
      "Family annual income below specified scheme limit",
      "Must have secured minimum 75% marks in previous qualifying exam"
    ],
    process: [
      "Register on Buddy4Study / SBI Foundation scholarship portal.",
      "Fill online application form and upload academic marksheets.",
      "Upload authentic income certificate and admission letter.",
      "Telephonic and document verification by scholarship committee.",
      "Scholarship grant transferred directly into student's bank account."
    ],
    notes: [
      "Keep distinct from state Digital Gujarat scholarship — students can apply separately.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://www.sbifoundation.in/",
    displayOrder: 31,
    isActive: true
  },
  {
    id: "food-license",
    number: 32,
    slug: "food-license",
    category: "Business",
    categoryId: "online-services",
    name: {
      en: "Food Licence (FSSAI Registration)",
      gu: "ફૂડ લાયસન્સ (FSSAI રજીસ્ટ્રેશન / લાયસન્સ)"
    },
    title: "Food Licence",
    titleGujarati: "ફૂડ લાયસન્સ",
    image: "/images/services/bill-payment.webp",
    shortDescription: {
      en: "FSSAI food safety registration for hotels, restaurants, grocery shops, and food stalls.",
      gu: "હોટલ, કરિયાણા દુકાન, ડેરી અને ખાણીપીણીના વેપારીઓ માટે FSSAI ફૂડ લાયસન્સ."
    },
    operations: {
      new: {
        title: { en: "New FSSAI Registration / Licence", gu: "નવું ફૂડ લાયસન્સ" },
        documents: [
          "Aadhaar Card / PAN Card of Proprietor / Partner",
          "Passport Size Photograph",
          "Business Address Proof (Shop Gumastadhara / Rent Agreement)",
          "Electricity Bill of Business Premises",
          "Business Name and Food Business Category Information",
          "Bank-related Details (Cancelled Cheque / Bank Passbook)"
        ]
      },
      renewal: {
        title: { en: "FSSAI Licence Renewal", gu: "ફૂડ લાયસન્સ રિન્યુઅલ" },
        documents: [
          "Existing 14-digit FSSAI Registration Certificate",
          "Aadhaar Card of Business Owner",
          "Latest Electricity Bill"
        ]
      }
    },
    eligibility: [
      "All Food Business Operators (FBOs): food stalls, tea shops, restaurants, bakeries, caterers, grocery stores, and manufacturers"
    ],
    process: [
      "Access FSSAI FoSCoS official portal.",
      "Select business type (Basic Registration up to ₹12 Lakh turnover, or State Licence).",
      "Enter food categories handled.",
      "Upload proprietor photo, identity proof, and premises light bill.",
      "Pay annual government licence fee.",
      "Download official 14-digit FSSAI Food Licence Certificate with QR code."
    ],
    notes: [
      "Mandatory for all food businesses under Food Safety and Standards Act.",
      GOVT_DISCLAIMER
    ],
    officialWebsite: "https://foscos.fssai.gov.in/",
    displayOrder: 32,
    isActive: true
  }
];

export default sourceServicesData;
