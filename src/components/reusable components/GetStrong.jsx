import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings"

export const GetStrong = () => {
    const heading = "Get Strong"
    return (
        <>
            <MiddleSectionGetHeadings middleSectionGetHeading={heading} />
            <img className="w-screen mt-16 -scale-x-100" src="images/polePoel.png" alt="a man with a hoodie hanging from a pole horizontally with the help of his hands" />
        </>
    )
}
