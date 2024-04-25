import { useState, useEffect } from "react";

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let logoImage, instagramImage, twitterImage, whatsappImage;
  let logoWidth, logoHeight, mediaSize;

  if (screenWidth < 745) {
    logoImage = "/icons/logo_s.svg";
    instagramImage = "/icons/instagram_s.svg";
    twitterImage = "/icons/twitter_s.svg";
    whatsappImage = "/icons/whatsapp_s.svg";
    logoHeight = 40;
    logoWidth = 97;
    mediaSize = 24;
  } else if (screenWidth >= 745 && screenWidth <= 1024) {
    logoImage = "/icons/logo_m.svg";
    instagramImage = "/icons/instagram_m.svg";
    twitterImage = "/icons/twitter_m.svg";
    whatsappImage = "/icons/whatsapp_m.svg";
    logoHeight = 64;
    logoWidth = 208;
    mediaSize = 32;
  } else {
    logoImage = "/icons/logo_l.svg";
    instagramImage = "/icons/instagram_l.svg";
    twitterImage = "/icons/twitter_l.svg";
    whatsappImage = "/icons/whatsapp_l.svg";
    logoHeight = 80;
    logoWidth = 218;
    mediaSize = 48;
  }

  return (
    <div className=" bg-blue p-8">
      <div
        className=""
        style={{
          background: `url(${logoImage})`,
          width: `${logoWidth}px`,
          height: `${logoHeight}px`,
        }}
      ></div>
      <p className="m-2 text-yellowLight">About us</p>
      <p className="ml-2 text-yellowLight">Contact us</p>
      <p className="m-2 text-yellowLight">FAQ</p>
      <div className="m-2 flex py-2">
        <div
          className="mr-6"
          style={{
            background: `url(${instagramImage})`,
            width: `${mediaSize}px`,
            height: `${mediaSize}px`,
          }}
        ></div>
        <div
          className="mr-6"
          style={{
            background: `url(${twitterImage})`,
            width: `${mediaSize}px`,
            height: `${mediaSize}px`,
          }}
        ></div>
        <div
          style={{
            background: `url(${whatsappImage})`,
            width: `${mediaSize}px`,
            height: `${mediaSize}px`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Footer;
