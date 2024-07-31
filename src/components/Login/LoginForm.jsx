import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Rebirth from "../../Assests/Rebirth_logo.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  function handleSubmit() {
    console.log("Form Submitted");
  }
  return (
    <div className="w-50">
      <div className="pb-5 w-100 d-flex justify-content-center">
        <img src={Rebirth} alt="Logo" className="img-fluid" />
      </div>
      <h3>Login</h3>
      <Form>
        <Form.Group className="py-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter your Email" className="loginEmail" />
        </Form.Group>
        <Form.Group className="py-3 position-relative">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your Password" className="loginPass" />
          <div className="position-absolute passLock">
            <span className="solar--lock-password-linear"></span>
          </div>
        </Form.Group>
        <Form.Group className="d-flex py-3 justify-content-between">
          <Form.Check label="Rember me" />
          <a href="#/" className="text-decoration-none" style={{ color: "#57c9d4ff" }}>
            {" "}
            Forgot Password?
          </a>
        </Form.Group>
        <Link to="/">
          <Button variant="none" className="loginBtn w-100 text-white" onClick={() => handleSubmit()}>
            Login
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default LoginForm;
