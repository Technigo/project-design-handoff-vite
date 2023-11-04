import { GetBendy } from "./reusableComponents/GetBendy"
import { GetStrong } from "./reusableComponents/GetStrong"
import { CircleGetVertical } from "./reusableComponents/circleGetVertical"

export const MiddleSectionGet = () => {

    const imageRotation90 = (isImageInViewPort => ({
        transition: "all 0.4s ease-in-out",
        transform: isImageInViewPort ? "rotate(90deg)" : ""
    }))


    return (
        <div className="flex flex-col items-center">
            <GetStrong />
            <GetBendy />
            <CircleGetVertical getStyles={imageRotation90} />
        </div>
    )
}
