import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from '../config/supabaseClient';

export default function PatientRegistration() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    password: '',
    dateOfBirth: '',
    gender: '',
    entnactNumber: '',
    email: '',
    address: '',
    emergencyContact: '',
    preExistingConditions: '',
    allergies: '',
    currentMedications: '',
    bloodGroup: '',
    medicalHistory: '',
    insuranceInfo: ''
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
      // First, create the user in Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (authError) throw authError;

      // Then, store the additional user data in a separate table
      const { data: profileData, error: profileError } = await supabase
        .from('patient_profiles')
        .insert([
          {
            user_id: authData.user.id,
            full_name: formData.fullName,
            user_name: formData.userName,
            date_of_birth: formData.dateOfBirth,
            gender: formData.gender,
            entnact_number: formData.entnactNumber,
            address: formData.address,
            emergency_contact: formData.emergencyContact,
            pre_existing_conditions: formData.preExistingConditions,
            allergies: formData.allergies,
            current_medications: formData.currentMedications,
            blood_group: formData.bloodGroup,
            medical_history: formData.medicalHistory,
            insurance_info: formData.insuranceInfo
          }
        ]);

      if (profileError) throw profileError;

      // Registration successful
      navigate('/login');
    } catch (error) {
      setError(error.message);
      console.error('Error:', error.message);
    }
  };

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
        <form onSubmit={handleSubmit} className="space-y-3 w-full max-w-xl">
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
            placeholder="Email"
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
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            type="text"
            name="entnactNumber"
            value={formData.entnactNumber}
            onChange={handleChange}
            placeholder="Entnact Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="text"
            name="emergencyContact"
            value={formData.emergencyContact}
            onChange={handleChange}
            placeholder="Emergency Contact"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
            required
          />
          <input
            type="text"
            name="preExistingConditions"
            value={formData.preExistingConditions}
            onChange={handleChange}
            placeholder="Pre-existing Conditions"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            name="allergies"
            value={formData.allergies}
            onChange={handleChange}
            placeholder="Allergies"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            name="currentMedications"
            value={formData.currentMedications}
            onChange={handleChange}
            placeholder="Current Medications"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            placeholder="Blood Group"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleChange}
            placeholder="Medical History"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 text-base"
          />
          <input
            type="text"
            name="insuranceInfo"
            value={formData.insuranceInfo}
            onChange={handleChange}
            placeholder="Insurance Information"
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
