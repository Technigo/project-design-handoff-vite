import { useTranslation } from "react-i18next"

export const Buttons = () => {

    const { t } = useTranslation();
    const button = t("button", { returnObjects: true })

    const styledButtons = [
        {
            buttonId: 1,
            title: "Free class!",
            style: "rounded-[10px] bg-rose shadow-lg shadow-black-25 text-black text-xl font-raleway font-bold px-[37px] py-[13px] gap-2.5"
        },
        {
            buttonId: 2,
            title: "Our classes",
            style: "rounded-[10px] bg-dark shadow-lg shadow-black-25 text-white-btn text-xl font-raleway font-bold px-[37px] py-[13px] gap-2.5"
        },
    ]
    return (
        <div className="flex flex-row justify-around items-center md:flex-col md:min-width-max my-16 md:my-0 mx-auto gap-10">
            {styledButtons.map((styledButton, index) => (
                <button key={styledButton.buttonId} className={styledButton.style}>{button[index].textfree}</button>
            ))}
        </div>
    )
}
