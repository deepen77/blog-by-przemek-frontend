import React, {useState, useEffect} from "react";
import { NavbarStyle } from "../../style-components/Navbar";
import Hamburger from "./Hamburger";
import ListMenu from "./ListMenu";
import Logo from "./Logo";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hamburgerStatus, setHamburgerStatus] = useState(false);

  const [, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);

      if (window.innerWidth > 750) {
        setShowMobileMenu(false);
        setHamburgerStatus(false);
      }
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "120px",
        backgroundColor: " #ffffff",
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: "1000",
      }}
    >
      <NavbarStyle>
        <Logo />
        <ListMenu
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          hamburgerStatus={hamburgerStatus}
          setHamburgerStatus={setHamburgerStatus}
        />
        <Hamburger
          hamburgerStatus={hamburgerStatus}
          setHamburgerStatus={setHamburgerStatus}
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
        />
      </NavbarStyle>
    </div>
  );
};

export default Navbar;
