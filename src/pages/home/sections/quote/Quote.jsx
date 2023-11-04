import "./Quote.css";

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
        <div className="flex-image">
          <div className="square-image-container">
            <img src="./shakti.png" alt="" />
          </div>
          <div className="square-image-container">
            <img src="./eyehands.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
