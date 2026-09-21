import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { mode, toggleMode } = useTheme();

  return (
    <button
      onClick={toggleMode}
      aria-label="Toggle Dark Mode"
      className="w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
      style={{ background: 'rgba(124, 58, 237, 0.1)' }}
      title={mode === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {mode === 'dark' ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-[#1E1B2E]" />
      )}
    </button>
  );
}
