import { Image } from "../component/Image";
import { Link } from "../component/Link";
import { Text } from "../component/Text";

export const Footer = () => {
  return (
    <div>
      <div>
        <Image link={"/Images/globe.svg"} />

        <select name="English">
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
        </select>
      </div>
      <div>
        <Link link={"tel:+12345678900"} text={"Contact us"} />
        <Text text={"Social media"} />
      </div>
      <div>
        <Image link={"./Images/fblogo.svg"} />
        <Image link={"./Images/iglogo.svg"} />
        <Image link={"./Images/musicnotelogo.svg"} />
      </div>
      <div>
        <Link
          link={
            "https://www.google.com/maps/place/Runeberginkatu+44,+00260+Helsinki,+Finland/@60.1787071,24.9199486,17z/data=!3m1!4b1!4m6!3m5!1s0x46920a2fee40d711:0x93bacc713e0f6118!8m2!3d60.1787071!4d24.9225235!16s%2Fg%2F11c26fs5vb?entry=ttu"
          }
          text={"Runebergsgatan 44 Helsingfors"}
        />
      </div>
      <span>
        <Image link={"/Images/copyright.svg"} />
        <Text text={"2024 HIITFORYOU"} />
        <Link link={"https://www.google.com"} text={"Privacy Policy"} />
      </span>
    </div>
  );
};
