import React from "react";
import logo from "../../assests/frame1_logo.png";
import "../../css/Sidebar.css";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { handleLogout } from "../logout/Logout";
import { sidebarItems } from "../../constant/constant";

const SideBar = () => {
  const navigate = useNavigate();
  const activeIndex = parseInt(sessionStorage.getItem("activeIndex")) || 0;

  const handleItemClick = (index) => {
    sessionStorage.setItem("activeIndex", index);
  };

  return (
    <div className="sideLogoBar d-none d-md-flex m-0 p-0 px-3 px-lg-4">
      <div className="d-flex flex-column h-75 justify-content-start align-items-center gap-5 mt-3">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        {sidebarItems.map((item, index) => (
          <Link key={index} to={item.to}>
            <Icon
              icon={item.icon}
              width="1.8rem"
              height="1.8rem"
              className={`text-secondary sidebar-item ${activeIndex === item.index ? "active" : ""}`}
              onClick={() => handleItemClick(item.index)}
            />
          </Link>
        ))}
      </div>

      <div className="pb-5 d-flex justify-content-center pe-2">
        <button
          onClick={() => {
            handleLogout(navigate);
          }}>
          <Icon
            icon="tabler:logout-2"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 7 ? "active" : ""}`}
            onClick={() => handleItemClick(7)}
          />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
