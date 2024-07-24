import React from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import Navigation from "../Navigation/Navigation";
import Dashboard from "../Dashboard/Dashboard";

const Home = () => {
  return (
    <Row className="vh-100 m-0 p-0">
      <Col xs={1} className="col1 p-0 m-0 w-auto">
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <Navigation />
        <Dashboard />
      </Col>
    </Row>
  );
};

export default Home;
