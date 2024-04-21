import styled from "styled-components";

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 254px;
  border-radius: 10px;
  background: var(--text-card-bg);
  padding: 10px;
  flex: 1 0 0;
  filter: drop-shadow(0px 4px 4px #1520193c);

  @media all and (min-width: 1440px) {
    width: 325px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 185px;
  object-fit: cover;
  border-radius: 10px;

  @media all and (min-width: 1440px) {
    width: 100%;
  }
`;

export const Card = ({ url, alt, heading, text }) => {
  return (
    <StyledCard>
      <Image
        src={url}
        alt={alt}></Image>
      <h3>{heading}</h3>
      <p>{text}</p>
    </StyledCard>
  );
};
