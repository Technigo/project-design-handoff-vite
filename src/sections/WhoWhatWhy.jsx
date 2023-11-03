export const WhoWhatWhy = () => {
    const wwwArray = [
        {
            header: "Who we are",
            text: "Think of FamilyFitness as a good friend. We are here for you when you need us, to help you reach your goals and keep them, even in a busy everyday life.",
            image: "/www/who.png"
        },
        {
            header: "What we do",
            text: "By offering friendly and accessible training facilities, we increase the chance that families will have the opportunity to take care of their physical and mental health.",
            image: "/www/what.png"
        },
        {
            header: "Why we do it",
            text: "We know that families of all sorts, is important in combating loneliness. FamiliyFitness is a tool that all families can use to take care of their members. ",
            image: "/www/why.png"
        }
    ]

    return(
        <div className="grid-parent">
            <div className="who-what-why section"> WHO WHAT WHY
            </div>
        </div>
    )
}