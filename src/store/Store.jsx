import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "../components/patient/PatientSlice";

export const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});
