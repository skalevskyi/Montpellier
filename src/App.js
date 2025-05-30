// Файл: src/App.js

import React, { useState, useEffect } from 'react';
import CityTabs from './components/CityTabs';
import DayTrips from './components/DayTrips';

const ThemeToggle = () => {
  const toggleTheme = () => {
    const root = window.document.documentElement;
    root.classList.toggle('dark');
    localStorage.setItem(
      'theme',
      root.classList.contains('dark') ? 'dark' : 'light'
    );
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-4 right-4 px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white shadow-md"
    >
      🌓 
    </button>
  );
};

export default function App() {
  const [section, setSection] = useState('city');

  return (
    <div className="p-4 relative min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <ThemeToggle />

      <div className="flex justify-center gap-4 mb-6">
        <button onClick={() => setSection('city')} className={section === 'city' ? 'font-bold' : ''}>
          🏙 У місті
        </button>
        <button onClick={() => setSection('trips')} className={section === 'trips' ? 'font-bold' : ''}>
          🚗 Одноденні поїздки
        </button>
      </div>

      {section === 'city' ? <CityTabs /> : <DayTrips />}
    </div>
  );
}
