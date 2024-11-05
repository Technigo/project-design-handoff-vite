export const ValueImg = ({ image, alt }) => {
    return (
      <img
        src={image}
        alt={alt}
        className="rounded-[10px] h-[143px] w-[312px] md:h-[210px] md:w-[245px] lg:h-[411px] lg:w-[481px]"
      />
    );
  };