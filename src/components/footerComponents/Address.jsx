import AtIconSmall from "../../assets/icons/at-icon-small.svg";
import AtIconLarge from "../../assets/icons/at-icon-large.svg";
import LetterIconSmall from "../../assets/icons/letter-icon-small.svg";
import LetterIconLarge from "../../assets/icons/letter-icon-large.svg";
import PhoneIconSmall from "../../assets/icons/phone-icon-small.svg";
import PhoneIconLarge from "../../assets/icons/phone-icon-large.svg";

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
    <section className="hidden flex-col gap-[4px] text-base md:flex lg:gap-1">
      <div className="flex items-start gap-[25px] lg:pt-[36px]">
        <img
          src={letterIconSource.small}
          alt="letter icon"
          srcSet={`${letterIconSource.small} 744w, ${letterIconSource.large} 1440w`}
          className="mt-[6px] h-[20px] lg:h-[44px]"
        />
        <div className="flex flex-col">
          <h2 className="text-lg leading-tight lg:text-3xl">Postal address</h2>
          <p className="text-base leading-tight tracking-wider lg:text-[30px]">
            Streetname 10 <br />
            1234 56 City <br />
            Country
          </p>
        </div>
      </div>
      <div className="flex gap-[25px] align-middle">
        <img
          src={phoneIconSource.small}
          alt="phone icon"
          srcSet={`${phoneIconSource.small} 744w, ${phoneIconSource.large} 1440w`}
          className="h-[20px] self-center lg:h-[44px]"
        />
        <a href="tel:+01761234567" className="lg:text-[30px]">
          0176 - 12 345 67
        </a>
      </div>
      <div className="flex gap-[25px]">
        <img
          src={atIconSource.small}
          alt="@ sign"
          srcSet={`${atIconSource.small} 744w, ${atIconSource.large} 1440w`}
          className="h-[20px] self-center lg:h-[44px]"
        />
        <a href="mailto:thezumbahall@outlook.com" className="lg:text-[30px]">
          thezumbahall@outlook.com
        </a>
      </div>
    </section>
  );
};
