import styled from "styled-components";


export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 48px;
  line-height: 56px;
  width: max-content;
  max-width: 100%;
  /* background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  ); */
  color: #2d3748;
  /* -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 25px;
    line-height: 48px;
    margin-bottom: 12px;
  }

  @media (max-width: 640px) {
    font-size: 25px;
    line-height: 40px;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  //max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  //color: rgba(255, 255, 255, 0.5);
  color: #2d3748;

  @media (max-width: 768px) {
    //max-width: 300px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;


