import React from "react";
import bell from "../Assests/bell.png";
import profilePic from "../Assests/doc.jpg";
import { Dropdown } from "react-bootstrap";
import "./CSS/Navigation.css";
import { Link } from "react-router-dom";

const Navigation = ({ name }) => {
  const profile = {
    Pic: profilePic,
    name: name,
    Role: "Admin",
  };
  return (
    <div className="w-100 d-flex justify-content-end p-0 m-0 pe-5 pt-4 position-sticky">
      <div className="navDiv d-flex justify-content-end p-2">
        <button className="btn border-0">
          <img src={bell} alt="" />
        </button>
        <div className="vr"></div>
        <div className="d-flex align-items-center p-0 m-0">
          <Dropdown className="p-0 m-0">
            <Dropdown.Toggle variant="none" className="profileBtn d-flex gap-3 p-0 px-1 m-0 align-items-center border border-0">
              <img src={profile.Pic} alt="profile" width={40} />
              <div className="nameRole">
                <p className="d-block p-0 m-0 fw-semibold">{profile.name}</p>
                <p className="d-block p-0 m-0 text-secondary">{profile.Role}</p>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-3 p-0 rounded-4">
              <Dropdown.Item as={Link} to="/Profile" className="d-flex align-items-center gap-2 p-3 rounded-top-4">
                <span className="solar--user-broken"></span>profile
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-2 p-3 ">
                <span className="solar--lock-password-outline"></span>Change Password
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-2 p-3 rounded-bottom-4">
                <span className="solar--logout-2-outline"></span>Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
