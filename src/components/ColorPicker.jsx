import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const THEMES = [
  { id: 'blue', name: 'Blue', color: '#3B82F6' },
  { id: 'indigo', name: 'Indigo', color: '#6366F1' },
  { id: 'purple', name: 'Purple', color: '#8B5CF6' },
  { id: 'pink', name: 'Pink', color: '#EC4899' },
  { id: 'red', name: 'Red', color: '#EF4444' },
  { id: 'orange', name: 'Orange', color: '#F97316' },
  { id: 'amber', name: 'Amber', color: '#F59E0B' },
  { id: 'green', name: 'Green', color: '#10B981' },
  { id: 'teal', name: 'Teal', color: '#14B8A6' },
  { id: 'cyan', name: 'Cyan', color: '#06B6D4' }
];

export default function ColorPicker() {
  const { customThemeColor, setCustomThemeColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Custom Color Palette"
        className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
        style={{ background: 'rgba(124, 58, 237, 0.1)' }}
        title="Customize theme color"
      >
        <Palette size={20} className="text-[var(--primary-color)] dark:text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#1e293b] rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-4 z-50">
          <div className="px-4 pb-3 mb-3 border-b border-gray-100 dark:border-gray-700">
            <span className="text-sm font-bold text-gray-900 dark:text-white block">Theme Color</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">Choose your favorite accent</span>
          </div>
          
          <div className="px-4">
            <div className="grid grid-cols-5 gap-3">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setCustomThemeColor(theme.id)}
                  title={theme.name}
                  aria-label={`Select ${theme.name} theme`}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-sm ${customThemeColor === theme.id ? 'ring-2 ring-offset-2 ring-offset-white dark:ring-offset-[#1e293b]' : ''}`}
                  style={{ backgroundColor: theme.color, ringColor: theme.color }}
                >
                  {customThemeColor === theme.id && <Check size={14} color="white" strokeWidth={3} />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
