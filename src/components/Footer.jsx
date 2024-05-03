import iconFacebook from "/icon-facebook.svg";
import iconGlobe from "/icon-globe.svg";
import iconInstagram from "/icon-instagram.svg";

export const Footer = () => {
  return (
    <div className="bg-amber">
      <section className=" text-darkBlue py-8 flex flex-col p-3 gap-6 max-w-xs md:max-w-lg mx-auto md:gap-10 lg:max-w-w850 lg:text-3xl">
        <div className="flex flex-col gap-7 text-lg py-4 md:gap-3">
          <a>Mitt konto</a>
          <a>Kontakta kundservice</a>
          <a>Om Studio Mamma</a>
          <a>Bli medlem</a>
          <a>Cookies-inställningar</a>
          <a>Allmänna villkor</a>
        </div>
        <footer className="flex flex-row justify-between h-10 md:h-16 lg:h-24">
          <div className="flex justify-center flex-row gap-5 items-center">
            <img className="h-10 md:h-16 lg:h-24 cursor-pointer" src={iconGlobe} alt="globe-icon" />
            <h2 className="font-bold text-center text-lg lg:text-6xl">Sweden</h2>
          </div>
          <div className="flex flex-row self-end gap-5">
            <img className="h-10 md:h-16 lg:h-24 cursor-pointer " src={iconInstagram} alt="instagram-icon" />
            <img className="h-10 md:h-16 lg:h-24 cursor-pointer" src={iconFacebook} alt="facebook-icon" />
          </div>
        </footer>
      </section>
    </div>
  );
};
