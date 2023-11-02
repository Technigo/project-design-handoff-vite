import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings"

export const GetBendy = () => {
    const heading = "Get Bendy"
    return (
        <div>
            <MiddleSectionGetHeadings middleSectionGetHeading={heading} />
            <img className="w-screen mt-8" src="images/bendy.jpg" alt="woman in leather doing a vertical split with the help of a pole " />
        </div>
    )
}
