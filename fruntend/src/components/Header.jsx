import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      {/* Logo + Name */}
      <div className="flex items-center space-x-2">
        <img src="/public/assets/logo.svg" alt="MediLab Logo" className="h-8 w-8" />
        <span className="text-xl font-bold text-purple-700">MediLab Hospital</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
        <a href="#" className="hover:text-purple-700">Home</a>
        <Link to="/appointment" className="hover:text-purple-700">Appointment</Link>
        <a href="#" className="hover:text-purple-700">Service</a>
        <a href="#" className="hover:text-purple-700">About</a>
        <a href="#" className="hover:text-purple-700">Contact</a>
      </nav>

      {/* Buttons */}
      <div className="space-x-3">
        <button className="border border-purple-700 text-purple-700 px-4 py-1 rounded-full hover:bg-purple-50">Sign In</button>
        <button className="bg-purple-700 text-white px-4 py-1 rounded-full hover:bg-purple-800">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;

// public/logo.png