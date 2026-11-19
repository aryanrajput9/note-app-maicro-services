import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./DashboardPage";


const NavBar = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#FFFDF8]">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex min-w-0 flex-1 flex-col">

        {/* Top Navbar */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto">
          <DashboardPage />
        </main>

      </div>

    </div>
  );
};

export default NavBar;