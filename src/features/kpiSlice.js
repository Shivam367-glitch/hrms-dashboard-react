import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  kpiData: [
    {
      id: 1,
      title: "Total Employees",
      value: 148,
      color: "#0d6efd",
      breakdown: [
        { label: "BILLP", value: 55 },
        { label: "BSIBPL", value: 65 },
        { label: "Baid & Company", value: 28 }
      ]
    },
    {
      id: 2,
      title: "Present Today",
      value: 98,
      color: "#f59e0b",
      breakdown: [
        { label: "BILLP", value: 45 },
        { label: "BSIBPL", value: 5 },
        { label: "Baid & Company", value: 48 }
      ]
    },
    {
      id: 3,
      title: "Absent Today",
      value: 50,
      color: "#0ea5e9",
      breakdown: [
        { label: "BILLP", value: 20 },
        { label: "BSIBPL", value: 20 },
        { label: "Baid & Company", value: 10 }
      ]
    },
    {
      id: 4,
      title: "Total Attendance Rate",
      value: "87%",
      color: "#7c3aed",
      breakdown: [
        { label: "BILLP", value: "77%" },
        { label: "BSIBPL", value: "84%" },
        { label: "Baid & Company", value: "82%" }
      ]
    }
  ]
};

const kpiSlice = createSlice({
  name: "kpi",
  initialState,
  reducers: {}
});

export default kpiSlice.reducer;
