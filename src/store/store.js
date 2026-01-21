import { configureStore } from "@reduxjs/toolkit";
import kpiReducer from "../features/kpiSlice.js";

export const store = configureStore({
  reducer: {
    kpi: kpiReducer
  }
});
