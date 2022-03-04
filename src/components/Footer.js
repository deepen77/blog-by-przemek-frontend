import React from 'react'
import { FooterStyles } from '../style-components/FooterStyles';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import picture from "../assets/single-images/logo1.png";

const Footer = () => {
    return (
      <FooterStyles>
        <div className="footer-content">
          <div className="footer-all-rights">
            <div className="logo-wrapper">
              <img className="logo-picture" src={picture} alt="L" />
            </div>
            <p className="rights">
              &copy; {new Date().getFullYear()}, All right reserved
            </p>
            <p> Przemek Starostka</p>
            <hr />
          </div>

          <div className="footer-content-mobile">
            <div className="footer-quick-links">
              <p>Quick Links</p>
              <ul className="">
                <li key="BLOG">
                  <Link to="/blog">Blog</Link>
                </li>
                <li key="ABOUT">
                  <Link to="/about">About</Link>
                </li>
                <li key="CONTACT">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div className="footer-social-media">
              <p>Social Media</p>
              <ul className="">
                <li key="GITHUB">
                  <a href="https://github.com/deepen77">
                    <IconContext.Provider
                      value={{
                        style: { verticalAlign: "middle", fontSize: "25px" },
                      }}
                    >
                      <FaGithub /> github
                    </IconContext.Provider>
                  </a>
                </li>
                <li key="LINKEDIN">
                  <a href="https://www.linkedin.com/in/przemek-starostka-748254143/">
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "middle",
                          fontSize: "25px",
                          color: "#456893",
                        },
                      }}
                    >
                      <FaLinkedinIn /> linkedin
                    </IconContext.Provider>
                  </a>
                </li>
                <li key="INSTAGARM">
                  <a href="https://www.instagram.com/deependev/">
                    <IconContext.Provider
                      value={{
                        style: {
                          verticalAlign: "middle",
                          fontSize: "25px",
                          color: "#cd455c",
                        },
                      }}
                    >
                      <FaInstagram /> instagram
                    </IconContext.Provider>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FooterStyles>
    );
}

export default Footer
