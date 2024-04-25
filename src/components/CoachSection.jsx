import styled from 'styled-components'; // Importing styled-components for styling
import CoachCard from './CoachCard'; // Importing the CoachCard component
import coachPic1 from '../assets/coach-pic.png'; // Importing image from assets folder
import coachPic2 from '../assets/coach-pic2.png'; // Importing image from assets folder
import coachPic3 from '../assets/coach-pic3.png'; // Importing image from assets folder

const CoachSection = () => {
  return (
    <SectionContainer>
      {/* Section title */}
      <SectionTitle>Meet Our Coaches</SectionTitle>
      {/* Card Wrapper */}
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
  gap: 0;
  width: 390px;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 64px 32px 64px 32px;
  background-color: rgba(228, 193, 68, 1);

  @media (min-width: 768px) { /* Tablet */
    width: 834px;
    padding: 64px;
  }
  @media (min-width: 1200px) { /* Desktop */
    width: 1440px;
    justify-content: flex-start;
    padding: 120px 128x 120px 128px;
  }
`;

const SectionTitle = styled.h1`
  font-family: Fira Sans;
  font-size: 24px;
  font-weight: 500;
  color: rgba(8,61,86,1);
  line-height: 32px;
  text-align: left;
  display: block;
  width: 326px;
  position: relative;
  white-space: pre-wrap;

  @media (min-width: 768px) { /* Tablet */
    font-size: 28px;
  }
  @media (min-width: 1200px) { /* Desktop */
    font-size: 36px;
    line-height: 40px;
    width: 326px;
    padding-top: 20px;
    padding-left: 35px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;

  @media (min-width: 768px) { /* Tablet */
    width: 706px;
    justify-content: flex-start;
    padding: 64px 32px 64px 32px;
  }
  @media (min-width: 1200px) { /* Desktop */
    width: 1184px;
    padding: 96px 0px 96px 0px;
  }
`;

export default CoachSection;
