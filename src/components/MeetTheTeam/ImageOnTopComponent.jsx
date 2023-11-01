export const ImageOnTopComponent = ({ src, name, altText, description }) => {
    return (
        <section>
            <img src={src} alt={altText} />
            <h3>{name}</h3>
            <p>{description}</p>
        </section>
    )
}
