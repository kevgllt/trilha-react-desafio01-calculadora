import styled from "styled-components";

export const InputContainer = styled.div`
  max-width: 100%;
  height: 7.5rem; /* 75px */
  padding: 0 1.6rem; /* 16px */
  background-color: #aaaaff; /* Light blue background */

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.4rem; /* 24px */
  font-family: "Roboto";

  input {
    width: 100%;
    height: 7.5rem; /* 75px */
    background-color: #aaaaff;
    border: 0;
    padding: 0 1.6rem; /* 16px */

    font-size: 2.4rem; /* 24px */
    font-family: "Roboto";
    color: #ffffff;
    text-align: right;

    @media (max-width: 768px) {
      width: 100%;
      height: 6rem; /* 60px */
      font-size: 3.2rem; /* 32px */
    }
  }
`;
