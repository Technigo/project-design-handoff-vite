
import { useTranslation } from 'react-i18next';
import i18n from './i18next';  

const TranslationDisplay = () => {
  const { t } = useTranslation();

  // All the keys you provided are listed below:
  const textKeys = [
    "WhyPlayParkour.heading",
    "PlayParkour.heading",
    "PlayParkour.description",
    "PlayParkour.button",
    "HowToPlayParkour.heading",
    "HowToPlayParkour.image1Desc",
    "HowToPlayParkour.image2Desc",
    "HowToPlayParkour.image3Desc",
    "Footer.link1",
    "Footer.link2",
    "Footer.link3",
    "Footer.link4",
    "CarouselComponent.quote1",
    "CarouselComponent.quote2",
    "CarouselComponent.quote3",
    "CarouselComponent.quote4",
    "CarouselComponent.quote5",
    "CarouselComponent.quote6",
    "CarouselComponent.quote7",
    "AboutUsPage.visionHeader",
    "AboutUsPage.visionDesc1",
    "AboutUsPage.visionDesc2",
    "AboutUsPage.storyHeader",
    "AboutUsPage.storyDesc",
    "AboutUsPage.contactHeader",
    "AboutUsPage.contactDesc",
    "AboutUsPage.inputName",
    "AboutUsPage.inputEmail",
    "AboutUsPage.inputMessage",
    "AboutUsPage.checkboxLabel",
    "AboutUsPage.submitButton",
    "AboutUs.heading",
    "AboutUs.description",
    "AboutUs.button"
  ];

  const languages = ["en", "sv"];

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      {/* Render the translated text */}
      {textKeys.map((key, index) => (
        <div key={index}>
          <p>{t(key)}</p> 
        </div>
      ))}

      {/* Render the language switching buttons */}
      <div>
        {languages.map((language, index) => (
          <button key={index} onClick={() => changeLanguage(language)}>
            {language}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TranslationDisplay;
