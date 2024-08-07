import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";
import { Formik, Form, Field } from "formik";
import { listValidation } from "../Validation";
import { useAddProductMutation } from "../service/apiSlice";

const AddProviders = () => {
  const navigate = useNavigate();
  const [addProduct] = useAddProductMutation();

  const handleCancel = () => {
    navigate("/Providers");
  };

  const handleSave = async (values) => {
    await addProduct(values);
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
        <h4 className="text-color-blue">Add Providers</h4>
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
                <label htmlFor="title" className="fw-semibold">
                  Title<span className="Asterisk">*</span>
                </label>
                <Field name="title" placeholder="Enter title" className="rounded border border-1 p-2 " />
                {errors.title && touched.title ? <div className="text-danger">{errors.title}</div> : null}

                <label htmlFor="title" className="fw-semibold">
                  Price<span className="Asterisk">*</span>
                </label>
                <Field name="price" placeholder="Enter price" type="number" className="rounded border border-1 p-2 " />
                {errors.price && touched.price ? <div className="text-danger">{errors.price}</div> : null}

                <label htmlFor="title" className="fw-semibold">
                  Description<span className="Asterisk">*</span>
                </label>
                <Field
                  as="textarea"
                  name="description"
                  type="text"
                  placeholder="Enter description"
                  className="rounded border border-1 p-2 text-area"
                />
                {errors.description && touched.description ? <div className="text-danger">{errors.description}</div> : null}
                <div className="d-flex justify-content-end gap-3">
                  <div className="rounded p-2 text-center on-hover cancel-btn mt-2" onClick={() => handleCancel()}>
                    Cancel
                  </div>
                  <button type="submit" className="border-0 rounded text-white p-2 mt-2 submit-btn">
                    Submit
                  </button>
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
