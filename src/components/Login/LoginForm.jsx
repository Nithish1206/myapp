import React, { useState } from "react";
import Rebirth from "../../Assests/Rebirth_logo.png";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { formValidation } from "../Providers/Validation";

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(true);
  const handleShow = () => {
    setShowPass(!showPass);
  };
  return (
    <div className="w-50">
      <div className="pb-5 w-100 d-flex justify-content-center">
        <img src={Rebirth} alt="Logo" className="img-fluid" />
      </div>
      <h3 className="mb-3">Login</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formValidation}
        onSubmit={(values) => {
          console.log("submitted", values);
          sessionStorage.setItem("token", true);
          navigate("/");
        }}>
        {({ errors, touched }) => (
          <Form className="vstack gap-4">
            <div>
              <label htmlFor="email">Email</label>
              <br />
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                className="rounded border border-0 p-2 w-100 loginEmail"
              />
              {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <br />
              <div className="position-relative">
                <Field
                  type={showPass ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter password"
                  className="rounded border border-0 p-2 w-100 loginPass"
                />
                <span
                  className={`${
                    showPass ? "solar--lock-password-linear" : "solar--lock-password-unlocked-linear"
                  } position-absolute passLock`}
                  onClick={() => handleShow()}></span>
              </div>

              {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
            </div>

            <div>
              <Field type="checkBox" id="checkBox" className="mx-1 on-hover" />
              <label htmlFor="checkBox">Remember me</label>
              <Link className="float-end text-decoration-none FP">Forget Password ?</Link>
            </div>

            <button type="submit" className="border-0 rounded p-2 loginBtn">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
