import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import logoImage from "../../assets/logo.png";
import profileImage from "../../assets/profile.png";
import notificationImage from "../../assets/Bell.png";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar expand="lg mx-md-5">
        <>
          <Navbar.Brand href="#home">
            <img className="logo" src={logoImage} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Form className="d-flex search-bar">
                <Button variant="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </Button>
                <Form.Control
                  type="search"
                  placeholder="Search wines, customers here..."
                  aria-label="Search"/>
              </Form>
              <Nav.Link href="#notification" className="text-light">
                <img
                  className="me-md-4 mb-1"
                  src={notificationImage}
                  width={10}
                  height={10}
                  alt=""
                />
              </Nav.Link>
              <Nav.Link href="#user" className="text-light">
                <h4 className=" text-light">
                  <img
                    className="ms-md-3 mb-3"
                    src={profileImage}
                    width={10}
                    height={10}
                    alt=""
                  />
                </h4>
              </Nav.Link>

              <NavDropdown title="Nicholas D. " id="basic-nav-dropdown">
                <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      </Navbar>
    </div>
  );
}



export default Header;
