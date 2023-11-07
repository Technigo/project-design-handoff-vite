import "../Typography/typography.css"

export const PText = ({ text, className }) => {
    return (
        <p className={`${className}`}>
            {text}
        </p>
    )
}

