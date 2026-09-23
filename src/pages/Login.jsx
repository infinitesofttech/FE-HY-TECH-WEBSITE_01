import React, { useState } from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Lock, User, Eye, EyeOff, Loader2 } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';

export default function Login() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const from = location.state?.from?.pathname || '/dashboard';

  // Redirect to dashboard if already logged in
  if (isLoggedIn) {
    return <Navigate to={from} replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!id || !password) {
      setError('Please enter both Login ID / Mobile Number and Password.');
      return;
    }

    setIsLoading(true);
    try {
      await login(id, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    // Quick demonstration mock login for social buttons
    setIsLoading(true);
    setTimeout(() => {
      login(`${provider}_User`, 'demo123')
        .then(() => navigate(from, { replace: true }))
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }, 400);
  };

  return (
    <AuthLayout
      title="Log In"
      subtitle="Welcome back !!!"
      mode="login"
      footerText="Don't have an account yet?"
      footerLinkText="Sign up for free"
      footerLinkTo="/signup"
      onSocialLogin={handleSocialLogin}
    >
      {error && (
        <div className="p-3.5 bg-red-50 text-red-600 rounded-2xl text-xs font-semibold border border-red-100 animate-in fade-in">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email / Mobile / Client ID */}
        <div>
          <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="loginId">
            Email or Mobile Number
          </label>
          <div className="relative">
            <input
              id="loginId"
              type="text"
              placeholder="login@gmail.com or Mobile"
              className="w-full px-4 py-3 bg-[#DCEEF8]/80 focus:bg-white text-sm font-medium rounded-2xl border border-transparent focus:border-[#F96400]/40 focus:ring-2 focus:ring-[#F96400]/10 text-gray-800 placeholder-gray-400 transition-all outline-none"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
        </div>

        {/* Password with Forgot Password link in header */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-[#171717]" htmlFor="password">
              Password
            </label>
            <Link
              to="/forgot-password"
              className="text-[11px] font-semibold text-gray-500 hover:text-[#F96400] transition-colors"
            >
              Forgot Password ?
            </Link>
          </div>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••••••"
              className="w-full pl-4 pr-11 py-3 bg-[#DCEEF8]/80 focus:bg-white text-sm font-medium rounded-2xl border border-transparent focus:border-[#F96400]/40 focus:ring-2 focus:ring-[#F96400]/10 text-gray-800 placeholder-gray-400 transition-all outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

        {/* Login Button with Pill Aesthetic */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-36 py-3 px-6 rounded-full bg-gradient-to-r from-[#EE7B8B] via-[#E8677B] to-[#F96400] hover:opacity-95 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 active:scale-95 transition-all cursor-pointer"
          >
            {isLoading ? (
              <>
                <Loader2 size={15} className="animate-spin" />
                <span>WAIT...</span>
              </>
            ) : (
              <>
                <span>LOGIN</span>
                <ArrowRight size={14} />
              </>
            )}
          </button>
        </div>
      </form>
    </AuthLayout>
  );
}
