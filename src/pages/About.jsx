import { useTranslation } from 'react-i18next';
import { AboutWrapper } from '../components/StyledComponents';

export const About = () => {
  const { t } = useTranslation();
  
  return (
    <AboutWrapper>
      {t('about')}
    </AboutWrapper>
  );
}