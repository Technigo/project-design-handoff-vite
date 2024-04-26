import { useState, useEffect } from "react";
import styled from "styled-components";
import { breakpoints } from "../utility/breakpoints";

export function TrustIndicator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trustTexts = [
    {
      title: "2650",
      subtitle: "Trees Planted",
      paragraph:
        "A tree will be planted in your name if you choose to stay with us for 5 days or longer",
    },
    {
      title: "+3200",
      subtitle: "Happy Retreaters",
      paragraph:
        "Guests who have reported a major difference in the quality of day-to-day life before and after their stay",
    },
    {
      title: "+2K",
      subtitle: "Kg of food grown",
      paragraph:
        "From your labour to your table! You are welcome to participate in planting and harvesting with us",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % trustTexts.length);
    }, 8000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentIndex, trustTexts.length]);

  const { title, subtitle, paragraph } = trustTexts[currentIndex];

  return (
    <TrustSection>
      <TrustTextWrapper>
        <TrustTitle>{title}</TrustTitle>
        <TrustSubtitle>{subtitle}</TrustSubtitle>
        <TrustParagraph>{paragraph}</TrustParagraph>
      </TrustTextWrapper>
    </TrustSection>
  );
}

const TrustSection = styled.section`
  padding: 64px 32px;
  background: var(--yellow);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  @media (min-width: ${breakpoints.tablet}) {
    padding: 64px;
  } 

  @media (min-width: ${breakpoints.desktop}) {
    padding: 96px 128px; 
  }
`;

const TrustTextWrapper = styled.div`
  display: flex;
  width: 326px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (min-width: ${breakpoints.tablet}) {
    width: 472px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`;

const BaseText = styled.p`
  color: var(--blue);
  font-family: var(--paragraph); /* Default font for all text */
  font-weight: 500;
  margin: 0;
`;

const TrustTitle = styled(BaseText)`
  font-size: 48px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 56px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 56px;
  }
`;

const TrustSubtitle = styled(BaseText)`
  font-size: 18px;
  letter-spacing: -0.72px;
  line-height: 26px;

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.96px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 26px;
    line-height: 32px;
    letter-spacing: -1.04px;
  }
`;

const TrustParagraph = styled(BaseText)`
  font-size: 20px;
  line-height: 40px;
  letter-spacing: -0.8px;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 18px;
    line-height: 40px;
    letter-spacing: -0.72px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 26px;
    line-height: 32px;
    letter-spacing: -1.04px;
  }
`;
