import React from "react";

export default function DoctorRegistration() {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row bg-white">
      {/* Left Section: Form and Logo */}
      <div className="flex flex-col justify-center w-full md:w-1/2 p-6 md:p-16">
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
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Doctor Registration</h2>
        {/* Upload Image */}
        <div className="w-full flex flex-col items-center mb-4">
          <label className="w-full cursor-pointer">
            <div className="w-full h-32 flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition mb-2">
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" className="mb-2 text-indigo-400">
                <path d="M12 4v16m8-8H4" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-gray-500 font-medium">Upload Image</span>
              <input type="file" className="hidden" />
            </div>
          </label>
        </div>
        {/* Form */}
        <form className="space-y-3">
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
          <input
            type="text"
            placeholder="Medical License Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            placeholder="Specialty (e.g. cardiologist, general physician)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Years of Experience"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
            <input
              type="text"
              placeholder="Contact Number"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
          </div>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Email Address"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
            <input
              type="text"
              placeholder="Clinic/Department"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg text-lg transition"
          >
            Register
          </button>
        </form>
      </div>
      {/* Right Section: Illustration */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-transparent relative">
        {/* Replace the image src with your actual illustration */}
        <img
          src="/public/assets/DSign.png"
          alt="Doctor Illustration"
          className="w-[360px] h-auto object-contain"
        />
        {/* Optional: Add a light blue circle background like in Figma */}
        <div className="absolute w-[400px] h-[400px] bg-blue-100 rounded-full -z-10 right-12"></div>
      </div>
    </div>
  );
}
