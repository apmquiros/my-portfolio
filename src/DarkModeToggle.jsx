import React, { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setIsDark(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="
        px-4 py-2 rounded-full font-semibold
        bg-brand-light text-brand-dark
        border border-brand-dark
        hover:bg-brand-highlight hover:text-brand-light
        dark:bg-brand-dark dark:text-brand-light dark:border-brand-light
        dark:hover:bg-brand-highlight dark:hover:text-brand-light
        transition-colors duration-300
      "
    >
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}