import { useTranslation } from 'react-i18next';
import { BenefitsWrapper, BenefitsHeader } from './StyledComponents';
import BenefitsCarousel from './BenefitsCarousel';

export const Benefits = () => {
  const { t } = useTranslation();

  return (
    <BenefitsWrapper>
      <BenefitsHeader>{t('benefits.header')}</BenefitsHeader>
      <BenefitsCarousel />
    </BenefitsWrapper>
  );
};
