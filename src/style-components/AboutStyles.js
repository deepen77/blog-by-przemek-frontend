import styled from "styled-components";

export const AboutStyles = styled.div`
  color: black;

  h2 {
    font-size: 24px;
    padding: 0 0 0 32px;
    color: #2d3748;
    line-height: 1.33;
    font-weight: bold;
    margin-bottom: 40px;
    border-left-style: solid;
    border-left-color: #e2e8f0;
  }

  .image-wrapper {
    background: white;
    border-radius: 10px;
    padding: 20px 20px 0 20px;
    //border: 1px solid red;
  }

  .my-story-wrapper {
    display: flex;
    margin-top: 70px;
  }

  .my-story-column1,
  .my-story-column2 {
    flex-basis: 50%;
  }

  .my-story-column1 {
    margin-right: 20px;
  }

  .my-story-column2 {
    margin-left: 20px;
  }

  .my-story-description,
  .my-story-design-description,
  .my-story-frontend-description,
  .my-story-backend-description {
    font-size: 16px;
    line-height: 1.8;
    color: #718096;
  }

  .my-story-design-description,
  .my-story-frontend-description,
  .my-story-backend-description {
    box-shadow: 1px 1px 5px 0 rgb(1 1 1 / 5%);
    padding: 2rem;
    background: white;
    border-radius: 1rem;
    margin-bottom: 40px;
  }

  @media only screen and (max-width: 750px) {
    h2 {
      font-size: 20px;
    }
    .my-story-description,
    .my-story-design-description,
    .my-story-frontend-description,
    .my-story-backend-description {
      font-size: 14px;
    }
    .my-story-wrapper {
      flex-direction: column;
    }
    .my-story-design {
      margin-top: 40px;
    }
    .my-story-column1 {
      margin-right: 0px;
    }

    .my-story-column2 {
      margin-left: 0px;
    }
  }
`;
