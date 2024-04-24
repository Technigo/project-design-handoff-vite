import LangIconSmall from "../../assets/icons/Lang-icon-mobile.svg";
import LangIconMedium from "../../assets/icons/Lang-icon-tablet.svg";
import LangIconLarge from "../../assets/icons/Lang-icon-desktop.svg";

export const Language = () => {
  return (
    <>
      <div className="md:hidden">
        <img src={LangIconSmall} alt="Language icon" />
      </div>
      <div className="hidden items-center gap-[9px] md:flex lg:hidden">
        <img src={LangIconMedium} alt="Language icon" />{" "}
        <p className="text-base">Swedish</p>
      </div>
      <div className="gap-[9px]lg:flex hidden items-center">
        <img src={LangIconLarge} alt="Language icon" /> <p>Swedish</p>
      </div>
    </>
  );
};
