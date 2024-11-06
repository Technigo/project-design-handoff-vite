import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  position: relative;
  width: 100%;
  max-width: 100vw;

&::before {
  content: "";
  position: absolute;
  top: ${({top}) => top || '50%'};
  left: ${({left}) => left || '50%'};
  transform: translate(-50%, -50%) rotate(${({rotation}) => rotation || '0deg'});
  background-image: url("/assets/logo-images/big-paw.svg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 20rem;
  height: 20rem;
  opacity: 0.5; /* Optional for transparency */
  z-index: 0;
}

`;
