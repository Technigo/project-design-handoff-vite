import { useEffect, useState } from "react";

const Navbar = () => {
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

  let logoImage, navImage;
  let logoWidth, logoHeight, navWidth, navHeight;

  if (screenWidth < 745) {
    logoImage = "/icons/logo_s.svg";
    navImage = "/icons/burger_s.svg";
    logoHeight = 40;
    logoWidth = 97;
    navHeight = 24;
    navWidth = 32;
  } else if (screenWidth >= 745 && screenWidth <= 1024) {
    logoImage = "/icons/logo_m.svg";
    navImage = "/icons/burger_m.svg";
    logoHeight = 64;
    logoWidth = 208;
    navHeight = 24;
    navWidth = 40;
  } else {
    logoImage = "/icons/logo_l.svg";
    navImage = "/icons/burger_l.svg";
    logoHeight = 80;
    logoWidth = 218;
    navHeight = 32;
    navWidth = 43;
  }

  return (
    <nav className="h-88px fixed  w-full bg-navbar bg-opacity-75 p-4">
      <div
        style={{
          background: `url(${logoImage})`,
          width: `${logoWidth}px`,
          height: `${logoHeight}px`,
        }}
      ></div>
      <div
        style={{
          background: `url(${navImage})`,
          width: `${navWidth}px`,
          height: `${navHeight}px`,
        }}
      ></div>
    </nav>
  );
};

export default Navbar;
