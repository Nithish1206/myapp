import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { formSchema } from "../../utils/Validation";
import { useAuthMutation } from "../service/apiSlice";
import Swal from "sweetalert2";

const LoginForm = () => {
  const Rebirth = require("../../assests/Rebirth_logo.png");
  const [auth] = useAuthMutation();
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
        validationSchema={formSchema}
        onSubmit={async (values) => {
          try {
            const res = await auth({ email: values.email, password: values.password });
            if (res.data.access_token) {
              sessionStorage.setItem("token", res.data.access_token);
              navigate("/Home");
            }
          } catch (error) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
              },
            });
            Toast.fire({
              icon: "error",
              title: "Invalid Credential",
            });
          }
        }}>
        {({ errors, touched }) => (
          <Form className="vstack gap-4">
            <div>
              <label htmlFor="email" className="fw-semibold mb-2">
                Email<span className="Asterisk">*</span>
              </label>
              <br />
              <Field type="email" name="email" id="email" placeholder="Enter your email " className="rounded border border-0 p-2 w-100 loginEmail" />
              {errors.email && touched.email ? <div className="error">{errors.email}</div> : null}
            </div>

            <div>
              <label htmlFor="password" className="fw-semibold mb-2">
                Password<span className="Asterisk">*</span>
              </label>
              <br />
              <div className="position-relative">
                <Field
                  type={showPass ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="rounded border border-0 p-2 w-100 loginPass"
                />
                <span
                  className={`${showPass ? "solar--lock-password-linear" : "solar--lock-password-unlocked-linear"} position-absolute passLock`}
                  onClick={() => handleShow()}></span>
              </div>

              {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}
            </div>

            <div>
              <Field type="checkBox" id="checkBox" className="mx-1 on-hover" />
              <label htmlFor="checkBox">Remember me</label>
              <Link className="float-end text-decoration-none FP" to={""}>
                Forgot Password ?
              </Link>
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
