import React, {useEffect} from 'react';
import { Link } from "react-router-dom";
import { SectionContainer } from "../style-components/SectionContainer";
import { SectionTitle, SectionText } from "../style-components/GlobalStyles";
import { AboutStyles } from "../style-components/AboutStyles";
import picture from "../assets/single-images/przemek1.png";
import { Fade } from "react-awesome-reveal";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { IconContext } from "react-icons";

const About = () => {

useEffect(() => {
  window.scrollTo(0, 0);
}, []);


    return (
      <SectionContainer>
        <SectionTitle>About Me</SectionTitle>
        <SectionText>Hi there, I'M Przemek</SectionText>

        <AboutStyles>
          <Fade duration={1500}>
            <div className="image-wrapper">
              <img className="about-picture" src={picture} alt="L" />
            </div>
            <div className="my-story-wrapper">
              <div className="my-story-column1">
                <h2 className="my-story">Introducing</h2>
                <div
                  className="my-story-description"
                  style={{ textIndent: "50px" }}
                >
                  Hi, my name is Przemek and I am an enthusiast and passionate
                  about frontend and backend technologies that allow to build
                  websites and web applications.
                  <br />
                  <br />
                  In this blog I'd like to share the information about my
                  projects, interesting features and all news from Web
                  Development World including:
                  <br />
                  <br />
                  <ul>
                    <li>
                      <IconContext.Provider
                        value={{
                          style: { verticalAlign: "middle", fontSize: "25px" },
                        }}
                      >
                        <FaHtml5 /> html
                      </IconContext.Provider>
                    </li>
                    <li>
                      <IconContext.Provider
                        value={{
                          style: { verticalAlign: "middle", fontSize: "25px" },
                        }}
                      >
                        <FaCss3Alt /> css
                      </IconContext.Provider>
                    </li>
                    <li>
                      <IconContext.Provider
                        value={{
                          style: { verticalAlign: "middle", fontSize: "25px" },
                        }}
                      >
                        <DiJavascript1 /> javascript
                      </IconContext.Provider>
                    </li>
                    <li>
                      <IconContext.Provider
                        value={{
                          style: { verticalAlign: "middle", fontSize: "25px" },
                        }}
                      >
                        <FaReact /> react
                      </IconContext.Provider>
                    </li>
                    <li>
                      <IconContext.Provider
                        value={{
                          style: { verticalAlign: "middle", fontSize: "20px" },
                        }}
                      >
                        <SiTypescript /> typescript
                      </IconContext.Provider>
                    </li>
                    <li>
                      <IconContext.Provider
                        value={{
                          style: { verticalAlign: "middle", fontSize: "25px" },
                        }}
                      >
                        <FaNodeJs /> node
                      </IconContext.Provider>
                    </li>
                    <li>
                      <IconContext.Provider
                        value={{
                          style: { verticalAlign: "middle", fontSize: "20px" },
                        }}
                      >
                        <FaDatabase /> databases
                      </IconContext.Provider>
                    </li>
                    <li>and more ...</li>
                  </ul>
                  <br />I do my best to be as accessible as possible. Visit my{" "}
                  <span>
                    <Link to="/contact">Contact</Link>
                  </span>{" "}
                  page to find out how you can get in touch or check links below
                  to my social media accounts.
                </div>
              </div>
              <div className="my-story-column2">
                <h2 className="my-story-design">Design</h2>
                <div className="my-story-design-description">
                  Let's build good, accessible website - website, one which is
                  available to everyone, no matter how they browse the web. This
                  blog can help you create more accessible sites and web
                  applications.
                </div>
                <h2 className="my-story-frontend">Frontend</h2>
                <div className="my-story-frontend-description">
                  Whether you are an experienced JavaScript developer working
                  with diffrent frameworks, or just starting to learn,I have
                  created some articles to read for you.
                </div>
                <h2 className="my-story-backend">Backend</h2>
                <div className="my-story-backend-description">
                  Here you can find why backend development is the skill that
                  powers the web from behind the scenes.
                </div>
              </div>
            </div>
          </Fade>
        </AboutStyles>
      </SectionContainer>
    );
}

export default About

