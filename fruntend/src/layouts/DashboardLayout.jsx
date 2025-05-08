import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardPage from '../pages/DashboardPage';

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <DashboardPage />
    </div>
  );
};

export default DashboardLayout;