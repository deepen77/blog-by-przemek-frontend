import React from 'react'
import { NavLink } from "react-router-dom";
import { LogoStyle } from "../../style-components/Navbar";
import picture from "../../assets/single-images/logo1.png";

const Logo = () => {


  const scrollUp = () => {
    window.scrollTo(0, 0);
  };


    return (
      <LogoStyle>
        <NavLink to="/">
          <div onClick={scrollUp} className="logo-wrapper">
            <img className="logo-picture" src={picture} alt="L" />
          </div>
        </NavLink>
      </LogoStyle>
    );
}

export default Logo


