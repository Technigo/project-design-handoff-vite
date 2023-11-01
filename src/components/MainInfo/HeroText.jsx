import styled from "styled-components";

const HeroTextContainer = styled.div`
  div {
    color: #c00202;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    text-align: center;
    padding: 69px 0;
  }
  span {
    padding: 0 4px;
  }
`;

export const HeroText = () => {
  return (
    <HeroTextContainer>
      <div>
        <span>Strength.</span>
        <span>Mobility.</span>
        <span>Mindfulness.</span>
      </div>
    </HeroTextContainer>
  );
};
