import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <Heart className="h-16 w-16 text-rose-500 mx-auto" />
          <h1 className="mt-4 text-4xl font-bold text-gray-900 sm:text-5xl">
            Rishton Ka Markaz
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Your Trusted Platform for Finding Your Perfect Life Partner
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to="/register"
              className="bg-rose-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-rose-600"
            >
              Create Free Profile
            </Link>
            <Link
              to="/search"
              className="bg-white text-rose-500 px-6 py-3 rounded-md text-lg font-medium border-2 border-rose-500 hover:bg-rose-50"
            >
              Browse Profiles
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 text-2xl font-bold mb-4">100K+</div>
            <h3 className="text-lg font-medium text-gray-900">Active Users</h3>
            <p className="mt-2 text-gray-600">Join our growing community of singles looking for meaningful relationships</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 text-2xl font-bold mb-4">5000+</div>
            <h3 className="text-lg font-medium text-gray-900">Success Stories</h3>
            <p className="mt-2 text-gray-600">Thousands of happy couples have found their perfect match through our platform</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-rose-500 text-2xl font-bold mb-4">Premium</div>
            <h3 className="text-lg font-medium text-gray-900">Quality Matches</h3>
            <p className="mt-2 text-gray-600">Advanced matching algorithm to help you find compatible partners</p>
          </div>
        </div>
      </div>
    </div>
  );
}