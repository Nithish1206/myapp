import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useNavigate } from "react-router-dom";
import { handleLogout } from "../logout/Logout";
import { menuList } from "../../constant/constant";
import React from "react";

const OffCanvasSidebar: React.FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleLogouttemp = () => {
    setShow(false);
    handleLogout(navigate);
  };

  const handleMenu = () => {
    const list = menuList.map((menu) =>
      Object.entries(menu).map(([key, value]) => (
        <li className="list-group-item" key={key}>
          <Link to={value} className="text-dark text-decoration-none" onClick={() => setShow(false)}>
            {key}
          </Link>
        </li>
      ))
    );
    return list;
  };
  return (
    <div className="d-flex d-md-none">
      <button onClick={() => setShow(true)} className="outline-none border-0 bg-white">
        <Icon icon="akar-icons:three-line-horizontal" width="1.5rem" height="1.5rem" />
      </button>

      <Offcanvas className="w-75" show={show} onHide={() => setShow(false)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="list-group list-group-flush">
            {handleMenu()}
            <li onClick={handleLogouttemp} className="list-group-item">
              Logout
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default OffCanvasSidebar;
