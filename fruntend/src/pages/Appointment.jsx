import React from 'react';

const Appointment = () => {
  return (
    <div className="min-h-screen bg-[#f5f7fc] font-sans">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-white shadow-md">
        <div className="flex items-center gap-2">
          <img src="/public/assets/logo.svg" alt="Logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-purple-700">MediLab Hospital</h1>
        </div>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <a href="/home" className="hover:text-purple-700">Home</a>
          <a href="/appointment" className="text-purple-700 font-semibold">Appointment</a>
          <a href="#" className="hover:text-purple-700">Services</a>
          <a href="#" className="hover:text-purple-700">About Us</a>
          <a href="#" className="hover:text-purple-700">Contact Us</a>
        </nav>

        <div className="flex gap-2">
          <button className="px-4 py-2 rounded-full border border-purple-700 text-purple-700 hover:bg-purple-100">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-full bg-purple-700 text-white hover:bg-purple-800">
            Register
          </button>
        </div>
      </header>

      {/* Intro */}
      <section className="px-6 md:px-20 py-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold mb-4">
            We help people to get appointment in online
          </h2>
          <p className="text-gray-600">
            Lorem Media is a full-service social media agency. We offer innovative solutions to help businesses grow by building online visibility and trust.
          </p>
        </div>
        <img src="/public/assets/appoinmant.svg" alt="Illustration" className="w-80 mt-8 md:mt-0" />
      </section>

      {/* Appointment Form */}
      <section className="bg-white py-12 px-6 md:px-20 rounded-xl shadow-lg max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-700 mb-8">Appointment</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="First Name" className="input" />
          <input type="text" placeholder="Last Name" className="input" />
          <input type="email" placeholder="Email" className="input" />
          <input type="text" placeholder="Mobile Number" className="input" />
          <input type="text" placeholder="NIC" className="input" />
          <input type="date" placeholder="Date of Birth" className="input" />
          <select className="input">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Non-binary</option>
            <option>Transgender</option>
            <option>Genderqueer</option>
            <option>Agender</option>
            <option>Bigender</option>
            <option>Genderfluid</option>
            <option>Two-Spirit</option>
            <option>Intersex</option>
            <option>Demiboy</option>
            <option>Demigirl</option>
            <option>Androgyne</option>
            <option>Androgynous</option>
            <option>Bigender Female</option>
            <option>Bigender Male</option>
            <option>Butch</option>
            <option>Cis</option>
            <option>Cis Female</option>
            <option>Cis Male</option>
            <option>Cis Man</option>
            <option>Cis Woman</option>
            <option>Cisgender</option>
            <option>Cisgender Female</option>
            <option>Cisgender Male</option>
            <option>Cisgender Man</option>
            <option>Cisgender Woman</option>
            <option>Female to Male</option>
            <option>FTM</option>
            <option>Gender Questioning</option>
            <option>Gender Variant</option>
            <option>Gender Nonconforming</option>
            <option>Gender Neutral</option>
            <option>Genderflux</option>
            <option>Genderless</option>
            <option>Genderproud</option>
            <option>Hijra</option>
            <option>Intergender</option>
            <option>Male to Female</option>
            <option>MTF</option>
            <option>Neither</option>
            <option>Neutrois</option>
            <option>Nonbinary Woman</option>
            <option>Nonbinary Man</option>
            <option>Omnigender</option>
            <option>Pangender</option>
            <option>Polygender</option>
            <option>Third Gender</option>
            <option>Trans</option>
            <option>Trans Female</option>
            <option>Trans Male</option>
            <option>Trans Man</option>
            <option>Trans Person</option>
            <option>Trans Woman</option>
            <option>Transfeminine</option>
            <option>Transgender Female</option>
            <option>Transgender Male</option>
            <option>Transgender Man</option>
            <option>Transgender Person</option>
            <option>Transgender Woman</option>
            <option>Transmasculine</option>
            <option>Transsexual</option>
            <option>Transsexual Female</option>
            <option>Transsexual Male</option>
            <option>Transsexual Man</option>
            <option>Transsexual Person</option>
            <option>Transsexual Woman</option>
            <option>Trigender</option>
            <option>Two Spirit Female</option>
            <option>Two Spirit Male</option>
            <option>Two Spirit Person</option>
            <option>Agenderflux</option>
            <option>Aliagender</option>
            <option>Amalgagender</option>
            <option>Ambigender</option>
            <option>Apagender</option>
            <option>Astrogender</option>
            <option>Autigender</option>
            <option>Axigender</option>
            <option>Blurgender</option>
            <option>Boi</option>
            <option>Boyflux</option>
            <option>Caelgender</option>
            <option>Collgender</option>
            <option>Condigender</option>
            <option>Deliciagender</option>
            <option>Demiflux</option>
            <option>Demigenderflux</option>
            <option>Domgender</option>
            <option>Duragender</option>
            <option>Egogender</option>
            <option>Enby</option>
            <option>Epicene</option>
            <option>Femme</option>
            <option>Feminamoric</option>
            <option>Feminine</option>
            <option>Fluidflux</option>
            <option>Gemigender</option>
            <option>Gendervoid</option>
            <option>Greygender</option>
            <option>Healgender</option>
            <option>Heliogender</option>
            <option>Interfeminine</option>
            <option>Intermasculine</option>
            <option>Juxera</option>
            <option>Kingender</option>
            <option>Libragender</option>
            <option>Maverique</option>
            <option>Mirrorgender</option>
            <option>Novigender</option>
            <option>Paragender</option>
            <option>Quoigender</option>
            <option>Subgender</option>
            <option>Systemgender</option>
            <option>Vapogender</option>
            <option>Venngender</option>
            <option>Vocigender</option>
          </select>
          <input type="date" className="input" />
          <input type="time" className="input" />
          <select className="input">
            <option>Department Name</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
            <option>Dermatology</option>
            <option>Gastroenterology</option>
            <option>Oncology</option>
            <option>Psychiatry</option>
            <option>Radiology</option>
            <option>Urology</option>
            <option>Ophthalmology</option>
            <option>Gynecology</option>
            <option>Endocrinology</option>
            <option>Hematology</option>
            <option>Infectious Diseases</option>
            <option>Nephrology</option>
            <option>Pulmonology</option>
            <option>Rheumatology</option>
          </select>
          <input type="text" placeholder="Doctor Name" className="input" />
          <textarea placeholder="Address" className="input md:col-span-2 h-24"></textarea>
          <button className="bg-purple-700 text-white py-3 rounded-full w-full md:col-span-2 hover:bg-purple-800 transition">
            Register
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="mt-20 px-6 md:px-20 py-12 text-sm text-gray-600 bg-white border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" className="h-6 mb-2" alt="Logo" />
            <p>Ranja Hospital</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Appointment</li>
              <li>Service</li>
              <li>About Us</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Hours</h4>
            <ul>
              <li>Monday - Friday: 9:00 - 18:00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <ul>
              <li>📞 000-203-000</li>
              <li>📧 info@email.com</li>
              <li>📍 Kalutara South</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Appointment;
