export const ValuePropsCard = ({
  subtitle,
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-primary-violetblue border-2 border-black rounded flex flex-col items-center shadow-boxShadow w-52">
      <img
        src={image}
        className="rounded-full object-cover border-solid border-2 border-black h-40 w-40 mt-6"
      ></img>
      <div className="flex flex-col items-center mt-2 mr-2 ml-2 mb-6">
        <h4 className="font-urbanistitalic font-medium text-primary-darkblue">
          {subtitle.toUpperCase()}
        </h4>
        <h3 className="font-avengeance text-primary-darkblue text-lg">
          {title}
        </h3>
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
    </div>
  );
};
