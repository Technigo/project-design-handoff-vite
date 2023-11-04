export const WhoWhatWhy = () => {
    const wwwArray = [
        {
            header: "Who we are",
            text: "Think of FamilyFitness as a good friend. We are here for you when you need us, to help you reach your goals and keep them, even in a busy everyday life.",
            image: "/www/who.png",
            picOnLeft: false
        },
        {
            header: "What we do",
            text: "By offering friendly and accessible training facilities, we increase the chance that families will have the opportunity to take care of their physical and mental health.",
            image: "/www/what.png",
            picOnLeft: true
        },
        {
            header: "Why we do it",
            text: "We know that families of all sorts, is important in combating loneliness. FamiliyFitness is a tool that all families can use to take care of their members. ",
            image: "/www/why.png",
            picOnLeft: false
        }
    ]

    return(
        <div className="grid-parent">
            <div className="who-what-why section">
                {wwwArray.map((item,index) => (
                    <div key={index} className="www-card">
                        {item.picOnLeft && <img className="www-pic pic-on-left" src={item.image} />}

                        <div className="www-text">
                            <h3>{item.header}</h3>
                            <p>{item.text}</p>
                        </div>
                        
                        {!item.picOnLeft && <img className="www-pic pic-on-right" src={item.image} />}
                    </div>
                    ))}
            </div>
        </div>
    )
}