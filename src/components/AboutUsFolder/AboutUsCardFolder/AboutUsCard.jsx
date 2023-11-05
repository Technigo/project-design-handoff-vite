import "./AboutUsCard.css";
import aboutcardOne from "../../../assets/images/aboutcard1.png";
import aboutcardTwo from "../../../assets/images/aboutcard2.png";
import aboutcardThree from "../../../assets/images/aboutcard3.png";

export const AboutUsCard = () => {
  return (
    <div className="about-card-container">
      <div className="about-card">
        <div className="text-frame">
          <h3>Who we are</h3>
          <p>
            Think of FamilyFitness as a good friend. We are here for you when
            you need us, to help you reach your goals and keep them, even in a
            busy everyday life.
          </p>
        </div>
        <img src={aboutcardOne} />
      </div>

      <div className="about-card">
        <img src={aboutcardTwo} />
        <div className="text-frame">
          <h3>What we do</h3>
          <p>
            By offering friendly and accessible training facilities, we increase
            the chance that families will have the opportunity to take care of
            their physical and mental health.
          </p>
        </div>
      </div>

      <div className="about-card">
        <div className="text-frame">
          <h3>Why we do it</h3>
          <p>
            We know that families of all sorts, is important in combating
            loneliness. FamiliyFitness is a tool that all families can use to
            take care of their members.
          </p>
        </div>
        <img src={aboutcardThree} />
      </div>
    </div>
  );
};
