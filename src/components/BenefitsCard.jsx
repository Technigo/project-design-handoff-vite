export const BenefitsCard = ({ title, description, link, images, symbols }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-[120px_auto] md:grid-cols-[192px_auto_80px] lg:grid-cols-[320px_auto_160px] md:container gap-6 min-h-44 md:min-h-48 relative">
      <picture className="">
        <source
          media="(min-width: 668px)"
          srcSet={images.medium}
          alt="Karate girl"
        />
        <img
          src={images.small}
          alt="Karate girl"
          className="object-fit md:w-48 lg:w-80 border-2 border-red"
        />
      </picture>
      <div className="md:self-center md:flex md:flex-col md:gap-4 ">
        <h3 className="font-avengeance text-primary-darkblue text-lg lg:text-2xl">
          {title}
        </h3>
        <p className="font-urbanist text-primary-darkblue text-sm lg:text-lg">
          {description}
        </p>
        <a href="" className="font-avengeance text-primary-mediumred">
          {link}
        </a>
      </div>
      <picture className="absolute md:static right-6 -bottom-3 md:self-center">
        <source
          media="(min-width: 668px)"
          srcSet={symbols.medium}
          alt="Symbol"
        />
        <img
          src={symbols.small}
          alt="Symbol"
          className="object-contain object-top h-20 md:h-28 lg:h-56 w-12 md:w-20 lg:w-40"
        />
      </picture>
    </div>
  );
};
