import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #8e7575;
    background-color: #fede9f;
    color: #000000;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }

    ${({ id }) =>
    id === "equal" &&
    `
          padding: 20px;
          border: 1px solid #8E7575;
          background-color: #F2542E;
          color: #000000;
          font-size: 24px;
          font-weight: 700;
          flex: 1;
          cursor: pointer;
      
          &:hover {
          opacity: 0.6;
      }
  ` }
`;

export const ButtonEqual = styled.button``;
