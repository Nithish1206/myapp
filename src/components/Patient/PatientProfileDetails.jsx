import React from "react";
import { Row, Col } from "react-bootstrap";

const PatientProfileDetails = ({ person }) => {
  const handleDetails = () => {
    console.log(person);
  };
  return (
    <div>
      <Row className="mt-3">
        <Col md={3} className="heading-style">
          <div className="d-flex justify-content-center align-items-center">
            <h5>Patient demograpic</h5>
          </div>
        </Col>
        <Col md={3} className="heading-no-style">
          <div className="d-flex justify-content-center align-items-center text-muted">
            <h5>Patient demograpic</h5>
          </div>
        </Col>
        <Col md={3} className="heading-no-style">
          <div className="d-flex justify-content-center align-items-center text-muted">
            <h5>Patient demograpic</h5>
          </div>
        </Col>
        <Col md={3} className="heading-no-style">
          <div className="d-flex justify-content-center align-items-center text-muted">
            <h5>Patient demograpic</h5>
          </div>
        </Col>
      </Row>
      <Row>{handleDetails()}</Row>
    </div>
  );
};

export default PatientProfileDetails;
