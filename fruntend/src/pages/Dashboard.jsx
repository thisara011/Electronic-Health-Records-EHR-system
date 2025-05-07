import DashboardLayout from '../layouts/DashboardLayout';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="p-4 bg-white rounded-lg shadow text-center">
          Total Patients<br />
          <span className="text-2xl font-bold">20</span>
        </div>
        <div className="p-4 bg-white rounded-lg shadow text-center">
          Total Doctors<br />
          <span className="text-2xl font-bold">20</span>
        </div>
        <div className="p-4 bg-white rounded-lg shadow text-center">
          Total Wards<br />
          <span className="text-2xl font-bold">20</span>
        </div>
        <div className="p-4 bg-white rounded-lg shadow text-center">
          Total Labs<br />
          <span className="text-2xl font-bold">20</span>
        </div>
      </div>
      {/* Add charts, appointment table, recent doctors, out of stock, etc. */}
    </DashboardLayout>
  );
};

export default Dashboard;
