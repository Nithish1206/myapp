import "./App.css";
import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { Row, Col } from "react-bootstrap";
import SideBar from "./components/SideBar/SideBar";
import Navigation from "./components/Navigation";
import Login from "./components/Login/Login";
import PatientList from "./components/Patient/PatientList";
import AddPatient from "./components/Patient/AddPatient/AddPatient";
import PatientProfile from "./components/Patient/PatientProfile";
import Records from "./components/Patient/Records.json";
import EditPatientDetail from "./components/Patient/EditPatient/EditPatientDetail";
import Home from "./components/Home";
import Providers from "./components/Providers/Providers";
import AddProviders from "./components/Providers/AddProviders";
import ViewProviders from "./components/Providers/ViewProviders";
import EditProviders from "./components/Providers/EditProviders";
import ProtectRouter from "./components/ProtectRouter/ProtectRouter";

function App() {
  const storedData = JSON.parse(localStorage.getItem("PatientData"));
  if (!storedData) {
    console.log("Session Stroage initial Update...");
    localStorage.setItem("PatientData", JSON.stringify(Records));
    console.log("local storage updated");
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
}
const AppRouter = () => {
  const [details, setDetails] = useState([
    { label: "First Name", value: "Jessica", type: "text" },
    { label: "Last Name", value: "Mark", type: "text" },
    { label: "Email Address", value: "jessica@gmail.com", type: "email" },
    { label: "Gender", value: "Female", type: "text" },
    { label: "DOB", value: "2003-06-12", type: "date" },
    { label: "Phone Number", value: "+1 (201) 874 8486", type: "text" },
    { label: "Address", value: "1027 Edgardo", type: "text" },
    { label: "City", value: "Aelington", type: "text" },
    { label: "State", value: "virginia", type: "text" },
    { label: "Postal Code", value: "22201", type: "text" },
  ]);
  const [User, setUser] = useState([details[0].value, details[2].value]);
  return (
    <Row className="vh-100 m-0 p-0 d-flex flex-nowrap">
      <Col md={1} className="col1 p-0 m-0 w-auto">
        <SideBar />
      </Col>
      <Col className="p-0 m-0 overflow-x-hidden">
        <Navigation name={User[0]} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectRouter />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/PatientList" element={<PatientList />} />
            <Route path="PatientList/PatientProfile/:id" element={<PatientProfile />} />
            <Route path="/PatientList/AddPatient" element={<AddPatient />} />
            <Route path="/PatientList/EditProfile/:id" element={<EditPatientDetail />} />
            <Route
              path="/Profile"
              element={<Profile User={User} setUser={setUser} details={details} setDetails={setDetails} />}
            />
            <Route path="/Providers" element={<Providers />} />
            <Route path="/Providers/AddProviders" element={<AddProviders />} />
            <Route path="/Providers/ViewProvider/:id" element={<ViewProviders />} />
            <Route path="/Providers/EditProviders/:id" element={<EditProviders />} />
          </Route>
        </Routes>
      </Col>
    </Row>
  );
};

export default App;
