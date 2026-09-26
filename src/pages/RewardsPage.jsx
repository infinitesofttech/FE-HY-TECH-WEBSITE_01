import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, Gift, Sparkles, QrCode, ArrowUpRight, ArrowDownLeft, 
  CheckCircle2, Copy, Check, ShieldCheck, Tag, ChevronRight, MessageCircle 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { SITE_CONFIG } from '../config/siteConfig';

const COUPONS = [
  {
    id: 'CPN-PVC',
    title: 'Free PVC Smart Card Print',
    desc: 'Instant PVC plastic printing for Aadhaar, PAN, or Ayushman card.',
    cost: 100,
    worth: '₹50 Value',
    tag: 'Popular',
    code: 'HY-PVC-FREE',
  },
  {
    id: 'CPN-PRT',
    title: '₹50 Off Xerox & Lamination',
    desc: 'Valid on bulk xerox, color scan, spiral binding, and laminations.',
    cost: 100,
    worth: '₹50 Discount',
    tag: 'Utility',
    code: 'HY-DOC-50',
  },
  {
    id: 'CPN-EDU',
    title: '₹200 Off CCC / Tally Course',
    desc: 'Direct fee deduction upon enrolling in any certified computer course.',
    cost: 400,
    worth: '₹200 Fee Rebate',
    tag: 'Education',
    code: 'HY-EDU-200',
  },
  {
    id: 'CPN-SRV',
    title: 'Zero Convenience Charge',
    desc: '100% waiver on portal facilitation fee for any one online application.',
    cost: 80,
    worth: '₹40 Value',
    tag: 'Fast Track',
    code: 'HY-WAIVE-ZERO',
  },
];

const HISTORY = [
  { id: 1, title: 'Aadhaar Mobile Link Form', date: 'Sep 20, 2026', points: '+50 pts', type: 'earn' },
  { id: 2, title: 'Smart Family ID Registration', date: 'Sep 10, 2026', points: '+100 pts', type: 'earn' },
  { id: 3, title: 'Digital Gujarat Scholarship', date: 'Aug 29, 2026', points: '+50 pts', type: 'earn' },
  { id: 4, title: 'Redeemed PVC Print Voucher', date: 'Aug 12, 2026', points: '-100 pts', type: 'redeem' },
  { id: 5, title: 'CCC Computer Course Enrollment', date: 'Jul 15, 2026', points: '+200 pts', type: 'earn' },
];

export default function RewardsPage() {
  const { user } = useAuth();
  const [points, setPoints] = useState(480);
  const [copiedCode, setCopiedCode] = useState(null);
  const [redeemedCoupon, setRedeemedCoupon] = useState(null);

  const memberId = `HY-DHP-${(user?.id || '84920').slice(-5)}`;
  const cashValue = (points / 2).toFixed(2);

  const handleRedeem = (coupon) => {
    if (points < coupon.cost) {
      alert(`You need ${coupon.cost} points for this voucher. Current balance: ${points} points.`);
      return;
    }
    setPoints((p) => p - coupon.cost);
    setRedeemedCoupon(coupon);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-neutral-950 py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* ─── Hero Overview: Digital Membership Card ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left: Futuristic Digital Loyalty Pass (2 cols) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1C1827] via-[#151221] to-[#0A0713] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl border border-white/10 flex flex-col justify-between min-h-[280px]">
            {/* Ambient Back Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F96400]/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

            {/* Pass Header */}
            <div className="relative z-10 flex items-start justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                  <Award size={13} /> Gold Citizen Pass
                </span>
                <h1 className="text-2xl sm:text-3xl font-black mt-2">
                  HY-TECH Citizen Rewards
                </h1>
                <p className="text-xs sm:text-sm text-neutral-400">
                  Member: <span className="text-white font-bold">{user?.name || 'Patel Family'}</span> • {memberId}
                </p>
              </div>

              {/* QR Verification */}
              <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-2xl border border-white/15 text-center flex-shrink-0">
                <QrCode size={40} className="text-white mx-auto" />
                <span className="text-[9px] font-mono uppercase tracking-wider text-neutral-300 block mt-1">Dharampur Desk</span>
              </div>
            </div>

            {/* Pass Points Display */}
            <div className="relative z-10 pt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-neutral-400">Available Reward Balance</p>
                <div className="flex items-baseline gap-3 mt-1">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{points}</span>
                  <span className="text-base sm:text-lg font-bold text-amber-400">Points</span>
                  <span className="text-xs px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                    ≈ ₹{cashValue} Credit
                  </span>
                </div>
              </div>

              <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Points never expire for verified Family IDs</span>
              </div>
            </div>
          </div>

          {/* Right: How to Earn Points Summary (1 col) */}
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-7 border border-neutral-200/90 dark:border-neutral-800 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-base font-extrabold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
                <Sparkles className="text-[#F96400]" size={18} />
                <span>Earn More Points</span>
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Every service at Dharampur center rewards your loyalty.
              </p>

              <div className="mt-4 space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60">
                  <span className="text-neutral-700 dark:text-neutral-300">File Govt Form / KYC</span>
                  <span className="font-bold text-[#F96400]">+50 pts</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60">
                  <span className="text-neutral-700 dark:text-neutral-300">Smart Family ID Link</span>
                  <span className="font-bold text-[#F96400]">+100 pts</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60">
                  <span className="text-neutral-700 dark:text-neutral-300">CCC / Tally Enrollment</span>
                  <span className="font-bold text-[#F96400]">+200 pts</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 dark:bg-neutral-800/60">
                  <span className="text-neutral-700 dark:text-neutral-300">Refer a Neighbor</span>
                  <span className="font-bold text-[#F96400]">+150 pts</span>
                </div>
              </div>
            </div>

            <a
              href={SITE_CONFIG.getWhatsAppUrl(`Hello HY-TECH Hub, I want to check points for Family ID: ${memberId}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 bg-orange-50 dark:bg-orange-950/40 text-[#F96400] hover:bg-orange-100 dark:hover:bg-orange-900/50 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
            >
              <MessageCircle size={14} />
              <span>Inquire at Desk</span>
            </a>
          </div>

        </div>

        {/* ─── Redeem Vouchers Catalog ─── */}
        <div className="space-y-4">
          <div>
            <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Gift className="text-[#F96400]" size={22} />
              <span>Redeem Points for Discounts & Services</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Select any voucher below to apply instant discount at HY-TECH counter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COUPONS.map((cpn) => {
              const canAfford = points >= cpn.cost;
              return (
                <div
                  key={cpn.id}
                  className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 p-5 shadow-xs hover:border-[#F96400]/40 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-orange-50 dark:bg-orange-950/40 text-[#F96400] border border-orange-200/40">
                        {cpn.tag}
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-400">
                        {cpn.cost} pts
                      </span>
                    </div>

                    <h4 className="font-extrabold text-sm text-neutral-900 dark:text-neutral-100">
                      {cpn.title}
                    </h4>
                    <p className="text-xs text-neutral-500 leading-relaxed">
                      {cpn.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {cpn.worth}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleRedeem(cpn)}
                      disabled={!canAfford}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        canAfford
                          ? 'bg-[#F96400] hover:bg-[#E05A00] text-white shadow-sm'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
                      }`}
                    >
                      {canAfford ? 'Redeem' : 'Need Points'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Points Activity Ledger ─── */}
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <Tag className="text-[#F96400]" size={20} />
            <span>Recent Points Activity</span>
          </h2>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/90 dark:border-neutral-800 divide-y divide-neutral-100 dark:divide-neutral-800 overflow-hidden shadow-xs">
            {HISTORY.map((item) => (
              <div key={item.id} className="p-4 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                    item.type === 'earn'
                      ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400'
                      : 'bg-orange-50 text-[#F96400] dark:bg-orange-950/40'
                  }`}>
                    {item.type === 'earn' ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                  </div>
                  <div>
                    <p className="font-bold text-neutral-900 dark:text-neutral-100">{item.title}</p>
                    <p className="text-[11px] text-neutral-400 mt-0.5">{item.date}</p>
                  </div>
                </div>

                <span className={`font-mono font-bold text-sm ${
                  item.type === 'earn' ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-500'
                }`}>
                  {item.points}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ─── Voucher Redeemed Modal ─── */}
      <AnimatePresence>
        {redeemedCoupon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white dark:bg-neutral-900 rounded-3xl max-w-sm w-full p-6 text-center border border-neutral-200 dark:border-neutral-800 shadow-2xl space-y-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-lg font-black text-neutral-900 dark:text-white">
                Voucher Redeemed!
              </h3>
              <p className="text-xs text-neutral-500">
                Show this code or coupon at the HY-TECH Dharampur counter to claim your discount.
              </p>

              <div className="p-3 bg-neutral-100 dark:bg-neutral-800 rounded-xl flex items-center justify-between font-mono font-bold text-base text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700">
                <span>{redeemedCoupon.code}</span>
                <button
                  type="button"
                  onClick={() => copyToClipboard(redeemedCoupon.code)}
                  className="p-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                >
                  {copiedCode === redeemedCoupon.code ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setRedeemedCoupon(null)}
                className="w-full py-2.5 bg-[#F96400] text-white rounded-xl text-xs font-bold hover:bg-[#E05A00] transition-colors"
              >
                Close & Done
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
