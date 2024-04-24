export const ValuePropsCard = ({
  subtitle,
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-primary-violetblue border-2 border-black rounded flex flex-col items-center shadow-boxShadow border-cardBorder w-52 h-80">
      <img
        src={image}
        className="rounded-full w-40 h-40 object-cover border-solid border-2 border-black"
      ></img>
      <h4 className="font-urbanistitalic font-medium text-primary-darkblue">
        {subtitle.toUpperCase()}
      </h4>
      <h3 className="font-avengeance text-primary-darkblue text-lg">{title}</h3>
      <p className="font-urbanist text-primary-darkblue text-sm text-center">
        {description}
      </p>
      <a
        href={link}
        className="font-urbanist text-primary-darkblue text-sm font-semibold"
      >
        More
      </a>
    </div>
  );
};
