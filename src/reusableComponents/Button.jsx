
export const Button = ({ label, path, className, imageSrc, imgClass }) => {
  const handleClick = () => {
    // Perform redirection upon button click
    window.location.href = path; // Use the path provided as a property
  };

  return (
    <button className={className} onClick={handleClick}>
      <div className="button-content">
        <img src={imageSrc} alt={label} className={imgClass} />
        <span>{label}</span>
      </div>
  </button>
  );
};