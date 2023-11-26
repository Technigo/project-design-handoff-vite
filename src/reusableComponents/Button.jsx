export const Button = ({ label, className, imageSrc, imgClass }) => {

  return (
    <button className={className} >
      <div className="button-content">
      {/* If imageSrc exists, renders the image */}
        {imageSrc && <img src={imageSrc} alt={label} className={imgClass} />}  
        <span>{label}</span>
      </div>
    </button>
  );
};
