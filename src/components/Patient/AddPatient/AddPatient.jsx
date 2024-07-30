import React from "react";
import "../../CSS/AddPatient.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import AddPatientDemographic from "./AddPatientDemographic";
import { useState } from "react";
import AddPatientIssueDetail from "./AddPatientIssueDetail";

const AddPatient = () => {
  const [showComponent, setShowComponent] = useState("A");
  return (
    <div className="m-3 m-md-5">
      <div className="d-flex">
        <Link to="/PatientList" className="text-decoration-none">
          <h4 className="text-secondary">Patients List</h4>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>
        <h4>Add Patients</h4>
      </div>
      <Row className="mt-4 m-0 p-0">
        <Col className={`${showComponent === "A" ? "heading-style" : "heading-no-style"} d-flex justify-content-center p-1 m-0 pb-2 on-hover`}>
          <h4 onClick={() => setShowComponent("A")}>Patients Demographics</h4>
        </Col>
        <Col className={`${showComponent === "B" ? "heading-style" : "heading-no-style"} d-flex justify-content-center p-1 m-0 pb-2 on-hover`}>
          <h4 onClick={() => setShowComponent("B")}>Patient issue Details</h4>
        </Col>
        <div>
          {showComponent === "A" && <AddPatientDemographic setShow={setShowComponent} />}
          {showComponent === "B" && <AddPatientIssueDetail />}
        </div>
      </Row>
    </div>
  );
};

export default AddPatient;
