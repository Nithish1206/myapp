import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";

const AddPatientDemographic = ({ setShow }) => {
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

  return (
    <Row className="mt-5 border border-1 rounded p-4 d-flex">
      {AddPatientDetails(details)}
      <Col className="d-flex justify-content-end gap-4">
        <button className="border-0 p-2 px-3 rounded cancelbtn fw-semibold text-secondary">Cancel</button>
        <button className="border-0 p-2 px-4 rounded nextbtn fw-semibold text-white" onClick={() => setShow("B")}>
          Next
        </button>
      </Col>
    </Row>
  );
};

export default AddPatientDemographic;
