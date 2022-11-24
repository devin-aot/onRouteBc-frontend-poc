import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";

import "./Header.css";
import { PATHS } from "../../../constants/paths";


export const Header = () => {

  const Logo = () => (
    <div className="logo-container">
      <a href="/">
        <img
          src="https://developer.gov.bc.ca/static/BCID_H_rgb_rev-20eebe74aef7d92e02732a18b6aa6bbb.svg"
          alt="Go to the Government of British Columbia website"
          height="50px"
        />
      </a>
      <h1>OnRouteBc</h1>
    </div>
  );

  return (
    <Navbar className="banner" expand="lg">
      <Navbar.Brand href="/">
        <Logo/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="me-auto"
          navbarScroll
        >
          <Nav.Link as={NavLink} to={PATHS.home.href}>
            {PATHS.home.label}
          </Nav.Link>
          <Nav.Link as={NavLink} to={PATHS.manageVehicles.href}>
            {PATHS.manageVehicles.label}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

};
