
import "./sidebar.css";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`sidebar bg-white border-end  ${isOpen ? "open" : ""}`}>
      <div className="d-flex flex-column justify-content-center">
        <div className="d-flex ps-5 py-2 gap-3 align-items-center">
        <img src="/images/inbestNew.png" alt="inbestNew" id="new-logo" />
        <img src="/images/logo.png" alt="inbestNew" id="logo" />

        <button
          className="btn btn-sm d-md-none"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>
        </div> 

        <p className="fw-bold custom-text-heading text-center py-0 mt-0">HRMS</p>
      </div>

      <ul className="list-unstyled px-2 custom-text-primary gap-2 d-flex flex-column mt-3">
        <li className="sidebar-item active"><img src="/icons/dashboard.png" alt="Dashboard" className="icon"/> Dashboard</li>
        <li className="sidebar-item"><img src="/icons/employeeOnboarding.png" alt="Employee Onboarding" className="icon"/> Employee Onboarding</li>
        <li className="sidebar-item"><img src="/icons/attendance.png" alt="Attendance Overview" className="icon"/> Attendance Overview</li>
        <li className="sidebar-item"><img src="/icons/advanceAdjustment.png" alt="Advance  Adjustment" className="icon"/> Advance  Adjustment</li>
        <li className="sidebar-item"><img src="/icons/payroll.png" alt="Payroll Management" className="icon"/> Payroll Management</li>
      </ul>
    </div>
  );
};

export default Sidebar;
