import iconOne from "../../assets/icons/icon1.svg";
import iconTwo from "../../assets/icons/icon2.svg";
import iconThree from "../../assets/icons/icon3.svg";
import iconFour from "../../assets/icons/icon4.svg";
import "./SectionTwo.css";
import { useTranslation } from "react-i18next";

export const SectionTwo = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="frame">
        <div className="mini-frame">
          <img src={iconOne} alt="Icon 1" />
          <p>{t("SectionTwo.accessible")}</p>
          <p>{t("SectionTwo.ourVision")}</p>
        </div>

        <div className="mini-frame">
          <img src={iconTwo} alt="Icon 2" />
          <p>{t("SectionTwo.thousandsOfClasses")}</p>
          <p>{t("SectionTwo.exploreClasses")}</p>
        </div>

        <div className="mini-frame">
          <img src={iconThree} alt="Icon 3" />
          <p>{t("SectionTwo.safeAndEducational")}</p>
          <p>{t("SectionTwo.aboutMiniFit")}</p>
        </div>

        <div className="mini-frame">
          <img src={iconFour} alt="Icon 4" />
          <p>{t("SectionTwo.hundredsOfCenters")}</p>
          <p>{t("SectionTwo.findYourCenter")}</p>
        </div>
      </div>
    </>
  );
};

// export const SectionTwo = () => {
//   return (
//     <>
//       <div className="frame">
//         <div className="mini-frame">
//           <img src={iconOne} />
//           <p>Accessible for everyone</p>
//           <p>Our vision</p>
//         </div>

//         <div className="mini-frame">
//           <img src={iconTwo} />
//           <p>Thousands of classes</p>
//           <p>Explore classes</p>
//         </div>

//         <div className="mini-frame">
//           <img src={iconThree} />
//           <p>Safe and educational</p>
//           <p>About MiniFit</p>
//         </div>

//         <div className="mini-frame">
//           <img src={iconFour} />
//           <p>Hundreds of centers</p>
//           <p>Find your center</p>
//         </div>
//       </div>
//     </>
//   );
// };
