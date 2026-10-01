import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, UserCheck, ShieldCheck, Plus, FileText, Download, 
  CheckCircle2, AlertCircle, Sparkles, MessageCircle, 
  ExternalLink, QrCode, Lock, ChevronRight, X, Upload,
  Search, Eye, Trash2, Filter, FolderCheck, Calendar,
  CreditCard, Landmark, FileCheck, Award, GraduationCap,
  HeartPulse, Car, Home, Zap, Map, Building2, BookOpen,
  Laptop, Baby, Heart, Plane, ArrowRight, Shield
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SITE_CONFIG } from '../config/siteConfig';

// ─── Master List of All Government Documents ──────────────────────────────
export const GOVERNMENT_DOCUMENTS_LIST = [
  // ── 1. Identity & Citizenship ──
  {
    id: 'gov-aadhaar',
    name: 'Aadhaar Card',
    gujaratiName: 'આધાર કાર્ડ',
    category: 'Identity Proof',
    categoryGujarati: 'ઓળખ પુરાવો',
    authority: 'UIDAI (Govt of India)',
    formatHint: '12-digit UID (e.g. 1234 5678 9012)',
    requiredFor: 'Bank KYC, SIM card, Govt subsidies, College admissions',
    color: 'from-orange-500 to-amber-600',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    id: 'gov-pan',
    name: 'PAN Card',
    gujaratiName: 'પાન કાર્ડ',
    category: 'Identity Proof',
    categoryGujarati: 'ઓળખ પુરાવો',
    authority: 'Income Tax Department (NSDL/UTIITSL)',
    formatHint: '10-character alphanumeric (e.g. ABCDE1234F)',
    requiredFor: 'Bank accounts, Income tax filing, Property transactions, Salary',
    color: 'from-blue-600 to-indigo-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    id: 'gov-voter',
    name: 'Voter ID / Election Card (EPIC)',
    gujaratiName: 'મતદાર / ચૂંટણી ઓળખપત્ર',
    category: 'Identity Proof',
    categoryGujarati: 'ઓળખ પુરાવો',
    authority: 'Election Commission of India (ECI)',
    formatHint: 'EPIC No. (e.g. XYZ1234567)',
    requiredFor: 'Voting rights, Address verification, Citizenship identity',
    color: 'from-emerald-600 to-teal-700',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'gov-passport',
    name: 'Indian Passport',
    gujaratiName: 'ભારતીય પાસપોર્ટ',
    category: 'Identity Proof',
    categoryGujarati: 'ઓળખ પુરાવો',
    authority: 'Ministry of External Affairs (CPV)',
    formatHint: 'Passport Number (e.g. A1234567)',
    requiredFor: 'International travel, Visa applications, Global identity',
    color: 'from-indigo-600 to-blue-800',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    id: 'gov-dl',
    name: 'Driving Licence',
    gujaratiName: 'ડ્રાઇવિંગ લાયસન્સ',
    category: 'Identity Proof',
    categoryGujarati: 'ઓળખ પુરાવો',
    authority: 'RTO Gujarat / MoRTH',
    formatHint: 'Licence No. (e.g. GJ-15-20230001234)',
    requiredFor: 'Driving vehicles, ID proof, Age proof',
    color: 'from-purple-600 to-indigo-700',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
  },

  // ── 2. Citizen Welfare & Family Proofs ──
  {
    id: 'gov-ration',
    name: 'Ration Card (NFSA / BPL / APL)',
    gujaratiName: 'રેશન કાર્ડ (અન્ન અને નાગરિક પુરવઠો)',
    category: 'Welfare & Family',
    categoryGujarati: 'કુટુંબ અને કલ્યાણ',
    authority: 'Food & Civil Supplies Dept, Gujarat',
    formatHint: 'Ration Card No. (e.g. 10245089201)',
    requiredFor: 'Subsidized food grains, Ayushman card, Government schemes eligibility',
    color: 'from-amber-500 to-yellow-600',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'gov-ayushman',
    name: 'Ayushman Bharat Card (PMJAY - ₹10 Lakh)',
    gujaratiName: 'આયુષ્માન ભારત કાર્ડ (મા વાત્સલ્ય)',
    category: 'Welfare & Family',
    categoryGujarati: 'કુટુંબ અને કલ્યાણ',
    authority: 'National Health Authority (NHA)',
    formatHint: 'PMJAY ID (e.g. PMJAY-GUJ-90218)',
    requiredFor: 'Free cashless medical treatment up to ₹10 Lakh in empanelled hospitals',
    color: 'from-rose-500 to-red-600',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    id: 'gov-birth',
    name: 'Birth Certificate',
    gujaratiName: 'જન્મ પ્રમાણપત્ર',
    category: 'Welfare & Family',
    categoryGujarati: 'કુટુંબ અને કલ્યાણ',
    authority: 'Gram Panchayat / Nagarpalika Dharampur',
    formatHint: 'Registration No. (e.g. B-2024/0942)',
    requiredFor: 'School admission, Passport, Aadhaar enrollment, Age verification',
    color: 'from-pink-500 to-rose-500',
    badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
  },
  {
    id: 'gov-marriage',
    name: 'Marriage Certificate',
    gujaratiName: 'લગ્ન નોંધણી પ્રમાણપત્ર',
    category: 'Welfare & Family',
    categoryGujarati: 'કુટુંબ અને કલ્યાણ',
    authority: 'Registrar of Marriages, Gujarat',
    formatHint: 'Marriage Reg. No. (e.g. MR-2022-1049)',
    requiredFor: 'Spouse visa, Joint property, Ration card name addition, Nominee KYC',
    color: 'from-red-500 to-pink-600',
    badgeColor: 'bg-red-50 text-red-700 border-red-200',
  },
  {
    id: 'gov-death',
    name: 'Death Certificate',
    gujaratiName: 'મરણ પ્રમાણપત્ર',
    category: 'Welfare & Family',
    categoryGujarati: 'કુટુંબ અને કલ્યાણ',
    authority: 'Gram Panchayat / Nagarpalika Dharampur',
    formatHint: 'Death Reg. No. (e.g. D-2025/0312)',
    requiredFor: 'Insurance claim, Succession / વારસાઈ, Property mutation',
    color: 'from-gray-600 to-slate-700',
    badgeColor: 'bg-gray-100 text-gray-700 border-gray-300',
  },

  // ── 3. Revenue, Income & Residence ──
  {
    id: 'gov-income',
    name: 'Income Certificate (આવકનો દાખલો)',
    gujaratiName: 'મામલતદાર કચેરી આવકનો દાખલો',
    category: 'Revenue & Residence',
    categoryGujarati: 'આવક અને રહેઠાણ',
    authority: 'Mamlatdar Office Dharampur / Digital Gujarat',
    formatHint: 'Certificate No. (e.g. INC-2026-9912)',
    requiredFor: 'College scholarships, RTE admission, Govt aid schemes, Fee concessions',
    color: 'from-teal-600 to-emerald-700',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  {
    id: 'gov-caste',
    name: 'Caste Certificate (જાતિ પ્રમાણપત્ર)',
    gujaratiName: 'SEBC / SC / ST જાતિનો દાખલો',
    category: 'Revenue & Residence',
    categoryGujarati: 'આવક અને રહેઠાણ',
    authority: 'Social Justice Dept / Mamlatdar Office',
    formatHint: 'Caste Cert. No. (e.g. SEBC-VLS-8812)',
    requiredFor: 'Reservation quota, Scholarship applications, Govt job recruitment',
    color: 'from-cyan-600 to-blue-700',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  {
    id: 'gov-ncl',
    name: 'Non-Creamy Layer (NCL) Certificate',
    gujaratiName: 'નોન ક્રિમીલેયર પ્રમાણપત્ર (પરિશિષ્ટ-૪)',
    category: 'Revenue & Residence',
    categoryGujarati: 'આવક અને રહેઠાણ',
    authority: 'Mamlatdar Office Dharampur',
    formatHint: 'NCL No. (e.g. NCL-2026-4401)',
    requiredFor: 'OBC/SEBC quota admission in GCAS colleges, GPSC, Jobs (Valid 3 Years)',
    color: 'from-emerald-500 to-teal-600',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'gov-domicile',
    name: 'Gujarat Domicile Certificate',
    gujaratiName: 'ગુજરાત રહેઠાણ પ્રમાણપત્ર',
    category: 'Revenue & Residence',
    categoryGujarati: 'આવક અને રહેઠાણ',
    authority: 'Sub-Divisional Magistrate / Collector Office',
    formatHint: 'Domicile Cert. No. (e.g. DOM-GUJ-7712)',
    requiredFor: 'Gujarat state quota in engineering, medical colleges & police recruitment',
    color: 'from-orange-600 to-amber-700',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    id: 'gov-lightbill',
    name: 'Electricity Bill (DGVCL Light Bill)',
    gujaratiName: 'DGVCL વીજળી બિલ (રહેઠાણ પુરાવો)',
    category: 'Revenue & Residence',
    categoryGujarati: 'આવક અને રહેઠાણ',
    authority: 'Dakshin Gujarat Vij Company Ltd (DGVCL)',
    formatHint: 'Consumer No. (e.g. 04810-9921-2)',
    requiredFor: 'Valid residential address proof for all government applications',
    color: 'from-amber-500 to-orange-500',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'gov-land712',
    name: '7/12 & 8-A Land Records (AnyRoR)',
    gujaratiName: 'જમીન / ખેડૂત ખાતા ૭/૧૨ અને ૮-અ ઉતારા',
    category: 'Revenue & Residence',
    categoryGujarati: 'આવક અને રહેઠાણ',
    authority: 'Revenue Department Gujarat (AnyRoR)',
    formatHint: 'Survey / Block No. (e.g. Survey #142/P2)',
    requiredFor: 'Farmer identity, Agricultural loans, Khedut Sahay, Land ownership proof',
    color: 'from-green-600 to-emerald-800',
    badgeColor: 'bg-green-50 text-green-700 border-green-200',
  },
  {
    id: 'gov-propertytax',
    name: 'Property Tax Bill / Assessment Receipt',
    gujaratiName: 'મિલકત વેરા પહોંચ / આકારણી પત્રક',
    category: 'Revenue & Residence',
    categoryGujarati: 'આવક અને રહેઠાણ',
    authority: 'Gram Panchayat / Nagarpalika Dharampur',
    formatHint: 'Tax Receipt No. (e.g. TAX-2026-0391)',
    requiredFor: 'Home address verification, Ownership transfer, Bank loans',
    color: 'from-slate-600 to-gray-700',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
  },

  // ── 4. Education, Scholarship & Special Cards ──
  {
    id: 'gov-lc',
    name: 'School / College Leaving Certificate (LC)',
    gujaratiName: 'શાળા છોડ્યાનું પ્રમાણપત્ર (એલ.સી.)',
    category: 'Education & Certificates',
    categoryGujarati: 'શિક્ષણ અને પ્રમાણપત્રો',
    authority: 'School / College Principal / Board',
    formatHint: 'General Register No. (e.g. GR-5481)',
    requiredFor: 'Date of birth proof, College admissions, Passport application',
    color: 'from-blue-500 to-cyan-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  {
    id: 'gov-marksheet',
    name: '10th / 12th Board Marksheet',
    gujaratiName: 'ધોરણ ૧૦ / ૧૨ બોર્ડ ગુણપત્રક (GSEB/CBSE)',
    category: 'Education & Certificates',
    categoryGujarati: 'શિક્ષણ અને પ્રમાણપત્રો',
    authority: 'GSEB Gandhinagar / CBSE',
    formatHint: 'Seat No. (e.g. C-104928)',
    requiredFor: 'Higher education admission, Competitive exams, Apprenticeship forms',
    color: 'from-purple-500 to-violet-700',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    id: 'gov-scholarship',
    name: 'Digital Gujarat Scholarship Receipt',
    gujaratiName: 'ડિજિટલ ગુજરાત શિષ્યવૃત્તિ દસ્તાવેજ',
    category: 'Education & Certificates',
    categoryGujarati: 'શિક્ષણ અને પ્રમાણપત્રો',
    authority: 'Director of Social Defence, Gujarat',
    formatHint: 'Application ID (e.g. DG-SCH-2026-9921)',
    requiredFor: 'College fee reimbursement, Hostel allowance, Tribal scholarship renewal',
    color: 'from-emerald-600 to-green-700',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 'gov-ccc',
    name: 'CCC / Computer Course Certificate',
    gujaratiName: 'CCC / કમ્પ્યુટર કોર્સ પ્રમાણપત્ર',
    category: 'Education & Certificates',
    categoryGujarati: 'શિક્ષણ અને પ્રમાણપત્રો',
    authority: 'HY-Tech Computer Education / GTU',
    formatHint: 'Certificate No. (e.g. HYT-CCC-2026-118)',
    requiredFor: 'Government job promotion, Clerk/Talati eligibility, Private office jobs',
    color: 'from-orange-500 to-red-500',
    badgeColor: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    id: 'gov-disability',
    name: 'Disability Certificate (UDID Card)',
    gujaratiName: 'દિવ્યાંગ પ્રમાણપત્ર (UDID કાર્ડ)',
    category: 'Education & Certificates',
    categoryGujarati: 'શિક્ષણ અને પ્રમાણપત્રો',
    authority: 'District Medical Board / Swavlamban Card',
    formatHint: 'UDID No. (e.g. GJ151042023901)',
    requiredFor: 'Disability pension, ST bus free pass, Reservation benefits, Assistive aid',
    color: 'from-indigo-500 to-purple-600',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  },
  {
    id: 'gov-senior',
    name: 'Senior Citizen Identity Card',
    gujaratiName: 'વરિષ્ઠ નાગરિક ઓળખ કાર્ડ (૬૦+ વર્ષ)',
    category: 'Education & Certificates',
    categoryGujarati: 'શિક્ષણ અને પ્રમાણપત્રો',
    authority: 'Social Welfare Department Dharampur',
    formatHint: 'Card No. (e.g. SC-DHP-2025-102)',
    requiredFor: 'Old age pension (વૃદ્ધ પેન્શન), Healthcare discounts, Railway concession',
    color: 'from-teal-600 to-cyan-700',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  {
    id: 'gov-farmer',
    name: 'Farmer Khatedar Certificate (ikhedut)',
    gujaratiName: 'ખેડૂત પ્રમાણપત્ર / આઈ-ખેડૂત નોંધણી',
    category: 'Education & Certificates',
    categoryGujarati: 'શિક્ષણ અને પ્રમાણપત્રો',
    authority: 'Agriculture Department Gujarat (ikhedut)',
    formatHint: 'Khatedar No. (e.g. KHT-2026-7819)',
    requiredFor: 'Khedut tractor subsidy, Drip irrigation assistance, PM-Kisan ₹6000',
    color: 'from-lime-600 to-emerald-700',
    badgeColor: 'bg-lime-50 text-lime-700 border-lime-200',
  },
];

// Initial default documents for new vault users
const INITIAL_DOCUMENTS = [
  { 
    id: 'DOC-01', 
    docTypeId: 'gov-ration',
    title: 'NFSA Priority Ration Card', 
    gujaratiName: 'રેશન કાર્ડ (અન્ન અને નાગરિક પુરવઠો)',
    category: 'Welfare & Family',
    code: 'RC-GUJ-8492019', 
    ownerName: 'Rameshchandra K. Patel (Head)',
    fileName: 'ration_card_nfsa_verified.pdf',
    fileSize: '1.4 MB',
    status: 'Verified (DigiLocker)', 
    updated: 'Jan 2026',
    expiry: 'Permanent'
  },
  { 
    id: 'DOC-02', 
    docTypeId: 'gov-income',
    title: 'Income Certificate (Mamlatdar Office)', 
    gujaratiName: 'મામલતદાર કચેરી આવકનો દાખલો',
    category: 'Revenue & Residence',
    code: 'INC-2026-9912', 
    ownerName: 'Rameshchandra K. Patel (Head)',
    fileName: 'income_cert_2026_mamlatdar.pdf',
    fileSize: '890 KB',
    status: 'Valid (Expires Mar 2027)', 
    updated: 'Apr 2026',
    expiry: 'Mar 2027'
  },
  { 
    id: 'DOC-03', 
    docTypeId: 'gov-lightbill',
    title: 'DGVCL Light Bill (Residential Proof)', 
    gujaratiName: 'DGVCL વીજળી બિલ (રહેઠાણ પુરાવો)',
    category: 'Revenue & Residence',
    code: 'EB-DHP-44810', 
    ownerName: 'Patel Family Household',
    fileName: 'dgvcl_light_bill_aug2026.pdf',
    fileSize: '620 KB',
    status: 'Current (Valid)', 
    updated: 'Aug 2026',
    expiry: 'Valid 3 Months'
  },
  { 
    id: 'DOC-04', 
    docTypeId: 'gov-caste',
    title: 'Caste Certificate (SEBC / NCL)', 
    gujaratiName: 'SEBC / SC / ST જાતિનો દાખલો',
    category: 'Revenue & Residence',
    code: 'NCL-VLS-10294', 
    ownerName: 'Rahul R. Patel (Son)',
    fileName: 'sebc_caste_certificate.pdf',
    fileSize: '1.1 MB',
    status: 'Active (Form 4)', 
    updated: 'May 2026',
    expiry: 'Permanent'
  },
];

const STORAGE_KEY = 'hytech_user_documents';

export default function FamilyPage() {
  const { user } = useAuth();
  
  // Persistent documents from localStorage or initial fallback
  const [documents, setDocuments] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Error reading saved documents:', e);
    }
    return INITIAL_DOCUMENTS;
  });

  const [activeTab, setActiveTab] = useState('my-docs'); // 'my-docs' | 'gov-list'
  
  // Modals & Notifications
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Search & Filter in Government List
  const [govSearch, setGovSearch] = useState('');
  const [govCategoryFilter, setGovCategoryFilter] = useState('ALL');

  // Upload Form State
  const [selectedDocId, setSelectedDocId] = useState('gov-aadhaar');
  const [docNumber, setDocNumber] = useState('');
  const [docOwner, setDocOwner] = useState(user?.name || 'Self / Ramesh Patel');
  const [docExpiry, setDocExpiry] = useState('Permanent / Lifetime');
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Add Member State
  const [newName, setNewName] = useState('');
  const [newRelation, setNewRelation] = useState('Child');
  const [newAge, setNewAge] = useState('');

  const familyId = `HY-DHP-${(user?.id || '84920').slice(-5)}`;

  // Save to localStorage whenever documents change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
    } catch (e) {
      console.error('Error persisting documents:', e);
    }
  }, [documents]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Open Upload modal with specific document pre-selected
  const handleSelectAndUpload = (govDoc) => {
    setSelectedDocId(govDoc.id);
    setDocNumber('');
    setSelectedFile(null);
    setFilePreview(null);
    setUploadError('');
    setIsUploadModalOpen(true);
  };

  // Handle File Selection
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 15 * 1024 * 1024) {
      setUploadError('File size exceeds 15 MB. Please select a smaller file.');
      return;
    }

    setUploadError('');
    setSelectedFile(file);

    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFilePreview(null);
    }
  };

  // Submit Upload Document
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setUploadError('Please select or drag-and-drop a document file to upload.');
      return;
    }

    setIsUploading(true);

    setTimeout(() => {
      const targetGovDoc = GOVERNMENT_DOCUMENTS_LIST.find((d) => d.id === selectedDocId) || {
        name: 'Government Document',
        gujaratiName: 'સરકારી દસ્તાવેજ',
        category: 'Identity Proof',
      };

      const newDoc = {
        id: `DOC-${Date.now().toString().slice(-6)}`,
        docTypeId: targetGovDoc.id,
        title: targetGovDoc.name,
        gujaratiName: targetGovDoc.gujaratiName,
        category: targetGovDoc.category,
        code: docNumber.trim() || `HYT-${Math.floor(100000 + Math.random() * 900000)}`,
        ownerName: docOwner,
        fileName: selectedFile.name,
        fileSize: (selectedFile.size / (1024 * 1024)).toFixed(2) + ' MB',
        fileData: filePreview,
        fileType: selectedFile.type,
        status: 'Verified & Encrypted',
        updated: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
        expiry: docExpiry || 'Permanent',
        isNew: true,
      };

      setDocuments([newDoc, ...documents]);
      setIsUploading(false);
      setIsUploadModalOpen(false);
      setSelectedFile(null);
      setFilePreview(null);
      setDocNumber('');
      showToast(`Document "${newDoc.title}" uploaded & secured in your vault!`);
      setActiveTab('my-docs');
    }, 600);
  };

  // Delete Document
  const handleDeleteDoc = (id, title) => {
    if (window.confirm(`Are you sure you want to remove "${title}" from your vault?`)) {
      setDocuments(documents.filter((d) => d.id !== id));
      if (previewDoc?.id === id) setPreviewDoc(null);
      showToast(`Document "${title}" removed from vault.`);
    }
  };

  // Filtered Government List
  const filteredGovDocs = GOVERNMENT_DOCUMENTS_LIST.filter((doc) => {
    const matchesCategory = govCategoryFilter === 'ALL' || doc.category === govCategoryFilter;
    const q = govSearch.toLowerCase().trim();
    const matchesSearch = 
      !q || 
      doc.name.toLowerCase().includes(q) || 
      doc.gujaratiName.toLowerCase().includes(q) ||
      doc.authority.toLowerCase().includes(q) ||
      doc.requiredFor.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  // Current selected gov doc metadata for modal
  const activeSelectedGovDoc = GOVERNMENT_DOCUMENTS_LIST.find((d) => d.id === selectedDocId) || GOVERNMENT_DOCUMENTS_LIST[0];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-neutral-950 py-8 sm:py-12 px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Floating Toast Notification */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="fixed top-20 right-6 z-50 px-5 py-3.5 bg-neutral-900 text-white rounded-2xl shadow-2xl flex items-center gap-3 text-xs sm:text-sm font-bold border border-neutral-700 backdrop-blur-md"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={16} />
              </div>
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Hero Overview Card: My Documents Vault ─── */}
        <div className="bg-[#171717] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-neutral-800">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-gradient-to-br from-[#F96400]/25 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F96400] text-white shadow-sm">
                  <ShieldCheck size={14} /> Official Citizen Vault
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-300 border border-white/10">
                  <Lock size={12} /> 256-Bit DigiLocker Compliant
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white" style={{ color: '#ffffff' }}>
                My Documents / મારા દસ્તાવેજો
              </h1>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                Centralized vault to browse all official government documents, select document types, and upload digital copies securely linked to your household smart profile.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedDocId('gov-aadhaar');
                    setIsUploadModalOpen(true);
                  }}
                  className="btn-3d-circle inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold bg-[#F96400] hover:bg-[#E05A00] text-white shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
                >
                  <Upload size={14} />
                  <span>+ Upload Government Document</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('gov-list')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all cursor-pointer"
                >
                  <Landmark size={14} />
                  <span>Browse Government All List ({GOVERNMENT_DOCUMENTS_LIST.length})</span>
                </button>
              </div>
            </div>

            {/* Smart ID Badge */}
            <div className="bg-neutral-900/95 border border-neutral-700/80 rounded-2xl p-5 flex items-center gap-4 flex-shrink-0 backdrop-blur-md shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/20 text-[#F96400] flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                <QrCode size={30} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Citizen Smart Vault ID</p>
                <p className="text-xl sm:text-2xl font-mono font-black text-white">{familyId}</p>
                <div className="flex items-center gap-3 mt-1 text-[11px] text-neutral-400">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 size={11} /> {documents.length} Stored in Vault
                  </span>
                  <span>•</span>
                  <span>256-Bit DigiLocker Secured</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Segmented Navigation Tabs ─── */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200 dark:border-neutral-800 pb-2">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-900 p-1.5 rounded-2xl border border-gray-200 dark:border-neutral-800">
            <button
              type="button"
              onClick={() => setActiveTab('my-docs')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'my-docs'
                  ? 'bg-white dark:bg-neutral-800 text-[#171717] dark:text-white shadow-xs'
                  : 'text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <FileCheck size={16} className={activeTab === 'my-docs' ? 'text-[#F96400]' : ''} />
              <span>My Uploaded Documents</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F96400] text-white">
                {documents.length}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('gov-list')}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'gov-list'
                  ? 'bg-white dark:bg-neutral-800 text-[#171717] dark:text-white shadow-xs'
                  : 'text-gray-500 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Landmark size={16} className={activeTab === 'gov-list' ? 'text-[#F96400]' : ''} />
              <span>Government All List</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-600 text-white">
                {GOVERNMENT_DOCUMENTS_LIST.length}
              </span>
            </button>
          </div>

          {/* Quick Upload Button */}
          <button
            type="button"
            onClick={() => {
              setSelectedDocId('gov-aadhaar');
              setIsUploadModalOpen(true);
            }}
            className="px-4 py-2 bg-[#F96400] hover:bg-[#E05A00] text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer"
          >
            <Upload size={14} />
            <span>Select & Upload Document</span>
          </button>
        </div>

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 1: MY UPLOADED DOCUMENTS                                          */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'my-docs' && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <FolderCheck className="text-[#F96400]" size={24} />
                  <span>My Secured Documents / મારા અપલોડ કરેલા દસ્તાવેજો</span>
                </h2>
                <p className="text-xs text-neutral-500 mt-1">
                  All documents are verified with 256-bit encryption. Use them for fast online scheme applications at HY-Tech Hub.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('gov-list')}
                  className="px-3.5 py-1.5 rounded-xl border border-gray-300 dark:border-neutral-700 text-xs font-bold text-gray-700 dark:text-neutral-300 hover:bg-gray-100 transition-colors flex items-center gap-1.5"
                >
                  <Plus size={14} />
                  <span>Browse Government List to Add More</span>
                </button>
              </div>
            </div>

            {documents.length === 0 ? (
              <div className="bg-white dark:bg-neutral-900 rounded-3xl p-12 text-center border border-gray-200 dark:border-neutral-800 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-[#F96400] mx-auto flex items-center justify-center">
                  <FileText size={30} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">No documents uploaded yet</h3>
                <p className="text-xs text-neutral-500 max-w-md mx-auto">
                  Browse the government documents list and upload your Aadhaar, Ration Card, or Income Certificate to get instant verified access.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('gov-list')}
                  className="px-5 py-2.5 bg-[#F96400] text-white rounded-full text-xs font-bold inline-flex items-center gap-2 shadow-md"
                >
                  <Landmark size={14} />
                  <span>View All Government Documents List</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 p-5 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between group relative overflow-hidden"
                  >
                    {doc.isNew && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F96400] text-white animate-pulse">
                        NEW
                      </span>
                    )}

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-xl bg-[#FFF5EE] dark:bg-neutral-800 text-[#F96400] flex items-center justify-center flex-shrink-0 border border-orange-200/50">
                          <FileText size={20} />
                        </div>
                        <div className="flex-1 pr-6">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                            {doc.category}
                          </span>
                          <h3 className="font-bold text-sm text-neutral-900 dark:text-neutral-100 leading-snug">
                            {doc.title}
                          </h3>
                          <p className="text-[11px] text-gray-500 font-gujarati mt-0.5">
                            {doc.gujaratiName}
                          </p>
                        </div>
                      </div>

                      <div className="bg-gray-50 dark:bg-neutral-800/60 rounded-xl p-3 space-y-1.5 border border-gray-100 dark:border-neutral-800">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 text-[11px]">Doc / Reg No:</span>
                          <span className="font-mono font-bold text-neutral-800 dark:text-neutral-200">{doc.code}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 text-[11px]">Belongs To:</span>
                          <span className="font-semibold text-neutral-700 dark:text-neutral-300 truncate max-w-[160px]">{doc.ownerName}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-400 text-[11px]">File:</span>
                          <span className="text-neutral-600 dark:text-neutral-400 text-[11px] truncate max-w-[160px]">
                            {doc.fileName || 'document_scan.pdf'} ({doc.fileSize || '1.2 MB'})
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-100 dark:border-neutral-800 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <CheckCircle2 size={11} /> {doc.status}
                      </span>

                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setPreviewDoc(doc)}
                          className="p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
                          title="View Document Details"
                        >
                          <Eye size={15} />
                        </button>
                        <a
                          href={doc.fileData || '#'}
                          download={doc.fileName || `${doc.title}.pdf`}
                          onClick={(e) => {
                            if (!doc.fileData) {
                              e.preventDefault();
                              showToast(`Simulated download: "${doc.title}"`);
                            }
                          }}
                          className="p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                          title="Download Document"
                        >
                          <Download size={15} />
                        </a>
                        <button
                          type="button"
                          onClick={() => handleDeleteDoc(doc.id, doc.title)}
                          className="p-2 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          title="Remove from Vault"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ═════════════════════════════════════════════════════════════════════ */}
        {/* TAB 2: GOVERNMENT ALL LIST (DIRECTORY & SELECT AFTER UPLOAD)          */}
        {/* ═════════════════════════════════════════════════════════════════════ */}
        {activeTab === 'gov-list' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 border border-gray-200 dark:border-neutral-800 space-y-5 shadow-xs">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#F96400] mb-1 block">
                    Official Gujarat & Central Directory
                  </span>
                  <h2 className="text-2xl font-black text-neutral-900 dark:text-neutral-100">
                    Government Documents All List / સરકારી દસ્તાવેજોની સંપૂર્ણ યાદી
                  </h2>
                  <p className="text-xs text-neutral-500 mt-1 max-w-2xl">
                    Select any government document below to upload your copy directly to your vault. We guide you on required authorities and official document formats.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSelectedDocId('gov-aadhaar');
                    setIsUploadModalOpen(true);
                  }}
                  className="px-5 py-2.5 bg-[#F96400] hover:bg-[#E05A00] text-white rounded-full text-xs font-bold transition-all flex items-center gap-2 shadow-md flex-shrink-0 cursor-pointer"
                >
                  <Upload size={14} />
                  <span>Upload Any Document</span>
                </button>
              </div>

              {/* Search & Category Filter Pills */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="relative flex-1">
                  <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={govSearch}
                    onChange={(e) => setGovSearch(e.target.value)}
                    placeholder="Search government documents (e.g. Aadhaar, Income, Ration, Ayushman, Caste)..."
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-xs sm:text-sm focus:outline-none focus:border-black dark:focus:border-white transition-all text-[#171717] dark:text-white"
                  />
                  {govSearch && (
                    <button
                      type="button"
                      onClick={() => setGovSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-1.5 items-center">
                  {[
                    { id: 'ALL', label: 'All Documents' },
                    { id: 'Identity Proof', label: 'Identity Proofs' },
                    { id: 'Welfare & Family', label: 'Welfare & Family' },
                    { id: 'Revenue & Residence', label: 'Revenue & Residence' },
                    { id: 'Education & Certificates', label: 'Education & Certificates' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setGovCategoryFilter(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        govCategoryFilter === cat.id
                          ? 'bg-[#171717] text-white dark:bg-white dark:text-black shadow-xs'
                          : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 hover:bg-gray-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Document Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredGovDocs.map((doc) => {
                const isAlreadyUploaded = documents.some((d) => d.docTypeId === doc.id || d.title.toLowerCase().includes(doc.name.toLowerCase()));

                return (
                  <div
                    key={doc.id}
                    className="bg-white dark:bg-neutral-900 rounded-2xl border border-gray-200 dark:border-neutral-800 p-5 shadow-xs hover:border-[#F96400]/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4 group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${doc.badgeColor}`}>
                          {doc.category}
                        </span>
                        {isAlreadyUploaded && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                            <CheckCircle2 size={11} /> Uploaded in Vault
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="font-extrabold text-sm sm:text-base text-neutral-900 dark:text-neutral-100 group-hover:text-[#F96400] transition-colors">
                          {doc.name}
                        </h3>
                        <p className="text-xs text-neutral-500 font-gujarati mt-0.5 font-medium">
                          {doc.gujaratiName}
                        </p>
                      </div>

                      <div className="space-y-1.5 text-xs text-gray-600 dark:text-neutral-400 bg-gray-50 dark:bg-neutral-800/50 p-3 rounded-xl border border-gray-100 dark:border-neutral-800">
                        <p className="text-[11px]">
                          <strong className="text-neutral-800 dark:text-neutral-200">Issuing Authority:</strong> {doc.authority}
                        </p>
                        <p className="text-[11px]">
                          <strong className="text-neutral-800 dark:text-neutral-200">Format:</strong> {doc.formatHint}
                        </p>
                        <p className="text-[11px] text-gray-500 line-clamp-2">
                          <strong className="text-neutral-800 dark:text-neutral-200">Used For:</strong> {doc.requiredFor}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleSelectAndUpload(doc)}
                        className="btn-3d-circle w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-[#FFF5EE] hover:bg-[#F96400] text-[#F96400] hover:text-white border border-[#F96400]/30 hover:border-transparent transition-all flex items-center justify-center gap-2 cursor-pointer shadow-2xs group-hover:bg-[#F96400] group-hover:text-white"
                      >
                        <Upload size={14} />
                        <span>Select & Upload Document (અપલોડ કરો)</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* ═════════════════════════════════════════════════════════════════════ */}
      {/* MODAL 1: SELECT & UPLOAD GOVERNMENT DOCUMENT                         */}
      {/* ═════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {isUploadModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-5 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-neutral-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FFF5EE] text-[#F96400] flex items-center justify-center">
                    <Upload size={18} />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white">
                      Upload Government Document
                    </h3>
                    <p className="text-[11px] text-gray-500">Secure 256-bit AES Vault Encryption</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsUploadModalOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {uploadError && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs flex items-center gap-2">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{uploadError}</span>
                </div>
              )}

              <form onSubmit={handleUploadSubmit} className="space-y-4">
                {/* 1. Select Government Document Type */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Select Government Document Type *
                  </label>
                  <select
                    value={selectedDocId}
                    onChange={(e) => {
                      setSelectedDocId(e.target.value);
                      setUploadError('');
                    }}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#F96400] text-[#171717] dark:text-white"
                  >
                    <optgroup label="── 1. Identity & Citizenship Proofs ──">
                      {GOVERNMENT_DOCUMENTS_LIST.filter(d => d.category === 'Identity Proof').map(d => (
                        <option key={d.id} value={d.id}>{d.name} ({d.gujaratiName})</option>
                      ))}
                    </optgroup>
                    <optgroup label="── 2. Citizen Welfare & Family Proofs ──">
                      {GOVERNMENT_DOCUMENTS_LIST.filter(d => d.category === 'Welfare & Family').map(d => (
                        <option key={d.id} value={d.id}>{d.name} ({d.gujaratiName})</option>
                      ))}
                    </optgroup>
                    <optgroup label="── 3. Revenue, Income & Residence ──">
                      {GOVERNMENT_DOCUMENTS_LIST.filter(d => d.category === 'Revenue & Residence').map(d => (
                        <option key={d.id} value={d.id}>{d.name} ({d.gujaratiName})</option>
                      ))}
                    </optgroup>
                    <optgroup label="── 4. Education, Scholarship & Certificates ──">
                      {GOVERNMENT_DOCUMENTS_LIST.filter(d => d.category === 'Education & Certificates').map(d => (
                        <option key={d.id} value={d.id}>{d.name} ({d.gujaratiName})</option>
                      ))}
                    </optgroup>
                  </select>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Authority: {activeSelectedGovDoc.authority} • {activeSelectedGovDoc.formatHint}
                  </p>
                </div>

                {/* 2. Document Number / Registration No */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Document / Certificate Number
                    </label>
                    <input
                      type="text"
                      value={docNumber}
                      onChange={(e) => setDocNumber(e.target.value)}
                      placeholder={activeSelectedGovDoc.formatHint || 'e.g. 1234 5678 9012'}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#F96400]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                      Document Holder / Name
                    </label>
                    <input
                      type="text"
                      value={docOwner}
                      onChange={(e) => setDocOwner(e.target.value)}
                      placeholder="e.g. Ramesh Patel / Self"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]"
                    />
                  </div>
                </div>

                {/* 3. Validity / Expiry */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Document Validity / Expiry
                  </label>
                  <select
                    value={docExpiry}
                    onChange={(e) => setDocExpiry(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs focus:outline-none focus:ring-2 focus:ring-[#F96400]"
                  >
                    <option value="Permanent / Lifetime">Permanent / Lifetime (Aadhaar, PAN, Birth, Caste)</option>
                    <option value="Expires in 1 Year">Valid for 1 Year (Income Certificate)</option>
                    <option value="Expires in 3 Years">Valid for 3 Years (Non-Creamy Layer NCL)</option>
                    <option value="Valid for 3 Months">Current Month (Electricity / Light Bill)</option>
                    <option value="10 Years">10 Years Validity (Passport / DL)</option>
                  </select>
                </div>

                {/* 4. Drag and Drop File Upload Area */}
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1.5">
                    Attach Document File (PDF, JPG, PNG) *
                  </label>
                  <div className="relative border-2 border-dashed border-gray-300 dark:border-neutral-700 hover:border-[#F96400] rounded-2xl p-5 text-center transition-colors bg-gray-50/50 dark:bg-neutral-800/30">
                    <input
                      type="file"
                      id="file-upload"
                      accept=".pdf,.png,.jpg,.jpeg,.webp"
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    {selectedFile ? (
                      <div className="space-y-2">
                        {filePreview ? (
                          <img
                            src={filePreview}
                            alt="Document preview"
                            className="w-24 h-24 object-cover mx-auto rounded-xl border border-gray-200 shadow-xs"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 mx-auto flex items-center justify-center">
                            <FileText size={24} />
                          </div>
                        )}
                        <p className="font-bold text-xs text-neutral-800 dark:text-neutral-200 truncate max-w-xs mx-auto">
                          {selectedFile.name}
                        </p>
                        <p className="text-[11px] text-gray-500">
                          {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • Click to replace file
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-1.5 pointer-events-none">
                        <div className="w-10 h-10 rounded-full bg-orange-100 text-[#F96400] mx-auto flex items-center justify-center">
                          <Upload size={18} />
                        </div>
                        <p className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                          Click to browse or drag & drop document
                        </p>
                        <p className="text-[11px] text-gray-400">
                          Supports PDF, JPG, PNG scans up to 15 MB
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setIsUploadModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-bold cursor-pointer hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="btn-3d-circle flex-1 py-2.5 rounded-xl bg-[#F96400] hover:bg-[#E05A00] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isUploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Encrypting & Saving...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={15} />
                        <span>Save & Secure Upload</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ═════════════════════════════════════════════════════════════════════ */}
      {/* MODAL 2: DOCUMENT PREVIEW MODAL                                      */}
      {/* ═════════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {previewDoc && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl max-w-md w-full p-6 border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#F96400] flex items-center justify-center">
                    <FileText size={18} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 dark:text-white leading-tight">
                      {previewDoc.title}
                    </h3>
                    <p className="text-[10px] text-gray-500 font-gujarati">{previewDoc.gujaratiName}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewDoc(null)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {previewDoc.fileData ? (
                <div className="rounded-2xl overflow-hidden border border-gray-200 max-h-60 flex items-center justify-center bg-gray-50">
                  <img src={previewDoc.fileData} alt={previewDoc.title} className="max-h-60 w-auto object-contain" />
                </div>
              ) : (
                <div className="py-8 bg-gray-50 dark:bg-neutral-800 rounded-2xl text-center space-y-2">
                  <FileCheck size={40} className="text-emerald-500 mx-auto" />
                  <p className="text-xs font-bold text-gray-700 dark:text-neutral-300">
                    256-Bit Encrypted DigiLocker Format
                  </p>
                  <p className="text-[11px] text-gray-400 font-mono">{previewDoc.fileName}</p>
                </div>
              )}

              <div className="bg-gray-50 dark:bg-neutral-800/60 p-3 rounded-xl space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Document Number:</span>
                  <span className="font-mono font-bold">{previewDoc.code}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Document Owner:</span>
                  <span className="font-semibold">{previewDoc.ownerName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-emerald-600 font-bold">{previewDoc.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Validity:</span>
                  <span>{previewDoc.expiry || 'Permanent'}</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewDoc(null)}
                  className="flex-1 py-2 rounded-xl border border-gray-200 text-xs font-bold"
                >
                  Close
                </button>
                <a
                  href={previewDoc.fileData || '#'}
                  download={previewDoc.fileName || `${previewDoc.title}.pdf`}
                  onClick={(e) => {
                    if (!previewDoc.fileData) {
                      e.preventDefault();
                      showToast(`Downloaded "${previewDoc.title}"`);
                    }
                  }}
                  className="flex-1 py-2 rounded-xl bg-[#F96400] text-white text-xs font-bold text-center flex items-center justify-center gap-1.5"
                >
                  <Download size={14} />
                  <span>Download File</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
