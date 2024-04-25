// /* eslint-disable react/prop-types */
// //import styled
// import styled from "styled-components";

// const StyledButton = styled.button`
//   //conditionally render background color of button
//   background-color: ${(props) =>
//     props.buy ? "var(--primary-white)" : "var(--primary-prpl)"};
//   border-radius: 30px;
//   //conditionally render border color of button
//   border: ${(props) => (props.buy ? "2px solid var(--primary-prpl)" : "none")};
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
//   line-height: 0; //centers vertically in the button
//   //conditionally render text color of button
//   /* color: ${(props) => props.color}; */
//   color: ${(props) =>
//     props.buy ? "var(--primary-prpl)" : "var(--primary-white)"};
//   font-size: ${(props) => props.font};
//   padding: 10px;

//   &:hover {
//     background-color: ${(props) =>
//       props.buy ? "var(--primary-prpl)" : "var(--hover-prpl)"};
//     color: ${(props) =>
//       props.buy ? "var(--primary-white)" : "var(--primary-white)"};
//   }
// `;

// //component
// export const Button = ({ size }) => {
//   //define logo definition based on size prop
//   let width;
//   let height;
//   let font;

//   switch (size) {
//     case "large":
//       width = "300px";
//       height = "64px";
//       font = "24px";

//       break;
//     case "medium":
//       width = "226px";
//       height = "55px";
//       font = "20px";

//       break;
//     case "small":
//       width = "202px";
//       height = "46px";
//       font = "20px";

//       break;
//     default:
//       width = "202px";
//       height = "46px";
//       font = "20px";
//     //default to small if no valid type is provided
//   }

//   return <StyledButton width={width} height={height} font={font} />;
// };

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
    cursor: pointer;
    background-color: ${(props) =>
      props.buy ? "var(--primary-prpl)" : "var(--hover-prpl)"};
    color: ${(props) =>
      props.buy ? "var(--primary-white)" : "var(--primary-white)"};
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
