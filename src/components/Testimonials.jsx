import waveMobile from "../assets/testimonials/wave-mobile.svg";
import waveTablet from "../assets/testimonials/wave-tablet.svg";

export const Testimonials = () => {
  return (
    <div className="h-40 relative overflow-x-scroll scroll-smooth">
      <picture>
      <source
          media="(min-width: 668px)"
          srcSet={waveTablet}
          alt="Testimonials"
        />
        <img
          src={waveMobile}
          className="h-40 object-cover object-left absolute overflow-visible"
          // style={{ width: "100%", height: "auto", maxWidth: "none" }}
        />
      </picture>
      <div className="relative font-urbanistitalic text-primary-darkblue text-lg grid grid-cols-[190px_190px_190px_190px] text-center items-center mx-4 md:mx-8 lg:mx-28 gap-8 md:gap-14 lg:text-2xl size-full">
        <p>11 clubs in 7 cities within the Nordic region</p>
        <p>Winner of 2021 Best Sport Intiative for Kids </p>
        <p>Part or the JKA Sweden Group</p>
        <p>First Kids sport offering an app solution </p>
      </div>
    </div>
  );
};
