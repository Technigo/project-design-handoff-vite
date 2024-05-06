import { Image } from "../component/Image";
import { Link } from "../component/Link";
import { Text } from "../component/Text";

export const Footer = () => (
  <div className="flex flex-col gap-y-2.5 bg-aqua px-9 pb-10 font-inter text-base font-bold md:px-69 xl:px-117">
    <div className="mt-1.5 flex w-44 cursor-pointer flex-row gap-8 rounded-full border border-black md:mt-18">
      <Image link={"/Images/globe.svg"} imgText={"globe"} />
      <label>
        <select
          aria-label="language"
          className="select-custom appearance-none  bg-transparent"
        >
          <option value="es">English</option>
          <option value="fr">French</option>
        </select>
      </label>
    </div>
    <Link link={"tel:+12345678900"} text={"Contact us"} />
    <Text text={"Social media"} />
    <div className="flex gap-3 ">
      <Image link={"./Images/fblogo.svg"} imgText={"facebook logo"} />
      <Image link={"./Images/iglogo.svg"} imgText={"instagram logo"} />
      <Image link={"./Images/tiktoklogo.svg"} imgText={"tiktok logo"} />
    </div>
    <div>
      <Link
        link={
          "https://www.google.com/maps/place/Runeberginkatu+44,+00260+Helsinki,+Finland/@60.1787071,24.9199486,17z/data=!3m1!4b1!4m6!3m5!1s0x46920a2fee40d711:0x93bacc713e0f6118!8m2!3d60.1787071!4d24.9225235!16s%2Fg%2F11c26fs5vb?entry=ttu"
        }
        text={"Runebergsgatan 44 Helsingfors"}
      />
    </div>
    <span className="mb-7 flex gap-x-1 text-xs md:pb-21">
      <Image link={"/Images/copyright.svg"} imgText={"copyright logo"} />
      <Text text={"2024 HIITFORYOU"} />
      <Link
        className="ml-11"
        link={"https://www.google.com"}
        text={"Privacy Policy"}
      />
    </span>
  </div>
);
