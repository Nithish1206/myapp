import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import pic from "../Assests/doc.jpg";
import "./CSS/PatientProfile.css";

const PatientProfile = () => {
  const { id } = useParams();
  const AllPerson = JSON.parse(localStorage.getItem("PatientData"));
  const person = AllPerson.find((al) => al.id === parseInt(id));
  return (
    <div className="m-5">
      <div className="d-flex">
        <Link to="/PatientList" className="text-decoration-none">
          <h3 className="text-secondary">Patients List</h3>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>
        <h3>{person.name}</h3>
      </div>
      <div>
        <Row className="profile-nav rounded-3">
          <Col className="d-flex m-0 p-0 p-2 align-items-center">
            <div className="ps-3">
              <img src={pic} alt="profile" className="rounded-3" width={100} height={100} />
            </div>
            <div className="p-2 px-3">
              <div className="d-flex">
                <h5 className="p-0 m-0 pe-3">{person.name}</h5>
                <p className="text-success p-0 m-0">Active</p>
              </div>
              <div>
                <p className="issue-css p-0 m-0 mt-2 text-center">{person.issueType}</p>
                <div className="d-flex mt-2">
                  <p className="text-secondary p-0 m-0">Score : &nbsp;</p>
                  <p className="score-css p-0 m-0">{person.score}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col>Column</Col>
        </Row>
      </div>
    </div>
  );
};

export default PatientProfile;
