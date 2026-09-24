import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetails from './pages/ServiceDetails';
import Dashboard from './pages/Dashboard';
import Placeholder from './pages/Placeholder';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import SmartFamilyPage from './pages/SmartFamilyPage';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';
import Preloader from './components/Preloader';

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-[var(--bg-base)] text-[var(--text-main)] transition-colors duration-300">
      <Preloader />
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/smart-family" element={<SmartFamilyPage />} />
          <Route path="/smartfamily" element={<Navigate to="/smart-family" replace />} />
          <Route path="/family-id" element={<Navigate to="/smart-family" replace />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          
          <Route path="/about" element={<About />} />
          
          <Route path="/blog" element={<Placeholder title="Blog & Insights" />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgotpassword" element={<Navigate to="/forgot-password" replace />} />
          <Route path="/signin" element={<Navigate to="/login" replace />} />

          {/* Protected Routes */}
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/family" element={<ProtectedRoute><Placeholder title="My Family" /></ProtectedRoute>} />
          <Route path="/rewards" element={<ProtectedRoute><Placeholder title="Reward Wallet" /></ProtectedRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

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
