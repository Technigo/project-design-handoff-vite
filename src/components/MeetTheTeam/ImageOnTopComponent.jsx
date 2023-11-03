// Component for the actual image/text combo that is mounted inside the MeetTheTeam component
export const ImageOnTopComponent = ({ src, name, altText, description }) => {
    return (
        <section className="individual-teacher-card">
            <img src={src} alt={altText} />
            <article className="teacher-card-text">
                <h3>{name}</h3>
                <p>{description}</p>
            </article>
        </section>
    )
}
