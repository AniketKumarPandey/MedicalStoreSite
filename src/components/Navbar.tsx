import React from 'react';
import { Pill, Phone, LogOut } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLoginClick: () => void;
  onLogout: () => void;
}

export default function Navbar({ user, onLoginClick, onLogout }: NavbarProps) {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Pill className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Krishna Medical Store</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            {user ? (
              <button
                onClick={onLogout}
                className="flex items-center text-gray-600 hover:text-blue-600"
              >
                <LogOut className="h-5 w-5 mr-1" />
                Logout
              </button>
            ) : (
              <button
                onClick={onLoginClick}
                className="text-gray-600 hover:text-blue-600"
              >
                Login
              </button>
            )}
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-blue-600" />
              <span className="text-gray-600">+91 9023169385</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}