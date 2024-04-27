import styled from "styled-components";

import coachPic1 from "/images/coach-pic.png";
import coachPic2 from "/images/coach-pic2.png";
import coachPic3 from "/images/coach-pic3.png";
import { breakpoints } from "../utility/breakpoints";
import CoachCard from "../utility/CoachCard";

export const CoachSection = () => {
  return (
    <SectionContainer>
      <CoachTitle>Meet Our Coaches</CoachTitle>
      <ScrollableCardWrapper>
        {/* Coach Card 1 */}
        <CoachCard
          imageUrl={coachPic1}
          title="Willow Greenforest"
          subtitle="Herbs and Spices"
          description="Nature's pharmacy holds the key to holistic healing; let the earth's bounty guide you to vibrant health and well-being."
        />
        {/* Coach Card 2 */}
        <CoachCard
          imageUrl={coachPic2}
          title="Serenity Rose"
          subtitle="Meditation and Yoga"
          description="In the quiet embrace of meditation and the gentle flow of yoga, we rediscover our inner strength and nurturing a deep connection with ourselves and the world around us."
        />
        {/* Coach Card 3 */}
        <CoachCard
          imageUrl={coachPic3}
          title="Chef Gabriel Stone"
          subtitle="Mindful Cooking"
          description="Nourish your body and soul with every mindful bite, savoring the essence of life in every dish."
        />
      </ScrollableCardWrapper>
    </SectionContainer>
  );
};

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: var(--padding-mobile);
  background-color: var(--yellow);
  width: 100%;
  overflow: hidden;

  @media (min-width: ${breakpoints.tablet}) {
    padding: var(--padding-tablet);
  }
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: center;
    padding: 120px 128px;
    overflow: visible;
  }
`;

const CoachTitle = styled.h2`
  text-align: left;
  white-space: pre-wrap; // Allow text wrapping

  @media (min-width: ${breakpoints.tablet}) {
    /* Tablet */
  }
  @media (min-width: ${breakpoints.desktop}) {
    /* padding-left: 35px; */
  }
`;

const ScrollableCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow-x: auto;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 96px 0;
  gap: 32px;

  @media (min-width: ${breakpoints.tablet}) {
    justify-content: flex-start;
    padding: 64px 32px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    padding: 96px 0;
  
  }
`;
