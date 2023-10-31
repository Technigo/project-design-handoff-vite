export const VideoCard = ({ time, title, name, type }) => {
    return (
        <article>
            <div>
                <img src="./assets/images/yoga-studio-image1.jpg" alt="Image of Avery doing Vinyasa Flow" />
                <p>{time}</p>
            </div>
            <p>{title}</p>
            <p>{name}</p>
            <p>{type}</p>
        </article>
    )
}
