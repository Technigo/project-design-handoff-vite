import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <img className="bubbles" src="Gym-bubble.png" alt="Gym bubble" />
      <img className="bubbles" src="Spa-1.png" alt="Spa bubble" />
      <img className="bubbles" src="Co-working.png" alt="Co work bubble" />
      <img
        className="bubbles"
        src="After-hours-1.png"
        alt="After hours bubble"
      />
      ;
      <div className="header-text">
        <h1>An elevated gym experience.</h1>
        <h1>
          Everything in <span class="yellow">one place.</span>
        </h1>
        <p>Up to 67 % of traditional gym memberships go completely unused.</p>
        <p>
          Many gyms build their business model on the bet that most people will
          stay home. We don’t.
        </p>
      </div>
      <img className="vector" src="Vector-2.png" alt="Line" />
    </div>
  );
};
