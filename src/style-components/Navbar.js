import styled from "styled-components";

export const NavbarStyle = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100vw;
  height: 120px;
  max-width: 1200px;
  margin: 0 auto;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 1rem;
  //border: 1px solid red;
  @media only screen and (max-width: 750px) {
    //top: 0;
    left: 0;
    transform: translateX(0);
  }
`;


export const LogoStyle = styled.div`
  color: #2d3748;
  margin-right: auto;
  padding: 0 50px;


  .logo-wrapper {
    width: 110px
  }
`;


export const ListMenuStyle = styled.div`
  //border: 1px solid lightblue;
  ul {
    display: flex;
    //border: 1px solid yellow;
    padding: 10px 10px;
  }

  .underline {
    transform: scale(2);
    color: black;
  }

  ul li {
    flex-basis: 15%;
    list-style-type: none;
    padding: 0 20px;
    //border: 1px solid lightblue;
  }

  ul li a {
    text-decoration: none;
    color: #718096;
    font-weight: 700;
    font-size: 16px;
    padding: 5px;
    border-radius: 5px;
  }



  @media only screen and (max-width: 750px) {
    ul {
      position: absolute;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      //left: -100vw;
      left: 0;
      //top: 0px;
      top: -100vh;
      height: 100vh;
      width: 100vw;
      background-color: #1a1a1a;
      transition: ease-in 0.3s;
      padding-top: 100px;
      //z-index: -1;
    }
    .open {
      left: 0px;
      top: 0;
    }
    ul li {
      flex-basis: 15%;
    }
    
  }
`;



