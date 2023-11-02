export const Buttons = () => {
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
        <div className="flex flex-row justify-around items-center my-16 mx-auto gap-10">
            {styledButtons.map((styledButton) => (
                <button key={styledButton.buttonId} className={styledButton.style}>{styledButton.title}</button>
            ))}
        </div>
    )
}
