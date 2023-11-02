import "./InfoPage.css";

export const InfoPage = () => {
  return (
    <div className="breakfast">
      <h2>Breakfast</h2>
      <p>
        Start your day with our breakfast buffet starting from 5:00 AM,
        including a juice bar and a Protein Bar for post-workout energy.
      </p>
      <button className="read-more-button">Read more</button>
      <img src="./src/Images/Breakfast-1.png" alt="Breakfast image" />
      <img src="./src/Images/Breakfast-2.png" alt="Breakfast image" />

      <div className="gym">
        <img src="./src/Images/Gym-1.png" alt="Gym image" />
        <img src="./src/Images/Gym-2.png" alt="Gym image" />
        <h2>The Gym</h2>
        <p>
          Transform your fitness journey at our state-of-the-art gym, the newest
          machines, yoga area and an open snack bar.
        </p>
        <button className="read-more-button">Read more</button>
        <div className="co-working">
          <h2>Co-working</h2>
          <p>
            Elevate your productivity at our cutting-edge co-working space, an
            open space combined with private meeting areas, open fireplaces and
            much more.
          </p>
          <button className="read-more-button">Read more</button>
          <img src="./src/Images/Co-working.png" alt="Gym image" />
        </div>
      </div>
    </div>
  );
};
