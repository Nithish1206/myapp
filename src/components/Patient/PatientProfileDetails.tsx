import React from "react";
import { Row, Col } from "react-bootstrap";

interface Props {
  person: { [key: string]: string };
}

const PatientProfileDetails: React.FC<Props> = ({ person }) => {
  const handledetails = () => {
    return Object.entries(person).map(([key, value]) => (
      <Col md={6} lg={3} key={key} className="mb-4">
        <p className="fw-medium m-0 p-0 pb-2">{key}</p>
        <p className="text-secondary">{value}</p>
      </Col>
    ));
  };

  return (
    <div>
      <Row className="mt-4">
        <Col md={12} lg={3} className="heading-style">
          <div className="d-flex justify-content-center align-items-center">
            <h5>Patient demograpic</h5>
          </div>
        </Col>
        <Col md={3} className="heading-no-style d-none d-lg-block">
          <div className="d-flex justify-content-center align-items-center text-muted">
            <h5>Medical history</h5>
          </div>
        </Col>
        <Col md={3} className="heading-no-style d-none d-lg-block">
          <div className="d-flex justify-content-center align-items-center text-muted">
            <h5>Clinical Trails</h5>
          </div>
        </Col>
        <Col md={3} className="heading-no-style d-none d-lg-block">
          <div className="d-flex justify-content-center align-items-center text-muted">
            <h5>Doctor Notes</h5>
          </div>
        </Col>
      </Row>

      <Row id="obj-container" className="d-flex mt-5 p-4 pt-5 border border-1 rounded">
        {handledetails()}
      </Row>
    </div>
  );
};

export default PatientProfileDetails;
