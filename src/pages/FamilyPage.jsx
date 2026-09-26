import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, UserCheck, ShieldCheck, Plus, FileText, Download, 
  CheckCircle2, AlertCircle, Sparkles, MessageCircle, 
  ExternalLink, QrCode, Lock, ChevronRight, X
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SITE_CONFIG } from '../config/siteConfig';

const INITIAL_MEMBERS = [
  {
    id: 'MEM-01',
    name: 'Rameshchandra K. Patel',
    relation: 'Head of Family',
    age: 48,
    aadhaarStatus: 'Verified',
    ayushmanStatus: 'Active (₹10L)',
    panStatus: 'Linked',
    avatarBg: 'bg-blue-600',
  },
  {
    id: 'MEM-02',
    name: 'Bhavnaben R. Patel',
    relation: 'Spouse',
    age: 44,
    aadhaarStatus: 'Verified',
    ayushmanStatus: 'Active (₹10L)',
    panStatus: 'Not Required',
    avatarBg: 'bg-emerald-600',
  },
  {
    id: 'MEM-03',
    name: 'Rahul R. Patel',
    relation: 'Son (Student)',
    age: 19,
    aadhaarStatus: 'Verified',
    ayushmanStatus: 'Active',
    scholarshipStatus: 'Digital Gujarat Active',
    avatarBg: 'bg-orange-500',
  },
  {
    id: 'MEM-04',
    name: 'Priya R. Patel',
    relation: 'Daughter (Student)',
    age: 15,
    aadhaarStatus: 'Verified',
    ayushmanStatus: 'Active',
    schoolStatus: 'Bonafide Linked',
    avatarBg: 'bg-purple-600',
  },
];

const INITIAL_DOCUMENTS = [
  { id: 'DOC-01', title: 'NFSA Priority Ration Card', code: 'RC-GUJ-8492019', status: 'Verified', updated: 'Jan 2026' },
  { id: 'DOC-02', title: 'Income Certificate (Mamlatdar Office)', code: 'INC-2026-9912', status: 'Valid (Expires Mar 2027)', updated: 'Apr 2026' },
  { id: 'DOC-03', title: 'DGVCL Light Bill (Residential Proof)', code: 'EB-DHP-44810', status: 'Current (Valid)', updated: 'Aug 2026' },
  { id: 'DOC-04', title: 'Caste Certificate (SEBC / NCL)', code: 'NCL-VLS-10294', status: 'Active (Form 4)', updated: 'May 2026' },
];

export default function FamilyPage() {
  const { user } = useAuth();
  const [members, setMembers] = useState(INITIAL_MEMBERS);
  const [documents, setDocuments] = useState(INITIAL_DOCUMENTS);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // New member form
  const [newName, setNewName] = useState('');
  const [newRelation, setNewRelation] = useState('Child');
  const [newAge, setNewAge] = useState('');

  const familyId = `HY-DHP-${(user?.id || '84920').slice(-5)}`;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleAddMember = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newMember = {
      id: `MEM-${String(members.length + 1).padStart(2, '0')}`,
      name: newName.trim(),
      relation: newRelation,
      age: parseInt(newAge) || 20,
      aadhaarStatus: 'Pending Link',
      ayushmanStatus: 'Eligible',
      avatarBg: 'bg-indigo-600',
    };

    setMembers([...members, newMember]);
    setNewName('');
    setNewAge('');
    setIsAddModalOpen(false);
    showToast(`Family member "${newMember.name}" registered successfully.`);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-neutral-950 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Floating Toast */}
        <AnimatePresence>
          {toastMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 right-6 z-50 px-4 py-3 bg-emerald-600 text-white rounded-2xl shadow-xl flex items-center gap-2 text-sm font-bold"
            >
              <CheckCircle2 size={18} />
              <span>{toastMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ─── Hero Overview Card ─── */}
        <div className="bg-[#171717] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F96400]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F96400]/20 text-[#F96400] border border-[#F96400]/30">
                <ShieldCheck size={14} /> Official Citizen Vault
              </span>
              <h1 className="text-2xl sm:text-4xl font-black">
                {user?.name || 'Patel'} Family Document Repository
              </h1>
              <p className="text-sm text-neutral-400">
                Centralized profile managing welfare schemes, KYC verification & government ID links for all household dependents.
              </p>
            </div>

            {/* Smart ID Badge */}
            <div className="bg-neutral-900/90 border border-neutral-700/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 flex-shrink-0 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-orange-500/20 text-[#F96400] flex items-center justify-center">
                <QrCode size={26} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Family Smart ID</p>
                <p className="text-lg sm:text-xl font-mono font-black text-white">{familyId}</p>
                <p className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
                  <CheckCircle2 size={11} /> 256-bit DigiLocker Vault
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Grid: Family Members & Document Locker ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Column: Family Members Directory (2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                  <Users className="text-[#F96400]" size={22} />
                  <span>Household Members ({members.length})</span>
                </h2>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Verified dependents linked under Family ID for quick form applications.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-[#F96400] hover:bg-[#E05A00] text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Plus size={15} />
                <span>Add Member</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {members.map((m) => (
                <div
                  key={m.id}
                  className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 shadow-xs hover:border-[#F96400]/40 transition-all space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl ${m.avatarBg} text-white flex items-center justify-center font-bold text-base shadow-sm`}>
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm leading-snug">
                        {m.name}
                      </h3>
                      <p className="text-xs text-neutral-500">
                        {m.relation} • Age {m.age}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-semibold border border-emerald-200/50">
                      Aadhaar: {m.aadhaarStatus}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-semibold border border-blue-200/50">
                      Ayushman: {m.ayushmanStatus}
                    </span>
                    {m.scholarshipStatus && (
                      <span className="px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 font-semibold border border-purple-200/50">
                        {m.scholarshipStatus}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Encrypted Document Locker (1 col) */}
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Lock className="text-[#F96400]" size={20} />
                <span>Document Locker</span>
              </h2>
              <p className="text-xs text-neutral-500 mt-0.5">
                Zero-redundancy digital copies stored securely.
              </p>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800 overflow-hidden shadow-xs">
              {documents.map((doc) => (
                <div key={doc.id} className="p-4 hover:bg-neutral-50/70 dark:hover:bg-neutral-800/40 transition-colors">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-neutral-900 dark:text-neutral-100">
                        {doc.title}
                      </h4>
                      <p className="font-mono text-[11px] text-neutral-400 mt-0.5">{doc.code}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex-shrink-0">
                      {doc.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Offline Assistance Card */}
            <div className="p-5 rounded-2xl bg-orange-50/60 dark:bg-orange-950/20 border border-orange-200/60 dark:border-orange-900/40 space-y-3">
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#F96400] flex items-center gap-1.5">
                <Sparkles size={14} /> Update Family Documents
              </h4>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                Need to add a newborn child, update surname after marriage, or renew income certificates? Bring documents to HY-TECH Dharampur.
              </p>
              <a
                href={SITE_CONFIG.getWhatsAppUrl(`Hello HY-TECH Hub, I want to update documents for Family ID: ${familyId}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 bg-[#F96400] hover:bg-[#E05A00] text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <MessageCircle size={14} />
                <span>Contact Desk on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* ─── Add Member Modal ─── */}
      <AnimatePresence>
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl max-w-md w-full p-6 border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100 dark:border-neutral-800">
                <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Add Family Member</h3>
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1 rounded-lg text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleAddMember} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                    Full Name (As in Aadhaar)
                  </label>
                  <input
                    type="text"
                    required
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Ankit R. Patel"
                    className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      Relationship
                    </label>
                    <select
                      value={newRelation}
                      onChange={(e) => setNewRelation(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]"
                    >
                      <option value="Spouse">Spouse</option>
                      <option value="Son (Student)">Son (Student)</option>
                      <option value="Daughter (Student)">Daughter (Student)</option>
                      <option value="Parent">Parent</option>
                      <option value="Other Dependent">Other Dependent</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-700 dark:text-neutral-300 mb-1">
                      Age
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      max="120"
                      value={newAge}
                      onChange={(e) => setNewAge(e.target.value)}
                      placeholder="e.g. 21"
                      className="w-full px-3 py-2 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#F96400]"
                    />
                  </div>
                </div>

                <div className="pt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="flex-1 py-2 rounded-xl border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded-xl bg-[#F96400] hover:bg-[#E05A00] text-white text-xs font-bold transition-colors shadow-sm"
                  >
                    Save Member
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
