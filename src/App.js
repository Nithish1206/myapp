import "./App.css";
import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import { Row, Col } from "react-bootstrap";
import SideBar from "./components/SideBar";
import Navigation from "./components/Navigation";
import Login from "./components/Login";

function App() {
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
    <Row className="vh-100 m-0 p-0">
      <Col xs={1} className="col1 p-0 m-0 w-auto">
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <Navigation name={User[0]} />
        <Routes>
          <Route path="/" />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Profile" element={<Profile User={User} setUser={setUser} details={details} setDetails={setDetails} />} />
        </Routes>
      </Col>
    </Row>
  );
};

export default App;
