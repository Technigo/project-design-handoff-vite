

export const MemberCard = ({ cardData }) => {
    const { title, subtitle, icon, content1, content2, content3, content4, content5, buttonText } = cardData;

    return (
        <div className="text-center w-auto">
            <h2 className="border-4 text-white border-white bg-white h-44 mx-10 bg-opacity-50 text-3xl lg:text-6xl rounded-t-lg pt-10">{title}</h2>
            <div className="h-64 w-auto mx-10 bg-white rounded-b-lg pt-10 text-left pl-10">
                {subtitle && <p>{subtitle}</p>}
                {icon && <img src={icon} alt={title} />}
                {content1 && <p>{content1}</p>}
                {content2 && <p>{content2}</p>}
                {content3 && <p>{content3}</p>}
                {content4 && <p>{content4}</p>}
                {content5 && <p>{content5}</p>}
            </div>
            <button className="bg-white border-solid border-2 border-black p-2">{buttonText}</button>
        </div>
    );
};



