import heroImg from "/assets/hero.png";
import registerButton from "/assets/register-button01.png";

export const Hero = () => {
  return (
    <div>
      <img src={heroImg}></img>
      <h3>YOUNG HEROES, BIG HEARTS</h3>
      <h2>We empower girls to find their inner dragons through karate.</h2>
      <button>
        <img src={registerButton} />
      </button>
    </div>
  );
};
