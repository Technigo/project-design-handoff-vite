import { useTranslation } from 'react-i18next';
import { TestimoniesWrapper, TestimonyCard } from './StyledComponents';
import ImageA from '../images/testimony-a.png';
import ImageB from '../images/testimony-b.png';

export const Testimonies = () => {
  const { t } = useTranslation();

  return (
    <TestimoniesWrapper>
      <TestimonyCard order={1} style={{ backgroundImage: `url(${ImageA})` }} />
      <TestimonyCard order={2}>
        {t('testimonies.testimony1')}
      </TestimonyCard>
      <TestimonyCard order={4} style={{ backgroundImage: `url(${ImageB})` }} />
      <TestimonyCard order={3}>
        {t('testimonies.testimony2')}
      </TestimonyCard>
    </TestimoniesWrapper>
  );
};
