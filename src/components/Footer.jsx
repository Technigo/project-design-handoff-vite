import footerLogoMobile from "../assets/logo-medium.svg";
import footerLogoDesktop from "../assets/logo-large.svg";
import facebookIcon from "../assets/icon-facebook.svg";
import instagramIcon from "../assets/icon-instagram.svg";
import vimeoIcon from "../assets/icon-vimeo.svg";

{
  /* <picture>
  <source media="(min-width: 1024px)" srcSet={navbarLogoLg} />
  <source media="(min-width: 768px)" srcSet={navbarLogoMd} />
  <img src={navbarLogoSm} />
</picture>; */
}

export const Footer = () => {
  return (
    <section className="flex flex-col">
      <img src={footerLogoMobile} alt="Logo" className="mb-5 h-14 lg:mb-20" />
      <ul className="flex flex-col items-center font-avengeance text-primary-darkblue gap-8 text-xs mb-10 lg:flex-row lg:justify-center">
        <li>
          <a href="">Contact</a>
        </li>
        <li>
          <a href="">Find your local club</a>
        </li>
        <li>
          <a href="">Insurances</a>
        </li>
        <li>
          <a href="">Our Partners</a>
        </li>
        <li>
          <a href="">FAQ</a>
        </li>
      </ul>
      <div className="flex flex-col items-center md:flex md:flex-row md:justify-between lg:justify-center">
        <div className="flex gap-8 mb-10 md:order-last">
          <a href="">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
          <a href="">
            <img src={vimeoIcon} alt="Vimeo Icon" />
          </a>
          <a href="">
            <img src={facebookIcon} alt="Facebook Icon" />
          </a>
        </div>
        <div>
          <label htmlFor="search"></label>
          <input
            type="text"
            id="search"
            name="search"
            placeholder="Search"
            className="px-2 py-2 w-40 h-10 border-2 border-primary-violetblue rounded-2xl focus:outline-none focus:border-primary-mediumpink font-urbanist shadow-inputShadow placeholder-primary-darkblue bg-transparent text-sm lg:hidden"
          />
        </div>
      </div>
    </section>
  );
};
