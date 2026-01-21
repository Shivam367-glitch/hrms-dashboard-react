const StatusBadge = ({ status }) => {
  const statusMap = {
    Permanent: "success",
    Probation: "warning",
  };

  return (
    <span className={`badge rounded-pill bg-${statusMap[status]}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
