import { useTranslation } from 'react-i18next';
import { HeroWrapper, HeroImage, HeroImageText, HeroHeader, HeroText, BookButton, StyledLink, ButtonWrapper } from './StyledComponents';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroWrapper>
        <HeroImage>
          <HeroImageText>
            <span>{t('hero.yourPractice')}</span>
            <span>Yoga you</span> {/* Keeping it static */}
          </HeroImageText>
        </HeroImage>
        <HeroHeader>
          <span>{t('hero.destination')}</span>
          <span>{t('hero.wayToPractice')}</span>
        </HeroHeader>
        <HeroText>
          <div>
            {t('hero.breakFromStress')}
          </div>
          <div>
            {t('hero.joinCommunity')}
          </div>
        </HeroText>
        <ButtonWrapper>
          <BookButton><StyledLink to="/book">{t('book')}</StyledLink></BookButton>
        </ButtonWrapper>
      </HeroWrapper>
    </>
  );
};