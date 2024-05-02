import styled from "styled-components";

//styles
export const HeadingTwoVar = styled.h2`
  font-family: Gerbera;
  font-size: 30px;
  text-align: center;
  color: var(--primary-prpl);

  @media all and (min-width: 744px) {
    font-size: 32px;
    text-align: left;
  }

  @media all and (min-width: 1024px) {
    font-size: 64px;
  }
`;
