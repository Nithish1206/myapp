import "./App.css";
import * as React from "react";
import { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const [details, setDetails] = useState([
    { lable: "First Name", value: "Jessica", type: "text" },
    { lable: "Last Name", value: "Mark", type: "text" },
    { lable: "Email Address", value: "jessica@gmail.com", type: "email" },
    { lable: "Gender", value: "Female", type: "text" },
    { lable: "DOB", value: "2003-06-12", type: "date" },
    { lable: "Phone Number", value: "+1 (201) 874 8486", type: "text" },
    { lable: "Address", value: "1027 Edgardo", type: "text" },
    { lable: "City", value: "Aelington", type: "text" },
    { lable: "State", value: "virginia", type: "text" },
    { lable: "postal Code", value: "22201", type: "text" },
  ]);
  const [User, setUser] = useState([details.filter((d) => d.lable === "First Name")[0].value, details.filter((d) => d.lable === "Email Address")[0].value]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile User={User} setUser={setUser} details={details} setDetails={setDetails} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
