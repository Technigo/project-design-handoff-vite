export const ValuePropsCard = ({
  subtitle,
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-primary-valupropsviolet border-2 border-black rounded flex flex-col items-center shadow-boxShadow w-52 lg:w-64 lg:h-96">
      <img
        src={image}
        className="rounded-full object-cover border-solid border-2 border-black h-40 w-40 mt-6 lg:h-48 lg:w-48"
      ></img>
      <div className="flex flex-col items-center mt-2 mr-2 ml-2 mb-6">
        <h4 className="font-urbanistitalic font-medium text-primary-darkblue lg:text-xl">
          {subtitle.toUpperCase()}
        </h4>
        <h3 className="font-avengeance text-primary-darkblue text-lg lg:text-2xl">
          {title}
        </h3>
        <p className="font-urbanist text-primary-darkblue text-sm text-center lg:text-lg">
          {description}
        </p>
        <a
          href={link}
          className="font-urbanist text-primary-darkblue text-sm font-semibold lg:text-lg"
        >
          More
        </a>
      </div>
    </div>
  );
};
