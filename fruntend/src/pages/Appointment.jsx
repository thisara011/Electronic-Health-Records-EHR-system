import React from 'react';

const Appointment = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fc] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <img src="/public/assets/logo.svg" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-purple-700">MediLab Hospital</h1>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/home" className="hover:text-purple-700">Home</a>
          <a href="/appointment" className="text-purple-700 font-semibold">Appointment</a>
          <a href="#" className="hover:text-purple-700">Services</a>
          <a href="#" className="hover:text-purple-700">About Us</a>
          <a href="#" className="hover:text-purple-700">Contact Us</a>
        </nav>

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full border border-purple-700 text-purple-700 hover:bg-purple-100">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-700 text-white hover:bg-purple-800">
            Register
          </button>
        </div>
      </header>

      {/* Intro */}
      <section className="px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">
            We help people to get appointment in online
          </h2>
          <p className="text-gray-600">
            Lorem Media is a full-service social media agency. We offer innovative solutions to help businesses grow by building online visibility and trust.
          </p>
        </div>
        <img src="/public/assets/appoinmant.svg" alt="Illustration" className="w-80 mt-8 md:mt-0" />
      </section>

      {/* Appointment Form */}
      <section className="bg-white py-12 px-6 md:px-20 rounded-xl shadow-lg max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-700 mb-8">Appointment</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="text" placeholder="Mobile Number" className="input" />
          <input type="text" placeholder="NIC" className="input" />
          <input type="date" placeholder="Date of Birth" className="input" />
          <select className="input">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <input type="date" className="input" />
          <input type="time" className="input" />
          <select className="input">
            <option>Department Name</option>
            <option>Cardiology</option>
            <option>Neurology</option>
          </select>
          <input type="text" placeholder="Doctor Name" className="input" />
          <textarea placeholder="Address" className="input md:col-span-2 h-24"></textarea>
          <button className="bg-purple-700 text-white py-3 rounded-full w-full md:col-span-2 hover:bg-purple-800 transition">
            Register
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-20 px-6 md:px-20 py-12 text-sm text-gray-600 bg-white border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" className="h-6 mb-2" alt="Logo" />
            <p>Ranja Hospital</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Appointment</li>
              <li>Service</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <ul>
              <li>Monday - Friday: 9:00 - 18:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul>
              <li>📞 000-203-000</li>
              <li>📧 info@email.com</li>
              <li>📍 Kalutara South</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Appointment;
