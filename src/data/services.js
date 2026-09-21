// HY-TECH Computer Education & Online Hub
// Bilingual Services Data

import defaultImage from '../logo/download.jpg';

export const categories = [
  {
    id: 'online',
    slug: 'online',
    title: {
      en: 'Online Services',
      gu: 'ઓનલાઈન સેવાઓ',
    },
    services: [
      {
        id: 'pan-card',
        slug: 'pan-card',
        category: { en: 'Online Services', gu: 'ઓનલાઈન સેવાઓ' },
        title: { en: 'PAN Card', gu: 'પાન કાર્ડ' },
        shortDescription: {
          en: 'New PAN application, correction and reprint assistance.',
          gu: 'નવું પાન કાર્ડ, સુધારા અને રિપ્રિન્ટ માટેની સહાય.',
        },
        description: {
          en: 'Apply for a new PAN card, update existing details, or request a reprint easily with our assisted service.',
          gu: 'નવું પાન કાર્ડ બનાવવા, હાલની વિગતો અપડેટ કરવા અથવા રિપ્રિન્ટ માટે અમારી સહાયથી સરળતાથી અરજી કરો.',
        },
        image: defaultImage,
        illustration: 'pan-card-3d', // Placeholder for 3D CSS class/asset
        requestTypes: [
          { en: 'New Application', gu: 'નવી અરજી' },
          { en: 'Correction / Update', gu: 'સુધારો / અપડેટ' },
          { en: 'Reprint', gu: 'રિપ્રિન્ટ' },
        ],
        documents: [
          { en: 'Aadhaar Card', gu: 'આધાર કાર્ડ' },
          { en: '2 Passport Size Photos', gu: '2 પાસપોર્ટ સાઇઝ ફોટો' },
          { en: 'Mobile Number', gu: 'મોબાઇલ નંબર' },
        ],
        eligibility: [
          { en: 'Indian Citizen', gu: 'ભારતીય નાગરિક' },
          { en: 'Valid identity proof', gu: 'માન્ય ઓળખ પુરાવો' },
        ],
        process: [
          { en: 'Document Verification', gu: 'દસ્તાવેજ ચકાસણી' },
          { en: 'Application Form Filling', gu: 'અરજી ફોર્મ ભરવું' },
          { en: 'Submission', gu: 'અરજી સબમિટ' },
          { en: 'Acknowledgement Receipt', gu: 'પાવતી / સ્વીકૃતિ' },
        ],
        fees: [
          { label: { en: 'Govt & Service Fee', gu: 'સરકારી અને સેવા ફી' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Documents may vary depending on application type.',
          gu: 'અરજીના પ્રકાર અનુસાર દસ્તાવેજોમાં ફેરફાર થઈ શકે છે.',
        },
      },
      {
        id: 'aadhaar-card',
        slug: 'aadhaar-card',
        category: { en: 'Online Services', gu: 'ઓનલાઈન સેવાઓ' },
        title: { en: 'Aadhaar Card', gu: 'આધાર કાર્ડ' },
        shortDescription: {
          en: 'Aadhaar update, mobile linking, and PVC card print.',
          gu: 'આધાર અપડેટ, મોબાઇલ લિંકિંગ અને PVC કાર્ડ પ્રિન્ટ.',
        },
        description: {
          en: 'Update your Aadhaar card details like address, name, or link your mobile number securely.',
          gu: 'તમારા આધાર કાર્ડની વિગતો જેમ કે સરનામું, નામ અપડેટ કરો અથવા તમારો મોબાઇલ નંબર સુરક્ષિત રીતે લિંક કરો.',
        },
        image: defaultImage,
        illustration: 'aadhaar-3d',
        requestTypes: [
          { en: 'Address Update', gu: 'સરનામું અપડેટ' },
          { en: 'Mobile Linking', gu: 'મોબાઇલ લિંકિંગ' },
          { en: 'PVC Card Order', gu: 'PVC કાર્ડ ઓર્ડર' },
        ],
        documents: [
          { en: 'Aadhaar Number', gu: 'આધાર નંબર' },
          { en: 'Valid Address/ID Proof', gu: 'માન્ય સરનામા/ઓળખનો પુરાવો' },
          { en: 'Mobile with OTP access', gu: 'OTP માટે મોબાઇલ' },
        ],
        eligibility: [
          { en: 'Aadhaar Holder', gu: 'આધાર ધારક' },
          { en: 'Valid supporting documents', gu: 'માન્ય આધાર દસ્તાવેજો' },
        ],
        process: [
          { en: 'Provide details', gu: 'વિગતો આપો' },
          { en: 'OTP Verification', gu: 'OTP ચકાસણી' },
          { en: 'Update Request Submission', gu: 'અપડેટ અરજી સબમિટ' },
        ],
        fees: [
          { label: { en: 'Standard Charge', gu: 'પ્રમાણભૂત ચાર્જ' }, amount: 'Check applicable fee before submission.' }
        ],
        notes: {
          en: 'Biometric updates must be done at official Aadhaar centers.',
          gu: 'બાયોમેટ્રિક અપડેટ સત્તાવાર આધાર કેન્દ્રો પર જ કરવાના રહેશે.',
        },
      },
      {
        id: 'voter-id',
        slug: 'voter-id',
        category: { en: 'Online Services', gu: 'ઓનલાઈન સેવાઓ' },
        title: { en: 'Voter ID', gu: 'મતદાર ઓળખ કાર્ડ' },
        shortDescription: {
          en: 'New Voter ID, correction, or address shift.',
          gu: 'નવું મતદાર ઓળખ કાર્ડ, સુધારો અથવા સરનામું બદલવું.',
        },
        description: {
          en: 'Apply for a new Voter ID card or make corrections to your existing electoral roll entry.',
          gu: 'નવા મતદાર ઓળખ કાર્ડ માટે અરજી કરો અથવા તમારી હાલની નોંધણીમાં સુધારો કરો.',
        },
        image: defaultImage,
        illustration: 'voter-id-3d',
        requestTypes: [
          { en: 'New Registration', gu: 'નવી નોંધણી' },
          { en: 'Correction', gu: 'સુધારો' },
          { en: 'Address Shift', gu: 'સરનામું બદલવું' },
        ],
        documents: [
          { en: 'Aadhaar Card', gu: 'આધાર કાર્ડ' },
          { en: 'Passport Size Photo', gu: 'પાસપોર્ટ સાઇઝ ફોટો' },
          { en: 'Age/Address Proof', gu: 'ઉંમર/સરનામાનો પુરાવો' },
        ],
        eligibility: [
          { en: '18+ Years Age', gu: '18+ વર્ષ ઉંમર' },
          { en: 'Indian Citizen', gu: 'ભારતીય નાગરિક' },
        ],
        process: [
          { en: 'Document Collection', gu: 'દસ્તાવેજ એકત્રીકરણ' },
          { en: 'Form Submission', gu: 'ફોર્મ સબમિટ' },
          { en: 'BLO Verification', gu: 'BLO ચકાસણી' },
        ],
        fees: [
          { label: { en: 'Service Charge', gu: 'સેવા ચાર્જ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Processing time depends on election commission schedules.',
          gu: 'પ્રક્રિયાનો સમય ચૂંટણી પંચના સમયપત્રક પર આધાર રાખે છે.',
        },
      },
      {
        id: 'passport',
        slug: 'passport',
        category: { en: 'Online Services', gu: 'ઓનલાઈન સેવાઓ' },
        title: { en: 'Passport', gu: 'પાસપોર્ટ' },
        shortDescription: {
          en: 'Fresh passport application and renewal appointments.',
          gu: 'નવા પાસપોર્ટની અરજી અને રિન્યુઅલ માટે એપોઇન્ટમેન્ટ.',
        },
        description: {
          en: 'Get assistance with your passport application form filling and securing an appointment at the PSK.',
          gu: 'તમારું પાસપોર્ટ અરજી ફોર્મ ભરવામાં અને PSK ખાતે એપોઇન્ટમેન્ટ મેળવવામાં સહાય મેળવો.',
        },
        image: defaultImage,
        illustration: 'passport-3d',
        requestTypes: [
          { en: 'Fresh Application', gu: 'નવી અરજી' },
          { en: 'Renewal / Re-issue', gu: 'રિન્યુઅલ / રી-ઇશ્યૂ' },
        ],
        documents: [
          { en: 'Aadhaar & PAN', gu: 'આધાર અને પાન' },
          { en: '10th Marksheet', gu: '10માની માર્કશીટ' },
          { en: 'Birth Certificate', gu: 'જન્મ પ્રમાણપત્ર' },
        ],
        eligibility: [
          { en: 'Valid documentation', gu: 'માન્ય દસ્તાવેજો' },
        ],
        process: [
          { en: 'Form Filling', gu: 'ફોર્મ ભરવું' },
          { en: 'Fee Payment', gu: 'ફી પેમેન્ટ' },
          { en: 'Appointment Booking', gu: 'એપોઇન્ટમેન્ટ બુકિંગ' },
        ],
        fees: [
          { label: { en: 'Service Charge', gu: 'સેવા ચાર્જ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Police verification is mandatory as per rules.',
          gu: 'નિયમો અનુસાર પોલીસ વેરિફિકેશન ફરજિયાત છે.',
        },
      },
      {
        id: 'driving-licence',
        slug: 'driving-licence',
        category: { en: 'Online Services', gu: 'ઓનલાઈન સેવાઓ' },
        title: { en: 'Driving Licence', gu: 'ડ્રાઇવિંગ લાઇસન્સ' },
        shortDescription: {
          en: 'Learning licence application and test slots.',
          gu: 'લર્નિંગ લાઇસન્સ અરજી અને ટેસ્ટ સ્લોટ.',
        },
        description: {
          en: 'Apply for a learning licence, book test slots, or renew your existing driving licence.',
          gu: 'લર્નિંગ લાઇસન્સ માટે અરજી કરો, ટેસ્ટ સ્લોટ બુક કરો અથવા તમારું હાલનું ડ્રાઇવિંગ લાઇસન્સ રિન્યૂ કરો.',
        },
        image: defaultImage,
        illustration: 'licence-3d',
        requestTypes: [
          { en: 'Learning Licence', gu: 'લર્નિંગ લાઇસન્સ' },
          { en: 'Renewal', gu: 'રિન્યુઅલ' },
        ],
        documents: [
          { en: 'Aadhaar Card', gu: 'આધાર કાર્ડ' },
          { en: 'Age & Address Proof', gu: 'ઉંમર અને સરનામાનો પુરાવો' },
          { en: 'Passport Size Photo', gu: 'પાસપોર્ટ સાઇઝ ફોટો' },
        ],
        eligibility: [
          { en: 'Age 18+ (for LMV)', gu: 'ઉંમર 18+ (LMV માટે)' },
        ],
        process: [
          { en: 'Online Form', gu: 'ઓનલાઈન ફોર્મ' },
          { en: 'Document Upload', gu: 'દસ્તાવેજ અપલોડ' },
          { en: 'Slot Booking', gu: 'સ્લોટ બુકિંગ' },
        ],
        fees: [
          { label: { en: 'Total Fee', gu: 'કુલ ફી' }, amount: 'Check applicable fee before submission.' }
        ],
        notes: {
          en: 'Documents may vary depending on application type.',
          gu: 'અરજીના પ્રકાર અનુસાર દસ્તાવેજોમાં ફેરફાર થઈ શકે છે.',
        },
      },
      {
        id: 'ayushman-card',
        slug: 'ayushman-card',
        category: { en: 'Online Services', gu: 'ઓનલાઈન સેવાઓ' },
        title: { en: 'Ayushman Card', gu: 'આયુષ્માન કાર્ડ' },
        shortDescription: {
          en: 'PM-JAY health card generation and printing.',
          gu: 'PM-JAY હેલ્થ કાર્ડ બનાવવું અને પ્રિન્ટિંગ.',
        },
        description: {
          en: 'Get your Ayushman Bharat (PM-JAY) Golden card generated and printed instantly.',
          gu: 'તમારું આયુષ્માન ભારત (PM-JAY) ગોલ્ડન કાર્ડ તાત્કાલિક બનાવો અને પ્રિન્ટ કરાવો.',
        },
        image: defaultImage,
        illustration: 'health-card-3d',
        requestTypes: [
          { en: 'New Card Generation', gu: 'નવું કાર્ડ બનાવવું' },
          { en: 'Card Download/Print', gu: 'કાર્ડ ડાઉનલોડ/પ્રિન્ટ' },
        ],
        documents: [
          { en: 'Ration Card', gu: 'રેશન કાર્ડ' },
          { en: 'Aadhaar Card', gu: 'આધાર કાર્ડ' },
        ],
        eligibility: [
          { en: 'Name in PMJAY list / Eligible Ration Card', gu: 'PMJAY લિસ્ટમાં નામ / પાત્ર રેશન કાર્ડ' },
        ],
        process: [
          { en: 'Eligibility Check', gu: 'પાત્રતા ચકાસણી' },
          { en: 'e-KYC Verification', gu: 'e-KYC ચકાસણી' },
          { en: 'Card Print', gu: 'કાર્ડ પ્રિન્ટ' },
        ],
        fees: [
          { label: { en: 'Service Charge', gu: 'સેવા ચાર્જ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Instant issuance depends on server availability.',
          gu: 'તાત્કાલિક ઇશ્યુ થવું સર્વરની ઉપલબ્ધતા પર આધારિત છે.',
        },
      },
      {
        id: 'income-certificate',
        slug: 'income-certificate',
        category: { en: 'Online Services', gu: 'ઓનલાઈન સેવાઓ' },
        title: { en: 'Income Certificate', gu: 'આવક પ્રમાણપત્ર' },
        shortDescription: {
          en: 'Apply for income certificate for scholarships and admissions.',
          gu: 'સ્કોલરશિપ અને પ્રવેશ માટે આવકના પ્રમાણપત્ર માટે અરજી.',
        },
        description: {
          en: 'Get your official income certificate issued by the government, essential for various schemes and admissions.',
          gu: 'વિવિધ યોજનાઓ અને પ્રવેશ માટે જરૂરી સરકાર દ્વારા જારી કરાયેલ અધિકૃત આવક પ્રમાણપત્ર મેળવો.',
        },
        image: defaultImage,
        illustration: 'certificate-3d',
        requestTypes: [
          { en: 'New Certificate', gu: 'નવું પ્રમાણપત્ર' },
        ],
        documents: [
          { en: 'Talati Income Proof / Affidavit', gu: 'તલાટીનો આવકનો દાખલો / સોગંદનામું' },
          { en: 'Ration Card & Light Bill', gu: 'રેશન કાર્ડ અને લાઈટ બિલ' },
          { en: 'Aadhaar Card', gu: 'આધાર કાર્ડ' },
        ],
        eligibility: [
          { en: 'Valid address and income proof', gu: 'માન્ય સરનામું અને આવકનો પુરાવો' },
        ],
        process: [
          { en: 'Digital Gujarat Portal Entry', gu: 'ડિજિટલ ગુજરાત પોર્ટલ એન્ટ્રી' },
          { en: 'Document Upload', gu: 'દસ્તાવેજ અપલોડ' },
          { en: 'Approval & Print', gu: 'મંજૂરી અને પ્રિન્ટ' },
        ],
        fees: [
          { label: { en: 'Service Charge', gu: 'સેવા ચાર્જ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Usually takes 3-5 days for approval.',
          gu: 'મંજૂરી માટે સામાન્ય રીતે 3-5 દિવસ લાગે છે.',
        },
      }
    ],
  },
  {
    id: 'education',
    slug: 'education',
    title: {
      en: 'Education Services',
      gu: 'શિક્ષણ સેવાઓ',
    },
    services: [
      {
        id: 'college-admission',
        slug: 'college-admission',
        category: { en: 'Education Services', gu: 'શિક્ષણ સેવાઓ' },
        title: { en: 'College Admission', gu: 'કોલેજ પ્રવેશ' },
        shortDescription: {
          en: 'Online admission forms for colleges.',
          gu: 'કોલેજો માટે ઓનલાઈન પ્રવેશ ફોર્મ.',
        },
        description: {
          en: 'Assistance in filling online admission forms for various colleges and universities.',
          gu: 'વિવિધ કોલેજો અને યુનિવર્સિટીઓ માટે ઓનલાઈન પ્રવેશ ફોર્મ ભરવામાં સહાય.',
        },
        image: defaultImage,
        illustration: 'graduation-3d',
        requestTypes: [
          { en: 'New Admission Form', gu: 'નવું પ્રવેશ ફોર્મ' },
        ],
        documents: [
          { en: 'Previous Marksheets', gu: 'અગાઉની માર્કશીટ' },
          { en: 'School Leaving Certificate', gu: 'શાળા છોડ્યાનું પ્રમાણપત્ર' },
          { en: 'Passport Photo & Signature', gu: 'પાસપોર્ટ ફોટો અને સહી' },
        ],
        eligibility: [
          { en: 'Required academic qualification', gu: 'જરૂરી શૈક્ષણિક લાયકાત' },
        ],
        process: [
          { en: 'Form Filling', gu: 'ફોર્મ ભરવું' },
          { en: 'Document Upload', gu: 'દસ્તાવેજ અપલોડ' },
          { en: 'Fee Payment (if applicable)', gu: 'ફી પેમેન્ટ (જો લાગુ હોય તો)' },
        ],
        fees: [
          { label: { en: 'Service Charge', gu: 'સેવા ચાર્જ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Documents may vary depending on application type.',
          gu: 'અરજીના પ્રકાર અનુસાર દસ્તાવેજોમાં ફેરફાર થઈ શકે છે.',
        },
      },
      {
        id: 'gcas-registration',
        slug: 'gcas-registration',
        category: { en: 'Education Services', gu: 'શિક્ષણ સેવાઓ' },
        title: { en: 'CGAS Registration', gu: 'CGAS રજીસ્ટ્રેશન' },
        shortDescription: {
          en: 'Centralized Gujarat Admission portal registration.',
          gu: 'સેન્ટ્રલાઈઝ્ડ ગુજરાત એડમિશન પોર્ટલ રજીસ્ટ્રેશન.',
        },
        description: {
          en: 'Complete assistance with Gujarat Common Admission Services (GCAS) portal registration and choice filling.',
          gu: 'ગુજરાત કોમન એડમિશન સર્વિસિસ (GCAS) પોર્ટલ રજીસ્ટ્રેશન અને ચોઇસ ફિલિંગમાં સંપૂર્ણ સહાય.',
        },
        image: defaultImage,
        illustration: 'graduation-3d',
        requestTypes: [
          { en: 'Registration', gu: 'રજીસ્ટ્રેશન' },
          { en: 'Choice Filling', gu: 'ચોઇસ ફિલિંગ' },
        ],
        documents: [
          { en: '12th Marksheet', gu: '12માની માર્કશીટ' },
          { en: 'Caste Certificate (if applicable)', gu: 'જાતિ પ્રમાણપત્ર (જો લાગુ હોય તો)' },
        ],
        eligibility: [
          { en: '12th Pass', gu: '12મું પાસ' },
        ],
        process: [
          { en: 'Portal Registration', gu: 'પોર્ટલ રજીસ્ટ્રેશન' },
          { en: 'Profile Update', gu: 'પ્રોફાઇલ અપડેટ' },
          { en: 'College Selection', gu: 'કોલેજ પસંદગી' },
        ],
        fees: [
          { label: { en: 'Service Charge', gu: 'સેવા ચાર્જ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Follow deadlines strictly.',
          gu: 'સમયમર્યાદાનું ચુસ્તપણે પાલન કરવું.',
        },
      }
    ]
  },
  {
    id: 'jobs',
    slug: 'jobs',
    title: {
      en: 'Job Services',
      gu: 'નોકરી સેવાઓ',
    },
    services: [
      {
        id: 'govt-jobs',
        slug: 'govt-jobs',
        category: { en: 'Job Services', gu: 'નોકરી સેવાઓ' },
        title: { en: 'Government Job Forms', gu: 'સરકારી નોકરીના ફોર્મ' },
        shortDescription: {
          en: 'OJAS and other government recruitment forms.',
          gu: 'OJAS અને અન્ય સરકારી ભરતીના ફોર્મ.',
        },
        description: {
          en: 'Error-free online submission for Gujarat Government job applications via OJAS and other portals.',
          gu: 'OJAS અને અન્ય પોર્ટલ દ્વારા ગુજરાત સરકારની નોકરીની અરજીઓ માટે ભૂલ-રહિત ઓનલાઈન સબમિશન.',
        },
        image: defaultImage,
        illustration: 'job-3d',
        requestTypes: [
          { en: 'New Application', gu: 'નવી અરજી' },
        ],
        documents: [
          { en: 'Educational Certificates', gu: 'શૈક્ષણિક પ્રમાણપત્રો' },
          { en: 'Photo & Signature', gu: 'ફોટો અને સહી' },
          { en: 'Caste/NCL Certificate', gu: 'જાતિ/NCL પ્રમાણપત્ર' },
        ],
        eligibility: [
          { en: 'As per notification', gu: 'જાહેરાત મુજબ' },
        ],
        process: [
          { en: 'Registration', gu: 'રજીસ્ટ્રેશન' },
          { en: 'Form Filling', gu: 'ફોર્મ ભરવું' },
          { en: 'Fee Payment', gu: 'ફી પેમેન્ટ' },
        ],
        fees: [
          { label: { en: 'Service Charge', gu: 'સેવા ચાર્જ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Requirements may vary according to the latest recruitment notification.',
          gu: 'જરૂરિયાતો નવીનતમ ભરતી સૂચના અનુસાર બદલાઈ શકે છે.',
        },
      }
    ]
  },
  {
    id: 'printing',
    slug: 'printing',
    title: {
      en: 'Printing Services',
      gu: 'પ્રિન્ટિંગ સેવાઓ',
    },
    services: [
      {
        id: 'xerox-print',
        slug: 'xerox-print',
        category: { en: 'Printing Services', gu: 'પ્રિન્ટિંગ સેવાઓ' },
        title: { en: 'Xerox / Photocopy', gu: 'ઝેરોક્સ / ફોટોકોપી' },
        shortDescription: {
          en: 'High quality black & white and color prints.',
          gu: 'ઉચ્ચ ગુણવત્તાવાળી બ્લેક એન્ડ વ્હાઇટ અને કલર પ્રિન્ટ.',
        },
        description: {
          en: 'Get crisp and clear photocopies or printouts instantly from hardcopy or digital files.',
          gu: 'હાર્ડકોપી અથવા ડિજિટલ ફાઇલોમાંથી તાત્કાલિક સ્પષ્ટ ફોટોકોપી અથવા પ્રિન્ટઆઉટ મેળવો.',
        },
        image: defaultImage,
        illustration: 'printer-3d',
        requestTypes: [
          { en: 'B/W Print', gu: 'B/W પ્રિન્ટ' },
          { en: 'Color Print', gu: 'કલર પ્રિન્ટ' },
        ],
        documents: [
          { en: 'Hardcopy or Digital File', gu: 'હાર્ડકોપી અથવા ડિજિટલ ફાઇલ' },
        ],
        eligibility: [],
        process: [
          { en: 'Submit Document', gu: 'દસ્તાવેજ આપો' },
          { en: 'Instant Print', gu: 'તાત્કાલિક પ્રિન્ટ' },
        ],
        fees: [
          { label: { en: 'Per Page', gu: 'પ્રતિ પેજ' }, amount: 'Check at desk' }
        ],
        notes: {
          en: 'Bulk printing discounts available.',
          gu: 'મોટા જથ્થામાં પ્રિન્ટિંગ માટે ડિસ્કાઉન્ટ ઉપલબ્ધ છે.',
        },
      }
    ]
  }
];

export const allServices = categories.flatMap(cat => cat.services);

// ─── Featured Highlight Services (for ExploreServices section) ───────
export const featuredServices = [
  {
    id: 1,
    badge: 'High Demand',
    category: 'GOVERNMENT SERVICES',
    title: 'PAN Card (New Application & Correction)',
    desc: 'Instant Aadhaar-linked digital PAN application, minor to major conversion, address update, and reprint of lost physical PAN card.',
    time: '2–3 Working Days',
    docsNeeded: 'Aadhaar Card, 2 Photos, Mobile Number',
    whatsappText: 'Hello HY-Tech, I want to apply for PAN Card assistance.',
  },
  {
    id: 2,
    badge: 'Daily Walk-in',
    category: 'GOVERNMENT SERVICES',
    title: 'Aadhaar Card Update & Biometrics',
    desc: 'Mobile number linking, residential address change, biometric mandatory updates for children, and instant PVC plastic card printing.',
    time: 'Assisted in 10 Mins',
    docsNeeded: 'Aadhaar Number, Valid ID Proof, Mobile OTP',
    whatsappText: 'Hello HY-Tech, I need help updating my Aadhaar Card.',
  },
  {
    id: 3,
    badge: 'Education Support',
    category: 'STUDENT SERVICES',
    title: 'GCAS Portal Registration & College Forms',
    desc: 'Full assistance with Gujarat Common Admission Services (GCAS), college selection, document uploading, and scholarship filing.',
    time: 'Same Day Submission',
    docsNeeded: '12th Marksheet, LC, Caste Certificate',
    whatsappText: 'Hello HY-Tech, I need assistance with GCAS / College Admission form.',
  },
];

// ─── Authorized Portals & Facilitation Partners ───────────────────────
export const partners = [
  'UIDAI (Aadhaar)',
  'NSDL (Protean)',
  'UTI-ITSL',
  'Passport Seva',
  'DigiLocker',
  'Digital Gujarat',
  'GCAS Portal',
  'Income Tax Department',
  'Parivahan Sewa',
  'EPFO & E-Shram',
  'DGVCL Electricity',
];
