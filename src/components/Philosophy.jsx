import './Reviews.css';
import { useTranslation } from "react-i18next"
import Philo from '../assets/images/philosophy.jpg';
import Classes from '../assets/images/classes.jpg';
import Locations from '../assets/images/location.jpg';

const InfoCard = ({ imageSrc, altText, title, description }) => {
  const { t } = useTranslation();

  return (
    <div className="relative align-top mx-[7.5px] h-full inline-block m max-w-[194px] md:flex-col  md:px-5 md:max-w-[234px] lg:max-w-[417px]">
      <img
        className="max-w-[194px] max-h-[137px] md:max-w-[234px] md:max-h-[167px] lg:max-w-[417px] lg:max-h-[310px]"
        src={imageSrc}
        alt={t(altText)}
      />
      <h3 className="font-semibold text-[22px] md:text-[25px]  lg:text-[36px] leading-[25px] md:leading-[31px] lg:leading-[45px]">
        {t(title)}
      </h3>
      <p className="mt-[25px] text-wrap whitespace-normal text-[16px] md:text-[20px] lg:text-[30px] leading-[22px] md:leading-[28px] lg:leading-[45px]">
        {t(description)}
      </p>
      <p className="cursor-pointer text-[16px] md:text-[20px] lg:text-[30px]">
        {t("cta.read")} &gt;
      </p>
    </div>
  );
};

export const Philosophy = () => {
  return (
    <>
      <a className="cursor-pointer" href="#">
        <div
          id="Philosophy"
          className="font-inter wrapper relative text-darkblue bg-yogawhite flex py-[65px] mx-auto lg:py-[109px] pl-[5px] md:pl-[10px]"
        >
          <div
            id="slider"
            className="mx-[4.5px] w-full h-full overflow-x-scroll whitespace-nowrap scroll smooth xl:overflow-x-hidden"
          >
            <InfoCard
              imageSrc={Philo}
              altText="info.ourPhilosophy"
              title="info.ourPhilosophy"
              description="info.ourPhilosophyText"
            />
            <InfoCard
              imageSrc={Classes}
              altText="info.ourClasses"
              title="info.ourClasses"
              description="info.ourClassesText"
            />
            <InfoCard
              imageSrc={Locations}
              altText="info.ourLocations"
              title="info.ourLocations"
              description="info.ourLocationsText"
            />
          </div>
        </div>
      </a>
    </>
  );
};
