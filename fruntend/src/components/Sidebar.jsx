import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-purple-700 to-purple-900 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold border-b border-white/20">☰</div>
      <nav className="flex-1 px-4 py-6 space-y-4">
        {['Dashboard', 'Staff', 'Lab', 'Ward', 'Treatment', 'Pharmacy', 'Patient'].map((item) => (
          <a key={item} href="#" className="block py-2 px-4 rounded hover:bg-purple-800">{item}</a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;