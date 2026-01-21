const KpiCard = ({ title, value, color, breakdown }) => {
  return (
    <div className="col-12 col-sm-6 col-xl-4">
      <div
        className="card h-100 rounded-4"
        style={{ borderRight: `4px solid ${color}` }}
      >
        <div className="card-body d-flex justify-content-between">
          
          <div>
            <p className="mb-2 fw-semibold custom-text-heading fs-4">{title}</p>

            {breakdown.map((item, index) => (
              <div key={index} className="small text-secondary">
                {item.label} - {item.value}
              </div>
            ))}
          </div>

          <div className="d-flex flex-column justify-content-end">
            <h2 className="fw-bold" style={{ color }}>
              {value}
            </h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default KpiCard;
