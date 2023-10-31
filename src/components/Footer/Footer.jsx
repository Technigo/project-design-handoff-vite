import { LogoLight } from "../ReusableComponents/Logo/LogoLight.jsx";
import { FollowUsIconsLight } from "../ReusableComponents/FollowUs/FollowUsIconsLight";
import { Translation } from "../Translation/Translation";
import { Copyright } from "./Copyright";

export const Footer = () => {
  return (
    <>
      <div>
        <LogoLight />
        <FollowUsIconsLight />
        <p>Terms & Conditions</p>
        <p>Privacy</p>
        <p>Accessibility</p>
      </div>
      <div className="language-copy">
        <Translation />
        <Copyright />
      </div>
    </>
  );
};
