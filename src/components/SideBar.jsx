import React from "react";
import logo from "../Assests/frame1_logo.png";
import HomeLogo from "../Assests/Frame2.png";
import dashboardLogo from "../Assests/Frame3.png";
import patientLogo from "../Assests/Frame4.png";
import providersLogo from "../Assests/Frame5.png";
import clinicalLogo from "../Assests/Frame6.png";
import reportLogo from "../Assests/Frame7.png";
import messageLogo from "../Assests/Frame8b.png";
import exitLogo from "../Assests/Frame9.png";
import "./CSS/sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideLogoBar">
      <div className="d-flex flex-column h-75 justify-content-start gap-5 mt-3">
        <Link to="/Login">
          <img src={logo} alt="logo" />
        </Link>
        <button>
          <img src={HomeLogo} alt="Home Logo" />
        </button>
        <button>
          <Link to="/Dashboard">
            <img src={dashboardLogo} alt="dashboard Logo" />
          </Link>
        </button>
        <button>
          <img src={patientLogo} alt="Patient Logo" />
        </button>
        <button>
          <img src={providersLogo} alt="Providers logo" />
        </button>
        <button>
          <img src={clinicalLogo} alt="Clinical logo" />
        </button>
        <button>
          <img src={reportLogo} alt="report logo" />
        </button>
        <button>
          <img src={messageLogo} alt="Message Logo" />
        </button>
      </div>
      <div className="pb-5">
        <button>
          <img src={exitLogo} alt="Exit Logo" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
