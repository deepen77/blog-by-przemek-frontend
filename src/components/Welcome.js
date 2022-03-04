import React from "react";
import { WelcomeStyles } from "../style-components/WelcomeStyles";
import picture from "../assets/single-images/logo-blog2.png";
import Search from "./Search";

const Welcome = ({ setSearchTerm, totalArticles }) => {
  return (
    <WelcomeStyles>
      <div className="welcome-content">
        <div className="welcome-introduction">
          <h2 className="welcome-introduction-title">Learn development with</h2>
          <h2 className="welcome-introduction-title">great articles.</h2>
          <Search setSearchTerm={setSearchTerm} totalArticles={totalArticles}/>
        </div>
        <div className="logo-wrapper">
          <img className="logo-picture" src={picture} alt="logo-blog" />
        </div>
      </div>
    </WelcomeStyles>
  );
};

export default Welcome;
