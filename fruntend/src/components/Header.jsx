const Header = () => {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <span className="font-medium">👋 Madhusha</span>
        <div className="flex gap-2 items-center">
          <span className="font-medium">Prasad</span>
          <img src="https://i.pravatar.cc/40" className="rounded-full w-8 h-8" alt="user" />
        </div>
      </header>
    );
  };
  
  export default Header;
  