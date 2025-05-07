import React from "react";

export default function PatientRegistration() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left Section: Content */}
      <div className="flex flex-col justify-start w-full md:w-1/2 p-6 md:p-16">
        {/* Logo */}
        <div className="flex items-center mb-6">
          <span className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 mr-2">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#6366F1" />
              <path d="M12 7v10M7 12h10" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-lg font-semibold text-gray-900">MediLife Hospital</span>
        </div>
        {/* Heading */}
        <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">Patient Registration</h2>
        {/* Form */}
        <form className="space-y-3 w-full max-w-xl">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            placeholder="User Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <div className="flex flex-col md:flex-row md:space-x-3">
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 mb-3 md:mb-0 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
            <select
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
              defaultValue=""
            >
              <option value="" disabled>
                Gender
              </option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-3">
            <input
              type="text"
              placeholder="Entnact Number"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 mb-3 md:mb-0 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
          </div>
          <input
            type="text"
            placeholder="Residential Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            placeholder="Emergency Contact"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            placeholder="Pre-existing Conditions (e.g., diabetes, hypertension, asthma)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            placeholder="Allergies (e.g., penicillin, nuts, latex)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            placeholder="Current Medications (if any)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <div className="flex flex-col md:flex-row md:space-x-3">
            <input
              type="text"
              placeholder="Blood Group"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 mb-3 md:mb-0 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
            <input
              type="text"
              placeholder="Medical History Summary (optional)"
              className="w-full md:w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
          </div>
          <input
            type="text"
            placeholder="Insurance Provider & Policy Number (if applicable)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <button
            type="submit"
            className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg text-lg transition"
          >
            Register
          </button>
        </form>
      </div>
      {/* Right Section: Illustration */}
      <div className="flex-1 flex items-start justify-center md:items-center bg-transparent relative pt-10 md:pt-0">
        {/* Illustration */}
        <div className="relative">
          <div className="absolute -top-8 -left-8 w-[400px] h-[400px] bg-indigo-100 rounded-full -z-10"></div>
          <img
            src="/public/assets/patient.png"
            alt="Patient Illustration"
            className="w-[320px] h-auto object-contain"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
}
