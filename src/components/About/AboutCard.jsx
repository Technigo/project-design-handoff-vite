

export const AboutCard = ({ articleImage, imageAltText, studioCardText, headline, studio_employee }) => {
  return (
    <div className="about-card">
      <img src={articleImage} alt={imageAltText} className="about-card-image curved-image" />
      <div className="studio-info card-text">
        <p>{headline}</p>
        {studioCardText.map((text, index) => (
          <div key={index}>
            <p>{text}</p>
            {index < studioCardText.length - 1 && (
              <>
                <br />
                <br />
              </>
            )}
          </div>
        ))}
        <p>{studio_employee}</p>
      </div>
    </div>
  );
};

