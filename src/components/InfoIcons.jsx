import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import parking from "../assets/icons/parking.png";
import food from "../assets/icons/food.png";
import gym from "../assets/icons/gym.png";
import wifi from "../assets/icons/wifi.png";

export const InfoIcons = ({ icon }) => {

  let img = "";
  if (
    icon.name.toLowerCase() === "canteen" ||
    icon.name.toLowerCase() === "ランチ"
  ) {
    img = food;
  }
  if (
    icon.name.toLowerCase() === "parking" ||
    icon.name.toLowerCase() === "パーキング有"
  ) {
    img = parking;
  }
  if (icon.name.toLowerCase() === "gym" || icon.name.toLowerCase() === "ジム") {
    img = gym;
  }
  if (
    icon.name.toLowerCase() === "co-working" ||
    icon.name.toLowerCase() === "オフィス"
  ) {
    img = wifi;
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 360);
    checkIfMobile();

    function handleResize() {
      checkIfMobile();
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <img src={img} alt={icon.name} className="w-10 h-10 object-contain" />
      <p className="whitespace-nowrap text-[16px] desktop:text-[18px]">
        {isMobile && icon.smallName ? icon.smallName : icon.name}
      </p>

      <p className="hidden tablet:block text-[14px] desktop:text-[16px]">{icon.description}</p>
    </div>
  );
};

InfoIcons.propTypes = {
  icon: PropTypes.object.isRequired,
};
