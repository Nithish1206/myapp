import React, { useState } from "react";
import "./CSS/Profile.css";
import { Row, Col } from "react-bootstrap";
import SideBar from "./SideBar";
import Navigation from "./Navigation";
import profilePic from "../Assests/doc.jpg";

const Profile = ({ User, setUser, details, setDetails }) => {
  const [edit, setEdit] = useState(true);

  // const [userName, setUserName] = useState(details.filter((d) => d.lable === "First Name")[0].value);
  // const [Email, setEmail] = useState(details.filter((d) => d.lable === "Email Address")[0].value);

  ////inputFeild
  const inputFeild = (datas) => {
    const outlist = datas.map((data) => (
      <Col lg={4} key={data.lable} className="p-0 m-0">
        <div className="m-auto">
          <label className="d-flex pb-2">{data.lable}</label>
          <input type={data.type} value={data.value} onChange={(e) => handleChange(data, e.target.value)} disabled={edit} className="p-2 w-75 text-secondary" />
        </div>
      </Col>
    ));
    return outlist;
  };

  ///Handle Change
  const handleChange = (data, values) => {
    const updateValue = details.map((detail) => (detail.lable === data.lable ? { ...detail, value: values } : detail));
    //console.log(updateValue);
    setDetails(updateValue);
  };

  const handleClick = () => {
    setUser([details.filter((d) => d.lable === "First Name")[0].value, details.filter((d) => d.lable === "Email Address")[0].value]);
    // setUserName(details.filter((d) => d.lable === "First Name")[0].value);
    // setEmail(details.filter((d) => d.lable === "Email Address")[0].value);
    setEdit(!edit);
  };
  const userName = User[0];
  const Email = User[1];

  return (
    <Row className="vh-100 m-0 p-0">
      <Col xs={1} className="col1 p-0 m-0 w-auto">
        <SideBar />
      </Col>
      <Col className="p-0 m-0">
        <Navigation name={userName} />
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
              <div className="d-flex align-items-center">
                <p className="m-0 p-0">status</p>
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
                  <button className="btn px-3 py-1 no-border bg-info" onClick={() => handleClick()}>
                    {edit ? "Edit" : "Save"}
                  </button>
                </div>
              </div>
            </Row>
            <Row className="m-0 p-0 d-flex justify-content-start mt-3 ">{inputFeild(details)}</Row>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
