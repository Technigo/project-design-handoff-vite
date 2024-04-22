export const ValuePieces = ({
  image,
  alt,
  heading,
  valueContent1,
  valueContent2,
  valueContent3,
  spanContent,
  containerStyle,
  spanContent1,
  imageStyle,
  textStyle,
  readMoreStyle,
  svg
}) => {
  return (
    <div className={containerStyle}>
      <img src={image} alt={alt} className={imageStyle} />
      <div>
        <div className={textStyle}>
        <h5 className="ubuntu text-6xl text-white">{heading}</h5>
        <p className="ubuntu text-5xl text-white">
          {valueContent1}
          <span>{spanContent1}</span>
        </p>
        <p className="ubuntu text-5xl text-white">{valueContent2}</p>
        <p className="ubuntu text-5xl text-white">
          <span>{spanContent}</span>
          {valueContent3}
        </p>
      </div>
      <div className={readMoreStyle}>
        <p >Read more about it </p>
        <img src={svg} alt="yellow arrow" />
      </div>
      
      </div>
      
    </div>
  );
};
