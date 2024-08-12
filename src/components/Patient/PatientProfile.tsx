import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "../../css/PatientProfile.css";
import PatientProfileDetails from "./PatientProfileDetails";

const PatientProfile = () => {
  const pic = require("../../assests/doc.jpg");
  const { id } = useParams();
  const AllPerson = JSON.parse(localStorage.getItem("PatientData") || "[]");
  const person = AllPerson.find((al: { Id: number }) => al.Id === Number(id));

  return (
    <div className="m-5">
      <div className="d-flex">
        <Link to="/PatientList" className="text-decoration-none">
          <h4 className="text-secondary">Patients List</h4>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>
        <h4>{person.FirstName + " " + person.LastName}</h4>
      </div>
      <div className="mt-3">
        <Row className="profile-nav rounded-3">
          <Col className="d-flex m-0 p-0 p-2 align-items-center col-12 col-md-6">
            <div className="ps-3">
              <img src={pic} alt="profile" className="rounded-3 " width={90} height={90} />
            </div>
            <div className="p-2 px-3">
              <div className="d-flex align-items-end flex-wrap">
                <p className="p-0 m-0 pe-3 fw-semibold fs-5 ">{person.FirstName + " " + person.LastName}</p>
                <p className="text-success p-0 m-0 fw-medium d-flex align-items-center">
                  <span className="bi--dot"></span>Active
                </p>
              </div>
              <div>
                <p className="issue-css p-0 m-0 mt-2 text-center">{person.IssueType}</p>
                <div className="d-flex mt-2">
                  <p className="text-secondary p-0 m-0">Score : &nbsp;</p>
                  <p className="score-css p-0 m-0">{person.Score}</p>
                </div>
              </div>
            </div>
          </Col>
          <Col className="d-flex align-items-center justify-content-center justify-content-md-end">
            <div className="d-flex flex-nowrap p-0 border border-1 rounded me-2">
              <span className="tabler--message-dots m-2"></span>
              <span className="fluent--call-16-regular m-2"></span>
              <span className="fluent--video-32-regular m-2"></span>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <PatientProfileDetails person={person} />
      </div>
    </div>
  );
};

export default PatientProfile;
