import logo from "/favicon.svg";
import global from "/icons/global.svg";
import youtube from "/icons/youtube.png";
// import Youtube from "../assets/youtube.svg?react";
import youtube2 from "/icons/youtube2.png";
import facebook from "/icons/Facebook.png";
import facebook2 from "/icons/facebook2.png";
import ins from "/icons/ins.png";
import ins2 from "/icons/ins2.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t, i18n } = useTranslation();
  const [youtubeImage, setYoutubeImage] = useState(youtube);
  const [facebookImage, setFacebookImage] = useState(facebook);
  const [insImage, setInsImage] = useState(ins);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const handleHover = (imageState, hoverImage) => {
    imageState(hoverImage);
  };

  const handleLeave = (imageState, originalImage) => {
    imageState(originalImage);
  };
  const handleLogoClick = () => {
    // Scroll to the top of the page, as the requirement of the UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="bg-lime-green  px-5 ">
      <div className="  md:text-xl lg:w-[40%] lg:ml-[55%] ">
        <div className="font-bold flex flex-row gap-x-10 py-6">
          <Link to="/about" onClick={scrollToTop}>
            <p className="hover:underline hover:text-persian-blue">
              {t("footer.about")}
            </p>
          </Link>
          <p className="hover:underline hover:text-persian-blue">
            {t("footer.FAQ")}
          </p>
          <div className="flex flex-row hover:underline hover:text-persian-blue">
            <img src={global} alt="Golbal image" className="w-6" />
            <select
              className="bg-transparent"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="se">Swedish</option>
            </select>
          </div>
        </div>
        <p className="font-bold">{t("footer.join")}</p>
      </div>
      <div className="flex flex-row justify-between items-center py-6 ">
        <div className="flex flex-row gap-5 lg:ml-[55%]">
          <img
            src={facebookImage}
            alt="Facebook"
            onMouseEnter={() => handleHover(setFacebookImage, facebook2)}
            onMouseLeave={() => handleLeave(setFacebookImage, facebook)}
            className="w-[41px] h-[39px] lg:w-[64px] lg:h-[59px]"
          />
          {/* <Youtube className="hover:text-persian-blue" /> */}
          <img
            src={youtubeImage}
            alt="YouTube"
            onMouseEnter={() => handleHover(setYoutubeImage, youtube2)}
            onMouseLeave={() => handleLeave(setYoutubeImage, youtube)}
            className="w-[41px] h-[39px] lg:w-[64px] lg:h-[59px]"
          />
          <img
            src={insImage}
            alt="Instagram"
            onMouseEnter={() => handleHover(setInsImage, ins2)}
            onMouseLeave={() => handleLeave(setInsImage, ins)}
            className="w-[41px] h-[39px] lg:w-[64px] lg:h-[59px]"
          />
        </div>

        <img
          src={logo}
          alt="bottom logo"
          className="w-[5.7rem] cursor-pointer md:w-[9rem] lg:w-[14rem] lg:h-[6rem]"
          aria-label="button back to top"
          onClick={handleLogoClick}
        />
      </div>
    </section>
  );
};
