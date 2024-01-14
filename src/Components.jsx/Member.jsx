import "./Member.css";

export const Member = () => {
  return (
    <div className="member">
      <h1 className="become-a-member">Become A Member</h1>
      <div className="cards">
        <div className="card1">
          <h2 className="member-title">BRONZE</h2>
          <h2>80€/month</h2>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Limited access to 2 facilities of your choice</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Open snack / soft drinks bar </p>
          </div>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="card2">
          <h2 className="member-title">SILVER</h2>
          <h2>100€/month</h2>

          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Limited access to 3 facilities of your choice</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Open snack / soft drinks bar </p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Switch between facilities every 3rd month</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Given 2 invites a month </p>
          </div>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="card3">
          <h2 className="member-title">GOLD</h2>
          <h2>200€/month</h2>

          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Limited access to ALL facilities</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Open snack / soft drinks bar </p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Private locker</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Private parking space</p>
          </div>
          <div className="icon-text">
            <img src="Group.png" alt="Check" />
            <p>Given 4 invites a month</p>
          </div>
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
};
