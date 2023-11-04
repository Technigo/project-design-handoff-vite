import "./Member.css";

export const Member = () => {
  return (
    <div className="member">
      <h2>Become A Member</h2>
      <div className="cards">
        <div className="card1">
          <h2>BRONZE</h2>
          <h2>80€/month</h2>
          <img src="./Images/Group.png" alt="Check" />
          <p>Limited access to 2 facilities of your choice</p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Open snack / soft drinks bar </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="card2">
          <h2>SILVER</h2>
          <h2>100€/month</h2>
          <img src="./Images/Group.png" alt="Check" />
          <p>Limited access to 3 facilities of your choice</p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Open snack / soft drinks bar </p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Switch between facilities every 3rd month</p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Given 2 invites a month </p>
          <button className="read-more-button">Read more</button>
        </div>
        <div className="card3">
          <h2>GOLD</h2>
          <h2>200€/month</h2>
          <img src="./Images/Group.png" alt="Check" />
          <p>Limited access to ALL facilities</p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Open snack / soft drinks bar </p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Private locker</p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Private parking space</p>
          <img src="./Images/Group.png" alt="Check" />
          <p>Given 4 invites a month</p>
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
};
