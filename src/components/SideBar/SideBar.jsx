import React from "react";
import logo from "../../Assests/frame1_logo.png";
import "../CSS/sidebar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="sideLogoBar d-none d-md-flex m-0 p-0 px-3 px-lg-4">
      <div className="d-flex flex-column h-75 justify-content-start align-items-center gap-5 mt-3">
        <Link to="/Login">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <Icon
            icon="lucide:layout-list"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => handleItemClick(0)}
          />
        </Link>
        <Link to="/Dashboard">
          <Icon
            icon="radix-icons:dashboard"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => handleItemClick(1)}
          />
        </Link>
        <Link to="/PatientList">
          <Icon
            icon="solar:user-circle-linear"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => handleItemClick(2)}
          />
        </Link>
        <Link to="/Providers">
          <Icon
            icon="fluent:people-16-regular"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => handleItemClick(3)}
          />
        </Link>
        <Link>
          <Icon
            icon="mage:home-plus"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 4 ? "active" : ""}`}
            onClick={() => handleItemClick(4)}
          />
        </Link>
        <Link>
          <Icon
            icon="carbon:report"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 5 ? "active" : ""}`}
            onClick={() => handleItemClick(5)}
          />
        </Link>
        <Link>
          <Icon
            icon="mage:message-dots"
            width="1.8rem"
            height="1.8rem"
            className={`text-secondary sidebar-item ${activeIndex === 6 ? "active" : ""}`}
            onClick={() => handleItemClick(6)}
          />
        </Link>
      </div>
      <div className="pb-5 d-flex justify-content-center pe-2">
        <button>
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
