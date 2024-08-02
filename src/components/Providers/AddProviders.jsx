import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, FormGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Swal from "sweetalert2";
import axios from "axios";

const AddProviders = () => {
  const navigate = useNavigate();
  const [list, setList] = useState({
    title: "",
    price: "",
    images: [`https://i.imgur.com/62gGzeF.jpeg`],

    description:
      "Step into the spotlight with these eye-catching rainbow glitter high heels. Designed to dazzle, each shoe boasts a kaleidoscope of shimmering colors that catch and reflect light with every step. Perfect for special occasions or a night out, these stunners are sure to turn heads and elevate any ensemble.",
    categoryId: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setList({
      ...list,
      [name]: value,
    });
  };

  const handleCancel = () => {
    navigate("/Providers");
  };

  const handleSave = () => {
    axios.post("https://api.escuelajs.co/api/v1/products", list).then((response) => console.log(response));
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
          <FormGroup className="vstack gap-4 ">
            <div>
              <Form.Label className="fw-semibold">Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                placeholder="Enter Title"
                value={list.title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              <Form.Label className="fw-semibold">Price</Form.Label>
              <Form.Control
                name="price"
                type="number"
                placeholder="Enter Price"
                value={list.price}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              className="rounded-2 outline-none border-0 bg-success text-white py-2 fw-semibold"
              onClick={() => handleSave()}>
              Save
            </button>
            <button
              className="rounded-2 outline-none border-0 bg-danger text-white py-2 fw-semibold"
              onClick={() => handleCancel()}>
              Cancel
            </button>
          </FormGroup>
        </Col>
      </Row>
    </div>
  );
};

export default AddProviders;
