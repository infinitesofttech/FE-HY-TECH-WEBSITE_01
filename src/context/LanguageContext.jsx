import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Attempt to load from localStorage first
    const savedLang = localStorage.getItem('app_language');
    return savedLang === 'gu' ? 'gu' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('app_language', language);
    // Add language attribute to document for accessibility and potential CSS targeting
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'gu' : 'en'));
  };

  const setLanguageDirect = (lang) => {
    if (lang === 'en' || lang === 'gu') {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: setLanguageDirect }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
