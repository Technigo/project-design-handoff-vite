import "./VisitUs.css";

export const VisitUs = () => {
  return (
    <div className="visit-us">
      <h2>Visit us</h2>
      <div className="cities">
        <p>Stockholm Tjärhovsgatan 4, 116 21 Stockholm</p>
        <p>Gothenburg Hisingsgatan 28, 417 03 Göteborg</p>
        <p>Oslo Rostockgata 66, 0194 Oslo, Norge</p>
        <p>New York 52 Irving Pl, New York, NY 10003, USA</p>
      </div>
      <div className="contact-us">
        <h2>Contact us</h2>
        <p>Email: support@groundzero.com</p>
        <p>Phone: +46 001 89 89 10</p>
      </div>
      <div>
        <img
          className="visit-image"
          src="./Images/Visit-us.png"
          alt="Visit us picture"
        />
      </div>
    </div>
  );
};
