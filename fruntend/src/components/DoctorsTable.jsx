import React from 'react';

const DoctorsTable = () => {
  const doctors = [
    [1, 'Sam', '0702550213', 'Kataru', '3000.00', 'MBBS', '1994-02-13', 'Online'],
    [2, 'Ema', '0769215497', 'Kandy', '2500.00', 'MBBS', '1995-08-12', 'Offline'],
    [3, 'David', '0745428743', 'Colombo', '2800.00', 'MBBS', '1998-03-10', 'Online'],
    [4, 'Chintaka', '0762147873', 'Matara', '3000.00', 'MBBS', '1990-09-13', 'Offline'],
  ];

  return (
    <section className="bg-white rounded-xl p-4 shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">Recent Doctors</h2>
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left border-b">
            <th>ID</th><th>Name</th><th>Mobile</th><th>Address</th><th>Consultancy Charge</th><th>Education</th><th>DOB</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(([id, name, mobile, address, charge, edu, dob, status]) => (
            <tr key={id} className="border-b">
              <td>{id}</td><td>{name}</td><td>{mobile}</td><td>{address}</td><td>{charge}</td><td>{edu}</td><td>{dob}</td>
              <td className={`text-sm ${status === 'Online' ? 'text-green-600' : 'text-red-600'}`}>{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default DoctorsTable;
