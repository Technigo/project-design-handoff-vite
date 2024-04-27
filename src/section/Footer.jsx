import { Image } from "../component/Image";
import { Link } from "../component/Link";
import { Text } from "../component/Text";

export const Footer = () => {
  return (
    // <div className="bg-aqua">
    <div className="w-screen bg-aqua ">
      <div className="flex flex-col mx-9 md:mx-69 font-inter text-base font-bold gap-y-2.5 pb-10 xl:mx-117 2xl:mx-117">
        <div className="flex flex-row gap-8 border border-black cursor-pointer rounded-full w-44 mt-1.5  md:mt-18">
          <Image link={"/Images/globe.svg"} />

          <select className="appearance-none bg-transparent  select-custom">
            <option value="es">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="it">Italian</option>
          </select>
        </div>

        <Link link={"tel:+12345678900"} text={"Contact us"} />
        <Text text={"Social media"} />

        <div className="flex gap-3 ">
          <Image link={"./Images/fblogo.svg"} />
          <Image link={"./Images/iglogo.svg"} />
          <Image link={"./Images/tiktoklogo.svg"} />
        </div>
        <div>
          <Link
            link={
              "https://www.google.com/maps/place/Runeberginkatu+44,+00260+Helsinki,+Finland/@60.1787071,24.9199486,17z/data=!3m1!4b1!4m6!3m5!1s0x46920a2fee40d711:0x93bacc713e0f6118!8m2!3d60.1787071!4d24.9225235!16s%2Fg%2F11c26fs5vb?entry=ttu"
            }
            text={"Runebergsgatan 44 Helsingfors"}
          />
        </div>
        <span className="flex text-xs gap-x-1 mb-7 md:pb-21">
         
          <Image link={"/Images/copyright.svg"} />
          <Text text={"2024 HIITFORYOU"} />
          <Link
            className="ml-10"
            link={"https://www.google.com"}
            text={"Privacy Policy"}
          />
        </span>
      </div>
    </div>
    // </div>
  );
};
