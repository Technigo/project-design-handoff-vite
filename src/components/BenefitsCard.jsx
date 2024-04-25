export const BenefitsCard = ({ title, description, link, images, symbols }) => {
  return (
    <div className="grid grid-rows-1 grid-cols-[120px_auto] md:grid-cols[192px_auto_80px] lg:grid-cols[320px_auto_160px] relative">
      <picture className="w-28 md:w-48 lg:w-80 border-2 border-red">
        <source
          media="(min-width: 668px)"
          srcSet={images.medium}
          alt="Karate girl"
        />
        <img src={images.small} alt="Karate girl" className="object-contain" />
      </picture>
      <div>
        <h3 className="font-avengeance text-primary-darkblue text-lg lg:text-2xl">
          {title}
        </h3>
        <p className="font-urbanist text-primary-darkblue text-sm lg:text-lg">
          {description}
        </p>
        <a href="" className="font-avengeance text-primary-mediumpink">
          {link}
        </a>
      </div>
      <picture className="absolute right-4 -bottom-9">
        <source
          media="(min-width: 668px)"
          srcSet={symbols.medium}
          alt="Heart"
        />
        <img
          src={symbols.small}
          alt="Heart"
          className="object-contain object-top h-20 lg:max-h-56 w-12 md:w-20 lg:w-40"
        />
      </picture>
    </div>
  );
};
