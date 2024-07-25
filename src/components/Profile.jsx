import React, { useState } from "react";
import "./CSS/Profile.css";
import { Row, Col, DropdownButton } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import profilePic from "../Assests/doc.jpg";

const Profile = ({ User, setUser, details, setDetails }) => {
  const [edit, setEdit] = useState(true);
  ///Handle Status
  const [status, setStatus] = useState(["Active", "#5BB552", "#E4F1E7"]);
  const handleStatusActive = (e) => {
    setStatus([e, "#5BB552", "#E4F1E7"]);
  };
  const handleStatusInactive = (e) => {
    setStatus([e, "#b55252", "#f1e4e4"]);
  };

  ////inputFeild
  const inputFeild = (datas) => {
    const outlist = datas.map((data) => (
      <Col lg={4} key={data.lable} className="p-0 m-0">
        <div className="m-auto pe-3">
          <label className="d-flex pb-2">{data.lable}</label>
          <input type={data.type} value={data.value} onChange={(e) => handleChange(data, e.target.value)} disabled={edit} className="p-2 w-100 text-secondary" />
        </div>
      </Col>
    ));
    return outlist;
  };

  ///Handle Change
  const handleChange = (data, Currentvalues) => {
    const updateValue = details.map((detail) => (detail.lable === data.lable ? { ...detail, value: Currentvalues } : detail));
    setDetails(updateValue);
  };

  const handleClick = () => {
    setUser([details.filter((d) => d.lable === "First Name")[0].value, details.filter((d) => d.lable === "Email Address")[0].value]);
    setEdit(!edit);
  };
  const userName = User[0];
  const Email = User[1];

  return (
    <div className="ms-5 m-0 p-0 me-5">
      <Row className="w-100 m-0 p-0">
        <h2 className="w-100 mt-3 m-0 p-0">Profile</h2>
      </Row>
      <Row className="profileTop mt-4 rounded-3 m-0 p-0">
        <div className="d-flex justify-content-between p-0 m-0 p-2 px-3">
          <div className="d-flex align-items-center">
            <img src={profilePic} alt="profile" className="rounded-3" width={60} height={60} />
            <div className="m-0 p-0 ms-3">
              <p className="m-0 p-0 mb-1 fw-semibold">{userName}</p>
              <p className="m-0 p-0 text-secondary">
                <small>{Email}</small>
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center pe-3">
            <p className="m-0 p-0 p-2 rounded-3" style={{ color: status[1], backgroundColor: status[2] }}>
              {status[0]}
            </p>
          </div>
        </div>
      </Row>
      <Row className="m-0 p-0 mt-4 border rounded-2 p-4">
        <Row className="m-0 p-0">
          <div className="d-flex justify-content-between p-0 m-0">
            <div>
              <h5>Personal Details</h5>
            </div>
            <div>
              <button className="btn px-3 py-1 no-border bg-info text-white" onClick={() => handleClick()}>
                {edit ? "Edit" : "Save"}
              </button>
            </div>
          </div>
        </Row>
        <Row className="m-0 p-0 d-flex justify-content-start mt-3 ">
          {inputFeild(details)}
          <Col lg={4} className="p-0 m-0 d-flex align-items-end">
            <div>
              <DropdownButton variant="success" title="Status" disabled={edit}>
                <Dropdown.Item
                  onClick={(e) => {
                    handleStatusActive(e.target.innerHTML);
                  }}>
                  Active
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={(e) => {
                    handleStatusInactive(e.target.innerHTML);
                  }}>
                  InActive
                </Dropdown.Item>
              </DropdownButton>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Profile;
