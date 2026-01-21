import StatusBadge from "./StatusBadge.jsx";

const EmployeeRow = ({ employee }) => {
  return (
    <tr className="fs-6 custom-text-primary ">
      <td>
        <img
          src={employee.avatar}
          alt="avatar"
          width="32"
          height="32"
          className="rounded-circle"
        />
      </td>
      <td>{employee.code}</td>
      <td>{employee.name}</td>
      <td>{employee.department}</td>
      <td>{employee.designation}</td>
      <td>{employee.company}</td>
      <td>
        <StatusBadge status={employee.status} />
      </td>
    </tr>
  );
};

export default EmployeeRow;
