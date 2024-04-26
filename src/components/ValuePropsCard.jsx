export const ValuePropsCard = ({
  subtitle,
  title,
  description,
  image,
  link,
}) => {
  return (
    <div className="bg-primary-valupropsviolet border-half border-black rounded-md p-6 lg:p-6 flex flex-col items-center shadow-boxShadow min-w-52 w-52 lg:min-w-64 lg:w-64 ">
      <img
        src={image}
        alt="Image of girls doing karate"
        className="rounded-full object-cover border-solid border border-black h-40 w-40 lg:h-48 lg:w-48"
      ></img>
      <div className="flex flex-col items-center mt-2 ">
        <h3 className="font-urbanistitalic font-medium text-primary-darkblue lg:text-xl">
          {subtitle.toUpperCase()}
        </h3>
        <h4 className="font-avengeance text-primary-darkblue text-lg lg:text-2xl leading-5">
          {title}
        </h4>
        <p className="font-urbanist text-primary-darkblue text-sm text-center lg:text-lg">
          {description}
          <br></br>
          <a
            href={link}
            className="font-urbanist text-primary-darkblue text-sm font-semibold lg:text-lg"
          >
            More
          </a>
        </p>
      </div>
    </div>
  );
};
