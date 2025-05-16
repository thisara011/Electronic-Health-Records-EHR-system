import React from 'react';

const services = [
  {
    title: 'NEUROSCIENCES',
    image: '/public/assets/Group.svg',
  },
  {
    title: 'NEUROSCIENCES',
    image: '/public/assets/Group.svg',
  },
  {
    title: 'NEUROSCIENCES',
    image: '/public/assets/Group.svg',
  },
];

const Services = () => {
  return (
    <section className="bg-[#f4f7fe] py-20 px-6 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Services</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 w-full max-w-sm transition duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-xl font-semibold text-purple-700">{service.title}</h3>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        <div className="h-3 w-3 bg-purple-700 rounded-full"></div>
        <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
        <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Services;

// service1.png

// service2.png

// service3.png