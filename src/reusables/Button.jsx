import styled from "styled-components";

export const Button = styled.button`
  //conditionally render background color of button
  background-color: ${(props) =>
    props.buy ? "var(--primary-white)" : "var(--primary-prpl)"};
  border-radius: 30px;
  //conditionally render border color of button
  border: ${(props) => (props.buy ? "2px solid var(--primary-prpl)" : "none")};
  width: 202px;
  height: 46px;
  line-height: 0; //centers vertically in the button
  //conditionally render text color of button
  color: ${(props) =>
    props.buy ? "var(--primary-prpl)" : "var(--primary-white)"};
  font-size: 20px;
  padding: 10px;

  &:hover {
    background-color: var(--hover-prpl);
  }

  @media all and (min-width: 744px) {
    width: 226px;
    height: 55px;
  }

  @media all and (min-width: 1024px) {
    width: 300px;
    height: 64px;
  }
`;
