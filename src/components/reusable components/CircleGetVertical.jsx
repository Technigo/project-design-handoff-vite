import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings"

export const CircleGetVertical = () => {
    const heading = "Get vertical"
    return (
        <>
            <img className="rounded-full mt-12 mb-[60px]" src="images/circle31.png" alt="young man hanging horizontally with feet hanging on pole" />
            <MiddleSectionGetHeadings middleSectionGetHeading={heading} />
        </>
    )
}
