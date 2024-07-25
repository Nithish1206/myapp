import React from "react";
import "./CSS/AddPatient.css";
import { Link } from "react-router-dom";
import { Row, Col, Placeholder } from "react-bootstrap";

const AddPatient = () => {
  const [detail, setDetail] = [
    { label: "First Name", Placeholder: "Enter first Name", value: "", type: "text" },
    { label: "Last Name", Placeholder: "Enter last Name", value: "", type: "text" },
    { label: "Email Address", Placeholder: "Enter email address", value: "", type: "email" },
    { label: "Emergency Contact Number", Placeholder: "Enter emergency contact number", value: "", type: "text" },
    { label: "DOB", Placeholder: "Enter dob", value: "", type: "date" },
    { label: "Consumption Period", Placeholder: "Enter Consumption Period", value: "", type: "text" },
    { label: "Onboard Date", Placeholder: "Enter onboard date", value: "", type: "date" },
    { label: "Training", Placeholder: "Select training", value: "", type: "text" },
  ];
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
        {/* <div>{AddPatientDetail()}</div> */}
      </div>
    </div>
  );
};

export default AddPatient;
