import { NavLink } from "react-router-dom";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="nav-container">
      <header>
        <div className="banner">
          <a href="https://gov.bc.ca">
            <img
              src="https://developer.gov.bc.ca/static/BCID_H_rgb_rev-20eebe74aef7d92e02732a18b6aa6bbb.svg"
              alt="Go to the Government of British Columbia website"
              height="50px"
            />
          </a>
          <h1>OnRouteBc</h1>
        </div>
        <div className="other">
          <a className="nav-btn">
            <i className="fas fa-bars" id="menu"></i>
          </a>
        </div>
      </header>
      <nav className="navigation-main" id="navbar">
        <div className="container">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/manageVehicles">Manage Vehicles</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
