export const Headings = ({ heading, contactEmail, street, zip, city }) => {
    return (
        <article>
            <h2>{heading}</h2>
            <p>{contactEmail}</p>
            <div className="address">
                <p>{street}</p>
                <p>{zip}</p>
                <p>{city}</p>
            </div>
        </article>
    )
}
