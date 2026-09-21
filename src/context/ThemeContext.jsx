import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('themeMode') || 'light';
  });
  
  const [customThemeColor, setCustomThemeColor] = useState(() => {
    return localStorage.getItem('customThemeColor') || 'purple';
  });

  useEffect(() => {
    // Apply dark mode
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('themeMode', mode);
  }, [mode]);

  useEffect(() => {
    // Apply theme color
    const root = document.documentElement;
    
    // Remove any existing theme- classes
    const classes = Array.from(root.classList);
    classes.forEach(c => {
      if (c.startsWith('theme-')) {
        root.classList.remove(c);
      }
    });

    if (customThemeColor !== 'default') {
      root.classList.add(`theme-${customThemeColor}`);
    }
    localStorage.setItem('customThemeColor', customThemeColor);
  }, [customThemeColor]);

  const toggleMode = () => setMode(m => m === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ mode, setMode, toggleMode, customThemeColor, setCustomThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
