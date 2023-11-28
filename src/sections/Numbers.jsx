import "./numbers.css"
export const Numbers = () => {
    const numbersArray = [
        {
            number: "350",
            text: "Centres all over scandinavia",
            key: "centres"
        },
        {
            number: "500 000",
            text: "Members",
            key: "members"
        },
        {
            number: "1 500",
            text: "Varied group classes",
            key: "classes"
        }
    ]

    return (
        <div className="grid-parent dark-blue">
            <div className="numbers section">
                {numbersArray.map((item) => (
                    <div className="numbers-container" key={item.key}>
                        <p className="number-number">
                            {item.number}
                        </p>
                        <p className="number-text">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}