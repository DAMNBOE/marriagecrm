import React from 'react';
import { ProfileForm } from '../components/forms/ProfileForm';

export function CreateProfile() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Your Profile
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Tell us about yourself to help find your perfect match
          </p>
        </div>

        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}