import LogoWhiteSmall from "../assets/logo/Logo-white-TabletMobile1.svg";
import LogoWhiteLarge from "../assets/logo/Logo-white-Desktop.svg";

export const Logo = () => {
  return (
    <div>
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
    </div>
  );
};
