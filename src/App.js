import React, { useState } from 'react';
import CityTabs from './CityTabs';
import DayTrips from './DayTrips';

export default function App() {
  const [section, setSection] = useState('city');

  return (
    <div className="p-4">
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