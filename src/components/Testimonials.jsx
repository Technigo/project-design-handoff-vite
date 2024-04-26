import waveMobile from "../assets/testimonials/wave-mobile.svg";
import waveTablet from "../assets/testimonials/wave-tablet.svg";
import waveDesktop from "../assets/testimonials/wave-desktop.svg";

export const Testimonials = () => {
  return (
    <div className="h-40 lg:h-64 relative overflow-x-scroll lg:overflow-hidden scroll-smooth lg:scroll-auto">
      <picture>
        <source
          media="(min-width: 668px)"
          srcSet={waveTablet}
          alt="Testimonials"
        />
        <source
          media="(min-width: 1024px)"
          srcSet={waveDesktop}
          alt="Testimonials"
        />
        <img
          src={waveMobile}
          className="h-40 lg:h-60 lg:w-full object-cover lg:object-cover object-left absolute overflow-visible"
          alt="Testimonials"
          // style={{ width: "100%", height: "auto", maxWidth: "none" }}
        />
      </picture>
      <div className="relative font-urbanistitalic text-primary-darkblue text-lg grid grid-cols-[190px_190px_190px_190px] lg:grid-cols-4 text-center items-center mx-4 md:mx-8 lg:px-28 lg:mx-0 gap-8 md:gap-14 lg:text-2xl size-full">
        <p>11 clubs in 7 cities within the Nordic region</p>
        <p>Winner of 2021 Best Sport Intiative for Kids </p>
        <p>Part or the JKA Sweden Group</p>
        <p>First Kids sport offering an app solution </p>
      </div>
    </div>
  );
};
