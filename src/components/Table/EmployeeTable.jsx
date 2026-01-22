import { useSelector } from "react-redux";
import EmployeeRow from "./EmployeeRow.jsx";



const EmployeeTable = () => { 


    const employees = useSelector((state) => state.employpee.employpeeData);
  return (
    <div className="card shadow-sm mt-4">
      <div className="card-body">
      
      <div className=" d-flex justify-content-between align-items-center mb-3 flex-wrap row-gap-2">
        <h6 className="fw-semibold custom-text-heading fs-3 mb-0  ">
    Employee Overview
        </h6>

        <input
          type="text"
    className="form-control w-auto "
    placeholder="Search here"
        />  
      </div>


        <div className="table-responsive">
          <table className="table align-middle table-borderless">
            <thead className="border-bottom">
              <tr className="fs-5">
                <th>Profile</th>
                <th>Employee Code</th>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp, index) => (
                <EmployeeRow key={index} employee={emp} />
              ))}
            </tbody>
          </table>
        </div>

        <nav className="d-flex justify-content-center mt-3">
          <ul className="pagination pagination-sm mb-0 gap-2">
            <li className="page-item disabled">
              <span className="page-link">‹</span>
            </li>
            <li className="page-item active">
              <span className="page-link text-white">1</span>
            </li>
            <li className="page-item">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <span className="page-link">3</span>
            </li>
            <li className="page-item">
              <span className="page-link">›</span>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

export default EmployeeTable;
