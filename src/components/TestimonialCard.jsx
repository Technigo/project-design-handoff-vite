import { BodyXSmall } from "./Typography/BodyText";
import FiveStars from "../assets/icons/five-stars.svg?react";
import styled from "styled-components";

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const StarsWrapper = styled.div`
  display: flex;
  margin-right: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

const FooterContainer = styled.div`
  color: rgba(30, 30, 30, 0.3);
`;

export const TestimonialCard = ({ stars, name, title, text, location }) => {
  return (
    <>
      <StarsContainer>
        <StarsWrapper>
          {[...Array(stars)].map((_, i) => (
            <FiveStars key={i} />
          ))}
        </StarsWrapper>
        <BodyXSmall>{name}</BodyXSmall>
      </StarsContainer>
      <TextContainer>
        <BodyXSmall bold>{title}</BodyXSmall>
        <BodyXSmall>{text}</BodyXSmall>
      </TextContainer>
      <FooterContainer>
        <BodyXSmall>{location}</BodyXSmall>
      </FooterContainer>
    </>
  );
};
