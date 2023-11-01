import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="bubbles"
        src="./src/Images/Gym-bubble.png"
        alt="Gym bubble"
      />
      <img className="bubbles" src="./src/Images/Spa-1.png" alt="Spa bubble" />
      <img
        className="bubbles"
        src="./src/Images/Co-working.png"
        alt="Co work bubble"
      />
      <img
        className="bubbles"
        src="./src/Images/After-hours-1.png"
        alt="After hours bubble"
      />
      ;
      <div className="header-text">
        <h1>An elevated gym experience.</h1>
        <h1>Everything in one place. </h1>
        <p>
          An elevated gym experience. Everything in one place. Up to 67 % of
          traditional gym memberships go completely unused.{" "}
        </p>
        <p>
          Many gyms build their business model on the bet that most people will
          stay home. We don’t.
        </p>
      </div>
    </div>
  );
};
