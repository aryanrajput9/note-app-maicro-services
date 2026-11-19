import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-100 bg-white/90 px-6 backdrop-blur-md">

      {/* Search Bar */}
      <div className="flex w-full max-w-md items-center gap-3 rounded-full bg-gray-100 px-4 py-2.5">

        <Search size={20} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search your notes..."
          className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />

      </div>

      {/* Right Actions */}
      <div className="ml-5 flex items-center gap-6">

        {/* Notification */}
        <button className="relative text-gray-700 transition hover:text-amber-500">

          <Bell size={23} />

          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />

        </button>

        {/* User Avatar */}
        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-lg font-bold text-white shadow-sm transition hover:scale-105">

          S

        </button>

      </div>

    </header>
  );
};

export default Header;