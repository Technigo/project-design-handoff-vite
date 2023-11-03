import { Button } from "../Links/Button";
import "./text-image-component.css";

// Component for the section that shows an image on one side and text on the other
export const TextImageComponent = ({
    imageOnLeft = true, // imageOnLeft is a prop that defaults to true, by setting this to false when it mouts, the section renders different looks
    src,
    altText,
    textImageHeading,
    textImageParagraph,
    linkTo,
    className,
    textImageButton,
}) => {

    return (
        <section className={`text-image-block ${imageOnLeft ? "image-on-left" : "image-on-right"}`}>
            {/* The image will be on the left if imageOnLeft is true, otherwise it will be on the right */}
            <div className="content">
                {imageOnLeft && (
                    <img src={src} alt={altText} />
                )}
                <article className="text-image-block-text">
                    <h2>{textImageHeading}</h2>
                    <p>{textImageParagraph}</p>
                    <div className="button-container">
                        <Button linkTo={linkTo} className={className} text={textImageButton} />
                    </div>
                </article>
            </div>
            {/* Image will be to the right, when left "isn't true" */}
            {!imageOnLeft && (
                <img src={src} alt={altText} />
            )}
        </section>
    );
};
