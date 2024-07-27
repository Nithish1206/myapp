import React from "react";
import { Row, Col } from "react-bootstrap";

const PatientIssueDetail = () => {
  // const patient = JSON.parse(localStorage.getItem("PatientData"));
  // const length = patient.length;
  // const setpatientList = () => {
  //   const List = {
  //     id: length + 1,
  //     name: details[0].value + " " + details[1].value,
  //     email: details[2].value,
  //     phone: details[3].value,
  //     issueType: "Depression",
  //     period: details[5].value,
  //     onboardDate: details[6].value,
  //     training: "Enrolled",
  //     assignedTo: "Bruce Wayne",
  //     score: "5/10",
  //   };
  //   localStorage.setItem("PatientData", JSON.stringify([...patient, List]));
  // };
  return (
    <div>
      <Row className="mt-4"></Row>
      <Row className="mt-5 border border-1 rounded p-4 d-flex">
        <Col className="d-flex justify-content-end gap-4">
          <button className="border-0 p-2 px-3 rounded cancelbtn fw-semibold text-secondary">Cancel</button>
          <button className="border-0 p-2 px-4 rounded nextbtn fw-semibold text-white" onClick={() => {}}>
            Add
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default PatientIssueDetail;
