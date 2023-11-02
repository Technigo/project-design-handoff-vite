/* eslint-disable react/prop-types */
export const MiniFitComp = ({ image, caption, link }) => {
    return (
        <>
            <div>
                <img src={image} />
                <p className="mini-fit-caption">{caption}</p>
                <a href="">{link}</a>
            </div>
        </>
    )
}