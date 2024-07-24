import React from "react";

import { Row, Col } from "react-bootstrap";
import PE from "../Assests/Frame 20.png";
import PIT from "../Assests/Frame 22.png";
import RP from "../Assests/Frame 21.png";
import "./CSS/Dashboard.css";
import SideBar from "./SideBar";
import Navigation from "./Navigation";

const Dashboard = () => {
  const box1 = { title: "Patients Enrolled", count: 120, img: PE };
  const box2 = { title: "Patients in treatment", count: 80, img: PIT };
  const box3 = { title: "Recoverd Patients", count: 220, img: RP };

  function box(input) {
    return (
      <Col className="m-0 p-0">
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
    <Row className="vh-100 m-0 p-0">
      <Col xs={1} className="col1 p-0 m-0 w-auto">
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <Navigation />
        <div className="ms-5 m-0 p-0">
          <Row className="w-100">
            <h2 className="w-100 mt-3">Dashboard</h2>
          </Row>
          <Row className="gap-5 mt-4 w-100">
            {box(box1)}
            {box(box2)}
            {box(box3)}
            <Col></Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Dashboard;
