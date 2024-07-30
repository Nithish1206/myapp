import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PatientIssueDetail = () => {
  const navigate = useNavigate();
  const details = JSON.parse(sessionStorage.getItem("AddDetail"));
  const existData = JSON.parse(localStorage.getItem("PatientData"));
  const length = existData.length;
  const setpatientList = () => {
    const List = {
      Id: existData[length - 1].Id + 1,
      FirstName: details[0].value,
      LastName: details[1].value,
      Email: details[2].value,
      Phone: details[3].value,
      IssueType: "Depression",
      Period: details[5].value,
      OnboardDate: details[6].value,
      Training: details[7].value,
      AssignedTo: details[8].value,
      Score: "5/10",
    };
    localStorage.setItem("PatientData", JSON.stringify([...existData, List]));
    sessionStorage.setItem("AddDetails", JSON.stringify());
    navigate("/PatientList");
  };
  return (
    <div>
      <Row className="mt-4"></Row>
      <Row className="mt-5 border border-1 rounded p-4 d-flex">
        <Col className="d-flex justify-content-end gap-4">
          <button className="border-0 p-2 px-3 rounded cancelbtn fw-semibold text-secondary">Cancel</button>
          <button
            className="border-0 p-2 px-4 rounded nextbtn fw-semibold text-white"
            onClick={() => {
              setpatientList();
            }}>
            Add
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default PatientIssueDetail;
