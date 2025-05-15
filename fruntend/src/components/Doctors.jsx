import React from 'react';

const doctors = [
  { name: 'Dr. Marsha', title: 'Neurosurgeon', image: '/doctor1.png' },
  { name: 'Dr. John', title: 'Cardiologist', image: '/doctor2.png' },
  { name: 'Dr. Nina', title: 'Orthopedic', image: '/doctor3.png' },
  { name: 'Dr. Kelvin', title: 'Dentist', image: '/doctor4.png' },
  { name: 'Dr. Grace', title: 'ENT Specialist', image: '/doctor5.png' },
  { name: 'Dr. Steve', title: 'Pediatrician', image: '/doctor6.png' },
  { name: 'Dr. Clara', title: 'Dermatologist', image: '/doctor7.png' },
  { name: 'Dr. Mike', title: 'Surgeon', image: '/doctor8.png' },
];

const Doctors = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Doctors</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {doctors.map((doc, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={doc.image} 
              alt={doc.name}
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover shadow-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{doc.name}</h3>
            <p className="text-sm text-gray-500">{doc.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;

// doctor1.png through doctor8.png