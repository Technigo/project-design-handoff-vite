import "./About.css";
import { VisitUs } from "./VisitUs";

export const About = () => {
  return (
    <div>
      <ul>
        <button className="home-button"></button>
        <div className="navbar-buttons">
          <button onClick={() => (window.location.href = "/about")}>
            About us
          </button>
          <button onClick={() => (window.location.href = "/membership")}>
            Membership
          </button>
          <button onClick={() => (window.location.href = "/facilities")}>
            Facilities
          </button>
          <button onClick={() => (window.location.href = "/opening-hours")}>
            Opening Hours
          </button>

          <button className="sign-in-button">Sign in</button>
          <button>Swedish/English</button>
        </div>
      </ul>
      <div className="about">
        <h1 className="what-we-do">What we do</h1>
        <h2 className="background">BACKGROUND </h2>
        <div className="first-text">
          <p>
            Many gyms build their business model on the bet that most people
            will stay home. We don’t.
          </p>
          <div className="about-text">
            <p>
              Many business models that profit from unused gym memberships often
              rely on the concept of 'over-subscription.' These businesses
              understand that a significant portion of their members won't use
              the gym regularly or at all. They can offer lower prices or
              attractive signup deals “to get more people through the door.” Or
              not. This strategy allows them to generate more revenue than they
              would if everyone used the gym frequently. It's essentially a
              gamble on people's intentions and motivation.
            </p>
            <p>
              At GroundZero, we're breaking the mold of the 'unused gym
              membership' business model. We believe in delivering real value
              for your money. While wanting to offer you a place to workout,
              relax, socialise and network. Besides The Gym, we offer Breakfast,
              Co-working, Spa/ Wellness, and After-hours access. And since we
              know life isn’t black and white, you can tailor your membership to
              your preferences. Access them all or mix and match. Our goal is to
              make sure your time with us is productive and enjoyable.
            </p>
          </div>
        </div>
      </div>
      <div>
        <VisitUs />
      </div>
    </div>
  );
};
