import ChartSection from "./ChartSection";
import KpiSection from "./KpiSection";
import TabSection  from  "./TabSection"
const Dashboard = () => {
  return (
    <>
    
    <KpiSection /> 
    <div className="bg-white p-3 rounded-3 mt-3 d-flex flex-column gap-3">
    <TabSection/>
    <ChartSection />
    </div>
    </>
  );
};

export default Dashboard;
