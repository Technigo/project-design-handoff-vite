import styled from 'styled-components';

import coachPic1 from '../assets/coach-pic.png';
import coachPic2 from '../assets/coach-pic2.png';
import coachPic3 from '../assets/coach-pic3.png';
import { breakpoints } from "../utility/breakpoints";
import CoachCard from './CoachCard';

export const CoachSection = () => {
  return (
    <SectionContainer>
      <CoachTitle>Meet Our Coaches</CoachTitle>
      <CardWrapper>
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
      </CardWrapper>
    </SectionContainer>
  );
};

// Styled-components styles
const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
/*   align-items: ; */
  position: relative;
  padding: 64px 32px;
  background-color: var(--yellow);

  @media (min-width: ${breakpoints.tablet}) {
    padding: 64px;
  }
  @media (min-width: ${breakpoints.desktop}) {
    justify-content: flex-start;
    padding: 120px 128px;
  }
`;

const CoachTitle = styled.h2`
  font-family: Fira Sans;
  font-size: 24px;
  font-weight: 500;
  color: rgba(8,61,86,1);
  line-height: 32px;
  text-align: left;
  display: block;
  position: relative;
  white-space: pre-wrap;

  @media (min-width: ${breakpoints.tablet}) { /* Tablet */
    font-size: 28px;
  }
  @media (min-width: ${breakpoints.desktop}) { /* Desktop */
    font-size: 36px;
    line-height: 40px;
    padding-top: 20px;
    /* padding-left: 35px; */
  }
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  @media (min-width: ${breakpoints.tablet}) { /* Tablet */
    justify-content: flex-start;
    padding: 64px 32px;
  }
  @media (min-width: ${breakpoints.desktop}) { /* Desktop */
    padding: 96px 0; 
  }
`;

