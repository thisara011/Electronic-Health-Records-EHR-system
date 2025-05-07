import React from 'react';

const AppointmentsList = () => {
  const appointments = [
    { name: 'Chanco Vucure', date: '10.10.2023', status: 'Pending' },
    { name: 'Deniese Kenter', date: '04.12.2023', status: 'Rejected' },
    { name: 'Pailyn Luluh', date: '10.12.2023', status: 'Pending' },
    { name: 'Philip Blair', date: '02.01.2023', status: 'Accepted' },
    { name: 'Emerson Stanton', date: '03.01.2023', status: 'Pending' },
    { name: 'Alfredo Niel Madsen', date: '04.03.2023', status: 'Rejected' },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="text-lg font-semibold mb-2">Appointments</h2>
      <ul className="space-y-2">
        {appointments.map((appt, idx) => (
          <li key={idx} className="flex justify-between items-center border-b pb-1">
            <div>
              <div className="font-medium">{appt.name}</div>
              <div className="text-xs text-gray-500">{appt.date}</div>
            </div>
            <span
              className={`text-sm px-2 py-1 rounded-full ${
                appt.status === 'Accepted'
                  ? 'bg-green-100 text-green-800'
                  : appt.status === 'Rejected'
                  ? 'bg-red-100 text-red-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {appt.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentsList;