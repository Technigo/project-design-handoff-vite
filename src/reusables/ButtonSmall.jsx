import styled from "styled-components";

export const ButtonSmall = styled.button`
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
    background-color: ${(props) =>
      props.buy ? "var(--primary-prpl)" : "var(--hover-prpl)"};
    color: ${(props) =>
      props.buy ? "var(--primary-white)" : "var(--primary-white)"};
  }
`;
