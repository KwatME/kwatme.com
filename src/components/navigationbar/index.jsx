import React from "react";
import { Link } from "gatsby";

import SocialIcons from "./socialicons";
import Menus from "./menus";

function NavigationBar() {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          ~
        </Link>
        <button
          className={`navbar-burger button is-white ${
            isActive ? "is-active" : ""
          }`}
          type="button"
          aria-label="menu"
          aria-expanded="false"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-start">
          <Menus />
        </div>
        <div className="navbar-end">
          <SocialIcons />
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
