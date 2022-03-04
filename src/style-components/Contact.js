import styled from "styled-components";

export const ContactForm = styled.div`
  //background-color: #04080f;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 15px;
  color: white;
  color: black;

  .contact__validation {
    color: ${(props) => (props.variant ? "transparent" : "red")};
    transition: 1s;
    //color: red;
  }

  .contact__button {
    width: 180px;
    border: none;
    //background: #032445;
    //background: #1e3942;
    background: #718096;
    color: #fff;
    padding: 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: 1s;
    font-size: 16px;
    font-family: "Inter";
    font-weight: 500;
    //background: linear-gradient(270deg, #145369, #032445);
  }

  //.contact__button:hover {
  //background: linear-gradient(270deg, #032445, #145369);
  //}

  .button__icon {
    font-size: 20px;
    margin-left: 8px;
    transition: 0.3s;
  }

  .contact__information {
    display: flex;
    margin-bottom: 32px;
  }

  .contact__icon {
    font-size: 32px;
    //color: #013750;
    margin-right: 12px;
  }

  .contact__title {
    font-size: 18px;
    font-weight: 500;
  }

  .contact__subtitle {
    font-size: 13.5px;
  }

  .contact__content {
    //background-color: #fff;
    background-color: #e2e8f0;
    border-radius: 8px;
    padding: 12px 16px 4px;
  }

  .contact__form {
    display: grid;
    gap: 24px;
  }

  .contact__label {
    font-size: 12px;
    color: #242329;
  }

  .contact__input {
    width: 100%;
    //background-color: #fff;
    background-color: #e2e8f0;
    color: #6d6a7c;
    font-family: "Inter", sans-serif;
    font-size: 15.5px;
    border: none;
    outline: none;
    padding: 4px 8px 8px 0;
  }

  .contact__inputs {
    grid-template-columns: repeat(2, 1fr);
    display: grid;
    gap: 24px;
  }

  .contact__container {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 750px) {
    .contact__inputs {
      grid-template-columns: none;
    }
    .contact__container {
      grid-template-columns: none;
    }
  }
`;
