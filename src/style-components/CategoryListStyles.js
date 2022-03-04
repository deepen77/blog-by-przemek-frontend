import styled from "styled-components";

export const CategoryListStyle = styled.div`
  padding: 32px;
  
  min-width: 250px;
  text-align: center;
  //margin: 150px auto 0 auto;


  .title {
    color: #718096;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 50px;
    //border: 1px solid red;
  }
  .list-item {
    list-style-type: none;
    background-color: white;
    padding: 14px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    //border: 1px solid red;
  }
  .item {
    cursor: pointer;
    margin-top: 5px;
    line-height: 25px;
    font-size: 12px;
    background-color: #e2e8f0;
    color: #718096;
    padding: 4px 16px;
    margin-right: 15px;
    display: inline-block;
    border-radius: 5px;
    font-weight: 600;
    vertical-align: middle;
    transition: all 250ms ease;
    //border: 1px solid blue;
  }

  .item:hover {
    color: #fff;
    background: #718096;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
    margin: 50px auto 0 auto;
    border: 1px solid blue;

    .title {
      font-size: 20px;
      border: 1px solid red;
      margin-bottom: 10px;
    }

    .list-item {
      list-style-type: none;
      background-color: white;
      padding: 1rem;

      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
      //border: 1px solid red;
    }
  }
`;
