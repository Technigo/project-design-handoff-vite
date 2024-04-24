import footerLogoMobile from "../assets/logo-medium.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import vimeoIcon from "../assets/icon-vimeo.svg";

export const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <img src={footerLogoMobile} alt="Logo" className="mb-5" />
      <ul className="flex flex-col items-center font-avengeance text-primary-darkblue gap-8 text-xs mb-10">
        <li>Contact</li>
        <li>Find your local club</li>
        <li>Insurances</li>
        <li>Our Partners</li>
        <li>FAQ</li>
      </ul>
      <div className="flex gap-8 mb-10">
        <img src={instagramIcon} alt="Instagram Icon" />
        <img src={vimeoIcon} alt="Vimeo Icon" />
        <img src={facebookIcon} alt="Facebook Icon" />
      </div>
      <div>
        <label htmlFor="search"></label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="px-2 py-2 w-40 h-10 border-2 border-primary-violetblue rounded-2xl focus:outline-none focus:border-primary-mediumpink font-urbanist shadow-inputShadow placeholder-primary-darkblue"
        />
      </div>
    </section>
  );
};
