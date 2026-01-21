import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   payrollByDept:[
                { name: "Marketing", value: 40, color: "#40A7DD" },
                { name: "Development", value: 30, color: "#005887" },
                { name: "Design", value: 10, color: "#A3CBE0" },
                { name: "Claim", value: 10, color: "#CDE0EA" },
              ],
      deptAttendance:[
                { name: "Present ", value: 40, color: "#E9A40C" },
                { name: "Absent ", value: 30, color: "#E9A40C4D" },
              ],
        pendingOnboarding:[
                { label: "Completed", value: 6 },
                { label: "Pending", value: 3 },
              ],
             totalPayroll:[
                { month: "Jan", value: 0.5 },
                { month: "Feb", value: 3 },
                { month: "Mar", value: 5.5 },
                { month: "Apr", value: 3.8 },
                { month: "May", value: 5.2 },
                { month: "Jun", value: 7.5 },
              ],
               yearlyPayroll:[
                { month: "Jan", y2025: 100, y2026: 200 },
                { month: "Feb", y2025: 150, y2026: 260 },
                { month: "Mar", y2025: 280, y2026: 400 },
                { month: "Apr", y2025: 200, y2026: 300 },
                { month: "May", y2025: 350, y2026: 420 },
                { month: "Jun", y2025: 500, y2026: 700 },
                { month: "Jul", y2025: 420, y2026: 560 },
                { month: "Aug", y2025: 380, y2026: 430 },
                { month: "Sep", y2025: 410, y2026: 520 },
                { month: "Oct", y2025: 450, y2026: 650 },
                { month: "Nov", y2025: 480, y2026: 720 },
                { month: "Dec", y2025: 550, y2026: 950 },
              ]
};

const ChartSlice = createSlice({
  name: "chart",
  initialState,
  reducers: {}
});

export default ChartSlice.reducer;
