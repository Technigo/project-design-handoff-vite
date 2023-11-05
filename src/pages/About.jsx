import { useTranslation } from 'react-i18next';
import { AboutWrapper, AboutHeader, AboutCard } from '../components/StyledComponents';
import yogaA from '../assets/yoga-a.svg';
import yogaB from '../assets/yoga-b.svg';
import yogaC from '../assets/yoga-c.svg';

export const About = () => {
  const { t } = useTranslation();

  return (
    <AboutWrapper>
      <AboutHeader>{t('aboutPage.aboutUsTitle')}</AboutHeader>
      <AboutCard>
        <img src={yogaA} alt={t('aboutPage.hero.yourPractice')} />
      </AboutCard>
      <AboutCard>
        <h3>{t('aboutPage.whoWeAreTitle')}</h3>
        {t('aboutPage.whoWeAreDescription')}
      </AboutCard>
      <AboutCard>
        <img src={yogaB} alt={t('aboutPage.hero.destination')} />
      </AboutCard>
      <AboutCard>
        <h3>{t('aboutPage.whatWeDoTitle')}</h3>
        {t('aboutPage.whatWeDoDescription')}
      </AboutCard>
      <AboutCard>
        <img src={yogaC} alt={t('aboutPage.hero.wayToPractice')} />
      </AboutCard>
      <AboutCard>
        <h3>{t('aboutPage.whyWeDoItTitle')}</h3>
        {t('aboutPage.whyWeDoItDescription')}
      </AboutCard>
    </AboutWrapper>
  );
};
