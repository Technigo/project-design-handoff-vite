import { GetBendy } from "./reusable components/GetBendy"
import { GetStrong } from "./reusable components/GetStrong"
import { CircleGetVertical } from "./reusable components/circleGetVertical"

export const MiddleSectionGet = () => {
    return (
        <div className="flex flex-col items-center">
            <GetStrong />
            <GetBendy />
            <CircleGetVertical />
        </div>
    )
}
