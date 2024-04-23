import AtIconSmall from "../assets/icons/at-icon-small.svg";
import AtIconLarge from "../assets/icons/at-icon-large.svg";
import LetterIconSmall from "../assets/icons/letter-icon-small.svg";
import LetterIconLarge from "../assets/icons/letter-icon-large.svg";
import PhoneIconSmall from "../assets/icons/phone-icon-small.svg";
import PhoneIconLarge from "../assets/icons/phone-icon-large.svg";

export const Address = () => {
  const atIconSource = {
    small: AtIconSmall,
    large: AtIconLarge,
  };
  const letterIconSource = {
    small: LetterIconSmall,
    large: LetterIconLarge,
  };
  const phoneIconSource = {
    small: PhoneIconSmall,
    large: PhoneIconLarge,
  };

  return (
    <section className="hidden flex-col text-base md:flex">
      <div className="flex gap-[25px]">
        <img
          src={letterIconSource.small}
          alt="letter icon"
          srcSet={`${letterIconSource.small} 744w, ${letterIconSource.large} 1440w`}
        />
        <div className="flex flex-col">
          <h2 className="text-lg">Postal address</h2>
          <p>Streetname 10</p>
          <p>1234 56 City</p>
          <p>Country</p>
        </div>
      </div>
      <div className="flex gap-[25px]">
        <img
          src={phoneIconSource.small}
          alt="phone icon"
          srcSet={`${phoneIconSource.small} 744w, ${phoneIconSource.large} 1440w`}
        />
        <a href="tel:+01761234567">0176 - 12 345 67</a>
      </div>
      <div className="flex gap-[25px]">
        <img
          src={atIconSource.small}
          alt="@ sign"
          srcSet={`${atIconSource.small} 744w, ${atIconSource.large} 1440w`}
        />
        <a href="mailto:thezumbahall@outlook.com">thezumbahall@outlook.com</a>
      </div>
    </section>
  );
};
