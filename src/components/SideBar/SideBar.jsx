import React from "react";
import logo from "../../Assests/frame1_logo.png";
import HomeLogo from "../../Assests/Frame2.png";
import dashboardLogo from "../../Assests/Frame3.png";
import patientLogo from "../../Assests/Frame4.png";
import providersLogo from "../../Assests/Frame5.png";
import clinicalLogo from "../../Assests/Frame6.png";
import reportLogo from "../../Assests/Frame7.png";
import messageLogo from "../../Assests/Frame8b.png";
import exitLogo from "../../Assests/Frame9.png";
import "../CSS/sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sideLogoBar d-none d-md-flex ">
      <div className="d-flex flex-column h-75 justify-content-start align-items-center gap-5 mt-3">
        <Link to="/Login">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/">
          <img src={HomeLogo} alt="Home Logo" />
        </Link>
        <Link to="/Dashboard">
          <img src={dashboardLogo} alt="dashboard Logo" />
        </Link>
        <Link to="/PatientList">
          <img src={patientLogo} alt="Patient Logo" />
        </Link>
        <Link>
          <img src={providersLogo} alt="Providers logo" />
        </Link>
        <Link>
          <img src={clinicalLogo} alt="Clinical logo" />
        </Link>
        <Link>
          <img src={reportLogo} alt="report logo" />
        </Link>
        <Link>
          <img src={messageLogo} alt="Message Logo" />
        </Link>
      </div>
      <div className="pb-5 d-flex justify-content-center pe-2">
        <button>
          <img src={exitLogo} alt="Exit Logo" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
