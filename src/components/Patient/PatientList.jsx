import React from "react";
import "../CSS/PatientList.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import Swal from "sweetalert2";

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

        <td className=" Action text-center text-nowrap">
          <button className="bxs--edit border-0 outline-none me-1" onClick={() => handleEdit(list.Id)}></button>
          <button
            className="material-symbols--delete-outline border-0 outline-none ms-1"
            onClick={() => handleDelete(list.Id)}></button>
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
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const temp = patient.filter((list) => list.Id !== id);
        localStorage.setItem("PatientData", JSON.stringify(temp));
        navigate("/PatientList");
      }
    });
  };

  return (
    <div className="p-3 p-md-5">
      <header className="d-flex justify-content-between flex-wrap ">
        <h3 className="col-12 col-md-6 m-0 p-0">Patient List</h3>
        <div className="col-12 col-md-6 d-flex align-items-center w-auto">
          <div className="icon-input rounded-3 p-1 px-3 w-100 ">
            <Icon icon="ion:search" width="1.5rem" height="1.5rem" className="search-icon" />
            <input type="search" placeholder="Search" className="d-flex border-0 search-input ps-2 w-auto flex-fill" />
          </div>

          <Link to="/PatientList/AddPatient" className="m-0 p-2">
            <Icon icon="mingcute:add-fill" width="2.3rem" height="2.3rem" className="plus-icon p-1 rounded p-2" />
          </Link>
        </div>
      </header>
      <div className="table-responsive border border-1 mt-4 m-0 p-0 overflow-y-auto shadow rounded-3">
        <table className="table m-0 p-0 text-center">
          <thead>
            <tr>
              <th scope="col">Patient ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Issue Type</th>
              <th scope="col">Consuption Period</th>
              <th scope="col">Onboarded Date</th>
              <th scope="col">Training</th>
              <th scope="col">Assign To</th>
              <th scope="col">Score</th>
              <th className="Action" scope="col">
                Action
              </th>
            </tr>
          </thead>
          <tbody>{PatientDetails()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientList;
