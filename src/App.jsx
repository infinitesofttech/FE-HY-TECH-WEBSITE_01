import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import Preloader from './components/Preloader';

// ─── Code-Split Route Components (React.lazy) ─────────────────────────
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ServiceDetails = lazy(() => import('./pages/ServiceDetails'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const SmartFamilyPage = lazy(() => import('./pages/SmartFamilyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const FamilyPage = lazy(() => import('./pages/FamilyPage'));
const RewardsPage = lazy(() => import('./pages/RewardsPage'));

function RouteLoadingFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3">
      <div className="w-10 h-10 rounded-full border-3 border-orange-200 border-t-[#F96400] animate-spin" />
      <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
        Loading HY-TECH...
      </span>
    </div>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[var(--bg-base)] text-[var(--text-main)] transition-colors duration-300">
      <Preloader />
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smart-family" element={<SmartFamilyPage />} />
            <Route path="/smart-member" element={<SmartFamilyPage />} />
            <Route path="/smartfamily" element={<Navigate to="/smart-member" replace />} />
            <Route path="/smartmember" element={<Navigate to="/smart-member" replace />} />
            <Route path="/family-id" element={<Navigate to="/smart-member" replace />} />
            <Route path="/member-id" element={<Navigate to="/smart-member" replace />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetails />} />
            
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/forgotpassword" element={<Navigate to="/forgot-password" replace />} />
            <Route path="/signin" element={<Navigate to="/login" replace />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/family" element={<ProtectedRoute><FamilyPage /></ProtectedRoute>} />
            <Route path="/rewards" element={<ProtectedRoute><RewardsPage /></ProtectedRoute>} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <ScrollToTop />
            <AppContent />
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
