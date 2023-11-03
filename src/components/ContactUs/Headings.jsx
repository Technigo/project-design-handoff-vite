export const Headings = ({ heading, contactEmail, street, zip, city }) => {
    return (
        <article>
            <h2 className="contact-us-heading">{heading}</h2>
            <p className="contact-email"><a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
            <div className="address">
                <p>{street}</p>
                <p>{zip}</p>
                <p>{city}</p>
            </div>
        </article>
    )
}
