
import { AiOutlineMenu } from "react-icons/ai";
import "./topNavbar.css";
const TopNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar bg-white border-bottom p-2"> 
      <div className="d-flex align-items-center gap-2">
        <AiOutlineMenu size={30} onClick={toggleSidebar}/>
        <h5 className="fs-4 mt-1">Dashboard</h5>
      </div>
       <img src="/images/brand-blue-shree.png" alt="brand-blue-shree" id="brand-blue-shree" />
      <div className="d-flex align-items-center gap-3 ">
        <img src="/icons/calendar.png" alt="calendar"  className="icon-large" />
        <img src="/icons/bell.png" alt="bell"  className="icon-large" />
        <img src="/icons/envolpe.png" alt="envolpe"  className="icon-large" />
       
        <div className="d-flex my-auto gap-2 align-items-center"> 
          <img src="/images/man.png" alt="man" className="icon-large"/>
          <div className="d-flex flex-column justify-content-center">
            <div className="fw-bolder ">JOYAMLYA PODDAR</div>
            <span className="text-info fs-6">Accounts</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
