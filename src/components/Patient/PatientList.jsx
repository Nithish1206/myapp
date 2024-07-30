import React from "react";
import "../CSS/PatientList.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const PatientList = () => {
  const navigate = useNavigate();

  const patient = JSON.parse(localStorage.getItem("PatientData"));
  const PatientDetails = () => {
    const List = patient.map((list, index) => (
      <tr key={index}>
        {Object.entries(list).map(([key, value]) => (
          <td className="on-hover" key={key} onClick={() => handleClick(list.Id)}>
            {value}
          </td>
        ))}

        <td className="d-flex justify-content-evenly gap-3">
          <button className="bxs--edit border-0 outline-none" onClick={() => handleEdit(list.Id)}></button>
          <button className="material-symbols--delete-outline border-0 outline-none" onClick={() => handleDelete(list.Id)}></button>
        </td>
      </tr>
    ));
    return List;
  };
  ///handleClick
  const handleClick = (id) => {
    navigate(`/PatientList/PatientProfile/${id}`);
  };
  ///handleEdit
  const handleEdit = (id) => {
    navigate(`/PatientList/EditProfile/${id}`);
  };
  ///handleDelete
  const handleDelete = (id) => {
    const temp = patient.filter((list) => list.Id !== id);
    localStorage.setItem("PatientData", JSON.stringify(temp));
    navigate("/PatientList");
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
        <table className="table table-bordered mt-4">
          <thead className="text-center">
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
