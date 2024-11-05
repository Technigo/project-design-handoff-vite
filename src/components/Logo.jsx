import LogoWhiteSmall from "../assets/logo/Logo-white-small.svg";
import LogoWhiteLarge from "../assets/logo/Logo-white-large.svg";
import LogoBlackSmall from "../assets/logo/Logo-black-small.svg";
import LogoBlackLarge from "../assets/logo/Logo-black-large.svg";

export const LogoLight = () => {
  return (
    <>
      <img
        src={LogoWhiteSmall}
        alt="the zumba hall logo in white"
        className="lg:hidden"
      />
      <img
        src={LogoWhiteLarge}
        alt="the zumba hall logo in white"
        className="hidden lg:block"
      />
    </>
  );
};

export const LogoDark = () => {
  return (
    <>
      <img
        src={LogoBlackSmall}
        alt="the zumba hall logo in black"
        className="lg:hidden"
      />
      <img
        src={LogoBlackLarge}
        alt="the zumba hall logo in black"
        className="hidden h-[154px] lg:block"
      />
    </>
  );
};
