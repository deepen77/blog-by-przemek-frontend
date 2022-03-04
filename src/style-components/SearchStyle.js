import styled from "styled-components";

export const SearchStyle = styled.div`
  margin-top: 60px;

  .w-full {
    width: 100%;
  }

  .relative {
    position: relative;
  }

  .btn-search {
    position: absolute;
    top: 0px;
    left: 1.5rem;
    display: flex;
    align-items: center;
    cursor: default;
    border-style: none;
    background-color: transparent;
    height: 100%;
  }

  .input-search {
    font-size: 1.125rem;
    line-height: 1.75rem;
    padding-right: 1.5rem;
    padding-left: 3.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-width: 1px;
    border-radius: 9999px;
    width: 100%;
    outline: none;
    //border-color: grey;
    border: 1px solid #e2e8f0;
  }

  .input-search:focus {
    background: #e2e8f0;
  }
  input[type="search"] {
    -webkit-appearance: none;
  }
`;


