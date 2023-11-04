import { TestimoniesWrapper, TestimonyCard } from './StyledComponents';
import ImageA from '../images/testimony-a.png';
import ImageB from '../images/testimony-b.png';

export const Testimonies = () => {
  return (
    <TestimoniesWrapper>
      <TestimonyCard order={1} style={{ backgroundImage: `url(${ImageA})` }} />
      <TestimonyCard order={2}>
        "YOGA YOU has been a game-changer in my wellness journey. The instructors' expertise and personalised attention have helped me grow in my practice. I've never felt more at home in a yoga studio."
      </TestimonyCard>
      <TestimonyCard order={4} style={{ backgroundImage: `url(${ImageB})` }} />
      <TestimonyCard order={3}>
        "YOGA YOU is my urban escape. The variety of classes and the supportive community keep me coming back. This studio truly empowers both my body and mind."
      </TestimonyCard>
    </TestimoniesWrapper>
  );
};