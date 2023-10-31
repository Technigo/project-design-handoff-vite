import { Download } from "./Download";
import { Info } from "./Info";
import { SocialMedia } from "./SocialMedia";
import { TermsPolicy } from "./TermsPolicy";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="boxes">
        <Download />
        <SocialMedia />
        <Info />
        <TermsPolicy />
      </div>
    </div>
  );
};
