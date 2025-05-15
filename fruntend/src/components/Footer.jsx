import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 md:px-20 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + Name */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-purple-700 text-lg">MediLab Hospital</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MediLab Hospital. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-700">Home</a></li>
            <li><a href="#" className="hover:text-purple-700">Appointment</a></li>
            <li><a href="#" className="hover:text-purple-700">Service</a></li>
            <li><a href="#" className="hover:text-purple-700">About</a></li>
            <li><a href="#" className="hover:text-purple-700">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Mon - Fri: 8:00 - 18:00</li>
            <li>Sat - Sun: 9:00 - 17:00</li>
            <li>Phone: +94 71 234 5678</li>
            <li>Email: info@medilab.lk</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// public/logo.png