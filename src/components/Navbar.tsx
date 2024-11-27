import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, UserCircle, LogIn } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export function Navbar() {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="text-xl font-bold text-gray-900">Rishton Ka Markaz</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-700 hover:text-gray-900">Find Matches</Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                  <UserCircle className="h-5 w-5" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={logout}
                  className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}