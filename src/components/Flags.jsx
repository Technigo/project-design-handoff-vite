import styled from "styled-components";

const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  height: 32px;

  @media all and (min-width: 744px) {
    gap: 32px;
  }
`;

const Flag = styled.i`
  font-style: normal;
  translate: all 0.5s ease-in-out;
  font-size: 28px;
  cursor: pointer;

  @media all and (min-width: 744px) {
    font-size: 32px;
  }
  @media all and (min-width: 1024px) {
    font-size: 20px;
  }
  &:hover {
    font-size: 36px;
  }
`;

export const Flags = () => {
  return (
    <FlagContainer>
      <Flag aria-label="english">🇬🇧</Flag>
      <Flag aria-label="swedish">🇸🇪</Flag>
    </FlagContainer>
  );
};
