import "./typography.css"

export const H2_Headline = ({ h2_headline, className }) => {
    return (
        <h2 className={`h2-headline ${className}`}>
            {h2_headline}
        </h2>
    )
}

