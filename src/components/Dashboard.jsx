import React from "react";

import PE from "../Assests/Frame 20.png";
import PIT from "../Assests/Frame 22.png";
import RP from "../Assests/Frame 21.png";
import "./CSS/Dashboard.css";
import { Row, Col } from "react-bootstrap";

const Dashboard = () => {
  const box1 = { title: "Patients Enrolled", count: 120, img: PE };
  const box2 = { title: "Patients in treatment", count: 80, img: PIT };
  const box3 = { title: "Recoverd Patients", count: 220, img: RP };

  function box(input) {
    return (
      <Col md={12} lg={3} className="m-0 p-0">
        <div className="boxcss d-flex justify-content-between align-items-center rounded-4 p-3 ">
          <div>
            <h4>{input.title}</h4>
            <h4>{input.count}</h4>
          </div>
          <div>
            <img src={input.img} alt="img" className="p-2" />
          </div>
        </div>
      </Col>
    );
  }
  return (
    <div className="ms-3 ms-md-5 m-0 p-0">
      <Row className="w-100">
        <h2 className="w-100 mt-3">Dashboard</h2>
      </Row>
      <Row className="gap-5 mt-4 w-100">
        {box(box1)}
        {box(box2)}
        {box(box3)}
      </Row>
    </div>
  );
};

export default Dashboard;
