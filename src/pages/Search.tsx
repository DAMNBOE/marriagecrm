import React, { useState } from 'react';
import { SearchFilters } from '../components/SearchFilters';
import { ProfileCard } from '../components/ProfileCard';
import type { UserProfile } from '../types/user';

const SAMPLE_PROFILES: UserProfile[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    age: 28,
    gender: 'female',
    location: 'Mumbai, India',
    occupation: 'Software Engineer',
    education: 'M.Tech in Computer Science',
    about: 'I am a passionate software engineer who loves to travel and explore new places. Looking for someone who shares similar interests and values.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    religion: 'Hindu',
    maritalStatus: 'never_married',
    contactDetails: {
      phone: '+91 9876543210',
      email: 'priya.s@example.com'
    }
  },
  {
    id: '2',
    name: 'Rahul Verma',
    age: 30,
    gender: 'male',
    location: 'Delhi, India',
    occupation: 'Business Analyst',
    education: 'MBA in Finance',
    about: 'A dedicated professional with a passion for music and photography. Seeking a life partner who values family and has a good sense of humor.',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    religion: 'Hindu',
    maritalStatus: 'never_married',
    contactDetails: {
      phone: '+91 9876543211',
      email: 'rahul.v@example.com'
    }
  }
];

export function Search() {
  const [filters, setFilters] = useState({});
  const [filteredProfiles, setFilteredProfiles] = useState(SAMPLE_PROFILES);

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
    // In a real app, this would make an API call with the filters
    // For now, we'll just use the sample data
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <SearchFilters onFilterChange={handleFilterChange} />
        </div>
        
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProfiles.map((profile) => (
              <ProfileCard key={profile.id} profile={profile} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}