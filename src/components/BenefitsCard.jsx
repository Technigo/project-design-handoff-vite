export const BenefitsCard = ({ title, description, link, images, symbols }) => {
  return (
    <div>
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={images.medium}
          alt="Karate girl"
        />
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
      <img src={symbols.small} alt="Heart" />
    </div>
  );
};
