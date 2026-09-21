/**
 * HY-TECH Computer Education & Online Hub
 * Comprehensive 45-Service Dynamic Mock Database with Rich Metadata
 */

export const mockCategories = [
  {
    "id": "online-services",
    "slug": "online-services",
    "title": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "icon": "Monitor",
    "catImage": "/images/categories/online_services.jpg",
    "count": 11,
    "isActive": true
  },
  {
    "id": "education-services",
    "slug": "education-services",
    "title": {
      "en": "Education Services",
      "gu": "શિક્ષણ સેવાઓ"
    },
    "icon": "GraduationCap",
    "catImage": "/images/categories/education.jpg",
    "count": 6,
    "isActive": true
  },
  {
    "id": "job-services",
    "slug": "job-services",
    "title": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "icon": "Briefcase",
    "catImage": "/images/categories/jobs.jpg",
    "count": 9,
    "isActive": true
  },
  {
    "id": "printing-services",
    "slug": "printing-services",
    "title": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "icon": "Printer",
    "catImage": "/images/categories/printing.jpg",
    "count": 7,
    "isActive": true
  },
  {
    "id": "computer-courses",
    "slug": "computer-courses",
    "title": {
      "en": "Computer Courses",
      "gu": "કમ્પ્યુટર કોર્સ"
    },
    "icon": "Laptop",
    "catImage": "/images/categories/courses.jpg",
    "count": 5,
    "isActive": true
  },
  {
    "id": "other-services",
    "slug": "other-services",
    "title": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "icon": "Globe",
    "catImage": "/images/categories/other.jpg",
    "count": 7,
    "isActive": true
  }
];

export const mockServices = [
  {
    "id": "pan-card",
    "slug": "pan-card",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "PAN Card",
      "gu": "પાન કાર્ડ"
    },
    "icon": "FileCheck",
    "image": "/images/services/pan-card.webp",
    "shortDescription": {
      "en": "New PAN, Update, Correction & Reprint services.",
      "gu": "નવું પાન કાર્ડ, સુધારો અને રીપ્રિન્ટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Professional assistance for PAN Card services including new application, correction, and reprint.",
      "gu": "પાન કાર્ડને લગતી તમામ સેવાઓ માટે સંપૂર્ણ સહાય."
    },
    "newApplication": {
      "en": "Apply for a new PAN card easily with identity and address proofs.",
      "gu": "ઓળખ અને સરનામાના પુરાવા સાથે નવા પાન કાર્ડ માટે અરજી કરો."
    },
    "correction": {
      "en": "Correct name, DOB, or address on your existing PAN.",
      "gu": "તમારા પાન કાર્ડમાં નામ, જન્મતારીખ અથવા સરનામું સુધારો."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Identity Proof",
        "gu": "ઓળખનો પુરાવો"
      },
      {
        "en": "Address Proof",
        "gu": "સરનામાનો પુરાવો"
      },
      {
        "en": "Date of Birth Proof",
        "gu": "જન્મ તારીખનો પુરાવો"
      },
      {
        "en": "Passport-size Photo",
        "gu": "પાસપોર્ટ સાઇઝનો ફોટો"
      },
      {
        "en": "Mobile Number / Email",
        "gu": "મોબાઈલ નંબર / ઇમેઇલ"
      }
    ],
    "eligibility": {
      "en": "Any Indian citizen can apply.",
      "gu": "કોઈપણ ભારતીય નાગરિક અરજી કરી શકે છે."
    },
    "process": [
      {
        "en": "Provide required documents",
        "gu": "જરૂરી દસ્તાવેજો આપો"
      },
      {
        "en": "Biometric/OTP Verification",
        "gu": "બાયોમેટ્રિક / OTP ચકાસણી"
      }
    ],
    "notes": {
      "en": "Official PAN application requires valid ID and address proof.",
      "gu": "સત્તાવાર PAN અરજીમાં ઓળખ, સરનામું અને DOB સંબંધિત પુરાવા જરૂરી છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with PAN Card."
    }
  },
  {
    "id": "aadhaar",
    "slug": "aadhaar",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Aadhaar Card",
      "gu": "આધાર કાર્ડ"
    },
    "icon": "FileCheck",
    "image": "/images/services/aadhaar.webp",
    "shortDescription": {
      "en": "Aadhaar enrolment and update services.",
      "gu": "આધાર કાર્ડ નોંધણી અને સુધારા."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Update your Aadhaar card details including name, DOB, address, and mobile number.",
      "gu": "આધાર કાર્ડમાં નામ, સરનામું, અને અન્ય વિગતો અપડેટ કરો."
    },
    "newApplication": {
      "en": "New Aadhaar Enrolment",
      "gu": "નવી આધાર નોંધણી"
    },
    "correction": {
      "en": "Update Name, DOB, Address, Mobile/Email, or Biometrics.",
      "gu": "નામ, જન્મતારીખ, સરનામું, મોબાઈલ અથવા બાયોમેટ્રિક સુધારો."
    },
    "documents": [
      {
        "en": "Identity Proof (POI)",
        "gu": "ઓળખનો પુરાવો (POI)"
      },
      {
        "en": "Address Proof (POA)",
        "gu": "સરનામાનો પુરાવો (POA)"
      },
      {
        "en": "Date of Birth Proof",
        "gu": "જન્મ તારીખનો પુરાવો"
      },
      {
        "en": "Mobile Number",
        "gu": "મોબાઈલ નંબર"
      },
      {
        "en": "Existing Aadhaar",
        "gu": "હાલનું આધાર કાર્ડ"
      }
    ],
    "eligibility": {
      "en": "Residents of India.",
      "gu": "ભારતના રહેવાસીઓ."
    },
    "process": [
      {
        "en": "Visit center with original documents",
        "gu": "અસલ દસ્તાવેજો સાથે સેન્ટરની મુલાકાત લો"
      }
    ],
    "notes": {
      "en": "UIDAI standard list of acceptable documents applies.",
      "gu": "UIDAI માન્ય દસ્તાવેજોની યાદી પ્રમાણે આધાર અપડેટ થશે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with Aadhaar."
    }
  },
  {
    "id": "voter-id",
    "slug": "voter-id",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Voter ID Card",
      "gu": "ચૂંટણી કાર્ડ"
    },
    "icon": "FileCheck",
    "image": "/images/services/voter-id.webp",
    "shortDescription": {
      "en": "New Registration, Correction, and Transfer.",
      "gu": "નવું રજીસ્ટ્રેશન, સુધારો અને ટ્રાન્સફર."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Voter ID card application, transfer, and correction services.",
      "gu": "ચૂંટણી કાર્ડ માટેની તમામ નવી અને સુધારા સેવાઓ."
    },
    "newApplication": {
      "en": "New Voter Registration (Form 6)",
      "gu": "નવું ચૂંટણી કાર્ડ રજીસ્ટ્રેશન (ફોર્મ 6)"
    },
    "correction": {
      "en": "Update Voter details or transfer address (Form 8).",
      "gu": "વિગતોમાં સુધારો અથવા સરનામું ટ્રાન્સફર (ફોર્મ 8)."
    },
    "documents": [
      {
        "en": "Aadhaar Card / Identity Proof",
        "gu": "આધાર કાર્ડ / ઓળખનો પુરાવો"
      },
      {
        "en": "Address Proof",
        "gu": "સરનામાનો પુરાવો"
      },
      {
        "en": "Age / DOB Proof",
        "gu": "ઉંમર / જન્મ તારીખનો પુરાવો"
      },
      {
        "en": "Passport-size Photo",
        "gu": "પાસપોર્ટ સાઇઝનો ફોટો"
      },
      {
        "en": "Mobile Number",
        "gu": "મોબાઈલ નંબર"
      }
    ],
    "eligibility": {
      "en": "Citizens 18+ years.",
      "gu": "18 વર્ષથી વધુ ઉંમરના નાગરિકો."
    },
    "process": [
      {
        "en": "Online form submission & ECI verification",
        "gu": "ઓનલાઇન ફોર્મ સબમિશન અને ચૂંટણી પંચ ચકાસણી"
      }
    ],
    "notes": {
      "en": "Ensure address proof matches current residence.",
      "gu": "સરનામાનો પુરાવો વર્તમાન રહેઠાણ સાથે મેળ ખાતો હોવો જોઈએ."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with Voter ID."
    }
  },
  {
    "id": "passport",
    "slug": "passport",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Passport",
      "gu": "પાસપોર્ટ"
    },
    "icon": "FileCheck",
    "image": "/images/services/passport.webp",
    "shortDescription": {
      "en": "New Passport, Renewal, Reissue & Minor Passports.",
      "gu": "નવો પાસપોર્ટ, રિન્યુઅલ અને માઇનોર પાસપોર્ટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Complete passport application, appointment booking, and renewal assistance.",
      "gu": "પાસપોર્ટ અરજી, એપોઇન્ટમેન્ટ બુકિંગ અને રિન્યુઅલ સહાય."
    },
    "newApplication": {
      "en": "Apply for fresh normal or tatkaal passport.",
      "gu": "નવા નોર્મલ અથવા તત્કાલ પાસપોર્ટ માટે અરજી કરો."
    },
    "correction": {
      "en": "Renew or reissue existing passport with updated details.",
      "gu": "હાલનો પાસપોર્ટ રિન્યુ કરો અથવા વિગતો અપડેટ કરો."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Address Proof",
        "gu": "સરનામાનો પુરાવો"
      },
      {
        "en": "Date of Birth Proof / School LC",
        "gu": "જન્મ તારીખનો પુરાવો / LC"
      },
      {
        "en": "PAN Card / Voter ID",
        "gu": "પાન કાર્ડ / ચૂંટણી કાર્ડ"
      },
      {
        "en": "Existing Passport (for renewal)",
        "gu": "હાલનો પાસપોર્ટ (રિન્યુઅલ માટે)"
      }
    ],
    "eligibility": {
      "en": "Indian citizens.",
      "gu": "ભારતીય નાગરિકો."
    },
    "process": [
      {
        "en": "Form filling, document upload, PSK appointment slot booking",
        "gu": "ફોર્મ ભરવું, દસ્તાવેજ અપલોડ અને એપોઇન્ટમેન્ટ બુકિંગ"
      }
    ],
    "notes": {
      "en": "Original documents must be carried to Passport Seva Kendra.",
      "gu": "પાસપોર્ટ સેવા કેન્દ્ર પર અસલ દસ્તાવેજો સાથે રાખવા."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with Passport."
    }
  },
  {
    "id": "driving-licence",
    "slug": "driving-licence",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Driving Licence (DL)",
      "gu": "ડ્રાઇવિંગ લાઇસન્સ"
    },
    "icon": "FileCheck",
    "image": "/images/services/driving-licence.webp",
    "shortDescription": {
      "en": "New Learning, Permanent DL, Renewal & Update.",
      "gu": "નવું લર્નિંગ, પાકું લાયસન્સ, રિન્યુઅલ અને સુધારો."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "End-to-end assistance for Sarathi RTO driving licence services.",
      "gu": "સારથી RTO ડ્રાઇવિંગ લાયસન્સ સંબંધિત તમામ સેવાઓ."
    },
    "newApplication": {
      "en": "Apply for Learning Licence and Permanent DL.",
      "gu": "લર્નિંગ લાયસન્સ અને પાકા લાયસન્સ માટે અરજી."
    },
    "correction": {
      "en": "DL Renewal, address change, duplicate DL, or category addition.",
      "gu": "લાયસન્સ રિન્યુઅલ, સરનામું સુધારો અથવા ડુપ્લિકેટ લાયસન્સ."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Age & Address Proof",
        "gu": "ઉંમર અને સરનામાનો પુરાવો"
      },
      {
        "en": "Blood Group Report",
        "gu": "બ્લડ ગ્રુપ રિપોર્ટ"
      },
      {
        "en": "Passport Photo & Signature",
        "gu": "પાસપોર્ટ ફોટો અને સહી"
      },
      {
        "en": "Learning Licence (for permanent DL)",
        "gu": "લર્નિંગ લાયસન્સ (પાકા લાયસન્સ માટે)"
      }
    ],
    "eligibility": {
      "en": "Age 18+ for 4-wheeler/geared bikes, 16+ for gearless.",
      "gu": "18+ વર્ષ (ફોર-વ્હીલર/બાઈક) અથવા 16+ વર્ષ (વિના ગિયર)."
    },
    "process": [
      {
        "en": "Online application, slot booking & test assistance",
        "gu": "ઓનલાઈન અરજી, સ્લોટ બુકિંગ અને ટેસ્ટ સહાય"
      }
    ],
    "notes": {
      "en": "RTO test is compulsory for permanent driving licence.",
      "gu": "પાકા લાયસન્સ માટે RTO ડ્રાઇવિંગ ટેસ્ટ આપવી ફરજિયાત છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with Driving Licence."
    }
  },
  {
    "id": "ayushman-card",
    "slug": "ayushman-card",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Ayushman Card",
      "gu": "આયુષ્માન કાર્ડ"
    },
    "icon": "FileCheck",
    "image": "/images/services/ayushman-card.webp",
    "shortDescription": {
      "en": "PM-JAY Health Insurance Card Enrolment & Print.",
      "gu": "PM-JAY આયુષ્માન હેલ્થ કાર્ડ નોંધણી અને પ્રિન્ટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Free healthcare coverage up to 5/10 Lakhs per family under PM-JAY scheme.",
      "gu": "PM-JAY યોજના હેઠળ પરિવારો માટે મફત કેશલેસ સારવાર હેલ્થ કાર્ડ."
    },
    "newApplication": {
      "en": "New member enrolment and e-KYC.",
      "gu": "નવા સભ્યની નોંધણી અને e-KYC."
    },
    "correction": {
      "en": "Family member addition and details update.",
      "gu": "પરિવારના નવા સભ્ય ઉમેરો અને વિગતો સુધારો."
    },
    "documents": [
      {
        "en": "Ration Card / NFSA Proof",
        "gu": "રેશન કાર્ડ / NFSA પુરાવો"
      },
      {
        "en": "Aadhaar Card of all members",
        "gu": "પરિવારના તમામ સભ્યોના આધાર કાર્ડ"
      },
      {
        "en": "Aadhaar-linked Mobile",
        "gu": "આધાર લિંક્ડ મોબાઈલ"
      }
    ],
    "eligibility": {
      "en": "NFSA ration card holders and eligible PMJAY families.",
      "gu": "NFSA રેશન કાર્ડ ધરાવતા અને PMJAY પાત્રતા પરિવારો."
    },
    "process": [
      {
        "en": "Biometric / OTP e-KYC verification and card instant download",
        "gu": "e-KYC ચકાસણી અને તાત્કાલિક કાર્ડ ડાઉનલોડ"
      }
    ],
    "notes": {
      "en": "All family members must have their Aadhaar updated.",
      "gu": "તમામ સભ્યોના આધાર કાર્ડ સાથે મોબાઈલ નંબર લિંક હોવો હિતાવહ છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with Ayushman Card."
    }
  },
  {
    "id": "e-shram",
    "slug": "e-shram",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "e-Shram Card",
      "gu": "ઈ-શ્રમ કાર્ડ"
    },
    "icon": "FileCheck",
    "image": "/images/services/e-shram.webp",
    "shortDescription": {
      "en": "National database for unorganized workers registration.",
      "gu": "અસંગઠિત ક્ષેત્રના કામદારો માટે ઈ-શ્રમ કાર્ડ નોંધણી."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Get social security benefits and accidental insurance cover under e-Shram.",
      "gu": "સામાજિક સુરક્ષા લાભો અને અકસ્માત વીમા કવચ મેળવવા માટે નોંધણી."
    },
    "newApplication": {
      "en": "Fresh registration for unorganized workers.",
      "gu": "અસંગઠિત કામદારો માટે નવી નોંધણી."
    },
    "correction": {
      "en": "Update occupation, address, or bank details.",
      "gu": "વ્યવસાય, સરનામું અથવા બેંક વિગતો અપડેટ કરો."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Aadhaar-linked Mobile",
        "gu": "આધાર લિંક્ડ મોબાઈલ"
      },
      {
        "en": "Bank Account Passbook",
        "gu": "બેંક એકાઉન્ટ પાસબુક"
      },
      {
        "en": "Occupation Details",
        "gu": "કામ/વ્યવસાયની વિગતો"
      }
    ],
    "eligibility": {
      "en": "Unorganized workers aged 16-59 years, not in EPFO/ESIC.",
      "gu": "16-59 વર્ષના અસંગઠિત કામદારો (EPFO/ESIC સભ્ય ન હોવા જોઈએ)."
    },
    "process": [
      {
        "en": "Instant OTP verification and UAN card generation",
        "gu": "OTP ચકાસણી અને તાત્કાલિક UAN કાર્ડ જનરેટ"
      }
    ],
    "notes": {
      "en": "Bank account must be active and mapped to Aadhaar.",
      "gu": "બેંક એકાઉન્ટ સક્રિય હોવું જરૂરી છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with e-Shram Card."
    }
  },
  {
    "id": "pm-kisan",
    "slug": "pm-kisan",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "PM Kisan Samman Nidhi",
      "gu": "પી.એમ. કિસાન સન્માન નિધિ"
    },
    "icon": "FileCheck",
    "image": "/images/services/pm-kisan.webp",
    "shortDescription": {
      "en": "Farmer registration, e-KYC & land seeding.",
      "gu": "ખેડૂત નવી નોંધણી, e-KYC અને લેન્ડ સીડિંગ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Receive 6000 Rs annual support for cultivating farmers under PM-Kisan scheme.",
      "gu": "ખેતી કરતા ખેડૂતો માટે વાર્ષિક 6000 સહાય યોજના."
    },
    "newApplication": {
      "en": "New farmer registration with 7/12 land records.",
      "gu": "7/12 જમીન રેકોર્ડ સાથે નવી ખેડૂત નોંધણી."
    },
    "correction": {
      "en": "Aadhaar e-KYC, bank account correction, and land status update.",
      "gu": "e-KYC, બેંક ખાતું સુધારો અને લેન્ડ સ્ટેટસ અપડેટ."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Land Record (7/12 & 8A)",
        "gu": "જમીનના કાગળો (7/12 અને 8A)"
      },
      {
        "en": "Bank Passbook",
        "gu": "બેંક પાસબુક"
      },
      {
        "en": "Aadhaar-linked Mobile",
        "gu": "આધાર લિંક્ડ મોબાઈલ"
      }
    ],
    "eligibility": {
      "en": "Landholding farmer families.",
      "gu": "જમીન ધરાવતા ખેડૂત પરિવારો."
    },
    "process": [
      {
        "en": "Online submission, talati verification, and e-KYC completion",
        "gu": "ઓનલાઈન અરજી, તલાટી વેરિફિકેશન અને e-KYC પૂર્ણ કરવું"
      }
    ],
    "notes": {
      "en": "e-KYC is mandatory to receive next installment.",
      "gu": "આગામી હપ્તો મેળવવા માટે e-KYC કરાવવું ફરજિયાત છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with PM Kisan."
    }
  },
  {
    "id": "income-certificate",
    "slug": "income-certificate",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Income Certificate",
      "gu": "આવકનો દાખલો"
    },
    "icon": "FileCheck",
    "image": "/images/services/income-certificate.webp",
    "shortDescription": {
      "en": "Official Gujarat Govt income certificate application.",
      "gu": "ગુજરાત સરકાર માન્ય આવકનો દાખલો મેળવવાની અરજી."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Required for college scholarships, admissions, fee waivers, and govt welfare schemes.",
      "gu": "સ્કોલરશીપ, કોલેજ એડમિશન અને સરકારી યોજનાઓ માટે આવશ્યક પ્રમાણપત્ર."
    },
    "newApplication": {
      "en": "Apply for fresh 3-year validity income certificate.",
      "gu": "3 વર્ષની માન્યતા ધરાવતા નવા આવકના દાખલા માટે અરજી."
    },
    "correction": {
      "en": "Renewal upon expiry.",
      "gu": "મુદત પૂર્ણ થયા પછી રિન્યુઅલ."
    },
    "documents": [
      {
        "en": "Ration Card",
        "gu": "રેશન કાર્ડ"
      },
      {
        "en": "Aadhaar Card of Applicant & Family Head",
        "gu": "અરજદાર અને મોભીનું આધાર કાર્ડ"
      },
      {
        "en": "Electricity Bill / Tax Receipt",
        "gu": "લાઈટ બિલ / વેરા પહોંચ"
      },
      {
        "en": "Salary Slip / Talati Income Report",
        "gu": "સેલેરી સ્લિપ / તલાટી આવક પંચનામું"
      }
    ],
    "eligibility": {
      "en": "Residents of Gujarat.",
      "gu": "ગુજરાતના રહેવાસીઓ."
    },
    "process": [
      {
        "en": "Digital Gujarat portal application & mamlatdar verification",
        "gu": "ડિજિટલ ગુજરાત પોર્ટલ અરજી અને મામલતદાર મંજૂરી"
      }
    ],
    "notes": {
      "en": "Valid for 3 financial years.",
      "gu": "આ પ્રમાણપત્ર 3 નાણાકીય વર્ષ માટે માન્ય રહે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need Income Certificate."
    }
  },
  {
    "id": "caste-certificate",
    "slug": "caste-certificate",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Caste Certificate",
      "gu": "જાતિનો દાખલો"
    },
    "icon": "FileCheck",
    "image": "/images/services/caste-certificate.webp",
    "shortDescription": {
      "en": "SC, ST, SEBC/OBC, and EWS caste certificates.",
      "gu": "SC, ST, SEBC/OBC અને EWS જાતિના પ્રમાણપત્રો."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Official government caste certificate required for reservations in education and government recruitments.",
      "gu": "શિક્ષણ અને સરકારી નોકરીમાં અનામત લાભ માટે સત્તાવાર જાતિ પ્રમાણપત્ર."
    },
    "newApplication": {
      "en": "Apply for fresh caste certificate.",
      "gu": "નવા જાતિ પ્રમાણપત્ર માટે અરજી."
    },
    "correction": {
      "en": "Update spelling or details.",
      "gu": "વિગતોમાં સુધારો."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "School Leaving Certificate (LC) of Father/Applicant",
        "gu": "પિતા અથવા અરજદારનું LC"
      },
      {
        "en": "Family Pedigree / Pedhinama (if applicable)",
        "gu": "પેઢીનામું (લાગુ પડે તો)"
      },
      {
        "en": "Ration Card & Electricity Bill",
        "gu": "રેશન કાર્ડ અને લાઈટ બિલ"
      }
    ],
    "eligibility": {
      "en": "Eligible reserved category citizens of Gujarat.",
      "gu": "ગુજરાતના પાત્રતા ધરાવતા નાગરિકો."
    },
    "process": [
      {
        "en": "Application submission, scrutiny, and digital signing",
        "gu": "અરજી સબમિશન, દસ્તાવેજ ચકાસણી અને ડિજિટલ સહી"
      }
    ],
    "notes": {
      "en": "Father's LC is crucial proof of caste lineage.",
      "gu": "જાતિની સાબિતી માટે પિતાનું શાળા છોડ્યાનું પ્રમાણપત્ર મહત્વનું છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need Caste Certificate."
    }
  },
  {
    "id": "ncl-certificate",
    "slug": "ncl-certificate",
    "categoryId": "online-services",
    "category": {
      "en": "Online Services",
      "gu": "ઓનલાઈન સેવાઓ"
    },
    "title": {
      "en": "Non-Creamy Layer (NCL) Certificate",
      "gu": "નોન-ક્રીમીલેયર (NCL) દાખલો"
    },
    "icon": "FileCheck",
    "image": "/images/services/ncl-certificate.webp",
    "shortDescription": {
      "en": "SEBC/OBC Non-Creamy Layer certificate with 3 years validity.",
      "gu": "SEBC/OBC કેટેગરી માટે 3 વર્ષની માન્યતા ધરાવતો NCL દાખલો."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Mandatory certificate for SEBC/OBC candidates to avail reservation in admissions and government jobs.",
      "gu": "સરકારી ભરતીઓ અને કોલેજ પ્રવેશ માટે SEBC ઉમેદવારો માટે ફરજિયાત પ્રમાણપત્ર."
    },
    "newApplication": {
      "en": "Apply for fresh Parishisht-K NCL certificate.",
      "gu": "પરિશિષ્ટ-ક NCL પ્રમાણપત્ર માટે અરજી."
    },
    "correction": {
      "en": "Renewal after 3 financial years.",
      "gu": "3 વર્ષ પછી રિન્યુઅલ."
    },
    "documents": [
      {
        "en": "Caste Certificate",
        "gu": "જાતિનો દાખલો"
      },
      {
        "en": "Income Certificate / Income Proof",
        "gu": "આવકનો દાખલો / આવક પુરાવો"
      },
      {
        "en": "Father / Applicant LC",
        "gu": "પિતા / અરજદારનું LC"
      },
      {
        "en": "Ration Card & Photo",
        "gu": "રેશન કાર્ડ અને ફોટો"
      }
    ],
    "eligibility": {
      "en": "SEBC/OBC candidates within income ceiling.",
      "gu": "આવક મર્યાદામાં આવતા SEBC/OBC નાગરિકો."
    },
    "process": [
      {
        "en": "Digital submission and issuing by competent authority",
        "gu": "ઓનલાઇન અરજી અને મામલતદાર કચેરી દ્વારા મંજૂરી"
      }
    ],
    "notes": {
      "en": "Valid for 3 financial years as per Gujarat Govt rules.",
      "gu": "ગુજરાત સરકારના નિયમ મુજબ 3 નાણાકીય વર્ષ માટે માન્ય રહેશે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need NCL Certificate."
    }
  },
  {
    "id": "college-admission",
    "slug": "college-admission",
    "categoryId": "education-services",
    "category": {
      "en": "Education Services",
      "gu": "શિક્ષણ સેવાઓ"
    },
    "title": {
      "en": "College Admission Form",
      "gu": "કોલેજ એડમિશન ફોર્મ"
    },
    "icon": "GraduationCap",
    "image": "/images/services/college-admission.webp",
    "shortDescription": {
      "en": "Online admission for BA, BCom, BSc, BCA, BBA & Diploma.",
      "gu": "BA, BCom, BSc, BCA, BBA અને ડિપ્લોમા માટે ઓનલાઇન એડમિશન."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Complete portal registration, college selection, merit choice filling, and document verification assistance.",
      "gu": "યુનિવર્સિટી પોર્ટલ રજીસ્ટ્રેશન, કોલેજ સિલેક્શન અને મેરિટ ચોઇસ ફિલિંગ સહાય."
    },
    "newApplication": {
      "en": "Apply for fresh undergraduate or postgraduate courses.",
      "gu": "સ્નાતક અથવા અનુસ્નાતક કોર્સ માટે નવી અરજી."
    },
    "correction": {
      "en": "Choice filling edit during open window.",
      "gu": "ચોઈસ ફિલિંગમાં સુધારો."
    },
    "documents": [
      {
        "en": "10th & 12th Marksheet",
        "gu": "10મું અને 12મું માર્કશીટ"
      },
      {
        "en": "School Leaving Certificate (LC)",
        "gu": "શાળા છોડ્યાનું પ્રમાણપત્ર (LC)"
      },
      {
        "en": "Caste / EWS / NCL Certificate",
        "gu": "જાતિ / EWS / NCL પ્રમાણપત્ર"
      },
      {
        "en": "Passport Photo & Signature",
        "gu": "પાસપોર્ટ સાઇઝ ફોટો અને સહી"
      },
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      }
    ],
    "eligibility": {
      "en": "12th passed students.",
      "gu": "12મું પાસ વિદ્યાર્થીઓ."
    },
    "process": [
      {
        "en": "Choice filling, merit tracking, and admission fee receipt generation",
        "gu": "ચોઈસ ફિલિંગ, મેરિટ ટ્રેકિંગ અને ફી પહોંચ જનરેશન"
      }
    ],
    "notes": {
      "en": "Ensure marks are entered accurately to prevent merit disqualification.",
      "gu": "મેરિટ માટે ગુણની સાચી એન્ટ્રી ખૂબ મહત્વની છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need College Admission assistance."
    }
  },
  {
    "id": "university-exam",
    "slug": "university-exam",
    "categoryId": "education-services",
    "category": {
      "en": "Education Services",
      "gu": "શિક્ષણ સેવાઓ"
    },
    "title": {
      "en": "University Exam Form",
      "gu": "યુનિવર્સિટી પરીક્ષા ફોર્મ"
    },
    "icon": "GraduationCap",
    "image": "/images/services/university-exam.webp",
    "shortDescription": {
      "en": "Semester examination form filling for VNSGU, GTU & others.",
      "gu": "VNSGU, GTU અને અન્ય યુનિવર્સિટી પરીક્ષા ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Timely semester exam form submission, subject selection, and fee payment without late fees.",
      "gu": "વિલંબ શુલ્ક વગર સેમેસ્ટર પરીક્ષા ફોર્મ, વિષય પસંદગી અને ફી ભરવાની સુવિધા."
    },
    "newApplication": {
      "en": "Regular and ATKT semester exam form submission.",
      "gu": "નિયમિત અને ATKT સેમેસ્ટર પરીક્ષા ફોર્મ."
    },
    "correction": {
      "en": "Subject correction before hall ticket release.",
      "gu": "હોલ ટિકિટ પહેલાં વિષય સુધારો."
    },
    "documents": [
      {
        "en": "Student Enrollment / SPID Number",
        "gu": "સ્ટુડન્ટ એનરોલમેન્ટ / SPID નંબર"
      },
      {
        "en": "Previous Semester Marksheet",
        "gu": "અગાઉના સેમેસ્ટરની માર્કશીટ"
      },
      {
        "en": "Student Photo & Signature",
        "gu": "વિદ્યાર્થીનો ફોટો અને સહી"
      }
    ],
    "eligibility": {
      "en": "Enrolled university students.",
      "gu": "યુનિવર્સિટીમાં અભ્યાસ કરતા વિદ્યાર્થીઓ."
    },
    "process": [
      {
        "en": "Portal login, subject confirmation, and receipt download",
        "gu": "પોર્ટલ લોગિન, વિષય કન્ફર્મેશન અને પહોંચ ડાઉનલોડ"
      }
    ],
    "notes": {
      "en": "Always check university circular for last submission date.",
      "gu": "યુનિવર્સિટીની છેલ્લી તારીખ ખાસ ચકાસવી."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with University Exam Form."
    }
  },
  {
    "id": "hostel-admission",
    "slug": "hostel-admission",
    "categoryId": "education-services",
    "category": {
      "en": "Education Services",
      "gu": "શિક્ષણ સેવાઓ"
    },
    "title": {
      "en": "Hostel Admission Form",
      "gu": "હોસ્ટેલ એડમિશન ફોર્મ"
    },
    "icon": "GraduationCap",
    "image": "/images/services/hostel-admission.webp",
    "shortDescription": {
      "en": "Samras Hostel & Govt social welfare hostel applications.",
      "gu": "સમરસ હોસ્ટેલ અને સમાજ કલ્યાણ હોસ્ટેલ એડમિશન ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Assistance for free student boarding and lodging in government and Samras hostels across Gujarat.",
      "gu": "ગુજરાતભરની સરકારી અને સમરસ હોસ્ટેલમાં વિનામૂલ્યે રહેવા-જમવા માટેની અરજી."
    },
    "newApplication": {
      "en": "Fresh hostel admission for new college year.",
      "gu": "કોલેજના નવા વર્ષ માટે હોસ્ટેલ અરજી."
    },
    "correction": {
      "en": "Hostel renewal for subsequent years.",
      "gu": "આગામી વર્ષ માટે હોસ્ટેલ રિન્યુઅલ."
    },
    "documents": [
      {
        "en": "College Admission Fee Receipt",
        "gu": "કોલેજ એડમિશન ફી પહોંચ"
      },
      {
        "en": "College Bonafide Certificate",
        "gu": "કોલેજ બોનાફાઇડ સર્ટિફિકેટ"
      },
      {
        "en": "10th, 12th & Degree Marksheet",
        "gu": "માર્કશીટ"
      },
      {
        "en": "Income & Caste Certificate",
        "gu": "આવક અને જાતિનો દાખલો"
      },
      {
        "en": "Aadhaar Card & Domicile Proof",
        "gu": "આધાર કાર્ડ અને રહેઠાણનો પુરાવો"
      }
    ],
    "eligibility": {
      "en": "Merit-based admission for college students residing away from home.",
      "gu": "ઘરથી દૂર અભ્યાસ કરતા વિદ્યાર્થીઓ માટે મેરિટ મુજબ."
    },
    "process": [
      {
        "en": "Online portal registration, document scan, and merit tracking",
        "gu": "ઓનલાઈન રજીસ્ટ્રેશન, ડોક્યુમેન્ટ સ્કેન અને મેરિટ ટ્રેકિંગ"
      }
    ],
    "notes": {
      "en": "Distance from college and family income are primary criteria.",
      "gu": "કોલેજથી અંતર અને આવક મુખ્ય માપદંડ છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need Hostel Admission help."
    }
  },
  {
    "id": "scholarship",
    "slug": "scholarship",
    "categoryId": "education-services",
    "category": {
      "en": "Education Services",
      "gu": "શિક્ષણ સેવાઓ"
    },
    "title": {
      "en": "Digital Gujarat Scholarship",
      "gu": "સ્કોલરશીપ ફોર્મ"
    },
    "icon": "GraduationCap",
    "image": "/images/services/scholarship.webp",
    "shortDescription": {
      "en": "Post-Matric scholarships for SC, ST, SEBC, EWS & minority students.",
      "gu": "SC, ST, SEBC, EWS અને લઘુમતી વિદ્યાર્થીઓ માટે પોસ્ટ-મેટ્રિક સ્કોલરશીપ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Get complete college tuition fee reimbursement and monthly maintenance allowances from government.",
      "gu": "સરકાર તરફથી કોલેજ ફી પરત અને માસિક નિર્વાહ ભથ્થું મેળવો."
    },
    "newApplication": {
      "en": "Fresh application for 1st year college students.",
      "gu": "કોલેજના પ્રથમ વર્ષના વિદ્યાર્થીઓ માટે નવી અરજી."
    },
    "correction": {
      "en": "Renewal application for 2nd, 3rd, and 4th year students.",
      "gu": "2જા અને 3જા વર્ષના વિદ્યાર્થીઓ માટે રિન્યુઅલ અરજી."
    },
    "documents": [
      {
        "en": "Student Aadhaar Card (Must be NPCI linked to bank)",
        "gu": "વિદ્યાર્થીનું આધાર કાર્ડ (બેંક સાથે NPCI લિંક હોવું જરૂરી)"
      },
      {
        "en": "Student Bank Passbook",
        "gu": "વિદ્યાર્થીની બેંક પાસબુક"
      },
      {
        "en": "Income Certificate (Valid)",
        "gu": "આવકનો દાખલો"
      },
      {
        "en": "Caste Certificate",
        "gu": "જાતિનો દાખલો"
      },
      {
        "en": "Current Year College Fee Receipt",
        "gu": "ચાલુ વર્ષની કોલેજ ફી પહોંચ"
      },
      {
        "en": "Previous Marksheets & Leaving Certificate",
        "gu": "અગાઉની માર્કશીટ અને LC"
      }
    ],
    "eligibility": {
      "en": "Students enrolled in recognized diploma/degree courses.",
      "gu": "માન્ય ડિપ્લોમા અથવા ડિગ્રી કોર્સમાં અભ્યાસ કરતા વિદ્યાર્થીઓ."
    },
    "process": [
      {
        "en": "Digital Gujarat portal application, lock, and submission receipt",
        "gu": "ડિજિટલ ગુજરાત અરજી, લોક અને કન્ફર્મેશન પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "Bank account MUST be seeded with Aadhaar in NPCI mapper to receive scholarship.",
      "gu": "સ્કોલરશીપ સીધી બેંકમાં આવવા માટે ખાતું NPCI આધાર સીડેડ હોવું જોઈએ."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need Scholarship assistance."
    }
  },
  {
    "id": "college-exam-renewal",
    "slug": "college-exam-renewal",
    "categoryId": "education-services",
    "category": {
      "en": "Education Services",
      "gu": "શિક્ષણ સેવાઓ"
    },
    "title": {
      "en": "College Form / Exam Renewal",
      "gu": "કોલેજ ફોર્મ / પરીક્ષા રિન્યુઅલ"
    },
    "icon": "GraduationCap",
    "image": "/images/services/college-exam-renewal.webp",
    "shortDescription": {
      "en": "Yearly registration renewal and semester continuation.",
      "gu": "વાર્ષિક રજીસ્ટ્રેશન રિન્યુઅલ અને સેમેસ્ટર ચાલુ રાખવાની પ્રક્રિયા."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Continuation form and semester fees submission for ongoing college courses.",
      "gu": "ચાલુ કોલેજ અભ્યાસક્રમ માટે રિન્યુઅલ અને ફી ભરવાની સહાય."
    },
    "newApplication": {
      "en": "Semester registration renewal.",
      "gu": "સેમેસ્ટર નોંધણી રિન્યુઅલ."
    },
    "correction": {
      "en": "Student contact/address updates.",
      "gu": "સંપર્ક અને સરનામામાં સુધારો."
    },
    "documents": [
      {
        "en": "Existing Student ID / Enrollment",
        "gu": "હાલનું સ્ટુડન્ટ ID / એનરોલમેન્ટ"
      },
      {
        "en": "Previous Semester Result",
        "gu": "અગાઉનું પરિણામ"
      },
      {
        "en": "Fee Payment Details",
        "gu": "ફી પેમેન્ટ વિગતો"
      }
    ],
    "eligibility": {
      "en": "Continuing college students.",
      "gu": "કોલેજમાં અભ્યાસ કરતા ચાલુ વિદ્યાર્થીઓ."
    },
    "process": [
      {
        "en": "Fast-track verification and renewal submission",
        "gu": "ઝડપી ચકાસણી અને રિન્યુઅલ સબમિશન"
      }
    ],
    "notes": {
      "en": "Prevent course cancellation by renewing on time.",
      "gu": "સમયસર રિન્યુઅલ કરાવી અભ્યાસ ચાલુ રાખો."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need Exam Renewal help."
    }
  },
  {
    "id": "resume-cv",
    "slug": "resume-cv",
    "categoryId": "education-services",
    "category": {
      "en": "Education Services",
      "gu": "શિક્ષણ સેવાઓ"
    },
    "title": {
      "en": "Professional Resume / CV Making",
      "gu": "પ્રોફેશનલ રિઝ્યુમ / CV"
    },
    "icon": "GraduationCap",
    "image": "/images/services/resume-cv.webp",
    "shortDescription": {
      "en": "Modern ATS-friendly resume formatting for jobs & interviews.",
      "gu": "ઇન્ટરવ્યુ અને નોકરી માટે આધુનિક ATS રિઝ્યુમ નિર્માણ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Craft an eye-catching, professional resume designed to pass applicant tracking systems and impress hiring managers.",
      "gu": "કંપનીઓમાં પસંદગી પામવા માટે આકર્ષક અને પ્રોફેશનલ બાયોડેટા / CV."
    },
    "newApplication": {
      "en": "Create fresh CV from scratch for freshers or experienced professionals.",
      "gu": "ફ્રેશર્સ અથવા અનુભવી ઉમેદવારો માટે નવું CV."
    },
    "correction": {
      "en": "Update existing CV with new experience, skills, or certifications.",
      "gu": "જૂના CV માં નવો અનુભવ અને સ્કીલ્સ ઉમેરો."
    },
    "documents": [
      {
        "en": "Educational Details & Marksheets",
        "gu": "શૈક્ષણિક વિગતો અને માર્કશીટ"
      },
      {
        "en": "Work Experience Details (if any)",
        "gu": "કામનો અનુભવ (જો હોય તો)"
      },
      {
        "en": "Skills & Certification Details",
        "gu": "કોમ્પ્યુટર/ટેકનિકલ સ્કીલ્સ"
      },
      {
        "en": "Passport Size Photo & Contact Details",
        "gu": "ફોટો અને સંપર્ક વિગતો"
      }
    ],
    "eligibility": {
      "en": "Job seekers, graduates, and working professionals.",
      "gu": "નોકરી ઇચ્છુક તમામ ઉમેદવારો."
    },
    "process": [
      {
        "en": "Template selection, content drafting, proofreading, and PDF delivery",
        "gu": "ટેમ્પલેટ પસંદગી, ડ્રાફ્ટિંગ અને હાઈ-ક્વોલિટી PDF પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "Both digital PDF and laminated hard copies provided.",
      "gu": "ડિજિટલ PDF અને લેમિનેટેડ પ્રિન્ટ બંને આપવામાં આવે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to make a Professional Resume."
    }
  },
  {
    "id": "government-job",
    "slug": "government-job",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "Government Job Applications",
      "gu": "સરકારી નોકરી ફોર્મ"
    },
    "icon": "Briefcase",
    "image": "/images/services/government-job.webp",
    "shortDescription": {
      "en": "Error-free online form filling for all state and central vacancies.",
      "gu": "તમામ કેન્દ્રીય અને રાજ્ય સ્તરની સરકારી ભરતીના ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Complete notification reading, eligibility check, photo/signature resizing, and fee payment without rejections.",
      "gu": "અરજી રદ ન થાય તે માટે ચોકસાઈપૂર્વક ફોર્મ ભરવું, ફોટો રિસાઈઝ અને ફી પેમેન્ટ."
    },
    "newApplication": {
      "en": "Fresh registration for active government job vacancies.",
      "gu": "ચાલુ સરકારી ભરતી માટે નવી અરજી."
    },
    "correction": {
      "en": "Correction window edits where allowed by recruitment board.",
      "gu": "બોર્ડ દ્વારા આપવામાં આવેલ સુધારા સમયગાળામાં એડિટિંગ."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "10th, 12th, Degree Marksheets",
        "gu": "શૈક્ષણિક માર્કશીટો"
      },
      {
        "en": "Caste / NCL / EWS Certificate",
        "gu": "જાતિ / NCL / EWS પ્રમાણપત્ર"
      },
      {
        "en": "Passport Photo with Date & Clear Signature",
        "gu": "તારીખવાળો પાસપોર્ટ ફોટો અને સહી"
      },
      {
        "en": "CCC Computer Certificate (if required)",
        "gu": "CCC સર્ટિફિકેટ (જરૂરી હોય તો)"
      }
    ],
    "eligibility": {
      "en": "As per specific recruitment notification criteria.",
      "gu": "ભરતીની સત્તાવાર જાહેરાત મુજબ."
    },
    "process": [
      {
        "en": "OJAS / Central portal registration, document upload, and confirmation printout",
        "gu": "પોર્ટલ રજીસ્ટ્રેશન, ડોક્યુમેન્ટ અપલોડ અને કન્ફર્મેશન પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "Keep confirmation number and registered mobile safe for call letters.",
      "gu": "કોલ લેટર માટે કન્ફર્મેશન નંબર સાચવી રાખવો."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to apply for a Govt Job."
    }
  },
  {
    "id": "railway-recruitment",
    "slug": "railway-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "Railway Recruitment (RRB / RRC)",
      "gu": "રેલવે ભરતી (RRB / RRC)"
    },
    "icon": "Briefcase",
    "image": "/images/services/railway-recruitment.webp",
    "shortDescription": {
      "en": "RRB ALP, Technician, NTPC, Group D & JE form filling.",
      "gu": "RRB ALP, ટેકનિશિયન, NTPC, ગ્રૂપ D અને JE ભરતી ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Assistance for Indian Railways recruitment examinations with zone and post preference selection.",
      "gu": "ભારતીય રેલવેની પરીક્ષાઓ માટે ઝોન પસંદગી અને ઓનલાઇન અરજી સહાય."
    },
    "newApplication": {
      "en": "Railway recruitment board online application.",
      "gu": "રેલવે રિક્રુટમેન્ટ બોર્ડ ઓનલાઇન અરજી."
    },
    "correction": {
      "en": "RRB application modification window assistance.",
      "gu": "રેલવે ફોર્મ સુધારા સહાય."
    },
    "documents": [
      {
        "en": "10th Marksheet (DOB Proof)",
        "gu": "10માની માર્કશીટ"
      },
      {
        "en": "ITI / Diploma / Degree Certificate",
        "gu": "ITI / ડિપ્લોમા / ડિગ્રી પ્રમાણપત્ર"
      },
      {
        "en": "Caste Certificate with Central Govt Format",
        "gu": "સેન્ટ્રલ ફોર્મેટ જાતિ પ્રમાણપત્ર"
      },
      {
        "en": "Aadhaar Card & Photo/Signature",
        "gu": "આધાર કાર્ડ અને ફોટો/સહી"
      }
    ],
    "eligibility": {
      "en": "10th/ITI/Diploma/Graduates aged 18-33+ as per post.",
      "gu": "10મું/ITI/ડિપ્લોમા/ગ્રેજ્યુએટ (18-33 વર્ષ)."
    },
    "process": [
      {
        "en": "RRB portal registration, post prioritization, and fee payment",
        "gu": "RRB રજીસ્ટ્રેશન, પોસ્ટ પસંદગી અને ફી ચુકવણી"
      }
    ],
    "notes": {
      "en": "Central government caste certificate format is mandatory for concessions.",
      "gu": "સેન્ટ્રલ ફોર્મેટનું જાતિ પ્રમાણપત્ર હોવું જરૂરી છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with Railway Recruitment."
    }
  },
  {
    "id": "ssc-recruitment",
    "slug": "ssc-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "SSC Recruitment (CGL, CHSL, MTS, GD)",
      "gu": "SSC ભરતી (CGL, CHSL, MTS, GD)"
    },
    "icon": "Briefcase",
    "image": "/images/services/ssc-recruitment.webp",
    "shortDescription": {
      "en": "Staff Selection Commission One-Time Registration (OTR) and applications.",
      "gu": "સ્ટાફ સિલેક્શન કમિશન OTR રજીસ્ટ્રેશન અને અરજી."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Complete OTR profile creation, live photo capture assistance, and exam center selection.",
      "gu": "SSC ના નવા પોર્ટલ પર OTR પ્રોફાઈલ અને લાઈવ ફોટો કેપ્ચર સહાય."
    },
    "newApplication": {
      "en": "Apply for SSC GD Constable, MTS, CHSL 10+2, and CGL Graduate vacancies.",
      "gu": "SSC GD, MTS, CHSL અને CGL ભરતીઓ માટે અરજી."
    },
    "correction": {
      "en": "OTR modification and application correction.",
      "gu": "OTR પ્રોફાઈલમાં સુધારો."
    },
    "documents": [
      {
        "en": "10th Roll Number & Marksheet",
        "gu": "10મો રોલ નંબર અને માર્કશીટ"
      },
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Highest Qualification Marksheet",
        "gu": "ઉચ્ચ શિક્ષણ માર્કશીટ"
      },
      {
        "en": "Clear Live Photo & Signature",
        "gu": "લાઈવ ફોટો અને સહી"
      }
    ],
    "eligibility": {
      "en": "10th pass, 12th pass, and Graduates as per post.",
      "gu": "10મું, 12મું અથવા ગ્રેજ્યુએશન પાસ."
    },
    "process": [
      {
        "en": "OTR generation, live webcam capture, exam center booking",
        "gu": "OTR જનરેશન, લાઈવ ફોટો અને સેન્ટર પસંદગી"
      }
    ],
    "notes": {
      "en": "SSC now requires live camera capture without cap/glasses.",
      "gu": "SSC હવે ચશ્મા/ટોપી વગરનો લાઈવ કેમેરા ફોટો ફરજિયાત માંગે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with SSC Recruitment."
    }
  },
  {
    "id": "upsc-recruitment",
    "slug": "upsc-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "UPSC Recruitment & Civil Services",
      "gu": "UPSC ભરતી / સિવિલ સર્વિસ"
    },
    "icon": "Briefcase",
    "image": "/images/services/upsc-recruitment.webp",
    "shortDescription": {
      "en": "UPSC Civil Services (IAS/IPS), NDA, CDS & CAPF applications.",
      "gu": "UPSC સિવિલ સર્વિસ (IAS/IPS), NDA, CDS અને CAPF ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Pre-examination OTR verification, exam center allotment, and error-free UPSC application.",
      "gu": "UPSC OTR ચકાસણી, પરીક્ષા કેન્દ્ર પસંદગી અને ઓનલાઇન અરજી."
    },
    "newApplication": {
      "en": "UPSC Prelims and specialized exam form filling.",
      "gu": "UPSC પ્રિલિમ્સ અને વિવિધ સંરક્ષણ પરીક્ષા ફોર્મ."
    },
    "correction": {
      "en": "Correction within UPSC designated window.",
      "gu": "UPSC સુધારા સમયગાળામાં એડિટિંગ."
    },
    "documents": [
      {
        "en": "Aadhaar / Passport / Photo ID",
        "gu": "આધાર / પાસપોર્ટ / ઓળખ પત્ર"
      },
      {
        "en": "Graduation Degree / Final Year Proof",
        "gu": "ડિગ્રી સર્ટિફિકેટ"
      },
      {
        "en": "Recent Passport Photo & Signature",
        "gu": "તાજેતરનો ફોટો અને સહી"
      }
    ],
    "eligibility": {
      "en": "Graduates aged 21-32 years (Relaxations for reserved categories).",
      "gu": "ગ્રેજ્યુએટ ઉમેદવારો (21-32 વર્ષ)."
    },
    "process": [
      {
        "en": "UPSC OTR profile, subject & center selection, fee confirmation",
        "gu": "OTR પ્રોફાઈલ, વિષય અને સેન્ટર પસંદગી"
      }
    ],
    "notes": {
      "en": "Photo ID number entered will be checked on exam day.",
      "gu": "ફોર્મમાં દર્શાવેલ ઓળખ પત્ર પરીક્ષા વખતે સાથે રાખવું ફરજિયાત છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with UPSC application."
    }
  },
  {
    "id": "gpsc-recruitment",
    "slug": "gpsc-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "GPSC Class 1, 2 & 3 Recruitment",
      "gu": "GPSC વર્ગ 1, 2 અને 3 ભરતી"
    },
    "icon": "Briefcase",
    "image": "/images/services/gpsc-recruitment.webp",
    "shortDescription": {
      "en": "Gujarat Administrative Service, DySO, STI & Medical Officer forms.",
      "gu": "ગુજરાત વહીવટી સેવા, નાયબ મામલતદાર, STI અને વર્ગ-1-2 ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Specialized application filing on GPSC-OJAS portal with category reservation proof validation.",
      "gu": "GPSC-OJAS પોર્ટલ પર ચોકસાઈપૂર્વક અરજી અને જાતિ/NCL વેરિફિકેશન."
    },
    "newApplication": {
      "en": "Apply for fresh GPSC advertisements.",
      "gu": "GPSC ની નવી જાહેરાતો માટે અરજી."
    },
    "correction": {
      "en": "Re-apply with new confirmation before deadline.",
      "gu": "છેલ્લી તારીખ પહેલાં સુધારેલી અરજી."
    },
    "documents": [
      {
        "en": "Graduation Marksheet & Degree",
        "gu": "ગ્રેજ્યુએશન માર્કશીટ અને ડિગ્રી"
      },
      {
        "en": "Caste / Non-Creamy Layer Certificate",
        "gu": "જાતિ / NCL દાખલો"
      },
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Photo & Signature as per OJAS specifications",
        "gu": "OJAS નિયમ મુજબનો ફોટો અને સહી"
      }
    ],
    "eligibility": {
      "en": "Graduates with Gujarat domicile reservations.",
      "gu": "ગ્રેજ્યુએટ ઉમેદવારો."
    },
    "process": [
      {
        "en": "GPSC OJAS form submission, fee challan/online payment",
        "gu": "GPSC OJAS ફોર્મ, ફી ચલણ અને કન્ફર્મેશન"
      }
    ],
    "notes": {
      "en": "NCL certificate date must be valid within application period.",
      "gu": "NCL પ્રમાણપત્ર અરજી સમયગાળામાં માન્ય હોવું અનિવાર્ય છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with GPSC application."
    }
  },
  {
    "id": "police-recruitment",
    "slug": "police-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "Gujarat Police / Constable / PSI Recruitment",
      "gu": "ગુજરાત પોલીસ કોન્સ્ટેબલ / PSI ભરતી"
    },
    "icon": "Briefcase",
    "image": "/images/services/police-recruitment.webp",
    "shortDescription": {
      "en": "Armed/Unarmed Constable, Jail Sepoy, and PSI applications.",
      "gu": "બિન-હથિયારી/હથિયારી કોન્સ્ટેબલ, જેલ સિપાહી અને PSI ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "OJAS application filling for Gujarat Police Bharti Board with physical criteria validation.",
      "gu": "પોલીસ ભરતી બોર્ડ માટે શારીરિક માપદંડો ચકાસીને ચોક્કસ અરજી."
    },
    "newApplication": {
      "en": "Police Constable and Sub-Inspector recruitment.",
      "gu": "પોલીસ કોન્સ્ટેબલ અને PSI ભરતી અરજી."
    },
    "correction": {
      "en": "Application update before confirmation.",
      "gu": "કન્ફર્મ કરતા પહેલાં વિગતો ચકાસણી."
    },
    "documents": [
      {
        "en": "12th Pass Marksheet (for Constable) / Degree (for PSI)",
        "gu": "12મું પાસ માર્કશીટ (કોન્સ્ટેબલ) / ડિગ્રી (PSI)"
      },
      {
        "en": "School Leaving Certificate",
        "gu": "શાળા છોડ્યાનું પ્રમાણપત્ર"
      },
      {
        "en": "Caste & NCL Certificate",
        "gu": "જાતિ અને NCL દાખલો"
      },
      {
        "en": "Physical Fitness & Sports Certificate (if any)",
        "gu": "રમતગમત પ્રમાણપત્ર (જો હોય તો)"
      },
      {
        "en": "Photo & Signature",
        "gu": "ફોટો અને સહી"
      }
    ],
    "eligibility": {
      "en": "12th pass (Constable), Graduate (PSI) with height/chest physical standards.",
      "gu": "12મું પાસ / ગ્રેજ્યુએટ અને શારીરિક ક્ષમતા ધરાવતા ઉમેદવારો."
    },
    "process": [
      {
        "en": "OJAS form submission, physical call letter printing assistance",
        "gu": "OJAS ફોર્મ સબમિશન અને ફિઝિકલ કોલ લેટર સહાય"
      }
    ],
    "notes": {
      "en": "Check physical height criteria before applying.",
      "gu": "અરજી કરતા પહેલાં ઊંચાઈ અને છાતીના માપદંડ ચકાસવા."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to apply for Police Bharti."
    }
  },
  {
    "id": "army-recruitment",
    "slug": "army-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "Indian Army Agniveer Recruitment",
      "gu": "ઇન્ડિયન આર્મી અગ્નિવીર ભરતી"
    },
    "icon": "Briefcase",
    "image": "/images/services/army-recruitment.webp",
    "shortDescription": {
      "en": "Join Indian Army Agniveer GD, Technical, Clerk & Tradesman.",
      "gu": "આર્મી અગ્નિવીર GD, ટેકનિકલ, ક્લાર્ક અને ટ્રેડ્સમેન ભરતી."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Join Indian Army portal profile management, rally registration, CEE entrance exam application.",
      "gu": "જોઇન ઇન્ડિયન આર્મી પોર્ટલ પર પ્રોફાઈલ, રેલી રજીસ્ટ્રેશન અને CEE પરીક્ષા ફોર્મ."
    },
    "newApplication": {
      "en": "Fresh Agniveer rally registration.",
      "gu": "નવી અગ્નિવીર રેલી નોંધણી."
    },
    "correction": {
      "en": "Army profile detail correction.",
      "gu": "પ્રોફાઈલ વિગતોમાં સુધારો."
    },
    "documents": [
      {
        "en": "10th / 12th Marksheet with minimum required percentage",
        "gu": "10મું / 12મું માર્કશીટ (નિયમ મુજબના ટકા)"
      },
      {
        "en": "Aadhaar Card (Linked with Digilocker)",
        "gu": "ડિજીલોકર સાથે લિંક આધાર કાર્ડ"
      },
      {
        "en": "Domicile / Native Place Certificate",
        "gu": "રહેઠાણ / ડોમિસાઇલ દાખલો"
      },
      {
        "en": "Character Certificate & Unmarried Certificate",
        "gu": "ચારિત્ર્ય અને અપરિણીત હોવાનું પ્રમાણપત્ર"
      }
    ],
    "eligibility": {
      "en": "Unmarried male/female candidates aged 17.5 to 21 years.",
      "gu": "17.5 થી 21 વર્ષના અપરિણીત યુવાનો."
    },
    "process": [
      {
        "en": "Join Indian Army portal verification, biometric Aadhaar authentication, admit card download",
        "gu": "આર્મી પોર્ટલ વેરિફિકેશન, એડમિટ કાર્ડ ડાઉનલોડ"
      }
    ],
    "notes": {
      "en": "Aadhaar and Matriculation marksheet details must match 100%.",
      "gu": "આધાર અને 10માની માર્કશીટમાં નામ અને જન્મતારીખ સમાન હોવા અનિવાર્ય છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to apply for Army Agniveer."
    }
  },
  {
    "id": "talati-recruitment",
    "slug": "talati-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "Talati Mantri & Junior Clerk Recruitment",
      "gu": "તલાટી મંત્રી અને જુનિયર ક્લાર્ક ભરતી"
    },
    "icon": "Briefcase",
    "image": "/images/services/talati-recruitment.webp",
    "shortDescription": {
      "en": "Panchayat Seva Pasandgi Mandal (GPSSB) Talati applications.",
      "gu": "પંચાયત સેવા પસંદગી મંડળ તલાટી અને ક્લાર્ક ભરતી ફોર્મ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Revenue and village administration clerical examination applications on OJAS portal.",
      "gu": "મહેસૂલ અને પંચાયત તલાટી મંત્રી પરીક્ષા માટે ઓનલાઇન અરજી."
    },
    "newApplication": {
      "en": "Fresh Panchayat service applications.",
      "gu": "પંચાયત સેવા ભરતી માટે નવી અરજી."
    },
    "correction": {
      "en": "Form edits before final confirmation.",
      "gu": "કન્ફર્મ કરતા પહેલાં એડિટિંગ."
    },
    "documents": [
      {
        "en": "12th Pass Marksheet / Equivalent",
        "gu": "12મું પાસ માર્કશીટ"
      },
      {
        "en": "School Leaving Certificate",
        "gu": "શાળા છોડ્યાનું પ્રમાણપત્ર"
      },
      {
        "en": "Caste & Income / NCL Certificate",
        "gu": "જાતિ અને NCL દાખલો"
      },
      {
        "en": "Basic Computer CCC Knowledge Certificate",
        "gu": "CCC કમ્પ્યુટર સર્ટિફિકેટ"
      }
    ],
    "eligibility": {
      "en": "12th pass candidates aged 18-36 years.",
      "gu": "12મું પાસ (18-36 વર્ષ)."
    },
    "process": [
      {
        "en": "OJAS registration, fee challan, and call letter printing",
        "gu": "OJAS રજીસ્ટ્રેશન, ચલણ અને કોલ લેટર પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "CCC computer knowledge is mandatory for state government clerical posts.",
      "gu": "સરકારી ક્લાર્ક અને તલાટી માટે CCC પ્રમાણપત્ર જરૂરી છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to apply for Talati Bharti."
    }
  },
  {
    "id": "clerk-recruitment",
    "slug": "clerk-recruitment",
    "categoryId": "job-services",
    "category": {
      "en": "Job Services",
      "gu": "નોકરી સેવાઓ"
    },
    "title": {
      "en": "GSSSB CCE Clerk / Head Clerk Recruitment",
      "gu": "ગૌણ સેવા પસંદગી મંડળ (CCE) ક્લાર્ક ભરતી"
    },
    "icon": "Briefcase",
    "image": "/images/services/clerk-recruitment.webp",
    "shortDescription": {
      "en": "Gujarat Gaun Seva Combined Competitive Exam (CCE) Group A & B.",
      "gu": "ગૌણ સેવા સંયુક્ત સ્પર્ધાત્મક પરીક્ષા (CCE) ગ્રૂપ A & B."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Combined clerical recruitment for Secretariat, Collectorate, and Head of Departments across Gujarat.",
      "gu": "સચિવાલય અને વિવિધ સરકારી ખાતાઓમાં ક્લાર્ક માટે સંયુક્ત ભરતી."
    },
    "newApplication": {
      "en": "CCE Group A & B online application.",
      "gu": "CCE ગ્રૂપ A & B ઓનલાઇન અરજી."
    },
    "correction": {
      "en": "Application correction window.",
      "gu": "સુધારા સમયગાળો."
    },
    "documents": [
      {
        "en": "Graduation Degree / Final Year Result",
        "gu": "ગ્રેજ્યુએશન ડિગ્રી"
      },
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Caste / EWS / NCL Certificate",
        "gu": "જાતિ / EWS / NCL પ્રમાણપત્ર"
      },
      {
        "en": "Photo & Signature",
        "gu": "ફોટો અને સહી"
      }
    ],
    "eligibility": {
      "en": "Graduates aged 20-35 years.",
      "gu": "ગ્રેજ્યુએટ ઉમેદવારો (20-35 વર્ષ)."
    },
    "process": [
      {
        "en": "OJAS online application, post group preference, fee payment",
        "gu": "OJAS અરજી, પોસ્ટ પ્રેફરન્સ અને ફી કન્ફર્મેશન"
      }
    ],
    "notes": {
      "en": "Select both Group A and Group B preferences during application.",
      "gu": "અરજી કરતી વખતે બંને ગ્રૂપ A અને B ની પસંદગી કરો."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I need help with CCE Clerk application."
    }
  },
  {
    "id": "xerox",
    "slug": "xerox",
    "categoryId": "printing-services",
    "category": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "title": {
      "en": "Photocopy / Xerox Services",
      "gu": "ઝેરોક્ષ સેવાઓ"
    },
    "icon": "Printer",
    "image": "/images/services/xerox.webp",
    "shortDescription": {
      "en": "High-speed B&W and color photocopying for all document sizes.",
      "gu": "હાઈ-સ્પીડ બ્લેક એન્ડ વ્હાઈટ તથા કલર ઝેરોક્ષ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Crystal clear photocopying on 75+ GSM bond paper for school books, office files, legal papers, and IDs.",
      "gu": "શાળાના પુસ્તકો, કાનૂની દસ્તાવેજો અને ઓફિસ ફાઇલો માટે સ્પષ્ટ ઝેરોક્ષ."
    },
    "newApplication": {
      "en": "Instant bulk and single copy xerox at shop counter.",
      "gu": "કાઉન્ટર પર તાત્કાલિક ઝેરોક્ષ સેવા."
    },
    "correction": {
      "en": "Enlargement, reduction, and double-sided copies.",
      "gu": "નાની-મોટી સાઈઝ અને બંને બાજુની નકલો."
    },
    "documents": [
      {
        "en": "Original Document / Book / Identity Card",
        "gu": "અસલ દસ્તાવેજ / પુસ્તક / ઓળખ પત્ર"
      }
    ],
    "eligibility": {
      "en": "Open to all citizens.",
      "gu": "તમામ નાગરિકો માટે ઉપલબ્ધ."
    },
    "process": [
      {
        "en": "Hand over documents at counter for instant copies",
        "gu": "કાઉન્ટર પર દસ્તાવેજ આપી તાત્કાલિક ઝેરોક્ષ મેળવો"
      }
    ],
    "notes": {
      "en": "Discounts available for student projects and bulk orders.",
      "gu": "વિદ્યાર્થીઓ અને જથ્થાબંધ ઓર્ડર માટે વિશેષ રાહત."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I need bulk xerox services."
    }
  },
  {
    "id": "printout",
    "slug": "printout",
    "categoryId": "printing-services",
    "category": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "title": {
      "en": "Document & Color Printout",
      "gu": "ડોક્યુમેન્ટ અને કલર પ્રિન્ટઆઉટ"
    },
    "icon": "Printer",
    "image": "/images/services/printout.webp",
    "shortDescription": {
      "en": "Laser B&W and vibrant color prints from WhatsApp, Email, or Pen Drive.",
      "gu": "વોટ્સએપ, ઇમેઇલ કે પેન ડ્રાઇવમાંથી લેસર પ્રિન્ટઆઉટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "High resolution digital printing on A4, Legal, and A3 paper. Direct send via WhatsApp or email for zero waiting.",
      "gu": "A4, લીગલ અને A3 પેપર પર હાઇ રિઝોલ્યુશન ડિજિટલ પ્રિન્ટિંગ."
    },
    "newApplication": {
      "en": "Send PDF or image directly to our WhatsApp number for printing.",
      "gu": "અમારા વોટ્સએપ પર ફાઇલ મોકલી તરત પ્રિન્ટ મેળવો."
    },
    "correction": {
      "en": "Margins, orientation, and layout adjustments.",
      "gu": "માર્જિન અને લેઆઉટ એડજસ્ટમેન્ટ."
    },
    "documents": [
      {
        "en": "PDF, DOCX, JPG, PNG files",
        "gu": "PDF, વર્ડ અથવા ફોટો ફાઇલ"
      }
    ],
    "eligibility": {
      "en": "All customers.",
      "gu": "તમામ ગ્રાહકો માટે."
    },
    "process": [
      {
        "en": "Send file on WhatsApp -> Instant High-Quality Print",
        "gu": "વોટ્સએપ પર ફાઇલ મોકલો -> તાત્કાલિક પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "Confidential document handling guaranteed.",
      "gu": "તમારા દસ્તાવેજોની ગોપનીયતા જાળવવામાં આવે છે."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I am sending a document for printout."
    }
  },
  {
    "id": "lamination",
    "slug": "lamination",
    "categoryId": "printing-services",
    "category": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "title": {
      "en": "Document & Certificate Lamination",
      "gu": "લેમિનેશન સેવા"
    },
    "icon": "Printer",
    "image": "/images/services/lamination.webp",
    "shortDescription": {
      "en": "Military-grade 250+ micron lamination to protect certificates from moisture.",
      "gu": "દસ્તાવેજોને ભેજ અને ધૂળથી બચાવવા માટે મજબૂત લેમિનેશન."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Protect marksheets, degree certificates, property deeds, and ID cards with hot pouch lamination that lasts for decades.",
      "gu": "માર્કશીટ, ડિગ્રી, જમીનના કાગળો અને ઓળખ પત્રો માટે ટકાઉ લેમિનેશન."
    },
    "newApplication": {
      "en": "Instant lamination for ID card, A4, and legal size documents.",
      "gu": "ઓળખ પત્ર, A4 અને લીગલ સાઇઝ માટે તાત્કાલિક લેમિનેશન."
    },
    "correction": {
      "en": "Non-applicable.",
      "gu": "N/A"
    },
    "documents": [
      {
        "en": "Original Certificate or ID Card to be laminated",
        "gu": "લેમિનેટ કરવાનો અસલ દસ્તાવેજ"
      }
    ],
    "eligibility": {
      "en": "Open to all.",
      "gu": "બધા માટે ઉપલબ્ધ."
    },
    "process": [
      {
        "en": "Heat pouch alignment and bubble-free roller sealing",
        "gu": "બબલ વગર હીટ પાઉચ રોલર સીલિંગ"
      }
    ],
    "notes": {
      "en": "Keep important documents flat and dry before lamination.",
      "gu": "લેમિનેશન પહેલાં દસ્તાવેજ સુકો હોવો જરૂરી છે."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I need document lamination."
    }
  },
  {
    "id": "scanning",
    "slug": "scanning",
    "categoryId": "printing-services",
    "category": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "title": {
      "en": "High-Res Scanning & Digital Archive",
      "gu": "ડોક્યુમેન્ટ સ્કેનિંગ"
    },
    "icon": "Printer",
    "image": "/images/services/scanning.webp",
    "shortDescription": {
      "en": "Optical 600+ DPI scanning to PDF, JPEG with cloud/WhatsApp delivery.",
      "gu": "ઓપ્ટિકલ 600+ DPI સ્કેનિંગ અને વોટ્સએપ/ઇમેઇલ ડિલિવરી."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Convert physical land records, old books, certificates, and photos into sharp digital searchable PDF files.",
      "gu": "જૂના કાગળો, જમીનના રેકોર્ડ અને ફોટોગ્રાફ્સનું સ્પષ્ટ ડિજિટલ સ્કેનિંગ."
    },
    "newApplication": {
      "en": "Multi-page PDF scanning with file compression for online applications.",
      "gu": "ઓનલાઈન ફોર્મ માટે યોગ્ય સાઈઝનું મલ્ટી-પેજ PDF સ્કેનિંગ."
    },
    "correction": {
      "en": "Image deskew, contrast boost, and color enhancement.",
      "gu": "કલર બુસ્ટ અને કોન્ટ્રાસ્ટ એડજસ્ટમેન્ટ."
    },
    "documents": [
      {
        "en": "Physical Documents, Marksheets, Deeds, or Photos",
        "gu": "સ્કેન કરવાના અસલ કાગળો"
      }
    ],
    "eligibility": {
      "en": "Open to all.",
      "gu": "તમામ માટે ઉપલબ્ધ."
    },
    "process": [
      {
        "en": "High speed flatbed/sheetfed scanning and instant WhatsApp/Email transfer",
        "gu": "હાઇ-સ્પીડ સ્કેનિંગ અને તાત્કાલિક ફાઇલ ટ્રાન્સફર"
      }
    ],
    "notes": {
      "en": "Compressed under 200KB for government recruitment portal compatibility.",
      "gu": "સરકારી પોર્ટલ મુજબ 200KB થી નાની સાઈઝમાં ઉપલબ્ધ કરાવી આપીએ છીએ."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I need scanning services."
    }
  },
  {
    "id": "spiral-binding",
    "slug": "spiral-binding",
    "categoryId": "printing-services",
    "category": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "title": {
      "en": "Spiral & Book Binding",
      "gu": "સ્પાયરલ બાઇન્ડિંગ"
    },
    "icon": "Printer",
    "image": "/images/services/spiral-binding.webp",
    "shortDescription": {
      "en": "Professional coil and spiral binding with transparent protective covers.",
      "gu": "પ્રોજેક્ટ બુક, નોટ્સ અને મટીરીયલ માટે સ્પાયરલ બાઇન્ડિંગ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Neat, sturdy spiral binding for college project reports, competitive exam study materials, and office registers.",
      "gu": "કોલેજ પ્રોજેક્ટ રિપોર્ટ અને સ્પર્ધાત્મક પરીક્ષા મટીરીયલ માટે મજબૂત બાઇન્ડિંગ."
    },
    "newApplication": {
      "en": "Instant binding up to 400+ pages with front transparent sheet and back card.",
      "gu": "400+ પાના સુધી તાત્કાલિક સ્પાયરલ બાઇન્ડિંગ."
    },
    "correction": {
      "en": "Add or remove pages from existing spiral bindings.",
      "gu": "પાના ઉમેરવા કે બદલવાની સુવિધા."
    },
    "documents": [
      {
        "en": "Printed Pages or Digital File to be printed & bound",
        "gu": "બાઇન્ડ કરવાના પાના અથવા પ્રિન્ટ ફાઇલ"
      }
    ],
    "eligibility": {
      "en": "Students, teachers, and offices.",
      "gu": "વિદ્યાર્થીઓ અને ઓફિસો માટે."
    },
    "process": [
      {
        "en": "Precision multi-hole punching and durable polymer coil insertion",
        "gu": "પંચિંગ અને મજબૂત કોઈલ ઇન્સર્શન"
      }
    ],
    "notes": {
      "en": "Includes premium crystal cover for long-lasting protection.",
      "gu": "સાથે પ્રીમિયમ કવર શીટ આપવામાં આવે છે."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I need spiral binding."
    }
  },
  {
    "id": "pvc-card",
    "slug": "pvc-card",
    "categoryId": "printing-services",
    "category": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "title": {
      "en": "Smart PVC Plastic Card Printing",
      "gu": "સ્માર્ટ PVC પ્લાસ્ટિક કાર્ડ પ્રિન્ટિંગ"
    },
    "icon": "Printer",
    "image": "/images/services/pvc-card.webp",
    "shortDescription": {
      "en": "ATM-card quality waterproof PVC printing for Aadhaar, PAN, Voter ID & Ayushman.",
      "gu": "આધાર, પાન, આયુષ્માન અને ચૂંટણી કાર્ડનું ATM જેવું વોટરપ્રૂફ PVC કાર્ડ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Carry durable, high-gloss plastic ID cards in your wallet instead of fragile paper sheets. High definition color that never fades.",
      "gu": "પાકીટમાં રાખવા માટે અનુકૂળ, ટકાઉ અને ક્યારેય કલર ન ઉડે તેવા સ્માર્ટ પ્લાસ્ટિક કાર્ડ."
    },
    "newApplication": {
      "en": "Instant PVC print of Aadhaar, PAN, Driving Licence, or Student ID.",
      "gu": "આધાર, પાન અથવા લાયસન્સનું તાત્કાલિક સ્માર્ટ કાર્ડ પ્રિન્ટ."
    },
    "correction": {
      "en": "Re-print with updated address/details.",
      "gu": "અપડેટેડ વિગતો સાથે નવું કાર્ડ."
    },
    "documents": [
      {
        "en": "Original PDF file of ID card or Aadhaar OTP authentication",
        "gu": "કાર્ડની ઓરીજીનલ PDF ફાઈલ અથવા OTP"
      }
    ],
    "eligibility": {
      "en": "Cardholders with legitimate digital document.",
      "gu": "ઓરીજીનલ દસ્તાવેજ ધરાવતા તમામ નાગરિકો."
    },
    "process": [
      {
        "en": "Thermal dye-sublimation PVC printing in 2 minutes",
        "gu": "2 મિનિટમાં થર્મલ પ્રિન્ટિંગ ટેક્નોલોજીથી તાત્કાલિક પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "Waterproof, scratch-resistant, and high durability.",
      "gu": "100% વોટરપ્રૂફ અને ટકાઉ."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to print a PVC Smart Card."
    }
  },
  {
    "id": "passport-photo",
    "slug": "passport-photo",
    "categoryId": "printing-services",
    "category": {
      "en": "Printing Services",
      "gu": "પ્રિન્ટિંગ સેવાઓ"
    },
    "title": {
      "en": "Instant Studio Passport Photos",
      "gu": "ઇન્સ્ટન્ટ પાસપોર્ટ સાઇઝ ફોટો"
    },
    "icon": "Printer",
    "image": "/images/services/passport-photo.webp",
    "shortDescription": {
      "en": "Ready in 5 minutes! White/Blue background photos with sheet cutting.",
      "gu": "માત્ર 5 મિનિટમાં તૈયાર! સફેદ કે બ્લુ બેકગ્રાઉન્ડ વાળા પાસપોર્ટ ફોટો."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Professional studio lighting photography adhering to official norms for Passport, Visa, Govt Exams, and Driving Licence.",
      "gu": "પાસપોર્ટ, વિઝા, સરકારી ભરતી અને લાયસન્સના નિયમ મુજબના પાસપોર્ટ ફોટો."
    },
    "newApplication": {
      "en": "8, 16, or 32 copy photo sheet printed instantly on premium glossy paper.",
      "gu": "8, 16 અથવા 32 ફોટાની પ્રીમિયમ ગ્લોસી શીટ."
    },
    "correction": {
      "en": "Background color change, digital retouching, and coat/suit attire overlay.",
      "gu": "બેકગ્રાઉન્ડ કલર બદલવો અને ડિજિટલ ફિનિશિંગ."
    },
    "documents": [
      {
        "en": "Direct photo shoot at our Dharampur studio counter",
        "gu": "અમારા ધરમપુર સેન્ટર પર સીધો ફોટો શૂટ"
      }
    ],
    "eligibility": {
      "en": "All citizens.",
      "gu": "તમામ નાગરિકો."
    },
    "process": [
      {
        "en": "Photo capture -> Professional Retouching -> 5-Min Print delivery",
        "gu": "ફોટો કેપ્ચર -> રિટચિંગ -> 5 મિનિટમાં પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "Soft copy sent to your WhatsApp free of charge.",
      "gu": "સોફ્ટ કોપી તમારા વોટ્સએપ પર ફ્રી મોકલવામાં આવશે."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I need passport size photos."
    }
  },
  {
    "id": "ccc-course",
    "slug": "ccc-course",
    "categoryId": "computer-courses",
    "category": {
      "en": "Computer Courses",
      "gu": "કમ્પ્યુટર કોર્સ"
    },
    "title": {
      "en": "CCC (Course on Computer Concepts)",
      "gu": "CCC કમ્પ્યુટર કોર્સ"
    },
    "icon": "Laptop",
    "image": "/images/services/ccc-course.webp",
    "shortDescription": {
      "en": "Govt recognized certified course mandatory for Gujarat Govt Jobs.",
      "gu": "સરકારી નોકરી અને પ્રમોશન માટે અનિવાર્ય સરકાર માન્ય CCC કોર્સ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Master computer fundamentals, Windows, MS Word, Excel, PowerPoint, Gujarati typing, and internet with 100% practical lab training.",
      "gu": "કમ્પ્યુટર પાયાથી શીખો - વિન્ડોઝ, એમએસ ઓફિસ, ઇન્ટરનેટ અને ગુજરાતી ટાઈપિંગ."
    },
    "newApplication": {
      "en": "Admission open for morning, afternoon, and evening batches.",
      "gu": "સવાર, બપોર અને સાંજની બેચમાં એડમિશન શરૂ છે."
    },
    "correction": {
      "en": "Fast-track exam preparation module.",
      "gu": "પરીક્ષા તૈયારી માટે ફાસ્ટ-ટ્રેક મોડ્યુલ."
    },
    "documents": [
      {
        "en": "Aadhaar Card Copy",
        "gu": "આધાર કાર્ડ નકલ"
      },
      {
        "en": "Passport Size Photo",
        "gu": "પાસપોર્ટ સાઇઝ ફોટો"
      },
      {
        "en": "School Leaving Certificate / Marksheet",
        "gu": "LC અથવા માર્કશીટ"
      }
    ],
    "eligibility": {
      "en": "Students, job aspirants, and working professionals (No prior experience needed).",
      "gu": "વિદ્યાર્થીઓ અને સરકારી નોકરી ઇચ્છુક તમામ વ્યક્તિઓ."
    },
    "process": [
      {
        "en": "Enrolment, lab practical sessions, mock exam tests, and certification",
        "gu": "એડમિશન, લેબ પ્રેક્ટિસ, મોક ટેસ્ટ અને સર્ટિફિકેટ"
      }
    ],
    "notes": {
      "en": "Separate PC allocated to every student in air-conditioned computer lab.",
      "gu": "દરેક વિદ્યાર્થીને પ્રેક્ટિસ માટે વ્યક્તિગત કમ્પ્યુટર આપવામાં આવે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to join the CCC Course."
    }
  },
  {
    "id": "ms-office",
    "slug": "ms-office",
    "categoryId": "computer-courses",
    "category": {
      "en": "Computer Courses",
      "gu": "કમ્પ્યુટર કોર્સ"
    },
    "title": {
      "en": "MS Office Advanced Mastery",
      "gu": "એમ.એસ. ઓફિસ એડવાન્સ કોર્સ"
    },
    "icon": "Laptop",
    "image": "/images/services/ms-office.webp",
    "shortDescription": {
      "en": "Professional Word, Advanced Excel (VLOOKUP, Pivot) & PowerPoint.",
      "gu": "ઓફિસ કામ માટે વર્ડ, એડવાન્સ એક્સેલ (VLOOKUP, Pivot) અને પાવરપોઇન્ટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Become proficient in corporate office workflows: formulas, data analysis, automated reports, professional letters, and presentations.",
      "gu": "કંપનીઓ અને બેંકોમાં નોકરી મેળવવા માટે જરૂરી ડેટા એનાલિસિસ અને એક્સેલ ફોર્મ્યુલા."
    },
    "newApplication": {
      "en": "Enroll in 1 to 2 month comprehensive practical course.",
      "gu": "1 થી 2 મહિનાના પ્રેક્ટિકલ કોર્સમાં પ્રવેશ મેળવો."
    },
    "correction": {
      "en": "Customized modules for corporate employees.",
      "gu": "ઓફિસ કર્મચારીઓ માટે ખાસ મોડ્યુલ."
    },
    "documents": [
      {
        "en": "Identity Proof",
        "gu": "ઓળખ પત્ર"
      },
      {
        "en": "Passport Photo",
        "gu": "પાસપોર્ટ ફોટો"
      }
    ],
    "eligibility": {
      "en": "Students (10th, 12th, College) & Job Seekers.",
      "gu": "વિદ્યાર્થીઓ અને નોકરી ઇચ્છુકો."
    },
    "process": [
      {
        "en": "Daily hands-on practical assignments and real business templates",
        "gu": "રોજિંદા પ્રેક્ટિકલ પ્રોજેક્ટ્સ અને અસાઇનમેન્ટ્સ"
      }
    ],
    "notes": {
      "en": "Course completion certificate issued upon final project evaluation.",
      "gu": "પ્રોજેક્ટ મૂલ્યાંકન બાદ માન્ય સર્ટિફિકેટ આપવામાં આવે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to join MS Office training."
    }
  },
  {
    "id": "tally-gst",
    "slug": "tally-gst",
    "categoryId": "computer-courses",
    "category": {
      "en": "Computer Courses",
      "gu": "કમ્પ્યુટર કોર્સ"
    },
    "title": {
      "en": "Tally Prime with GST & E-Way Bill",
      "gu": "ટેલી પ્રાઇમ વિથ GST એકાઉન્ટિંગ"
    },
    "icon": "Laptop",
    "image": "/images/services/tally-gst.webp",
    "shortDescription": {
      "en": "Complete computerized accounting, inventory, GST billing, and payroll.",
      "gu": "કમ્પ્યુટરાઈઝ્ડ એકાઉન્ટિંગ, ઇન્વેન્ટરી, GST બિલિંગ અને ટેક્સેશન."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Learn real accounting on the latest Tally Prime software: vouchers, ledger entries, bank reconciliation, balance sheet, and GST return filing.",
      "gu": "વેપારી પેઢીઓ અને કંપનીઓ માટે લેજર, વાઉચર, બેંક રિકન્સિલેશન અને બેલેન્સ શીટ."
    },
    "newApplication": {
      "en": "Admission open for commerce and non-commerce students.",
      "gu": "કોમર્સ અને અન્ય તમામ વિદ્યાશાખાના વિદ્યાર્થીઓ માટે પ્રવેશ શરૂ."
    },
    "correction": {
      "en": "Advanced GST and TDS taxation booster modules.",
      "gu": "GST અને TDS સ્પેશિયલ મોડ્યુલ."
    },
    "documents": [
      {
        "en": "Aadhaar Card",
        "gu": "આધાર કાર્ડ"
      },
      {
        "en": "Educational Qualification Proof",
        "gu": "શૈક્ષણિક લાયકાત પુરાવો"
      },
      {
        "en": "Passport Photo",
        "gu": "પાસપોર્ટ ફોટો"
      }
    ],
    "eligibility": {
      "en": "10th, 12th, BCom, BBA, and business owners.",
      "gu": "10મું, 12મું, BCom અને વેપારીઓ."
    },
    "process": [
      {
        "en": "Live company case studies, bill creation, and balance sheet preparation",
        "gu": "લાઈવ બિલિંગ અને વાસ્તવિક હિસાબો સાથે પ્રેક્ટિસ"
      }
    ],
    "notes": {
      "en": "High demand career path with local Dharampur job placement support.",
      "gu": "સ્થાનિક નોકરી સહાય સાથે રોજગારલક્ષી કોર્સ."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to learn Tally Prime with GST."
    }
  },
  {
    "id": "typing-course",
    "slug": "typing-course",
    "categoryId": "computer-courses",
    "category": {
      "en": "Computer Courses",
      "gu": "કમ્પ્યુટર કોર્સ"
    },
    "title": {
      "en": "English & Gujarati Typing Speed Course",
      "gu": "અંગ્રેજી અને ગુજરાતી ટાઈપિંગ કોર્સ"
    },
    "icon": "Laptop",
    "image": "/images/services/typing-course.webp",
    "shortDescription": {
      "en": "Touch typing training (Shruti / Indic font & English) with WPM speed tests.",
      "gu": "સરકારી પરીક્ષા માટે શ્રુતિ/ઇન્ડિક ફોન્ટમાં ગુજરાતી અને અંગ્રેજી ટાઈપિંગ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Boost typing speed up to 30-50+ WPM without looking at keyboard. Crucial for High Court, GSSSB, and clerical typing skill tests.",
      "gu": "હાઈકોર્ટ અને ગૌણ સેવા કમ્પ્યુટર પ્રોફિશિયન્સી ટેસ્ટ માટે ઝડપી ટાઈપિંગ તાલીમ."
    },
    "newApplication": {
      "en": "Flexible daily 1-hour practice slots.",
      "gu": "રોજિંદા અનુકૂળ સમય સ્લોટ્સ."
    },
    "correction": {
      "en": "Speed booster and error reduction techniques.",
      "gu": "ભૂલો ઘટાડવા અને સ્પીડ વધારવાની ટેકનિક."
    },
    "documents": [
      {
        "en": "Identity Card",
        "gu": "ઓળખ પત્ર"
      }
    ],
    "eligibility": {
      "en": "Anyone aiming to improve typing speed for jobs.",
      "gu": "કોઈપણ વ્યક્તિ જોડાઈ શકે છે."
    },
    "process": [
      {
        "en": "Touch typing drills, daily paragraph tests, and WPM analytics",
        "gu": "રોજિંદા પેરેગ્રાફ ટેસ્ટ અને સ્પીડ એનાલિટિક્સ"
      }
    ],
    "notes": {
      "en": "Covers Gujarati Shruti layout and English touch typing.",
      "gu": "ગુજરાતી શ્રુતિ કીબોર્ડ અને અંગ્રેજી બંને શીખવવામાં આવે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to join Typing Classes."
    }
  },
  {
    "id": "internet-training",
    "slug": "internet-training",
    "categoryId": "computer-courses",
    "category": {
      "en": "Computer Courses",
      "gu": "કમ્પ્યુટર કોર્સ"
    },
    "title": {
      "en": "Internet & Digital Literacy Workshop",
      "gu": "ઇન્ટરનેટ અને ડિજિટલ લિટરેસી ટ્રેનિંગ"
    },
    "icon": "Laptop",
    "image": "/images/services/internet-training.webp",
    "shortDescription": {
      "en": "Safe browsing, net banking, UPI, email etiquette, and cyber awareness.",
      "gu": "સુરક્ષિત નેટ બેંકિંગ, UPI, ઇમેઇલ અને સાયબર ફ્રોડથી બચવાની તાલીમ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Designed for homemakers, seniors, and beginners to confidently use smartphones, laptops, online government portals, and cashless payments.",
      "gu": "ગૃહિણીઓ, વડીલો અને શિખાઉ વ્યક્તિઓ માટે ડિજિટલ દુનિયા સરળતાથી સમજવાનો કોર્સ."
    },
    "newApplication": {
      "en": "Weekend and evening short-term courses.",
      "gu": "ટૂંકા ગાળાની સરળ તાલીમ બેચ."
    },
    "correction": {
      "en": "Cyber fraud protection counselling.",
      "gu": "સાયબર સુરક્ષા માર્ગદર્શન."
    },
    "documents": [
      {
        "en": "Basic Contact Details",
        "gu": "સંપર્ક વિગતો"
      }
    ],
    "eligibility": {
      "en": "All age groups welcome.",
      "gu": "તમામ વયજૂથના લોકો માટે."
    },
    "process": [
      {
        "en": "Simple practical steps on smartphone and PC",
        "gu": "મોબાઈલ અને કમ્પ્યુટર પર સરળ પ્રેક્ટિકલ"
      }
    ],
    "notes": {
      "en": "Learn how to detect scams and protect your OTP and bank data.",
      "gu": "ઓનલાઈન છેતરપિંડીથી બચવાના નિયમો શીખો."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to learn Internet & Digital Skills."
    }
  },
  {
    "id": "money-transfer",
    "slug": "money-transfer",
    "categoryId": "other-services",
    "category": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "title": {
      "en": "Domestic Money Transfer (DMT)",
      "gu": "મની ટ્રાન્સફર સેવા (DMT)"
    },
    "icon": "Globe",
    "image": "/images/services/money-transfer.webp",
    "shortDescription": {
      "en": "Instant IMPS/NEFT bank remittance to any bank account across India 24x7.",
      "gu": "ભારતના કોઈપણ બેંક ખાતામાં તાત્કાલિક પૈસા જમા કરાવવાની સુવિધા."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Send cash money instantly to family members, workers, and colleges with official transaction receipt and SMS alert.",
      "gu": "પરિવારજનો કે વિદ્યાર્થીઓને તાત્કાલિક બેંક એકાઉન્ટમાં પૈસા ટ્રાન્સફર કરો."
    },
    "newApplication": {
      "en": "Instant transfer via customer mobile and receiver bank account.",
      "gu": "કાઉન્ટર પર રોકડ આપી તાત્કાલિક બેંક ખાતામાં જમા."
    },
    "correction": {
      "en": "Transaction tracking and UTR verification.",
      "gu": "UTR નંબર અને ટ્રાન્ઝેક્શન ટ્રેકિંગ."
    },
    "documents": [
      {
        "en": "Sender Mobile Number & KYC",
        "gu": "મોકલનારનો મોબાઈલ નંબર અને ઓળખ"
      },
      {
        "en": "Receiver Bank Account Number & IFSC Code",
        "gu": "મેળવનારનો એકાઉન્ટ નંબર અને IFSC"
      },
      {
        "en": "Beneficiary Name",
        "gu": "ખાતાધારકનું નામ"
      }
    ],
    "eligibility": {
      "en": "Open to all citizens.",
      "gu": "બધા માટે ઉપલબ્ધ."
    },
    "process": [
      {
        "en": "Provide cash -> Instant transfer via secure banking channel -> Receive SMS & Printed Slip",
        "gu": "રોકડ આપો -> ખાતામાં તુરંત જમા -> પ્રિન્ટેડ રસીદ મેળવો"
      }
    ],
    "notes": {
      "en": "Authorized RBI banking correspondent channel.",
      "gu": "RBI માન્ય સુરક્ષિત બેંકિંગ પ્રણાલી."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I need to send money."
    }
  },
  {
    "id": "mobile-recharge",
    "slug": "mobile-recharge",
    "categoryId": "other-services",
    "category": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "title": {
      "en": "All Operator Mobile & DTH Recharge",
      "gu": "મોબાઇલ અને DTH રિચાર્જ"
    },
    "icon": "Globe",
    "image": "/images/services/mobile-recharge.webp",
    "shortDescription": {
      "en": "Jio, Airtel, Vi, BSNL prepaid/postpaid and Tata Play, Airtel DTH, Dish TV.",
      "gu": "Jio, Airtel, Vi, BSNL અને તમામ DTH કનેક્શનના બેસ્ટ પ્લાન રિચાર્જ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Instant recharge with special plan consultations (annual data packs, OTT bundles, validity extenders).",
      "gu": "ઓછા ખર્ચે વધુ વેલિડિટી અને ડેટા પ્લાનની માહિતી સાથે રિચાર્જ."
    },
    "newApplication": {
      "en": "Prepaid recharge and postpaid bill settlement.",
      "gu": "પ્રીપેડ રિચાર્જ અને પોસ્ટપેડ બિલ ચુકવણી."
    },
    "correction": {
      "en": "Wrong recharge reversal grievance support.",
      "gu": "પ્લાન વિગતો ચકાસણી."
    },
    "documents": [
      {
        "en": "Mobile Number or DTH Customer ID",
        "gu": "મોબાઈલ નંબર અથવા DTH ID"
      }
    ],
    "eligibility": {
      "en": "All networks.",
      "gu": "તમામ નેટવર્ક."
    },
    "process": [
      {
        "en": "Provide number -> Select best offer -> Instant Activation",
        "gu": "નંબર આપો -> પ્લાન પસંદ કરો -> તરત એક્ટિવેશન"
      }
    ],
    "notes": {
      "en": "Best plan recommendation guaranteed to save your money.",
      "gu": "તમારા ઉપયોગ મુજબના શ્રેષ્ઠ પ્લાનની ભલામણ."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I want to recharge my number/DTH."
    }
  },
  {
    "id": "bill-payment",
    "slug": "bill-payment",
    "categoryId": "other-services",
    "category": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "title": {
      "en": "Electricity, Gas & Water Bill Payment",
      "gu": "લાઈટ બિલ અને ગેસ બિલ પેમેન્ટ"
    },
    "icon": "Globe",
    "image": "/images/services/bill-payment.webp",
    "shortDescription": {
      "en": "DGVCL electricity, Gujarat Gas, water tax, and broadband bill payments.",
      "gu": "DGVCL લાઈટ બિલ, ગુજરાત ગેસ, વેરા બિલ અને બ્રોડબેન્ડ બિલ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Pay all utility bills before due date without standing in long queues. Official BBPS payment receipt provided instantly.",
      "gu": "લાંબી લાઈનોમાં ઊભા રહ્યા વગર તમામ સરકારી અને ખાનગી બિલોની તાત્કાલિક ચુકવણી."
    },
    "newApplication": {
      "en": "Cash / UPI bill payment at our center.",
      "gu": "સેન્ટર પર રોકડ અથવા ઓનલાઇન બિલ ચુકવણી."
    },
    "correction": {
      "en": "Meter number and bill history checking.",
      "gu": "ગ્રાહક નંબર અને બિલ હિસ્ટ્રી ચકાસણી."
    },
    "documents": [
      {
        "en": "Consumer Number / Customer ID / Bill Copy",
        "gu": "ગ્રાહક નંબર અથવા જૂનું બિલ"
      }
    ],
    "eligibility": {
      "en": "DGVCL and other utility consumers.",
      "gu": "તમામ ગ્રાહકો માટે."
    },
    "process": [
      {
        "en": "Instant payment verification on BBPS Bharat BillPay network with official receipt",
        "gu": "BBPS નેટવર્ક દ્વારા તાત્કાલિક ચુકવણી અને રસીદ"
      }
    ],
    "notes": {
      "en": "Avoid late fees and power cut by paying before last date.",
      "gu": "છેલ્લી તારીખ પહેલાં બિલ ભરી પેનલ્ટીથી બચો."
    },
    "actions": {
      "applyNow": false,
      "whatsapp": "Hello HY-TECH, I need to pay my electricity/gas bill."
    }
  },
  {
    "id": "train-ticket",
    "slug": "train-ticket",
    "categoryId": "other-services",
    "category": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "title": {
      "en": "IRCTC Train Ticket Booking",
      "gu": "ટ્રેન ટિકિટ બુકિંગ (IRCTC)"
    },
    "icon": "Globe",
    "image": "/images/services/train-ticket.webp",
    "shortDescription": {
      "en": "Confirmed train reservations, Tatkal tickets, Sleeper, 3AC & 2AC seats.",
      "gu": "કન્ફર્મ ટ્રેન રિઝર્વેશન, તત્કાલ ટિકિટ, સ્લીપર અને એસી સીટો."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Book tickets for destinations all over India. PNR status tracking, berth preference, and senior citizen concession processing.",
      "gu": "સમગ્ર ભારતની મુસાફરી માટે કન્ફર્મ ટિકિટ અને PNR સ્ટેટસ ટ્રેકિંગ સહાય."
    },
    "newApplication": {
      "en": "Advance booking and Tatkal booking slots.",
      "gu": "એડવાન્સ બુકિંગ અને તત્કાલ બુકિંગ."
    },
    "correction": {
      "en": "Ticket cancellation and refund processing.",
      "gu": "ટિકિટ કેન્સલેશન અને રિફંડ સહાય."
    },
    "documents": [
      {
        "en": "Passenger Names, Ages & Genders",
        "gu": "મુસાફરોના નામ, ઉંમર અને લિંગ"
      },
      {
        "en": "Valid ID Card of Lead Passenger",
        "gu": "મુખ્ય મુસાફરનું આધાર કાર્ડ"
      },
      {
        "en": "Travel Date, Source & Destination Stations",
        "gu": "મુસાફરીની તારીખ અને સ્ટેશન"
      }
    ],
    "eligibility": {
      "en": "All passengers.",
      "gu": "તમામ મુસાફરો."
    },
    "process": [
      {
        "en": "Station route check -> Berth selection -> Instant e-Ticket PDF with QR code",
        "gu": "રૂટ ચેક -> સીટ પસંદગી -> QR કોડ સાથે ઇ-ટિકિટ પ્રિન્ટ"
      }
    ],
    "notes": {
      "en": "Carry original ID proof during train journey.",
      "gu": "ટ્રેન મુસાફરી દરમિયાન ઓરીજીનલ ઓળખ પત્ર સાથે રાખવું ફરજિયાત છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to book a train ticket."
    }
  },
  {
    "id": "bus-ticket",
    "slug": "bus-ticket",
    "categoryId": "other-services",
    "category": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "title": {
      "en": "GSRTC & Private Luxury Bus Booking",
      "gu": "બસ ટિકિટ બુકિંગ (GSRTC / પ્રાઇવેટ)"
    },
    "icon": "Globe",
    "image": "/images/services/bus-ticket.webp",
    "shortDescription": {
      "en": "GSRTC Volvo, Gurjarnagri, Sleeper & Private AC bus bookings.",
      "gu": "GSRTC વોલ્વો, ગુર્જરનગરી, સ્લીપર અને ખાનગી લક્ઝરી બસ ટિકિટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Book convenient pickup points from Dharampur, Valsad, and Vapi to Ahmedabad, Surat, Rajkot, Vadodara, and Mumbai.",
      "gu": "ધરમપુર, વલસાડ અને વાપીથી સમગ્ર ગુજરાત અને મુંબઈ માટે કન્ફર્મ બસ સીટ બુકિંગ."
    },
    "newApplication": {
      "en": "Seat selection, sleeper berth choice, and instant SMS ticket.",
      "gu": "સીટ પસંદગી, સ્લીપર બર્થ અને તાત્કાલિક SMS ટિકિટ."
    },
    "correction": {
      "en": "Boarding point change or cancellation.",
      "gu": "પિકઅપ પોઇન્ટ બદલવો કે રદ કરવો."
    },
    "documents": [
      {
        "en": "Passenger Names & Mobile Number",
        "gu": "મુસાફરોનું નામ અને મોબાઈલ નંબર"
      },
      {
        "en": "Travel Date & Destination",
        "gu": "મુસાફરી તારીખ અને સ્થળ"
      }
    ],
    "eligibility": {
      "en": "All travelers.",
      "gu": "તમામ મુસાફરો."
    },
    "process": [
      {
        "en": "Route search -> Seat selection -> Instant e-ticket issued on WhatsApp",
        "gu": "રૂટ પસંદગી -> સીટ બુકિંગ -> વોટ્સએપ પર ઇ-ટિકિટ"
      }
    ],
    "notes": {
      "en": "Boarding point details and bus conductor contact sent via SMS.",
      "gu": "બસ કંડક્ટર નંબર અને બોર્ડિંગ સમય SMS દ્વારા મોકલવામાં આવે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to book a bus ticket."
    }
  },
  {
    "id": "flight-ticket",
    "slug": "flight-ticket",
    "categoryId": "other-services",
    "category": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "title": {
      "en": "Domestic Flight Ticket Booking",
      "gu": "ડોમેસ્ટિક ફ્લાઇટ ટિકિટ બુકિંગ"
    },
    "icon": "Globe",
    "image": "/images/services/flight-ticket.webp",
    "shortDescription": {
      "en": "Cheapest domestic air tickets for IndiGo, Air India, SpiceJet, Akasa.",
      "gu": "ઈન્ડિગો, એર ઈન્ડિયા અને અન્ય એરલાઇન્સની સૌથી સસ્તી ફ્લાઇટ ટિકિટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Find the lowest airfares from Surat and Mumbai airports to Delhi, Bengaluru, Goa, Ayodhya, and across India.",
      "gu": "સુરત અને મુંબઈ એરપોર્ટ પરથી ભારતના તમામ શહેરો માટે ઓછી કિંમતે એર ટિકિટ બુકિંગ."
    },
    "newApplication": {
      "en": "Flight search, seat selection, extra baggage, and web check-in.",
      "gu": "ફ્લાઇટ બુકિંગ, સીટ સિલેક્શન અને વેબ ચેક-ઇન સહાય."
    },
    "correction": {
      "en": "Date change or passenger detail correction.",
      "gu": "તારીખ બદલવી અથવા ફ્લાઇટ રિશેડ્યુલ."
    },
    "documents": [
      {
        "en": "Passenger Full Name (as per Govt ID)",
        "gu": "ઓળખ પત્ર મુજબ મુસાફરનું સાચું નામ"
      },
      {
        "en": "Date of Birth (for children/infants)",
        "gu": "બાળકો માટે જન્મ તારીખ"
      },
      {
        "en": "Aadhaar / Voter ID",
        "gu": "આધાર / ચૂંટણી કાર્ડ"
      }
    ],
    "eligibility": {
      "en": "Valid government ID mandatory for airport security.",
      "gu": "એરપોર્ટ પર માન્ય સરકારી ઓળખ પત્ર ફરજિયાત છે."
    },
    "process": [
      {
        "en": "Fare comparison across all airlines -> Ticket booking -> Free Web Check-in",
        "gu": "સૌથી સસ્તા ભાડાની સરખામણી -> બુકિંગ -> ફ્રી વેબ ચેક-ઇન"
      }
    ],
    "notes": {
      "en": "Free web check-in boarding pass provided prior to departure.",
      "gu": "મુસાફરી પહેલાં બોર્ડિંગ પાસ પ્રિન્ટ કરી આપવામાં આવે છે."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to book a domestic flight."
    }
  },
  {
    "id": "international-flight",
    "slug": "international-flight",
    "categoryId": "other-services",
    "category": {
      "en": "Other Services",
      "gu": "અન્ય સેવાઓ"
    },
    "title": {
      "en": "International Flight & Visa Assistance",
      "gu": "ઇન્ટરનેશનલ ફ્લાઇટ અને વિઝા સહાય"
    },
    "icon": "Globe",
    "image": "/images/services/international-flight.webp",
    "shortDescription": {
      "en": "Worldwide flight bookings to Dubai, UK, Canada, USA, Australia, Gulf.",
      "gu": "દુબઈ, યુકે, કેનેડા, અમેરિકા અને ગલ્ફ દેશો માટે ઇન્ટરનેશનલ ફ્લાઇટ ટિકિટ."
    },
    "isActive": true,
    "lastUpdated": "2026-09-21",
    "serviceStatus": "Active",
    "overview": {
      "en": "Expert international routing, multi-city flights, student extra baggage allowance (40-46kg), transit visa advice, and travel insurance.",
      "gu": "વિદેશ અભ્યાસ કે નોકરી માટે જતા મુસાફરો અને વિદ્યાર્થીઓ માટે વિશેષ બેગેજ ઓફર અને ટિકિટ."
    },
    "newApplication": {
      "en": "International itinerary planning and booking.",
      "gu": "ઇન્ટરનેશનલ ટિકિટ બુકિંગ અને પ્લાનિંગ."
    },
    "correction": {
      "en": "Ticket re-issuance and date modifications.",
      "gu": "તારીખ સુધારો અને વિઝા અપડેટ."
    },
    "documents": [
      {
        "en": "Original Passport (Minimum 6 months validity)",
        "gu": "અસલ પાસપોર્ટ (ઓછામાં ઓછી 6 મહિનાની માન્યતા)"
      },
      {
        "en": "Valid Visa / Student Permit / Work Permit",
        "gu": "માન્ય વિઝા અથવા વર્ક પરમિટ"
      },
      {
        "en": "Destination Address & Contact Details",
        "gu": "વિદેશનું સરનામું અને સંપર્ક"
      }
    ],
    "eligibility": {
      "en": "Valid passport and visa holders.",
      "gu": "માન્ય પાસપોર્ટ અને વિઝા ધરાવતા નાગરિકો."
    },
    "process": [
      {
        "en": "Passport validation -> Airline itinerary selection -> Ticket & travel insurance issuance",
        "gu": "પાસપોર્ટ ચકાસણી -> ફ્લાઇટ સિલેક્શન -> ટિકિટ અને ટ્રાવેલ ઇન્સ્યોરન્સ"
      }
    ],
    "notes": {
      "en": "Special student fare with additional luggage allowance available.",
      "gu": "વિદ્યાર્થીઓ માટે વધુ સામાન (Extra Luggage) વાળી વિશેષ ટિકિટ ઉપલબ્ધ."
    },
    "actions": {
      "applyNow": true,
      "whatsapp": "Hello HY-TECH, I want to book an international flight."
    }
  }
];
