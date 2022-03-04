import styled from "styled-components";

export const WelcomeStyles = styled.div`
  background: white;
  .welcome-content {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0px auto;
    padding: 20px 50px;
    //border: 1px solid red;
    height: 320px;
  }

  .welcome-introduction {
    //border: 1px solid red;
    flex-basis: 50%;
    padding-right: 50px;
  }

  .logo-wrapper {
    //border: 1px solid red;
    flex-basis: 50%;
    padding: 30px;
  }

  .logo-picture {
    padding: 100px;
  }

  .welcome-introduction-title {
    font-size: 35px;
    line-height: 1.25;
    color: #2d3748;
  }
  @media only screen and (max-width: 750px) {
    .welcome-introduction {
      flex-basis: 90%;
      padding-right: 0px;
    }
    .logo-wrapper {
      display: none;
    }
    .welcome-introduction-title {
      font-size: 25px;
      line-height: 1.25;
    }
  }
  @media only screen and (max-width: 1024px) {
    .logo-picture {
    padding: 50px;
  }
}
`;
