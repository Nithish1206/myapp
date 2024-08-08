import "./App.css";
import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { Row, Col } from "react-bootstrap";
import SideBar from "./components/sidebar/SideBar";
import Navigation from "./components/Navigation";
import Login from "./components/login/Login";
import PatientList from "./components/patient/PatientList";
import AddPatient from "./components/patient/add-patient/AddPatient";
import PatientProfile from "./components/patient/PatientProfile";
import Records from "./components/patient/Records.json";
import EditPatientDetail from "./components/patient/edit-patient/EditPatientDetail";
import Home from "./components/Home";
import Providers from "./components/providers/Providers";
import AddProviders from "./components/providers/AddProviders";
import ProvidersProfile from "./components/providers/ProvidersProfile";
import EditProviders from "./components/providers/EditProviders";
import PrivateRouter from "./components/private-router/PrivateRouter";

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
        <Route path="/" element={<Login />} />
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
      <Col md={1} className="col1 p-0 m-0 w-auto sticky-top">
        <SideBar />
      </Col>

      <Col className="p-0 m-0">
        <Navigation name={User[0]} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route element={<PrivateRouter />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/PatientList" element={<PatientList />} />
            <Route path="PatientList/PatientProfile/:id" element={<PatientProfile />} />
            <Route path="/PatientList/AddPatient" element={<AddPatient />} />
            <Route path="/PatientList/EditProfile/:id" element={<EditPatientDetail />} />
            <Route path="/Profile" element={<Profile User={User} setUser={setUser} details={details} setDetails={setDetails} />} />
            <Route path="/Providers" element={<Providers />} />
            <Route path="/Providers/AddProviders" element={<AddProviders />} />
            <Route path="/Providers/ProviderProfile/:id" element={<ProvidersProfile />} />
            <Route path="/Providers/EditProviders/:id" element={<EditProviders />} />
          </Route>
        </Routes>
      </Col>
    </Row>
  );
};

export default App;
