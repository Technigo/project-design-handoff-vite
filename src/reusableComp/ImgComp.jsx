export const ImgComp = ({ sectionClassName, elementClassName, ImageAltText, imagePath }) => {
    return (
        <section className={sectionClassName}>
            <img 
            className={elementClassName} 
            src={imagePath} 
            alt={ImageAltText} />
        </section>
    );
};