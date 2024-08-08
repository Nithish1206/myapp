import React from "react";
import bell from "../assests/bell.png";
import profilePic from "../assests/doc.jpg";
import { Dropdown } from "react-bootstrap";
import "../css/Navigation.css";
import { Link, useNavigate } from "react-router-dom";
import OffCanvasSidebar from "./sidebar/OffCanvasSidebar";
import { handleLogout } from "./logout/Logout";

const Navigation = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="w-100 d-flex justify-content-between justify-content-md-end p-0 m-0 px-2 pe-md-5 pt-4 bg-white sticky-top">
      <OffCanvasSidebar />
      <div className="navDiv d-flex justify-content-end p-2">
        <button className="btn border-0">
          <img src={bell} alt="" />
        </button>
        <div className="vr"></div>
        <div className="d-flex align-items-center p-0 m-0">
          <Dropdown className="p-0 m-0">
            <Dropdown.Toggle variant="none" className="profileBtn d-flex gap-3 p-0 px-1 m-0 align-items-center border border-0">
              <img src={profilePic} alt="profile" width={40} />
              <div className="nameRole">
                <p className="d-block p-0 m-0 fw-semibold">{name}</p>
                <p className="d-block p-0 m-0 text-secondary">Admin</p>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu className="mt-3 p-0 rounded-4 z-2">
              <Dropdown.Item as={Link} to="/Profile" className="d-flex align-items-center gap-2 p-3 rounded-top-4">
                <span className="solar--user-broken"></span>profile
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-2 p-3 ">
                <span className="solar--lock-password-outline"></span>Change Password
              </Dropdown.Item>
              <Dropdown.Item className="d-flex align-items-center gap-2 p-3 rounded-bottom-4" onClick={() => handleLogout(navigate)}>
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
