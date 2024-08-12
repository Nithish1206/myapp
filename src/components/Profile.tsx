import React, { useState } from "react";
import "../css/Profile.css";
import { Row, Col } from "react-bootstrap";

interface Props {
  User: string[];
  setUser: React.Dispatch<string[]>;
  details: { label: string; type: string; value: string }[];
  setDetails: React.Dispatch<{ label: string; type: string; value: string }[]>;
}

const Profile = ({ User, setUser, details, setDetails }: Props) => {
  const profilePic = require("../assests/doc.jpg");
  const [edit, setEdit] = useState(true);

  ///Handle Status
  const [status, setStatus] = useState("Active");
  const handleStatus = (e: { target: { value: React.SetStateAction<string> } }) => {
    setStatus(e.target.value);
  };

  ////inputFeild
  const inputFeild = () => {
    const outlist = details.map((data, index) => (
      <Col lg={4} key={index} className="p-0 m-0">
        <div className="m-auto pe-3 pb-3">
          <label className="d-flex py-2 fw-semibold">{data.label}</label>
          <input
            type={data.type}
            value={data.value}
            onChange={(e) => handleChange(e.target.value, index)}
            disabled={edit}
            className="form-control shadow-none p-2 w-100 text-secondary"
          />
        </div>
      </Col>
    ));
    return outlist;
  };

  ///Handle Change
  const handleChange = (Currentvalues: string, index: number) => {
    const updateValue = [...details];
    updateValue[index].value = Currentvalues;
    setDetails(updateValue);
  };
  const handleClick = () => {
    setUser([details[0].value, details[2].value]);
    setEdit(!edit);
  };
  const userName = User[0];
  const Email = User[1];

  return (
    <div className="m-0 p-0 mx-2 mx-md-5 ">
      <Row className="w-100 m-0 p-0">
        <h2 className="w-100 mt-3 m-0 p-0">Profile</h2>
      </Row>
      <Row className="profileTop mt-4 rounded-3 m-0 p-0">
        <div className="d-flex justify-content-between align-items-center p-0 m-0 p-2 px-3 flex-wrap">
          <div className="d-flex align-items-center">
            <img src={profilePic} alt="profile" className="rounded-3" width={60} height={60} />
            <div className="m-0 p-0 ms-3">
              <p className="m-0 p-0 mb-1 fw-semibold">{userName}</p>
              <p className="m-0 p-0 text-secondary">
                <small>{Email}</small>
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center pe-3 m-0 p-0 ">
            <p className={`p-2 rounded-3 m-0 p-0 mt-2 mt-md-0 ${status === "Active" ? "ActiveStatus" : "InActiveStatus"}`}>{status}</p>
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
          {inputFeild()}
          <Col lg={4} className="p-0 m-0 d-flex align-items-end">
            <div className="pe-3 pb-3">
              <label htmlFor="status" className="d-block fw-semibold py-2">
                Status
              </label>
              <select id="status" className="form-select" disabled={edit} onChange={handleStatus}>
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
              </select>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Profile;
