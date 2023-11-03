/* eslint-disable react/prop-types */
export const MiniFitComp = ({ image, caption, link }) => {
    return (
        <>
            <div>
                <img className="mini-fit-pic" src={image} />
                <p className="mini-fit-caption">{caption}</p>
                <a href="">{link}</a>
            </div>
        </>
    )
}