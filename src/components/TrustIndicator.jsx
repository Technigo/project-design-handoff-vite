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
        <p className="main-paragraph">{subtitle}</p>
        <p className="secondary-paragraph">{paragraph}</p>
      </TrustTextWrapper>
    </TrustSection>
  );
}

const TrustSection = styled.section`
  padding: var(--padding-mobile);
  background: var(--yellow);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;

  @media (min-width: ${breakpoints.tablet}) {
    padding: var(--padding-tablet);
  } 

  @media (min-width: ${breakpoints.desktop}) {
    padding: var(--padding-desktop); 
  }
`;

const TrustTextWrapper = styled.div`
  display: flex;
  width: 326px;
  flex-direction: column;
  align-items: flex-start;
  color: var(--blue); //adding the color here because there were no defined properties for the title in the design. 
  font-family: var(--paragraph); 
  font-weight: 500;
  margin: 0;


  @media (min-width: ${breakpoints.tablet}) {
    width: 472px;
    gap: 8px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 600px;
  }
`;

const TrustTitle = styled.p`
  font-size: 48px;
  font-weight: 500;
  margin: 0;

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 56px;
  }
`;
