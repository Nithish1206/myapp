import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
import { instance } from "../API";
import { listValidation } from "./Validation";

const EditProviders = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [providers, setProviders] = useState();

  useEffect(() => {
    const fetchProviders = async () => {
      await instance
        .get(`/Products/${id}`)
        .then((response) => {
          setProviders(response.data);
        })
        .catch((e) => console.log(e));
    };
    fetchProviders();
  }, [id]);

  ////handleCancel
  const handleCancel = () => {
    navigate("/Providers");
  };

  return (
    <div>
      {!providers ? (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <p className="text-center fs-3 p-0 m-0 me-2">Loading </p>
          <Spinner animation="border" variant="success" role="status" />
        </div>
      ) : (
        <div className="m-3 m-md-5">
          <div className="d-flex">
            <Link to="/Providers" className="text-decoration-none">
              <h4 className="text-secondary">Providers</h4>
            </Link>
            <span className="iconamoon--arrow-right-2"></span>
            <h4>Edit Providers</h4>
          </div>
          <Row className="mt-5 m-0 p-0 d-flex justify-content-center">
            <Col lg={5} className="rounded-4 p-5 shadow-lg">
              <Formik
                initialValues={{
                  title: providers.title || "",
                  price: providers.price || "",
                  description: providers.description || "",
                }}
                validationSchema={listValidation}
                onSubmit={async (values) => {
                  await instance.put(`/products/${id}`, values);
                  navigate("/Providers");
                }}>
                {({ errors, touched }) => (
                  <Form className="vstack gap-2">
                    <label htmlFor="title">Title</label>
                    <Field name="title" placeholder="Enter title" className="rounded border border-1 p-2 " />
                    {errors.title && touched.title ? <div className="text-danger">{errors.title}</div> : null}

                    <label htmlFor="title">Price</label>
                    <Field
                      name="price"
                      placeholder="Enter price"
                      type="number"
                      className="rounded border border-1 p-2 "
                    />
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
                    <div
                      className="border-0 bg-danger text-white rounded p-2 text-center"
                      onClick={() => handleCancel()}>
                      Cancel
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default EditProviders;
