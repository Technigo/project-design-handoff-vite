import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings"
import { useTranslation } from "react-i18next";

export const GetStrong = () => {

    const { t } = useTranslation();
    const middleSection = t("middleSection", { returnObjects: true })

    const heading = t(middleSection.strong)
    return (
        <>
            <MiddleSectionGetHeadings middleSectionGetHeading={heading} />
            <img className="w-screen mt-16 -scale-x-100" src="images/polePoel.png" alt="a man with a hoodie hanging from a pole horizontally with the help of his hands" />
        </>
    )
}
