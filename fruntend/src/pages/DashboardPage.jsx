import React from 'react';
import SummaryCards from '../components/SummaryCards';
import PatientsChart from '../components/PatientsChart';
import AppointmentsList from '../components/AppointmentsList';
import DoctorsTable from '../components/DoctorsTable';
import StockTable from '../components/StockTable';

const DashboardPage = () => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <header className="flex justify-between items-center mb-6">
        <span className="text-xl font-semibold">MediLab Hospital</span>
        <div className="flex items-center space-x-4">
          <span>Madhusha</span>
          <span>Prasad</span>
          <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
        </div>
      </header>

      <SummaryCards />

      <section className="grid grid-cols-2 gap-6 mb-6">
        <PatientsChart />
        <AppointmentsList />
      </section>

      <DoctorsTable />
      <StockTable />
    </main>
  );
};

export default DashboardPage;