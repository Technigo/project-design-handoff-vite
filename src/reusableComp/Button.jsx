export const Button = ({ className, btnURL, iconURL, imgAlt, btnText }) => {
    return (
        <a className={`button ${className}`} href={btnURL}>
            <img src={iconURL} alt={imgAlt} />
            {btnText}
        </a>
    )
}