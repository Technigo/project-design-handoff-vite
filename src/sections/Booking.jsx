import { useEffect, useState } from "react";

export const Booking = () => {
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
    <section className="flex w-screen flex-col px-8 py-16 font-heading text-2xl text-blue sm:p-16 md:px-16 lg:px-32 lg:py-24">
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
    </section>
  );
};
