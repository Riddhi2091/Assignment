import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

import dashboard from "../../assets/Dashboard.svg";
import inventory from "../../assets/inventory.svg";
import order from "../../assets/Orders.svg";
import customer from "../../assets/Customers.svg";
import report from "../../assets/Reports.svg";
import setting from "../../assets/Settings.svg";
import "./Sidebar.css";


export default function Sidebar() {

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sidemenu container-fluid">
      <>
        <Button className="sidebar-btn btn" onClick={handleShow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#811434"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Body>
            <ul>
              <li className="active">
                <a className="sidebar-menulist ms-md-5" href="#">
                  <img src={dashboard} alt="" />
                </a>{" "}
                Dashboard
              </li>
              <li>
                <a className="sidebar-menulist ms-md-5" href="#">
                  <img src={inventory} alt="" />
                </a>{" "}
                Inventory
              </li>
              <li>
                <a className="sidebar-menulist ms-md-5" href="#">
                  <img src={order} alt="" />
                </a>{" "}
                Orders
              </li>
              <li>
                <a className="sidebar-menulist ms-md-5" href="#">
                  <img src={customer} alt="" />
                </a>{" "}
                Customers
              </li>
              <li>
                <a className="sidebar-menulist ms-md-5" href="#">
                  <img src={report} alt="" />
                </a>{" "}
                Reports
              </li>
              <li>
                <a className="sidebar-menulist ms-md-5" href="#">
                  <img src={setting} alt="" />
                </a>{" "}
                Settings
              </li>
            </ul>
          </Offcanvas.Body>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="offcanvas-title">
              <h6>CorkOwl</h6>
              <p>© 2020 CorkOwl, All Rights Reserved.</p>
            </Offcanvas.Title>
          </Offcanvas.Header>
        </Offcanvas>
      </>
    </div>
  );
}
