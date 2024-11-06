import styled from "styled-components";
import { getRandomRotation } from "../utils";
import pawImage from "../../public/assets/logo-images/big-paw.svg"


export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;

  &::before {
  content: "";
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%, -50%, rotate(${getRandomRotation()});
  background-image: url(${pawImage});
  background-size: cover;
  opacity: 0.5;
  width: 25rem;
  }
`;
