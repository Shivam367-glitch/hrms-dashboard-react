import KpiCard from "../../components/Cards/KpiCard";
import { useSelector } from "react-redux";

const KpiSection = () => {


 const kpiData= useSelector((state) => state.kpi.kpiData);
  return (
    <div className="row g-3">
      {kpiData.map((card) => (
        <KpiCard key={card.id} {...card} />
      ))}
    </div>
  );
};

export default KpiSection;
