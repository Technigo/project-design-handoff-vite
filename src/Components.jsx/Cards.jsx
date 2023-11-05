import "./Cards.css";

export const Cards = () => {
  return (
    <div>
      <div className="backgrounds">
        <img className="hand" src="./Images/Hand.png" alt="Info card" />
        <img className="view" src="./Images/Rectangle348.png" alt="Info card" />
        <div className="hand-text">
          <h2>$1.13 million</h2>
          <p>
            Americans spend $1.13 million <br /> on unused gym memberships{" "}
            <br />
            annually.
          </p>
          <h2>$1.9 billion</h2>
          <p>
            Australians are wasting $1.9 billion <br /> per year on unused gym
            <br />
            memberships
          </p>
          <h2>£4 billion</h2>
          <p>
            Britons waste more than £4 billion <br /> a year on unused gym
            <br />
            memberships
          </p>
        </div>
        <div className="view-text">
          <h2>
            So much money is being tossed <br />
            away for nothing.
          </h2>
          <h2>
            We want to <span className="yellow">change it.</span>
          </h2>
          <img src="./Images/Line5.png" alt="White line" />
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
};
