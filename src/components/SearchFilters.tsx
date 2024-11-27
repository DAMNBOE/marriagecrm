import React from 'react';

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Age Range</label>
          <div className="mt-1 flex space-x-4">
            <input
              type="number"
              placeholder="From"
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              onChange={(e) => onFilterChange({ ageFrom: e.target.value })}
            />
            <input
              type="number"
              placeholder="To"
              className="w-24 rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              onChange={(e) => onFilterChange({ ageTo: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            onChange={(e) => onFilterChange({ location: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Religion</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            onChange={(e) => onFilterChange({ religion: e.target.value })}
          >
            <option value="">Any</option>
            <option value="hindu">Hindu</option>
            <option value="muslim">Muslim</option>
            <option value="christian">Christian</option>
            <option value="sikh">Sikh</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Marital Status</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
            onChange={(e) => onFilterChange({ maritalStatus: e.target.value })}
          >
            <option value="">Any</option>
            <option value="never_married">Never Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </div>
      </div>
    </div>
  );
}