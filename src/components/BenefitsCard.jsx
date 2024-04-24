export const BenefitsCard = ({ title, description, link, images, symbols }) => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 668px)"
          srcSet={images.medium}
          alt="Karate girl"
        />
        <img
          src={images.small}
          alt="Karate girl"
          className="object-cover w-28 md:w-48 lg:w-80"
        />
      </picture>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href="">{link}</a>
      <picture>
        <source
          media="(min-width: 668px)"
          srcSet={symbols.medium}
          alt="Heart"
        />
        <img
          src={symbols.small}
          alt="Heart"
          className="object-fit max-h-56 w-12 md:w-20 lg:w-40 "
        />
      </picture>
    </div>
  );
};
