import React from "react";
import "../../../css/AddPatient.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import EditPatientDemographic from "./EditPatientDemographic";
import { useParams } from "react-router-dom";
import EditPatientIssue from "./EditPatientIssue";

const AddPatient = () => {
  const { id } = useParams<string>();
  const AllPerson = JSON.parse(localStorage.getItem("PatientData") || "");
  const person = AllPerson.find((al: { Id: string | undefined }) => al.Id === id);

  const [showComponent, setShowComponent] = useState("A");
  return (
    <div className="m-3 m-md-5">
      <div className="d-flex">
        <Link to="/PatientList" className="text-decoration-none">
          <h4 className="text-secondary">Patients List</h4>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>
        <h4>{person.FirstName + " " + person.LastName}</h4>
      </div>
      <Row className="mt-4 m-0 p-0">
        <Col
          className={`${showComponent === "A" ? "heading-style" : "heading-no-style"} 
          d-flex justify-content-center p-1 m-0 pb-2 on-hover`}>
          <h4 onClick={() => setShowComponent("A")}>Patients Demographics</h4>
        </Col>
        <Col
          className={`${showComponent === "B" ? "heading-style" : "heading-no-style"} 
          d-flex justify-content-center p-1 m-0 pb-2 on-hover`}>
          <h4 onClick={() => setShowComponent("B")}>Patient issue Details</h4>
        </Col>
        <div>
          {showComponent === "A" && <EditPatientDemographic setShow={setShowComponent} person={person} />}
          {showComponent === "B" && <EditPatientIssue />}
        </div>
      </Row>
    </div>
  );
};

export default AddPatient;
