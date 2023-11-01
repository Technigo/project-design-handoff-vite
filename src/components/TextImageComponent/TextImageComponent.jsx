import { Button } from "../Links/Button";
import "./text-image-component.css";

export const TextImageComponent = ({
    imageOnLeft = true, // imageOnLeft is a prop that defaults to true
    src,
    altText,
    textImageHeading,
    textImageParagraph,
    className,
    textImageButton,
}) => {

    return (
        <section className={imageOnLeft ? "image-on-left" : "image-on-right"}>
            {/* The image will be on the left if imageOnLeft is true, otherwise it will be on the right */}
            {imageOnLeft && (
                <img src={src} alt={altText} />
            )}
            <article>
                <h2>{textImageHeading}</h2>
                <p>{textImageParagraph}</p>
                <Button className={className} text={textImageButton} />
            </article>
            {/* Image will be to the right, when left "isn't true" */}
            {!imageOnLeft && (
                <img src={src} alt={altText} />
            )}
        </section>
    );
};
