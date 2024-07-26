import React from "react";
import "./CSS/AddPatient.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const AddPatient = () => {
  const patient = JSON.parse(localStorage.getItem("PatientData"));
  const length = patient.length;
  const [details, setDetails] = useState([
    { label: "First Name", Placeholder: "Enter first Name", value: "", type: "text" },
    { label: "Last Name", Placeholder: "Enter last Name", value: "", type: "text" },
    { label: "Email Address", Placeholder: "Enter email address", value: "", type: "email" },
    { label: "Emergency Contact Number", Placeholder: "Enter emergency contact number", value: "", type: "text" },
    { label: "DOB", Placeholder: "Enter dob", value: "", type: "date" },
    { label: "Consumption Period", Placeholder: "Enter Consumption Period", value: "", type: "text" },
    { label: "Onboard Date", Placeholder: "Enter onboard date", value: "", type: "date" },
    { label: "Training", Placeholder: "Select training", value: "", type: "text" },
    { label: "Assigned To", placeholder: "Assigned to", valur: "", type: "text" },
  ]);

  const AddPatientDetails = (details) => {
    const List = details.map((detail, index) => (
      <Col lg={4} key={index} className="mb-5">
        <div>
          <label htmlFor={index} className="pb-2">
            {detail.label}
          </label>
          <input type={detail.type} className="form-control shadow-none" value={detail.value} id={index} placeholder={detail.Placeholder} onChange={(e) => handleChange(e.target.value, index)} />
        </div>
      </Col>
    ));
    return List;
  };

  const handleChange = (value, index) => {
    const list = [...details];
    list[index].value = value;
    setDetails(list);
  };

  const setpatientList = () => {
    const List = {
      id: length + 1,
      name: details[0].value + " " + details[1].value,
      email: details[2].value,
      phone: details[3].value,
      issueType: "Depression",
      period: details[5].value,
      onboardDate: details[6].value,
      training: "Enrolled",
      assignedTo: "Bruce Wayne",
      score: "5/10",
    };
    localStorage.setItem("PatientData", JSON.stringify([...patient, List]));
  };

  return (
    <div className="m-5">
      <div className="d-flex">
        <Link to="/PatientList" className="text-decoration-none">
          <h3 className="text-secondary">Patients List</h3>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>
        <h3>Add Patients</h3>
      </div>
      <div>
        <Row className="mt-4">
          <Col className="patient-demo d-flex justify-content-center p-0 m-0 pb-2">
            <h4>Patients Demographics</h4>
          </Col>
          <Col className="patient-issue d-flex justify-content-center p-0 m-0 pb-2">
            <h4>Patient issue Details</h4>
          </Col>
        </Row>
        <Row className="mt-5 border border-1 rounded p-4">
          {AddPatientDetails(details)}

          <Col className="d-flex justify-content-end gap-4">
            <button className="border-0 p-2 px-3 rounded cancelbtn fw-semibold text-secondary">Cancel</button>
            <button className="border-0 p-2 px-4 rounded nextbtn fw-semibold text-white" onClick={() => setpatientList()}>
              Add
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddPatient;
