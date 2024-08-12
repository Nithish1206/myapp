import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    Id: 1,
    FirstName: "John",
    LastName: "Martin",
    Email: "hariprakash99@gmail.com",
    Phone: "9942625852",
    IssueType: "Depression",
    Period: "72",
    OnboardDate: "2024-06-12",
    Training: "Enrolled",
    AssignedTo: "Bruce Wayne",
    Score: "8/10",
  },
  {
    Id: 2,
    FirstName: "hariprakash",
    LastName: "srinivasan",
    Email: "hariprakash99@gmail.com",
    Phone: "9942625852",
    IssueType: "Depression",
    Period: "72",
    OnboardDate: "2023-04-14",
    Training: "Enrolled",
    AssignedTo: "Bruce Wayne",
    Score: "8/10",
  },
];

export const PatientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
});

export default PatientSlice.reducer;
