import React from "react";
import { NavLink} from "react-router-dom";
import { ListMenuStyle } from "../../style-components/Navbar";


const ListMenu = ({
  showMobileMenu,
  setShowMobileMenu,
  hamburgerStatus,
  setHamburgerStatus,
}) => {
  const handleToggleStatus = () => {
    window.scrollTo(0, 0);
    if (window.innerWidth < 750) {
      setHamburgerStatus(!hamburgerStatus);
      setShowMobileMenu(!showMobileMenu);
    }
  };

  let activeStyle = {
    backgroundColor: "#e2e8f0",
  };

  return (
    <ListMenuStyle>
      <ul className={`${showMobileMenu ? "open" : ""}`}>
        <li key="HOME" onClick={handleToggleStatus}>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive && window.innerWidth > 750 ? activeStyle : undefined
            }
          >
            Home
          </NavLink>
        </li>
        <li key="BLOG" onClick={handleToggleStatus}>
          <NavLink
            to="blog"
            style={({ isActive }) =>
              isActive && window.innerWidth > 750 ? activeStyle : undefined
            }
          >
            Blog
          </NavLink>
        </li>
        <li key="ABOUT" onClick={handleToggleStatus}>
          <NavLink
            to="about"
            style={({ isActive }) =>
              isActive && window.innerWidth > 750 ? activeStyle : undefined
            }
          >
            About
          </NavLink>
        </li>
        <li key="CONTACT" onClick={handleToggleStatus}>
          <NavLink
            to="contact"
            style={({ isActive }) =>
              isActive && window.innerWidth > 750 ? activeStyle : undefined
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </ListMenuStyle>
  );
};

export default ListMenu;
