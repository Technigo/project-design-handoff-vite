import { useTranslation } from "react-i18next"
import { MiddleSectionGetHeadings } from "./MiddleSectionGetHeadings"
import { useIsInViewport } from "./useIsInViewport"
import { useRef } from "react"

export const CircleGetVertical = (getStyles) => {

    const { t } = useTranslation()
    const middleSection = t("middleSection", { returnObjects: true })

    const elementRef = useRef();
    const isInViewPort = useIsInViewport(elementRef);

    const heading = t(middleSection.vertical)

    return (
        <div>
            <img className="rounded-full mt-12 mb-[60px]" style={getStyles(isInViewPort)} ref={elementRef} src="images/circle31.png" alt="young man hanging horizontally with feet hanging on pole" />
            <MiddleSectionGetHeadings middleSectionGetHeading={heading} />
        </div>
    )
}

CircleGetVertical.propTypes = {
    getStyles: propTypes.func.isRequired
}
