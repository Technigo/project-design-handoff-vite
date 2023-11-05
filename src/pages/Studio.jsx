import { useTranslation } from 'react-i18next';
import { StudioWrapper, StudioHeader } from '../components/StyledComponents';

export const Studio = () => {
  const { t } = useTranslation();

  return (
    <StudioWrapper>
      <StudioHeader>{t('studio')}</StudioHeader>
    </StudioWrapper>
  );
}