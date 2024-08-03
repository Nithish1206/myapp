import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { listValidation } from "./Validation";

const AddProviders = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/Providers");
  };

  const handleSave = async (values) => {
    await axios.post("https://api.escuelajs.co/api/v1/products", values).then((response) => console.log(response));
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    Toast.fire({
      icon: "success",
      title: "Saved successfully",
    });
    navigate("/Providers");
  };

  return (
    <div className="m-3 m-md-5">
      <div className="d-flex">
        <Link to="/Providers" className="text-decoration-none">
          <h4 className="text-secondary">Providers</h4>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>
        <h4>Add Providers</h4>
      </div>
      <Row className="mt-5 m-0 p-0 d-flex justify-content-center">
        <Col lg={5} className="rounded-4 p-5 shadow-lg">
          <Formik
            initialValues={{
              title: "",
              price: "",
              images: [`https://i.imgur.com/62gGzeF.jpeg`],
              description: "",
              categoryId: 1,
            }}
            validationSchema={listValidation}
            onSubmit={(values) => {
              handleSave(values);
            }}>
            {({ errors, touched }) => (
              <Form className="vstack gap-2">
                <label htmlFor="title">Title</label>
                <Field name="title" placeholder="Enter title" className="rounded border border-1 p-2 " />
                {errors.title && touched.title ? <div className="text-danger">{errors.title}</div> : null}

                <label htmlFor="title">Price</label>
                <Field name="price" placeholder="Enter price" type="number" className="rounded border border-1 p-2 " />
                {errors.price && touched.price ? <div className="text-danger">{errors.price}</div> : null}

                <label htmlFor="title">Description</label>
                <Field
                  name="description"
                  type="text"
                  placeholder="Enter Description"
                  className="rounded border border-1 p-2 "
                />
                {errors.description && touched.description ? (
                  <div className="text-danger">{errors.description}</div>
                ) : null}
                <button type="submit" className="border-0 rounded bg-success text-white p-2 mt-2">
                  Submit
                </button>
                <div className="border-0 bg-danger text-white rounded p-2 text-center" onClick={() => handleCancel()}>
                  Cancel
                </div>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </div>
  );
};

export default AddProviders;
