import { HiOutlineHome, HiUserGroup, HiClipboardList } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-purple-700 to-purple-500 text-white p-4">
      <h1 className="text-2xl font-bold mb-8">MediLab</h1>
      <nav className="flex flex-col gap-4">
        <a href="#" className="flex items-center gap-3 hover:text-purple-100">
          <HiOutlineHome /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-purple-100">
          <HiUserGroup /> Staff
        </a>
        <a href="#" className="flex items-center gap-3 hover:text-purple-100">
          <HiClipboardList /> Lab
        </a>
        {/* Add other nav links similarly */}
      </nav>
    </aside>
  );
};

export default Sidebar;
