import styled from "styled-components";

export const SingleArticleStyles = styled.div`
  background-color: #f8f8f8;
  margin-top: 0px;
  .article-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  h1 {
    font-size: 25.5px;
    font-weight: 900;
    color: #2d3748;
    line-height: 1.33;
    margin-bottom: 1rem;
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  img {
    //max-width: 1000px;
    border-radius: 1rem 1rem 0px 0px;
    object-fit: cover;
    height: 350px;
  }

  p {
    color: #4a5568;
    font-size: 17px;
    font-weight: normal;
    line-height: 1.8;
    padding: 0.5rem 1rem;
    //margin: 0.5rem 0px;
    min-width: auto;
    border-top: 2px solid transparent;
    background-color: #ffffff;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .date {
    font-size: 13px;
    font-weight: normal;
    color: #718096;
    line-height: 1.8;
    margin-bottom: 1rem;
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .image-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .article-subtitle1 {
    font-size: 20px;
    color: #2d3748;
    padding: 2rem 1rem;
    //margin: 0.5rem 0px;
    min-width: auto;
    background-color: #ffffff;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .article-description1 {
    color: #4a5568;
    font-size: 17px;
    font-weight: normal;
    line-height: 1.8;
    padding: 1rem 1rem;
    //margin: 0.5rem 0px;
    min-width: auto;
    border-top: 2px solid transparent;
    background-color: #ffffff;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  hr {
    margin-left: 2rem;
    margin-right: 2rem;
    padding: 0;
    border: 0;
    height: 1px;
    background-image: -webkit-linear-gradient(left, #ffffff, #e2e8f0, #ffffff);
    background-image: -moz-linear-gradient(left, #ffffff, #e2e8f0, #ffffff);
    background-image: -ms-linear-gradient(left, #ffffff, #e2e8f0, #ffffff);
    background-image: -o-linear-gradient(left, #ffffff, #e2e8f0, #ffffff);
  }
`;
