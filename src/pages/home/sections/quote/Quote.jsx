import "./Quote.css";
import { SquareImage } from "../../../../components/reusable/SquareImage";

export const Quote = () => {
  return (
    <section id="quote">
      <div className="page-wrapper">
        <p>
          ARE YOU LONGING FOR MORE? <br /> With a daily sacred morning practice
          you can connect to your inner well of creativity, energy and with that
          focus <br /> BUILD YOUR VISIONS!
        </p>
      </div>
      <div className="image-wrapper">
        <SquareImage imgUrl="./shakti.png" imgAlt="" isTwoImages={true} />
        <SquareImage imgUrl="./eyehands.png" imgAlt="" isTwoImages={true} />
      </div>
    </section>
  );
};
