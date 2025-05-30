// Файл: src/components/CityTabs.jsx

import React, { useState } from "react";
import cityPlaces from "../data/cityPlaces";

const CityTabs = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Усі");

  const categories = ["Усі", ...new Set(cityPlaces.map((place) => place.category || "Інше"))];

  const filteredPlaces = cityPlaces.filter((place) => {
    const matchesSearch = place.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Усі" || place.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        🏙 ТОП-20 локацій у Монпельє
      </h1>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Пошук локації..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 w-full sm:w-1/2 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 focus:outline-none"
        />

        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 w-full sm:w-1/3 rounded-lg border dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlaces.map((place, index) => (
          <div
            key={index}
            className="border dark:border-gray-700 rounded-2xl shadow p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{place.name}</h2>
            <img
              src={place.images[0]}
              alt={place.name}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{place.description}</p>
            <ul className="list-disc list-inside mb-2 text-sm text-gray-600 dark:text-gray-300">
              {place.plan.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
            <a
              href={place.location}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
            >
              📍 Переглянути на мапі
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityTabs;
