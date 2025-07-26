
import React from "react";
import AppLayout from "@/components/AppLayout";

const MedicalRecords: React.FC = () => (
  <AppLayout>
    <section className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-3">Medical Records</h2>
      <p className="text-base text-gray-500 mb-8">
        Review your diagnoses, prescriptions, lab files, and more.
      </p>
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-10 text-center text-gray-400 shadow-sm">
        <span className="inline-flex items-center gap-2 text-lg">
          <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-7a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Medical Records page coming soon
        </span>
      </div>
    </section>
  </AppLayout>
);

export default MedicalRecords;
