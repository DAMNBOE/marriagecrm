import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { UserProfile } from '../types/user';
import { Phone, Mail, Lock, Heart } from 'lucide-react';

interface ProfileCardProps {
  profile: UserProfile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
  const navigate = useNavigate();
  const { isPremium } = useAuthStore();

  const handleContactClick = () => {
    if (!isPremium) {
      navigate('/subscription');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={profile.imageUrl}
          alt={profile.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white text-rose-500 hover:bg-rose-50">
          <Heart className="h-6 w-6" />
        </button>
      </div>
      
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900">{profile.name}</h2>
        <div className="mt-2 text-gray-600">
          <p>{profile.age} years • {profile.location}</p>
          <p>{profile.occupation}</p>
          <p>{profile.education}</p>
          {profile.religion && <p>{profile.religion}</p>}
        </div>
        
        <div className="mt-4">
          <h3 className="font-medium text-gray-900">About</h3>
          <p className="mt-1 text-gray-600">{profile.about}</p>
        </div>

        {isPremium ? (
          <div className="mt-4 space-y-2">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-5 w-5" />
              <span>{profile.contactDetails?.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Mail className="h-5 w-5" />
              <span>{profile.contactDetails?.email}</span>
            </div>
          </div>
        ) : (
          <button
            onClick={handleContactClick}
            className="mt-4 w-full flex items-center justify-center space-x-2 bg-rose-500 text-white py-2 px-4 rounded-md hover:bg-rose-600"
          >
            <Lock className="h-5 w-5" />
            <span>Upgrade to View Contact Details</span>
          </button>
        )}
      </div>
    </div>
  );
}