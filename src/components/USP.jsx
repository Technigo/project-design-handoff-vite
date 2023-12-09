/* eslint-disable react/prop-types */
export const USP = ({ icon, text, link, rotation }) => {
    return(
        <div className="usp-container">
            <img className={`usp-icon ${rotation}`} src={icon} />
            <p className="usp-text">{text}</p>
            <a>{link}</a>
        </div>
    )
}