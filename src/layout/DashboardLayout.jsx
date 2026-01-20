import Sidebar from "../components/Sidebar/Sidebar";
import TopNavbar from "../components/Navbar/TopNavbar";
import { useState } from "react";

const DashboardLayout = ({ children }) => { 

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="d-flex vh-100 bg-light">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-grow-1 overflow-auto">
        <TopNavbar  toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
