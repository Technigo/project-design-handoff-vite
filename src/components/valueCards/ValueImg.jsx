export const ValueImg = ({ image, alt }) => {
    return (
      <img
        src={image}
        alt={alt}
        className="rounded-[10px] sm:h-[143px] sm:w-[312px] md:h-[210px] md:w-[245px] lg:h-[411px] lg:w-[481px]"
      />
    );
  };