import styled from "styled-components";

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 254px !important;
  border-radius: 10px;
  background: var(--text-card-bg);
  padding: 10px;
  flex: 0 1 0;
  // Shadow gets cut off - asked Catrine if we could change it. Also added 12px padding to carousel to show it...
  /* box-shadow: 0px 68px 19px 0px rgba(0, 0, 0, 0),
    0px 44px 17px 0px rgba(0, 0, 0, 0.01), 0px 24px 15px 0px rgba(0, 0, 0, 0.04),
    0px 11px 11px 0px rgba(0, 0, 0, 0.06), 0px 3px 6px 0px rgba(0, 0, 0, 0.07); */
  filter: drop-shadow(0px 4px 4px #1520193c);
`;

const Image = styled.img`
  width: 234px;
  height: 185px;
  object-fit: cover;
  border-radius: 10px;
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
