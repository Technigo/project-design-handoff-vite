//import styled
import styled from "styled-components";

//import arrow icon
import ArrowIcon from "../../public/icons/arrow-right.png";

//component
export const Arrow = styled.img`
  content: url(${ArrowIcon});
  width: 46px;
  height: 22px;

  //default styling, no props passed
  transform: ${(props) => (props.left ? "rotate(180deg)" : "rotate(0deg)")};

  @media all and (min-width: 744px) {
    width: 33px;
    height: 12px;
  }

  @media all and (min-width: 1024px) {
    width: 57px;
    height: 22px;
  }
`;
