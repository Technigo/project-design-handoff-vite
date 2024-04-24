import footerLogoMobile from "../assets/logo-medium.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import vimeoIcon from "../assets/icon-vimeo.svg";

export const Footer = () => {
  return (
    <section className="flex flex-col items-center">
      <img src={footerLogoMobile} alt="Logo" />
      <ul className="flex flex-col items-center font-avengeance text-primary-darkblue">
        <li>Contact</li>
        <li>Find your local club</li>
        <li>Insurances</li>
        <li>Our Partners</li>
        <li>FAQ</li>
      </ul>
      <div className="flex gap-10">
        <img src={instagramIcon} alt="Instagram Icon" />
        <img src={vimeoIcon} alt="Vimeo Icon" />
        <img src={facebookIcon} alt="Facebook Icon" />
      </div>
      <div className="mt-4">
        <label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700" //Just random - should be changed
        ></label>
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Search"
          className="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 font-urbanist" //Just random - should be changed
        />
      </div>
    </section>
  );
};
