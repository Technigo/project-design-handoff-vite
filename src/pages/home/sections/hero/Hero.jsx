import "./Hero.css";
import { Button } from "../../../../components/reusable/Button";
import { SpeechBubble } from "../../../../components/SpeechBubble";

export const Hero = () => {
  return (
    <section id="hero">
      <div className="imageOnBiggerScreens"><img src="./petra1.png" alt="" /></div>
      <div className="overlay"></div>
      <SpeechBubble hideOnBiggerScreens={true}/>
      <div className="hero-wrapper">
        <h1 className="title">Sat nam, hi!</h1>
        <p>
          My name is Petra <br /> and I am teaching you to <br /> connect all
          aspects of yourself <br /> with your higher self and the Divine by
          using Kundalini Yoga on a daily basis. We call it Sadhana.
        </p>
        <Button
          path="/about"
          classNameContainer="satnam-btn-wrapper"
          textContent="Sat nam, I want more"
          ariaLabel="Click to learn more"
        />
      </div>
    </section>
  );
};
