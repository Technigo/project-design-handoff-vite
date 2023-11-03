import { useTranslation } from "react-i18next"
import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings"

export const GetBendy = () => {
    const { t } = useTranslation();
    const middleSection = t("middleSection", { returnObjects: true })

    const heading = t(middleSection.bendy)

    return (
        <div>
            <MiddleSectionGetHeadings middleSectionGetHeading={heading} />
            <img className="w-screen mt-8" src="images/bendy.jpg" alt="woman in leather doing a vertical split with the help of a pole " />
        </div>
    )
}
