import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Eye, EyeOff, Loader2 } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';

export default function Signup() {
  const { signup, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Redirect to dashboard if already logged in
  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.mobile || !formData.password) {
      setError('Please fill in your Name, Mobile Number, and Password.');
      return;
    }

    if (formData.mobile.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsLoading(true);
    try {
      await signup(formData);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    setIsLoading(true);
    setTimeout(() => {
      signup({ name: `${provider} Citizen`, mobile: '9876543210', password: 'demo' })
        .then(() => navigate('/dashboard', { replace: true }))
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }, 400);
  };

  return (
    <AuthLayout
      title="Sign Up"
      subtitle="Start your journey !!!"
      mode="signup"
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkTo="/login"
      onSocialLogin={handleSocialLogin}
    >
      {error && (
        <div className="p-3.5 bg-red-50 text-red-600 rounded-2xl text-xs font-semibold border border-red-100 animate-in fade-in">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Rajesh Patel"
            className="w-full px-4 py-3 bg-[#DCEEF8]/80 focus:bg-white text-sm font-medium rounded-2xl border border-transparent focus:border-[#F96400]/40 focus:ring-2 focus:ring-[#F96400]/10 text-gray-800 placeholder-gray-400 transition-all outline-none"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="mobile">
            Mobile Number (Family ID Key) *
          </label>
          <input
            id="mobile"
            name="mobile"
            type="tel"
            placeholder="98765 43210"
            className="w-full px-4 py-3 bg-[#DCEEF8]/80 focus:bg-white text-sm font-medium rounded-2xl border border-transparent focus:border-[#F96400]/40 focus:ring-2 focus:ring-[#F96400]/10 text-gray-800 placeholder-gray-400 transition-all outline-none"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="email">
            Email Address (Optional)
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="name@gmail.com"
            className="w-full px-4 py-3 bg-[#DCEEF8]/80 focus:bg-white text-sm font-medium rounded-2xl border border-transparent focus:border-[#F96400]/40 focus:ring-2 focus:ring-[#F96400]/10 text-gray-800 placeholder-gray-400 transition-all outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="password">
            Create Password *
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              className="w-full pl-4 pr-11 py-3 bg-[#DCEEF8]/80 focus:bg-white text-sm font-medium rounded-2xl border border-transparent focus:border-[#F96400]/40 focus:ring-2 focus:ring-[#F96400]/10 text-gray-800 placeholder-gray-400 transition-all outline-none"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer p-1"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-44 py-3 px-6 rounded-full bg-gradient-to-r from-[#EE7B8B] via-[#E8677B] to-[#F96400] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 active:scale-95 transition-all cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                <span>CREATING...</span>
              </>
            ) : (
              <>
                <span>SIGN UP</span>
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
