import { useSelector } from "react-redux";
import BarChartComp from "../../components/Charts/BarChartComp";
import DonutChart from "../../components/Charts/DonutChart";
import LineChartComp from "../../components/Charts/LineChartComp";
import YearlyPayrollChart from "../../components/Charts/YearlyPayrollChart";

const ChartSection = () => { 

  const chart=useSelector((state)=>state.chart)
  return (
    <>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card ">
            <p className="fw-bold fs-5 d-flex  justify-content-between charts-background">
              Payroll by Department
              <div className="dropdown show">
                <a
                  className="btn btn-outline-primary dropdown-toggle no-hover"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Month
                </a>
              </div>
            </p>
            <DonutChart
              data={
                chart.payrollByDept
              }
              title="Employpees"
            />
          </div>
        </div>
        <div className="col-md-4 ">
          <div className="card ">
            <p className="fw-bold fs-5 d-flex  justify-content-between charts-background">
              Dept Attendance
              <div className="dropdown show">
                <a
                  className="btn btn-outline-primary dropdown-toggle no-hover"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  UI/UX
                </a>
              </div>
            </p>
            <DonutChart
              data={chart.deptAttendance}
              title="Employpees"
            />
          </div>
        </div>

        <div className="col-md-4 ">
          <div className="card ">
            <p className="fw-bold fs-5 d-flex  justify-content-between charts-background">
              Pending Onboarding
              <div className="dropdown show">
                <a
                  className="btn btn-outline-primary dropdown-toggle no-hover"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Month
                </a>
              </div>
            </p>

            <BarChartComp
              data={chart.pendingOnboarding}
            />
          </div>
        </div>
      </div>

      <div className="row g-4 mt-2">
        <div className="col-md-5 ">
          <div className="card ">
            <p className="fw-bold fs-5 d-flex  justify-content-between charts-background ">
              Total Payroll by Month
            </p>

            <LineChartComp
              data={chart.totalPayroll}
            />
          </div>
        </div>

        <div className="col-md-7 ">
          <div className="card ">
            <p className="fw-bold fs-5 d-flex  justify-content-between charts-background">
              Yearly Payroll Analysis
              <div className="dropdown show">
                <a
                  className="btn btn-outline-primary dropdown-toggle no-hover"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Month
                </a>
              </div>
            </p>
            <YearlyPayrollChart
              className="p-3"
              data={chart.yearlyPayroll}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartSection;
