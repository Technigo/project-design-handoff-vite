import { BtnDark } from "../components/BtnDark";
import { Profile } from "../components/Profile";
import "/src/Landing-session/aboutMe.css";

export const AboutMe = () => {
  return (
    <div className="aboutMe">
      <h1>Hi everyone! I'm Lisanne, the founder of MINI FLOW</h1>
      <p>
        For me, kids yoga is about finding a balance between fun, play and
        mindfullness. My greatest joy in life is to see children develop and
        grow by using yoga as a tool. I'd love to help you find the best MINI
        FLOW yoga course for your kid. If you have any questions about kids yoga
        in general or have any feedback to give, let me know!
      </p>
      <BtnDark name="get in touch" />
      <Profile url="/src/assets/img/Lisanne.png" />
    </div>
  );
};
