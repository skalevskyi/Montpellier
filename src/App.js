// Файл: src/App.jsx

import React, { useState } from 'react';
import CityTabs from './components/CityTabs';
import DayTrips from './components/DayTrips';

export default function App() {
  const [section, setSection] = useState('city');

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSection('city')}
          className={`px-4 py-2 rounded-lg transition ${
            section === 'city' ? 'bg-blue-500 text-white font-bold' : 'bg-gray-100 text-gray-700'
          }`}
        >
          🏙 У місті
        </button>
        <button
          onClick={() => setSection('trips')}
          className={`px-4 py-2 rounded-lg transition ${
            section === 'trips' ? 'bg-blue-500 text-white font-bold' : 'bg-gray-100 text-gray-700'
          }`}
        >
          🚗 Одноденні поїздки
        </button>
      </div>
      {section === 'city' ? <CityTabs /> : <DayTrips />}
    </div>
  );
}
