import styled from "styled-components";

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* width: 254px; */
  border-radius: 10px;
  background: var(--text-card-bg);
  padding: 10px;
  flex: 1 0 254px;
  filter: drop-shadow(0px 4px 4px #1520193c);
  color: var(--text);
`;

const Image = styled.img`
  width: 100%;
  height: 185px;
  object-fit: cover;
  border-radius: 10px;

  @media all and (min-width: 1024px) {
    width: 100%;
  }
`;

const H3 = styled.h3`
  font-family: Optima;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px; /* 116.667% */
`;

export const Card = ({ url, alt, heading, text }) => {
  return (
    <StyledCard>
      <Image
        src={url}
        alt={alt}></Image>
      <H3>{heading}</H3>
      <p>{text}</p>
    </StyledCard>
  );
};
