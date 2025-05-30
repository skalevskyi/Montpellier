// Файл: src/components/DayTrips.jsx

import React, { useState } from "react";
import dayTrips from "../data/dayTrips";

const DayTrips = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Усі");

  const categories = ["Усі", ...new Set(dayTrips.map((trip) => trip.category || "Інше"))];

  const filteredTrips = dayTrips.filter((trip) => {
    const matchesSearch = trip.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "Усі" || trip.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        🚗 ТОП-20 одноденних поїздок з Монпельє
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
        {filteredTrips.map((trip, index) => (
          <div
            key={index}
            className="border dark:border-gray-700 rounded-2xl shadow p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{trip.name}</h2>
            <img
              src={trip.images[0]}
              alt={trip.name}
              className="w-full h-48 object-cover rounded-lg mb-2"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{trip.description}</p>
            <p className="text-xs italic text-gray-500 dark:text-gray-400 mb-2">{trip.distance}</p>
            <ul className="list-disc list-inside mb-2 text-sm text-gray-600 dark:text-gray-300">
              {trip.plan.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
            <a
              href={trip.location}
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

export default DayTrips;
