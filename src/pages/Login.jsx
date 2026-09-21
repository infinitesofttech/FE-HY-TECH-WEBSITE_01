import React, { useState } from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Lock, User, ShieldCheck } from 'lucide-react';

export default function Login() {
  const { login, isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
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
      setError('Please enter both Login ID and Password.');
      return;
    }

    setIsLoading(true);
    try {
      await login(id, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-16 px-4 bg-[#FAFAFA]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <div className="max-w-md w-full bg-white rounded-3xl shadow-sm border border-gray-200 p-8 relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-4">
            <img src="/hy-tech-logo.png" alt="HY-Tech Online Hub" className="h-12 w-auto mx-auto object-contain" />
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#FFF5EE] text-[#F96400] mb-3">
            <ShieldCheck size={13} /> Client Portal
          </span>
          <h2 className="text-2xl font-black text-[#000000]">Welcome Back</h2>
          <p className="text-xs text-gray-500 mt-1">Log in to track your document applications.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-xs font-medium border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="loginId">
              Mobile Number / Client ID
            </label>
            <div className="relative">
              <User size={16} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="loginId"
                type="text"
                placeholder="Enter your registered mobile number"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-all text-[#171717]"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#171717] mb-1.5" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Lock size={16} className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-black transition-all text-[#171717]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-xs pt-1">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded text-[#F96400] focus:ring-[#F96400] border-gray-300" />
              <span className="text-gray-600 font-medium">Remember me</span>
            </label>
            <a href="#" className="font-bold text-[#F96400] hover:underline">Forgot Password?</a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#F96400] hover:bg-[#E05A00] text-white rounded-xl font-bold text-sm transition-all shadow-md shadow-orange-500/20 disabled:opacity-70 mt-2"
          >
            {isLoading ? 'Logging In...' : 'Log In to Account'} <ArrowRight size={16} />
          </button>
        </form>

        <p className="text-center text-xs text-gray-600 font-medium mt-8 pt-6 border-t border-gray-100">
          New to HY-Tech?{' '}
          <Link to="/signup" className="text-[#F96400] font-bold hover:underline">
            Register for Free
          </Link>
        </p>
      </div>
    </div>
  );
}
