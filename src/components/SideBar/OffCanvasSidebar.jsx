import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function OffCanvasSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const menuList = [
    { Login: "/Login" },
    { Home: "/" },
    { Dashboard: "/Dashboard" },
    { "Patient List": "/PatientList" },
    { Provider: "" },
    { "Clinical Trail": "" },
    { "Patient Care Report": "" },
    { "Message Center": "" },
    { "Log Out": "" },
  ];
  const handleMenu = () => {
    const list = menuList.map((menu) =>
      Object.entries(menu).map(([key, value]) => (
        <li className="list-group-item" key={key}>
          <Link to={value}>{key}</Link>
        </li>
      ))
    );
    return list;
  };
  return (
    <div className="d-flex d-md-none">
      <button onClick={handleShow} className="outline-none border-0 bg-white">
        <span className="akar-icons--three-line-horizontal"></span>
      </button>

      <Offcanvas className="w-75" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul class="list-group list-group-flush">{handleMenu()}</ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffCanvasSidebar;
