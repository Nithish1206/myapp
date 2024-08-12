import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

interface EDvalue {
  Id: string | undefined;
  FirstName: any;
  LastName: any;
  Email: any;
  Phone: any;
  IssueType: string;
  Period: any;
  OnboardDate: any;
  Training: any;
  AssignedTo: any;
  Score: string;
}

const EditPatientIssue: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const details = JSON.parse(sessionStorage.getItem("AddDetail") || "");
  const existData = JSON.parse(localStorage.getItem("PatientData") || "");

  const EditpatientList = () => {
    const List: EDvalue = {
      Id: id,
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
    const temp = existData.map((ED: EDvalue, index: string | number) => (ED.Id === id ? { ...ED, ...List } : ED));
    localStorage.setItem("PatientData", JSON.stringify(temp));
    navigate("/PatientList");
  };

  return (
    <div>
      <Row className="mt-4"></Row>
      <Row className="mt-5 border border-1 rounded p-4 d-flex">
        <Col className="d-flex justify-content-end gap-4">
          <button className="border-0 p-2 px-3 rounded cancelbtn fw-semibold text-secondary">Cancel</button>
          <button className="border-0 p-2 px-4 rounded nextbtn fw-semibold text-white" onClick={EditpatientList}>
            Save
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default EditPatientIssue;
