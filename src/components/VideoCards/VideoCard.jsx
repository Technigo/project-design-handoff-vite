// This file contains the VideoCard component
export const VideoCard = ({ src, altText, time, title, name, type }) => {
    return (
        <article>
            <div>
                <img className={"video-img"} src={src} alt={altText} />
                <span id="time">{time}</span>
            </div>
            <h3>{title}</h3>
            <p id={"name"}>{name}</p>
            <p id={"type"}>{type}</p>
        </article>
    )
}
