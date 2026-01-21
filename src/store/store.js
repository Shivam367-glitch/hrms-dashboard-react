import { configureStore } from "@reduxjs/toolkit";
import kpiReducer from "../features/kpiSlice.js";
import chartReducer from "../features/chartSlice.js";
import employpeeReducer from "../features/employpeeSlice.js";

export const store = configureStore({
  reducer: {
    kpi: kpiReducer,
    chart: chartReducer,
    employpee: employpeeReducer
  }
});
