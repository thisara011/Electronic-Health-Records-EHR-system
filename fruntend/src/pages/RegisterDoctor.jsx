import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../config/supabaseClient';

export default function DoctorRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    password: '',
    medicalLicenseNumber: '',
    specialty: '',
    yearsOfExperience: '',
    contactNumber: '',
    email: '',
    clinicDepartment: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      // Register doctor in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (authError) throw authError;
      // Store doctor profile in doctor_profiles table
      const { data: profileData, error: profileError } = await supabase
        .from('doctor_profiles')
        .insert([
          {
            id: authData.user.id,
            full_name: formData.fullName,
            user_name: formData.userName,
            medical_license_number: formData.medicalLicenseNumber,
            specialty: formData.specialty,
            years_of_experience: parseInt(formData.yearsOfExperience, 10),
            contact_number: formData.contactNumber,
            email: formData.email,
            clinic_department: formData.clinicDepartment
          }
        ]);
      if (profileError) throw profileError;
      navigate('/login');
    } catch (error) {
      setError(error.message);
      console.error('Error:', error.message);
    }
  };

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
        <form className="space-y-3" onSubmit={handleSubmit}>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            placeholder="User Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="text"
            name="medicalLicenseNumber"
            value={formData.medicalLicenseNumber}
            onChange={handleChange}
            placeholder="Medical License Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="text"
            name="specialty"
            value={formData.specialty}
            onChange={handleChange}
            placeholder="Specialty (e.g. cardiologist, general physician)"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <div className="flex space-x-2">
            <input
              type="number"
              name="yearsOfExperience"
              value={formData.yearsOfExperience}
              onChange={handleChange}
              placeholder="Years of Experience"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
              required
            />
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact Number"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
              required
            />
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              name="clinicDepartment"
              value={formData.clinicDepartment}
              onChange={handleChange}
              placeholder="Clinic/Department"
              className="w-1/2 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
              required
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
