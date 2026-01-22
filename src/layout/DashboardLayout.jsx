import Sidebar from "../components/Sidebar/Sidebar";
import TopNavbar from "../components/Navbar/TopNavbar";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const DashboardLayout = ({ children,routes }) => { 
  const [sidebarOpen, setSidebarOpen] = useState(false);
   const location = useLocation();

  const currentRoute = routes.find(
    (r) => r.path === location.pathname
  );
  return (
    <div className="d-flex vh-100 bg-light">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-grow-1 overflow-auto">
        <TopNavbar  toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
       <div className="p-2 border-bottom">
          <h6 className="mb-0 custom-text-heading fs-18">
            {currentRoute?.title || "Dashboard"}
          </h6>
        </div>
        <div className=" p-2 p-md-4">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
