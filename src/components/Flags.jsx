import styled from "styled-components";

const FlagContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  height: 32px;

  @media all and (min-width: 744px) {
    gap: 32px;
  }

  @media all and (min-width: 1024px) {
    grid-area: ${({ $placement }) => $placement === "footer" && "fl"};
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

export const Flags = ({ $placement }) => {
  return (
    <FlagContainer $placement={$placement}>
      <Flag aria-label="english">🇬🇧</Flag>
      <Flag aria-label="swedish">🇸🇪</Flag>
    </FlagContainer>
  );
};
