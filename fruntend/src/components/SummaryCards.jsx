import React from 'react';

const SummaryCards = () => {
  return (
    <section className="grid grid-cols-4 gap-4 mb-6">
      {['Total Patient', 'Total Doctors', 'Total Wards', 'Total Labs'].map((label) => (
        <div key={label} className="bg-white rounded-xl p-4 shadow">
          <div className="text-lg font-medium">{label}</div>
          <div className="text-2xl font-bold">20</div>
        </div>
      ))}
    </section>
  );
};

export default SummaryCards;