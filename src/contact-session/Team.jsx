import { Profile } from "../components/Profile";
import "/src/contact-session/team.css";
export const Team = () => {
  return (
    <>
      <div className="about-us">
        <h1>We are Mini Flow</h1>
        <img src="./src/assets/icon/laughing_150.svg" alt="playful" />
        <h2>Playful</h2>
        <p>
          Feel the joy of movement when laughter and learning intertwine in a
          our world of imagination and fun!
        </p>
        <img src="./src/assets/icon/team_150.svg" alt="adaptable" />
        <h2>Adaptable</h2>
        <p>
          We adapt all of our yoga sessions to suit every kid’s uniqueness,
          ensuring an inclusive experience for all.
        </p>
        <img src="./src/assets/icon/namaste_150.svg" alt="Mindful" />
        <h2>Mindful</h2>
        <p>
          Experience the magic of mindful-ness, as kids learn to connect with
          their bodies and thoughts.
        </p>
      </div>
      <div className="team">
        <Profile url="./src/assets/img/Lisanne.png" />
        <h1>Lisanne</h1>
        <p>
          Truely believes that all kids should try yoga. That’s why she started
          MINI FLOW. Oh, and loves rhyming too!
        </p>
        <Profile url="./src/assets/img/ted.avif" />
        <h1>Ted</h1>
        <p>
          Is crazy about dinosaurs. That’s why you shouldn’t be surprised if
          your kid comes home roaring like one!
        </p>
        <Profile url="./src/assets/img/kaya.avif" />
        <h1>Kaya</h1>
        <p>
          Loves a good weird dance party. “Dancing is the best way for a child
          to express their emotions, always!”
        </p>
      </div>
      <img src="./src/assets/icon/illustration5.svg" alt="Mindful" />
    </>
  );
};
