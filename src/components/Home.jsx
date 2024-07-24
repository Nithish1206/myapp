import React from "react";
import { Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import "./CSS/Home.css";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <Row className="vh-100 m-0 p-0">
      <Col xs={1} className="col1 p-0 m-0 w-auto">
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <Navigation />
      </Col>
    </Row>
  );
};

export default Home;
