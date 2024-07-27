import React from "react";
import "../CSS/PatientList.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const PatientList = () => {
  const navigate = useNavigate();
  const patient = JSON.parse(sessionStorage.getItem("PatientData"));
  const PatientDetails = () => {
    const List = patient.map((list, index) => (
      <tr key={index} onClick={() => handleClick(list.id)} className="on-hover">
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
          <span className="bxs--edit"></span>
          <span className="material-symbols--delete-outline"></span>
        </td>
      </tr>
    ));
    return List;
  };
  ///handleClick
  const handleClick = (id) => {
    console.log("clicked");
    navigate(`/PatientList/PatientProfile/${id}`);
  };

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
        <table className="table table-hover table-bordered mt-4">
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
