import React from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../../Assests/Logo.png";
import { Spinner } from "react-bootstrap";
import "../CSS/Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  const title = {
    heading: "Empowering healthcare professionals",
    para1: "Empowering healthcare Professionals to deliver",
    para2: "exceptional care while enhancing patient outcomes",
  };
  return (
    <div className="login-page">
      <Row className="m-0 p-0">
        <Col className="d-flex justify-content-center align-items-center position-relative p-0 m-0 ">
          <div className="text-white text-center ">
            <img src={logo} alt="logo" />
            <h1 className="m-0 p-0 mb-3">{title.heading}</h1>
            <p className="p-0 m-0 mb-2">{title.para1}</p>
            <p>{title.para2}</p>
          </div>
          <Spinner animation="border" variant="white" role="status" className="position-absolute spinner-login" />
        </Col>
        <Col className="login-box d-flex align-item-center justify-content-center m-0 p-0">
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
};
export default Login;
