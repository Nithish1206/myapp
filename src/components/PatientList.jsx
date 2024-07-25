import React, { useState } from "react";
import "./CSS/PatientList.css";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const PatientList = () => {
  const [patient, setPatient] = useState([
    {
      id: 1,
      name: "John",
      email: "hariprakash99@gmail.com",
      phone: "9942625852",
      issueType: "Depression",
      period: "72",
      onboardDate: "12/06/2024",
      training: "Enrolled",
      assignedTo: "Bruce Wayne",
      score: "8/10",
    },
    {
      id: 2,
      name: "hariprakash",
      email: "hariprakash99@gmail.com",
      phone: "9942625852",
      issueType: "Depression",
      period: "72",
      onboardDate: "12/06/2024",
      training: "Enrolled",
      assignedTo: "Bruce Wayne",
      score: "8/10",
    },
  ]);
  const PatientDetails = () => {
    const List = patient.map((list, index) => (
      <tr key={index}>
        <td>{list.id}</td>
        <td>{list.name}</td>
        <td>{list.email}</td>
        <td>{list.phone}</td>
        <td>{list.issueType}</td>
        <td>{list.period}</td>
        <td>{list.onboardDate}</td>
        <td>{list.training}</td>
        <td>{list.assignedTo}</td>
        <td>{list.score}</td>
        <td className="d-flex justify-content-evenly">
          <button className="me-2 p-1">edit</button>
          <button className="p-1">Delete</button>
        </td>
      </tr>
    ));
    return List;
  };
  ////Add Patient

  return (
    <div className="m-5">
      <header className="d-flex justify-content-between">
        <h3>Patient List</h3>
        <div className="d-flex align-items-center w-25">
          <div className="icon-input rounded-3 p-1 px-3 w-100 ">
            <Icon icon="ion:search" width="1.5rem" height="1.5rem" className="search-icon" />
            <input type="search" placeholder="Search" className="d-flex border-0 search-input ps-2 w-auto flex-fill" />
          </div>

          <Link to="/PatientList/AddPatient" className="m-0 p-2">
            <Icon icon="mingcute:add-fill" width="2.3rem" height="2.3rem" className="plus-icon p-1 rounded p-2" />
          </Link>
        </div>
      </header>
      <div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Patient ID</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Issue Type</th>
              <th scope="col">Consuption Period</th>
              <th scope="col">Onboarded Date</th>
              <th scope="col">Training</th>
              <th scope="col">Assign To</th>
              <th scope="col">Score</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{PatientDetails()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
