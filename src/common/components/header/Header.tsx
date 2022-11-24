import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";
import { PATHS } from "../../../constants/paths";

export const Header = () => {
  const TOGGLE_WIDTH = 768;
  const { innerWidth } = window;
  // Show or hide the dropdown which shows the nav links
  // Do not show the dropdown on initial page load if screen size is small
  const [showDropdownMenu, setToggleMenu] = useState(() => {
    return innerWidth < TOGGLE_WIDTH;
  });

  const getWindowWidth = () => {
    return window.innerWidth;
  };

  const toggleDropdown = () => {
    if (getWindowWidth() < TOGGLE_WIDTH) {
      setToggleMenu(!showDropdownMenu);
    }
  };

  // Add event listener when user changes the width of the window
  // Hide the dropdown menu when width changes
  useEffect(() => {
    const onWidthChanged = () => {
      setToggleMenu(getWindowWidth() < TOGGLE_WIDTH);
    };
    window.addEventListener("resize", onWidthChanged);
    return () => {
      window.removeEventListener("resize", onWidthChanged);
    };
  }, []);

  const Brand = () => (
    <div className="banner">
      <a href={PATHS.home.href}>
        <img
          src="https://developer.gov.bc.ca/static/BCID_H_rgb_rev-20eebe74aef7d92e02732a18b6aa6bbb.svg"
          alt="Go to the onRouteBc Home Page"
          height="50px"
        />
      </a>
      <h1>onRouteBc</h1>
    </div>
  );

  const NavButton = () => (
    <div className="other">
      <a className="nav-btn" onClick={toggleDropdown}>
        <i className="fas fa-bars" id="menu"></i>
      </a>
    </div>
  );

  const ListItem = (props:any) => (
    <li>
      <NavLink to={props.path} onClick={toggleDropdown}>
        {props.label}
      </NavLink>
    </li>
  );

  const Navigation = () => (
    <nav
      className="navigation-main"
      id="navbar"
      style={{ display: !showDropdownMenu ? "block" : "none" }}
    >
      <div className="container">
        <ul>
          <ListItem path={PATHS.home.href} label={PATHS.home.label}/>
          <ListItem path={PATHS.manageVehicles.href} label={PATHS.manageVehicles.label}/>
        </ul>
      </div>
    </nav>
  );

  return (
    <div className="nav-container">
      <header>
        <Brand />
        <NavButton />
      </header>
      <Navigation />
    </div>
  );
};
