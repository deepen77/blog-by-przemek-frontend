import styled from "styled-components";



export const FooterStyles = styled.div`
  background: white;

  hr {
      display: none;
      margin-left: 1px;
      margin-right: 1px;
      margin-bottom: 30px;
      padding: 0;
      border: 0;
      height: 1px;
      background-image: -webkit-linear-gradient(
        left,
        #ffffff,
        #e2e8f0,
        #ffffff
      );
      background-image: -moz-linear-gradient(left, #ffffff, #e2e8f0, #ffffff);
      background-image: -ms-linear-gradient(left, #ffffff, #e2e8f0, #ffffff);
      background-image: -o-linear-gradient(left, #ffffff, #e2e8f0, #ffffff);
    }

  .logo-wrapper {
    width: 70px;
    margin: 0 0 16px;
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 50px;
    //border: 1px solid red;
  }

  .footer-content-mobile {
    display: flex;
    flex-basis: 50%;
  }

  .footer-all-rights {
    //border: 1px solid red;
    flex-basis: 33%;
  }

  .footer-quick-links {
    //border: 1px solid red;
    flex-basis: 50%;
  }

  .footer-social-media {
    //border: 1px solid red;
    flex-basis: 50%;
  }

  .rights {
    color: #718096;
    font-size: 16px;
    line-height: 1.33;
    font-weight: 300;
  }

  p {
    color: #2d3748;
    font-size: 16px;
    line-height: 1.33;
    font-weight: 600;
    margin: 0 0 16px;
  }

  li {
    margin: 0 8px 16px;
  }
  li a {
    color: #718096;
    font-size: 16px;
    line-height: 1.33;
  }
  @media only screen and (max-width: 750px) {
    .footer-content {
      flex-wrap: wrap;
      margin: 0 auto;
      flex-direction: column-reverse;
    }

    .footer-content-mobile {
      display: flex;
      width: 100%;
      margin-bottom: 30px;
      //border: 1px solid red
    }



    .rights {
      font-size: 14px;
    }

    p {
      font-size: 14px;
    }

    li {
      margin: 0 auto 16px;
    }

    li a {
      font-size: 14px;
    }

    hr {
        display: block;
    }

  }
`;
