import {
  Sun,
  Home,
  FileText,
  Heart,
  Trash2,
  Settings,
  Info,
  Moon,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

const Sidebar = () => {


  const navigation = [
    {
      title: "Home",
      icon: Home,
      href: "/",
      active: true,
    },
    {
      title: "All Notes",
      icon: FileText,
      href: "/notes",
    },
    {
      title: "Favorites",
      icon: Heart,
      href: "/favorites",
    },
    {
      title: "Trash",
      icon: Trash2,
      href: "/trash",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/settings",
    },
    {
      title: "About",
      icon: Info,
      href: "/about",
    },
  ];

  return (
    <aside className="relative flex h-screen w-60 shrink-0 flex-col overflow-hidden border-r border-amber-100 bg-white">

      {/* Logo */}
      <div className="flex items-center gap-2 px-5 py-7">
        <Sun size={38} className="text-amber-400" />

        <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
          Sun<span className="text-amber-500">Note</span>App
        </h1>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex flex-col gap-2 px-3">

        {navigation.map((item) => (
          <SidebarItem
            key={item.title}
            title={item.title}
            icon={item.icon}
            href={item.href}
            active={item.active}
          />
        ))}

      </nav>

      {/* Theme Toggle */}
      <div className="relative z-10 mx-5 mt-10 flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-2">

        <button className="rounded-lg bg-amber-100 p-2 text-amber-500">
          <Sun size={19} />
        </button>

        <button  className="rounded-lg p-2 text-gray-500 hover:bg-gray-200">
          <Moon size={19} />
        </button>

      </div>

      {/* Bottom Illustration */}
      <div className="absolute bottom-0 left-0 h-52 w-full overflow-hidden bg-gradient-to-t from-amber-300 via-yellow-100 to-transparent">

        <div className="absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-amber-400 blur-sm" />

        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-green-800 to-green-600 opacity-80"
        />

        <div className="absolute bottom-12 left-8 h-20 w-20 rounded-full bg-yellow-400 blur-2xl" />

      </div>

    </aside>
  );
};

export default Sidebar;