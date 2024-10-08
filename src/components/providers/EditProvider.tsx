import { Formik, Form, Field } from "formik";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Row, Col, Spinner } from "react-bootstrap";
import { useGetProductQuery, useEditProductMutation } from "../service/apiSlice";
import { listSchema } from "../../utils/Validation";

// Define the type for your form values
interface FormValues {
  id?: string;
  title: string;
  price: number;
  description: string;
}

const EditProviders: React.FC = () => {
  const isActive = sessionStorage.getItem("ProfileisActive");
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data: providers, isLoading } = useGetProductQuery(id);
  const [editProduct, { isLoading: updateLoading }] = useEditProductMutation();

  // Handle cancel action
  const handleCancel = () => {
    isActive === "true" ? navigate(`/Providers/ProviderProfile/${id}`) : navigate("/Providers");
  };

  return (
    <div className="p-3 p-md-5">
      <div className="d-flex">
        <Link to="/Providers" className="text-decoration-none">
          <h4 className="text-secondary">Providers</h4>
        </Link>
        <span className="iconamoon--arrow-right-2"></span>

        {isActive === "true" && (
          <div className="d-flex flex-nowrap">
            <Link to={`/Providers/ProviderProfile/${id}`} className="text-decoration-none">
              <h4 className="text-secondary">Provider Profile</h4>
            </Link>
            <span className="iconamoon--arrow-right-2"></span>
          </div>
        )}

        <h4 className="text-color-blue">Edit Provider</h4>
      </div>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <p className="text-center fs-3 p-0 m-0 me-2">Loading </p>
          <Spinner animation="border" variant="info" role="status" />
        </div>
      ) : (
        <div className="m-3 m-md-5">
          <Row className="mt-5 m-0 p-0 d-flex justify-content-center">
            <Col lg={6} className="rounded-4 p-5 shadow-lg">
              <Formik
                initialValues={{
                  id: id,
                  title: providers.title,
                  price: providers.price,
                  description: providers.description,
                }}
                validationSchema={listSchema}
                onSubmit={async (values: FormValues) => {
                  await editProduct(values);
                  navigate("/Providers");
                }}>
                {({ errors, touched }) => (
                  <Form className="vstack gap-2">
                    <label htmlFor="title" className="fw-semibold">
                      Title<span className="Asterisk">*</span>
                    </label>
                    <Field name="title" placeholder="Enter title" className="rounded border border-1 p-2" />
                    {errors.title && touched.title ? <div className="text-danger">{errors.title}</div> : null}

                    <label htmlFor="price" className="fw-semibold">
                      Price<span className="Asterisk">*</span>
                    </label>
                    <Field name="price" placeholder="Enter price" type="number" className="rounded border border-1 p-2" />
                    {errors.price && touched.price ? <div className="text-danger">{errors.price}</div> : null}

                    <label htmlFor="description" className="fw-semibold">
                      Description<span className="Asterisk">*</span>
                    </label>
                    <Field as="textarea" name="description" placeholder="Enter Description" className="rounded border border-1 p-2 text-area" />
                    {errors.description && touched.description ? <div className="text-danger">{errors.description}</div> : null}
                    <div className="d-flex justify-content-end gap-3">
                      <div className="rounded p-2 text-center on-hover cancel-btn mt-2" onClick={handleCancel}>
                        Cancel
                      </div>
                      <button type="submit" className="border-0 rounded text-white p-2 mt-2 submit-btn" disabled={updateLoading}>
                        {updateLoading ? (
                          <>
                            <Spinner animation="border" size="sm" /> Updating
                          </>
                        ) : (
                          "Submit"
                        )}
                      </button>
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
