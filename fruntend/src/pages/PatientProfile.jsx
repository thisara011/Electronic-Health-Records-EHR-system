import React from "react";

const patientData = {
  profilePicture: "https://i.pravatar.cc/150?img=12",
  fullName: "John Doe",
  userName: "johndoe123",
  dateOfBirth: "1990-01-01",
  gender: "Male",
  contactNumber: "+1 234 567 890",
  email: "john.doe@example.com",
  residentialAddress: "123 Main Street, City, Country",
  emergencyContact: "+1 987 654 321",
  preExistingConditions: "Diabetes, Hypertension",
  allergies: "Penicillin, Nuts",
  currentMedications: "Metformin",
  bloodGroup: "O+",
  medicalHistorySummary: "No recent hospitalizations",
  insuranceProvider: "ABC Insurance",
  policyNumber: "INS123456789",
};

export default function ViewPatientProfile() {
  return (
    <div className="min-h-max p-8">
     <div className="max-w-6xl mx-auto">
      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col lg:flex-row justify-between gap-6">
        {/* Left - Avatar & Info */}
        <div className="flex items-center gap-4">
          <img
            src={patientData.profilePicture}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{patientData.fullName}</h2>
            <p className="text-gray-500">{patientData.email}</p>
            <button className="mt-2 text-sm border border-red-500 text-red-500 px-3 py-1 rounded-full hover:bg-red-50">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Right - Details in 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-10 text-sm mt-4 lg:mt-0">
          <ProfileField label="Gender" value={patientData.gender} />
          <ProfileField label="Date of Birth" value={patientData.dateOfBirth} />
          <ProfileField label="Blood Group" value={patientData.bloodGroup} />
          <ProfileField label="Contact No" value={patientData.contactNumber} />
          <ProfileField label="User Name" value={patientData.userName} />
          <ProfileField label="Emergency Contact" value={patientData.emergencyContact} />
        </div>
      </div>

      {/* Patient Details Section */}
      <h3 className="text-xl font-semibold text-gray-800 mt-10 mb-4">Patient Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DetailCard label="Residential Address" value={patientData.residentialAddress} />
        <DetailCard label="Pre-existing Conditions" value={patientData.preExistingConditions} />
        <DetailCard label="Allergies" value={patientData.allergies} />
        <DetailCard label="Current Medications" value={patientData.currentMedications} />
        <DetailCard label="Medical History" value={patientData.medicalHistorySummary} />
        <DetailCard
          label="Insurance"
          value={`${patientData.insuranceProvider} - ${patientData.policyNumber}`}
        />
      </div>
      </div>
    </div>
  );
}

function ProfileField({ label, value }) {
  return (
    <div>
      <p className="text-gray-400 text-xs">{label}</p>
      <p className="text-sm font-medium text-gray-900">{value}</p>
    </div>
  );
}

function DetailCard({ label, value }) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
      <p className="text-gray-400 text-sm mb-1">{label}</p>
      <p className="text-gray-800 font-medium text-base">{value}</p>
    </div>
  );
}
