import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Loader2, KeyRound } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';

export default function ForgotPassword() {
  const [identifier, setIdentifier] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!identifier) {
      setError('Please enter your registered mobile number or email.');
      return;
    }

    setIsLoading(true);
    // Simulate OTP / Reset dispatch
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <AuthLayout
      title="Password Recovery"
      subtitle="Trouble logging in? !!!"
      mode="forgot"
      footerText="Remember your password?"
      footerLinkText="Back to log in"
      footerLinkTo="/login"
    >
      {isSubmitted ? (
        <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-3xl text-center space-y-3 animate-in zoom-in-95">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
            <CheckCircle2 size={24} />
          </div>
          <h3 className="font-bold text-[#171717] text-base">OTP Code Dispatched</h3>
          <p className="text-xs text-gray-600 leading-relaxed font-medium">
            We have sent an authentication verification code to <strong>{identifier}</strong>. Check your WhatsApp or SMS to set a new password.
          </p>
          <div className="pt-2">
            <Link
              to="/login"
              className="btn-3d-circle inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-bold bg-[#171717] hover:bg-[#F96400] text-white transition-all shadow-md"
            >
              <span>Proceed to Log In</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      ) : (
        <>
          {error && (
            <div className="p-3.5 bg-red-50 text-red-600 rounded-2xl text-xs font-semibold border border-red-100 animate-in fade-in">
              {error}
            </div>
          )}

          <p className="text-xs text-gray-500 font-medium leading-relaxed">
            Enter your registered Mobile Number or Email linked to your Family ID. We’ll send an instant OTP verification link.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="identifier">
                Registered Mobile or Email
              </label>
              <input
                id="identifier"
                type="text"
                placeholder="e.g. 9876543210 or name@gmail.com"
                className="w-full px-4 py-3 bg-[#DCEEF8]/80 focus:bg-white text-sm font-medium rounded-2xl border border-transparent focus:border-[#F96400]/40 focus:ring-2 focus:ring-[#F96400]/10 text-gray-800 placeholder-gray-400 transition-all outline-none"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-48 py-3 px-6 rounded-full bg-gradient-to-r from-[#EE7B8B] via-[#E8677B] to-[#F96400] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 active:scale-95 transition-all cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <span>RESET PASSWORD</span>
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </div>
          </form>
        </>
      )}
    </AuthLayout>
  );
}
