import IgSmall from "../../assets/socialSVG/ig-icon-s.svg";
import IgMedium from "../../assets/socialSVG/ig-icon-m.svg";
import IgLarge from "../../assets/socialSVG/ig-icon-l.svg";
import FbSmall from "../../assets/socialSVG/fb-icon-s.svg";
import FbMedium from "../../assets/socialSVG/fb-icon-m.svg";
import FbLarge from "../../assets/socialSVG/fb-icon-l.svg";
import YtSmall from "../../assets/socialSVG/yt-icon-s.svg";
import YtMedium from "../../assets/socialSVG/yt-icon-m.svg";
import YtLarge from "../../assets/socialSVG/yt-icon-l.svg";

export const Social = () => {
  const socialIcons = [
    { name: "Instagram", small: IgSmall, medium: IgMedium, large: IgLarge },
    { name: "Facebook", small: FbSmall, medium: FbMedium, large: FbLarge },
    { name: "YouTube", small: YtSmall, medium: YtMedium, large: YtLarge },
  ];

  return (
    <section>
      <div className="flex flex-col">
        <h2 className="hidden md:block md:text-right md:text-lg md:leading-loose lg:text-3xl">
          Follow us !
        </h2>
        <div className="mt-[8px] flex flex-wrap justify-end gap-[18px] md:mt-[0px] lg:gap-[35px]">
          {socialIcons.map((icon) => (
            <img
              key={icon.name}
              src={icon.small}
              srcSet={`${icon.small} 340w, ${icon.medium} 744w, ${icon.large} 1440w`}
              alt={`${icon.name} Icon`}
              className="h-[30px] w-[30px] lg:h-[60px] lg:w-[60px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
