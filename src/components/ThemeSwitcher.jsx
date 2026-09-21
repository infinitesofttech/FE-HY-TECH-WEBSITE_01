import React, { useState, useRef, useEffect } from 'react';
import { Moon, Sun, Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const THEMES = [
  { id: 'default', name: 'Purple (Default)', color: '#7C3AED' },
  { id: 'ocean', name: 'Ocean Blue', color: '#2563eb' },
  { id: 'emerald', name: 'Emerald Green', color: '#059669' },
  { id: 'sunset', name: 'Sunset Orange', color: '#ea580c' },
  { id: 'rose', name: 'Rose Pink', color: '#e11d48' },
  { id: 'golden', name: 'Golden Yellow', color: '#ca8a04' },
  { id: 'cyan', name: 'Cyan Breeze', color: '#0891b2' },
  { id: 'indigo', name: 'Indigo Night', color: '#4f46e5' },
  { id: 'crimson', name: 'Crimson Red', color: '#dc2626' },
  { id: 'teal', name: 'Teal Forest', color: '#0d9488' }
];

export default function ThemeSwitcher() {
  const { mode, toggleMode, themeColor, setThemeColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-gray-700"
        style={{ background: 'rgba(124, 58, 237, 0.1)' }}
        title="Theme Settings"
      >
        <Palette size={20} className="text-[#1E1B2E] dark:text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-3 z-50">
          
          {/* Dark/Light Mode Toggle */}
          <div className="px-4 pb-3 mb-3 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
            <span className="text-sm font-bold text-gray-900 dark:text-white">Appearance</span>
            <button
              onClick={toggleMode}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium text-gray-800 dark:text-gray-200"
            >
              {mode === 'dark' ? <Moon size={16} /> : <Sun size={16} />}
              {mode === 'dark' ? 'Dark' : 'Light'}
            </button>
          </div>

          {/* Theme Colors */}
          <div className="px-4">
            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-3">Theme Color</span>
            <div className="grid grid-cols-5 gap-2">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setThemeColor(theme.id)}
                  title={theme.name}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm"
                  style={{ backgroundColor: theme.color }}
                >
                  {themeColor === theme.id && <Check size={14} color="white" strokeWidth={3} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
