import { useEffect, useState } from "react";

const Booking = () => {
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

  let bookButton;
  let buttonWidth, buttonHeight;

  if (screenWidth < 745) {
    bookButton = "/icons/bookButton_s.svg";
    buttonWidth = 175;
    buttonHeight = 40;
  } else if (screenWidth >= 745 && screenWidth <= 1024) {
    bookButton = "/icons/bookButton_m.svg";
    buttonWidth = 232;
    buttonHeight = 72;
  } else {
    bookButton = "/icons/bookButton_l.svg";
    buttonWidth = 376;
    buttonHeight = 80;
  }

  return (
    <div className="flex-co m-8 mt-14 flex flex-col font-heading text-2xl">
      <p>
        Your path to a healthier lifestyle starts here! Take your first step to
        feeling inner balance and peace.
      </p>
      <button
        className="ml-auto mt-16"
        style={{
          background: `url(${bookButton})`,
          width: `${buttonWidth}px`,
          height: `${buttonHeight}px`,
        }}
      ></button>
    </div>
  );
};

export default Booking;
